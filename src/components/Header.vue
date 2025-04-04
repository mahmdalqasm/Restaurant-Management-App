<template>
  <div class="topnav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <a v-on:click="loguot" href="">Logout</a>
  </div>
</template>

<script>
export default {
  name: "HeaderPage",
  methods: {
    loguot() {
      localStorage.clear();
      this.$router.push({ name: "HomePage" });
    },
  },
};
</script>

<style>
.topnav {
  background-color: #333;
  overflow: hidden;
  display: flex;
  justify-content: start;
  align-items: center;
}

.topnav a {
  text-decoration: none;
  padding: 20px;
  color: white;
}

.topnav a:hover {
  background-color: #ddd;
  color: #222;
}
</style>
