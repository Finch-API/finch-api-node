// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PayGroupsAPI from './pay-groups';
import {
  PayGroupListParams,
  PayGroupListResponse,
  PayGroupListResponsesSinglePage,
  PayGroupRetrieveResponse,
  PayGroups,
} from './pay-groups';

export class Payroll extends APIResource {
  payGroups: PayGroupsAPI.PayGroups = new PayGroupsAPI.PayGroups(this._client);
}

Payroll.PayGroups = PayGroups;
Payroll.PayGroupListResponsesSinglePage = PayGroupListResponsesSinglePage;

export declare namespace Payroll {
  export {
    PayGroups as PayGroups,
    type PayGroupRetrieveResponse as PayGroupRetrieveResponse,
    type PayGroupListResponse as PayGroupListResponse,
    PayGroupListResponsesSinglePage as PayGroupListResponsesSinglePage,
    type PayGroupListParams as PayGroupListParams,
  };
}
