<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <HelloWorld msg="Vue.js App With ElementUI-Plus"/>
    <el-row class="mb-4">
      <el-col :span="24">
        <el-divider content-position="left">Element 原生组件：</el-divider>
      </el-col>
      <el-col :span="24">
        <el-space wrap>
          <el-button type="primary" @click="clickEventTrigger">Default</el-button>
          <el-button type="primary" @click="clickEventTrigger" plain>Plain</el-button>
          <el-button @click="clickEventTrigger" round>Round</el-button>
          <el-button type="danger" loading>Danger</el-button>

          <el-input v-model="input" class="w-50 m-2" placeholder="Please input" clearable />

          <el-tag>Tag 1</el-tag>
          <el-tag class="ml-2" type="success">Tag 2</el-tag>
          <el-tag class="ml-2" type="info">Tag 3</el-tag>
          <el-tag class="ml-2" type="warning">Tag 4</el-tag>
          <el-tag class="ml-2" type="danger">Tag 5</el-tag>
        </el-space>
      </el-col>
    </el-row>

    <el-divider />

    <el-row class="mb-4">
      <el-col :span="24">
        <el-divider content-position="left">ElementCommonComp 组件, 组件范围: Button、Input、Tag</el-divider>
      </el-col>
      <el-col :span="24">
        <el-space wrap>
          <ElementCommonComp name="button" type="primary" plain="按钮1"/>
          <ElementCommonComp name="button" type="primary" >按钮2</ElementCommonComp>
          <ElementCommonComp name="button" type="primary" />
          <ElementCommonComp name="button" />
          <ElementCommonComp name="button" type="danger" @click="clickEventTrigger" plain="点击事件"/>

          <ElementCommonComp name="input" v-model="input2"/>
          <ElementCommonComp name="input" plain="Bug - Console" v-model="input3" @input="input3OnChange"/>

          <ElementCommonComp name="tag"/>
          <ElementCommonComp name="tag" type="danger"/>
          <ElementCommonComp name="tag" type="danger" plain="标签" />
        </el-space>
      </el-col>
    </el-row>
  </el-config-provider>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ElementCommonComp from './components/ElementCommonComp.vue'
import { defineComponent, ref } from 'vue';
import {ElConfigProvider, ElMessageBox, ElMessage} from 'element-plus'

export default defineComponent ({
  components: {
    ElConfigProvider,
    HelloWorld,
    ElementCommonComp
  },
  setup() {
    return {
      zIndex: 3000,
      size: 'default',
      input: ref(''),
      input2: ref(''),
      input3: ref(''),
      dialogVisible: ref(false)
    }
  },
  methods: {
    clickEventTrigger(){
      ElMessageBox.alert('ClickEvent', 'Title', {
        autofocus: false,
        closeOnPressEscape: true,
        confirmButtonText: '了解',
        callback: action => {
          ElMessage({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    },
    input3OnChange(v){
      console.log(v)
      this.input3 = ref(v);
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
