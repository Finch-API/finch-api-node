// File generated from our OpenAPI spec by Stainless.

import * as Core from '@tryfinch/finch-api/core';
import { APIResource } from '@tryfinch/finch-api/resource';
import * as HRIS from '@tryfinch/finch-api/resources/hris/index';
import * as API from './index';

export class CompanyResource extends APIResource {
  /**
   * Read basic company data
   */
  retrieve(options?: Core.RequestOptions): Promise<Core.APIResponse<Company>> {
    return this.get('/employer/company', options);
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

  locations: Array<HRIS.Location | null> | null;

  /**
   * The email of the main administrator on the account.
   */
  primary_email: string | null;

  /**
   * The phone number of the main administrator on the account. Format: `XXXXXXXXXX`
   */
  primary_phone_number: string | null;
}

export namespace Company {
  export interface Account {
    /**
     * The name of the bank associated in the payroll/HRIS system.
     */
    account_name?: string | null;

    /**
     * 10-12 digit number to specify the bank account
     */
    account_number?: string | null;

    /**
     * The type of bank account.
     */
    account_type?: 'checking' | 'savings' | null;

    /**
     * Name of the banking institution.
     */
    institution_name?: string | null;

    /**
     * A nine-digit code that's based on the U.S. Bank location where your account was
     * opened.
     */
    routing_number?: string | null;
  }

  export interface Department {
    /**
     * The department name.
     */
    name?: string | null;

    /**
     * The parent department, if present.
     */
    parent?: Department.Parent | null;
  }

  export namespace Department {
    /**
     * The parent department, if present.
     */
    export interface Parent {
      /**
       * The parent department's name.
       */
      name?: string | null;
    }
  }

  /**
   * The entity type object.
   */
  export interface Entity {
    /**
     * The tax payer subtype of the company.
     */
    subtype?: 's_corporation' | 'c_corporation' | 'b_corporation' | null;

    /**
     * The tax payer type of the company.
     */
    type?: 'llc' | 'corporation' | 'sole_proprietor' | 'non_profit' | 'partnership' | 'cooperative' | null;
  }
}

export namespace CompanyResource {
  export import Company = API.Company;
}
