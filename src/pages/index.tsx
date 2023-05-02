import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { models, Report, Embed, service, Page } from 'powerbi-client';
import { PowerBIEmbed } from 'powerbi-client-react';
// import 'powerbi-report-authoring';

import { getAccessToken } from '@/services/authentication';

import { Config } from '@/@Types/config-embed';
import PowerBIReport from '@/components/report-embedding';
const configInput = require("@/config/config.json");

interface Props {
  reportComponent: JSX.Element;
}

const Home: React.FC<Props> = ({ reportComponent }) => {
  return (<>{reportComponent}</>)
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
    reportComponent: <PowerBIReport config={config} token={token} reportInWorkspace={reportInWorkspace} />
  }
}

// <PowerBIEmbed
//       embedConfig={sampleReportConfig}
//       embedConfig={{
//         type: type,
//         id: reportId,
//         embedUrl: reportInWorkspace.embedUrl,
//         accessToken: embedToken,
//         tokenType: models.TokenType.Aad,
//         permissions: models.Permissions.All,
//         settings: {
//           panes: {
//             filters: {
//               visible: false
//             }
//           },
//           background: models.BackgroundType.Default,
//         }
//       }}

//       eventHandlers={eventHandlersMap}
//       cssClassName={"report-style-class"}
//       getEmbeddedComponent = { (embedObject:Embed) => {
//         console.log(`Embedded object of type "${ embedObject.embedtype }" received`);
//         setReport(embedObject as Report);
//       }}
// />