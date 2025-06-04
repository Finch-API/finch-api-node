// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DirectoryAPI from './directory';
import {
  Directory,
  DirectoryListIndividualsParams,
  DirectoryListParams,
  IndividualInDirectory,
} from './directory';
import * as DocumentsAPI from './documents';
import {
  DocumentListParams,
  DocumentListResponse,
  DocumentResponse,
  DocumentRetreiveResponse,
  Documents,
  W42005,
  W42020,
} from './documents';
import * as EmploymentsAPI from './employments';
import {
  EmploymentData,
  EmploymentDataResponse,
  EmploymentDataResponsesPage,
  EmploymentRetrieveManyParams,
  Employments,
} from './employments';
import * as IndividualsAPI from './individuals';
import {
  Individual,
  IndividualResponse,
  IndividualResponsesPage,
  IndividualRetrieveManyParams,
  Individuals,
} from './individuals';
import * as PayStatementsAPI from './pay-statements';
import {
  PayStatement,
  PayStatementDataSyncInProgress,
  PayStatementResponse,
  PayStatementResponseBody,
  PayStatementResponsesPage,
  PayStatementRetrieveManyParams,
  PayStatements,
} from './pay-statements';
import * as PaymentsAPI from './payments';
import { Payment, PaymentListParams, Payments, PaymentsSinglePage } from './payments';
import * as BenefitsAPI from './benefits/benefits';
import {
  BenefitContribution,
  BenefitCreateParams,
  BenefitFeaturesAndOperations,
  BenefitFrequency,
  BenefitType,
  BenefitUpdateParams,
  Benefits,
  BenefitsSupport,
  BenfitContribution,
  CompanyBenefit,
  CompanyBenefitsSinglePage,
  CreateCompanyBenefitsResponse,
  SupportPerBenefitType,
  SupportedBenefit,
  SupportedBenefitsSinglePage,
  UpdateCompanyBenefitResponse,
} from './benefits/benefits';
import * as CompanyAPI from './company/company';
import { Company, CompanyResource } from './company/company';

export class HRIS extends APIResource {
  company: CompanyAPI.CompanyResource = new CompanyAPI.CompanyResource(this._client);
  directory: DirectoryAPI.Directory = new DirectoryAPI.Directory(this._client);
  individuals: IndividualsAPI.Individuals = new IndividualsAPI.Individuals(this._client);
  employments: EmploymentsAPI.Employments = new EmploymentsAPI.Employments(this._client);
  payments: PaymentsAPI.Payments = new PaymentsAPI.Payments(this._client);
  payStatements: PayStatementsAPI.PayStatements = new PayStatementsAPI.PayStatements(this._client);
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);
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
  amount: number | null;

  /**
   * The currency code.
   */
  currency: string | null;

  /**
   * The date the income amount went into effect.
   */
  effective_date: string | null;

  /**
   * The income unit of payment. Options: `yearly`, `quarterly`, `monthly`,
   * `semi_monthly`, `bi_weekly`, `weekly`, `daily`, `hourly`, and `fixed`.
   */
  unit:
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
  city: string | null;

  /**
   * The 2-letter ISO 3166 country code.
   */
  country: string | null;

  /**
   * Street address or PO box.
   */
  line1: string | null;

  /**
   * Apartment, suite, unit, or building.
   */
  line2: string | null;

  /**
   * The postal code or zip code.
   */
  postal_code: string | null;

  /**
   * The state code.
   */
  state: string | null;

  name?: string | null;

  source_id?: string | null;
}

export interface Money {
  /**
   * Amount for money object (in cents)
   */
  amount: number | null;

  currency: string;
}

HRIS.CompanyResource = CompanyResource;
HRIS.Directory = Directory;
HRIS.Individuals = Individuals;
HRIS.IndividualResponsesPage = IndividualResponsesPage;
HRIS.Employments = Employments;
HRIS.EmploymentDataResponsesPage = EmploymentDataResponsesPage;
HRIS.Payments = Payments;
HRIS.PaymentsSinglePage = PaymentsSinglePage;
HRIS.PayStatements = PayStatements;
HRIS.PayStatementResponsesPage = PayStatementResponsesPage;
HRIS.Documents = Documents;
HRIS.Benefits = Benefits;
HRIS.CompanyBenefitsSinglePage = CompanyBenefitsSinglePage;
HRIS.SupportedBenefitsSinglePage = SupportedBenefitsSinglePage;

export declare namespace HRIS {
  export { type Income as Income, type Location as Location, type Money as Money };

  export { CompanyResource as CompanyResource, type Company as Company };

  export {
    Directory as Directory,
    type IndividualInDirectory as IndividualInDirectory,
    type DirectoryListParams as DirectoryListParams,
    type DirectoryListIndividualsParams as DirectoryListIndividualsParams,
  };

  export {
    Individuals as Individuals,
    type Individual as Individual,
    type IndividualResponse as IndividualResponse,
    IndividualResponsesPage as IndividualResponsesPage,
    type IndividualRetrieveManyParams as IndividualRetrieveManyParams,
  };

  export {
    Employments as Employments,
    type EmploymentData as EmploymentData,
    type EmploymentDataResponse as EmploymentDataResponse,
    EmploymentDataResponsesPage as EmploymentDataResponsesPage,
    type EmploymentRetrieveManyParams as EmploymentRetrieveManyParams,
  };

  export {
    Payments as Payments,
    type Payment as Payment,
    PaymentsSinglePage as PaymentsSinglePage,
    type PaymentListParams as PaymentListParams,
  };

  export {
    PayStatements as PayStatements,
    type PayStatement as PayStatement,
    type PayStatementDataSyncInProgress as PayStatementDataSyncInProgress,
    type PayStatementResponse as PayStatementResponse,
    type PayStatementResponseBody as PayStatementResponseBody,
    PayStatementResponsesPage as PayStatementResponsesPage,
    type PayStatementRetrieveManyParams as PayStatementRetrieveManyParams,
  };

  export {
    Documents as Documents,
    type DocumentResponse as DocumentResponse,
    type W42005 as W42005,
    type W42020 as W42020,
    type DocumentListResponse as DocumentListResponse,
    type DocumentRetreiveResponse as DocumentRetreiveResponse,
    type DocumentListParams as DocumentListParams,
  };

  export {
    Benefits as Benefits,
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
    CompanyBenefitsSinglePage as CompanyBenefitsSinglePage,
    SupportedBenefitsSinglePage as SupportedBenefitsSinglePage,
    type BenefitCreateParams as BenefitCreateParams,
    type BenefitUpdateParams as BenefitUpdateParams,
  };
}
