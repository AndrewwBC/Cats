import Axios, { AxiosError } from 'axios'

export const getPosts = async () => {
  try {
    const request = await Axios.get(
      'http://localhost/ReactPHP/Funções/GetPosts.php',
    )
    return request.data
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response
    }
  }
}
