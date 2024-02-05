import api from '@/services/api'

async function getPackage(packageItem: any) {
  const response = await api.get(`/${packageItem}`)
  return response.data
}

export const packageService = {
  getPackage
}
