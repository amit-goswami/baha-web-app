import HttpService from '@/services/HttpService'
import { ICreateQueryPayload, IQuery } from './queries.interface'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
const apiUrl = process.env.NEXT_PUBLIC_API_URL

const createQuery = async (createQueryData: ICreateQueryPayload) => {
  try {
    const { data } = await HttpService.post(
      `${apiUrl}/enquiry`,
      createQueryData
    )
    return data
  } catch (error) {
    console.error('Error during query request:', error)
    return null
  }
}

const getQueries = async (email: string) => {
  try {
    const { data } = await HttpService.get(`${baseUrl}/query?email=${email}`)
    return data.query as IQuery[]
  } catch (error) {
    console.error('Error during queries request:', error)
    return null
  }
}

const QueryService = {
  createQuery,
  getQueries
}

export default QueryService
