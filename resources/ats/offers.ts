// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { OffersPage, OffersPageParams } from '~/pagination';

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
  application_id: string;

  candidate_id: string;

  created_at: string;

  id: string;

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
