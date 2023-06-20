// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as HRIS from '~/resources/hris';
import * as API from './';
import { ResponsesPage } from '~/pagination';

export class EmploymentData extends APIResource {
  /**
   * Read individual employment and income data
   *
   * Note: Income information is returned as reported by the provider. This may not
   * always be annualized income, but may be in units of bi-weekly, semi-monthly,
   * daily, etc, depending on what information the provider returns.
   */
  retrieveMany(
    body: EmploymentDataRetrieveManyParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<EmploymentDataResponsesResponsesPage> {
    return this.getAPIList('/employer/employment', EmploymentDataResponsesResponsesPage, {
      body,
      method: 'post',
      ...options,
    });
  }
}

export class EmploymentDataResponsesResponsesPage extends ResponsesPage<EmploymentDataResponse> {}

export interface EmploymentData {
  /**
   * Worker's compensation classification code for this employee
   */
  class_code?: string | null;

  /**
   * The department object.
   */
  department?: EmploymentData.Department | null;

  /**
   * The employment object.
   */
  employment?: EmploymentData.Employment | null;

  end_date?: string | null;

  /**
   * The legal first name of the individual.
   */
  first_name?: string | null;

  /**
   * string A stable Finch `id` (UUID v4) for an individual in the company.
   */
  id?: string;

  /**
   * The employee's income as reported by the provider. This may not always be
   * annualized income, but may be in units of bi-weekly, semi-monthly, daily, etc,
   * depending on what information the provider returns.
   */
  income?: HRIS.Income | null;

  /**
   * The array of income history.
   */
  income_history?: Array<HRIS.Income | null> | null;

  /**
   * `true` if the individual an an active employee or contractor at the company.
   */
  is_active?: boolean | null;

  /**
   * The legal last name of the individual.
   */
  last_name?: string | null;

  location?: HRIS.Location | null;

  /**
   * The manager object representing the manager of the individual within the org.
   */
  manager?: EmploymentData.Manager | null;

  /**
   * The legal middle name of the individual.
   */
  middle_name?: string | null;

  /**
   * Note: This property is only available if enabled for your account. Please reach
   * out to your Finch representative if you would like access.
   */
  pay_group_ids?: Array<string> | null;

  start_date?: string | null;

  /**
   * The current title of the individual.
   */
  title?: string | null;

  /**
   * Note: This property is only available if enabled for your account. Please reach
   * out to your Finch representative if you would like access.
   */
  work_id?: string | null;

  /**
   * Note: This property is only available if enabled for your account. Please reach
   * out to your Finch representative if you would like access.
   */
  work_id_2?: string | null;
}

export namespace EmploymentData {
  /**
   * The manager object representing the manager of the individual within the org.
   */
  export interface Manager {
    /**
     * A stable Finch `id` (UUID v4) for an individual in the company.
     */
    id?: string;
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
}

export interface EmploymentDataResponse {
  body?: EmploymentData;

  code?: number;

  individual_id?: string;
}

export interface EmploymentDataRetrieveManyParams {
  /**
   * The array of batch requests.
   */
  requests: Array<EmploymentDataRetrieveManyParams.Requests>;
}

export namespace EmploymentDataRetrieveManyParams {
  export interface Requests {
    /**
     * A stable Finch `id` (UUID v4) for an individual in the company. There is no
     * limit to the number of `individual_id` to send per request. It is preferantial
     * to send all ids in a single request for Finch to optimize provider rate-limits.
     */
    individual_id: string;
  }
}

export namespace EmploymentData {
  export import EmploymentData = API.EmploymentData;
  export import EmploymentDataResponse = API.EmploymentDataResponse;
  export import EmploymentDataResponsesResponsesPage = API.EmploymentDataResponsesResponsesPage;
  export import EmploymentDataRetrieveManyParams = API.EmploymentDataRetrieveManyParams;
}
