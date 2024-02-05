<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { usePackageStore } from '@/stores/package'

const packageStore = usePackageStore()
const packageVersions = computed(() => packageStore.packageVersions.versions)
const isLoading = computed(() => packageStore.packageVersions.loading)

onMounted(async () => {
  await packageStore.getPackage()
})
</script>

<template>
  <div>
    <div v-if="isLoading">Загрузка...</div>
    <div v-if="packageVersions">
      <PackageVersions :packageVersions="packageVersions" />
    </div>
  </div>
</template>
