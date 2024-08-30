// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ConnectionsAPI from './connections';
import * as AccountsAPI from './accounts';

export class Connections extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);

  /**
   * Create a new connection (new company/provider pair) with a new account
   */
  create(
    body: ConnectionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionCreateResponse> {
    return this._client.post('/sandbox/connections', { body, ...options });
  }
}

export interface ConnectionCreateResponse {
  access_token: string;

  /**
   * @deprecated: [DEPRECATED] Use `connection_id` to associate a connection with an
   * access token
   */
  account_id: string;

  authentication_type: 'credential' | 'api_token' | 'oauth' | 'assisted';

  /**
   * @deprecated: [DEPRECATED] Use `connection_id` to associate a connection with an
   * access token
   */
  company_id: string;

  /**
   * The ID of the new connection
   */
  connection_id: string;

  products: Array<string>;

  /**
   * The ID of the provider associated with the `access_token`.
   */
  provider_id: string;
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

export namespace Connections {
  export import ConnectionCreateResponse = ConnectionsAPI.ConnectionCreateResponse;
  export import ConnectionCreateParams = ConnectionsAPI.ConnectionCreateParams;
  export import Accounts = AccountsAPI.Accounts;
  export import AccountCreateResponse = AccountsAPI.AccountCreateResponse;
  export import AccountUpdateResponse = AccountsAPI.AccountUpdateResponse;
  export import AccountCreateParams = AccountsAPI.AccountCreateParams;
  export import AccountUpdateParams = AccountsAPI.AccountUpdateParams;
}
