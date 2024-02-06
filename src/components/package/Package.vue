<script setup lang="ts">
type Props = {
  packages: []
}
defineProps<Props>()
</script>

<template>
  <li class="user__item" v-for="packageItem in packages" :key="packageItem">
    <div>
      {{ packageItem.name }}
    </div>
    <div></div>
  </li>
</template>

<style lang="scss" scoped>
.user {
  &__item {
    padding: 10px 20px;
    border: 1px solid #000;
    border-radius: 20px;
    margin-bottom: 20px;
  }
}
</style>
