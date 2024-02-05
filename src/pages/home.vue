<script setup lang="ts">
import { onMounted } from 'vue'
import { usePackageStore } from '@/stores/package'

const packageStore = usePackageStore()

onMounted(async () => {
  await packageStore.getPackage()
})
</script>

<template>
  <div>
    <PackageVersions :packageVersions="packageStore.packageVersions.versions" />
  </div>
</template>
