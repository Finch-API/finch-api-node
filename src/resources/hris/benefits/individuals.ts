// File generated from our OpenAPI spec by Stainless.

import * as Core from '@tryfinch/finch-api/core';
import { APIResource } from '@tryfinch/finch-api/resource';
import { isRequestOptions } from '@tryfinch/finch-api/core';
import * as IndividualsAPI from '@tryfinch/finch-api/resources/hris/benefits/individuals';
import * as BenefitsAPI from '@tryfinch/finch-api/resources/hris/benefits/benefits';
import { SinglePage } from '@tryfinch/finch-api/pagination';

export class Individuals extends APIResource {
  /**
   * **Availability: Automated and Assisted Benefits providers**
   *
   * Enroll an individual into a benefit. If the employee is already enrolled, the
   * enrollment amounts will be adjusted.
   *
   * <!-- theme: warning -->
   *
   * > Making changes to an individual's benefits may have tax consequences based on
   * > IRS regulations. Please consult a tax expert to ensure all changes being made
   * > to the system are compliant with local, state, and federal law.
   */
  enrollMany(
    benefitId: string,
    body: IndividualEnrollManyParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<EnrolledIndividualsSinglePage, EnrolledIndividual> {
    return this._client.getAPIList(
      `/employer/benefits/${benefitId}/individuals`,
      EnrolledIndividualsSinglePage,
      { body, method: 'post', ...options },
    );
  }

  /**
   * **Availability: Automated Benefits providers only**
   *
   * Lists individuals currently enrolled in a given benefit.
   */
  enrolledIds(
    benefitId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndividualEnrolledIDsResponse> {
    return this._client.get(`/employer/benefits/${benefitId}/enrolled`, options);
  }

  /**
   * **Availability: Automated Benefits providers only**
   *
   * Get enrolled benefit information for the given individuals.
   */
  retrieveManyBenefits(
    benefitId: string,
    query?: IndividualRetrieveManyBenefitsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<IndividualBenefitsSinglePage, IndividualBenefit>;
  retrieveManyBenefits(
    benefitId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<IndividualBenefitsSinglePage, IndividualBenefit>;
  retrieveManyBenefits(
    benefitId: string,
    query: IndividualRetrieveManyBenefitsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<IndividualBenefitsSinglePage, IndividualBenefit> {
    if (isRequestOptions(query)) {
      return this.retrieveManyBenefits(benefitId, {}, query);
    }
    return this._client.getAPIList(
      `/employer/benefits/${benefitId}/individuals`,
      IndividualBenefitsSinglePage,
      { query, ...options },
    );
  }

  /**
   * **Availability: Automated and Assisted Benefits providers**
   *
   * Unenroll individuals from a benefit
   */
  unenrollMany(
    benefitId: string,
    body?: IndividualUnenrollManyParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<UnenrolledIndividualsSinglePage, UnenrolledIndividual>;
  unenrollMany(
    benefitId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<UnenrolledIndividualsSinglePage, UnenrolledIndividual>;
  unenrollMany(
    benefitId: string,
    body: IndividualUnenrollManyParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<UnenrolledIndividualsSinglePage, UnenrolledIndividual> {
    if (isRequestOptions(body)) {
      return this.unenrollMany(benefitId, {}, body);
    }
    return this._client.getAPIList(
      `/employer/benefits/${benefitId}/individuals`,
      UnenrolledIndividualsSinglePage,
      { body, method: 'delete', ...options },
    );
  }
}

export class EnrolledIndividualsSinglePage extends SinglePage<EnrolledIndividual> {}

export class IndividualBenefitsSinglePage extends SinglePage<IndividualBenefit> {}

export class UnenrolledIndividualsSinglePage extends SinglePage<UnenrolledIndividual> {}

export interface EnrolledIndividual {
  body?: EnrolledIndividual.Body;

  /**
   * HTTP status code. Either 201 or 200
   */
  code?: 200 | 201 | 404 | 403;

  individual_id?: string;
}

export namespace EnrolledIndividual {
  export interface Body {
    /**
     * A descriptive identifier for the response
     */
    finch_code?: string | null;

    /**
     * Short description in English that provides more information about the response.
     */
    message?: string | null;

    /**
     * Identifier indicating whether the benefit was newly enrolled or updated.
     */
    name?: string | null;
  }
}

export interface IndividualBenefit {
  body?: IndividualBenefit.Body;

  code?: number;

  individual_id?: string;
}

export namespace IndividualBenefit {
  export interface Body {
    /**
     * If the benefit supports annual maximum, the amount in cents for this individual.
     */
    annual_maximum?: number | null;

    /**
     * If the benefit supports catch up (401k, 403b, etc.), whether catch up is enabled
     * for this individual.
     */
    catch_up?: boolean | null;

    company_contribution?: BenefitsAPI.BenefitContribution | null;

    employee_deduction?: BenefitsAPI.BenefitContribution | null;

    /**
     * Type for HSA contribution limit if the benefit is a HSA.
     */
    hsa_contribution_limit?: 'individual' | 'family' | null;
  }
}

export interface UnenrolledIndividual {
  body?: UnenrolledIndividual.Body;

  /**
   * HTTP status code
   */
  code?: number;

  individual_id?: string;
}

export namespace UnenrolledIndividual {
  export interface Body {
    /**
     * A descriptive identifier for the response.
     */
    finch_code?: string | null;

    /**
     * Short description in English that provides more information about the response.
     */
    message?: string | null;

    /**
     * Identifier indicating whether the benefit was newly enrolled or updated.
     */
    name?: string | null;
  }
}

export interface IndividualEnrolledIDsResponse {
  benefit_id: string;

  individual_ids: Array<string>;
}

export type IndividualEnrollManyParams = Array<IndividualEnrollManyParams.Individual>;

export namespace IndividualEnrollManyParams {
  export interface Individual {
    configuration?: unknown;

    /**
     * Finch id (uuidv4) for the individual to enroll
     */
    individual_id?: string;
  }
}

export interface IndividualRetrieveManyBenefitsParams {
  /**
   * comma-delimited list of stable Finch uuids for each individual. If empty,
   * defaults to all individuals
   */
  individual_ids?: string;
}

export interface IndividualUnenrollManyParams {
  /**
   * Array of individual_ids to unenroll.
   */
  individual_ids?: Array<string>;
}

export namespace Individuals {
  export import EnrolledIndividual = IndividualsAPI.EnrolledIndividual;
  export import IndividualBenefit = IndividualsAPI.IndividualBenefit;
  export import UnenrolledIndividual = IndividualsAPI.UnenrolledIndividual;
  export import IndividualEnrolledIDsResponse = IndividualsAPI.IndividualEnrolledIDsResponse;
  export import EnrolledIndividualsSinglePage = IndividualsAPI.EnrolledIndividualsSinglePage;
  export import IndividualBenefitsSinglePage = IndividualsAPI.IndividualBenefitsSinglePage;
  export import UnenrolledIndividualsSinglePage = IndividualsAPI.UnenrolledIndividualsSinglePage;
  export import IndividualEnrollManyParams = IndividualsAPI.IndividualEnrollManyParams;
  export import IndividualRetrieveManyBenefitsParams = IndividualsAPI.IndividualRetrieveManyBenefitsParams;
  export import IndividualUnenrollManyParams = IndividualsAPI.IndividualUnenrollManyParams;
}
