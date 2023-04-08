// Configurations of the embedded reports

export class PowerBiReportDetails {
    constructor(
        public reportId: string,
        public reportName: string,
        public embedUrl: string
    ) {}
}