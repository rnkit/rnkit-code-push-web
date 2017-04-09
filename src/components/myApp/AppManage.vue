<template>
  <div class="app-manage">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>
<script>
  import NavBar from '../myApp/NavBar';

  export default {
    name: 'appManage',
    components: {
      NavBar,
    },
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .app-manage{
    margin-top: 10px;
  }
</style>
