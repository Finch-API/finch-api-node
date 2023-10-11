// File generated from our OpenAPI spec by Stainless.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';
import * as DirectoryAPI from '@tryfinch/finch-api/resources/hris/directory';
import * as HRISAPI from '@tryfinch/finch-api/resources/hris/hris';

export type SinglePageResponse<Item> = Item[];

export class SinglePage<Item> extends AbstractPage<Item> {
  items: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: SinglePageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.items = body || [];
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
    response: Response,
    body: ResponsesPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.responses = body.responses;
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
  individuals: Array<DirectoryAPI.IndividualInDirectory>;

  paging: HRISAPI.Paging;
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
  extends AbstractPage<DirectoryAPI.IndividualInDirectory>
  implements IndividualsPageResponse
{
  paging: HRISAPI.Paging;

  /**
   * The array of employees.
   */
  individuals: Array<DirectoryAPI.IndividualInDirectory>;

  constructor(
    client: APIClient,
    response: Response,
    body: IndividualsPageResponse,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.paging = body.paging;
    this.individuals = body.individuals;
  }

  getPaginatedItems(): DirectoryAPI.IndividualInDirectory[] {
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
