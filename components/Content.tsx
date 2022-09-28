import * as React from 'react';
import dayjs from 'dayjs';

import useCurrentTime from '@/hooks/useCurrentTime';
import Image from "next/image"
import ButtonLink from './links/ButtonLink';
import { formatTime } from 'utils';

type ContentProps = {
  data: any;
  title: string;
  description: string;
};

export default function Content({
  data,
  title,
  description,
}: ContentProps) {

  const cleanDate = data?.datetime && formatTime(new Date(data?.datetime));
  const realTime = useCurrentTime();
  return (
    <section className='bg-dark'>
      <div className='flex flex-col items-center justify-center min-h-screen text-center text-white layout'>
        <h1>{title}</h1>
        <p className='mt-4 text-gray-300'>{description}</p>

        {
          data ? <>
            <h2 className='mt-8 md:text-2xl text-primary-400'>


              {
                `pokeName : ${data?.name}`
              }
            </h2>
            <div className="mt-8">
              <Image src={data?.sprites?.other?.["official-artwork"]?.front_default}
                width={200} height={200} alt="test"

              />
            </div>


            <h2 className='mt-8 text-2xl md:text-3xl text-primary-400'>
              {cleanDate}
            </h2>

          </> : <h2 className='mt-8 text-3xl md:text-5xl text-primary-400'>
            LOADING...
          </h2>
        }
        <ButtonLink className='mt-8' href='/'>
          Back to Home
        </ButtonLink>
      </div>

      <div className='absolute text-sm font-medium text-right right-4 bottom-8 sm:bottom-4'>
        <p className='text-white'>Real Time:</p>
        <p className='text-primary-400'>{realTime}</p>
      </div>
    </section>
  );
}
