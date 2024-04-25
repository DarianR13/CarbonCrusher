<!--
How to run application:
1. install node.js version 18.3 or higher
2. install vue3 using npm install -g @vue/cli in command line. 
Resources for installing vue3:
https://v3.ru.vuejs.org/guide/installation.html
https://vuejs.org/guide/best-practices/production-deployment
3. cd to this project in command line and enter: npm install and npm run dev
4. If this does not work for anyone I will remove the vue framework and we can work in regular
html and javascript.
-->
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