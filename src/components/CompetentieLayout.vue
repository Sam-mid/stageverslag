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

