<template>
    <v-container>
        <v-col>
   <v-sheet class="mx-auto" width="300">
    
    <v-form @submit.prevent>
        <v-select
        v-model="NumHousehold"
        label="Number of People in Your Household"
        :items="['1', '2', '3', '4', '5', '6+']"
        variant="solo"
        ></v-select>
        <v-select
        v-model="HouseHoldSize"
        label="Size of House"
        :items="['Large', 'Medium','Small', 'Apartment' ]"
        variant="solo"
        ></v-select>
        <v-select
        v-model="FoodChoices"
        label="Food Choices"
        :items="['Consume domestic meat daily', 'Consume domestic meat a few times a week', 'Vegetarian', 'Vegan', 'Mainly convenience food', 'Mix of fresh and convenience food', 'Only fresh,localy grown,hunted food' ]"
        variant="solo"
        ></v-select>
        <v-select
        v-model="Dishwasher"
        label="How often do you run your dishwasher a week?"
        :items="['9+ times', '4-9 times', '1-3 times' , 'I do not have a dishwasher']"
        variant="solo"
        ></v-select>
        <v-select
        v-model="WashingMachine"
        label="How often do you run your washing machine a week?"
        :items="['9+ times', '4-9 times', '1-3 times' , 'I do not have a washing machine']"
        variant="solo"
        ></v-select>
        <v-select
        v-model="Purchases"
        label="How many electronics, furniture, and other large household items do you buy a year?"
        :items="['7+', '5-7', '3-5' , '1-2', '0 or only secondhand']"
        variant="solo"
        ></v-select>
        <v-select
        v-model="Waste"
        label="How many garbage cans do you fill per week"
        :items="['4+', '3', '2' , '1', 'less than a one can']"
        variant="solo"
        ></v-select>
       
        <v-select
        v-model="Recycle"
        label="Recycle Multiple"
        :items="['Glass', 'Plastic', 'Paper' , 'Aluminum', 'Steel', 'Composting food waste']"
        multiple
      ></v-select>
        <v-select
        v-model="Car"
        label="How many miles do you travel in your personal vehicle a year?"
        :items="['15,000+', '10,000-15,000', '1,000-10,000', 'less than 1,000', '0 or I do not have a car']"
        variant="solo"
        ></v-select>
        <v-select
        v-model="Bus"
        label="How many miles do you travel via public transportation a year?"
        :items="['20,000+', '15,000-20,000', '10,000-15,000', '1,000-10,000', 'less than 1,000', '0 or I do not use public transportation']"
        variant="solo"
        ></v-select>
        <v-select
        v-model="Plane"
        label="How far do you travel by plane per year"
        :items="['Mostely within the state', 'Mostly to nearby states or countries', 'Mostly to other continents', 'I do not fly']"
        variant="solo"
        ></v-select>
        
      <v-btn @click="ResultPage" class="mt-2" type="submit" block>Submit </v-btn>
    </v-form>
  </v-sheet>
  <p>Result: {{ Results }}{{ Rating }} </p>
</v-col>
  <nav>
        
    </nav>
</v-container>
<footer class="bg-grey-lighten-1 footer">
     <p>2024 — KDSD, LLC</p> 
    </footer>
    </template>

<script>
export default{
    data(){
        return{
            NumHousehold: null,
            HouseHoldSize: null,
            FoodChoices: null,
            Dishwasher: null,
            WashingMachine: null,
            Purchases: null,
            Waste: null,
            Recycle: null,
            Car: null,
            Bus: null,
            Plane: null,
            Results: 0,
            Rating: null,

        }
    },
    methods: {
        ResultPage(){
          this.Results =0;
          switch(this.NumHousehold){
            //        :items="['1', '2', '3', '4', '5', '6+']"
            case '1':
              this.Results +=12;
              break;
            case'2':
              this.Results +=10;
              break;
            case'3':
              this.Results +=8;
              break;
            case'4':
              this.Results +=6;
              break;
            case'5':
              this.Results +=4;
              break;
            case'6+':
              this.Results +=2;
              break;
          }
          switch(this.HouseHoldSize){
            //        :items="['Large', 'Medium','Small', 'Apartment' ]"
            case 'Large':
              this.Results +=10;
              break;
            case 'Medium':
              this.Results +=7;
              break;
            case 'Small':
              this.Results +=4;
              break;
            case 'Apartment':
              this.Results +=2;
              break;

          }
          switch(this.FoodChoices){
            //        :items="['Consume domestic meat daily', 'Consume domestic meat a few times a week', 'Vegetarian', 'Vegan', 'Mainly convenience food', 'Mix of fresh and convenience food', 'Only fresh,localy grown,hunted food' ]"
            case 'Consume domestic meat daily':
              this.Results +=10;
              break;
            case 'Consume domestic meat a few times a week':
              this.Results +=8;
              break;
            case 'Vegan':
              this.Results +=2;
              break;
            case 'Mainly convenience food':
              this.Results +=12;
              break;
            case 'Mainly convenience food':
              this.Results +=12;
              break;
            case 'Mix of fresh and convenience food':
              this.Results +=6;
              break;
            case 'Mix of fresh and convenience food':
              this.Results +=2;
              break;
          }
          switch(this.Dishwasher){
            //        :items="['9+ times', '4-9 times', '1-3 times' , 'I do not have a dishwasher']"
            case '9+ times':
              this.Results +=3;
              break;
            case '4-9 times':
              this.Results +=2;
              break;
            case '1-3 times':
              this.Results +=1;
              break;
              case 'I do not have a dishwasher':
              this.Results +=0;
              break;
          }
          switch(this.WashingMachine){
            //        :items="['9+ times', '4-9 times', '1-3 times' , 'I do not have a washing machine']"
            case '9+ times':
              this.Results +=3;
              break;
            case '4-9 times':
              this.Results +=2;
              break;
            case '1-3 times':
              this.Results +=1;
              break;
            case 'I do not have a washing machine':
              this.Results +=0;
              break;
          }
          switch(this.Purchases){
            //        :items="['7+', '5-7', '3-5' , '1-2', '0 or only secondhand']"
            case '7+':
              this.Results +=10;
              break;
            case '5-7':
              this.Results +=8;
              break;
            case '3-5':
              this.Results +=6;
              break;
            case '1-2':
              this.Results +=4;
              break;
            case '0 or only secondhand':
              this.Results +=2;
              break;
          }
          switch(this.Waste){
            //        :items="['4+', '3', '2' , '1', 'less than a one can']"
            case '4+':
              this.Results += 50;
              break;
            case '3':
              this.Results += 40;
              break;
            case '2':
              this.Results += 30;
              break;
            case '1':
              this.Results += 20;
              break;
            case 'less than a one can':
              this.Results += 20;
              break;
          }
          //:items="['Glass', 'Plastic', 'Paper' , 'Aluminum', 'Steel', 'Composting food waste', 'I do not recycle']"

          if(this.Recycle.includes('Glass')){
            if(this.Results == 0){
              
            }
            else if(this.Results < 4){
              this.Results = 0;
            }
            else{
              this.Results -=4;
            }
          }
          if(this.Recycle.includes('Plastic')){
            if(this.Results == 0){
              
            } 
            else if(this.Results < 4){
              this.Results = 0;
            }
            else{
              this.Results -=4;
            }
          }
          if(this.Recycle.includes('Paper')){
            if(this.Results == 0){
              
            }
            else if(this.Results < 4){
              this.Results = 0;
            }
            else{
              this.Results -=4;
            }
          }
          if(this.Recycle.includes('Aluminum')){
            if(this.Results == 0){
              
            }
            else if(this.Results < 4){
              this.Results = 0;
            }
            else{
              this.Results -=4;
            }
          }
          if(this.Recycle.includes('Steel')){
            if(this.Results == 0){
              
            }
            else if(this.Results < 4){
              this.Results = 0;
            }
            else{
              this.Results -=4;
            }
          }
          if(this.Recycle.includes('Composting food waste')){
            if(this.Results == 0){
              
            }
            else if(this.Results < 4){
              this.Results = 0;
            }
            else{
              this.Results -=4;
            }
          }
          switch(this.Car){
            //:items="['15,000+', '10,000-15,000', '1,000-10,000', 'less than 1,000', '0 or I do not have a car']"
            case '15,000+':
              this.Results += 12;
              break;
            case '10,000-15,000':
              this.Results += 10;
              break;
            case '1,000-10,000':
              this.Results += 6;
              break;
            case 'less than 1,000':
              this.Results += 4;
              break;
            case '0 or I do not have a car':
              this.Results += 0;
              break;
              
          }
          switch(this.Bus){
            //:items="['20,000+', '15,000-20,000', '10,000-15,000', '1,000-10,000', 'less than 1,000', '0 or I do not use public transportation']"
            case '20,000+':
              this.Results +=12;
              break;
            case '15,000-20,000':
              this.Results +=10;
              break;
            case '10,000-15,000':
              this.Results +=6;
              break;
            case '1,000-10,000':
              this.Results +=6;
              break;
            case 'less than 1,000':
              this.Results +=2;
              break;
            case '0 or I do not use public transportation':
              this.Results +=0;
              break;
          }
          switch(this.Plane){
            //:items="['Mostely within the state', 'Mostly to nearby states or countries', 'Mostly to other continents', 'I do not fly']"
            case 'Mostely within the state':
              this.Results +=2;
              break;
            case 'Mostly to nearby states or countries':
              this.Results +=6;
              break;
            case 'Mostly to other continents':
              this.Results +=20;
              break;
            case 'I do not fly':
              this.Results +=0;
              break;

            
          }

          if(this.Resutls <60){
            this.Rating = "Your score is less than 60. You are making a minimal impact on your enviroment. Great Work!";
          }
          else{
            this.Rating = "Your score is greather than or equal to 60. You making a significant negative impact on the environment. Try to lower your score."
          }

        }
    }
}

</script>
<style>
footer{
position: fixed;
  left: 0;
  bottom: 0;
  width: 100%
}
</style>