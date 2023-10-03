// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '@tryfinch/finch-api/resource';
import { Benefits } from './benefits';
import * as API from './index';

export class Employer extends APIResource {
  benefits: Benefits = new Benefits(this.client);
}

export namespace Employer {
  export import Benefits = API.Benefits;
  export import RegisterCompanyBenefitsResponse = API.RegisterCompanyBenefitsResponse;
  export import BenefitRegisterParams = API.BenefitRegisterParams;
}
