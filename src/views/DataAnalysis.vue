<template>
  <div id="data">
    <div class="container">
     
      1111111111
    <!-- <div>{{datas}}</div> -->
    
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DataAnalysis",
  data() {
    return {
        datas:{}

    };
  },
  mounted() {
    this.getData();
  },
  computed: {},
  methods: {
      getData(){
           axios.get("http://localhost:3003/datas")
        .then((response) => {
          this.datas = response.data;
          console.log(response.data)
          
        })
        .catch((error) => {
          console.log(error);
        });
      }
  },
};
</script>

<style scoped>
</style>