<template>
  <Header></Header>
  <h1>Hello User, Welcome on Update Restaurant Page</h1>
  <form action="" class="update">
    <input
      type="text"
      placeholder="Enter Name"
      v-model="restaurant.name"
      name="name"
    />
    <input
      type="text"
      placeholder="Enter Address"
      v-model="restaurant.address"
      name="address"
    />
    <input
      type="text"
      placeholder="Enter Contact"
      v-model="restaurant.contact"
      name="contact"
    />
    <button type="button" v-on:click="updateRestaurant">
      Update Restaurant
    </button>
  </form>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "UpdatePage",
  components: {
    Header,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async updateRestaurant() {
      let result = await axios.put(
        `http://localhost:3000/restaurants/${this.$route.params.id}`,
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        }
      );
      if (result.status >= 200) {
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    let result = await axios.get("http://localhost:3000/restaurants", {
      params: { id: this.$route.params.id },
    });
    console.log(result);
    if (result.status >= 200) {
      console.log(result);
      this.restaurant = result.data[0];
    }
  },
};
</script>
