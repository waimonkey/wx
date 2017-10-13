<template>
   <div class="login">
        <div class="login-wrap">
            <h2>欢迎来到智慧水务管理系统</h2>
            <h4>用户登录</h4>
            <form action="" class="clearfix">
                <ul class="clearfix">
                    <li>
                        <i></i>
                        <input type="text" name="username" placeholder="请输入用户名">
                    </li>
                    <li> <i></i>
                        <input type="text" name="password" placeholder="请输入登录密码">
                    </li>
                    <li>
                        <input type="submit" value="登录">
                    </li>
                </ul>
            </form>
            <div class="help">
      <router-link to="/register" class="pull-left">注册</router-link>
      <router-link to="/" class="pull-right">忘记密码?</router-link>
      </div>
        </div>
    </div>
</template>
<script>
  export default {
  name: 'Login',
  data () {
    return {

    }
  }
}
</script>
