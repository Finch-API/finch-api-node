// File generated from our OpenAPI spec by Stainless.

import { AbstractPage, APIResponse, APIClient, FinalRequestOptions, PageInfo } from './core';
import * as HRIS from './resources/hris';
import * as ATS from './resources/ats';

export type SinglePageResponse<Item> = Item[];

export class SinglePage<Item> extends AbstractPage<Item> {
  items: Array<Item>;

  constructor(
    client: APIClient,
    response: APIResponse<SinglePageResponse<Item>>,
    options: FinalRequestOptions,
  ) {
    super(client, response, options);

    this.items = response || [];
  }

  getPaginatedItems(): Item[] {
    return this.items;
  }

  // @deprecated Please use `nextPageInfo()` instead
  /**
   * This page represents a response that isn't actually paginated at the API level
   * so there will never be any next page params.
   */
  nextPageParams(): null {
    return null;
  }

  nextPageInfo(): null {
    return null;
  }
}

export interface ResponsesPageResponse<Item> {
  responses: Array<Item>;
}

export class ResponsesPage<Item> extends AbstractPage<Item> implements ResponsesPageResponse<Item> {
  responses: Array<Item>;

  constructor(
    client: APIClient,
    response: APIResponse<ResponsesPageResponse<Item>>,
    options: FinalRequestOptions,
  ) {
    super(client, response, options);

    this.responses = response.responses;
  }

  getPaginatedItems(): Item[] {
    return this.responses;
  }

  // @deprecated Please use `nextPageInfo()` instead
  /**
   * This page represents a response that isn't actually paginated at the API level
   * so there will never be any next page params.
   */
  nextPageParams(): null {
    return null;
  }

  nextPageInfo(): null {
    return null;
  }
}

export interface IndividualsPageResponse {
  /**
   * The array of employees.
   */
  individuals: Array<HRIS.IndividualInDirectory>;

  paging: HRIS.Paging;
}

export interface IndividualsPageParams {
  /**
   * Number of employees to return (defaults to all)
   */
  limit?: number;

  /**
   * Index to start from (defaults to 0)
   */
  offset?: number;
}

export class IndividualsPage
  extends AbstractPage<HRIS.IndividualInDirectory>
  implements IndividualsPageResponse
{
  paging: HRIS.Paging;

  /**
   * The array of employees.
   */
  individuals: Array<HRIS.IndividualInDirectory>;

  constructor(
    client: APIClient,
    response: APIResponse<IndividualsPageResponse>,
    options: FinalRequestOptions,
  ) {
    super(client, response, options);

    this.paging = response.paging;
    this.individuals = response.individuals;
  }

  getPaginatedItems(): HRIS.IndividualInDirectory[] {
    return this.individuals;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<IndividualsPageParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const offset = this.paging.offset;
    if (!offset) return null;

    const length = this.individuals.length;
    const currentCount = offset + length;

    const totalCount = this.paging.count;
    if (!totalCount) return null;

    if (currentCount < totalCount) {
      return { params: { offset: currentCount } };
    }

    return null;
  }
}

export interface CandidatesPageResponse {
  candidates: Array<ATS.Candidate>;

  paging: HRIS.Paging;
}

export interface CandidatesPageParams {
  /**
   * Number of candidates to return (defaults to all)
   */
  limit?: number;

  /**
   * Index to start from (defaults to 0)
   */
  offset?: number;
}

export class CandidatesPage extends AbstractPage<ATS.Candidate> implements CandidatesPageResponse {
  paging: HRIS.Paging;

  candidates: Array<ATS.Candidate>;

  constructor(
    client: APIClient,
    response: APIResponse<CandidatesPageResponse>,
    options: FinalRequestOptions,
  ) {
    super(client, response, options);

    this.paging = response.paging;
    this.candidates = response.candidates;
  }

  getPaginatedItems(): ATS.Candidate[] {
    return this.candidates;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<CandidatesPageParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const offset = this.paging.offset;
    if (!offset) return null;

    const length = this.candidates.length;
    const currentCount = offset + length;

    const totalCount = this.paging.count;
    if (!totalCount) return null;

    if (currentCount < totalCount) {
      return { params: { offset: currentCount } };
    }

    return null;
  }
}

export interface ApplicationsPageResponse {
  applications: Array<ATS.Application>;

  paging: HRIS.Paging;
}

export interface ApplicationsPageParams {
  /**
   * Number of applications to return (defaults to all)
   */
  limit?: number;

  /**
   * Index to start from (defaults to 0)
   */
  offset?: number;
}

export class ApplicationsPage extends AbstractPage<ATS.Application> implements ApplicationsPageResponse {
  paging: HRIS.Paging;

  applications: Array<ATS.Application>;

  constructor(
    client: APIClient,
    response: APIResponse<ApplicationsPageResponse>,
    options: FinalRequestOptions,
  ) {
    super(client, response, options);

    this.paging = response.paging;
    this.applications = response.applications;
  }

  getPaginatedItems(): ATS.Application[] {
    return this.applications;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<ApplicationsPageParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const offset = this.paging.offset;
    if (!offset) return null;

    const length = this.applications.length;
    const currentCount = offset + length;

    const totalCount = this.paging.count;
    if (!totalCount) return null;

    if (currentCount < totalCount) {
      return { params: { offset: currentCount } };
    }

    return null;
  }
}

export interface JobsPageResponse {
  jobs: Array<ATS.Job>;

  paging: HRIS.Paging;
}

export interface JobsPageParams {
  /**
   * Number of jobs to return (defaults to all)
   */
  limit?: number;

  /**
   * Index to start from (defaults to 0)
   */
  offset?: number;
}

export class JobsPage extends AbstractPage<ATS.Job> implements JobsPageResponse {
  paging: HRIS.Paging;

  jobs: Array<ATS.Job>;

  constructor(client: APIClient, response: APIResponse<JobsPageResponse>, options: FinalRequestOptions) {
    super(client, response, options);

    this.paging = response.paging;
    this.jobs = response.jobs;
  }

  getPaginatedItems(): ATS.Job[] {
    return this.jobs;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<JobsPageParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const offset = this.paging.offset;
    if (!offset) return null;

    const length = this.jobs.length;
    const currentCount = offset + length;

    const totalCount = this.paging.count;
    if (!totalCount) return null;

    if (currentCount < totalCount) {
      return { params: { offset: currentCount } };
    }

    return null;
  }
}

export interface OffersPageResponse {
  offers: Array<ATS.Offer>;

  paging: HRIS.Paging;
}

export interface OffersPageParams {
  /**
   * Number of offers to return (defaults to all)
   */
  limit?: number;

  /**
   * Index to start from (defaults to 0)
   */
  offset?: number;
}

export class OffersPage extends AbstractPage<ATS.Offer> implements OffersPageResponse {
  paging: HRIS.Paging;

  offers: Array<ATS.Offer>;

  constructor(client: APIClient, response: APIResponse<OffersPageResponse>, options: FinalRequestOptions) {
    super(client, response, options);

    this.paging = response.paging;
    this.offers = response.offers;
  }

  getPaginatedItems(): ATS.Offer[] {
    return this.offers;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<OffersPageParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const offset = this.paging.offset;
    if (!offset) return null;

    const length = this.offers.length;
    const currentCount = offset + length;

    const totalCount = this.paging.count;
    if (!totalCount) return null;

    if (currentCount < totalCount) {
      return { params: { offset: currentCount } };
    }

    return null;
  }
}
