<template>
    <div class="system">
        <div class="header">
            <div class="left">
                <img src="" alt="">
                <p>后台管理系统</p>
            </div>
            <div class="right">
                <h3>后台管理系统</h3>
                <p>username</p>
                <span>退出</span>
            </div>
        </div>
        <div class="container">
            <div class="nav">
                <ul>
                    <li>首页</li>
                    <li>公告通知管理</li>
                    <li>轮播图管理</li>
                    <li>问卷调查</li>
                    <li>系统消息</li>
                    <li>角色权限</li>
                    <li>账号管理</li>
                    <li>用户管理</li>
                    <li>信用管理</li>
                    <li>积分管理</li>
                    <li>分享管理</li>
                    <li>活动管理</li>
                    <li>风采管理</li>
                    <li>文书管理</li>
                    <li>服务项目管理</li>
                </ul>
            </div>
            <div class="content">

            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'System'
}
</script>

<style>
    html,body {
        background: #fff;
    }
    .system {
        width: 1200px;
        margin: 0 auto;
    }
    .header {
        background: #fff;
        height: 50px;
        line-height: 50px;
        overflow: hidden;
    }
    .header .left {
        float: left;
        width: 20%;
        background: #40E0D0;
    }
    .header .left img {

    }
    .header .left p {
        font-weight: 600;
        padding-left: 20px;
    }
    .header .right {
        float: right;
        overflow: hidden;
        width: 80%;
        background:	#FF6347;
        text-align: end;
    }
    .header .right h3 {
        padding-left: 20px;
        float: left;
        font-weight: 600;
    }
    .header .right p {
        float: left;
        color: #fff;
        margin-left: 75%;
    }
    .header .right span {
        display: block;
        float: left;
        line-height: 50px;
        margin-left: 20px;
        color: #fff;
        cursor: pointer;
    }
    .container {
        overflow: hidden;
    }
    .nav {
        background: #ccc;
        width: 20%;
        float: left;
    }
    .nav li {
        color: #333;
        padding: 15px 0;
        text-align: center;
    }
    .content {
        width: 80%;
        float: left;
    }
</style>