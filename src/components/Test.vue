<template>
  <div class="content-test">
    <p class="content-test-p">
      {{ name }} -- {{ user.age }}
      <a>123</a>
    </p>
    <button class="btn" @click="handleClick">click</button>
  </div>
</template>

<script setup>
import { reactive, getCurrentInstance } from "vue";
import classes from "./test.modules.css";
console.log(classes, "aaa");
defineProps({
  name: String,
});
//获取上下文 useContext已经被弃用
const context = getCurrentInstance();
console.log(context, "ctx");
//定义了事件
const emit = defineEmits(["myClick"]);
const user = reactive({
  age: 20,
});
const handleClick = () => {
  context.emit("myClick");
};
//暴露给父组件的方法
defineExpose({
  getAge() {
    console.log(user.age);
  },
});
</script>

<style lang="scss" scoped>
/* @import "./test.modules.css"; */
.content-test-p {
  background: #000;
  a {
    background: red;
    color: #fff;
  }
}
</style>
