// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@tryfinch/finch-api/resource';
import * as CompanyAPI from '@tryfinch/finch-api/resources/sandbox/company';
import * as DirectoryAPI from '@tryfinch/finch-api/resources/sandbox/directory';
import * as EmploymentAPI from '@tryfinch/finch-api/resources/sandbox/employment';
import * as IndividualAPI from '@tryfinch/finch-api/resources/sandbox/individual';
import * as PaymentAPI from '@tryfinch/finch-api/resources/sandbox/payment';
import * as ConnectionsAPI from '@tryfinch/finch-api/resources/sandbox/connections/connections';
import * as JobsAPI from '@tryfinch/finch-api/resources/sandbox/jobs/jobs';

export class Sandbox extends APIResource {
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  company: CompanyAPI.Company = new CompanyAPI.Company(this._client);
  directory: DirectoryAPI.Directory = new DirectoryAPI.Directory(this._client);
  individual: IndividualAPI.Individual = new IndividualAPI.Individual(this._client);
  employment: EmploymentAPI.Employment = new EmploymentAPI.Employment(this._client);
  payment: PaymentAPI.Payment = new PaymentAPI.Payment(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
}

export namespace Sandbox {
  export import Connections = ConnectionsAPI.Connections;
  export import ConnectionCreateResponse = ConnectionsAPI.ConnectionCreateResponse;
  export import ConnectionCreateParams = ConnectionsAPI.ConnectionCreateParams;
  export import Company = CompanyAPI.Company;
  export import CompanyUpdateResponse = CompanyAPI.CompanyUpdateResponse;
  export import CompanyUpdateParams = CompanyAPI.CompanyUpdateParams;
  export import Directory = DirectoryAPI.Directory;
  export import DirectoryCreateResponse = DirectoryAPI.DirectoryCreateResponse;
  export import DirectoryCreateParams = DirectoryAPI.DirectoryCreateParams;
  export import Individual = IndividualAPI.Individual;
  export import IndividualUpdateResponse = IndividualAPI.IndividualUpdateResponse;
  export import IndividualUpdateParams = IndividualAPI.IndividualUpdateParams;
  export import Employment = EmploymentAPI.Employment;
  export import EmploymentUpdateResponse = EmploymentAPI.EmploymentUpdateResponse;
  export import EmploymentUpdateParams = EmploymentAPI.EmploymentUpdateParams;
  export import Payment = PaymentAPI.Payment;
  export import PaymentCreateResponse = PaymentAPI.PaymentCreateResponse;
  export import PaymentCreateParams = PaymentAPI.PaymentCreateParams;
  export import Jobs = JobsAPI.Jobs;
  export import JobCreateResponse = JobsAPI.JobCreateResponse;
  export import JobCreateParams = JobsAPI.JobCreateParams;
}
