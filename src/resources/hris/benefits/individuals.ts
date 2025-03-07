// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as BenefitsAPI from './benefits';
import { SinglePage } from '../../../pagination';

export class Individuals extends APIResource {
  /**
   * Enroll an individual into a deduction or contribution. This is an overwrite
   * operation. If the employee is already enrolled, the enrollment amounts will be
   * adjusted. Making the same request multiple times will not create new
   * enrollments, but will continue to set the state of the existing enrollment.
   */
  enrollMany(
    benefitId: string,
    body?: IndividualEnrollManyParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<EnrolledIndividualsSinglePage, EnrolledIndividual>;
  enrollMany(
    benefitId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<EnrolledIndividualsSinglePage, EnrolledIndividual>;
  enrollMany(
    benefitId: string,
    body?: IndividualEnrollManyParams | Core.RequestOptions,
    options?: Core.RequestOptions,
  ): Core.PagePromise<EnrolledIndividualsSinglePage, EnrolledIndividual> {
    if (isRequestOptions(body)) {
      return this.enrollMany(benefitId, undefined, body);
    }
    return this._client.getAPIList(
      `/employer/benefits/${benefitId}/individuals`,
      EnrolledIndividualsSinglePage,
      { body, method: 'post', ...options },
    );
  }

  /**
   * Lists individuals currently enrolled in a given deduction.
   */
  enrolledIds(
    benefitId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndividualEnrolledIDsResponse> {
    return this._client.get(`/employer/benefits/${benefitId}/enrolled`, options);
  }

  /**
   * Get enrollment information for the given individuals.
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
   * Unenroll individuals from a deduction or contribution
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
    configuration?: Individual.Configuration;

    /**
     * Finch id (uuidv4) for the individual to enroll
     */
    individual_id?: string;
  }

  export namespace Individual {
    export interface Configuration {
      /**
       * For HSA benefits only - whether the contribution limit is for an individual or
       * family
       */
      annual_contribution_limit?: 'individual' | 'family';

      /**
       * Maximum annual amount in cents
       */
      annual_maximum?: number | null;

      /**
       * For retirement benefits only - whether catch up contributions are enabled
       */
      catch_up?: boolean;

      company_contribution?: Configuration.CompanyContribution;

      employee_deduction?: Configuration.EmployeeDeduction;
    }

    export namespace Configuration {
      export interface CompanyContribution {
        /**
         * Amount in cents for fixed type or basis points (1/100th of a percent) for
         * percent type
         */
        amount?: number;

        type?: 'fixed' | 'percent';
      }

      export interface EmployeeDeduction {
        /**
         * Amount in cents for fixed type or basis points (1/100th of a percent) for
         * percent type
         */
        amount?: number;

        type?: 'fixed' | 'percent';
      }
    }
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

Individuals.EnrolledIndividualsSinglePage = EnrolledIndividualsSinglePage;
Individuals.IndividualBenefitsSinglePage = IndividualBenefitsSinglePage;
Individuals.UnenrolledIndividualsSinglePage = UnenrolledIndividualsSinglePage;

export declare namespace Individuals {
  export {
    type EnrolledIndividual as EnrolledIndividual,
    type IndividualBenefit as IndividualBenefit,
    type UnenrolledIndividual as UnenrolledIndividual,
    type IndividualEnrolledIDsResponse as IndividualEnrolledIDsResponse,
    EnrolledIndividualsSinglePage as EnrolledIndividualsSinglePage,
    IndividualBenefitsSinglePage as IndividualBenefitsSinglePage,
    UnenrolledIndividualsSinglePage as UnenrolledIndividualsSinglePage,
    type IndividualEnrollManyParams as IndividualEnrollManyParams,
    type IndividualRetrieveManyBenefitsParams as IndividualRetrieveManyBenefitsParams,
    type IndividualUnenrollManyParams as IndividualUnenrollManyParams,
  };
}
