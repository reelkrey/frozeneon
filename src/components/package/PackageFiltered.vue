<script setup lang="ts">
import { useModalStore } from '@/stores/modal'
import { usePackageStore } from '@/stores/package'

const packageStore = usePackageStore()
const modalStore = useModalStore()
</script>

<template>
  <div class="package-filtered">
    <div
      class="package-filtered__item"
      v-if="packageStore.packageFiltered"
      @click="modalStore.openModal(packageStore.packageFiltered)"
    >
      <div>
        <span class="package-filtered__item-name">name :</span>
        {{ packageStore.packageFiltered?.name }}
      </div>
      <div class="package-filtered__item-type">{{ packageStore.packageFiltered?.type }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.package-filtered {
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
