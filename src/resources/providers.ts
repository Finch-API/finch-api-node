// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { SinglePage } from '../pagination';

export class Providers extends APIResource {
  /**
   * Return details on all available payroll and HR systems.
   */
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProviderListResponsesSinglePage, ProviderListResponse> {
    return this._client.getAPIList('/providers', ProviderListResponsesSinglePage, options);
  }
}

export class ProviderListResponsesSinglePage extends SinglePage<ProviderListResponse> {}

export interface Provider {
  /**
   * The id of the payroll provider used in Connect.
   */
  id: string;

  /**
   * The display name of the payroll provider.
   */
  display_name: string;

  /**
   * The list of Finch products supported on this payroll provider.
   */
  products: Array<string>;

  /**
   * The authentication methods supported by the provider.
   */
  authentication_methods?: Array<Provider.AuthenticationMethod>;

  /**
   * `true` if the integration is in a beta state, `false` otherwise
   */
  beta?: boolean;

  /**
   * The url to the official icon of the payroll provider.
   */
  icon?: string;

  /**
   * The url to the official logo of the payroll provider.
   */
  logo?: string;

  /**
   * @deprecated [DEPRECATED] Whether the Finch integration with this provider uses
   * the Assisted Connect Flow by default. This field is now deprecated. Please check
   * for a `type` of `assisted` in the `authentication_methods` field instead.
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
}

export namespace Provider {
  export interface AuthenticationMethod {
    /**
     * The type of authentication method
     */
    type: 'assisted' | 'credential' | 'api_token' | 'api_credential' | 'oauth' | 'api';

    /**
     * The supported benefit types and their configurations
     */
    benefits_support?: { [key: string]: unknown };

    /**
     * The supported fields for each Finch product
     */
    supported_fields?: { [key: string]: unknown };
  }
}

export interface ProviderListResponse {
  /**
   * The id of the payroll provider used in Connect.
   */
  id: string;

  /**
   * The display name of the payroll provider.
   */
  display_name: string;

  /**
   * The list of Finch products supported on this payroll provider.
   */
  products: Array<string>;

  /**
   * The authentication methods supported by the provider.
   */
  authentication_methods?: Array<ProviderListResponse.AuthenticationMethod>;

  /**
   * `true` if the integration is in a beta state, `false` otherwise
   */
  beta?: boolean;

  /**
   * The url to the official icon of the payroll provider.
   */
  icon?: string;

  /**
   * The url to the official logo of the payroll provider.
   */
  logo?: string;

  /**
   * @deprecated [DEPRECATED] Whether the Finch integration with this provider uses
   * the Assisted Connect Flow by default. This field is now deprecated. Please check
   * for a `type` of `assisted` in the `authentication_methods` field instead.
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
}

export namespace ProviderListResponse {
  export interface AuthenticationMethod {
    /**
     * The type of authentication method
     */
    type: 'assisted' | 'credential' | 'api_token' | 'api_credential' | 'oauth' | 'api';

    /**
     * The supported benefit types and their configurations
     */
    benefits_support?: { [key: string]: unknown };

    /**
     * The supported fields for each Finch product
     */
    supported_fields?: { [key: string]: unknown };
  }
}

Providers.ProviderListResponsesSinglePage = ProviderListResponsesSinglePage;

export declare namespace Providers {
  export {
    type Provider as Provider,
    type ProviderListResponse as ProviderListResponse,
    ProviderListResponsesSinglePage as ProviderListResponsesSinglePage,
  };
}
