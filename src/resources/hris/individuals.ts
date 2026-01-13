// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HRISAPI from './hris';
import { PagePromise, ResponsesPage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Individuals extends APIResource {
  /**
   * Read individual data, excluding income and employment data
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const individualResponse of client.hris.individuals.retrieveMany()) {
   *   // ...
   * }
   * ```
   */
  retrieveMany(
    params: IndividualRetrieveManyParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<IndividualResponsesPage, IndividualResponse> {
    const { entity_ids, ...body } = params ?? {};
    return this._client.getAPIList('/employer/individual', ResponsesPage<IndividualResponse>, {
      query: { entity_ids },
      body,
      method: 'post',
      ...options,
    });
  }
}

export type IndividualResponsesPage = ResponsesPage<IndividualResponse>;

export type Individual = Individual.UnionMember0 | Individual.BatchError;

export namespace Individual {
  export interface UnionMember0 {
    /**
     * A stable Finch `id` (UUID v4) for an individual in the company.
     */
    id: string;

    dob: string | null;

    /**
     * The EEOC-defined ethnicity of the individual.
     */
    ethnicity:
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
    first_name: string | null;

    /**
     * The gender of the individual.
     */
    gender: 'female' | 'male' | 'other' | 'decline_to_specify' | null;

    /**
     * The legal last name of the individual.
     */
    last_name: string | null;

    /**
     * The legal middle name of the individual.
     */
    middle_name: string | null;

    phone_numbers: Array<UnionMember0.PhoneNumber | null> | null;

    /**
     * The preferred name of the individual.
     */
    preferred_name: string | null;

    residence: HRISAPI.Location | null;

    emails?: Array<UnionMember0.Email> | null;

    /**
     * Social Security Number of the individual in **encrypted** format. This field is
     * only available with the `ssn` scope enabled and the
     * `options: { include: ['ssn'] }` param set in the body.
     */
    encrypted_ssn?: string | null;

    /**
     * Social Security Number of the individual. This field is only available with the
     * `ssn` scope enabled and the `options: { include: ['ssn'] }` param set in the
     * body.
     * [Click here to learn more about enabling the SSN field](/developer-resources/Enable-SSN-Field).
     */
    ssn?: string | null;
  }

  export namespace UnionMember0 {
    export interface PhoneNumber {
      data: string | null;

      type: 'work' | 'personal' | null;
    }

    export interface Email {
      data: string;

      type: 'work' | 'personal' | null;
    }
  }

  export interface BatchError {
    code: number;

    message: string;

    name: string;

    finch_code?: string;
  }
}

export interface IndividualResponse {
  body: Individual;

  code: number;

  individual_id: string;
}

export interface IndividualRetrieveManyParams {
  /**
   * Query param: The entity IDs to specify which entities' data to access.
   */
  entity_ids?: Array<string>;

  /**
   * Body param
   */
  options?: IndividualRetrieveManyParams.Options | null;

  /**
   * Body param
   */
  requests?: Array<IndividualRetrieveManyParams.Request>;
}

export namespace IndividualRetrieveManyParams {
  export interface Options {
    include?: Array<string>;
  }

  export interface Request {
    individual_id?: string;
  }
}

export declare namespace Individuals {
  export {
    type Individual as Individual,
    type IndividualResponse as IndividualResponse,
    type IndividualResponsesPage as IndividualResponsesPage,
    type IndividualRetrieveManyParams as IndividualRetrieveManyParams,
  };
}
