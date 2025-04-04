<template>
  <Header></Header>
  <h1>Hello {{ name }}, Welcome On Home Page</h1>
  <table border="1">
    <tr>
      <td></td>
      <td>Name</td>
      <td>Address</td>
      <td>Contact</td>
      <td>Actions</td>
    </tr>
    <tr v-for="Item in restaurants" :key="Item.id">
      <td>{{ Item.id }}</td>
      <td>{{ Item.name }}</td>
      <td>{{ Item.address }}</td>
      <td>{{ Item.contact }}</td>
      <td>
        <RouterLink :to="'/update/' + Item.id">Update</RouterLink>
        <button v-on:click="deleteRestaurant(Item.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>
<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "HomePage",
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  components: {
    Header,
  },
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete(
        "http://localhost:3000/restaurants/" + id
      );
      if (result.status >= 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("http://localhost:3000/restaurants");
      if (result.status >= 200) {
        this.restaurants = result.data;
      }
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style>
td {
  width: 160px;
  height: 40px;
}

table {
  margin: 10px auto;
}

table td button {
  padding: 10px 20px;
  background-color: #333;
  border: 1px solid skyblue;
  color: skyblue;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 5px;
  font-size: 15px;
}
table td a {
  background-color: #333;
  color: skyblue;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 43.5px;
  border-radius: 4px;
  border: 1px solid skyblue;
  text-decoration: none;
  margin: 5px auto;
  font-size: 15px;
}
</style>
