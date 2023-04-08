// Properties for embedding the report 
import { Config } from "@/@Types/config-embed";

export class EmbedConfig {
    constructor(
        public type: string,
        public reportsDetail: Config,
        public embedToken: string
    ) {}
}