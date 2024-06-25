// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@tryfinch/finch-api/resource';
import * as Core from '@tryfinch/finch-api/core';
import * as ConfigurationAPI from '@tryfinch/finch-api/resources/sandbox/jobs/configuration';

export class Configuration extends APIResource {
  /**
   * Get configurations for sandbox jobs
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<ConfigurationRetrieveResponse> {
    return this._client.get('/sandbox/jobs/configuration', options);
  }

  /**
   * Update configurations for sandbox jobs
   */
  update(
    body: ConfigurationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SandboxJobConfiguration> {
    return this._client.put('/sandbox/jobs/configuration', { body, ...options });
  }
}

export interface SandboxJobConfiguration {
  completion_status: 'complete' | 'reauth_error' | 'permissions_error' | 'error';

  type: 'data_sync_all';
}

export type ConfigurationRetrieveResponse = Array<SandboxJobConfiguration>;

export interface ConfigurationUpdateParams {
  completion_status: 'complete' | 'reauth_error' | 'permissions_error' | 'error';

  type: 'data_sync_all';
}

export namespace Configuration {
  export import SandboxJobConfiguration = ConfigurationAPI.SandboxJobConfiguration;
  export import ConfigurationRetrieveResponse = ConfigurationAPI.ConfigurationRetrieveResponse;
  export import ConfigurationUpdateParams = ConfigurationAPI.ConfigurationUpdateParams;
}
