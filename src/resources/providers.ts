// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ProvidersAPI from './providers';
import * as BenefitsAPI from './hris/benefits/benefits';
import { SinglePage } from '../pagination';

export class Providers extends APIResource {
  /**
   * Return details on all available payroll and HR systems.
   */
  list(options?: Core.RequestOptions): Core.PagePromise<ProvidersSinglePage, Provider> {
    return this._client.getAPIList('/providers', ProvidersSinglePage, options);
  }
}

export class ProvidersSinglePage extends SinglePage<Provider> {}

export interface Provider {
  /**
   * The id of the payroll provider used in Connect.
   */
  id?: string;

  /**
   * The list of authentication methods supported by the provider.
   */
  authentication_methods?: Array<Provider.AuthenticationMethod>;

  /**
   * `true` if the integration is in a beta state, `false` otherwise
   */
  beta?: boolean;

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
   * [DEPRECATED] Whether the Finch integration with this provider uses the Assisted
   * Connect Flow by default. This field is now deprecated. Please check for a `type`
   * of `assisted` in the `authentication_methods` field instead.
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

export namespace Provider {
  export interface AuthenticationMethod {
    /**
     * Each benefit type and their supported features. If the benefit type is not
     * supported, the property will be null
     */
    benefits_support?: BenefitsAPI.BenefitsSupport | null;

    /**
     * The supported data fields returned by our HR and payroll endpoints
     */
    supported_fields?: AuthenticationMethod.SupportedFields | null;

    /**
     * The type of authentication method.
     */
    type?: 'assisted' | 'credential' | 'api_token' | 'api_credential' | 'oauth';
  }

  export namespace AuthenticationMethod {
    /**
     * The supported data fields returned by our HR and payroll endpoints
     */
    export interface SupportedFields {
      company?: SupportedFields.Company;

      directory?: SupportedFields.Directory;

      employment?: SupportedFields.Employment;

      individual?: SupportedFields.Individual;

      pay_statement?: SupportedFields.PayStatement;

      payment?: SupportedFields.Payment;
    }

    export namespace SupportedFields {
      export interface Company {
        id?: boolean;

        accounts?: Company.Accounts;

        departments?: Company.Departments;

        ein?: boolean;

        entity?: Company.Entity;

        legal_name?: boolean;

        locations?: Company.Locations;

        primary_email?: boolean;

        primary_phone_number?: boolean;
      }

      export namespace Company {
        export interface Accounts {
          account_name?: boolean;

          account_number?: boolean;

          account_type?: boolean;

          institution_name?: boolean;

          routing_number?: boolean;
        }

        export interface Departments {
          name?: boolean;

          parent?: Departments.Parent;
        }

        export namespace Departments {
          export interface Parent {
            name?: boolean;
          }
        }

        export interface Entity {
          subtype?: boolean;

          type?: boolean;
        }

        export interface Locations {
          city?: boolean;

          country?: boolean;

          line1?: boolean;

          line2?: boolean;

          postal_code?: boolean;

          state?: boolean;
        }
      }

      export interface Directory {
        individuals?: Directory.Individuals;

        paging?: Directory.Paging;
      }

      export namespace Directory {
        export interface Individuals {
          id?: boolean;

          department?: boolean;

          first_name?: boolean;

          is_active?: boolean;

          last_name?: boolean;

          manager?: Individuals.Manager;

          middle_name?: boolean;
        }

        export namespace Individuals {
          export interface Manager {
            id?: boolean;
          }
        }

        export interface Paging {
          count?: boolean;

          offset?: boolean;
        }
      }

      export interface Employment {
        id?: boolean;

        class_code?: boolean;

        custom_fields?: boolean;

        department?: Employment.Department;

        employment?: Employment.Employment;

        end_date?: boolean;

        first_name?: boolean;

        income?: Employment.Income;

        income_history?: boolean;

        is_active?: boolean;

        last_name?: boolean;

        location?: Employment.Location;

        manager?: Employment.Manager;

        middle_name?: boolean;

        start_date?: boolean;

        title?: boolean;
      }

      export namespace Employment {
        export interface Department {
          name?: boolean;
        }

        export interface Employment {
          subtype?: boolean;

          type?: boolean;
        }

        export interface Income {
          amount?: boolean;

          currency?: boolean;

          unit?: boolean;
        }

        export interface Location {
          city?: boolean;

          country?: boolean;

          line1?: boolean;

          line2?: boolean;

          postal_code?: boolean;

          state?: boolean;
        }

        export interface Manager {
          id?: boolean;
        }
      }

      export interface Individual {
        id?: boolean;

        dob?: boolean;

        emails?: Individual.Emails;

        encrypted_ssn?: boolean;

        ethnicity?: boolean;

        first_name?: boolean;

        gender?: boolean;

        last_name?: boolean;

        middle_name?: boolean;

        phone_numbers?: Individual.PhoneNumbers;

        preferred_name?: boolean;

        residence?: Individual.Residence;

        ssn?: boolean;
      }

      export namespace Individual {
        export interface Emails {
          data?: boolean;

          type?: boolean;
        }

        export interface PhoneNumbers {
          data?: boolean;

          type?: boolean;
        }

        export interface Residence {
          city?: boolean;

          country?: boolean;

          line1?: boolean;

          line2?: boolean;

          postal_code?: boolean;

          state?: boolean;
        }
      }

      export interface PayStatement {
        paging?: PayStatement.Paging;

        pay_statements?: PayStatement.PayStatements;
      }

      export namespace PayStatement {
        export interface Paging {
          count: boolean;

          offset: boolean;
        }

        export interface PayStatements {
          earnings?: PayStatements.Earnings;

          employee_deductions?: PayStatements.EmployeeDeductions;

          employer_contributions?: PayStatements.EmployerContributions;

          /**
           * @deprecated: [DEPRECATED] Use `employer_contributions` instead
           */
          employer_deductions?: PayStatements.EmployerDeductions;

          gross_pay?: boolean;

          individual_id?: boolean;

          net_pay?: boolean;

          payment_method?: boolean;

          taxes?: PayStatements.Taxes;

          total_hours?: boolean;

          type?: boolean;
        }

        export namespace PayStatements {
          export interface Earnings {
            amount?: boolean;

            currency?: boolean;

            name?: boolean;

            type?: boolean;
          }

          export interface EmployeeDeductions {
            amount?: boolean;

            currency?: boolean;

            name?: boolean;

            pre_tax?: boolean;

            type?: boolean;
          }

          export interface EmployerContributions {
            amount?: boolean;

            currency?: boolean;

            name?: boolean;
          }

          /**
           * @deprecated: [DEPRECATED] Use `employer_contributions` instead
           */
          export interface EmployerDeductions {
            amount?: boolean;

            currency?: boolean;

            name?: boolean;
          }

          export interface Taxes {
            amount?: boolean;

            currency?: boolean;

            employer?: boolean;

            name?: boolean;

            type?: boolean;
          }
        }
      }

      export interface Payment {
        id?: boolean;

        company_debit?: boolean;

        debit_date?: boolean;

        employee_taxes?: boolean;

        employer_taxes?: boolean;

        gross_pay?: boolean;

        individual_ids?: boolean;

        net_pay?: boolean;

        pay_date?: boolean;

        pay_frequencies?: boolean;

        pay_group_ids?: boolean;

        pay_period?: Payment.PayPeriod;
      }

      export namespace Payment {
        export interface PayPeriod {
          end_date?: boolean;

          start_date?: boolean;
        }
      }
    }
  }
}

export namespace Providers {
  export import Provider = ProvidersAPI.Provider;
  export import ProvidersSinglePage = ProvidersAPI.ProvidersSinglePage;
}
