<script setup lang="ts">
import type { IPackage } from '@/common/types/package'

type Props = {
  packages: IPackage[]
}
defineProps<Props>()
</script>

<template>
  <li class="package__item" v-for="packageItem in packages" :key="packageItem.name">
    <div>
      <span class="package__item-name">name :</span>
      {{ packageItem.name }}
    </div>
    <div class="package__item-type">{{ packageItem.type }}</div>
  </li>
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
