// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AutomatedAPI from './automated';
import { Page, type PageParams } from '../../pagination';

export class Automated extends APIResource {
  /**
   * Enqueue an automated job. Currently, only the `data_sync_all` job type is
   * supported, which will enqueue a job to re-sync all data for a connection.
   * `data_sync_all` has a concurrency limit of 1 job at a time per connection. This
   * means that if this endpoint is called while a job is already in progress for
   * this connection, Finch will return the `job_id` of the job that is currently in
   * progress. Finch allows a fixed window rate limit of 1 forced refresh per hour
   * per connection.
   *
   * This endpoint is available for _Scale_ tier customers as an add-on. To request
   * access to this endpoint, please contact your Finch account manager.
   */
  create(
    body: AutomatedCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AutomatedCreateResponse> {
    return this._client.post('/jobs/automated', { body, ...options });
  }

  /**
   * Get an automated job by `job_id`.
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<AutomatedAsyncJob> {
    return this._client.get(`/jobs/automated/${jobId}`, options);
  }

  /**
   * Get all automated jobs. Automated jobs are completed by a machine. By default,
   * jobs are sorted in descending order by submission time. For scheduled jobs such
   * as data syncs, only the next scheduled job is shown.
   */
  list(
    query?: AutomatedListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AutomatedAsyncJobsPage, AutomatedAsyncJob>;
  list(options?: Core.RequestOptions): Core.PagePromise<AutomatedAsyncJobsPage, AutomatedAsyncJob>;
  list(
    query: AutomatedListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AutomatedAsyncJobsPage, AutomatedAsyncJob> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/jobs/automated', AutomatedAsyncJobsPage, { query, ...options });
  }
}

export class AutomatedAsyncJobsPage extends Page<AutomatedAsyncJob> {}

export interface AutomatedAsyncJob {
  /**
   * The datetime the job completed.
   */
  completed_at: string | null;

  /**
   * The datetime when the job was created. for scheduled jobs, this will be the
   * initial connection time. For ad-hoc jobs, this will be the time the creation
   * request was received.
   */
  created_at: string;

  /**
   * The id of the job that has been created.
   */
  job_id: string;

  /**
   * The url that can be used to retrieve the job status
   */
  job_url: string;

  /**
   * The datetime a job is scheduled to be run. For scheduled jobs, this datetime can
   * be in the future if the job has not yet been enqueued. For ad-hoc jobs, this
   * field will be null.
   */
  scheduled_at: string | null;

  /**
   * The datetime a job entered into the job queue.
   */
  started_at: string | null;

  status: 'pending' | 'in_progress' | 'complete' | 'error' | 'reauth_error' | 'permissions_error';

  /**
   * Only `data_sync_all` currently supported
   */
  type: 'data_sync_all';
}

export interface AutomatedCreateResponse {
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

export interface AutomatedCreateParams {
  /**
   * The type of job to start. Currently the only supported type is `data_sync_all`
   */
  type: 'data_sync_all';
}

export interface AutomatedListParams extends PageParams {}

export namespace Automated {
  export import AutomatedAsyncJob = AutomatedAPI.AutomatedAsyncJob;
  export import AutomatedCreateResponse = AutomatedAPI.AutomatedCreateResponse;
  export import AutomatedAsyncJobsPage = AutomatedAPI.AutomatedAsyncJobsPage;
  export import AutomatedCreateParams = AutomatedAPI.AutomatedCreateParams;
  export import AutomatedListParams = AutomatedAPI.AutomatedListParams;
}
