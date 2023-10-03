// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '@tryfinch/finch-api/resource';
import { CompanyResource } from './company';
import { Directory } from './directory';
import { Individuals } from './individuals';
import { Employments } from './employments';
import { Payments } from './payments';
import { PayStatements } from './pay-statements';
import { Benefits } from './benefits/benefits';
import * as API from './index';

export class HRIS extends APIResource {
  company: CompanyResource = new CompanyResource(this.client);
  directory: Directory = new Directory(this.client);
  individuals: Individuals = new Individuals(this.client);
  employments: Employments = new Employments(this.client);
  payments: Payments = new Payments(this.client);
  payStatements: PayStatements = new PayStatements(this.client);
  benefits: Benefits = new Benefits(this.client);
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

export interface Paging {
  /**
   * The total number of elements for the entire query (not just the given page)
   */
  count?: number;

  /**
   * The current start index of the returned list of elements
   */
  offset?: number;
}

export namespace HRIS {
  export import Income = API.Income;
  export import Location = API.Location;
  export import Money = API.Money;
  export import Paging = API.Paging;

  export import CompanyResource = API.CompanyResource;
  export import Company = API.Company;

  export import Directory = API.Directory;
  export import IndividualInDirectory = API.IndividualInDirectory;
  export import DirectoryListIndividualsParams = API.DirectoryListIndividualsParams;

  export import Individuals = API.Individuals;
  export import Individual = API.Individual;
  export import IndividualResponse = API.IndividualResponse;
  export import IndividualResponsesPage = API.IndividualResponsesPage;
  export import IndividualRetrieveManyParams = API.IndividualRetrieveManyParams;

  export import Employments = API.Employments;
  export import EmploymentData = API.EmploymentData;
  export import EmploymentDataResponse = API.EmploymentDataResponse;
  export import EmploymentDataResponsesPage = API.EmploymentDataResponsesPage;
  export import EmploymentRetrieveManyParams = API.EmploymentRetrieveManyParams;

  export import Payments = API.Payments;
  export import Payment = API.Payment;
  export import PaymentsSinglePage = API.PaymentsSinglePage;
  export import PaymentListParams = API.PaymentListParams;

  export import PayStatements = API.PayStatements;
  export import PayStatement = API.PayStatement;
  export import PayStatementResponse = API.PayStatementResponse;
  export import PayStatementResponseBody = API.PayStatementResponseBody;
  export import PayStatementResponsesPage = API.PayStatementResponsesPage;
  export import PayStatementRetrieveManyParams = API.PayStatementRetrieveManyParams;

  export import Benefits = API.Benefits;
  export import BenefitFrequency = API.BenefitFrequency;
  export import BenefitType = API.BenefitType;
  export import BenfitContribution = API.BenfitContribution;
  export import CompanyBenefit = API.CompanyBenefit;
  export import CreateCompanyBenefitsResponse = API.CreateCompanyBenefitsResponse;
  export import SupportedBenefit = API.SupportedBenefit;
  export import UpdateCompanyBenefitResponse = API.UpdateCompanyBenefitResponse;
  export import CompanyBenefitsSinglePage = API.CompanyBenefitsSinglePage;
  export import SupportedBenefitsSinglePage = API.SupportedBenefitsSinglePage;
  export import BenefitCreateParams = API.BenefitCreateParams;
  export import BenefitUpdateParams = API.BenefitUpdateParams;
}
