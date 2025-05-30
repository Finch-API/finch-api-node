// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as HRISAPI from '../hris/hris';

export class Individual extends APIResource {
  /**
   * Update sandbox individual
   *
   * @example
   * ```ts
   * const individual = await client.sandbox.individual.update(
   *   'individual_id',
   * );
   * ```
   */
  update(
    individualId: string,
    body?: IndividualUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndividualUpdateResponse>;
  update(individualId: string, options?: Core.RequestOptions): Core.APIPromise<IndividualUpdateResponse>;
  update(
    individualId: string,
    body: IndividualUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndividualUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(individualId, {}, body);
    }
    return this._client.put(`/sandbox/individual/${individualId}`, { body, ...options });
  }
}

export interface IndividualUpdateResponse {
  /**
   * A stable Finch `id` (UUID v4) for an individual in the company.
   */
  id?: string;

  dob?: string | null;

  emails?: Array<IndividualUpdateResponse.Email> | null;

  /**
   * Social Security Number of the individual in **encrypted** format. This field is
   * only available with the `ssn` scope enabled and the
   * `options: { include: ['ssn'] }` param set in the body.
   */
  encrypted_ssn?: string | null;

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
   * The legal last name of the individual.
   */
  last_name?: string | null;

  /**
   * The legal middle name of the individual.
   */
  middle_name?: string | null;

  phone_numbers?: Array<IndividualUpdateResponse.PhoneNumber | null> | null;

  /**
   * The preferred name of the individual.
   */
  preferred_name?: string | null;

  residence?: HRISAPI.Location | null;

  /**
   * Social Security Number of the individual. This field is only available with the
   * `ssn` scope enabled and the `options: { include: ['ssn'] }` param set in the
   * body.
   * [Click here to learn more about enabling the SSN field](/developer-resources/Enable-SSN-Field).
   */
  ssn?: string | null;
}

export namespace IndividualUpdateResponse {
  export interface Email {
    data?: string;

    type?: 'work' | 'personal' | null;
  }

  export interface PhoneNumber {
    data?: string | null;

    type?: 'work' | 'personal' | null;
  }
}

export interface IndividualUpdateParams {
  dob?: string | null;

  emails?: Array<IndividualUpdateParams.Email> | null;

  /**
   * Social Security Number of the individual in **encrypted** format. This field is
   * only available with the `ssn` scope enabled and the
   * `options: { include: ['ssn'] }` param set in the body.
   */
  encrypted_ssn?: string | null;

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
   * The legal last name of the individual.
   */
  last_name?: string | null;

  /**
   * The legal middle name of the individual.
   */
  middle_name?: string | null;

  phone_numbers?: Array<IndividualUpdateParams.PhoneNumber | null> | null;

  /**
   * The preferred name of the individual.
   */
  preferred_name?: string | null;

  residence?: HRISAPI.Location | null;

  /**
   * Social Security Number of the individual. This field is only available with the
   * `ssn` scope enabled and the `options: { include: ['ssn'] }` param set in the
   * body.
   * [Click here to learn more about enabling the SSN field](/developer-resources/Enable-SSN-Field).
   */
  ssn?: string | null;
}

export namespace IndividualUpdateParams {
  export interface Email {
    data?: string;

    type?: 'work' | 'personal' | null;
  }

  export interface PhoneNumber {
    data?: string | null;

    type?: 'work' | 'personal' | null;
  }
}

export declare namespace Individual {
  export {
    type IndividualUpdateResponse as IndividualUpdateResponse,
    type IndividualUpdateParams as IndividualUpdateParams,
  };
}
