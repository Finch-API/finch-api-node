// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as AccountAPI from './account';
import * as Shared from './shared';

export class Account extends APIResource {
  /**
   * Disconnect one or more `access_token`s from your application.
   */
  disconnect(options?: Core.RequestOptions): Core.APIPromise<DisconnectResponse> {
    return this._client.post('/disconnect', options);
  }

  /**
   * Read account information associated with an `access_token`
   */
  introspect(options?: Core.RequestOptions): Core.APIPromise<Introspection> {
    return this._client.get('/introspect', options);
  }
}

export interface DisconnectResponse {
  /**
   * If the request is successful, Finch will return “success” (HTTP 200 status).
   */
  status: string;
}

export interface Introspection {
  /**
   * The Finch uuid of the account used to connect this company.
   */
  account_id: string;

  authentication_methods: Array<Introspection.AuthenticationMethod>;

  /**
   * The client id of the application associated with the `access_token`.
   */
  client_id: string;

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
   * Whether the connection associated with the `access_token` uses the Assisted
   * Connect Flow. (`true` if using Assisted Connect, `false` if connection is
   * automated)
   */
  manual: boolean;

  /**
   * The payroll provider associated with the `access_token`.
   */
  payroll_provider_id: string;

  /**
   * An array of the authorized products associated with the `access_token`.
   */
  products: Array<string>;

  /**
   * The account username used for login associated with the `access_token`.
   */
  username: string;
}

export namespace Introspection {
  export interface AuthenticationMethod {
    connection_status?: AuthenticationMethod.ConnectionStatus;

    /**
     * The type of authentication method.
     */
    type?: 'assisted' | 'credential' | 'api_token' | 'api_credential' | 'oauth';
  }

  export namespace AuthenticationMethod {
    export interface ConnectionStatus {
      message?: string;

      status?: Shared.ConnectionStatusType;
    }
  }
}

export namespace Account {
  export import DisconnectResponse = AccountAPI.DisconnectResponse;
  export import Introspection = AccountAPI.Introspection;
}
