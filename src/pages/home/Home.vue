<template>
    <div>
        <div class="login">
            <div class="info">
                <input type="text" placeholder="请输入用户名">
                <input type="text" placeholder="请输入密码">
                <router-link tag="button" to="/system">登录</router-link>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
    .login {
        width: 300px;
        height: 300px;
        background: #fff;
        margin: 0 auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%)
    }
    .login .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%)
    }
    .login input {
        width: 200px;
        height: 30px;
        line-height: 30px;
        display: block;
        margin-top: 20px;
        text-indent: 10px;
        border: 1px solid #999;
    }
    .login button {
        width: 200px;
        height: 30px;
        line-height: 30px;
        margin-top: 20px;
        background:#FF7F50;
        border: 1px solid #FF7F50;
        color: #fff;
    }
</style>