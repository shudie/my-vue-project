<template>
  <div class="questionnaire">
      <div class="preview">
        <div class="title">问卷预览</div>
        <div class="choice">
            <ul>
                <div class="single_choice">一、选择题（单选）</div>
                <li v-for="(item,index) in singleList" :key="index">
                    <div class="info">
                        <p>{{item.question}}</p>
                        <div class="radio" v-for="(item2,index2) in item.single" :key="index2">
                            <label for="">
                                <input name="single" type="radio">{{item2.input}}
                            </label>
                        </div>
                    </div>
                    <div class="operation">
                        <p class="compile">编辑</p>
                        <p class="delete">删除</p>
                    </div>
                </li>
            </ul>
            
        </div>
      </div>

      <div class="choice_question">
          <div class="title">选择题</div>
          <div class="question_box">
              <div class="question">
                  <p>问题：</p>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <ul>
                  <li v-for="(item, index) in selectList" :key="index">
                      <div class="options" v-for="(item2, index2) in item.single" :key="index2">
                        <p>{{item2.select}}</p>
                        <input type="text" v-model="item2.input">
                        <button>删除</button>
                      </div>
                      
              </li>
              </ul>
              <div class="div1">
                <label for="">
                    <input name="radio" type="radio">单选题
                </label>
                <label for="" class="more">
                    <input name="radio" type="radio">多选题
                </label>
                <button>添加选项</button>
                <button class="add" @click="add">添加到问卷</button>
            </div>
          </div>
          
          
      </div>
  </div>
</template>

<script>

export default {
  name: 'Questionnaire',
  
  data () {
      return {
          prop: {
            select: '',
          },
          singleList: [{
              id: '0001',
              question: '1.问题文本文本标签问题文本文本标签问题文本文本标签。',
              single:[
                  {input:'A选项'},
                  {input:'B选项'},
                  {input:'C选项'},
                  {input:'D选项'},
              ]
          },{
              id: '0002',
              question: '2.问题文本文本标签问题文本文本标签问题文本文本标签。',
              single:[
                  {input:'A选项'},
                  {input:'B选项'},
                  {input:'C选项'},
                  {input:'D选项'},
              ]
          }],
                   
          
          selectList: [{
              id: '0001',
              question: '1.问题文本文本标签问题文本文本标签问题文本文本标签。',
              single:[
                  {select:'A选项',input:'',},
                  {select:'B选项',input:'',},
                  {select:'C选项',input:'',},
                  {select:'D选项',input:'',},
              ]
          }
          ]
      }
  },
  methods: {
      add() {
          let single = []
          for(let i=0;i<this.selectList[0].single.length;i++){
              this.vue.set(single,i,{input:this.selectList[0].single[i].input})
          }
          console.info(single)
        //   this.singleList.push(this.selectList[0]);
          this.vue.set(this.singleList,this.singleList.length,{single:single})
        //   console.log('左边的',this.selectList)
        //   console.info('右边的',this.singleList)
      }
  }
}
</script>

<style>
    .questionnaire {
        background: #fff;
        padding: 30px 0;
        overflow: hidden;
    }
    .preview {
        float: left;
        width: 50%;
    }
    .preview .title {
        height: 40px;
        line-height: 40px;
        border: 1px solid #333;
        padding-left: 30px;
        margin: 30px;
    }
    .choice {
        margin-left: 50px;
    }
    
    .choice ul {
        margin-left: 10px;
        margin-top: 10px;
    }
    .choice ul li {
        margin-top: 20px;
        overflow: hidden;
        position: relative;
    }
    .choice ul li .info {
        width: 90%;
    }
    .choice ul li .info p {
        margin-bottom: 20px;
    }
    .choice ul li .radio {
        float: left;
        width: 25%;
        padding-bottom: 10px;
    }
    .choice ul li .radio label {
        float: left;
    }
    .choice ul li .operation {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%)
    }
    .choice ul li .operation p {
        color: #fff;
        padding: 4px 6px;
    }
    .compile {
        background: blue;
    }
    .delete {
        background: #ff6666;
        margin-top: 10px;
    }
    .multiple_choice {
        margin-top: 30px;
    }
    .gap_filling {
        margin-top: 30px;
    }
    .gap_filling textarea {
        border: 1px solid #333;
        width: 498px;
        height: 80px;
        text-indent: 5px;
        margin-top: 10px;
        resize: none;
    }
    /* 右边 */
    .choice_question {
        float: left;
        width: 40%;
        margin-left: 5%;
    }
    .choice_question .title {
        height: 40px;
        line-height: 40px;
        border: 1px solid #333;
        padding-left: 30px;
    }
    .question_box {
        border: 1px solid #333;
        border-top: none;
        padding: 10px;
    }
    .question_box .question {
        overflow: hidden;
    }
    .question_box .question p {
        float: left;
        margin-top: 40px;
    }
    .question_box .question textarea {
        float: left;
        border: 1px solid #333;
        width: 288px;
        height: 100px;
        resize: none;
        padding: 5px;
        border-radius: 8px;
    }
    .question_box ul {
        
    }
    .question_box li {
    }
    .question_box li .options {
        overflow: hidden;
    }
    .question_box li p {
        margin-top: 20px;
        float: left;
    }
    .question_box li input {
        border: 1px solid #333;
        width: 300px;
        border-radius: 6px;
        height: 30px;
        margin: 10px 0 0 4px;
        float: left;
        text-indent: 10px;
    }
    .question_box li button {
        width: 80px;
        height: 30px;
        float: left;
        border-radius: 6px;
        margin-top: 10px;
        margin-left: 10px;
    }
    .div1 {
        overflow: hidden;
        margin-top: 20px;
    }
    .div1 label {
        float: left;
        margin-top: 12px;
    }
    .div1 .more {
        margin-left: 20px;
    }
    .div1 button {
        width: 98px;
        height: 40px;
        border: 1px solid #333;
        border-radius: 4px;
        background: #fff;
        float: left;
        margin-left: 20px;
    }
    .div1 .add {
        background: #66b1ff;
        border: none;
        color: #fff;
    }

    .open_questions {
        margin-top: 30px;
        
    }
    .open_questions .open {
        border: 1px solid #333;
        padding: 10px 0 40px;
    }
    .open_questions .t {
        
        overflow: hidden;
    }
    .open_questions .t p {
        float: left;
        padding-left: 30px;
        margin-top: 40px;
    }
    .open_questions .t textarea {
        float: left;
        border: 1px solid #eee;
        height: 96px;
        border-radius: 4px;
        resize: none;
    }
    .open_questions button {
         color: #FFF;
        background-color: #409EFF;
        border-radius: 4px;
        border-color: #409EFF;
        width: 112px;
        height: 40px;
        margin-top: 10px;
        margin-left: 30px;
    }
</style>