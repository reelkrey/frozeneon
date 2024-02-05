import { defineStore } from 'pinia'
import { packageService } from '@/services/package'
import { ref } from 'vue'

export const usePackageStore = defineStore('package', () => {
  const packageVersions = ref<any>([])
  const loading = ref(true)
  const searchParams = ref('axios')

  async function getPackage(searchParams: any) {
    try {
      packageVersions.value = await packageService.getPackage(searchParams)
      loading.value = false
    } catch (error) {
      console.log(error)
    }
  }

  return {
    packageVersions,
    loading,
    getPackage,
    searchParams
  }
})
