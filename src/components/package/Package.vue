<script setup lang="ts">
import type { IPackage } from '@/common/types/package'
import { useModalStore } from '@/stores/modal'

type Props = {
  packages: IPackage[]
}
defineProps<Props>()

const modalStore = useModalStore()
</script>

<template>
  <li
    class="package__item"
    v-for="packageItem in packages"
    :key="packageItem.name"
    @click="modalStore.openModal(packageItem)"
  >
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
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
    }
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
