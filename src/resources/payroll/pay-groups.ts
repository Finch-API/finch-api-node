// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class PayGroups extends APIResource {
  /**
   * Read information from a single pay group
   */
  retrieve(payGroupId: string, options?: Core.RequestOptions): Core.APIPromise<PayGroupRetrieveResponse> {
    return this._client.get(`/employer/pay-groups/${payGroupId}`, options);
  }

  /**
   * Read company pay groups and frequencies
   */
  list(
    query?: PayGroupListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PayGroupListResponsesSinglePage, PayGroupListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<PayGroupListResponsesSinglePage, PayGroupListResponse>;
  list(
    query: PayGroupListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PayGroupListResponsesSinglePage, PayGroupListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/employer/pay-groups', PayGroupListResponsesSinglePage, {
      query,
      ...options,
    });
  }
}

export class PayGroupListResponsesSinglePage extends SinglePage<PayGroupListResponse> {}

export interface PayGroupRetrieveResponse {
  /**
   * Finch id (uuidv4) for the pay group
   */
  id: string;

  individual_ids: Array<string>;

  /**
   * Name of the pay group
   */
  name: string;

  /**
   * List of pay frequencies associated with this pay group
   */
  pay_frequencies: Array<
    | 'annually'
    | 'bi_weekly'
    | 'daily'
    | 'monthly'
    | 'other'
    | 'quarterly'
    | 'semi_annually'
    | 'semi_monthly'
    | 'weekly'
  >;
}

export interface PayGroupListResponse {
  /**
   * Finch id (uuidv4) for the pay group
   */
  id: string;

  /**
   * Name of the pay group
   */
  name: string;

  /**
   * List of pay frequencies associated with this pay group
   */
  pay_frequencies: Array<
    | 'annually'
    | 'bi_weekly'
    | 'daily'
    | 'monthly'
    | 'other'
    | 'quarterly'
    | 'semi_annually'
    | 'semi_monthly'
    | 'weekly'
  >;
}

export interface PayGroupListParams {
  individual_id?: string;

  pay_frequencies?: Array<string>;
}

PayGroups.PayGroupListResponsesSinglePage = PayGroupListResponsesSinglePage;

export declare namespace PayGroups {
  export {
    type PayGroupRetrieveResponse as PayGroupRetrieveResponse,
    type PayGroupListResponse as PayGroupListResponse,
    PayGroupListResponsesSinglePage as PayGroupListResponsesSinglePage,
    type PayGroupListParams as PayGroupListParams,
  };
}
