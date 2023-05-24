import { useMemo } from 'react'; 
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Layout from '@/components/layout';

const Home: React.FC = () => {
  const iframeElement = useMemo(() => (
    <iframe
      className={"w-full h-screen"}
      title="Report Section"
      src="https://app.powerbi.com/view?r=eyJrIjoiYTVlMzFiZGQtNWIyZS00ODQ3LWFiZmYtYmRmMTQ3OTcyOTY0IiwidCI6ImZjNTZkOWU5LTI5NGUtNDRhMS05MjllLWUwZWU1ZTZhMGQ5MCJ9"
      allowFullScreen={true}
    ></iframe>
  ), []);

  return (
    <Layout>
      {iframeElement}
    </Layout>
  )
}

export default Home;