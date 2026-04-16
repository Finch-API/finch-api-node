// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as IndividualsAPI from './individuals';
import {
  EnrolledIndividualBenefitResponse,
  IndividualBenefit,
  IndividualBenefitsSinglePage,
  IndividualEnrollManyParams,
  IndividualEnrolledIDsParams,
  IndividualEnrolledIDsResponse,
  IndividualRetrieveManyBenefitsParams,
  IndividualUnenrollManyParams,
  Individuals,
  UnenrolledIndividualBenefitResponse,
} from './individuals';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Benefits extends APIResource {
  individuals: IndividualsAPI.Individuals = new IndividualsAPI.Individuals(this._client);

  /**
   * Creates a new company-wide deduction or contribution. Please use the
   * `/providers` endpoint to view available types for each provider.
   *
   * @example
   * ```ts
   * const createCompanyBenefitsResponse =
   *   await client.hris.benefits.create();
   * ```
   */
  create(
    params: BenefitCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CreateCompanyBenefitsResponse> {
    const { entity_ids, ...body } = params ?? {};
    return this._client.post('/employer/benefits', {
      query: { entity_ids },
      body,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Lists deductions and contributions information for a given item
   *
   * @example
   * ```ts
   * const companyBenefit = await client.hris.benefits.retrieve(
   *   'benefit_id',
   * );
   * ```
   */
  retrieve(
    benefitID: string,
    query: BenefitRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompanyBenefit> {
    return this._client.get(path`/employer/benefits/${benefitID}`, {
      query,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Updates an existing company-wide deduction or contribution
   *
   * @example
   * ```ts
   * const updateCompanyBenefitResponse =
   *   await client.hris.benefits.update('benefit_id');
   * ```
   */
  update(
    benefitID: string,
    params: BenefitUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UpdateCompanyBenefitResponse> {
    const { entity_ids, ...body } = params ?? {};
    return this._client.post(path`/employer/benefits/${benefitID}`, {
      query: { entity_ids },
      body,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * List all company-wide deductions and contributions.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const companyBenefit of client.hris.benefits.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: BenefitListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CompanyBenefitsSinglePage, CompanyBenefit> {
    return this._client.getAPIList('/employer/benefits', SinglePage<CompanyBenefit>, {
      query,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Get deductions metadata
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const supportedBenefit of client.hris.benefits.listSupportedBenefits()) {
   *   // ...
   * }
   * ```
   */
  listSupportedBenefits(
    query: BenefitListSupportedBenefitsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SupportedBenefitsSinglePage, SupportedBenefit> {
    return this._client.getAPIList('/employer/benefits/meta', SinglePage<SupportedBenefit>, {
      query,
      ...options,
      __security: { bearerAuth: true },
    });
  }
}

export type CompanyBenefitsSinglePage = SinglePage<CompanyBenefit>;

export type SupportedBenefitsSinglePage = SinglePage<SupportedBenefit>;

export type BenefitContribution =
  | BenefitContribution.UnionMember0
  | BenefitContribution.UnionMember1
  | BenefitContribution.UnionMember2;

export namespace BenefitContribution {
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
}

export interface BenefitFeaturesAndOperations {
  supported_features?: SupportedBenefit;

  supported_operations?: SupportPerBenefitType;
}

/**
 * The frequency of the benefit deduction/contribution.
 */
export type BenefitFrequency = 'every_paycheck' | 'monthly' | 'one_time' | null;

/**
 * Type of benefit.
 */
export type BenefitType =
  | '457'
  | '401k'
  | '401k_roth'
  | '401k_loan'
  | '403b'
  | '403b_roth'
  | '457_roth'
  | 'commuter'
  | 'custom_post_tax'
  | 'custom_pre_tax'
  | 'fsa_dependent_care'
  | 'fsa_medical'
  | 'hsa_post'
  | 'hsa_pre'
  | 's125_dental'
  | 's125_medical'
  | 's125_vision'
  | 'simple'
  | 'simple_ira'
  | null;

/**
 * Each benefit type and their supported features. If the benefit type is not
 * supported, the property will be null
 */
export interface BenefitsSupport {
  commuter?: BenefitFeaturesAndOperations | null;

  custom_post_tax?: BenefitFeaturesAndOperations | null;

  custom_pre_tax?: BenefitFeaturesAndOperations | null;

  fsa_dependent_care?: BenefitFeaturesAndOperations | null;

  fsa_medical?: BenefitFeaturesAndOperations | null;

  hsa_post?: BenefitFeaturesAndOperations | null;

  hsa_pre?: BenefitFeaturesAndOperations | null;

  s125_dental?: BenefitFeaturesAndOperations | null;

  s125_medical?: BenefitFeaturesAndOperations | null;

  s125_vision?: BenefitFeaturesAndOperations | null;

  simple?: BenefitFeaturesAndOperations | null;

  simple_ira?: BenefitFeaturesAndOperations | null;

  [k: string]: BenefitFeaturesAndOperations | null | undefined;
}

export interface CompanyBenefit {
  /**
   * The id of the benefit.
   */
  benefit_id: string;

  description: string | null;

  /**
   * The frequency of the benefit deduction/contribution.
   */
  frequency: BenefitFrequency | null;

  /**
   * Type of benefit.
   */
  type: BenefitType | null;

  /**
   * The company match for this benefit.
   */
  company_contribution?: CompanyBenefit.CompanyContribution | null;
}

export namespace CompanyBenefit {
  /**
   * The company match for this benefit.
   */
  export interface CompanyContribution {
    tiers: Array<CompanyContribution.Tier>;

    type: 'match';
  }

  export namespace CompanyContribution {
    export interface Tier {
      match: number;

      threshold: number;
    }
  }
}

export interface CreateCompanyBenefitsResponse {
  /**
   * The id of the benefit.
   */
  benefit_id: string;

  job_id: string;
}

export interface SupportPerBenefitType {
  company_benefits?: Shared.OperationSupportMatrix;

  individual_benefits?: Shared.OperationSupportMatrix;
}

export interface SupportedBenefit {
  /**
   * Whether the provider supports an annual maximum for this benefit.
   */
  annual_maximum: boolean | null;

  /**
   * Supported contribution types. An empty array indicates contributions are not
   * supported.
   */
  company_contribution: Array<'fixed' | 'percent' | 'tiered' | null> | null;

  description: string | null;

  /**
   * Supported deduction types. An empty array indicates deductions are not
   * supported.
   */
  employee_deduction: Array<'fixed' | 'percent' | null> | null;

  /**
   * The list of frequencies supported by the provider for this benefit
   */
  frequencies: Array<BenefitFrequency | null>;

  /**
   * Whether the provider supports catch up for this benefit. This field will only be
   * true for retirement benefits.
   */
  catch_up?: boolean | null;

  /**
   * Whether the provider supports HSA contribution limits. Empty if this feature is
   * not supported for the benefit. This array only has values for HSA benefits.
   */
  hsa_contribution_limit?: Array<'family' | 'individual' | null> | null;
}

export interface UpdateCompanyBenefitResponse {
  /**
   * The id of the benefit.
   */
  benefit_id: string;

  job_id: string;
}

/**
 * @deprecated use `BenefitContribution` instead
 */
export type BenfitContribution = BenefitContribution | null;

export interface BenefitCreateParams {
  /**
   * Query param: The entity IDs to specify which entities' data to access.
   */
  entity_ids?: Array<string>;

  /**
   * Body param: The company match for this benefit.
   */
  company_contribution?: BenefitCreateParams.CompanyContribution | null;

  /**
   * Body param: Name of the benefit as it appears in the provider and pay
   * statements. Recommend limiting this to <30 characters due to limitations in
   * specific providers (e.g. Justworks).
   */
  description?: string;

  /**
   * Body param: The frequency of the benefit deduction/contribution.
   */
  frequency?: BenefitFrequency | null;

  /**
   * Body param: Type of benefit.
   */
  type?: BenefitType | null;
}

export namespace BenefitCreateParams {
  /**
   * The company match for this benefit.
   */
  export interface CompanyContribution {
    tiers: Array<CompanyContribution.Tier>;

    type: 'match';
  }

  export namespace CompanyContribution {
    export interface Tier {
      match: number;

      threshold: number;
    }
  }
}

export interface BenefitRetrieveParams {
  /**
   * The entity IDs to specify which entities' data to access.
   */
  entity_ids?: Array<string>;
}

export interface BenefitUpdateParams {
  /**
   * Query param: The entity IDs to specify which entities' data to access.
   */
  entity_ids?: Array<string>;

  /**
   * Body param: Updated name or description.
   */
  description?: string;
}

export interface BenefitListParams {
  /**
   * The entity IDs to specify which entities' data to access.
   */
  entity_ids?: Array<string>;
}

export interface BenefitListSupportedBenefitsParams {
  /**
   * The entity IDs to specify which entities' data to access.
   */
  entity_ids?: Array<string>;
}

Benefits.Individuals = Individuals;

export declare namespace Benefits {
  export {
    type BenefitContribution as BenefitContribution,
    type BenefitFeaturesAndOperations as BenefitFeaturesAndOperations,
    type BenefitFrequency as BenefitFrequency,
    type BenefitType as BenefitType,
    type BenefitsSupport as BenefitsSupport,
    type CompanyBenefit as CompanyBenefit,
    type CreateCompanyBenefitsResponse as CreateCompanyBenefitsResponse,
    type SupportPerBenefitType as SupportPerBenefitType,
    type SupportedBenefit as SupportedBenefit,
    type UpdateCompanyBenefitResponse as UpdateCompanyBenefitResponse,
    type BenfitContribution as BenfitContribution,
    type CompanyBenefitsSinglePage as CompanyBenefitsSinglePage,
    type SupportedBenefitsSinglePage as SupportedBenefitsSinglePage,
    type BenefitCreateParams as BenefitCreateParams,
    type BenefitRetrieveParams as BenefitRetrieveParams,
    type BenefitUpdateParams as BenefitUpdateParams,
    type BenefitListParams as BenefitListParams,
    type BenefitListSupportedBenefitsParams as BenefitListSupportedBenefitsParams,
  };

  export {
    Individuals as Individuals,
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
