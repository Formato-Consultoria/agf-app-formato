import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import cx from 'clsx';

import { PowerBIEmbed } from 'powerbi-client-react';
import * as adal from 'adal-angular';
import * as powerbi from 'powerbi-client';

import { getAccessToken } from '@/services/authentication';

import { Config } from '@/@Types/config-embed';
import { EmbedConfig } from '@/models/embedConfig';
import { useEffect, useState } from 'react';
const configInput = require("@/config/config.json");

interface Props {
  token: string,
  config: Config,
  reportInWorkspace: any
}

const Home: React.FC<Props> = ({ token, config, reportInWorkspace }) => {
  const embedConfig = new EmbedConfig('report', config, token);
  const [embedUrl, setEmbedUrl] = useState("");

  const { embedToken, reportsDetail, type } = embedConfig;
  const { reportId } = reportsDetail;

  return (<>
    {/* <PowerBIEmbed
      embedConfig={{
        type: type,
        id: reportId,
        embedUrl: reportInWorkspace.embedUrl,
        accessToken: embedToken,
        tokenType: models.TokenType.Aad,
        permissions: models.Permissions.All,
        settings: {
          panes: {
            filters: {
              visible: false
            }
          },
          background: models.BackgroundType.Default,
        }
      }}

      eventHandlers={
        new Map([
          ['loaded', function () { console.log('Report loaded'); }],
          ['rendered', function () { console.log('Report rendered'); }],
          ['error', function (event) { console.log(event?.detail); }]
        ])
      }

      cssClassName={"report-style-class"}

      getEmbeddedComponent={(embeddedReport) => {
        (window as any).report = embeddedReport as Report;
      }}
    /> */}

  <iframe
    className={"w-full height-calc-screen"}
    title="FluxoCaixaGarden"
    src={`https://app.powerbi.com/reportEmbed?reportId=e568664c-0dfe-4545-9f12-b337179ba255&autoAuth=true&ctid=fc56d9e9-294e-44a1-929e-e0ee5e6a0d90`}
    frameBorder={0}
    allowFullScreen={true}></iframe>
  </>)
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
  console.log(reportInWorkspace);

  return {
    props: {
      config,
      token,
      reportInWorkspace
    },
  }
}