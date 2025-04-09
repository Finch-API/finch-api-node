// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as BenefitsAPI from './benefits';
import * as Shared from '../../shared';
import * as IndividualsAPI from './individuals';
import {
  EnrolledIndividualBenefitResponse,
  IndividualBenefit,
  IndividualBenefitsSinglePage,
  IndividualEnrollManyParams,
  IndividualEnrolledIDsResponse,
  IndividualRetrieveManyBenefitsParams,
  IndividualUnenrollManyParams,
  IndividualUnenrollManyResponse,
  Individuals,
} from './individuals';
import { SinglePage } from '../../../pagination';

export class Benefits extends APIResource {
  individuals: IndividualsAPI.Individuals = new IndividualsAPI.Individuals(this._client);

  /**
   * Creates a new company-wide deduction or contribution. Please use the
   * `/providers` endpoint to view available types for each provider.
   */
  create(
    body?: BenefitCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateCompanyBenefitsResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<CreateCompanyBenefitsResponse>;
  create(
    body: BenefitCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateCompanyBenefitsResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/employer/benefits', { body, ...options });
  }

  /**
   * Lists deductions and contributions information for a given item
   */
  retrieve(benefitId: string, options?: Core.RequestOptions): Core.APIPromise<CompanyBenefit> {
    return this._client.get(`/employer/benefits/${benefitId}`, options);
  }

  /**
   * Updates an existing company-wide deduction or contribution
   */
  update(
    benefitId: string,
    body?: BenefitUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UpdateCompanyBenefitResponse>;
  update(benefitId: string, options?: Core.RequestOptions): Core.APIPromise<UpdateCompanyBenefitResponse>;
  update(
    benefitId: string,
    body: BenefitUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UpdateCompanyBenefitResponse> {
    if (isRequestOptions(body)) {
      return this.update(benefitId, {}, body);
    }
    return this._client.post(`/employer/benefits/${benefitId}`, { body, ...options });
  }

  /**
   * List all company-wide deductions and contributions.
   */
  list(options?: Core.RequestOptions): Core.PagePromise<CompanyBenefitsSinglePage, CompanyBenefit> {
    return this._client.getAPIList('/employer/benefits', CompanyBenefitsSinglePage, options);
  }

  /**
   * Get deductions metadata
   */
  listSupportedBenefits(
    options?: Core.RequestOptions,
  ): Core.PagePromise<BenefitListSupportedBenefitsResponsesSinglePage, BenefitListSupportedBenefitsResponse> {
    return this._client.getAPIList(
      '/employer/benefits/meta',
      BenefitListSupportedBenefitsResponsesSinglePage,
      options,
    );
  }
}

export class CompanyBenefitsSinglePage extends SinglePage<CompanyBenefit> {}

export class BenefitListSupportedBenefitsResponsesSinglePage extends SinglePage<BenefitListSupportedBenefitsResponse> {}

export interface BenefitContribution {
  /**
   * Contribution amount in cents (if `fixed`) or basis points (if `percent`).
   */
  amount?: number | null;

  /**
   * Contribution type.
   */
  type?: 'fixed' | 'percent' | null;
}

export interface BenefitFeaturesAndOperations {
  supported_features?: BenefitFeaturesAndOperations.SupportedFeatures;

  supported_operations?: SupportPerBenefitType;
}

export namespace BenefitFeaturesAndOperations {
  export interface SupportedFeatures {
    /**
     * Whether the provider supports an annual maximum for this benefit.
     */
    annual_maximum?: boolean | null;

    /**
     * Whether the provider supports catch up for this benefit. This field will only be
     * true for retirement benefits.
     */
    catch_up?: boolean | null;

    /**
     * Supported contribution types. An empty array indicates contributions are not
     * supported.
     */
    company_contribution?: Array<'fixed' | 'percent' | null> | null;

    description?: string | null;

    /**
     * Supported deduction types. An empty array indicates deductions are not
     * supported.
     */
    employee_deduction?: Array<'fixed' | 'percent' | null> | null;

    /**
     * The list of frequencies supported by the provider for this benefit
     */
    frequencies?: Array<BenefitsAPI.BenefitFrequency | null>;

    /**
     * Whether the provider supports HSA contribution limits. Empty if this feature is
     * not supported for the benefit. This array only has values for HSA benefits.
     */
    hsa_contribution_limit?: Array<'individual' | 'family' | null> | null;
  }
}

/**
 * The frequency of the benefit deduction/contribution.
 */
export type BenefitFrequency = 'one_time' | 'every_paycheck' | 'monthly' | null;

/**
 * Type of benefit.
 */
export type BenefitType =
  | '401k'
  | '401k_roth'
  | '401k_loan'
  | '403b'
  | '403b_roth'
  | '457'
  | '457_roth'
  | 's125_medical'
  | 's125_dental'
  | 's125_vision'
  | 'hsa_pre'
  | 'hsa_post'
  | 'fsa_medical'
  | 'fsa_dependent_care'
  | 'simple_ira'
  | 'simple'
  | 'commuter'
  | 'custom_post_tax'
  | 'custom_pre_tax'
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
  annual_maximum?: boolean | null;

  /**
   * Whether the provider supports catch up for this benefit. This field will only be
   * true for retirement benefits.
   */
  catch_up?: boolean | null;

  /**
   * Supported contribution types. An empty array indicates contributions are not
   * supported.
   */
  company_contribution?: Array<'fixed' | 'percent' | null> | null;

  description?: string | null;

  /**
   * Supported deduction types. An empty array indicates deductions are not
   * supported.
   */
  employee_deduction?: Array<'fixed' | 'percent' | null> | null;

  /**
   * The list of frequencies supported by the provider for this benefit
   */
  frequencies?: Array<BenefitFrequency | null>;

  /**
   * Whether the provider supports HSA contribution limits. Empty if this feature is
   * not supported for the benefit. This array only has values for HSA benefits.
   */
  hsa_contribution_limit?: Array<'individual' | 'family' | null> | null;
}

export interface UpdateCompanyBenefitResponse {
  /**
   * The id of the benefit.
   */
  benefit_id: string;

  job_id: string;
}

export interface BenefitListSupportedBenefitsResponse {
  /**
   * Whether the provider supports an annual maximum for this benefit.
   */
  annual_maximum?: boolean | null;

  /**
   * Whether the provider supports catch up for this benefit. This field will only be
   * true for retirement benefits.
   */
  catch_up?: boolean | null;

  /**
   * Supported contribution types. An empty array indicates contributions are not
   * supported.
   */
  company_contribution?: Array<'fixed' | 'percent' | null> | null;

  description?: string | null;

  /**
   * Supported deduction types. An empty array indicates deductions are not
   * supported.
   */
  employee_deduction?: Array<'fixed' | 'percent' | null> | null;

  /**
   * The list of frequencies supported by the provider for this benefit
   */
  frequencies?: Array<BenefitFrequency | null>;

  /**
   * Whether the provider supports HSA contribution limits. Empty if this feature is
   * not supported for the benefit. This array only has values for HSA benefits.
   */
  hsa_contribution_limit?: Array<'individual' | 'family' | null> | null;
}

/**
 * @deprecated use `BenefitContribution` instead
 */
export type BenfitContribution = BenefitContribution | null;

export interface BenefitCreateParams {
  /**
   * Name of the benefit as it appears in the provider and pay statements. Recommend
   * limiting this to <30 characters due to limitations in specific providers (e.g.
   * Justworks).
   */
  description?: string;

  /**
   * The frequency of the benefit deduction/contribution.
   */
  frequency?: BenefitFrequency | null;

  /**
   * Type of benefit.
   */
  type?: BenefitType | null;
}

export interface BenefitUpdateParams {
  /**
   * Updated name or description.
   */
  description?: string;
}

Benefits.CompanyBenefitsSinglePage = CompanyBenefitsSinglePage;
Benefits.BenefitListSupportedBenefitsResponsesSinglePage = BenefitListSupportedBenefitsResponsesSinglePage;
Benefits.Individuals = Individuals;
Benefits.IndividualBenefitsSinglePage = IndividualBenefitsSinglePage;

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
    type BenefitListSupportedBenefitsResponse as BenefitListSupportedBenefitsResponse,
    type BenfitContribution as BenfitContribution,
    CompanyBenefitsSinglePage as CompanyBenefitsSinglePage,
    BenefitListSupportedBenefitsResponsesSinglePage as BenefitListSupportedBenefitsResponsesSinglePage,
    type BenefitCreateParams as BenefitCreateParams,
    type BenefitUpdateParams as BenefitUpdateParams,
  };

  export {
    Individuals as Individuals,
    type EnrolledIndividualBenefitResponse as EnrolledIndividualBenefitResponse,
    type IndividualBenefit as IndividualBenefit,
    type IndividualEnrolledIDsResponse as IndividualEnrolledIDsResponse,
    type IndividualUnenrollManyResponse as IndividualUnenrollManyResponse,
    IndividualBenefitsSinglePage as IndividualBenefitsSinglePage,
    type IndividualEnrollManyParams as IndividualEnrollManyParams,
    type IndividualRetrieveManyBenefitsParams as IndividualRetrieveManyBenefitsParams,
    type IndividualUnenrollManyParams as IndividualUnenrollManyParams,
  };
}
