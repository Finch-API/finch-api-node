// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Manual extends APIResource {
  /**
   * Check the status and outcome of a job by `job_id`. This includes all deductions
   * jobs including those for both automated and assisted integrations.
   */
  retrieve(jobID: string, options?: RequestOptions): APIPromise<ManualAsyncJob> {
    return this._client.get(path`/jobs/manual/${jobID}`, options);
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

export declare namespace Manual {
  export { type ManualAsyncJob as ManualAsyncJob };
}
