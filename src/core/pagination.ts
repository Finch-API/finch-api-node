// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { FinchError } from './error';
import { FinalRequestOptions } from '../internal/request-options';
import { defaultParseResponse } from '../internal/parse';
import * as Shared from '../resources/shared';
import * as DirectoryAPI from '../resources/hris/directory';
import { type Finch } from '../client';
import { APIPromise } from './api-promise';
import { type APIResponseProps } from '../internal/parse';
import { maybeObj } from '../internal/utils/values';

export type PageRequestOptions = Pick<FinalRequestOptions, 'query' | 'headers' | 'body' | 'path' | 'method'>;

export abstract class AbstractPage<Item> implements AsyncIterable<Item> {
  #client: Finch;
  protected options: FinalRequestOptions;

  protected response: Response;
  protected body: unknown;

  constructor(client: Finch, response: Response, body: unknown, options: FinalRequestOptions) {
    this.#client = client;
    this.options = options;
    this.response = response;
    this.body = body;
  }

  abstract nextPageRequestOptions(): PageRequestOptions | null;

  abstract getPaginatedItems(): Item[];

  hasNextPage(): boolean {
    const items = this.getPaginatedItems();
    if (!items.length) return false;
    return this.nextPageRequestOptions() != null;
  }

  async getNextPage(): Promise<this> {
    const nextOptions = this.nextPageRequestOptions();
    if (!nextOptions) {
      throw new FinchError(
        'No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.',
      );
    }

    return await this.#client.requestAPIList(this.constructor as any, nextOptions);
  }

  async *iterPages(): AsyncGenerator<this> {
    let page: this = this;
    yield page;
    while (page.hasNextPage()) {
      page = await page.getNextPage();
      yield page;
    }
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    for await (const page of this.iterPages()) {
      for (const item of page.getPaginatedItems()) {
        yield item;
      }
    }
  }
}

/**
 * This subclass of Promise will resolve to an instantiated Page once the request completes.
 *
 * It also implements AsyncIterable to allow auto-paginating iteration on an unawaited list call, eg:
 *
 *    for await (const item of client.items.list()) {
 *      console.log(item)
 *    }
 */
export class PagePromise<
    PageClass extends AbstractPage<Item>,
    Item = ReturnType<PageClass['getPaginatedItems']>[number],
  >
  extends APIPromise<PageClass>
  implements AsyncIterable<Item>
{
  constructor(
    client: Finch,
    request: Promise<APIResponseProps>,
    Page: new (...args: ConstructorParameters<typeof AbstractPage>) => PageClass,
  ) {
    super(
      client,
      request,
      async (client, props) =>
        new Page(client, props.response, await defaultParseResponse(client, props), props.options),
    );
  }

  /**
   * Allow auto-paginating iteration on an unawaited list call, eg:
   *
   *    for await (const item of client.items.list()) {
   *      console.log(item)
   *    }
   */
  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    const page = await this;
    for await (const item of page) {
      yield item;
    }
  }
}

export type SinglePageResponse<Item> = Item[];

export class SinglePage<Item> extends AbstractPage<Item> {
  items: Array<Item>;

  constructor(
    client: Finch,
    response: Response,
    body: SinglePageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.items = body || [];
  }

  getPaginatedItems(): Item[] {
    return this.items ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    return null;
  }
}

export interface ResponsesPageResponse<Item> {
  responses: Array<Item>;
}

export class ResponsesPage<Item> extends AbstractPage<Item> implements ResponsesPageResponse<Item> {
  responses: Array<Item>;

  constructor(
    client: Finch,
    response: Response,
    body: ResponsesPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.responses = body.responses || [];
  }

  getPaginatedItems(): Item[] {
    return this.responses ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    return null;
  }
}

export interface IndividualsPageResponse {
  /**
   * The array of employees.
   */
  individuals: Array<DirectoryAPI.IndividualInDirectory>;

  paging: Shared.Paging;
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
  /**
   * The array of employees.
   */
  individuals: Array<DirectoryAPI.IndividualInDirectory>;

  paging: Shared.Paging;

  constructor(
    client: Finch,
    response: Response,
    body: IndividualsPageResponse,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.individuals = body.individuals || [];
    this.paging = body.paging;
  }

  getPaginatedItems(): DirectoryAPI.IndividualInDirectory[] {
    return this.individuals ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const offset = this.paging.offset ?? 0;
    const length = this.getPaginatedItems().length;
    const currentCount = offset + length;

    const totalCount = this.paging.count;
    if (!totalCount) {
      return null;
    }

    if (currentCount < totalCount) {
      return {
        ...this.options,
        query: {
          ...maybeObj(this.options.query),
          offset: currentCount,
        },
      };
    }

    return null;
  }
}

export interface PageResponse<Item> {
  data: Array<Item>;

  paging: Shared.Paging;
}

export interface PageParams {
  /**
   * Number of entries to return (defaults to all)
   */
  limit?: number;

  /**
   * Index to start from (defaults to 0)
   */
  offset?: number;
}

export class Page<Item> extends AbstractPage<Item> implements PageResponse<Item> {
  data: Array<Item>;

  paging: Shared.Paging;

  constructor(client: Finch, response: Response, body: PageResponse<Item>, options: FinalRequestOptions) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.paging = body.paging;
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const offset = this.paging.offset ?? 0;
    const length = this.getPaginatedItems().length;
    const currentCount = offset + length;

    const totalCount = this.paging.count;
    if (!totalCount) {
      return null;
    }

    if (currentCount < totalCount) {
      return {
        ...this.options,
        query: {
          ...maybeObj(this.options.query),
          offset: currentCount,
        },
      };
    }

    return null;
  }
}
