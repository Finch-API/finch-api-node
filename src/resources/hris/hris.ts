// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as HRISAPI from './hris';
import * as CompanyAPI from './company';
import * as DirectoryAPI from './directory';
import * as EmploymentsAPI from './employments';
import * as IndividualsAPI from './individuals';
import * as PayStatementsAPI from './pay-statements';
import * as PaymentsAPI from './payments';
import * as BenefitsAPI from './benefits/benefits';

export class HRIS extends APIResource {
  company: CompanyAPI.CompanyResource = new CompanyAPI.CompanyResource(this._client);
  directory: DirectoryAPI.Directory = new DirectoryAPI.Directory(this._client);
  individuals: IndividualsAPI.Individuals = new IndividualsAPI.Individuals(this._client);
  employments: EmploymentsAPI.Employments = new EmploymentsAPI.Employments(this._client);
  payments: PaymentsAPI.Payments = new PaymentsAPI.Payments(this._client);
  payStatements: PayStatementsAPI.PayStatements = new PayStatementsAPI.PayStatements(this._client);
  benefits: BenefitsAPI.Benefits = new BenefitsAPI.Benefits(this._client);
}

/**
 * The employee's income as reported by the provider. This may not always be
 * annualized income, but may be in units of bi-weekly, semi-monthly, daily, etc,
 * depending on what information the provider returns.
 */
export interface Income {
  /**
   * The income amount in cents.
   */
  amount?: number | null;

  /**
   * The currency code.
   */
  currency?: string | null;

  /**
   * The date the income amount went into effect.
   */
  effective_date?: string | null;

  /**
   * The income unit of payment. Options: `yearly`, `quarterly`, `monthly`,
   * `semi_monthly`, `bi_weekly`, `weekly`, `daily`, `hourly`, and `fixed`.
   */
  unit?:
    | 'yearly'
    | 'quarterly'
    | 'monthly'
    | 'semi_monthly'
    | 'bi_weekly'
    | 'weekly'
    | 'daily'
    | 'hourly'
    | 'fixed'
    | null;
}

export interface Location {
  /**
   * City, district, suburb, town, or village.
   */
  city?: string | null;

  /**
   * The 2-letter ISO 3166 country code.
   */
  country?: string | null;

  /**
   * Street address or PO box.
   */
  line1?: string | null;

  /**
   * Apartment, suite, unit, or building.
   */
  line2?: string | null;

  name?: string | null;

  /**
   * The postal code or zip code.
   */
  postal_code?: string | null;

  source_id?: string | null;

  /**
   * The state code.
   */
  state?: string | null;
}

export interface Money {
  /**
   * Amount for money object (in cents)
   */
  amount?: number | null;

  currency?: string;
}

export namespace HRIS {
  export import Income = HRISAPI.Income;
  export import Location = HRISAPI.Location;
  export import Money = HRISAPI.Money;
  export import CompanyResource = CompanyAPI.CompanyResource;
  export import Company = CompanyAPI.Company;
  export import Directory = DirectoryAPI.Directory;
  export import IndividualInDirectory = DirectoryAPI.IndividualInDirectory;
  export import DirectoryListParams = DirectoryAPI.DirectoryListParams;
  export import DirectoryListIndividualsParams = DirectoryAPI.DirectoryListIndividualsParams;
  export import Individuals = IndividualsAPI.Individuals;
  export import Individual = IndividualsAPI.Individual;
  export import IndividualResponse = IndividualsAPI.IndividualResponse;
  export import IndividualResponsesPage = IndividualsAPI.IndividualResponsesPage;
  export import IndividualRetrieveManyParams = IndividualsAPI.IndividualRetrieveManyParams;
  export import Employments = EmploymentsAPI.Employments;
  export import EmploymentData = EmploymentsAPI.EmploymentData;
  export import EmploymentDataResponse = EmploymentsAPI.EmploymentDataResponse;
  export import EmploymentDataResponsesPage = EmploymentsAPI.EmploymentDataResponsesPage;
  export import EmploymentRetrieveManyParams = EmploymentsAPI.EmploymentRetrieveManyParams;
  export import Payments = PaymentsAPI.Payments;
  export import Payment = PaymentsAPI.Payment;
  export import PaymentsSinglePage = PaymentsAPI.PaymentsSinglePage;
  export import PaymentListParams = PaymentsAPI.PaymentListParams;
  export import PayStatements = PayStatementsAPI.PayStatements;
  export import PayStatement = PayStatementsAPI.PayStatement;
  export import PayStatementResponse = PayStatementsAPI.PayStatementResponse;
  export import PayStatementResponseBody = PayStatementsAPI.PayStatementResponseBody;
  export import PayStatementResponsesPage = PayStatementsAPI.PayStatementResponsesPage;
  export import PayStatementRetrieveManyParams = PayStatementsAPI.PayStatementRetrieveManyParams;
  export import Benefits = BenefitsAPI.Benefits;
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
}
