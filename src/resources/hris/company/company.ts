// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as HRISAPI from '../hris';
import * as PayStatementItemAPI from './pay-statement-item/pay-statement-item';
import {
  PayStatementItem,
  PayStatementItemListParams,
  PayStatementItemListResponse,
  PayStatementItemListResponsesPage,
} from './pay-statement-item/pay-statement-item';

export class CompanyResource extends APIResource {
  payStatementItem: PayStatementItemAPI.PayStatementItem = new PayStatementItemAPI.PayStatementItem(
    this._client,
  );

  /**
   * Read basic company data
   *
   * @example
   * ```ts
   * const company = await client.hris.company.retrieve({
   *   entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
   * });
   * ```
   */
  retrieve(query: CompanyRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Company> {
    return this._client.get('/employer/company', { query, ...options });
  }
}

export interface Company {
  /**
   * A stable Finch `id` (UUID v4) for the company.
   */
  id: string;

  /**
   * An array of bank account objects associated with the payroll/HRIS system.
   */
  accounts: Array<Company.Account> | null;

  /**
   * The array of company departments.
   */
  departments: Array<Company.Department | null> | null;

  /**
   * The employer identification number.
   */
  ein: string | null;

  /**
   * The entity type object.
   */
  entity: Company.Entity | null;

  /**
   * The legal name of the company.
   */
  legal_name: string | null;

  locations: Array<HRISAPI.Location | null> | null;

  /**
   * The email of the main administrator on the account.
   */
  primary_email: string | null;

  /**
   * The phone number of the main administrator on the account. Format: E.164, with
   * extension where applicable, e.g. `+NNNNNNNNNNN xExtension`
   */
  primary_phone_number: string | null;
}

export namespace Company {
  export interface Account {
    /**
     * The name of the bank associated in the payroll/HRIS system.
     */
    account_name: string | null;

    /**
     * 10-12 digit number to specify the bank account
     */
    account_number: string | null;

    /**
     * The type of bank account.
     */
    account_type: 'checking' | 'savings' | null;

    /**
     * Name of the banking institution.
     */
    institution_name: string | null;

    /**
     * A nine-digit code that's based on the U.S. Bank location where your account was
     * opened.
     */
    routing_number: string | null;
  }

  export interface Department {
    /**
     * The department name.
     */
    name: string | null;

    /**
     * The parent department, if present.
     */
    parent: Department.Parent | null;
  }

  export namespace Department {
    /**
     * The parent department, if present.
     */
    export interface Parent {
      /**
       * The parent department's name.
       */
      name: string | null;
    }
  }

  /**
   * The entity type object.
   */
  export interface Entity {
    /**
     * The tax payer subtype of the company.
     */
    subtype: 's_corporation' | 'c_corporation' | 'b_corporation' | null;

    /**
     * The tax payer type of the company.
     */
    type:
      | 'llc'
      | 'lp'
      | 'corporation'
      | 'sole_proprietor'
      | 'non_profit'
      | 'partnership'
      | 'cooperative'
      | null;
  }
}

export interface CompanyRetrieveParams {
  /**
   * The entity IDs to specify which entities' data to access.
   */
  entity_ids: Array<string>;
}

CompanyResource.PayStatementItem = PayStatementItem;
CompanyResource.PayStatementItemListResponsesPage = PayStatementItemListResponsesPage;

export declare namespace CompanyResource {
  export { type Company as Company, type CompanyRetrieveParams as CompanyRetrieveParams };

  export {
    PayStatementItem as PayStatementItem,
    type PayStatementItemListResponse as PayStatementItemListResponse,
    PayStatementItemListResponsesPage as PayStatementItemListResponsesPage,
    type PayStatementItemListParams as PayStatementItemListParams,
  };
}
