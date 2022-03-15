<template>
  <div id="app">
    <router-view/>
      <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/index.vue'
export default {
  name:'App',
  components:{
    FooterGuide
  },
}
</script>

<style scoped>
#app{
  width: 100%;
  height: 100%;
}
</style>
