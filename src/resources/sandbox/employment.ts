// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as HRISAPI from '../hris/hris';

export class Employment extends APIResource {
  /**
   * Update sandbox employment
   *
   * @example
   * ```ts
   * const employment = await client.sandbox.employment.update(
   *   'individual_id',
   * );
   * ```
   */
  update(
    individualId: string,
    body?: EmploymentUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmploymentUpdateResponse>;
  update(individualId: string, options?: Core.RequestOptions): Core.APIPromise<EmploymentUpdateResponse>;
  update(
    individualId: string,
    body: EmploymentUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmploymentUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(individualId, {}, body);
    }
    return this._client.put(`/sandbox/employment/${individualId}`, { body, ...options });
  }
}

export interface EmploymentUpdateResponse {
  /**
   * A stable Finch `id` (UUID v4) for an individual in the company.
   */
  id?: string;

  /**
   * Worker's compensation classification code for this employee
   */
  class_code?: string | null;

  /**
   * Custom fields for the individual. These are fields which are defined by the
   * employer in the system. Custom fields are not currently supported for assisted
   * connections.
   */
  custom_fields?: Array<EmploymentUpdateResponse.CustomField> | null;

  /**
   * The department object.
   */
  department?: EmploymentUpdateResponse.Department | null;

  /**
   * The employment object.
   */
  employment?: EmploymentUpdateResponse.Employment | null;

  /**
   * The detailed employment status of the individual. Available options: `active`,
   * `deceased`, `leave`, `onboarding`, `prehire`, `retired`, `terminated`.
   */
  employment_status?:
    | 'active'
    | 'deceased'
    | 'leave'
    | 'onboarding'
    | 'prehire'
    | 'retired'
    | 'terminated'
    | null;

  end_date?: string | null;

  /**
   * The legal first name of the individual.
   */
  first_name?: string | null;

  /**
   * The employee's income as reported by the provider. This may not always be
   * annualized income, but may be in units of bi-weekly, semi-monthly, daily, etc,
   * depending on what information the provider returns.
   */
  income?: HRISAPI.Income | null;

  /**
   * The array of income history.
   */
  income_history?: Array<HRISAPI.Income | null> | null;

  /**
   * `true` if the individual an an active employee or contractor at the company.
   */
  is_active?: boolean | null;

  /**
   * The legal last name of the individual.
   */
  last_name?: string | null;

  latest_rehire_date?: string | null;

  location?: HRISAPI.Location | null;

  /**
   * The manager object representing the manager of the individual within the org.
   */
  manager?: EmploymentUpdateResponse.Manager | null;

  /**
   * The legal middle name of the individual.
   */
  middle_name?: string | null;

  /**
   * The source system's unique employment identifier for this individual
   */
  source_id?: string | null;

  start_date?: string | null;

  /**
   * The current title of the individual.
   */
  title?: string | null;
}

export namespace EmploymentUpdateResponse {
  export interface CustomField {
    name?: string | null;

    value?: unknown;
  }

  /**
   * The department object.
   */
  export interface Department {
    /**
     * The name of the department associated with the individual.
     */
    name?: string | null;
  }

  /**
   * The employment object.
   */
  export interface Employment {
    /**
     * The secondary employment type of the individual. Options: `full_time`,
     * `part_time`, `intern`, `temp`, `seasonal` and `individual_contractor`.
     */
    subtype?: 'full_time' | 'intern' | 'part_time' | 'temp' | 'seasonal' | 'individual_contractor' | null;

    /**
     * The main employment type of the individual.
     */
    type?: 'employee' | 'contractor' | null;
  }

  /**
   * The manager object representing the manager of the individual within the org.
   */
  export interface Manager {
    /**
     * A stable Finch `id` (UUID v4) for an individual in the company.
     */
    id?: string;
  }
}

export interface EmploymentUpdateParams {
  /**
   * Worker's compensation classification code for this employee
   */
  class_code?: string | null;

  /**
   * Custom fields for the individual. These are fields which are defined by the
   * employer in the system. Custom fields are not currently supported for assisted
   * connections.
   */
  custom_fields?: Array<EmploymentUpdateParams.CustomField> | null;

  /**
   * The department object.
   */
  department?: EmploymentUpdateParams.Department | null;

  /**
   * The employment object.
   */
  employment?: EmploymentUpdateParams.Employment | null;

  /**
   * The detailed employment status of the individual. Available options: `active`,
   * `deceased`, `leave`, `onboarding`, `prehire`, `retired`, `terminated`.
   */
  employment_status?:
    | 'active'
    | 'deceased'
    | 'leave'
    | 'onboarding'
    | 'prehire'
    | 'retired'
    | 'terminated'
    | null;

  end_date?: string | null;

  /**
   * The legal first name of the individual.
   */
  first_name?: string | null;

  /**
   * The employee's income as reported by the provider. This may not always be
   * annualized income, but may be in units of bi-weekly, semi-monthly, daily, etc,
   * depending on what information the provider returns.
   */
  income?: HRISAPI.Income | null;

  /**
   * The array of income history.
   */
  income_history?: Array<HRISAPI.Income | null> | null;

  /**
   * `true` if the individual an an active employee or contractor at the company.
   */
  is_active?: boolean | null;

  /**
   * The legal last name of the individual.
   */
  last_name?: string | null;

  latest_rehire_date?: string | null;

  location?: HRISAPI.Location | null;

  /**
   * The manager object representing the manager of the individual within the org.
   */
  manager?: EmploymentUpdateParams.Manager | null;

  /**
   * The legal middle name of the individual.
   */
  middle_name?: string | null;

  /**
   * The source system's unique employment identifier for this individual
   */
  source_id?: string | null;

  start_date?: string | null;

  /**
   * The current title of the individual.
   */
  title?: string | null;
}

export namespace EmploymentUpdateParams {
  export interface CustomField {
    name?: string | null;

    value?: unknown;
  }

  /**
   * The department object.
   */
  export interface Department {
    /**
     * The name of the department associated with the individual.
     */
    name?: string | null;
  }

  /**
   * The employment object.
   */
  export interface Employment {
    /**
     * The secondary employment type of the individual. Options: `full_time`,
     * `part_time`, `intern`, `temp`, `seasonal` and `individual_contractor`.
     */
    subtype?: 'full_time' | 'intern' | 'part_time' | 'temp' | 'seasonal' | 'individual_contractor' | null;

    /**
     * The main employment type of the individual.
     */
    type?: 'employee' | 'contractor' | null;
  }

  /**
   * The manager object representing the manager of the individual within the org.
   */
  export interface Manager {
    /**
     * A stable Finch `id` (UUID v4) for an individual in the company.
     */
    id?: string;
  }
}

export declare namespace Employment {
  export {
    type EmploymentUpdateResponse as EmploymentUpdateResponse,
    type EmploymentUpdateParams as EmploymentUpdateParams,
  };
}
