// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class AccessTokens extends APIResource {
  /**
   * Exchange the authorization code for an access token
   */
  create(
    body: AccessTokenCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateAccessTokenResponse> {
    const clientID = body.client_id || this._client.clientId;
    if (!clientID)
      throw new Error(
        'client_id must be provided as an argument or with the FINCH_CLIENT_ID environment variable',
      );
    const clientSecret = body.client_secret || this._client.clientSecret;
    if (!clientSecret)
      throw new Error(
        'client_secret must be provided as an argument or with the FINCH_CLIENT_SECRET environment variable',
      );
    const bodyWithReplacements = {
      ...body,
      client_id: clientID,
      client_secret: clientSecret,
    };
    const headersWithReplacements = {
      ...options?.headers,
      authorization: null,
    };
    return this._client.post('/auth/token', {
      body: bodyWithReplacements,
      ...options,
      headers: headersWithReplacements,
    });
  }
}

export interface CreateAccessTokenResponse {
  /**
   * The access token for the connection.
   */
  access_token: string;

  /**
   * @deprecated [DEPRECATED] Use `connection_id` to identify the connection instead
   * of this account ID.
   */
  account_id: string;

  /**
   * The type of application associated with a token.
   */
  client_type: 'production' | 'development' | 'sandbox';

  /**
   * @deprecated [DEPRECATED] Use `connection_id` to identify the connection instead
   * of this company ID.
   */
  company_id: string;

  /**
   * The Finch UUID of the connection associated with the `access_token`.
   */
  connection_id: string;

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
   * The ID of the provider associated with the `access_token`.
   */
  provider_id: string;

  /**
   * The ID of your customer you provided to Finch when a connect session was created
   * for this connection.
   */
  customer_id?: string | null;

  /**
   * The RFC 8693 token type (Finch uses `bearer` tokens)
   */
  token_type?: string;
}

export interface AccessTokenCreateParams {
  code: string;

  client_id?: string;

  client_secret?: string;

  redirect_uri?: string;
}

export declare namespace AccessTokens {
  export {
    type CreateAccessTokenResponse as CreateAccessTokenResponse,
    type AccessTokenCreateParams as AccessTokenCreateParams,
  };
}
