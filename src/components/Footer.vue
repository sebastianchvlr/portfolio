<script setup>
</script>


<template>
  <footer class="c-footer">
    <a href="mailto:contact@sebastianchevallier.fr" class="c-footer__mail"
      >contact@sebastianchevallier.fr</a
    >

    <nav class="c-footer__nav">
      <ul class="c-footer__social-medias">
        <a
          href="https://www.linkedin.com/in/sebastian-chevallier/"
          target="__blank"
        >
          <li>LinkedIn</li>
        </a>
        <a
          href="https://www.instagram.com/sebastianchevallier/?hl=fr"
          target="__blank"
        >
          <li>Instagram</li>
        </a>
        <a href="https://dribbble.com/sebastianchevallier" target="__blank">
          <li>Dribbble</li>
        </a>
      </ul>
    </nav>

    <!-- <p class="c-footer__mention">
      Designed and developed by Sebastian Chevallier
    </p> -->
  </footer>
</template>


<style scoped>
.c-footer {
  height: 20rem;
  letter-spacing: 0.1rem;
  margin: 0 8.5rem 0 8.5rem;
  position: absolute;
  text-transform: lowercase;
  width: 88vw;
  z-index: 999;
}

.c-footer:before {
  background-color: #fafafa;
  top: 0;
  content: "";
  height: 0.1rem;
  position: absolute;
  width: 100%;
}

.c-footer__nav {
  height: 15rem;
  position: relative;
}

.c-footer__mail {
  font-size: 3.5rem;
  margin-top: 5rem;
  position: absolute;
  text-decoration: underline;
  top: 0;
}

.c-footer__social-medias {
  bottom: 0;
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 37%;
}
</style>