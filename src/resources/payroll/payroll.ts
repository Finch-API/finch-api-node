// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PayGroupsAPI from './pay-groups';
import {
  PayGroupListParams,
  PayGroupListResponse,
  PayGroupListResponsesSinglePage,
  PayGroupRetrieveParams,
  PayGroupRetrieveResponse,
  PayGroups,
} from './pay-groups';

export class Payroll extends APIResource {
  payGroups: PayGroupsAPI.PayGroups = new PayGroupsAPI.PayGroups(this._client);
}

Payroll.PayGroups = PayGroups;

export declare namespace Payroll {
  export {
    PayGroups as PayGroups,
    type PayGroupRetrieveResponse as PayGroupRetrieveResponse,
    type PayGroupListResponse as PayGroupListResponse,
    type PayGroupListResponsesSinglePage as PayGroupListResponsesSinglePage,
    type PayGroupRetrieveParams as PayGroupRetrieveParams,
    type PayGroupListParams as PayGroupListParams,
  };
}
