import type { IPackage } from '@/common/types/package'
import api from '@/services/api'

async function getPopularPackages() {
  const response = await api.get<IPackage[]>(`/stats/packages`)
  return response.data
}

export const packageService = {
  getPopularPackages
}
