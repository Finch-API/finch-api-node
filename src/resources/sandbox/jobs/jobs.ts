// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '@tryfinch/finch-api/resource';
import * as ConfigurationAPI from '@tryfinch/finch-api/resources/sandbox/jobs/configuration';

export class Jobs extends APIResource {
  configuration: ConfigurationAPI.Configuration = new ConfigurationAPI.Configuration(this._client);
}

export namespace Jobs {
  export import Configuration = ConfigurationAPI.Configuration;
  export import SandboxJobConfiguration = ConfigurationAPI.SandboxJobConfiguration;
  export import ConfigurationRetrieveResponse = ConfigurationAPI.ConfigurationRetrieveResponse;
  export import ConfigurationUpdateParams = ConfigurationAPI.ConfigurationUpdateParams;
}
