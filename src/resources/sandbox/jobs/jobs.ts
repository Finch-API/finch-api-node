// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ConfigurationAPI from './configuration';
import {
  Configuration,
  ConfigurationRetrieveResponse,
  ConfigurationUpdateParams,
  SandboxJobConfiguration,
} from './configuration';

export class Jobs extends APIResource {
  configuration: ConfigurationAPI.Configuration = new ConfigurationAPI.Configuration(this._client);

  /**
   * Enqueue a new sandbox job
   *
   * @example
   * ```ts
   * const job = await client.sandbox.jobs.create({
   *   type: 'data_sync_all',
   * });
   * ```
   */
  create(body: JobCreateParams, options?: Core.RequestOptions): Core.APIPromise<JobCreateResponse> {
    return this._client.post('/sandbox/jobs', { body, ...options });
  }
}

export interface JobCreateResponse {
  /**
   * The number of allowed refreshes per hour (per hour, fixed window)
   */
  allowed_refreshes: number;

  /**
   * The id of the job that has been created.
   */
  job_id: string;

  /**
   * The url that can be used to retrieve the job status
   */
  job_url: string;

  /**
   * The number of remaining refreshes available (per hour, fixed window)
   */
  remaining_refreshes: number;
}

export interface JobCreateParams {
  /**
   * The type of job to start. Currently the only supported type is `data_sync_all`
   */
  type: 'data_sync_all';
}

Jobs.Configuration = Configuration;

export declare namespace Jobs {
  export { type JobCreateResponse as JobCreateResponse, type JobCreateParams as JobCreateParams };

  export {
    Configuration as Configuration,
    type SandboxJobConfiguration as SandboxJobConfiguration,
    type ConfigurationRetrieveResponse as ConfigurationRetrieveResponse,
    type ConfigurationUpdateParams as ConfigurationUpdateParams,
  };
}
