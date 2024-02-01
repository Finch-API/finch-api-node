// File generated from our OpenAPI spec by Stainless.

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
    return this._client.post('/auth/token', { body: bodyWithReplacements, ...options });
  }
}

export interface CreateAccessTokenResponse {
  access_token: string;
}

export interface AccessTokenCreateParams {
  code: string;

  redirect_uri: string;

  client_id?: string;

  client_secret?: string;
}

export namespace AccessTokens {
  export import CreateAccessTokenResponse = AccessTokensAPI.CreateAccessTokenResponse;
  export import AccessTokenCreateParams = AccessTokensAPI.AccessTokenCreateParams;
}
