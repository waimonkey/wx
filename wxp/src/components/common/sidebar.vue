<template>

  <div class="sidebar-container">
<el-menu  default-active="2" class="el-menu-vertical-demo">

         <router-link to="/user"  class="logo">
            <img src="../../assets/images/logo.png" >
            <h3>清控环境智慧水务</h3>
         </router-link>

   <router-link to="/user">
     <el-menu-item index="2">
    <i class="el-icon-setting"></i>
    <span slot="title">用户管理</span>
  </el-menu-item>
   </router-link >
   <router-link to="/reportInfo">
      <el-menu-item index="3">
    <i class="el-icon-setting"></i>
    <span slot="title">上报信息管理</span>
  </el-menu-item>
   </router-link>


</el-menu>

  </div>

</template>
<style>
.sidebar-container{
   transition: all .28s ease-out;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0px;
}
.logo {
  height: 80px;
  line-height: 60px;
  padding-left: 10px;

}
.logo img {
  width:31px;
  height: 31px;
  float: left;
  margin-top: 15px;

}
.logo h3 {
  float: left;
  color: #fff;
  margin: 0 0 0 5px;
}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
    min-height: 100%;
  }
  .el-menu {
    text-align: left;
    background-color: #1764b2;
    border-radius: 0;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
  }
  .el-menu-item {
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    transition: border-color .3s,background-color .3s,color .3s;
    box-sizing: border-box;
    white-space: nowrap;
  }
  .el-menu-item.is-active {
    background-color: #0e4680;
    color: #fff;
    border-left: 4px solid #00aaff
  }
  .el-menu-item:hover {
    background-color: #0e4680;
  }
</style>

<script>
  export default {
     name: 'Sidebar',
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
