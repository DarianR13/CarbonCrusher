<template>
      <p>Result {{ Res }}</p>

  <nav>
    <RouterLink to="/calculator">Carbon Footrprint Calculator</RouterLink>
  </nav>
  
  <main>
    <RouterView />
  </main>
</template>
<script>
export default{
  data(){
    return{
      Res: null
    }
 
},
methods: {
receiveEmit(R){
  this.Res = R;
}
}
}

</script>