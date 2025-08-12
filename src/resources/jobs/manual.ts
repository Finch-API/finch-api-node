// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Manual extends APIResource {
  /**
   * Get a manual job by `job_id`. Manual jobs are completed by a human and include
   * Assisted Benefits jobs.
   */
  retrieve(
    jobId: string,
    query?: ManualRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ManualAsyncJob>;
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<ManualAsyncJob>;
  retrieve(
    jobId: string,
    query: ManualRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ManualAsyncJob> {
    if (isRequestOptions(query)) {
      return this.retrieve(jobId, {}, query);
    }
    return this._client.get(`/jobs/manual/${jobId}`, { query, ...options });
  }
}

export interface ManualAsyncJob {
  /**
   * Specific information about the job, such as individual statuses for batch jobs.
   */
  body: Array<unknown> | null;

  job_id: string;

  status: 'pending' | 'in_progress' | 'error' | 'complete';
}

export interface ManualRetrieveParams {
  /**
   * The entity ID to use when authenticating with a multi-account token. Required
   * when using a multi-account token to specify which entity's data to access.
   * Example: `123e4567-e89b-12d3-a456-426614174000`
   */
  entity_id?: string;
}

export declare namespace Manual {
  export { type ManualAsyncJob as ManualAsyncJob, type ManualRetrieveParams as ManualRetrieveParams };
}
