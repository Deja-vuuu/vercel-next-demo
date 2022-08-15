import { useRouter } from "next/router";
import type { NextPage } from 'next'

const Detail: NextPage = () => {
  const router = useRouter();
  const { id } = router?.query;
  return (
    <h1>
      {id}
    </h1>
  )
}

export default Detail;
