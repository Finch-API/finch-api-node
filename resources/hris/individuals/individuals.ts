// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as HRIS from '~/resources/hris';
import { EmploymentData } from './employment-data';
import * as API from './';
import { ResponsesPage } from '~/pagination';

export class Individuals extends APIResource {
  employmentData: EmploymentData = new EmploymentData(this.client);

  /**
   * Read individual data, excluding income and employment data
   */
  retrieveMany(
    body?: IndividualRetrieveManyParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<IndividualResponsesResponsesPage>;
  retrieveMany(options?: Core.RequestOptions): Core.PagePromise<IndividualResponsesResponsesPage>;
  retrieveMany(
    body: IndividualRetrieveManyParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<IndividualResponsesResponsesPage> {
    if (isRequestOptions(body)) {
      return this.retrieveMany({}, body);
    }
    return this.getAPIList('/employer/individual', IndividualResponsesResponsesPage, {
      body,
      method: 'post',
      ...options,
    });
  }
}

export class IndividualResponsesResponsesPage extends ResponsesPage<IndividualResponse> {}

export interface Individual {
  dob?: string | null;

  emails?: Array<Individual.Email> | null;

  /**
   * The legal first name of the individual.
   */
  first_name?: string | null;

  /**
   * The gender of the individual.
   */
  gender?: 'female' | 'male' | 'other' | 'decline_to_specify' | null;

  /**
   * A stable Finch `id` (UUID v4) for an individual in the company.
   */
  id?: string;

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

  residence?: HRIS.Location | null;

  /**
   * Note: This property is only available if enabled for your account. Please reach
   * out to your Finch representative if you would like access.
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
  export import Individual = API.Individual;
  export import IndividualResponse = API.IndividualResponse;
  export import IndividualResponsesResponsesPage = API.IndividualResponsesResponsesPage;
  export import IndividualRetrieveManyParams = API.IndividualRetrieveManyParams;

  export import EmploymentData = API.EmploymentData;
  export import EmploymentDataResponse = API.EmploymentDataResponse;
  export import EmploymentDataResponsesResponsesPage = API.EmploymentDataResponsesResponsesPage;
  export import EmploymentDataRetrieveManyParams = API.EmploymentDataRetrieveManyParams;
}
