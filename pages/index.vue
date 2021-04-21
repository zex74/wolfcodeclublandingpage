<template>
  <div class="">
    <!-- <services-nav :top="top"/> -->
    <top-home @scrolled="scrollWeDo"/>
    <we-do/>
    <about-us/>
    <portfolio/>
  </div>
</template>
<script>
import Logo from '~/components/Logo.vue'
import TopHome from '~/components/TopHome/TopHome'
import ServicesNav from '~/components/Navigation/ServicesNav'
import WeDo from '~/components/WeDo/WeDo'
import AboutUs from '~/components/AboutUs/AboutUs'
import Portfolio from '~/components/Portfolio/Portfolio'

export default {
  data () {
    return {
      top: false
    }
  },
  components: {
    TopHome,
    ServicesNav,
    WeDo,
    AboutUs,
    Portfolio,
    Logo
  },
  beforeMount () {
    this.$root.$on('scroll-about', this.scrollAbout)
    this.$root.$on('scroll-wedo', this.scrollWeDo)
    this.$root.$on('topEmitFalse', this.topEmitFalse)
    this.$root.$on('topEmitTrue', this.topEmitTrue)
  },
  methods: {
    scrollAbout () {
      const about = document.getElementById('about')
      console.log(about)
      about.scrollIntoView({ behavior: 'smooth' });
    },
    scrollWeDo () {
      const wedo = document.getElementById('WeDo')
      wedo.scrollIntoView({ behavior: 'smooth' });
    },
    topEmitTrue () {
      this.top = true
    },
    topEmitFalse () {
      this.top = false
    }
  },
  mounted () {
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
