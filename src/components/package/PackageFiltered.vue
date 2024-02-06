<script setup lang="ts">
import { usePackageStore } from '@/stores/package'

const packageStore = usePackageStore()
</script>

<template>
  <div class="package__item">
    <div>
      <span class="package__item-name">name :</span>
      {{ packageStore.packageFiltered?.name }}
    </div>
    <div class="package__item-type">{{ packageStore.packageFiltered?.type }}</div>
  </div>
</template>

<style lang="scss" scoped>
.package {
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border: 1px solid #000;
    border-radius: 20px;
    margin-bottom: 20px;
  }
  &__item-name {
    font-weight: 700;
  }
  &__item-type {
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    background-color: hsl(201, 64%, 42%);
  }
}
</style>
