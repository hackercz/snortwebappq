<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider >
		<slider></slider>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
       
        <div :style="{ padding: '24px', background: '#fff', minHeight: '600px' }">
          <!-- <editor-con> </editor-con>-->
		  <button @click="getData($event)">按钮</button>
		 
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>

import { defineComponent, ref } from 'vue';
import Slider from "./views/Slider";
//import EditorCon from "./views/canvas/EditorCom.vue";


export default defineComponent({
  components: {
    Slider
  },
  setup(){
	
	const selectedKeys = ref(['1']);
	const getData = (e) => {
	            console.log(e)
	        }
	return {
		selectedKeys,
		getData
	}
  }
  
});
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
