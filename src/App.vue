<template>
  <v-app dark>
    <component v-bind:is="$route.meta.layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
import DashboardLayout from './layouts/DashboardLayout'
import CenterLayout from './layouts/CenterLayout'

export default {
  name: '',
  components: { CenterLayout, DashboardLayout },
  mounted () {
    this.computeIsMobile(window.innerWidth)

    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  'windowWidth': function (windowWidth) {
    this.computeIsMobile(windowWidth)
  },
  methods: {
    computeIsMobile: function (windowWidth) {
      let isMobile = (windowWidth <= 800)
      console.log(isMobile)
      if (this.$store.state.isMobile !== isMobile) {
        this.$store.commit('SET_IS_MOBILE', isMobile)
      }
    }
  }
}
</script>
