<!-- 
    提供一个可以渲染Vue Element UI 的通用组件ElementCommonComp

    要求：
    基于Vue Element UI组件库，版本无限制。
    通用组件覆盖组件范围：Button、Input、Tag 组件, 需要考虑相应组件的props、events和slots。
    交付内容需要包括ElementCommonComp 组件的源码以及验证功能的链接(CodePen等)或源码
 -->

<!-- 
    组件范围：Button、Input、Tag
    props
        type
        plain
        text
    events
        click
        - change
    slots
        default
  -->
<template>
  <div v-if="tagName === 'button'">
    <el-button :type="type" @click="handleClick"><slot>{{plain || "Default"}} </slot></el-button>
  </div>
  <div v-else-if="tagName === 'input'">
    <el-input class="w-50 m-2" :placeholder="`${plain || 'Please input'}`" clearable :value="value" @input="handleInput" />
 </div>
  <div v-else-if="tagName === 'tag'">
    <el-tag :type="type"><slot>{{plain || "Default"}} </slot></el-tag>
</div>
  <div v-else>组件范围仅限于 Button、Input、Tag</div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ElementCommonComp",
  props: ["name", "type", "plain", "value", "onChange"],
  setup(props) {

    return {
      tagName: props.name.toString().toLowerCase(),
      type: props.type || null,
      plain: props.plain  || null,
      value: props.value || null,
    };
  },
  methods: {
    handleClick(){
        this.$emit('click');
    },
    handleInput(v){
        console.log(v);
        this.$emit("input", v);
    }
  }
});
</script>
