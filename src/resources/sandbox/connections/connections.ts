// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from './accounts';
import {
  AccountCreateParams,
  AccountCreateResponse,
  AccountUpdateParams,
  AccountUpdateResponse,
  Accounts,
} from './accounts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Connections extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);

  /**
   * Create a new connection (new company/provider pair) with a new account
   *
   * @example
   * ```ts
   * const connection = await client.sandbox.connections.create({
   *   provider_id: 'provider_id',
   * });
   * ```
   */
  create(body: ConnectionCreateParams, options?: RequestOptions): APIPromise<ConnectionCreateResponse> {
    return this._client.post('/sandbox/connections', { body, ...options });
  }
}

export interface ConnectionCreateResponse {
  access_token: string;

  /**
   * @deprecated [DEPRECATED] Use `connection_id` to associate a connection with an
   * access token
   */
  account_id: string;

  authentication_type: 'credential' | 'api_token' | 'oauth' | 'assisted';

  /**
   * @deprecated [DEPRECATED] Use `connection_id` to associate a connection with an
   * access token
   */
  company_id: string;

  /**
   * The ID of the new connection
   */
  connection_id: string;

  /**
   * The ID of the entity for this connection
   */
  entity_id: string;

  products: Array<string>;

  /**
   * The ID of the provider associated with the `access_token`.
   */
  provider_id: string;

  token_type?: string;
}

export interface ConnectionCreateParams {
  /**
   * The provider associated with the connection
   */
  provider_id: string;

  authentication_type?: 'credential' | 'api_token' | 'oauth' | 'assisted';

  /**
   * Optional: the size of the employer to be created with this connection. Defaults
   * to 20. Note that if this is higher than 100, historical payroll data will not be
   * generated, and instead only one pay period will be created.
   */
  employee_size?: number;

  products?: Array<string>;
}

Connections.Accounts = Accounts;

export declare namespace Connections {
  export {
    type ConnectionCreateResponse as ConnectionCreateResponse,
    type ConnectionCreateParams as ConnectionCreateParams,
  };

  export {
    Accounts as Accounts,
    type AccountCreateResponse as AccountCreateResponse,
    type AccountUpdateResponse as AccountUpdateResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
  };
}
