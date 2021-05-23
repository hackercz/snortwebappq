<template>
  <div>
    <a-menu style="width: 200px" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" :mode="mode"
            :theme="theme" @click="handclick($event)">
      <a-sub-menu key="sub1">
        <template #title>
					<span>
						<SettingOutlined/>
						<span>蜜罐管理</span>
					</span>
        </template>
        <a-menu-item key="1">新建蜜罐</a-menu-item>
        <a-menu-item key="2">查看蜜罐管理</a-menu-item>

      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
					<span>
						<SettingOutlined/>
						<span>snort</span>
					</span>
        </template>
        <a-menu-item key="3">新建蜜罐</a-menu-item>
        <a-menu-item key="4">查看蜜罐管理</a-menu-item>

      </a-sub-menu>


      <a-sub-menu key="sub3">
        <template #title>
					<span>
						<SettingOutlined/>
						<span>Navigation Four</span>
					</span>
        </template>
        <a-menu-item key="5">Option 7</a-menu-item>
        <a-menu-item key="6">Option 8</a-menu-item>
        <a-menu-item key="7">Option 9</a-menu-item>
        <a-menu-item key="8">Option 10</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
import {
  defineComponent,
  reactive,
  toRefs,
  ref
} from 'vue';
import {
  SettingOutlined
} from '@ant-design/icons-vue';

export default defineComponent({
  name: "Slider",
  setup() {
    let data = ref(null);
    const state = reactive({
      mode: 'inline',
      theme: 'dark',
      selectedKeys: ['sub1'],
      openKeys: ['sub1', 'sub2', 'sub3'],
    });
    const handclick = (e) => {
      data.value = e;
      console.log(data);
      console.log(data);

    }
    return {
      ...toRefs(state),
      handclick
    };
  },
  components: {
    SettingOutlined
  },
});
</script>

<style>

</style>
