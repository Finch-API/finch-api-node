// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as HRISAPI from './hris';
import * as BenefitsAPI from './benefits/benefits';
import { ResponsesPage } from '../../pagination';

export class PayStatements extends APIResource {
  /**
   * Read detailed pay statements for each individual.
   *
   * Deduction and contribution types are supported by the payroll systems that
   * supports Benefits.
   */
  retrieveMany(
    body: PayStatementRetrieveManyParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PayStatementResponsesPage, PayStatementResponse> {
    return this._client.getAPIList('/employer/pay-statement', PayStatementResponsesPage, {
      body,
      method: 'post',
      ...options,
    });
  }
}

export class PayStatementResponsesPage extends ResponsesPage<PayStatementResponse> {}

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

export interface PayStatementResponse {
  body?: PayStatementResponseBody;

  code?: number;

  payment_id?: string;
}

export interface PayStatementResponseBody {
  paging?: Shared.Paging;

  /**
   * The array of pay statements for the current payment.
   */
  pay_statements?: Array<PayStatement>;
}

export interface PayStatementRetrieveManyParams {
  /**
   * The array of batch requests.
   */
  requests: Array<PayStatementRetrieveManyParams.Request>;
}

export namespace PayStatementRetrieveManyParams {
  export interface Request {
    /**
     * A stable Finch `id` (UUID v4) for a payment.
     */
    payment_id: string;

    /**
     * Number of pay statements to return (defaults to all).
     */
    limit?: number;

    /**
     * Index to start from.
     */
    offset?: number;
  }
}

PayStatements.PayStatementResponsesPage = PayStatementResponsesPage;

export declare namespace PayStatements {
  export {
    type PayStatement as PayStatement,
    type PayStatementResponse as PayStatementResponse,
    type PayStatementResponseBody as PayStatementResponseBody,
    PayStatementResponsesPage as PayStatementResponsesPage,
    type PayStatementRetrieveManyParams as PayStatementRetrieveManyParams,
  };
}
