<template>
  <div id="login">
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h4>Log in</h4>
          <form action="">
            <div class="input-group mb-3 center">
              <span class="input-group-text" id="basic-addon1">ID</span>
              <input
                v-model="id"
                type="text"
                class="form-control"
                placeholder="id"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3 center">
              <span class="input-group-text" id="basic-addon1">Password</span>
              <input
                v-model="password"
                type="text"
                class="form-control"
                placeholder="password"
                aria-describedby="basic-addon1"
              />
            </div>
            <button class="btn btn-info login-btn">Log in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      user: {
        id: "",
        password: "",
      },
    };
  },
  methods: {
    logIn() {
      axios.post('http://localhost:3003/logIn',{
         id : this.user.id,
         password : this.user.password}
        
        ).then()
      
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
}
.login-btn {
  margin-left: 150px;
}
</style>