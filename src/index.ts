// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources/index';

export interface ClientOptions {
  accessToken?: string | null | undefined;

  /**
   * Defaults to process.env['FINCH_CLIENT_ID'].
   */
  clientId?: string | null | undefined;

  /**
   * Defaults to process.env['FINCH_CLIENT_SECRET'].
   */
  clientSecret?: string | null | undefined;

  /**
   * Defaults to process.env['FINCH_WEBHOOK_SECRET'].
   */
  webhookSecret?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['FINCH_BASE_URL'].
   */
  baseURL?: string | null | undefined;

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
}

/**
 * API Client for interfacing with the Finch API.
 */
export class Finch extends Core.APIClient {
  accessToken: string | null;
  clientId: string | null;
  clientSecret: string | null;
  webhookSecret: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Finch API.
   *
   * @param {string | null | undefined} [opts.accessToken]
   * @param {string | null | undefined} [opts.clientId=process.env['FINCH_CLIENT_ID'] ?? null]
   * @param {string | null | undefined} [opts.clientSecret=process.env['FINCH_CLIENT_SECRET'] ?? null]
   * @param {string | null | undefined} [opts.webhookSecret=process.env['FINCH_WEBHOOK_SECRET'] ?? null]
   * @param {string} [opts.baseURL=process.env['FINCH_BASE_URL'] ?? https://api.tryfinch.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('FINCH_BASE_URL'),
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
      baseURL: baseURL || `https://api.tryfinch.com`,
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

  accessTokens: API.AccessTokens = new API.AccessTokens(this);
  hris: API.HRIS = new API.HRIS(this);
  providers: API.Providers = new API.Providers(this);
  account: API.Account = new API.Account(this);
  webhooks: API.Webhooks = new API.Webhooks(this);
  requestForwarding: API.RequestForwarding = new API.RequestForwarding(this);
  jobs: API.Jobs = new API.Jobs(this);
  sandbox: API.Sandbox = new API.Sandbox(this);
  payroll: API.Payroll = new API.Payroll(this);
  connect: API.Connect = new API.Connect(this);

  /**
   * DEPRECATED: use client.accessTokens.create instead.
   */
  getAccessToken(code: string, options?: { redirectUri: string }): Promise<string> {
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
        redirect_uri: options?.redirectUri,
      },
      headers: {
        authorization: null,
      },
    }).then((response) => response.access_token);
  }

  /**
   * Returns the authorization url which can be visited in order to obtain an
   * authorization code from Finch. The authorization code can then be exchanged for
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

  /**
   * Returns a copy of the current Finch client with the given access token for
   * authentication.
   */
  withAccessToken(accessToken: string): Finch {
    return new Finch({ ...this._options, accessToken });
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
    if (this.accessToken && headers['authorization']) {
      return;
    }
    if (customHeaders['authorization'] === null) {
      return;
    }

    if (this.clientId && this.clientSecret && headers['authorization']) {
      return;
    }
    if (customHeaders['authorization'] === null) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected either accessToken, clientId or clientSecret to be set. Or for one of the "Authorization" or "Authorization" headers to be explicitly omitted',
    );
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    const bearerAuth = this.bearerAuth(opts);
    const basicAuth = this.basicAuth(opts);

    if (bearerAuth != null && !Core.isEmptyObj(bearerAuth)) {
      return bearerAuth;
    }

    if (basicAuth != null && !Core.isEmptyObj(basicAuth)) {
      return basicAuth;
    }
    return {};
  }

  protected bearerAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.accessToken == null) {
      return {};
    }
    return { Authorization: `Bearer ${this.accessToken}` };
  }

  protected basicAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (!this.clientId) {
      return {};
    }

    if (!this.clientSecret) {
      return {};
    }

    const credentials = `${this.clientId}:${this.clientSecret}`;
    const Authorization = `Basic ${Core.toBase64(credentials)}`;
    return { Authorization };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static Finch = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

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

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
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
  export import RequestOptions = Core.RequestOptions;

  export import SinglePage = Pagination.SinglePage;
  export import SinglePageResponse = Pagination.SinglePageResponse;

  export import ResponsesPage = Pagination.ResponsesPage;
  export import ResponsesPageResponse = Pagination.ResponsesPageResponse;

  export import IndividualsPage = Pagination.IndividualsPage;
  export import IndividualsPageParams = Pagination.IndividualsPageParams;
  export import IndividualsPageResponse = Pagination.IndividualsPageResponse;

  export import Page = Pagination.Page;
  export import PageParams = Pagination.PageParams;
  export import PageResponse = Pagination.PageResponse;

  export import AccessTokens = API.AccessTokens;
  export import CreateAccessTokenResponse = API.CreateAccessTokenResponse;
  export import AccessTokenCreateParams = API.AccessTokenCreateParams;

  export import HRIS = API.HRIS;
  export import Income = API.Income;
  export import Location = API.Location;
  export import Money = API.Money;

  export import Providers = API.Providers;
  export import Provider = API.Provider;
  export import ProvidersSinglePage = API.ProvidersSinglePage;

  export import Account = API.Account;
  export import DisconnectResponse = API.DisconnectResponse;
  export import Introspection = API.Introspection;

  export import Webhooks = API.Webhooks;
  export import AccountUpdateEvent = API.AccountUpdateEvent;
  export import BaseWebhookEvent = API.BaseWebhookEvent;
  export import CompanyEvent = API.CompanyEvent;
  export import DirectoryEvent = API.DirectoryEvent;
  export import EmploymentEvent = API.EmploymentEvent;
  export import IndividualEvent = API.IndividualEvent;
  export import JobCompletionEvent = API.JobCompletionEvent;
  export import PayStatementEvent = API.PayStatementEvent;
  export import PaymentEvent = API.PaymentEvent;
  export import WebhookEvent = API.WebhookEvent;

  export import RequestForwarding = API.RequestForwarding;
  export import RequestForwardingForwardResponse = API.RequestForwardingForwardResponse;
  export import RequestForwardingForwardParams = API.RequestForwardingForwardParams;

  export import Jobs = API.Jobs;

  export import Sandbox = API.Sandbox;

  export import Payroll = API.Payroll;

  export import Connect = API.Connect;

  export import ConnectionStatusType = API.ConnectionStatusType;
  export import OperationSupport = API.OperationSupport;
  export import OperationSupportMatrix = API.OperationSupportMatrix;
  export import Paging = API.Paging;
}

export default Finch;
