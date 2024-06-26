// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@tryfinch/finch-api/resource';
import * as Core from '@tryfinch/finch-api/core';
import * as PaymentsAPI from '@tryfinch/finch-api/resources/hris/payments';
import * as HRISAPI from '@tryfinch/finch-api/resources/hris/hris';
import { SinglePage } from '@tryfinch/finch-api/pagination';

export class Payments extends APIResource {
  /**
   * Read payroll and contractor related payments by the company.
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
  id?: string;

  company_debit?: HRISAPI.Money | null;

  debit_date?: string | null;

  employee_taxes?: HRISAPI.Money | null;

  employer_taxes?: HRISAPI.Money | null;

  gross_pay?: HRISAPI.Money | null;

  /**
   * Array of every individual on this payment.
   */
  individual_ids?: Array<string> | null;

  net_pay?: HRISAPI.Money | null;

  pay_date?: string | null;

  /**
   * The pay period object.
   */
  pay_period?: Payment.PayPeriod | null;
}

export namespace Payment {
  /**
   * The pay period object.
   */
  export interface PayPeriod {
    end_date?: string | null;

    start_date?: string | null;
  }
}

export interface PaymentListParams {
  /**
   * The end date to retrieve payments by a company (inclusive) in `YYYY-MM-DD`
   * format.
   */
  end_date: string;

  /**
   * The start date to retrieve payments by a company (inclusive) in `YYYY-MM-DD`
   * format.
   */
  start_date: string;
}

export namespace Payments {
  export import Payment = PaymentsAPI.Payment;
  export import PaymentsSinglePage = PaymentsAPI.PaymentsSinglePage;
  export import PaymentListParams = PaymentsAPI.PaymentListParams;
}
