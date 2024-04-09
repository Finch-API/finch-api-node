// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@tryfinch/finch-api/core';
import { APIResource } from '@tryfinch/finch-api/resource';
import { isRequestOptions } from '@tryfinch/finch-api/core';
import * as BenefitsAPI from '@tryfinch/finch-api/resources/hris/benefits/benefits';
import * as Shared from '@tryfinch/finch-api/resources/shared';
import * as IndividualsAPI from '@tryfinch/finch-api/resources/hris/benefits/individuals';
import { SinglePage } from '@tryfinch/finch-api/pagination';

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
  ): Core.PagePromise<SupportedBenefitsSinglePage, SupportedBenefit> {
    return this._client.getAPIList('/employer/benefits/meta', SupportedBenefitsSinglePage, options);
  }
}

export class CompanyBenefitsSinglePage extends SinglePage<CompanyBenefit> {}

export class SupportedBenefitsSinglePage extends SinglePage<SupportedBenefit> {}

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
  [k: string]: BenefitFeaturesAndOperations | null;
}

/**
 * @deprecated use `BenefitContribution` instead
 */
export type BenfitContribution = BenefitContribution | null;

export interface CompanyBenefit {
  benefit_id: string;

  company_contribution: BenefitContribution | null;

  description: string | null;

  employee_deduction: BenefitContribution | null;

  frequency: BenefitFrequency | null;

  /**
   * Type of benefit.
   */
  type: BenefitType | null;
}

export interface CreateCompanyBenefitsResponse {
  benefit_id: string;
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

  /**
   * Type of benefit.
   */
  type?: BenefitType | null;
}

export interface UpdateCompanyBenefitResponse {
  benefit_id: string;
}

export interface BenefitCreateParams {
  description?: string;

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

export namespace Benefits {
  export import BenefitContribution = BenefitsAPI.BenefitContribution;
  export import BenefitFeaturesAndOperations = BenefitsAPI.BenefitFeaturesAndOperations;
  export import BenefitFrequency = BenefitsAPI.BenefitFrequency;
  export import BenefitType = BenefitsAPI.BenefitType;
  export import BenefitsSupport = BenefitsAPI.BenefitsSupport;
  /**
   * @deprecated use `BenefitContribution` instead
   */
  export import BenfitContribution = BenefitsAPI.BenfitContribution;
  export import CompanyBenefit = BenefitsAPI.CompanyBenefit;
  export import CreateCompanyBenefitsResponse = BenefitsAPI.CreateCompanyBenefitsResponse;
  export import SupportPerBenefitType = BenefitsAPI.SupportPerBenefitType;
  export import SupportedBenefit = BenefitsAPI.SupportedBenefit;
  export import UpdateCompanyBenefitResponse = BenefitsAPI.UpdateCompanyBenefitResponse;
  export import CompanyBenefitsSinglePage = BenefitsAPI.CompanyBenefitsSinglePage;
  export import SupportedBenefitsSinglePage = BenefitsAPI.SupportedBenefitsSinglePage;
  export import BenefitCreateParams = BenefitsAPI.BenefitCreateParams;
  export import BenefitUpdateParams = BenefitsAPI.BenefitUpdateParams;
  export import Individuals = IndividualsAPI.Individuals;
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
