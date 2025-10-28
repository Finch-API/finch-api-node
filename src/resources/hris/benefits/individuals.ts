// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

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
    benefitID: string,
    params: IndividualEnrollManyParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<EnrolledIndividualBenefitResponse> {
    const { entity_ids, individuals } = params ?? {};
    return this._client.post(path`/employer/benefits/${benefitID}/individuals`, {
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
   *   await client.hris.benefits.individuals.enrolledIDs(
   *     'benefit_id',
   *   );
   * ```
   */
  enrolledIDs(
    benefitID: string,
    query: IndividualEnrolledIDsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IndividualEnrolledIDsResponse> {
    return this._client.get(path`/employer/benefits/${benefitID}/enrolled`, { query, ...options });
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
    benefitID: string,
    query: IndividualRetrieveManyBenefitsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<IndividualBenefitsSinglePage, IndividualBenefit> {
    return this._client.getAPIList(
      path`/employer/benefits/${benefitID}/individuals`,
      SinglePage<IndividualBenefit>,
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
    benefitID: string,
    params: IndividualUnenrollManyParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnenrolledIndividualBenefitResponse> {
    const { entity_ids, ...body } = params ?? {};
    return this._client.delete(path`/employer/benefits/${benefitID}/individuals`, {
      query: { entity_ids },
      body,
      ...options,
    });
  }
}

export type IndividualBenefitsSinglePage = SinglePage<IndividualBenefit>;

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

export declare namespace Individuals {
  export {
    type EnrolledIndividualBenefitResponse as EnrolledIndividualBenefitResponse,
    type IndividualBenefit as IndividualBenefit,
    type UnenrolledIndividualBenefitResponse as UnenrolledIndividualBenefitResponse,
    type IndividualEnrolledIDsResponse as IndividualEnrolledIDsResponse,
    type IndividualBenefitsSinglePage as IndividualBenefitsSinglePage,
    type IndividualEnrollManyParams as IndividualEnrollManyParams,
    type IndividualEnrolledIDsParams as IndividualEnrolledIDsParams,
    type IndividualRetrieveManyBenefitsParams as IndividualRetrieveManyBenefitsParams,
    type IndividualUnenrollManyParams as IndividualUnenrollManyParams,
  };
}
