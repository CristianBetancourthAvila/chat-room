import { useMutation, useQueryCache } from 'react-query'
import { logIn } from 'api'

export default () => {
  const queryCache = useQueryCache()
  const [mutate, status] = useMutation(
    ({ name, password }) => logIn({ name, password }),
    {
      onSuccess: data =>
        queryCache.setQueryData('login', () => data, {
          cacheTime: 'Infinity',
          staleTime: 'Infinity',
        }),
      onError: error => {
        // Manejar el error aquí
        console.error('Error during login:', error);
      },
    },
  )
  return { mutate, ...status }
}
