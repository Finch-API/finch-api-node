// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HRISAPI from './hris';
import { PagePromise, ResponsesPage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Employments extends APIResource {
  /**
   * Read individual employment and income data
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const employmentDataResponse of client.hris.employments.retrieveMany(
   *   { requests: [{ individual_id: 'individual_id' }] },
   * )) {
   *   // ...
   * }
   * ```
   */
  retrieveMany(
    params: EmploymentRetrieveManyParams,
    options?: RequestOptions,
  ): PagePromise<EmploymentDataResponsesPage, EmploymentDataResponse> {
    const { entity_ids, ...body } = params;
    return this._client.getAPIList('/employer/employment', ResponsesPage<EmploymentDataResponse>, {
      query: { entity_ids },
      body,
      method: 'post',
      ...options,
    });
  }
}

export type EmploymentDataResponsesPage = ResponsesPage<EmploymentDataResponse>;

export type EmploymentData = EmploymentData.UnionMember0 | EmploymentData.BatchError;

export namespace EmploymentData {
  export interface UnionMember0 {
    /**
     * A stable Finch `id` (UUID v4) for an individual in the company.
     */
    id: string;

    /**
     * Worker's compensation classification code for this employee
     */
    class_code: string | null;

    /**
     * The department object.
     */
    department: UnionMember0.Department | null;

    /**
     * The employment object.
     */
    employment: UnionMember0.Employment | null;

    /**
     * The detailed employment status of the individual.
     */
    employment_status:
      | 'active'
      | 'deceased'
      | 'leave'
      | 'onboarding'
      | 'prehire'
      | 'retired'
      | 'terminated'
      | null;

    end_date: string | null;

    /**
     * The legal first name of the individual.
     */
    first_name: string | null;

    /**
     * `true` if the individual an an active employee or contractor at the company.
     */
    is_active: boolean | null;

    /**
     * The legal last name of the individual.
     */
    last_name: string | null;

    latest_rehire_date: string | null;

    location: HRISAPI.Location | null;

    /**
     * The manager object representing the manager of the individual within the org.
     */
    manager: UnionMember0.Manager | null;

    /**
     * The legal middle name of the individual.
     */
    middle_name: string | null;

    start_date: string | null;

    /**
     * The current title of the individual.
     */
    title: string | null;

    /**
     * Custom fields for the individual. These are fields which are defined by the
     * employer in the system. Custom fields are not currently supported for assisted
     * connections.
     */
    custom_fields?: Array<UnionMember0.CustomField> | null;

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
     * The source system's unique employment identifier for this individual
     */
    source_id?: string | null;

    /**
     * @deprecated This field is deprecated in favour of `source_id`
     */
    work_id?: string | null;
  }

  export namespace UnionMember0 {
    /**
     * The department object.
     */
    export interface Department {
      /**
       * The name of the department associated with the individual.
       */
      name: string | null;
    }

    /**
     * The employment object.
     */
    export interface Employment {
      /**
       * The secondary employment type of the individual. Options: `full_time`,
       * `part_time`, `intern`, `temp`, `seasonal` and `individual_contractor`.
       */
      subtype: 'full_time' | 'intern' | 'part_time' | 'temp' | 'seasonal' | 'individual_contractor' | null;

      /**
       * The main employment type of the individual.
       */
      type: 'employee' | 'contractor' | null;
    }

    /**
     * The manager object representing the manager of the individual within the org.
     */
    export interface Manager {
      /**
       * A stable Finch `id` (UUID v4) for an individual in the company.
       */
      id: string;
    }

    export interface CustomField {
      name?: string | null;

      value?: string | null | Array<unknown> | null | unknown | number | null | boolean | null;
    }
  }

  export interface BatchError {
    code: number;

    message: string;

    name: string;

    finch_code?: string;
  }
}

export interface EmploymentDataResponse {
  body: EmploymentData;

  code: number;

  /**
   * A stable Finch `id` (UUID v4) for an individual in the company.
   */
  individual_id: string;
}

export interface EmploymentRetrieveManyParams {
  /**
   * Body param: The array of batch requests.
   */
  requests: Array<EmploymentRetrieveManyParams.Request>;

  /**
   * Query param: The entity IDs to specify which entities' data to access.
   */
  entity_ids?: Array<string>;
}

export namespace EmploymentRetrieveManyParams {
  export interface Request {
    /**
     * A stable Finch `id` (UUID v4) for an individual in the company. There is no
     * limit to the number of `individual_id` to send per request. It is preferantial
     * to send all ids in a single request for Finch to optimize provider rate-limits.
     */
    individual_id: string;
  }
}

export declare namespace Employments {
  export {
    type EmploymentData as EmploymentData,
    type EmploymentDataResponse as EmploymentDataResponse,
    type EmploymentDataResponsesPage as EmploymentDataResponsesPage,
    type EmploymentRetrieveManyParams as EmploymentRetrieveManyParams,
  };
}
