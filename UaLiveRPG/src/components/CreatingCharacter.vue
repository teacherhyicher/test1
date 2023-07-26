<template>
    <div>
        <FormulateInput
            type="text"
            name="name"
            label="Введіть ваше ім`я"
            v-model="name"
        />
        <div>{{name}}</div>
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

</style>