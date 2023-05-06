import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Axios, { AxiosError } from 'axios'

const formData = new FormData()

const getCommentsData = async (
  postCod: number,
  functionKey: string,
): Promise<ReturnType<ObjectConstructor>> => {
  formData.append('postCod', postCod.toString())
  formData.append('functionKey', functionKey)
  console.log('Enter at Query')
  try {
    const request = await Axios.post(
      'http://localhost/ReactPHP/Funções/PostsData.php',
      formData,
    )
    return request
  } catch (err) {
    if (err instanceof AxiosError) {
      return err
    }
  }
}

export const useQueryCommentsData = (postCod: number, functionKey: string) => {
  return useQuery({
    queryKey: ['comments', postCod, functionKey],
    queryFn: () => {
      return getCommentsData(postCod, functionKey)
    },
  })
}

/*formData passando pelo front foi o problema? */
/* sempre providenciar uma chave única para as queryes*/
/* */

export const useMutationCommentsData = (
  postCod: number,
  functionKey: string,
) => {
  const queryClient = useQueryClient()
  return useMutation([postCod], {
    mutationFn: () => getCommentsData(postCod, functionKey),
    onSuccess: () => {
      queryClient.invalidateQueries(['comments'])
    },
  })
}
