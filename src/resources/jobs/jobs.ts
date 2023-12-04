// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '@tryfinch/finch-api/resource';
import * as AutomatedAPI from '@tryfinch/finch-api/resources/jobs/automated';
import * as ManualAPI from '@tryfinch/finch-api/resources/jobs/manual';

export class Jobs extends APIResource {
  automated: AutomatedAPI.Automated = new AutomatedAPI.Automated(this._client);
  manual: ManualAPI.Manual = new ManualAPI.Manual(this._client);
}

export namespace Jobs {
  export import Automated = AutomatedAPI.Automated;
  export import AutomatedAsyncJob = AutomatedAPI.AutomatedAsyncJob;
  export import AutomatedCreateResponse = AutomatedAPI.AutomatedCreateResponse;
  export import AutomatedAsyncJobsPage = AutomatedAPI.AutomatedAsyncJobsPage;
  export import AutomatedCreateParams = AutomatedAPI.AutomatedCreateParams;
  export import AutomatedListParams = AutomatedAPI.AutomatedListParams;
  export import Manual = ManualAPI.Manual;
  export import ManualAsyncJob = ManualAPI.ManualAsyncJob;
}
