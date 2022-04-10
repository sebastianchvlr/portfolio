<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  data () {
    return {
      scroller: null
    }
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    locomotive() {
      let scroller = new LocomotiveScroll({
        el: this.$refs.locomotive,
        smooth: true,
      });
      gsap.registerPlugin(ScrollTrigger);
      scroller.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(this.$refs.locomotive, {
        scrollTop(value) {
          return arguments.length
            ? scroller.scrollTo(value, 0, 0)
            : scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });
      ScrollTrigger.addEventListener("refresh", () => scroller.update());
      ScrollTrigger.refresh();

      return scroller
    }
  },
  mounted() {
    // this.scroller = this.locomotive();
  },
};
</script>


<template>
  <Header />

  <div ref="locomotive" class="locomotive">
    <RouterView />

    <Footer />
  </div>
</template>


<style>
@import "@/css/locomotive-scroll.css";
@import "@/css/reset.css";
@import "@/css/utilities.css";
@import "@/assets/fonts/rany/stylesheet.css";

@import "@/css/hero.css";
@import "@/css/about.css";
@import "@/css/projects.css";
@import "@/css/contact.css";
</style>
