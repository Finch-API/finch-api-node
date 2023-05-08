// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '~/resource';
import { CompanyResource } from './company';
import { Payments } from './payments';
import { PayStatements } from './pay-statements';
import { Directory } from './directory';
import { Individuals } from './individuals/individuals';
import { Benefits } from './benefits/benefits';

export class HRIS extends APIResource {
  company: CompanyResource = new CompanyResource(this.client);
  payments: Payments = new Payments(this.client);
  payStatements: PayStatements = new PayStatements(this.client);
  directory: Directory = new Directory(this.client);
  individuals: Individuals = new Individuals(this.client);
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
  amount?: number;

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
