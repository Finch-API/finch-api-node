// File generated from our OpenAPI spec by Stainless.

import * as Core from '@tryfinch/finch-api/core';
import { APIResource } from '@tryfinch/finch-api/resource';
import * as API from './';
import { SinglePage } from '@tryfinch/finch-api/pagination';

export class Stages extends APIResource {
  /**
   * Get all job stages for an organization. Depending on the system, some jobs may
   * have stages specific to that job. Other job stages may apply broadly to all jobs
   * in the system. Use the `job_id` to determine whether a job applies specifically
   * to a job.
   */
  list(options?: Core.RequestOptions): Core.PagePromise<StagesSinglePage> {
    return this.getAPIList('/ats/stages', StagesSinglePage, options);
  }
}

export class StagesSinglePage extends SinglePage<Stage> {}

export interface Stage {
  id?: string;

  /**
   * The job id that this stage applies to, if applicable. Not all systems enumerate
   * stages specific to jobs.
   */
  job_id?: string | null;

  name?: string | null;
}

export namespace Stages {
  export import Stage = API.Stage;
  export import StagesSinglePage = API.StagesSinglePage;
}
