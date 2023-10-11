// File generated from our OpenAPI spec by Stainless.

import * as Core from '@tryfinch/finch-api/core';
import { APIResource } from '@tryfinch/finch-api/resource';
import * as ProvidersAPI from '@tryfinch/finch-api/resources/providers';
import { SinglePage } from '@tryfinch/finch-api/pagination';

export class Providers extends APIResource {
  /**
   * Return details on all available payroll and HR systems.
   */
  list(options?: Core.RequestOptions): Core.PagePromise<ProvidersSinglePage, Provider> {
    return this.getAPIList('/providers', ProvidersSinglePage, options);
  }
}

export class ProvidersSinglePage extends SinglePage<Provider> {}

export interface Provider {
  /**
   * The id of the payroll provider used in Connect.
   */
  id?: string;

  /**
   * The display name of the payroll provider.
   */
  display_name?: string;

  /**
   * The url to the official icon of the payroll provider.
   */
  icon?: string;

  /**
   * The url to the official logo of the payroll provider.
   */
  logo?: string;

  /**
   * Whether the Finch integration with this provider uses the Assisted Connect Flow
   * by default.
   */
  manual?: boolean;

  /**
   * whether MFA is required for the provider.
   */
  mfa_required?: boolean;

  /**
   * The hex code for the primary color of the payroll provider.
   */
  primary_color?: string;

  /**
   * The list of Finch products supported on this payroll provider.
   */
  products?: Array<string>;
}

export namespace Providers {
  export import Provider = ProvidersAPI.Provider;
  export import ProvidersSinglePage = ProvidersAPI.ProvidersSinglePage;
}
