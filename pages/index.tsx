import * as React from 'react';

import useCurrentTime from '@/hooks/useCurrentTime';

import CustomLink from '@/components/links/CustomLink';

const HomePage = () => {
  const realTime = useCurrentTime();
  return (
    <>
      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-center text-white layout'>
            <h1 className='text-2xl md:text-4xl'>
              <CustomLink href='https://github.com/Deja-vuuu/vercel-next-demo'>
                Types of Next Rendering
              </CustomLink>
            </h1>
            <p className='mt-2 text-sm text-gray-300'>
              Demo of Next.js rendering type using API.
            </p>

            <div className='flex flex-col items-center mt-10 space-y-2 '>
              <CustomLink href='/csr/1'>CSR</CustomLink>
              <CustomLink href='/ssr/1'>SSR</CustomLink>
              <CustomLink href='/ssg/1'>SSG</CustomLink>
              <CustomLink href='/isr/1'>ISR</CustomLink>
              <CustomLink href='/isr-20/1'>ISR 20s</CustomLink>
            </div>

          </div>

          <div className='absolute text-sm font-medium text-right right-4 bottom-8 sm:bottom-4'>
            <p className='text-white'>Real Time:</p>
            <p className='text-primary-400'>{realTime}</p>
          </div>
        </section>
      </main>
    </>
  );
}


export default HomePage