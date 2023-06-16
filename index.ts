// File generated from our OpenAPI spec by Stainless.

import qs from 'qs';
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources';
import * as Errors from '~/error';
import type { Agent } from 'http';
import * as FileFromPath from 'formdata-node/file-from-path';

type Config = {
  /**
   * Set it to null if you want to send unauthenticated requests.
   */
  accessToken?: string | null;
  baseURL?: string;
  timeout?: number;
  httpAgent?: Agent;
  maxRetries?: number;
  defaultHeaders?: Core.Headers;
  clientId?: string | null;
  clientSecret?: string | null;
};

/** Instantiate the API Client. */
export class Finch extends Core.APIClient {
  accessToken: string | null;
  clientId?: string | null;
  clientSecret?: string | null;

  private _options: Config;

  constructor(config?: Config) {
    const options: Config = {
      accessToken: null,
      baseURL: 'https://api.tryfinch.com',
      ...config,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
    });
    this.accessToken = options.accessToken || null;
    this._options = options;

    this.clientId = config?.clientId || process.env['FINCH_CLIENT_ID'] || null;
    this.clientSecret = config?.clientSecret || process.env['FINCH_CLIENT_SECRET'] || null;
  }

  ats: API.ATS = new API.ATS(this);
  hris: API.HRIS = new API.HRIS(this);
  providers: API.Providers = new API.Providers(this);
  account: API.Account = new API.Account(this);

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
    url.search = qs.stringify(
      {
        client_id: this.clientId,
        products: products,
        redirect_uri: redirectUri,
        sandbox: sandbox,
      },
      this.qsOptions(),
    );
    return url.toString();
  }

  protected override defaultHeaders(): Core.Headers {
    return {
      ...super.defaultHeaders(),
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

  protected override authHeaders(): Core.Headers {
    if (this.accessToken == null) {
      return {};
    }
    return { Authorization: `Bearer ${this.accessToken}` };
  }

  protected override qsOptions(): qs.IStringifyOptions {
    return { arrayFormat: 'comma' };
  }

  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
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
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import fileFromPath = FileFromPath.fileFromPath;

export namespace Finch {
  // Helper functions
  export import fileFromPath = FileFromPath.fileFromPath;

  export import SinglePage = Pagination.SinglePage;
  export import SinglePageResponse = Pagination.SinglePageResponse;

  export import ResponsesPage = Pagination.ResponsesPage;
  export import ResponsesPageResponse = Pagination.ResponsesPageResponse;

  export import IndividualsPage = Pagination.IndividualsPage;
  export import IndividualsPageParams = Pagination.IndividualsPageParams;
  export import IndividualsPageResponse = Pagination.IndividualsPageResponse;

  export import CandidatesPage = Pagination.CandidatesPage;
  export import CandidatesPageParams = Pagination.CandidatesPageParams;
  export import CandidatesPageResponse = Pagination.CandidatesPageResponse;

  export import ApplicationsPage = Pagination.ApplicationsPage;
  export import ApplicationsPageParams = Pagination.ApplicationsPageParams;
  export import ApplicationsPageResponse = Pagination.ApplicationsPageResponse;

  export import JobsPage = Pagination.JobsPage;
  export import JobsPageParams = Pagination.JobsPageParams;
  export import JobsPageResponse = Pagination.JobsPageResponse;

  export import OffersPage = Pagination.OffersPage;
  export import OffersPageParams = Pagination.OffersPageParams;
  export import OffersPageResponse = Pagination.OffersPageResponse;

  export import Income = API.Income;
  export import Location = API.Location;
  export import Money = API.Money;
  export import Paging = API.Paging;

  export import Provider = API.Provider;
  export import ProvidersSinglePage = API.ProvidersSinglePage;

  export import DisconnectResponse = API.DisconnectResponse;
  export import Introspection = API.Introspection;
}

exports = module.exports = Finch;
export default Finch;
