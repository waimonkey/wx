<template>
  <div class="login register">
        <div class="login-wrap">
            <h2>欢迎来到智慧水务管理系统</h2>
            <h4>用户注册</h4>
            <form action="" class="clearfix">
                <ul class="clearfix">
                    <li>
                        <i>真实姓名:</i>
                        <input type="text" name="username" placeholder="请输入真实姓名">
                    </li>
                    <li>
                        <i>手机号:</i>
                        <input type="text" name="username" placeholder="请输入手机号">
                    </li>
                    <li>
                        <i>用户名:</i>
                        <input type="text" name="username" placeholder="请输入用户名">
                    </li>
                    <li>
                        <i>登录密码:</i>
                        <input type="text" name="username" placeholder="请输入登录密码">
                    </li>
                    <li>
                        <i>确认密码:</i>
                        <input type="text" name="password" placeholder="请再次输入登录密码">
                    </li>
                    <li>
                        <input type="submit" value="注册">
                    </li>
                </ul>
            </form>

        </div>
    </div>
</template>
<script>
  export default {
  name: 'Register',
  data () {
    return {

    }
  }
}
</script>
<style>
 .register .login-wrap h4 {
  padding: 0;
 }
  .register .login-wrap form ul li {
    margin-top: 15px;
    font-size: 14px
}
</style>
