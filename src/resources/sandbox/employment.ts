// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HRISAPI from '../hris/hris';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

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
    individualID: string,
    body: EmploymentUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmploymentUpdateResponse> {
    return this._client.put(path`/sandbox/employment/${individualID}`, { body, ...options });
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
   * The detailed employment status of the individual.
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
   * The detailed employment status of the individual.
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
