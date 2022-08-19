import { useRouter } from "next/router";

import Image from "next/image"
import type { NextPage,GetStaticProps  } from 'next'
import { useEffect } from "react";
import {range } from "lodash";


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
        width={200} height={200} alt="test"/>
    </h1>
  )
}


export const getStaticProps: GetStaticProps = async(context: any)=> {
  const { id } = context.params;
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id).then((data) => {
    return data.json();
  });
  const {name, sprites} = res;
  return {
    props: {
      data: {
        name, sprites
      }
    },
    // revalidate:10
  };
}

export async function getStaticPaths(context: any) {
 return{ 
    paths: range(1,20).map((id)=>{
      return{
        params:{
          id: String(id)
        }
      }
    }),
    fallback: "blocking"
 }
}
export default Detail;
