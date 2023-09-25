<script>
import {queryFace} from './queryFace';

export default {
  name: "FaceImageApp",
  data() {
    return {
      title: 'VUE 笔试题01: 实时监测并标记出人脸位置',
      data: null
    }
  },
  computed: {
    queryFaceTimely2(){      
      let _this = this;
      queryFace().then(mockData => {
        _this.data = mockData.data;
      }, err => {
        _this.data = {};
      });
    },
    queryFaceTimely: async function(){
      let _this = this;
      return await queryFace().then(mockData => {
        _this.data = mockData.data;
      }, err => {
        _this.data = {};
      })
    }
  },
  mounted(){
    this.queryFaceTimely
  }
}
</script>

<template>
  <h2>{{title}}</h2>
  <div>
    <div id="faceContainer" :style="{width: data.imgData.width + 'px', height: data.imgData.height + 'px'}">
      <li v-for="item of data.list" :key="item.token" style="display: contents;">
        <div :style="{border: '5px solid yellow', width: item.location.width + 'px', height: item.location.height + 'px', top: item.location.top + 'px', left: item.location.left + 'px', position: 'fixed'}"></div>
      </li>
    </div>
    <img :src="data? data.img: null"/>  
  </div>
  <div>
    <h4>MockData: </h4>
    <span>{{JSON.stringify(data)}}</span>
  </div>
</template>

<style>
#faceContainer {
  position: absolute;
  display: inline;
  border: 2px solid yellow;
  z-index: 999;
}
</style>