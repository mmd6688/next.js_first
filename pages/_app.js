// pages/_app.js

import React from 'react';
import Header from '@/components/Header';
import '../styles/globals.css';

// MyApp コンポーネントは、アプリケーションの全ページに共通するレイアウトを定義します。
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;