// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '~/resource';
import { Candidates } from './candidates';
import { Applications } from './applications';
import { Stages } from './stages';
import { Jobs } from './jobs';
import { Offers } from './offers';
import * as API from './';

export class ATS extends APIResource {
  candidates: Candidates = new Candidates(this.client);
  applications: Applications = new Applications(this.client);
  stages: Stages = new Stages(this.client);
  jobs: Jobs = new Jobs(this.client);
  offers: Offers = new Offers(this.client);
}

export namespace ATS {
  export import Candidates = API.Candidates;
  export import Candidate = API.Candidate;
  export import CandidateListParams = API.CandidateListParams;

  export import Applications = API.Applications;
  export import Application = API.Application;
  export import ApplicationListParams = API.ApplicationListParams;

  export import Stages = API.Stages;
  export import Stage = API.Stage;
  export import StagesSinglePage = API.StagesSinglePage;

  export import Jobs = API.Jobs;
  export import Job = API.Job;
  export import JobListParams = API.JobListParams;

  export import Offers = API.Offers;
  export import Offer = API.Offer;
  export import OfferListParams = API.OfferListParams;
}
