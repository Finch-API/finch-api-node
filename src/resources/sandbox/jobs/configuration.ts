// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Configuration extends APIResource {
  /**
   * Get configurations for sandbox jobs
   *
   * @example
   * ```ts
   * const sandboxJobConfigurations =
   *   await client.sandbox.jobs.configuration.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<ConfigurationRetrieveResponse> {
    return this._client.get('/sandbox/jobs/configuration', { ...options, __security: { bearerAuth: true } });
  }

  /**
   * Update configurations for sandbox jobs
   *
   * @example
   * ```ts
   * const sandboxJobConfiguration =
   *   await client.sandbox.jobs.configuration.update({
   *     completion_status: 'complete',
   *     type: 'data_sync_all',
   *   });
   * ```
   */
  update(body: ConfigurationUpdateParams, options?: RequestOptions): APIPromise<SandboxJobConfiguration> {
    return this._client.put('/sandbox/jobs/configuration', {
      body,
      ...options,
      __security: { bearerAuth: true },
    });
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

export declare namespace Configuration {
  export {
    type SandboxJobConfiguration as SandboxJobConfiguration,
    type ConfigurationRetrieveResponse as ConfigurationRetrieveResponse,
    type ConfigurationUpdateParams as ConfigurationUpdateParams,
  };
}
