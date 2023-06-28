// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as Stages from '~/resources/ats/stages';
import * as API from './';
import { ApplicationsPage, ApplicationsPageParams } from '~/pagination';

export class Applications extends APIResource {
  /**
   * Gets an application from an organization.
   */
  retrieve(applicationId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Application>> {
    return this.get(`/ats/applications/${applicationId}`, options);
  }

  /**
   * Gets all of an organization's applications.
   */
  list(query?: ApplicationListParams, options?: Core.RequestOptions): Core.PagePromise<ApplicationsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<ApplicationsPage>;
  list(
    query: ApplicationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ApplicationsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/ats/applications', ApplicationsPage, { query, ...options });
  }
}

export interface Application {
  id: string;

  candidate_id: string;

  job_id: string;

  offer_id: string | null;

  rejected_at: string | null;

  rejected_reason: Application.RejectedReason | null;

  stage: Stages.Stage | null;
}

export namespace Application {
  export interface RejectedReason {
    text?: string | null;
  }
}

export interface ApplicationListParams extends ApplicationsPageParams {}

export namespace Applications {
  export import Application = API.Application;
  export import ApplicationListParams = API.ApplicationListParams;
}
