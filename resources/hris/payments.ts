// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as HRIS from '~/resources/hris';
import * as API from './';
import { SinglePage } from '~/pagination';

export class Payments extends APIResource {
  /**
   * Read payroll and contractor related payments by the company.
   */
  list(query: PaymentListParams, options?: Core.RequestOptions): Core.PagePromise<PaymentsSinglePage> {
    return this.getAPIList('/employer/payment', PaymentsSinglePage, { query, ...options });
  }
}

export class PaymentsSinglePage extends SinglePage<Payment> {}

export interface Payment {
  company_debit?: HRIS.Money | null;

  debit_date?: string | null;

  employee_taxes?: HRIS.Money | null;

  employer_taxes?: HRIS.Money | null;

  gross_pay?: HRIS.Money | null;

  /**
   * The unique id for the payment.
   */
  id?: string;

  /**
   * Array of every individual on this payment.
   */
  individual_ids?: Array<string> | null;

  net_pay?: HRIS.Money | null;

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
  export import Payment = API.Payment;
  export import PaymentsSinglePage = API.PaymentsSinglePage;
  export import PaymentListParams = API.PaymentListParams;
}
