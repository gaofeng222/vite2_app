<template>
  <div>about</div>
  <p>
    {{ route.params.id }}
  </p>
  <button @click="gotoHome">跳转到home</button>
  <button @click="getMyAge">获取我的年龄</button>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
const route = useRoute();
console.log(route, "useRoute");
const router = useRouter();
console.log(router, "useRouter");

const gotoHome = () => {
  router.push("/");
};
const store = useStore();
console.log(store, "useStore");
const getMyAge = () => {
  store.commit("addAge");
  console.log(store.state.age, "age");
};
</script>

<style lang="scss" scoped></style>
