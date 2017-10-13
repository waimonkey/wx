<template>

    <el-menu class="navbar" mode="horizontal">
      <div class="humbager" >
        <img src="../../assets/images/map-label.png" height="31" width="28" alt="">
      </div>
       <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
                <img class="user-avatar" src="../../assets/images/logo.png" height="31" width="31">
                <div class="userRole"><span>admin</span><i class="el-icon-caret-bottom"></i></div>
            </div>
            <el-dropdown-menu class="user-dropdown" slot="dropdown">
                <router-link class='inlineBlock' to="/">
                    <el-dropdown-item>
                        个人设置
                    </el-dropdown-item>
                </router-link>
                <el-dropdown-item divided><span   style="display:block;">退出</span></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-menu>

</template>
<script>
export default {
    methods: {
        // toggleSideBar() {
        //   this.$store.dispatch('ToggleSideBar')
        // },
        // logout() {
        //   this.$store.dispatch('LogOut').then(() => {
        //     location.reload();  // 为了重新实例化vue-router对象 避免bug
        //   });
        // }

      }
  }
</script>
<style>
    .navbar {
        height: 60px;
        /*line-height: 60px;*/
        border-radius: 0 !important;
        background-color: #fff;
        border-bottom: 1px solid #ccc;
    }
    .humbager {
      float: left;
      width: 40px;
      height: 40px;
      margin:12px 0 0 12px;
    }
   .avatar-container {
            height: 50px;
            width: 90px;
            font-size:14px;
            display: inline-block;
            position: absolute;
            right: 80px;
        }
    .avatar-wrapper {
        width: 100%;
        cursor: pointer;
        margin-top: 5px;
        float: left;
    }
    .user-avatar {
        width: 40px;
        height: 40px;
        line-height:40px;
        border-radius:50%;
        float: left;
        margin-right: 10px;
    }
    .userRole {
        float: left;
        margin-top: 15px;
    }
    .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
    }

</style>
