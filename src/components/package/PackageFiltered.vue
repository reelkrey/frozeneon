<script setup lang="ts">
import { useModalStore } from '@/stores/modal'
import { usePackageStore } from '@/stores/package'
import { useRouter } from 'vue-router'

const packageStore = usePackageStore()
const modalStore = useModalStore()
const router = useRouter()

async function goBack() {
  router.push({ path: '/', query: { limit: packageStore.currentRoute } })
  await packageStore.getPopularPackages(packageStore.currentRoute)
}
</script>

<template>
  <div>
    <button @click="goBack">back</button>
    <div
      class="package__item"
      v-if="packageStore.packageFiltered"
      @click="modalStore.openModal(packageStore.packageFiltered)"
    >
      <div>
        <span class="package__item-name">name :</span>
        {{ packageStore.packageFiltered?.name }}
      </div>
      <div class="package__item-type">{{ packageStore.packageFiltered?.type }}</div>
    </div>
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
