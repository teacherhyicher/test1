<template>
  <div class="container">
    <div class="row">
      <div class="col-6 d-flex flex-column justify-content-center align-items-center ">
        <div>{{name}}</div>
        <img v-if="isSmallGrowth" src="../img/smallkozak.png" alt="smallKozak">
        <img v-if="isHighGrowth" src="../img/highkozak.png" alt="highKozak">
        <img v-if="isBig" src="../img/bigKozak.jpg" alt="kozak">
      </div>

      <div class="col-5 d-flex flex-column justify-content-left">
        <div class="container">
          <FormulateInput
            type="text"
            name="name"
            label="Введіть ваше ім`я"
            v-model="name"
          />
          <FormulateInput
            type="number"
            name="sample"
            label="Введіть ваш вік"
            min="0"
            max="100"
            error-behavior="live"
            v-model="age"
          />
          <FormulateInput
            type="number"
            name="sample"
            label="Введіть вашу вагу"
            min="0"
            max="400"
            error-behavior="live"
            v-model="weight"
          />
          <FormulateInput
            type="number"
            name="sample"
            label="Введіть ваш зріст"
            min="0"
            max="400"
            error-behavior="live"
            v-model="growth"
          />
          <button class="btn btn-success start-button mt-3">
            <router-link :to="{name:'character-creating'}">
              Далі
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      weight: '',
      growth: '',
      age: '',
    }
  },



  computed: {
    isSmallGrowth() {
      if (this.growth <= 179 ) {
        return true;
      }
    },
    isHighGrowth() {
      if (this.growth > 179 && this.weight < 90 ) {
        return true;
      }
    },
    isBig() {
      if (this.growth > 170 && this.weight >= 90) {
        return true;
      }
    }

  },
  mounted() {
    if(localStorage.name) this.name = localStorage.name;
    if(localStorage.weight) this.weight = localStorage.weight;
    if(localStorage.growth) this.growth = localStorage.growth;
    if(localStorage.age) this.age = localStorage.age;
  },
  watch:{
    name(newName) {
      localStorage.name = newName;
    },
    weight(newWeight) {
      localStorage.weight = newWeight;
    },
    growth(newGrowth) {
      localStorage.growth = newGrowth;
    },
    age(newAge) {
      localStorage.age = newAge;
    }
  }
}

</script>

<style>
  input{
    width: 80%;
  }
  .start-button{
    width: 80%;
  }
  a{
    color: rgb(180, 170, 25) !important;
  }
</style>