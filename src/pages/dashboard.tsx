import { Inter } from 'next/font/google'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })
import cx from 'clsx';

import { models } from 'powerbi-client';
import { GetServerSideProps } from 'next';
import PowerBIReport from '@/components/dashboard';

interface Props {
  embedConfig: models.IEmbedConfigurationBase;
}

const Dash: React.FC<Props> = ({ embedConfig }) => {
  return (<>
    {/* <PowerBIReport embedConfig={embedConfig} /> */}
  </>)
}

export default Dash;