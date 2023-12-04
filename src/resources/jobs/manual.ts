// File generated from our OpenAPI spec by Stainless.

import * as Core from '@tryfinch/finch-api/core';
import { APIResource } from '@tryfinch/finch-api/resource';
import * as ManualAPI from '@tryfinch/finch-api/resources/jobs/manual';

export class Manual extends APIResource {
  /**
   * Get a manual job by `job_id`. Manual jobs are completed by a human and include
   * Assisted Benefits jobs.
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<ManualAsyncJob> {
    return this._client.get(`/jobs/manual/${jobId}`, options);
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

export namespace Manual {
  export import ManualAsyncJob = ManualAPI.ManualAsyncJob;
}
