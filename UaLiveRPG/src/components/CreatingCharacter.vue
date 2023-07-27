<template>
  <div class="container">
    <div class="row">
      <div class="col-6 d-flex flex-column justify-content-center align-items-center ">
        <div>{{name}}</div>
        <img src="../img/smallkozak.png" alt="kozak">
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
          />
          <FormulateInput
            type="number"
            name="sample"
            label="Введіть вашу вагу"
            min="0"
            max="400"
            error-behavior="live"
          />
          <FormulateInput
            type="number"
            name="sample"
            label="Введіть ваш зріст"
            min="0"
            max="400"
            error-behavior="live"
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
      name: ''
    }
  },

  computed: {
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