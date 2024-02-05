<script setup lang="ts">
import { onMounted } from 'vue'
import { usePackageStore } from '@/stores/package'

const packageStore = usePackageStore()

onMounted(async () => {
  await packageStore.getPackage()
})
</script>

<template>
  <div>hello : {{ packageStore.packageItem }}</div>
</template>
