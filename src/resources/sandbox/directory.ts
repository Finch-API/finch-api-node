// File generated from our OpenAPI spec by Stainless.

import * as Core from '@tryfinch/finch-api/core';
import { APIResource } from '@tryfinch/finch-api/resource';
import * as DirectoryAPI from '@tryfinch/finch-api/resources/sandbox/directory';
import * as HRISAPI from '@tryfinch/finch-api/resources/hris/hris';

export class Directory extends APIResource {
  /**
   * Add new individuals to a sandbox company
   */
  create(
    body: DirectoryCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DirectoryCreateResponse> {
    return this._client.post('/sandbox/directory', { body, ...options });
  }
}

/**
 * The individuals which were created
 */
export type DirectoryCreateResponse = Array<unknown>;

export type DirectoryCreateParams = Array<DirectoryCreateParams.Body>;

export namespace DirectoryCreateParams {
  export interface Body {
    /**
     * Worker's compensation classification code for this employee
     */
    class_code?: string | null;

    /**
     * Custom fields for the individual. These are fields which are defined by the
     * employer in the system. Custom fields are not currently supported for assisted
     * connections.
     */
    custom_fields?: Array<Body.CustomField>;

    /**
     * The department object.
     */
    department?: Body.Department | null;

    dob?: string | null;

    emails?: Array<Body.Email> | null;

    /**
     * The employment object.
     */
    employment?: Body.Employment | null;

    /**
     * Social Security Number of the individual in **encrypted** format. This field is
     * only available with the `ssn` scope enabled and the
     * `options: { include: ['ssn'] }` param set in the body.
     */
    encrypted_ssn?: string | null;

    end_date?: string | null;

    /**
     * The EEOC-defined ethnicity of the individual.
     */
    ethnicity?:
      | 'asian'
      | 'white'
      | 'black_or_african_american'
      | 'native_hawaiian_or_pacific_islander'
      | 'american_indian_or_alaska_native'
      | 'hispanic_or_latino'
      | 'two_or_more_races'
      | 'decline_to_specify'
      | null;

    /**
     * The legal first name of the individual.
     */
    first_name?: string | null;

    /**
     * The gender of the individual.
     */
    gender?: 'female' | 'male' | 'other' | 'decline_to_specify' | null;

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
    manager?: Body.Manager | null;

    /**
     * The legal middle name of the individual.
     */
    middle_name?: string | null;

    phone_numbers?: Array<Body.PhoneNumber | null> | null;

    /**
     * The preferred name of the individual.
     */
    preferred_name?: string | null;

    residence?: HRISAPI.Location | null;

    /**
     * The source system's unique employment identifier for this individual
     */
    source_id?: string;

    /**
     * Social Security Number of the individual. This field is only available with the
     * `ssn` scope enabled and the `options: { include: ['ssn'] }` param set in the
     * body.
     */
    ssn?: string | null;

    start_date?: string | null;

    /**
     * The current title of the individual.
     */
    title?: string | null;
  }

  export namespace Body {
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

    export interface Email {
      data?: string;

      type?: 'work' | 'personal';
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

    export interface PhoneNumber {
      data?: string;

      type?: 'work' | 'personal';
    }
  }
}

export namespace Directory {
  export import DirectoryCreateResponse = DirectoryAPI.DirectoryCreateResponse;
  export import DirectoryCreateParams = DirectoryAPI.DirectoryCreateParams;
}
