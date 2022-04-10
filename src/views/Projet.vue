<script>
import { useRoute } from "vue-router";
import axios from "axios";
import param from "@/param/param";

export default {
  data() {
    return {
      projet: null,
    };
  },
  async created() {
    const route = useRoute();
    this.projet = await axios.get(
      param.host + "/projet/?slug=" + route.params.slug
    );

    if (!this.projet.data.length) {
      window.location = "/error/404";
    }

    this.projet = this.projet.data[0];
  },
};
</script>

<template>
  <div v-if="projet" class="l-projet-page">
    <div class="l-projet-hero">
      <h2 class="u-title-h2">{{ projet.acf.nom }}</h2>
      <img
        class="l-projet-hero__img"
        :src="projet.acf.image_de_couverture.url"
        :alt="projet.acf.nom"
      />
    </div>

    <div class="l-projet-description">
      <p class="l-projet-accroche">{{ projet.acf.accroche }}</p>

      <div class="l-projet-characteristic">
        <div class="l-projet-type">
          <h3>Type</h3>
          <p v-for="type in projet.acf.type_projet" :key="type.ID">
            {{ type.post_title }}
          </p>
        </div>

        <div class="l-projet-category">
          <h3>Category</h3>
          <p
            v-for="categorie in projet.acf.categorie_projet"
            :key="categorie.ID"
          >
            {{ categorie.post_title }}
          </p>
        </div>

        <div class="l-projet-technology">
          <h3>Technologies</h3>
          <p
            v-for="technologie in projet.acf.technologie_utilisee"
            :key="technologie.ID"
          >
            {{ technologie.post_title }}
          </p>
        </div>
      </div>

      <div class="l-projet-summary">
        <h3>Summary</h3>
        <div v-html="projet.acf.description"></div>
      </div>
    </div>

    <div class="l-projet-link">
      <a v-if="projet.acf.lien_maquette" :href="projet.acf.lien_maquette" target="__blank">See the model</a>
      <a v-if="projet.acf.lien_site_web" :href="projet.acf.lien_site_web" target="__blank">Visit the website</a>
    </div>
  </div>
</template>

<style>
.l-projet-description {
  font-family: "Work Sans", sans-serif;
  margin: 15rem 8.5rem 10rem 8.5rem;
}

.l-projet-hero {
  height: 90vh;
  overflow: hidden;
  position: relative;
  top: 0;
  width: 100vw;
}

.l-projet-hero h2 {
  bottom: 5rem;
  left: 5rem;
  position: absolute;
  text-transform: none;
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
}

.l-projet-page h3 {
  color: var(--color-secondary);
}

.l-projet-hero__img {
  height: 100vh;
  position: absolute;
  object-fit: cover;
  top: 0;
  width: 100vw;
  z-index: -1;
}

.l-projet-description,
.l-projet-summary {
  text-transform: lowercase;
}

.l-projet-description p {
  display: inline-block;
  margin-right: 1rem;
}

.l-projet-summary {
  align-items: flex-start;
  display: flex;
  margin-top: 5rem;
  width: 70%;
}

.l-projet-summary h3 {
  margin-right: 2.5rem;
}

.l-projet-summary a {
  display: inline-block;
  opacity: 75%;
}

.l-projet-characteristic {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  width: 60vw;
}

.l-projet-accroche {
  font-family: "Rany", sans-serif;
  font-size: 3.2rem;
  text-transform: none;
}

.l-projet-type,
.l-projet-category,
.l-projet-technology {
  width: 30%;
}

.l-projet-link {
  display: flex;
  font-size: 3.2rem;
  justify-content: space-between;
  margin: 15rem 8.5rem 10rem 8.5rem;
  width: 50%;
}
</style>