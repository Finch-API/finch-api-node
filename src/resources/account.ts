// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Account extends APIResource {
  /**
   * Disconnect one or more `access_token`s from your application.
   */
  disconnect(options?: RequestOptions): APIPromise<DisconnectResponse> {
    return this._client.post('/disconnect', options);
  }

  /**
   * Read account information associated with an `access_token`
   */
  introspect(options?: RequestOptions): APIPromise<Introspection> {
    return this._client.get('/introspect', options);
  }
}

export interface DisconnectResponse {
  /**
   * If the request is successful, Finch will return "success" (HTTP 200 status).
   */
  status: string;
}

export interface Introspection {
  /**
   * The Finch UUID of the token being introspected
   */
  id: string;

  /**
   * The client ID of the application associated with the `access_token`
   */
  client_id: string;

  /**
   * The type of application associated with a token.
   */
  client_type: 'development' | 'production' | 'sandbox';

  /**
   * The Finch UUID of the connection associated with the `access_token`
   */
  connection_id: string;

  connection_status: Introspection.ConnectionStatus;

  /**
   * The type of the connection associated with the token.
   *
   * - `provider` - connection to an external provider
   * - `finch` - finch-generated data.
   */
  connection_type: 'finch' | 'provider';

  /**
   * An array of the authorized products associated with the `access_token`.
   */
  products: Array<string>;

  /**
   * The ID of the provider associated with the `access_token`.
   */
  provider_id: string;

  /**
   * @deprecated [DEPRECATED] Use `connection_id` to associate tokens with a Finch
   * connection instead of this account ID
   */
  account_id?: string;

  authentication_methods?: Array<Introspection.AuthenticationMethod>;

  /**
   * @deprecated [DEPRECATED] Use `connection_id` to associate tokens with a Finch
   * connection instead of this company ID
   */
  company_id?: string;

  /**
   * The email of your customer you provided to Finch when a connect session was
   * created for this connection
   */
  customer_email?: string | null;

  /**
   * The ID of your customer you provided to Finch when a connect session was created
   * for this connection
   */
  customer_id?: string | null;

  /**
   * The name of your customer you provided to Finch when a connect session was
   * created for this connection
   */
  customer_name?: string | null;

  /**
   * Array of detailed entity information for each connected account in multi-account
   * mode
   */
  entities?: Array<Introspection.Entity>;

  /**
   * Whether the connection associated with the `access_token` uses the Assisted
   * Connect Flow. (`true` if using Assisted Connect, `false` if connection is
   * automated)
   */
  manual?: boolean;

  /**
   * @deprecated [DEPRECATED] Use `provider_id` to identify the provider instead of
   * this payroll provider ID.
   */
  payroll_provider_id?: string;

  /**
   * The account username used for login associated with the `access_token`.
   */
  username?: string | null;
}

export namespace Introspection {
  export interface ConnectionStatus {
    status: Shared.ConnectionStatusType;

    /**
     * The datetime when the connection was last successfully synced
     */
    last_successful_sync?: (string & {}) | string | null;

    message?: string;
  }

  export interface AuthenticationMethod {
    /**
     * The type of authentication method
     */
    type: 'assisted' | 'credential' | 'api_token' | 'api_credential' | 'oauth';

    connection_status?: AuthenticationMethod.ConnectionStatus;

    /**
     * An array of the authorized products associated with the `access_token`
     */
    products?: Array<string>;
  }

  export namespace AuthenticationMethod {
    export interface ConnectionStatus {
      status: Shared.ConnectionStatusType;

      /**
       * The datetime when the connection was last successfully synced
       */
      last_successful_sync?: (string & {}) | string | null;

      message?: string;
    }
  }

  export interface Entity {
    /**
     * The connection account ID for this entity
     */
    id: string;

    /**
     * The name of the entity (payroll provider company name)
     */
    name: string | null;

    /**
     * The source ID of the entity
     */
    source_id: string | null;
  }
}

export declare namespace Account {
  export { type DisconnectResponse as DisconnectResponse, type Introspection as Introspection };
}
