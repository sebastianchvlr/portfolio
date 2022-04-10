<script>
import axios from "axios";
import param from "@/param/param";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      projets: [],
    };
  },
  async mounted() {
    this.projets = await axios.get(param.host + "/projet");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.$refs.projects,
        // markers: true,
        pin: true,
        scrub: 2,
        snap: false,
        start: "top 25%",
        end: () => "+=200%",
      },
    });

    tl.to(this.$refs.img, {
      translateX: "-52%",
    });

      let tlEnter = gsap.timeline();

      tlEnter
      .to(".l-hero__img>img", {
        duration: 2,
        top: "-125%",
      }, 0)
      .to(".l-hero__img", {
        autoAlpha: 1,
        duration: 2,
        height: "18rem",
      }, 0)
      .to(".u-title-h2", {
        autoAlpha: 1,
        translateY: "0",
      })
      .to(".l-hero h1", {
        autoAlpha: 1,
        translateY: "0",
      }, 2)
      .to(".l-hero p", {
        autoAlpha: 1,
      })
      .to(".l-hero > div:nth-of-type(3) > p", {
        translateX: "0"
      })
      .to(".l-hero > div:nth-of-type(3) > ul >li", {
        translateX: "0",
        stagger: {
          each: 0.2,
        }
      });
  },
};
</script>


<template>
  <main>
    <section class="l-hero" id="hero">
      <div>
        <h2 class="u-title-h2">Creative developer</h2>
        <p>bringing his <span class="u-purple">artistic</span> touch</p>
      </div>

      <div class="l-hero__img">
        <img
          src="../assets/img/sebastianchevallier.jpg"
          alt="Sebastian Chevallier"
        />
      </div>

      <h1>Sebastian Chevallier</h1>

      <div>
        <p>Discover my <span class="u-purple">minimalist</span> universe</p>
        <ul>
          <li>Front development</li>
          <li>Webdesign</li>
          <li>Art direction</li>
        </ul>
      </div>
    </section>

    <section class="l-about" id="about">
      <div class="l-left">
        <div class="l-education">
          <h3 class="u-title-h3">Educational</h3>

          <div class="c-education">
            <p class="c-education__date">2023</p>

            <div class="c-training-course">
              <h4 class="c-training-course__title">
                Bachelor Création et Design
              </h4>
              <p class="c-training-course__location">
                Institut de l'Internet et du Multimédia | Paris
              </p>
            </div>
          </div>

          <div class="c-education">
            <p class="c-education__date">2022</p>

            <div class="c-training-course">
              <h4 class="c-training-course__title">
                DUT Métiers du Multimédia et de l'Internet
              </h4>
              <p class="c-training-course__location">
                IUT de Belfort-Montbéliard | Montbéliard
              </p>
            </div>
          </div>
        </div>

        <div class="l-professional">
          <h3 class="u-title-h3">Professional</h3>

          <div class="c-professional">
            <p class="c-professional__date">2022</p>

            <div class="c-experience">
              <h4 class="c-experience__title">Frontend web developer</h4>
              <p class="c-experience__location">Pixies Agency | Besançon</p>
            </div>
          </div>
        </div>
      </div>

      <div class="l-right">
        <h3 class="u-title-h3">Who am I ?</h3>

        <p>
          Advocating minimalism and ergonomics in all my projects, often putting
          forward the Less is More theory, I enjoy working on all kinds of
          creative missions. From identity thinking to more technical web
          content development, I try to maintain a versatile profile with skills
          in design, web development and communication.
        </p>
      </div>
    </section>

    <section class="l-projects" id="projects" ref="projects">
      <h3 class="u-title-h3">Projects</h3>

      <div class="c-project" ref="img">
        <router-link
          class="c-project__div"
          v-for="projet in projets.data"
          :to="{ name: 'projet', params: { slug: projet.slug } }"
          :key="projet.id"
        >
          <img :src="projet.acf.image_de_couverture.url" :alt="projet.acf.nom" />
        </router-link>
      </div>
    </section>

    <section class="l-contact" id="contact">
      <p>
        Don’t hesitate to <span class="u-purple">contact me</span> if you have
        <span class="u-purple">projects</span> to propose
      </p>
    </section>
  </main>
</template>


<style scoped>
.l-contact {
  font-size: 7rem;
  font-weight: 500;
  line-height: 8rem;
  position: relative;
  text-align: center;
  text-transform: uppercase;
}

.l-contact > p {
  left: 20%;
  position: absolute;
  top: 7rem;
  width: 60%;
}
</style>