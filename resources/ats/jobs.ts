// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as API from './';
import { JobsPage, JobsPageParams } from '~/pagination';

export class Jobs extends APIResource {
  /**
   * Gets a job from an organization.
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Job>> {
    return this.get(`/ats/jobs/${jobId}`, options);
  }

  /**
   * Gets all of an organization's jobs.
   */
  list(query?: JobListParams, options?: Core.RequestOptions): Core.PagePromise<JobsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<JobsPage>;
  list(
    query: JobListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<JobsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/ats/jobs', JobsPage, { query, ...options });
  }
}

export interface Job {
  closed_at: string | null;

  created_at: string | null;

  department: Job.Department;

  hiring_team: Job.HiringTeam;

  id: string;

  name: string | null;

  status: 'open' | 'closed' | 'on_hold' | 'draft' | 'archived' | null;
}

export namespace Job {
  export interface Department {
    name?: string | null;
  }

  export interface HiringTeam {
    hiring_managers?: Array<HiringTeam.HiringManagers> | null;

    recruiters?: Array<HiringTeam.Recruiters> | null;
  }

  export namespace HiringTeam {
    export interface HiringManagers {
      name?: string;
    }

    export interface Recruiters {
      name?: string;
    }
  }
}

export interface JobListParams extends JobsPageParams {}

export namespace Jobs {
  export import Job = API.Job;
  export import JobListParams = API.JobListParams;
}
