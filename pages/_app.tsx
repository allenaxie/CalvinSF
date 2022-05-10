import 'antd/dist/antd.css';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import {Navbar} from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
