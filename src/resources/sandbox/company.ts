// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CompanyAPI from './company';
import * as HRISAPI from '../hris/hris';

export class Company extends APIResource {
  /**
   * Update a sandbox company's data
   */
  update(body: CompanyUpdateParams, options?: Core.RequestOptions): Core.APIPromise<CompanyUpdateResponse> {
    return this._client.put('/sandbox/company', { body, ...options });
  }
}

export interface CompanyUpdateResponse {
  /**
   * An array of bank account objects associated with the payroll/HRIS system.
   */
  accounts: Array<CompanyUpdateResponse.Account> | null;

  /**
   * The array of company departments.
   */
  departments: Array<CompanyUpdateResponse.Department | null> | null;

  /**
   * The employer identification number.
   */
  ein: string | null;

  /**
   * The entity type object.
   */
  entity: CompanyUpdateResponse.Entity | null;

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
   * The phone number of the main administrator on the account. Format: `XXXXXXXXXX`
   */
  primary_phone_number: string | null;
}

export namespace CompanyUpdateResponse {
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
    type?:
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

export interface CompanyUpdateParams {
  /**
   * An array of bank account objects associated with the payroll/HRIS system.
   */
  accounts: Array<CompanyUpdateParams.Account> | null;

  /**
   * The array of company departments.
   */
  departments: Array<CompanyUpdateParams.Department | null> | null;

  /**
   * The employer identification number.
   */
  ein: string | null;

  /**
   * The entity type object.
   */
  entity: CompanyUpdateParams.Entity | null;

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
   * The phone number of the main administrator on the account. Format: `XXXXXXXXXX`
   */
  primary_phone_number: string | null;
}

export namespace CompanyUpdateParams {
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
    type?:
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

export namespace Company {
  export import CompanyUpdateResponse = CompanyAPI.CompanyUpdateResponse;
  export import CompanyUpdateParams = CompanyAPI.CompanyUpdateParams;
}
