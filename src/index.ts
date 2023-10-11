// File generated from our OpenAPI spec by Stainless.

import * as Core from './core';
import * as Pagination from './pagination';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as API from '@tryfinch/finch-api/resources/index';

export interface ClientOptions {
  /**
   * Set it to null if you want to send unauthenticated requests.
   */
  accessToken?: string | null;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   */
  baseURL?: string;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;

  clientId?: string | null;

  clientSecret?: string | null;

  webhookSecret?: string | null;
}

/** API Client for interfacing with the Finch API. */
export class Finch extends Core.APIClient {
  accessToken: string | null;
  clientId?: string | null;
  clientSecret?: string | null;
  webhookSecret?: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Finch API.
   *
   * @param {string | null} opts.accessToken - The Access Token to send to the API.
   * @param {string} [opts.baseURL] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   * @param {string | null} [opts.clientId]
   * @param {string | null} [opts.clientSecret]
   * @param {string | null} [opts.webhookSecret]
   */
  constructor({
    accessToken = null,
    clientId = Core.readEnv('FINCH_CLIENT_ID') ?? null,
    clientSecret = Core.readEnv('FINCH_CLIENT_SECRET') ?? null,
    webhookSecret = Core.readEnv('FINCH_WEBHOOK_SECRET') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      accessToken,
      clientId,
      clientSecret,
      webhookSecret,
      ...opts,
      baseURL: opts.baseURL ?? `https://api.tryfinch.com`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });
    this._options = options;

    this.accessToken = accessToken;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.webhookSecret = webhookSecret;
  }

  hris: API.HRIS = new API.HRIS(this);
  providers: API.Providers = new API.Providers(this);
  account: API.Account = new API.Account(this);
  webhooks: API.Webhooks = new API.Webhooks(this);
  requestForwarding: API.RequestForwarding = new API.RequestForwarding(this);

  /**
   * Returns an access token for the Finch API given an authorization code. An
   * authorization code can be obtained by visiting the url returned by
   * get_auth_url().
   */
  getAccessToken(code: string, { redirectUri }: { redirectUri: string }): Promise<string> {
    if (!this.clientId) {
      throw new Error('Expected the clientId to be set in order to call getAccessToken');
    }
    if (!this.clientSecret) {
      throw new Error('Expected the clientSecret to be set in order to call getAccessToken');
    }
    return this.post<Record<string, any>, { access_token: string }>('/auth/token', {
      body: {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        code: code,
        redirect_uri: redirectUri,
      },
      headers: {
        Authorization: null,
      },
    }).then((response) => response.access_token);
  }

  /**
   * Returns the authorization url which can be visited in order to obtain an
   * authorization code from Finch. The autorization code can then be exchanged for
   * an access token for the Finch api by calling get_access_token().
   */
  getAuthURL({
    products,
    redirectUri,
    sandbox,
  }: {
    products: string;
    redirectUri: string;
    sandbox: boolean;
  }): string {
    if (!this.clientId) {
      throw new Error('Expected the clientId to be set in order to call getAuthUrl');
    }
    const url = new URL('/authorize', 'https://connect.tryfinch.com/authorize');
    url.search = this.stringifyQuery({
      client_id: this.clientId,
      products: products,
      redirect_uri: redirectUri,
      sandbox: sandbox,
    });
    return url.toString();
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      'Finch-API-Version': '2020-09-17',
      ...this._options.defaultHeaders,
    };
  }

  protected override validateHeaders(headers: Core.Headers, customHeaders: Core.Headers) {
    if (this.accessToken && headers['Authorization']) {
      return;
    }
    if (customHeaders['Authorization'] === null) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected the accessToken to be set. Or for the "Authorization" headers to be explicitly omitted',
    );
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.accessToken == null) {
      return {};
    }
    return { Authorization: `Bearer ${this.accessToken}` };
  }

  static Finch = this;

  static FinchError = Errors.FinchError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;
}

export const {
  FinchError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Finch {
  // Helper functions
  export import toFile = Uploads.toFile;
  export import fileFromPath = Uploads.fileFromPath;

  export import RequestOptions = Core.RequestOptions;

  export import SinglePage = Pagination.SinglePage;
  export import SinglePageResponse = Pagination.SinglePageResponse;

  export import ResponsesPage = Pagination.ResponsesPage;
  export import ResponsesPageResponse = Pagination.ResponsesPageResponse;

  export import IndividualsPage = Pagination.IndividualsPage;
  export import IndividualsPageParams = Pagination.IndividualsPageParams;
  export import IndividualsPageResponse = Pagination.IndividualsPageResponse;

  export import HRIS = API.HRIS;
  export type Income = API.Income;
  export type Location = API.Location;
  export type Money = API.Money;
  export type Paging = API.Paging;

  export import Providers = API.Providers;
  export type Provider = API.Provider;
  export import ProvidersSinglePage = API.ProvidersSinglePage;

  export import Account = API.Account;
  export type DisconnectResponse = API.DisconnectResponse;
  export type Introspection = API.Introspection;

  export import Webhooks = API.Webhooks;

  export import RequestForwarding = API.RequestForwarding;
  export type RequestForwardingForwardResponse = API.RequestForwardingForwardResponse;
  export type RequestForwardingForwardParams = API.RequestForwardingForwardParams;
}

export default Finch;
