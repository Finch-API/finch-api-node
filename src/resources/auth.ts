// File generated from our OpenAPI spec by Stainless.

import * as Core from '@tryfinch/finch-api/core';
import { APIResource } from '@tryfinch/finch-api/resource';
import * as AuthAPI from '@tryfinch/finch-api/resources/auth';
import * as AccessTokensAPI from '@tryfinch/finch-api/resources/access-tokens';

export class Auth extends APIResource {
  /**
   * Exchange the authorization code for an access token
   */
  createToken(
    body: AuthCreateTokenParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessTokensAPI.CreateAccessTokenResponse> {
    return this._client.post('/auth/token', { body, ...options });
  }
}

export interface AuthCreateTokenParams {
  client_id: string;

  client_secret: string;

  code: string;

  redirect_uri: string;
}

export namespace Auth {
  export import AuthCreateTokenParams = AuthAPI.AuthCreateTokenParams;
}
