// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PayGroups extends APIResource {
  /**
   * Read information from a single pay group
   */
  retrieve(
    payGroupID: string,
    query: PayGroupRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PayGroupRetrieveResponse> {
    return this._client.get(path`/employer/pay-groups/${payGroupID}`, {
      query,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Read company pay groups and frequencies
   */
  list(
    query: PayGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PayGroupListResponsesSinglePage, PayGroupListResponse> {
    return this._client.getAPIList('/employer/pay-groups', SinglePage<PayGroupListResponse>, {
      query,
      ...options,
      __security: { bearerAuth: true },
    });
  }
}

export type PayGroupListResponsesSinglePage = SinglePage<PayGroupListResponse>;

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

export interface PayGroupRetrieveParams {
  /**
   * The entity IDs to specify which entities' data to access.
   */
  entity_ids?: Array<string>;
}

export interface PayGroupListParams {
  /**
   * The entity IDs to specify which entities' data to access.
   */
  entity_ids?: Array<string>;

  individual_id?: string;

  pay_frequencies?: Array<string>;
}

export declare namespace PayGroups {
  export {
    type PayGroupRetrieveResponse as PayGroupRetrieveResponse,
    type PayGroupListResponse as PayGroupListResponse,
    type PayGroupListResponsesSinglePage as PayGroupListResponsesSinglePage,
    type PayGroupRetrieveParams as PayGroupRetrieveParams,
    type PayGroupListParams as PayGroupListParams,
  };
}
