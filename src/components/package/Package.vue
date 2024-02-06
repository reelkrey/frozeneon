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
    <div></div>
  </li>
</template>

<style lang="scss" scoped>
.package {
  &__item {
    padding: 10px 20px;
    border: 1px solid #000;
    border-radius: 20px;
    margin-bottom: 20px;
  }
  &__item-name {
    font-weight: 700;
  }
}
</style>
