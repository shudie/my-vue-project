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
                <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="id"
                    label="序号"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="gmtCreated"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="introduce"
                    label="描述">
                </el-table-column>
                </el-table>
                <div class="block">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        layout="prev, pager, next, sizes"
                        :total="50"
                        :current-page="current"
                        :page-size="pageNum"
                        :page-sizes=[2,3,4,10]>
                    </el-pagination>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'System',
    data() {
        return {
            tableData:[],
            pageNum:3, //每页条数
            total: 0, //总数
            current: 1, //当前页数
        }
    },
    methods: {
        // post() {
        //     this.axios.post('http://demo.shenzhuo.vip:31766/LeTuoShopMiddleConsole/sysUserGetInfo/getSysqa',{
        //         // pageIndex: 5,
        //         pageNum: 3
        //     }).then((res)=>{
        //         this.tableData = res.data.data
        //         console.info('测试接口返回的数据',res)
        //     }).catch(()=>{
        //         console.info('请求失败')
        //     })
        // },
        post(){            
            return this.axios({
                method: 'post',
                url: 'http://demo.shenzhuo.vip:31766/LeTuoShopMiddleConsole/sysUserGetInfo/getSysqa',  //url是后台接口路径
                data: {
                    pageNum: this.pageNum,  //每页条数
                    total: 0, //总数
                    pageIndex:this.current, //当前页数 pageIndex后台要的字段名 前端获取的页数this.current
                },
                transformRequest: [function (data) {
                    let ret = '';
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }],
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
                
            }).then(res =>{
                this.tableData = res.data.data
                console.info('接口返回的数据',res)
            })
        },
        // 切换每页多少条
        handleSizeChange(val){
            console.info('每页多少条:',val);
            console.log('this.pageSize')
            this.pageNum = val
        // 切换每页多少条的时候当前页数要变成1  例如切[1,2,3,4,5,10,20]之中的某一页
            this.current = 1
        //  // 获取数据列表-调用名称会变
            this.post();
        },
        // 当前页
        handleCurrentChange(val){
            console.info('当前页',val);
            this.current = val
            // 获取数据列表-调用名称会变
            this.post();
        },
    },
    mounted() {
        this.post();
    }
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
        cursor: pointer;
    }
    .content {
        width: 80%;
        float: left;
    }
    .block {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
</style>