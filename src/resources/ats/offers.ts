// File generated from our OpenAPI spec by Stainless.

import * as Core from '@tryfinch/finch-api/core';
import { APIResource } from '@tryfinch/finch-api/resource';
import { isRequestOptions } from '@tryfinch/finch-api/core';
import * as API from './';
import { OffersPage, OffersPageParams } from '@tryfinch/finch-api/pagination';

export class Offers extends APIResource {
  /**
   * Get a single offer from an organization.
   */
  retrieve(offerId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Offer>> {
    return this.get(`/ats/offers/${offerId}`, options);
  }

  /**
   * Get all offers put out by an organization.
   */
  list(query?: OfferListParams, options?: Core.RequestOptions): Core.PagePromise<OffersPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<OffersPage>;
  list(
    query: OfferListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<OffersPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/ats/offers', OffersPage, { query, ...options });
  }
}

export interface Offer {
  id: string;

  application_id: string;

  candidate_id: string;

  created_at: string;

  job_id: string;

  status:
    | 'signed'
    | 'rejected'
    | 'draft'
    | 'approval-sent'
    | 'approved'
    | 'sent'
    | 'sent-manually'
    | 'opened'
    | 'archived';

  updated_at: string;
}

export interface OfferListParams extends OffersPageParams {}

export namespace Offers {
  export import Offer = API.Offer;
  export import OfferListParams = API.OfferListParams;
}
