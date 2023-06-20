// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as API from './';
import { CandidatesPage, CandidatesPageParams } from '~/pagination';

export class Candidates extends APIResource {
  /**
   * Gets a candidate from an organization. A candidate represents an individual
   * associated with one or more applications.
   */
  retrieve(candidateId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Candidate>> {
    return this.get(`/ats/candidates/${candidateId}`, options);
  }

  /**
   * Gets all of an organization's candidates. A candidate represents an individual
   * associated with one or more applications.
   */
  list(query?: CandidateListParams, options?: Core.RequestOptions): Core.PagePromise<CandidatesPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<CandidatesPage>;
  list(
    query: CandidateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CandidatesPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/ats/candidates', CandidatesPage, { query, ...options });
  }
}

/**
 * A candidate represents an individual associated with one or more applications.
 */
export interface Candidate {
  /**
   * Array of Finch uuids corresponding to `application`s for this individual
   */
  application_ids: Array<string>;

  created_at: string;

  emails: Array<Candidate.Emails>;

  first_name: string | null;

  full_name: string | null;

  id: string;

  last_activity_at: string;

  last_name: string | null;

  phone_numbers: Array<Candidate.PhoneNumbers>;
}

export namespace Candidate {
  export interface Emails {
    data?: string | null;

    type?: string | null;
  }

  export interface PhoneNumbers {
    data?: string | null;

    type?: string | null;
  }
}

export interface CandidateListParams extends CandidatesPageParams {}

export namespace Candidates {
  export import Candidate = API.Candidate;
  export import CandidateListParams = API.CandidateListParams;
}
