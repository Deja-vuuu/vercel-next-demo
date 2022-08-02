import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

import 'antd/dist/antd.css';

const Home: NextPage = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        test
      </Head>
    </div>
  )
}

export default Home
