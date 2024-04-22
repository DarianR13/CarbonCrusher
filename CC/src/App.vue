<template>
 
    <div class = "topnav" >

   
    <v-container>
      <v-row>
        
      <v-col>
        <a nav>
        <RouterLink to="/calculator" class = "links">Carbon Footrprint Calculator</RouterLink>
      </a nav>
      </v-col>
      
      <v-col>
        <a nav>
        <RouterLink to="/calculator/results" class = "links">Go to Results</RouterLink>
      </a nav>
      </v-col>
      
    </v-row>

    
  </v-container>
  
  </div>
  <main>
    <RouterView />
    
  </main>

  
</template>
<style>
.topnav{
  overflow:hidden;
  background-color: #10347d;
}
.topnav a{
  font-family: "shrikhand", Serif;
  float: left;
  text-align: center;
  padding: 14px, 16px;
  color: #f2f2f2;
  text-decoration: none;
  font-size: 17px;

}

</style>