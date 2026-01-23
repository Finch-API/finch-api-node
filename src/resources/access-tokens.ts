// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AccessTokens extends APIResource {
  /**
   * Exchange the authorization code for an access token
   */
  create(body: AccessTokenCreateParams, options?: RequestOptions): APIPromise<CreateAccessTokenResponse> {
    return this._client.post('/auth/token', { body, ...options, __security: {} });
  }
}

export interface CreateAccessTokenResponse {
  /**
   * The access token for the connection
   */
  access_token: string;

  /**
   * The type of application associated with a token.
   */
  client_type: 'development' | 'production' | 'sandbox';

  /**
   * The Finch UUID of the connection associated with the `access_token`
   */
  connection_id: string;

  /**
   * The type of the connection associated with the token.
   *
   * - `provider` - connection to an external provider
   * - `finch` - finch-generated data.
   */
  connection_type: 'finch' | 'provider';

  /**
   * An array of entity IDs that can be accessed with this access token
   */
  entity_ids: Array<string>;

  /**
   * An array of the authorized products associated with the `access_token`
   */
  products: Array<string>;

  /**
   * The ID of the provider associated with the `access_token`
   */
  provider_id: string;

  /**
   * The RFC 8693 token type (Finch uses `bearer` tokens)
   */
  token_type: string;

  /**
   * @deprecated [DEPRECATED] Use `connection_id` to identify the connection instead
   * of this account ID
   */
  account_id?: string;

  /**
   * @deprecated [DEPRECATED] Use `connection_id` to identify the connection instead
   * of this company ID
   */
  company_id?: string;

  /**
   * The ID of your customer you provided to Finch when a connect session was created
   * for this connection
   */
  customer_id?: string | null;
}

export interface AccessTokenCreateParams {
  /**
   * The authorization code received from the authorization server
   */
  code: string;

  /**
   * The client ID for your application
   */
  client_id?: string;

  /**
   * The client secret for your application
   */
  client_secret?: string;

  /**
   * The redirect URI used in the authorization request (optional)
   */
  redirect_uri?: string;
}

export declare namespace AccessTokens {
  export {
    type CreateAccessTokenResponse as CreateAccessTokenResponse,
    type AccessTokenCreateParams as AccessTokenCreateParams,
  };
}
