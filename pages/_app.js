import '../styles/globals.css'
import NavBar from '../components/NavBar/Nav';

function MyApp({ Component, pageProps }) { 
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
