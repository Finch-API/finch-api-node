// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@tryfinch/finch-api/core';
import { APIResource } from '@tryfinch/finch-api/resource';
import * as AccessTokensAPI from '@tryfinch/finch-api/resources/access-tokens';

export class AccessTokens extends APIResource {
  /**
   * Exchange the authorization code for an access token
   */
  create(
    body: AccessTokenCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateAccessTokenResponse> {
    return this._client.post('/auth/token', { body, ...options });
  }
}

export interface CreateAccessTokenResponse {
  access_token: string;

  /**
   * The Finch uuid of the account used to connect this company.
   */
  account_id: string;

  /**
   * The type of application associated with a token.
   */
  client_type: 'production' | 'development' | 'sandbox';

  /**
   * The Finch uuid of the company associated with the `access_token`.
   */
  company_id: string;

  /**
   * The type of the connection associated with the token.
   *
   * - `provider` - connection to an external provider
   * - `finch` - finch-generated data.
   */
  connection_type: 'provider' | 'finch';

  /**
   * An array of the authorized products associated with the `access_token`.
   */
  products: Array<string>;

  /**
   * The payroll provider associated with the `access_token`.
   */
  provider_id: string;
}

export interface AccessTokenCreateParams {
  code: string;

  client_id?: string;

  client_secret?: string;

  redirect_uri?: string;
}

export namespace AccessTokens {
  export import CreateAccessTokenResponse = AccessTokensAPI.CreateAccessTokenResponse;
  export import AccessTokenCreateParams = AccessTokensAPI.AccessTokenCreateParams;
}
