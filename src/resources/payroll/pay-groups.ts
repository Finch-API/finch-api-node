// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as PayGroupsAPI from './pay-groups';
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
    | 'semi_annually'
    | 'quarterly'
    | 'monthly'
    | 'semi_monthly'
    | 'bi_weekly'
    | 'weekly'
    | 'daily'
    | 'other'
  >;
}

export interface PayGroupListResponse {
  /**
   * Finch id (uuidv4) for the pay group
   */
  id?: string;

  /**
   * Name of the pay group
   */
  name?: string;

  /**
   * List of pay frequencies associated with this pay group
   */
  pay_frequencies?: Array<
    | 'annually'
    | 'semi_annually'
    | 'quarterly'
    | 'monthly'
    | 'semi_monthly'
    | 'bi_weekly'
    | 'weekly'
    | 'daily'
    | 'other'
  >;
}

export interface PayGroupListParams {
  individual_id?: string;

  pay_frequencies?: Array<string>;
}

export namespace PayGroups {
  export import PayGroupRetrieveResponse = PayGroupsAPI.PayGroupRetrieveResponse;
  export import PayGroupListResponse = PayGroupsAPI.PayGroupListResponse;
  export import PayGroupListResponsesSinglePage = PayGroupsAPI.PayGroupListResponsesSinglePage;
  export import PayGroupListParams = PayGroupsAPI.PayGroupListParams;
}
