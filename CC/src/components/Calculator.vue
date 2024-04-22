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
        v-model="NumHousehold"
        label="Food Choices"
        :items="['Consume domestic meat daily', 'Consume domestic meat a few times a week', 'Vegetarian', 'Vegan', 'Mainly convenience food', 'Mix of fresh and convenience food', 'Only fresh,localy grown,hunted food' ]"
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
        label="Wha types of items do you recycle?"
        :items="['Glass', 'Plastic', 'Paper' , 'Aluminum', 'Steel', 'Composting food waste', 'I do not recycle']"
        variant="solo"
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

        }
    },
    methods: {
        ResultPage(){

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