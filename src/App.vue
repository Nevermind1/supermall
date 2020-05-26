<template>
  <div id="app">
    <MainTabBar></MainTabBar>
    <router-view/>
  </div>
</template>
<script>
  import MainTabBar from './components/content/mainTabBar/MainTabBar.vue'

  export default{
    name:'App',
    components:{
      MainTabBar
    }
  }

</script>
<style>
@import url("assets/css/base.css");
#app{
  /* width: 100%; */
}
</style>
