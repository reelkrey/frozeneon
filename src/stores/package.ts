import { defineStore } from 'pinia'
import { packageService } from '@/services/package'
import { ref } from 'vue'

export const usePackageStore = defineStore('package', () => {
  const packages = ref<any>([])
  const loading = ref(true)
  const searchParams = ref('axios')

  async function getPopularPackages() {
    try {
      packages.value = await packageService.getPopularPackages()
      loading.value = false
    } catch (error) {
      console.log(error)
    }
  }

  return {
    packages,
    loading,
    searchParams,
    getPopularPackages
  }
})
