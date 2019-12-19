<template>
  <div id="app">
        姓名：<input type="text" v-model="prop.name">
        性别：<input type="text" v-model="prop.sex">
        年龄：<input type="text" v-model="prop.age">
        <button @click="add">添加数据</button>
        <div class="box">
            <table v-for="(item,index) in list" :key="index">
                <tr>
                    <td>{{item.name}}</td>
                    <td>{{item.sex}}</td>
                    <td>{{item.age}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Adddata',
   data() {
    return {
        message: 'Hello Vue!',
        prop: {
            name: '',
            sex: '',
            age: '',
        },
        list: [{
            name: '小王',
            sex: '男',
            age: '18'
        }],
    }
  },
  methods: {
    add() {
        let newObj = {
            name: this.prop.name,
            sex: this.prop.sex,
            age: this.prop.age
        }
        this.list.push(newObj);
    }
  }
  }
 </script>

<style>

</style>