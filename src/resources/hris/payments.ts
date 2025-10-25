// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as HRISAPI from './hris';
import { SinglePage } from '../../pagination';

export class Payments extends APIResource {
  /**
   * Read payroll and contractor related payments by the company.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const payment of client.hris.payments.list({
   *   end_date: '2021-01-01',
   *   entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
   *   start_date: '2021-01-01',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PaymentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaymentsSinglePage, Payment> {
    return this._client.getAPIList('/employer/payment', PaymentsSinglePage, { query, ...options });
  }
}

export class PaymentsSinglePage extends SinglePage<Payment> {}

export interface Payment {
  /**
   * The unique id for the payment.
   */
  id: string;

  company_debit: HRISAPI.Money | null;

  debit_date: string | null;

  employee_taxes: HRISAPI.Money | null;

  employer_taxes: HRISAPI.Money | null;

  gross_pay: HRISAPI.Money | null;

  /**
   * Array of every individual on this payment.
   */
  individual_ids: Array<string> | null;

  net_pay: HRISAPI.Money | null;

  pay_date: string | null;

  /**
   * List of pay frequencies associated with this payment.
   */
  pay_frequencies: Array<
    | 'annually'
    | 'bi_weekly'
    | 'daily'
    | 'monthly'
    | 'other'
    | 'quarterly'
    | 'semi_annually'
    | 'semi_monthly'
    | 'weekly'
  > | null;

  /**
   * Array of the Finch id (uuidv4) of every pay group associated with this payment.
   */
  pay_group_ids: Array<string> | null;

  /**
   * The pay period object.
   */
  pay_period: Payment.PayPeriod | null;
}

export namespace Payment {
  /**
   * The pay period object.
   */
  export interface PayPeriod {
    end_date: string | null;

    start_date: string | null;
  }
}

export interface PaymentListParams {
  /**
   * The end date to retrieve payments by a company (inclusive) in `YYYY-MM-DD`
   * format.
   */
  end_date: string;

  /**
   * The entity IDs to specify which entities' data to access.
   */
  entity_ids: Array<string>;

  /**
   * The start date to retrieve payments by a company (inclusive) in `YYYY-MM-DD`
   * format.
   */
  start_date: string;
}

Payments.PaymentsSinglePage = PaymentsSinglePage;

export declare namespace Payments {
  export {
    type Payment as Payment,
    PaymentsSinglePage as PaymentsSinglePage,
    type PaymentListParams as PaymentListParams,
  };
}
