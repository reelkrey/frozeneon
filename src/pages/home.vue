<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { usePackageStore } from '@/stores/package'

const packageStore = usePackageStore()
const packages = computed(() => packageStore.packages)
const isLoading = computed(() => packageStore.loading)

onMounted(async () => {
  await packageStore.getPopularPackages()
})
</script>

<template>
  <div>
    <div v-if="isLoading">Загрузка...</div>
    <div v-if="packages">
      <Packages :packages="packages" />
    </div>
  </div>
</template>
