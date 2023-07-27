
<template>
  <div class="greetings">
      <h1 class="welcome">Вас вітає UaLiveRPG</h1>
      <button class="btn btn-success start-button mt-3">
        <router-link :to="{name:'character-creating'}">
            Далі
        </router-link>
      </button>
  </div>
</template>

<style scoped>
input{
  width: 100%;
}
.greetings{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.welcome{
  text-align: center;
}

</style>
