<template>
  <div>
    <!-- <nav class="navbar navbar-light">
      <a class="navbar-brand" href="/">Test</a>
    </nav> -->

    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Test</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Data Analysis</router-link>
              <!-- <a class="nav-link" href="#">Data Analysis</a> -->
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Worksheet</router-link>
              <!-- <a class="nav-link" href="#">Data Analysis</a> -->
            </li>
            <li class="nav-item dropdown">
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
  methods: {},
};
</script>

<style scoped>
.navbar {
  background-color: #b7ebf6;
}
</style>