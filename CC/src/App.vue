<template>
  <p>Choose what part of this page you want to see:</p>
  <router-link to="/log_in">Log In</router-link>
  <router-link to="/sign-in">Sign In</router-link>

  


  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  a {
    display: inline-block;
    background-color: black;
    border: solid 1px black;
    color: white;
    padding: 5px;
    margin: 10px;
  }
  a:hover,
  a.router-link-active {
    background-color: rgb(110, 79, 13);
  }
  div {
    border: dashed black 1px;
    padding: 20px;
    margin: 10px;
    display: inline-block;
  }
</style>