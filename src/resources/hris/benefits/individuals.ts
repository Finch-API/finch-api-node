// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class Individuals extends APIResource {
  /**
   * Enroll an individual into a deduction or contribution. This is an overwrite
   * operation. If the employee is already enrolled, the enrollment amounts will be
   * adjusted. Making the same request multiple times will not create new
   * enrollments, but will continue to set the state of the existing enrollment.
   *
   * @example
   * ```ts
   * const enrolledIndividualBenefitResponse =
   *   await client.hris.benefits.individuals.enrollMany(
   *     'benefit_id',
   *   );
   * ```
   */
  enrollMany(
    benefitId: string,
    params?: IndividualEnrollManyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EnrolledIndividualBenefitResponse>;
  enrollMany(
    benefitId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EnrolledIndividualBenefitResponse>;
  enrollMany(
    benefitId: string,
    params?: IndividualEnrollManyParams | Core.RequestOptions,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EnrolledIndividualBenefitResponse> {
    if (isRequestOptions(params)) {
      return this.enrollMany(benefitId, undefined, params);
    }
    const { entity_ids, individuals } = params ?? {};
    return this._client.post(`/employer/benefits/${benefitId}/individuals`, {
      query: { entity_ids },
      body: individuals,
      ...options,
    });
  }

  /**
   * Lists individuals currently enrolled in a given deduction.
   *
   * @example
   * ```ts
   * const response =
   *   await client.hris.benefits.individuals.enrolledIds(
   *     'benefit_id',
   *   );
   * ```
   */
  enrolledIds(
    benefitId: string,
    query?: IndividualEnrolledIDsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndividualEnrolledIDsResponse>;
  enrolledIds(
    benefitId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndividualEnrolledIDsResponse>;
  enrolledIds(
    benefitId: string,
    query: IndividualEnrolledIDsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndividualEnrolledIDsResponse> {
    if (isRequestOptions(query)) {
      return this.enrolledIds(benefitId, {}, query);
    }
    return this._client.get(`/employer/benefits/${benefitId}/enrolled`, { query, ...options });
  }

  /**
   * Get enrollment information for the given individuals.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const individualBenefit of client.hris.benefits.individuals.retrieveManyBenefits(
   *   'benefit_id',
   * )) {
   *   // ...
   * }
   * ```
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
   *
   * @example
   * ```ts
   * const unenrolledIndividualBenefitResponse =
   *   await client.hris.benefits.individuals.unenrollMany(
   *     'benefit_id',
   *   );
   * ```
   */
  unenrollMany(
    benefitId: string,
    params?: IndividualUnenrollManyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UnenrolledIndividualBenefitResponse>;
  unenrollMany(
    benefitId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UnenrolledIndividualBenefitResponse>;
  unenrollMany(
    benefitId: string,
    params: IndividualUnenrollManyParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UnenrolledIndividualBenefitResponse> {
    if (isRequestOptions(params)) {
      return this.unenrollMany(benefitId, {}, params);
    }
    const { entity_ids, ...body } = params;
    return this._client.delete(`/employer/benefits/${benefitId}/individuals`, {
      query: { entity_ids },
      body,
      ...options,
    });
  }
}

export class IndividualBenefitsSinglePage extends SinglePage<IndividualBenefit> {}

export interface EnrolledIndividualBenefitResponse {
  job_id: string;
}

export interface IndividualBenefit {
  body: IndividualBenefit.UnionMember0 | IndividualBenefit.BatchError;

  code: number;

  individual_id: string;
}

export namespace IndividualBenefit {
  export interface UnionMember0 {
    /**
     * If the benefit supports annual maximum, the amount in cents for this individual.
     */
    annual_maximum: number | null;

    /**
     * If the benefit supports catch up (401k, 403b, etc.), whether catch up is enabled
     * for this individual.
     */
    catch_up: boolean | null;

    company_contribution:
      | UnionMember0.UnionMember0
      | UnionMember0.UnionMember1
      | UnionMember0.UnionMember2
      | null;

    employee_deduction: UnionMember0.UnionMember0 | UnionMember0.UnionMember1 | null;

    /**
     * Type for HSA contribution limit if the benefit is a HSA.
     */
    hsa_contribution_limit?: 'individual' | 'family' | null;
  }

  export namespace UnionMember0 {
    export interface UnionMember0 {
      /**
       * Contribution amount in cents.
       */
      amount: number;

      /**
       * Fixed contribution type.
       */
      type: 'fixed';
    }

    export interface UnionMember1 {
      /**
       * Contribution amount in basis points (1/100th of a percent).
       */
      amount: number;

      /**
       * Percentage contribution type.
       */
      type: 'percent';
    }

    export interface UnionMember2 {
      /**
       * Array of tier objects defining employer match tiers based on employee
       * contribution thresholds.
       */
      tiers: Array<UnionMember2.Tier>;

      /**
       * Tiered contribution type (only valid for company_contribution).
       */
      type: 'tiered';
    }

    export namespace UnionMember2 {
      export interface Tier {
        match: number;

        threshold: number;
      }
    }

    export interface UnionMember0 {
      /**
       * Contribution amount in cents.
       */
      amount: number;

      /**
       * Fixed contribution type.
       */
      type: 'fixed';
    }

    export interface UnionMember1 {
      /**
       * Contribution amount in basis points (1/100th of a percent).
       */
      amount: number;

      /**
       * Percentage contribution type.
       */
      type: 'percent';
    }
  }

  export interface BatchError {
    code: number;

    message: string;

    name: string;

    finch_code?: string;
  }
}

export interface UnenrolledIndividualBenefitResponse {
  job_id: string;
}

export interface IndividualEnrolledIDsResponse {
  /**
   * The id of the benefit.
   */
  benefit_id: string;

  individual_ids: Array<string>;
}

export interface IndividualEnrollManyParams {
  /**
   * Query param: The entity IDs to specify which entities' data to access.
   */
  entity_ids?: Array<string>;

  /**
   * Body param: Array of the individual_id to enroll and a configuration object.
   */
  individuals?: Array<IndividualEnrollManyParams.Individual>;
}

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

      /**
       * The date the enrollment will take effect
       */
      effective_date?: string;

      employee_deduction?: Configuration.EmployeeDeduction;
    }

    export namespace Configuration {
      export interface CompanyContribution {
        /**
         * Amount in cents for fixed type or basis points (1/100th of a percent) for
         * percent type
         */
        amount?: number;

        /**
         * Array of tier objects for tiered contribution matching (required when type is
         * tiered)
         */
        tiers?: Array<CompanyContribution.Tier>;

        type?: 'fixed' | 'percent' | 'tiered';
      }

      export namespace CompanyContribution {
        export interface Tier {
          /**
           * The employer match percentage in basis points (0-10000 = 0-100%)
           */
          match: number;

          /**
           * The employee contribution threshold in basis points (0-10000 = 0-100%)
           */
          threshold: number;
        }
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

export interface IndividualEnrolledIDsParams {
  /**
   * The entity IDs to specify which entities' data to access.
   */
  entity_ids?: Array<string>;
}

export interface IndividualRetrieveManyBenefitsParams {
  /**
   * The entity IDs to specify which entities' data to access.
   */
  entity_ids?: Array<string>;

  /**
   * comma-delimited list of stable Finch uuids for each individual. If empty,
   * defaults to all individuals
   */
  individual_ids?: string;
}

export interface IndividualUnenrollManyParams {
  /**
   * Query param: The entity IDs to specify which entities' data to access.
   */
  entity_ids?: Array<string>;

  /**
   * Body param: Array of individual_ids to unenroll.
   */
  individual_ids?: Array<string>;
}

Individuals.IndividualBenefitsSinglePage = IndividualBenefitsSinglePage;

export declare namespace Individuals {
  export {
    type EnrolledIndividualBenefitResponse as EnrolledIndividualBenefitResponse,
    type IndividualBenefit as IndividualBenefit,
    type UnenrolledIndividualBenefitResponse as UnenrolledIndividualBenefitResponse,
    type IndividualEnrolledIDsResponse as IndividualEnrolledIDsResponse,
    IndividualBenefitsSinglePage as IndividualBenefitsSinglePage,
    type IndividualEnrollManyParams as IndividualEnrollManyParams,
    type IndividualEnrolledIDsParams as IndividualEnrolledIDsParams,
    type IndividualRetrieveManyBenefitsParams as IndividualRetrieveManyBenefitsParams,
    type IndividualUnenrollManyParams as IndividualUnenrollManyParams,
  };
}
