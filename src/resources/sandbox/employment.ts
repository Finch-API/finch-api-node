// File generated from our OpenAPI spec by Stainless.

import * as Core from '@tryfinch/finch-api/core';
import { APIResource } from '@tryfinch/finch-api/resource';
import { isRequestOptions } from '@tryfinch/finch-api/core';
import * as EmploymentAPI from '@tryfinch/finch-api/resources/sandbox/employment';
import * as HRISAPI from '@tryfinch/finch-api/resources/hris/hris';

export class Employment extends APIResource {
  /**
   * Update sandbox employment
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
  custom_fields?: Array<EmploymentUpdateResponse.CustomField>;

  /**
   * The department object.
   */
  department?: EmploymentUpdateResponse.Department | null;

  /**
   * The employment object.
   */
  employment?: EmploymentUpdateResponse.Employment | null;

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
  source_id?: string;

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
     * The secondary employment type of the individual. Options: `full_time`, `part_time`, `intern`, `temp`, `seasonal` and `individual_contractor`.
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
  custom_fields?: Array<EmploymentUpdateParams.CustomField>;

  /**
   * The department object.
   */
  department?: EmploymentUpdateParams.Department | null;

  /**
   * The employment object.
   */
  employment?: EmploymentUpdateParams.Employment | null;

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
  source_id?: string;

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
     * The secondary employment type of the individual. Options: `full_time`, `part_time`, `intern`, `temp`, `seasonal` and `individual_contractor`.
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

export namespace Employment {
  export import EmploymentUpdateResponse = EmploymentAPI.EmploymentUpdateResponse;
  export import EmploymentUpdateParams = EmploymentAPI.EmploymentUpdateParams;
}
