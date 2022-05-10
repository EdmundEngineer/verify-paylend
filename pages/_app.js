import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="bg-gray-200">
     <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
