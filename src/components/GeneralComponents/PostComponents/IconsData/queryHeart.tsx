import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

export const getHeart = async (
  postCod: number,
  userCod: string,
  fk: number,
) => {
  try {
    const req = await axios.get(
      'http://localhost/ReactPHP/Funções/GetHeart.php',
      {
        params: {
          postCod: postCod,
          userCod: userCod,
          functionKey: fk,
        },
      },
    )

    if (req.data) {
      return true
    } else if (!req.data) {
      return false
    }
  } catch (err) {
    return err
  }
}

export const QueryGetHeart = (postCod: number, token: string, fk: number) => {
  return useQuery({
    queryKey: ['getHeart', postCod],
    queryFn: () => getHeart(postCod, token, fk),
  })
}

export const useMutationHeart = (
  postCod: number,
  token: string,
  fk: number,
) => {
  const queryClient = useQueryClient()
  return useMutation([postCod], {
    mutationFn: () => getHeart(postCod, token, fk),
    onSuccess: () => {
      queryClient.invalidateQueries(['getHeart'])
    },
    cacheTime: 1000,
  })
}
