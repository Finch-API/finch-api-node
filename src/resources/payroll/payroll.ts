// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PayGroupsAPI from './pay-groups';

export class Payroll extends APIResource {
  payGroups: PayGroupsAPI.PayGroups = new PayGroupsAPI.PayGroups(this._client);
}

export namespace Payroll {
  export import PayGroups = PayGroupsAPI.PayGroups;
  export import PayGroupRetrieveResponse = PayGroupsAPI.PayGroupRetrieveResponse;
  export import PayGroupListResponse = PayGroupsAPI.PayGroupListResponse;
  export import PayGroupListResponsesSinglePage = PayGroupsAPI.PayGroupListResponsesSinglePage;
  export import PayGroupListParams = PayGroupsAPI.PayGroupListParams;
}
