// File generated from our OpenAPI spec by Stainless.

import * as Core from '@tryfinch/finch-api/core';
import { APIResource } from '@tryfinch/finch-api/resource';
import * as ConnectionsAPI from '@tryfinch/finch-api/resources/sandbox/connections/connections';
import * as AccountsAPI from '@tryfinch/finch-api/resources/sandbox/connections/accounts';

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

  account_id: string;

  authentication_type: 'credential' | 'api_token' | 'oauth' | 'assisted';

  company_id: string;

  products: Array<string>;

  provider_id: string;
}

export interface ConnectionCreateParams {
  provider_id: string;

  authentication_type?: 'credential' | 'api_token' | 'oauth' | 'assisted';

  /**
   * Optional: the size of the employer to be created with this connection. Defaults
   * to 20
   */
  employer_size?: number;

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
