// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as HRISAPI from '../hris/hris';
import * as BenefitsAPI from '../hris/benefits/benefits';

export class Payment extends APIResource {
  /**
   * Add a new sandbox payment
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

  pay_statements?: Array<PaymentCreateParams.PayStatement>;

  start_date?: string;
}

export namespace PaymentCreateParams {
  export interface PayStatement {
    /**
     * The array of earnings objects associated with this pay statement
     */
    earnings?: Array<PayStatement.Earning | null> | null;

    /**
     * The array of deductions objects associated with this pay statement.
     */
    employee_deductions?: Array<PayStatement.EmployeeDeduction | null> | null;

    employer_contributions?: Array<PayStatement.EmployerContribution | null> | null;

    gross_pay?: HRISAPI.Money | null;

    /**
     * A stable Finch `id` (UUID v4) for an individual in the company
     */
    individual_id?: string;

    net_pay?: HRISAPI.Money | null;

    /**
     * The payment method.
     */
    payment_method?: 'check' | 'direct_deposit' | null;

    /**
     * The array of taxes objects associated with this pay statement.
     */
    taxes?: Array<PayStatement.Tax | null> | null;

    /**
     * The number of hours worked for this pay period
     */
    total_hours?: number | null;

    /**
     * The type of the payment associated with the pay statement.
     */
    type?: 'regular_payroll' | 'off_cycle_payroll' | 'one_time_payment' | null;
  }

  export namespace PayStatement {
    export interface Earning {
      /**
       * The earnings amount in cents.
       */
      amount?: number | null;

      attributes?: Earning.Attributes | null;

      /**
       * The earnings currency code.
       */
      currency?: string | null;

      /**
       * The number of hours associated with this earning. (For salaried employees, this
       * could be hours per pay period, `0` or `null`, depending on the provider).
       */
      hours?: number | null;

      /**
       * The exact name of the deduction from the pay statement.
       */
      name?: string | null;

      /**
       * The type of earning.
       */
      type?:
        | 'salary'
        | 'wage'
        | 'reimbursement'
        | 'overtime'
        | 'severance'
        | 'double_overtime'
        | 'pto'
        | 'sick'
        | 'bonus'
        | 'commission'
        | 'tips'
        | '1099'
        | 'other'
        | null;
    }

    export namespace Earning {
      export interface Attributes {
        metadata?: Attributes.Metadata;
      }

      export namespace Attributes {
        export interface Metadata {
          /**
           * The metadata to be attached to the entity by existing rules. It is a key-value
           * pairs where the values can be of any type (string, number, boolean, object,
           * array, etc.).
           */
          metadata?: Record<string, unknown>;
        }
      }
    }

    export interface EmployeeDeduction {
      /**
       * The deduction amount in cents.
       */
      amount?: number | null;

      attributes?: EmployeeDeduction.Attributes | null;

      /**
       * The deduction currency.
       */
      currency?: string | null;

      /**
       * The deduction name from the pay statement.
       */
      name?: string | null;

      /**
       * Boolean indicating if the deduction is pre-tax.
       */
      pre_tax?: boolean | null;

      /**
       * Type of benefit.
       */
      type?: BenefitsAPI.BenefitType | null;
    }

    export namespace EmployeeDeduction {
      export interface Attributes {
        metadata?: Attributes.Metadata;
      }

      export namespace Attributes {
        export interface Metadata {
          /**
           * The metadata to be attached to the entity by existing rules. It is a key-value
           * pairs where the values can be of any type (string, number, boolean, object,
           * array, etc.).
           */
          metadata?: Record<string, unknown>;
        }
      }
    }

    export interface EmployerContribution {
      /**
       * The contribution amount in cents.
       */
      amount?: number | null;

      attributes?: EmployerContribution.Attributes | null;

      /**
       * The contribution currency.
       */
      currency?: string | null;

      /**
       * The contribution name from the pay statement.
       */
      name?: string | null;

      /**
       * Type of benefit.
       */
      type?: BenefitsAPI.BenefitType | null;
    }

    export namespace EmployerContribution {
      export interface Attributes {
        metadata?: Attributes.Metadata;
      }

      export namespace Attributes {
        export interface Metadata {
          /**
           * The metadata to be attached to the entity by existing rules. It is a key-value
           * pairs where the values can be of any type (string, number, boolean, object,
           * array, etc.).
           */
          metadata?: Record<string, unknown>;
        }
      }
    }

    export interface Tax {
      /**
       * The tax amount in cents.
       */
      amount?: number | null;

      attributes?: Tax.Attributes | null;

      /**
       * The currency code.
       */
      currency?: string | null;

      /**
       * `true` if the amount is paid by the employers.
       */
      employer?: boolean | null;

      /**
       * The exact name of tax from the pay statement.
       */
      name?: string | null;

      /**
       * The type of taxes.
       */
      type?: 'state' | 'federal' | 'local' | 'fica' | null;
    }

    export namespace Tax {
      export interface Attributes {
        metadata?: Attributes.Metadata;
      }

      export namespace Attributes {
        export interface Metadata {
          /**
           * The metadata to be attached to the entity by existing rules. It is a key-value
           * pairs where the values can be of any type (string, number, boolean, object,
           * array, etc.).
           */
          metadata?: Record<string, unknown>;
        }
      }
    }
  }
}

export declare namespace Payment {
  export {
    type PaymentCreateResponse as PaymentCreateResponse,
    type PaymentCreateParams as PaymentCreateParams,
  };
}
