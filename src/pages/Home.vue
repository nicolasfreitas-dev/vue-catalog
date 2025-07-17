<template>
  <section id="home">
    <h1 id="home-title">Vue Catalog</h1>
    <p id="home-subtitle">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sit rerum iste incidunt eum
      velit accusantium beatae molestias officiis odit voluptatum magnam tempora, non, quidem
      temporibus quis? Ducimus, minus. Unde.
    </p>
  </section>
</template>

<style>
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 100%;
  height: 100vh;

  padding: 2rem;
}

#home-title {
  font-size: 5rem;
  margin-bottom: 1rem;
}

#home-subtitle {
  font-size: 1.5rem;
  color: #666;
}
</style>
