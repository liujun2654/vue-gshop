<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {
    mounted(){
      this.$store.dispatch('getAddress');
      this.$store.dispatch('getCategorys');
      this.$store.dispatch('getShops');
      this.$store.dispatch('getUserInfo')
    },
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
