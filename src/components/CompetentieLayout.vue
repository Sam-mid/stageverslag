<template>
  <div>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title><slot name="title">Default Title</slot></title>
    </head>
    <body>
      <header>
        <slot name="header">
          <h1>Default Header</h1>
        </slot>
      </header>
      <main>
        <slot />
      </main>
    </body>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Secular One';
  src: url('/fonts/SecularOne-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Roboto Slab';
  src: url('/fonts/RobotoSlab-VariableFont_wght.ttf') format('truetype');
}

/* Algemene instellingen */
body {
  font-family: 'Roboto Slab', serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background-color: #282828;
  color: #ffffff;
}

/* Header styling */
header {
  color: white;
  padding: 20px;
  text-align: center;
}

header h1 {
  margin: 0;
  font-size: 2.5rem;
  text-shadow: 3px 3px #3a86f9;
}

header h3 {
  position: relative;
  margin: 20px auto;
  max-width: 800px;
  text-align: center;
}

/* Secties styling */
main {
  position: relative;
  margin: 20px auto;
  max-width: 800px;
}

section {
  position: relative;
  margin: 20px auto;
  max-width: 800px;
  padding: 20px;
  background: transparent;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1;
}

section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(56, 56, 56);
  filter: blur(15px);
  border-radius: 2vw;
  z-index: -1;
}

h1, h2, h3 {
  font-family: 'Secular One', sans-serif;
}

section h2 {
  color: #ffffff;
  margin-bottom: 10px;
  font-size: 1.8rem;
  text-shadow: 3px 2px #3a86f9;
}

section h3 {
  color: #ffffff;
  margin-bottom: 8px;
  font-size: 1.4rem;
}

section p {
  margin: 10px 0;
}

section blockquote {
  margin: 20px 0;
  padding: 15px 20px;
  background-color: #e9edf8;
  border-left: 5px solid #3a86f9;
  font-style: italic;
  color: #555;
}

/* Links */
section a {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
}

section a:hover {
  text-decoration: underline;
}

/* Responsiviteit */
@media (max-width: 768px) {
  section {
    margin: 10px;
    padding: 15px;
  }

  header h1 {
    font-size: 2rem;
  }

  section h2 {
    font-size: 1.5rem;
  }

  section h3 {
    font-size: 1.2rem;
  }
}
</style>
