// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@tryfinch/finch-api/core';
import { APIResource } from '@tryfinch/finch-api/resource';
import { isRequestOptions } from '@tryfinch/finch-api/core';
import * as IndividualsAPI from '@tryfinch/finch-api/resources/hris/individuals';
import * as HRISAPI from '@tryfinch/finch-api/resources/hris/hris';
import { ResponsesPage } from '@tryfinch/finch-api/pagination';

export class Individuals extends APIResource {
  /**
   * Read individual data, excluding income and employment data
   */
  retrieveMany(
    body?: IndividualRetrieveManyParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<IndividualResponsesPage, IndividualResponse>;
  retrieveMany(options?: Core.RequestOptions): Core.PagePromise<IndividualResponsesPage, IndividualResponse>;
  retrieveMany(
    body: IndividualRetrieveManyParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<IndividualResponsesPage, IndividualResponse> {
    if (isRequestOptions(body)) {
      return this.retrieveMany({}, body);
    }
    return this._client.getAPIList('/employer/individual', IndividualResponsesPage, {
      body,
      method: 'post',
      ...options,
    });
  }
}

export class IndividualResponsesPage extends ResponsesPage<IndividualResponse> {}

export interface Individual {
  /**
   * A stable Finch `id` (UUID v4) for an individual in the company.
   */
  id?: string;

  dob?: string | null;

  emails?: Array<Individual.Email> | null;

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

  phone_numbers?: Array<Individual.PhoneNumber | null> | null;

  /**
   * The preferred name of the individual.
   */
  preferred_name?: string | null;

  residence?: HRISAPI.Location | null;

  /**
   * Social Security Number of the individual. This field is only available with the
   * `ssn` scope enabled and the `options: { include: ['ssn'] }` param set in the
   * body.
   */
  ssn?: string | null;
}

export namespace Individual {
  export interface Email {
    data?: string;

    type?: 'work' | 'personal';
  }

  export interface PhoneNumber {
    data?: string | null;

    type?: 'work' | 'personal' | null;
  }
}

export interface IndividualResponse {
  body?: Individual;

  code?: number;

  individual_id?: string;
}

export interface IndividualRetrieveManyParams {
  options?: IndividualRetrieveManyParams.Options | null;

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

export namespace Individuals {
  export import Individual = IndividualsAPI.Individual;
  export import IndividualResponse = IndividualsAPI.IndividualResponse;
  export import IndividualResponsesPage = IndividualsAPI.IndividualResponsesPage;
  export import IndividualRetrieveManyParams = IndividualsAPI.IndividualRetrieveManyParams;
}
