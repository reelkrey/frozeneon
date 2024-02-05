import { defineStore } from 'pinia'
import { packageService } from '@/services/package'
import { ref } from 'vue'

export const usePackageStore = defineStore('package', () => {
  const packages = ref<[]>([])
  const loading = ref(true)

  async function getPackage() {
    try {
      packages.value = await packageService.getPackage()
      loading.value = false
    } catch (error) {
      console.log(error)
    }
  }

  return {
    packages,
    loading,
    getPackage
  }
})
