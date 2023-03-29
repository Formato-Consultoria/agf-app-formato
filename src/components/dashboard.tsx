import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

interface PowerBIReportProps {
    embedConfig: models.IEmbedConfigurationBase
}

const PowerBIReport: React.FC<PowerBIReportProps> = ({ embedConfig }) => {
    return (
      <div style={{ height: '100%' }}>
        <PowerBIEmbed
            embedConfig={embedConfig}
        />
      </div>
    );
};

export default PowerBIReport;