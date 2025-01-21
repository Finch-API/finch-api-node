// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
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
   * @deprecated [DEPRECATED] Use `connection_id` to associate tokens with a Finch
   * connection instead of this account ID.
   */
  account_id: string;

  authentication_methods: Array<Introspection.AuthenticationMethod>;

  /**
   * The client ID of the application associated with the `access_token`.
   */
  client_id: string;

  /**
   * The type of application associated with a token.
   */
  client_type: 'production' | 'development' | 'sandbox';

  /**
   * @deprecated [DEPRECATED] Use `connection_id` to associate tokens with a Finch
   * connection instead of this company ID.
   */
  company_id: string;

  /**
   * The Finch UUID of the connection associated with the `access_token`.
   */
  connection_id: string;

  connection_status: Introspection.ConnectionStatus;

  /**
   * The type of the connection associated with the token.
   *
   * - `provider` - connection to an external provider
   * - `finch` - finch-generated data.
   */
  connection_type: 'provider' | 'finch';

  /**
   * The email of your customer you provided to Finch when a connect session was
   * created for this connection.
   */
  customer_email: string | null;

  /**
   * The ID of your customer you provided to Finch when a connect session was created
   * for this connection.
   */
  customer_id: string | null;

  /**
   * The name of your customer you provided to Finch when a connect session was
   * created for this connection.
   */
  customer_name: string | null;

  /**
   * Whether the connection associated with the `access_token` uses the Assisted
   * Connect Flow. (`true` if using Assisted Connect, `false` if connection is
   * automated)
   */
  manual: boolean;

  /**
   * @deprecated [DEPRECATED] Use `provider_id` to identify the provider instead of
   * this payroll provider ID.
   */
  payroll_provider_id: string;

  /**
   * An array of the authorized products associated with the `access_token`.
   */
  products: Array<string>;

  /**
   * The ID of the provider associated with the `access_token`.
   */
  provider_id: string;

  /**
   * The account username used for login associated with the `access_token`.
   */
  username: string;
}

export namespace Introspection {
  export interface AuthenticationMethod {
    connection_status?: AuthenticationMethod.ConnectionStatus;

    /**
     * An array of the authorized products associated with the `access_token`.
     */
    products?: Array<string>;

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

  export interface ConnectionStatus {
    message?: string;

    status?: Shared.ConnectionStatusType;
  }
}

export declare namespace Account {
  export { type DisconnectResponse as DisconnectResponse, type Introspection as Introspection };
}
