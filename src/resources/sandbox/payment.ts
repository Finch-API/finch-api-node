// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as PayStatementsAPI from '../hris/pay-statements';

export class Payment extends APIResource {
  /**
   * Add a new sandbox payment
   *
   * @example
   * ```ts
   * const payment = await client.sandbox.payment.create();
   * ```
   */
  create(body?: PaymentCreateParams, options?: Core.RequestOptions): Core.APIPromise<PaymentCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<PaymentCreateResponse>;
  create(
    body: PaymentCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaymentCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/sandbox/payment', { body, ...options });
  }
}

export interface PaymentCreateResponse {
  /**
   * The date of the payment.
   */
  pay_date: string;

  /**
   * The ID of the payment.
   */
  payment_id: string;
}

export interface PaymentCreateParams {
  end_date?: string;

  pay_statements?: Array<PayStatementsAPI.PayStatement>;

  start_date?: string;
}

export declare namespace Payment {
  export {
    type PaymentCreateResponse as PaymentCreateResponse,
    type PaymentCreateParams as PaymentCreateParams,
  };
}
