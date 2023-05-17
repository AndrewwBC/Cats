import axios from 'axios'
import { useMutation, useQuery } from '@tanstack/react-query'
import useUserData from './useUserData'
const getUserData = async () => {
  try {
    const req = await axios.get(
      'http://localhost/ReactPHP/Usuário/getUserDatas.php',
      {
          params: {
            token: localStorage.getItem('token'),
          },
        },
      )
      const res = req.data
      return res
    } catch (error) {
      return error
    }
  }

export const useGetDatas = () => {
  return useQuery({
    queryKey: ['try'],
    queryFn: async () => await getUserData()
  })
}
  
export const useMutationUserData = () => {
  const {setUserData} = useUserData()
    return useMutation(getUserData, {
      onSuccess(data, variables, context) {
          return data;
      },
    })
  }
  