import { useRouter } from "next/router";

import Image from "next/image"
import type { NextPage } from 'next'
import { useEffect } from "react";

const Detail: NextPage = (props: any) => {
  const { data } = props
  console.log('data', data);
  console.log('data', data?.sprites?.other);

  const router = useRouter();
  const { id } = router?.query;

  useEffect(() => {
    
  }, [])
  return (
    <h1>
      {id}
      {
        data?.name
      }
      <Image src={data?.sprites?.other?.["official-artwork"]?.front_default}
        width={200} height={200} />
    </h1>
  )
}


export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id).then((data) => {
    return data.json();
  });
  return {
    props: {
      data: res
    }
  };
}
export default Detail;
