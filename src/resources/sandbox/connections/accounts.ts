// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as AccountsAPI from './accounts';
import * as Shared from '../../shared';

export class Accounts extends APIResource {
  /**
   * Create a new account for an existing connection (company/provider pair)
   */
  create(body: AccountCreateParams, options?: Core.RequestOptions): Core.APIPromise<AccountCreateResponse> {
    return this._client.post('/sandbox/connections/accounts', { body, ...options });
  }

  /**
   * Update an existing sandbox account. Change the connection status to understand
   * how the Finch API responds.
   */
  update(body?: AccountUpdateParams, options?: Core.RequestOptions): Core.APIPromise<AccountUpdateResponse>;
  update(options?: Core.RequestOptions): Core.APIPromise<AccountUpdateResponse>;
  update(
    body: AccountUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update({}, body);
    }
    return this._client.put('/sandbox/connections/accounts', { body, ...options });
  }
}

export interface AccountCreateResponse {
  access_token: string;

  account_id: string;

  authentication_type: 'credential' | 'api_token' | 'oauth' | 'assisted';

  company_id: string;

  products: Array<string>;

  provider_id: string;
}

export interface AccountUpdateResponse {
  account_id: string;

  authentication_type: 'credential' | 'api_token' | 'oauth' | 'assisted';

  company_id: string;

  products: Array<string>;

  provider_id: string;
}

export interface AccountCreateParams {
  company_id: string;

  provider_id: string;

  authentication_type?: 'credential' | 'api_token' | 'oauth' | 'assisted';

  /**
   * Optional, defaults to Organization products (`company`, `directory`,
   * `employment`, `individual`)
   */
  products?: Array<string>;
}

export interface AccountUpdateParams {
  connection_status?: Shared.ConnectionStatusType;
}

export namespace Accounts {
  export import AccountCreateResponse = AccountsAPI.AccountCreateResponse;
  export import AccountUpdateResponse = AccountsAPI.AccountUpdateResponse;
  export import AccountCreateParams = AccountsAPI.AccountCreateParams;
  export import AccountUpdateParams = AccountsAPI.AccountUpdateParams;
}
