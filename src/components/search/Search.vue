<script setup lang="ts">
function searchPackege() {}
</script>

<template>
  <form class="form" @submit.prevent="searchPackege">
    <input class="input" type="text" placeholder="Поиск по названию" />
    <button class="button" type="submit">Поиск</button>
  </form>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  gap: 20px;
}

.input {
  padding: 15px 25px;
  border-radius: 30px;
  border: 1px solid #b6b6b6;
  min-width: 300px;

  &::placeholder {
    color: #a8a8a8;
  }
}

.button {
  color: #fff;
  background-color: hsl(201, 64%, 42%);
  padding: 10px 20px;
  border-radius: 30px;
}
</style>
