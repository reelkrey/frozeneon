import api from '@/services/api'

async function getPackage() {
  const response = await api.get('/axios')
  return response.data
}

export const packageService = {
  getPackage
}
