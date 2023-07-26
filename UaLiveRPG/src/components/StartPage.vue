
<template>
  <div class="greetings">
      <h1 class="welcome">Вас вітає UaLiveRPG</h1>
      <button class="btn btn-success start-button">
        <router-link :to="{name:'character-creating'}">
            Далі
        </router-link>
      </button>
  </div>
</template>

<style scoped>
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
.start-button{
  margin-top: 15px;
}

</style>
