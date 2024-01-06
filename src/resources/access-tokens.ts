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
    return this._client.post('/auth/token', { body, ...options });
  }
}

export interface CreateAccessTokenResponse {
  access_token: string;
}

export interface AccessTokenCreateParams {
  client_id: string;

  client_secret: string;

  code: string;

  redirect_uri: string;
}

export namespace AccessTokens {
  export import CreateAccessTokenResponse = AccessTokensAPI.CreateAccessTokenResponse;
  export import AccessTokenCreateParams = AccessTokensAPI.AccessTokenCreateParams;
}
