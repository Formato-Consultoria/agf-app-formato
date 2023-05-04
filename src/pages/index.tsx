import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { getAccessToken } from '@/services/authentication';

import { Config } from '@/@Types/config-embed';
import { EmbedConfig } from '@/models/embedConfig';
import { useEffect, useState } from 'react';
import Layout from '@/components/layout';
import { useContextAuth } from '@/hooks/useAuthUser';
// import { firestore } from '@/firebase/authFirebase';

const configInput = require("@/config/config.json");

type tIFrame = {
  htmlString: string;
};

const IFrame: React.FC<tIFrame> = ({ htmlString }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

{/* <iframe
  className={"w-full height-calc-screen"}
  title="Report Section"
  src="https://app.powerbi.com/view?r=eyJrIjoiYTVlMzFiZGQtNWIyZS00ODQ3LWFiZmYtYmRmMTQ3OTcyOTY0IiwidCI6ImZjNTZkOWU5LTI5NGUtNDRhMS05MjllLWUwZWU1ZTZhMGQ5MCJ9"
  frameBorder="0"
  allowFullScreen={true}
></iframe> */}

interface Props {
  token: string,
  config: Config,
  reportInWorkspace: any
}

const Home: React.FC<Props> = ({ token, config, reportInWorkspace }) => {
  const [htmlString, setHtmlString] = useState('');
  const { userEmail } = useContextAuth();

  useEffect(() => {
    const fetchConfigData = async () => {
      // const configData = await firestore.collection("configurations").doc(userEmail).get();

      // if (configData.exists) {
      //   const data = configData.data();
      //   console.log(data);
      //   // setHtmlString(data?.iframe);
      // }
    }

    fetchConfigData();
  }, [])

  return (
    <Layout>
      <IFrame htmlString={htmlString} />
    </Layout>
  )
}

export default Home;

export async function getServerSideProps() {
  const token = await getAccessToken();
  const config: Config = configInput;

  const { workspaceId, reportId } = config;
  const reportInGroupApi = `https://api.powerbi.com/v1.0/myorg/groups/${workspaceId}/reports/${reportId}`;
  const response = await fetch(reportInGroupApi, {
    method: 'GET',
    headers: {
      'Content-Type': "application/json",
      'Authorization': "Bearer ".concat(token),
    },
  })

  const reportInWorkspace = await response.json();

  return {
    props: {
      config,
      token,
      reportInWorkspace
    },
  }
}

// {/* <PowerBIEmbed
//   embedConfig={{
//     type: type,
//     id: reportId,
//     embedUrl: reportInWorkspace.embedUrl,
//     accessToken: embedToken,
//     tokenType: models.TokenType.Aad,
//     permissions: models.Permissions.All,
//     settings: {
//       panes: {
//         filters: {
//           visible: false
//         }
//       },
//       background: models.BackgroundType.Default,
//     }
//   }}

//   eventHandlers={
//     new Map([
//       ['loaded', function () { console.log('Report loaded'); }],
//       ['rendered', function () { console.log('Report rendered'); }],
//       ['error', function (event) { console.log(event?.detail); }]
//     ])
//   }

//   cssClassName={"report-style-class"}

//   getEmbeddedComponent={(embeddedReport) => {
//     (window as any).report = embeddedReport as Report;
//   }}
// /> */}