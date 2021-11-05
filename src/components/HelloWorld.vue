<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  margin: 5pt;
}
</style>
