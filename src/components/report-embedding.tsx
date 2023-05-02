import { Config } from '@/@Types/config-embed';
import { EmbedConfig } from '@/models/embedConfig';
import { Report, Embed, models, service } from 'powerbi-client';
import { PowerBIEmbed } from 'powerbi-client-react';

interface Props {
    token: string;
    config: Config;
    reportInWorkspace: any;
}

const PowerBIReport: React.FC<Props> = ({ config, token, reportInWorkspace }) => {
    const embedConfig = new EmbedConfig('report', config, token);

    const { embedToken, reportsDetail, type } = embedConfig;

    const embedParams: models.IReportEmbedConfiguration = {
        type: type,
        id: reportsDetail.reportId,
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
    };

    const eventHandlersMap = new Map([
		['loaded', () => {
			console.log('Report has loaded');
		}],
		['rendered', () => {
			console.log('Report has rendered');
		}],
		['error', (event?: service.ICustomEvent<any>) => {
			if (event) {
				console.error(event.detail);
			}
		}]
	]);


    return (
        <PowerBIEmbed
            embedConfig={embedParams}
            eventHandlers={eventHandlersMap}
            cssClassName = {"report-style-class"}
            getEmbeddedComponent={(embeddedReport:Embed) => {
                // Adicione os eventos de acordo com a necessidade
            }}
        />
    );
};

export default PowerBIReport;