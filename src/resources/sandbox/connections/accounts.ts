// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Accounts extends APIResource {
  /**
   * Create a new account for an existing connection (company/provider pair)
   *
   * @example
   * ```ts
   * const account =
   *   await client.sandbox.connections.accounts.create({
   *     company_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     provider_id: 'provider_id',
   *   });
   * ```
   */
  create(body: AccountCreateParams, options?: RequestOptions): APIPromise<AccountCreateResponse> {
    return this._client.post('/sandbox/connections/accounts', { body, ...options });
  }

  /**
   * Update an existing sandbox account. Change the connection status to understand
   * how the Finch API responds.
   *
   * @example
   * ```ts
   * const account =
   *   await client.sandbox.connections.accounts.update({
   *     connection_status: 'reauth',
   *   });
   * ```
   */
  update(
    body: AccountUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUpdateResponse> {
    return this._client.put('/sandbox/connections/accounts', { body, ...options });
  }
}

export interface AccountCreateResponse {
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
   * The ID of the provider associated with the `access_token`
   */
  provider_id: string;
}

export interface AccountUpdateResponse {
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
   * The ID of the entity whose status was updated
   */
  entity_id: string;

  products: Array<string>;

  /**
   * The ID of the provider associated with the `access_token`
   */
  provider_id: string;
}

export interface AccountCreateParams {
  company_id: string;

  /**
   * The provider associated with the `access_token`
   */
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

export declare namespace Accounts {
  export {
    type AccountCreateResponse as AccountCreateResponse,
    type AccountUpdateResponse as AccountUpdateResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
  };
}
