import { defineStore } from 'pinia'
import { packageService } from '@/services/package'
import { ref } from 'vue'

export const usePackageStore = defineStore('package', () => {
  const packageVersions = ref<any>([])
  const loading = ref(true)

  async function getPackage() {
    try {
      packageVersions.value = await packageService.getPackage()
      loading.value = false
    } catch (error) {
      console.log(error)
    }
  }

  return {
    packageVersions,
    loading,
    getPackage
  }
})
