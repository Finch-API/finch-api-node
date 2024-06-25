// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@tryfinch/finch-api/resource';
import * as Core from '@tryfinch/finch-api/core';
import * as JobsAPI from '@tryfinch/finch-api/resources/sandbox/jobs/jobs';
import * as ConfigurationAPI from '@tryfinch/finch-api/resources/sandbox/jobs/configuration';

export class Jobs extends APIResource {
  configuration: ConfigurationAPI.Configuration = new ConfigurationAPI.Configuration(this._client);

  /**
   * Enqueue a new sandbox job
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

export namespace Jobs {
  export import JobCreateResponse = JobsAPI.JobCreateResponse;
  export import JobCreateParams = JobsAPI.JobCreateParams;
  export import Configuration = ConfigurationAPI.Configuration;
  export import SandboxJobConfiguration = ConfigurationAPI.SandboxJobConfiguration;
  export import ConfigurationRetrieveResponse = ConfigurationAPI.ConfigurationRetrieveResponse;
  export import ConfigurationUpdateParams = ConfigurationAPI.ConfigurationUpdateParams;
}
