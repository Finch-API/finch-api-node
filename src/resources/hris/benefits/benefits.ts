// File generated from our OpenAPI spec by Stainless.

import * as Core from '@tryfinch/finch-api/core';
import { APIResource } from '@tryfinch/finch-api/resource';
import { isRequestOptions } from '@tryfinch/finch-api/core';
import * as BenefitsAPI from '@tryfinch/finch-api/resources/hris/benefits/benefits';
import * as IndividualsAPI from '@tryfinch/finch-api/resources/hris/benefits/individuals';
import { SinglePage } from '@tryfinch/finch-api/pagination';

export class Benefits extends APIResource {
  individuals: IndividualsAPI.Individuals = new IndividualsAPI.Individuals(this.client);

  /**
   * **Availability: Automated and Assisted Benefits providers**
   *
   * Creates a new company-wide benefit. Please use the `/meta` endpoint to view
   * available types for each provider.
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
    return this.post('/employer/benefits', { body, ...options });
  }

  /**
   * **Availability: Automated Benefits providers only**
   *
   * Lists benefit information for a given benefit
   */
  retrieve(benefitId: string, options?: Core.RequestOptions): Core.APIPromise<CompanyBenefit> {
    return this.get(`/employer/benefits/${benefitId}`, options);
  }

  /**
   * **Availability: Automated and Assisted Benefits providers**
   *
   * Updates an existing company-wide benefit
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
    return this.post(`/employer/benefits/${benefitId}`, { body, ...options });
  }

  /**
   * **Availability: Automated Benefits providers only**
   *
   * List all company-wide benefits.
   */
  list(options?: Core.RequestOptions): Core.PagePromise<CompanyBenefitsSinglePage, CompanyBenefit> {
    return this.getAPIList('/employer/benefits', CompanyBenefitsSinglePage, options);
  }

  /**
   * **Availability: Automated and Assisted Benefits providers**
   *
   * Lists available types and configurations for the provider associated with the
   * access token.
   */
  listSupportedBenefits(
    options?: Core.RequestOptions,
  ): Core.PagePromise<SupportedBenefitsSinglePage, SupportedBenefit> {
    return this.getAPIList('/employer/benefits/meta', SupportedBenefitsSinglePage, options);
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

export type BenefitFrequency = 'one_time' | 'every_paycheck' | null;

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
  company_contribution?: Array<'fixed' | 'percent'> | null;

  description?: string | null;

  /**
   * Supported deduction types. An empty array indicates deductions are not
   * supported.
   */
  employee_deduction?: Array<'fixed' | 'percent'> | null;

  /**
   * The list of frequencies supported by the provider for this benefit
   */
  frequencies?: Array<BenefitFrequency | null>;

  /**
   * Whether the provider supports HSA contribution limits. Empty if this feature is
   * not supported for the benefit. This array only has values for HSA benefits.
   */
  hsa_contribution_limit?: Array<'individual' | 'family'> | null;

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
  export import BenefitFrequency = BenefitsAPI.BenefitFrequency;
  export import BenefitType = BenefitsAPI.BenefitType;
  /**
   * @deprecated use `BenefitContribution` instead
   */
  export import BenfitContribution = BenefitsAPI.BenfitContribution;
  export import CompanyBenefit = BenefitsAPI.CompanyBenefit;
  export import CreateCompanyBenefitsResponse = BenefitsAPI.CreateCompanyBenefitsResponse;
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
