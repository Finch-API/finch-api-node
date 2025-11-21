// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Sessions extends APIResource {
  /**
   * Create a new connect session for an employer
   */
  connect(body: SessionConnectParams, options?: RequestOptions): APIPromise<SessionConnectResponse> {
    return this._client.post('/connect/sessions', { body, ...options });
  }

  /**
   * Create a new Connect session for reauthenticating an existing connection
   */
  reauthenticate(
    body: SessionReauthenticateParams,
    options?: RequestOptions,
  ): APIPromise<SessionReauthenticateResponse> {
    return this._client.post('/connect/sessions/reauthenticate', { body, ...options });
  }
}

export interface SessionConnectResponse {
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

export interface SessionConnectParams {
  /**
   * Unique identifier for the customer
   */
  customer_id: string;

  /**
   * Name of the customer
   */
  customer_name: string;

  /**
   * The Finch products to request access to
   */
  products: Array<
    | 'benefits'
    | 'company'
    | 'deduction'
    | 'directory'
    | 'documents'
    | 'employment'
    | 'individual'
    | 'payment'
    | 'pay_statement'
    | 'ssn'
  >;

  /**
   * Email address of the customer
   */
  customer_email?: string | null;

  /**
   * Integration configuration for the connect session
   */
  integration?: SessionConnectParams.Integration | null;

  /**
   * Enable manual authentication mode
   */
  manual?: boolean | null;

  /**
   * The number of minutes until the session expires (defaults to 129,600, which is
   * 90 days)
   */
  minutes_to_expire?: number | null;

  /**
   * The URI to redirect to after the Connect flow is completed
   */
  redirect_uri?: string | null;

  /**
   * Sandbox mode for testing
   */
  sandbox?: 'finch' | 'provider' | null;
}

export namespace SessionConnectParams {
  /**
   * Integration configuration for the connect session
   */
  export interface Integration {
    /**
     * The provider to integrate with
     */
    provider: string;

    /**
     * The authentication method to use
     */
    auth_method?: 'assisted' | 'credential' | 'oauth' | 'api_token' | null;
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
  minutes_to_expire?: number;

  /**
   * The products to request access to (optional for reauthentication)
   */
  products?: Array<
    | 'benefits'
    | 'company'
    | 'deduction'
    | 'directory'
    | 'documents'
    | 'employment'
    | 'individual'
    | 'payment'
    | 'pay_statement'
    | 'ssn'
  > | null;

  /**
   * The URI to redirect to after the Connect flow is completed
   */
  redirect_uri?: string | null;
}

export declare namespace Sessions {
  export {
    type SessionConnectResponse as SessionConnectResponse,
    type SessionReauthenticateResponse as SessionReauthenticateResponse,
    type SessionConnectParams as SessionConnectParams,
    type SessionReauthenticateParams as SessionReauthenticateParams,
  };
}
