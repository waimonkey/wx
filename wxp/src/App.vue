<template>
  <div id="app">
    <div class="app-wrap">
        <div class="sidebar-wrapper">
          <Sidebar></Sidebar>
        </div>
        <div class="main-container">
          <Navbar></Navbar>
          <router-view/>
        </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/common/sidebar'
import Navbar from '@/components/common/navbar'
export default {
  name: 'app',
  components:{
      Sidebar,
      Navbar
    }
}
</script>

<style>
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}
.sidebar-wrapper {
    width: 220px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    transition: all .28s ease-out;
}
.main-container {
   position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right:0;
    min-height: 100%;
    transition: all .28s ease-out;
    margin-left: 220px;
    background-color: #f5f7fa;
}
</style>
