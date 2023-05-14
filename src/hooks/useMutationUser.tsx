import { useMutation } from '@tanstack/react-query'
import Axios, { AxiosError } from 'axios'

const userAction = async (formData: object): Promise<any> => {
  try {
    const request = await Axios.post(
      'http://localhost/ReactPHP/Funções/UserActions.php',
      formData,
    )
    return request
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data
    }
  }
}

export const useMutationUser = () => {
  return useMutation(userAction, {
    cacheTime: 1000,
  })
}
