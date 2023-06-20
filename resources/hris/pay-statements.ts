// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as HRIS from '~/resources/hris';
import * as Benefits from '~/resources/hris/benefits';
import * as API from './';
import { ResponsesPage } from '~/pagination';

export class PayStatements extends APIResource {
  /**
   * Read detailed pay statements for each individual.
   *
   * Deduction and contribution types are supported by the payroll systems that
   * support Benefits.
   */
  retrieveMany(
    body: PayStatementRetrieveManyParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PayStatementResponsesResponsesPage> {
    return this.getAPIList('/employer/pay-statement', PayStatementResponsesResponsesPage, {
      body,
      method: 'post',
      ...options,
    });
  }
}

export class PayStatementResponsesResponsesPage extends ResponsesPage<PayStatementResponse> {}

export interface PayStatement {
  /**
   * The array of earnings objects associated with this pay statement
   */
  earnings?: Array<PayStatement.Earnings | null> | null;

  /**
   * The array of deductions objects associated with this pay statement.
   */
  employee_deductions?: Array<PayStatement.EmployeeDeductions | null> | null;

  employer_contributions?: Array<PayStatement.EmployerContributions | null> | null;

  gross_pay?: HRIS.Money | null;

  /**
   * A stable Finch `id` (UUID v4) for an individual in the company
   */
  individual_id?: string;

  net_pay?: HRIS.Money | null;

  /**
   * The payment method.
   */
  payment_method?: 'check' | 'direct_deposit' | null;

  /**
   * The array of taxes objects associated with this pay statement.
   */
  taxes?: Array<PayStatement.Taxes | null> | null;

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
  export interface Earnings {
    /**
     * The earnings amount in cents.
     */
    amount?: number | null;

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

  export interface Taxes {
    /**
     * The tax amount in cents.
     */
    amount?: number | null;

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

  export interface EmployeeDeductions {
    /**
     * The deduction amount in cents.
     */
    amount?: number | null;

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
    type?: Benefits.BenefitType | null;
  }

  export interface EmployerContributions {
    /**
     * The contribution amount in cents.
     */
    amount?: number | null;

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
    type?: Benefits.BenefitType | null;
  }
}

export interface PayStatementResponse {
  body?: PayStatementResponseBody;

  code?: number;

  payment_id?: string;
}

export interface PayStatementResponseBody {
  paging?: HRIS.Paging;

  /**
   * The array of pay statements for the current payment.
   */
  pay_statements?: Array<PayStatement>;
}

export interface PayStatementRetrieveManyParams {
  /**
   * The array of batch requests.
   */
  requests: Array<PayStatementRetrieveManyParams.Requests>;
}

export namespace PayStatementRetrieveManyParams {
  export interface Requests {
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

export namespace PayStatements {
  export import PayStatement = API.PayStatement;
  export import PayStatementResponse = API.PayStatementResponse;
  export import PayStatementResponseBody = API.PayStatementResponseBody;
  export import PayStatementResponsesResponsesPage = API.PayStatementResponsesResponsesPage;
  export import PayStatementRetrieveManyParams = API.PayStatementRetrieveManyParams;
}
