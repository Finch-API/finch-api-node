// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as Benefits from '~/resources/hris/benefits';
import { SinglePage } from '~/pagination';

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
  ): Core.PagePromise<EnrolledIndividualsSinglePage> {
    return this.getAPIList(`/employer/benefits/${benefitId}/individuals`, EnrolledIndividualsSinglePage, {
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * **Availability: Automated Benefits providers only**
   *
   * Lists individuals currently enrolled in a given benefit.
   */
  enrolledIds(
    benefitId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<IndividualEnrolledIDsResponse>> {
    return this.get(`/employer/benefits/${benefitId}/enrolled`, options);
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
  ): Core.PagePromise<IndividualBenefitsSinglePage>;
  retrieveManyBenefits(
    benefitId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<IndividualBenefitsSinglePage>;
  retrieveManyBenefits(
    benefitId: string,
    query: IndividualRetrieveManyBenefitsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<IndividualBenefitsSinglePage> {
    if (isRequestOptions(query)) {
      return this.retrieveManyBenefits(benefitId, {}, query);
    }
    return this.getAPIList(`/employer/benefits/${benefitId}/individuals`, IndividualBenefitsSinglePage, {
      query,
      ...options,
    });
  }

  /**
   * **Availability: Automated and Assisted Benefits providers**
   *
   * Unenroll individuals from a benefit
   */
  unenroll(
    benefitId: string,
    body?: IndividualUnenrollParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<UnenrolledIndividualsSinglePage>;
  unenroll(
    benefitId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<UnenrolledIndividualsSinglePage>;
  unenroll(
    benefitId: string,
    body: IndividualUnenrollParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<UnenrolledIndividualsSinglePage> {
    if (isRequestOptions(body)) {
      return this.unenroll(benefitId, {}, body);
    }
    return this.getAPIList(`/employer/benefits/${benefitId}/individuals`, UnenrolledIndividualsSinglePage, {
      body,
      method: 'delete',
      ...options,
    });
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

    company_contribution?: Benefits.BenfitContribution | null;

    employee_deduction?: Benefits.BenfitContribution | null;

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

export interface IndividualUnenrollParams {
  /**
   * Array of individual_ids to unenroll.
   */
  individual_ids?: Array<string>;
}
