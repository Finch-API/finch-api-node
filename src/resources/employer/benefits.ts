// File generated from our OpenAPI spec by Stainless.

import * as Core from '@tryfinch/finch-api/core';
import { APIResource } from '@tryfinch/finch-api/resource';
import { isRequestOptions } from '@tryfinch/finch-api/core';
import * as Benefits_ from '@tryfinch/finch-api/resources/hris/benefits/index';
import * as API from './index';

export class Benefits extends APIResource {
  /**
   * **Availability: Assisted Benefits providers only**
   *
   * Register existing benefits from the customer on the provider, on Finch's end.
   * Please use the `/provider` endpoint to view available types for each provider.
   */
  register(
    body?: BenefitRegisterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegisterCompanyBenefitsResponse>;
  register(options?: Core.RequestOptions): Core.APIPromise<RegisterCompanyBenefitsResponse>;
  register(
    body: BenefitRegisterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegisterCompanyBenefitsResponse> {
    if (isRequestOptions(body)) {
      return this.register({}, body);
    }
    return this.post('/employer/benefits/register', { body, ...options });
  }
}

export interface RegisterCompanyBenefitsResponse {
  benefit_id: string;

  job_id: string;
}

export interface BenefitRegisterParams {
  description?: string;

  frequency?: Benefits_.BenefitFrequency | null;

  /**
   * Type of benefit.
   */
  type?: Benefits_.BenefitType | null;
}

export namespace Benefits {
  export import RegisterCompanyBenefitsResponse = API.RegisterCompanyBenefitsResponse;
  export import BenefitRegisterParams = API.BenefitRegisterParams;
}
