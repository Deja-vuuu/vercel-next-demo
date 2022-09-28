import { useRouter } from "next/router";

import Image from "next/image"
import type { NextPage, GetStaticProps } from 'next'
import { useEffect } from "react";
import { range } from "lodash";


const Detail: NextPage = (props: any) => {
  const { data } = props
  return (
    <div>
      {
        data?.name
      }
      <Image src={data?.sprites?.other?.["official-artwork"]?.front_default}
        width={200} height={200} alt="test" />
    </div>
  )
}


export const getStaticProps: GetStaticProps = async (context: any) => {
  const { id } = context.params;
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id).then((data) => {
    return data.json();
  });
  const { name, sprites, stats } = res;
  return {
    props: {
      data: {
        name, sprites, stats
      }
    },
    revalidate:10
  };
}

export async function getStaticPaths(context: any) {
  return {
    paths: range(1, 20).map((id) => {
      return {
        params: {
          id: String(id)
        }
      }
    }),
    fallback: "blocking"
  }
}
export default Detail;
