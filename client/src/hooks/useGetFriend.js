import { useQuery } from "react-query"
import { fKey } from "utils/querykeys"

export default function useGetFriend(id) {
  const { data } = useQuery(fKey)
  const friend = data?.find((elem) => elem.id === id)
  return friend
}
