// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CompanyAPI from './company';
import { Company, CompanyUpdateParams, CompanyUpdateResponse } from './company';
import * as DirectoryAPI from './directory';
import { Directory, DirectoryCreateParams, DirectoryCreateResponse } from './directory';
import * as EmploymentAPI from './employment';
import { Employment, EmploymentUpdateParams, EmploymentUpdateResponse } from './employment';
import * as IndividualAPI from './individual';
import { Individual, IndividualUpdateParams, IndividualUpdateResponse } from './individual';
import * as PaymentAPI from './payment';
import { Payment, PaymentCreateParams, PaymentCreateResponse } from './payment';
import * as ConnectionsAPI from './connections/connections';
import { ConnectionCreateParams, ConnectionCreateResponse, Connections } from './connections/connections';
import * as JobsAPI from './jobs/jobs';
import { JobCreateParams, JobCreateResponse, Jobs } from './jobs/jobs';

export class Sandbox extends APIResource {
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  company: CompanyAPI.Company = new CompanyAPI.Company(this._client);
  directory: DirectoryAPI.Directory = new DirectoryAPI.Directory(this._client);
  individual: IndividualAPI.Individual = new IndividualAPI.Individual(this._client);
  employment: EmploymentAPI.Employment = new EmploymentAPI.Employment(this._client);
  payment: PaymentAPI.Payment = new PaymentAPI.Payment(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
}

Sandbox.Connections = Connections;
Sandbox.Company = Company;
Sandbox.Directory = Directory;
Sandbox.Individual = Individual;
Sandbox.Employment = Employment;
Sandbox.Payment = Payment;
Sandbox.Jobs = Jobs;

export declare namespace Sandbox {
  export {
    Connections as Connections,
    type ConnectionCreateResponse as ConnectionCreateResponse,
    type ConnectionCreateParams as ConnectionCreateParams,
  };

  export {
    Company as Company,
    type CompanyUpdateResponse as CompanyUpdateResponse,
    type CompanyUpdateParams as CompanyUpdateParams,
  };

  export {
    Directory as Directory,
    type DirectoryCreateResponse as DirectoryCreateResponse,
    type DirectoryCreateParams as DirectoryCreateParams,
  };

  export {
    Individual as Individual,
    type IndividualUpdateResponse as IndividualUpdateResponse,
    type IndividualUpdateParams as IndividualUpdateParams,
  };

  export {
    Employment as Employment,
    type EmploymentUpdateResponse as EmploymentUpdateResponse,
    type EmploymentUpdateParams as EmploymentUpdateParams,
  };

  export {
    Payment as Payment,
    type PaymentCreateResponse as PaymentCreateResponse,
    type PaymentCreateParams as PaymentCreateParams,
  };

  export {
    Jobs as Jobs,
    type JobCreateResponse as JobCreateResponse,
    type JobCreateParams as JobCreateParams,
  };
}
