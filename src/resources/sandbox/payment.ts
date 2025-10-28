// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Payment extends APIResource {
  /**
   * Add a new sandbox payment
   *
   * @example
   * ```ts
   * const payment = await client.sandbox.payment.create();
   * ```
   */
  create(
    body: PaymentCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentCreateResponse> {
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

  /**
   * Array of pay statements to include in the payment.
   */
  pay_statements?: Array<PaymentCreateParams.PayStatement>;

  start_date?: string;
}

export namespace PaymentCreateParams {
  export interface PayStatement {
    individual_id: string;

    earnings?: Array<PayStatement.Earning>;

    employee_deductions?: Array<PayStatement.EmployeeDeduction>;

    employer_contributions?: Array<PayStatement.EmployerContribution>;

    gross_pay?: number;

    net_pay?: number;

    payment_method?: 'check' | 'direct_deposit' | 'other' | null;

    taxes?: Array<PayStatement.Tax>;

    total_hours?: number;

    type?: 'off_cycle_payroll' | 'one_time_payment' | 'regular_payroll' | null;
  }

  export namespace PayStatement {
    export interface Earning {
      amount?: number;

      hours?: number;

      name?: string;

      type?:
        | 'bonus'
        | 'commission'
        | 'double_overtime'
        | 'other'
        | 'overtime'
        | 'pto'
        | 'reimbursement'
        | 'salary'
        | 'severance'
        | 'sick'
        | 'tips'
        | 'wage'
        | '1099';
    }

    export interface EmployeeDeduction {
      amount?: number;

      name?: string;

      pre_tax?: boolean;

      type?:
        | '457'
        | '401k'
        | '401k_roth'
        | '401k_loan'
        | '403b'
        | '403b_roth'
        | '457_roth'
        | 'commuter'
        | 'custom_post_tax'
        | 'custom_pre_tax'
        | 'fsa_dependent_care'
        | 'fsa_medical'
        | 'hsa_post'
        | 'hsa_pre'
        | 's125_dental'
        | 's125_medical'
        | 's125_vision'
        | 'simple'
        | 'simple_ira';
    }

    export interface EmployerContribution {
      amount?: number;

      name?: string;

      type?:
        | '457'
        | '401k'
        | '401k_roth'
        | '401k_loan'
        | '403b'
        | '403b_roth'
        | '457_roth'
        | 'commuter'
        | 'custom_post_tax'
        | 'custom_pre_tax'
        | 'fsa_dependent_care'
        | 'fsa_medical'
        | 'hsa_post'
        | 'hsa_pre'
        | 's125_dental'
        | 's125_medical'
        | 's125_vision'
        | 'simple'
        | 'simple_ira';
    }

    export interface Tax {
      amount?: number;

      employer?: boolean;

      name?: string;

      type?: 'federal' | 'fica' | 'local' | 'state';
    }
  }
}

export declare namespace Payment {
  export {
    type PaymentCreateResponse as PaymentCreateResponse,
    type PaymentCreateParams as PaymentCreateParams,
  };
}
