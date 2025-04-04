<template>
  <img class="logo" src="../assets/logo.png" alt="" />
  <h1>Login</h1>
  <div class="login">
    <input type="email" v-model="email" placeholder="Enter Your Email" />
    <input
      type="password"
      v-model="password"
      placeholder="Enter Your Password"
    />
    <button v-on:click="login">Login</button>
    <p>
      Are You New Here?
      <router-link to="/sign-up">Sign Up</router-link>
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (
        result.status == 200 &&
        result.data.length > 0 &&
        this.email != "" &&
        this.password != ""
      ) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "HomePage" });
    }
  },
};
</script>

<style>
.logo {
  width: 100px;
}
p {
  display: flex;
  flex-direction: column;
  height: 50px;
  justify-content: space-around;
}
</style>
