import { useRouter } from "next/router";
import type { NextPage } from 'next'

const Detail: NextPage = props => {
  // const { data } = props
  // console.log('data', data);

  const router = useRouter();
  const { id } = router?.query;
  return (
    <h1>
      {id}
    </h1>
  )
}


// export async function getServerSideProps(context) {
//   const { id } = context.query;
//   const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id).then((data) => {
//     return data.json();
//   });
//   return {
//     props: {
//       data: res
//     }
//   };
// }
export default Detail;
