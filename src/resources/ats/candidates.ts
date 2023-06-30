// File generated from our OpenAPI spec by Stainless.

import * as Core from '@tryfinch/finch-api/core';
import { APIResource } from '@tryfinch/finch-api/resource';
import { isRequestOptions } from '@tryfinch/finch-api/core';
import * as API from './';
import { CandidatesPage, CandidatesPageParams } from '@tryfinch/finch-api/pagination';

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
  id: string;

  /**
   * Array of Finch uuids corresponding to `application`s for this individual
   */
  application_ids: Array<string>;

  created_at: string;

  emails: Array<Candidate.Email>;

  first_name: string | null;

  full_name: string | null;

  last_activity_at: string;

  last_name: string | null;

  phone_numbers: Array<Candidate.PhoneNumber>;
}

export namespace Candidate {
  export interface Email {
    data?: string | null;

    type?: string | null;
  }

  export interface PhoneNumber {
    data?: string | null;

    type?: string | null;
  }
}

export interface CandidateListParams extends CandidatesPageParams {}

export namespace Candidates {
  export import Candidate = API.Candidate;
  export import CandidateListParams = API.CandidateListParams;
}
