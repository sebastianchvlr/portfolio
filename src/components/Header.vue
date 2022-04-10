<script setup>
</script>


<template>
  <header class="c-header">
    <a href="/">
      <h1 class="c-header__logo">Sebastian.</h1>
    </a>

    <nav class="c-header__nav">
      <ul class="c-header__links">
        <a href="/#about">
          <li>About</li>
        </a>
        <a href="/#projects">
          <li>Projects</li>
        </a>
        <a href="/#contact">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  </header>
</template>


<style scoped>
.c-header {
  align-items: center;
  backdrop-filter: blur(7px);
  display: flex;
  height: 10rem;
  justify-content: space-between;
  left: 0;
  letter-spacing: 0.1rem;
  padding: 0 8.5rem 0 8.5rem;
  position: sticky;
  text-transform: lowercase;
  top: 0;
  width: 100vw;
  z-index: 999;
}

.c-header::after {
  background-color: #fafafa;
  bottom: 0;
  content: "";
  height: 0.1rem;
  position: absolute;
  width: 88vw;
}

.c-header__links {
  display: flex;
  justify-content: space-between;
  max-width: 70rem;
  text-align: right;
  width: 50rem;
}
</style>