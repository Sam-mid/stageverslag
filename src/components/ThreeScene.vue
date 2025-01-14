<template>
  <div class="three-container" ref="threeContainer"></div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';

export default {
  name: 'ThreeScene',
  mounted() {
    this.initThree();
  },
  methods: {
    initThree() {
      const scene = new THREE.Scene();

      // Camera instellen
      const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
      );
      camera.position.set(0, 1.5, 5);

      // Renderer instellen
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.outputEncoding = THREE.sRGBEncoding;
      this.$refs.threeContainer.appendChild(renderer.domElement);

      // HDRI-belichting instellen
      const rgbeLoader = new RGBELoader();
      rgbeLoader.load(
          '/lights.hdr',
          (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping;

            // Gebruik PMREM voor betere belichting en verwijder artefacten
            const pmremGenerator = new THREE.PMREMGenerator(renderer);
            const envMap = pmremGenerator.fromEquirectangular(texture).texture;

            // HDRI-rotatie toepassen (met een helper voor CubeTextures)
            const cubeMapRotation = new THREE.Matrix4();
            cubeMapRotation.makeRotationY(Math.PI / 4); // Draai HDRI met 45 graden (of pas aan)
            envMap.matrixAutoUpdate = false;
            envMap.matrix = cubeMapRotation;

            // Zet de HDRI als omgevingsbelichting
            scene.environment = envMap;

            // Verhoog de HDRI-intensiteit om de verlichting te versterken
            scene.environment.intensity = 3; // Pas aan voor meer of minder helderheid

            // Vergeet niet om PMREM-generator op te ruimen
            pmremGenerator.dispose();
          },
          undefined,
          (error) => {
            console.error('Error loading HDR:', error);
            scene.background = null; // Zorg dat de achtergrond transparant blijft bij fouten
          }
      );

// Renderer-instellingen voor transparante achtergrond
      renderer.setClearColor(0x000000, 0); // Maak de achtergrond volledig transparant

// Ambient Light (voor zachtere algemene verlichting)
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Iets zwakkere ambient light
      scene.add(ambientLight);

// Directional Light (voor direct zonlicht simulatie)
      const directionalLight = new THREE.DirectionalLight(0xfff6e3, 3); // Warmere tint en hogere intensiteit
      directionalLight.position.set(5, 10, 5); // Boven en opzij plaatsen
      directionalLight.castShadow = true; // Schaduwen activeren
      directionalLight.shadow.mapSize.width = 1024;
      directionalLight.shadow.mapSize.height = 1024;
      directionalLight.shadow.camera.near = 0.1;
      directionalLight.shadow.camera.far = 50;
      scene.add(directionalLight);

// Schaduwzachte randinstellingen (optioneel)
      directionalLight.shadow.radius = 4;

// // Helper: Controleer lichtposities (optioneel)
//       const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5, 0xff0000);
//       scene.add(directionalLightHelper);


      // EffectComposer instellen
      const composer = new EffectComposer(renderer);
      const renderPass = new RenderPass(scene, camera);
      composer.addPass(renderPass);

      const outlinePass = new OutlinePass(
          new THREE.Vector2(window.innerWidth, window.innerHeight),
          scene,
          camera
      );
      outlinePass.edgeStrength = 10; // Sterkte van de rand
      outlinePass.edgeGlow = 1; // Lichtgloed
      outlinePass.visibleEdgeColor.set('#01e405'); // Randkleur
      outlinePass.hiddenEdgeColor.set('#000000');
      composer.addPass(outlinePass);

      // GLB-modellen laden
      const loader = new GLTFLoader();
      const signModelUrl = '/sign.glb';
      const startSignModelUrl = '/start_sign.glb';

      let signModel;
      loader.load(
          signModelUrl,
          (gltf) => {
            signModel = gltf.scene;
            signModel.scale.set(3, 3, 3);
            signModel.position.set(0, 0, 0);
            scene.add(signModel);

            // Laad en voeg start_sign.glb toe
            loader.load(
                startSignModelUrl,
                (startGltf) => {
                  const startSignModel = startGltf.scene;
                  startSignModel.scale.set(1, 1, 1);
                  startSignModel.position.set(0, 0, 0);
                  signModel.add(startSignModel);

                  // Voeg startSignModel toe aan OutlinePass
                  outlinePass.selectedObjects = [startSignModel];
                  this.addClickInteraction(startSignModel, camera, renderer, scene);
                },
                undefined,
                (error) => console.error('Error loading start_sign:', error)
            );
          },
          undefined,
          (error) => console.error('Error loading sign:', error)
      );

      // Eventlisteners voor roteren
      let isDragging = false;
      let lastMouseX = 0;
      window.addEventListener('mousedown', (event) => {
        isDragging = true;
        lastMouseX = event.clientX;
      });

      window.addEventListener('mousemove', (event) => {
        if (isDragging && signModel) {
          const deltaX = event.clientX - lastMouseX;
          signModel.rotation.y += deltaX * 0.01; // Rotatie langs de Y-as
          lastMouseX = event.clientX;
        }
      });

      window.addEventListener('mouseup', () => {
        isDragging = false;
      });

      // Animatie en rendering
      const animate = () => {
        requestAnimationFrame(animate);
        composer.render(); // Gebruik de composer voor rendering
      };

      animate();

      // Resize listener
      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize(window.innerWidth, window.innerHeight);
      });
    },

    addClickInteraction(object, camera, renderer, scene) {
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();
      let isDragging = false;

      const onMouseMove = (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      };

      window.addEventListener('mousedown', () => {
        isDragging = false;
      });

      window.addEventListener('mousemove', () => {
        isDragging = true;
      });

      const onClick = () => {
        if (isDragging) return;
        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(object, true);
        if (intersects.length > 0) {
          console.log('start_sign clicked!');
          this.$router.push('/home');
        }
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('click', onClick);
    },
  },
};
</script>

<style scoped>
.three-container {
  width: 100%;
  height: 100vh;
}
</style>





