// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AutomatedAPI from './automated';
import {
  Automated,
  AutomatedAsyncJob,
  AutomatedAsyncJobsPage,
  AutomatedCreateParams,
  AutomatedCreateResponse,
  AutomatedListParams,
} from './automated';
import * as ManualAPI from './manual';
import { Manual, ManualAsyncJob } from './manual';

export class Jobs extends APIResource {
  automated: AutomatedAPI.Automated = new AutomatedAPI.Automated(this._client);
  manual: ManualAPI.Manual = new ManualAPI.Manual(this._client);
}

Jobs.Automated = Automated;
Jobs.AutomatedAsyncJobsPage = AutomatedAsyncJobsPage;
Jobs.Manual = Manual;

export declare namespace Jobs {
  export {
    Automated as Automated,
    type AutomatedAsyncJob as AutomatedAsyncJob,
    type AutomatedCreateResponse as AutomatedCreateResponse,
    AutomatedAsyncJobsPage as AutomatedAsyncJobsPage,
    type AutomatedCreateParams as AutomatedCreateParams,
    type AutomatedListParams as AutomatedListParams,
  };

  export { Manual as Manual, type ManualAsyncJob as ManualAsyncJob };
}
