// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Sessions extends APIResource {
  /**
   * Create a new connect session for an employer
   */
  new(body: SessionNewParams, options?: Core.RequestOptions): Core.APIPromise<SessionNewResponse> {
    return this._client.post('/connect/sessions', { body, ...options });
  }

  /**
   * Create a new Connect session for reauthenticating an existing connection
   */
  reauthenticate(
    body: SessionReauthenticateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionReauthenticateResponse> {
    return this._client.post('/connect/sessions/reauthenticate', { body, ...options });
  }
}

export interface SessionNewResponse {
  /**
   * The Connect URL to redirect the user to for authentication
   */
  connect_url: string;

  /**
   * The unique identifier for the created connect session
   */
  session_id: string;
}

export interface SessionReauthenticateResponse {
  /**
   * The Connect URL to redirect the user to for reauthentication
   */
  connect_url: string;

  /**
   * The unique identifier for the created connect session
   */
  session_id: string;
}

export interface SessionNewParams {
  customer_id: string;

  customer_name: string;

  products: Array<
    | 'company'
    | 'directory'
    | 'individual'
    | 'employment'
    | 'payment'
    | 'pay_statement'
    | 'benefits'
    | 'ssn'
    | 'deduction'
    | 'documents'
  >;

  customer_email?: string | null;

  integration?: SessionNewParams.Integration | null;

  manual?: boolean | null;

  /**
   * The number of minutes until the session expires (defaults to 129,600, which is
   * 90 days)
   */
  minutes_to_expire?: number | null;

  redirect_uri?: string | null;

  sandbox?: 'finch' | 'provider' | null;
}

export namespace SessionNewParams {
  export interface Integration {
    auth_method?: 'assisted' | 'credential' | 'oauth' | 'api_token' | null;

    provider?: string | null;
  }
}

export interface SessionReauthenticateParams {
  /**
   * The ID of the existing connection to reauthenticate
   */
  connection_id: string;

  /**
   * The number of minutes until the session expires (defaults to 43,200, which is 30
   * days)
   */
  minutes_to_expire?: number | null;

  /**
   * The products to request access to (optional for reauthentication)
   */
  products?: Array<
    | 'company'
    | 'directory'
    | 'individual'
    | 'employment'
    | 'payment'
    | 'pay_statement'
    | 'benefits'
    | 'ssn'
    | 'deduction'
    | 'documents'
  > | null;

  /**
   * The URI to redirect to after the Connect flow is completed
   */
  redirect_uri?: string | null;
}

export declare namespace Sessions {
  export {
    type SessionNewResponse as SessionNewResponse,
    type SessionReauthenticateResponse as SessionReauthenticateResponse,
    type SessionNewParams as SessionNewParams,
    type SessionReauthenticateParams as SessionReauthenticateParams,
  };
}
