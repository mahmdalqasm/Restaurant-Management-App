<template>
  <img class="logo" src="../assets/logo.png" alt="" />
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Your Name" />
    <input type="email" v-model="email" placeholder="Enter Your Email" />
    <input
      type="password"
      v-model="password"
      placeholder="Enter Your Password"
    />
    <button v-on:click="signUp">Sign Up</button>
    <p>
      Are you Have Acount?
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        name: this.name,
        password: this.password,
      });
      if (
        result.status == 201 &&
        this.name != "" &&
        this.email != "" &&
        this.password != ""
      ) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "HomePage" });
    } else {
      console.log("object");
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
