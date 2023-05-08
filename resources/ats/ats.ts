// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '~/resource';
import { Candidates } from './candidates';
import { Applications } from './applications';
import { Stages } from './stages';
import { Jobs } from './jobs';
import { Offers } from './offers';

export class ATS extends APIResource {
  candidates: Candidates = new Candidates(this.client);
  applications: Applications = new Applications(this.client);
  stages: Stages = new Stages(this.client);
  jobs: Jobs = new Jobs(this.client);
  offers: Offers = new Offers(this.client);
}
