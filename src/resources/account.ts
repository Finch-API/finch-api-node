// File generated from our OpenAPI spec by Stainless.

import * as Core from '@tryfinch/finch-api/core';
import { APIResource } from '@tryfinch/finch-api/resource';
import * as AccountAPI from '@tryfinch/finch-api/resources/account';

export class Account extends APIResource {
  /**
   * Disconnect an employer from your application and invalidate all `access_token`s
   * associated with the employer. We require applications to implement the
   * Disconnect endpoint for billing and security purposes.
   */
  disconnect(options?: Core.RequestOptions): Core.APIPromise<DisconnectResponse> {
    return this.post('/disconnect', options);
  }

  /**
   * Read account information associated with an `access_token`
   */
  introspect(options?: Core.RequestOptions): Core.APIPromise<Introspection> {
    return this.get('/introspect', options);
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
   * The client id of the application associated with the `access_token`.
   */
  client_id: string;

  /**
   * The Finch uuid of the company associated with the `access_token`.
   */
  company_id: string;

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

export namespace Account {
  export type DisconnectResponse = AccountAPI.DisconnectResponse;
  export type Introspection = AccountAPI.Introspection;
}
