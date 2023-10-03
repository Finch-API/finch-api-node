// File generated from our OpenAPI spec by Stainless.

import * as Core from '@tryfinch/finch-api/core';
import { APIResource } from '@tryfinch/finch-api/resource';
import * as API from './index';

export class RequestForwarding extends APIResource {
  /**
   * The Forward API allows you to make direct requests to an employment system.
   */
  forward(
    body: RequestForwardingForwardParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RequestForwardingForwardResponse> {
    return this.post('/forward', { body, ...options });
  }
}

export interface RequestForwardingForwardResponse {
  /**
   * A string representation of the HTTP response body of the forwarded request’s
   * response received from the underlying integration’s API. This field may be null
   * in the case where the upstream system’s response is empty.
   */
  data: string | null;

  /**
   * The HTTP headers of the forwarded request’s response, exactly as received from
   * the underlying integration’s API.
   */
  headers: unknown | null;

  /**
   * An object containing details of your original forwarded request, for your ease
   * of reference.
   */
  request: RequestForwardingForwardResponse.Request;

  /**
   * The HTTP status code of the forwarded request’s response, exactly received from
   * the underlying integration’s API. This value will be returned as an integer.
   */
  statusCode: number;
}

export namespace RequestForwardingForwardResponse {
  /**
   * An object containing details of your original forwarded request, for your ease
   * of reference.
   */
  export interface Request {
    /**
     * The body that was specified for the forwarded request. If a value was not
     * specified in the original request, this value will be returned as null ;
     * otherwise, this value will always be returned as a string.
     */
    data: string | null;

    /**
     * The specified HTTP headers that were included in the forwarded request. If no
     * headers were specified, this will be returned as `null`.
     */
    headers: unknown | null;

    /**
     * The HTTP method that was specified for the forwarded request. Valid values
     * include: `GET` , `POST` , `PUT` , `DELETE` , and `PATCH`.
     */
    method: string;

    /**
     * The query parameters that were included in the forwarded request. If no query
     * parameters were specified, this will be returned as `null`.
     */
    params: unknown | null;

    /**
     * The URL route path that was specified for the forwarded request.
     */
    route: string;
  }
}

export interface RequestForwardingForwardParams {
  /**
   * The HTTP method for the forwarded request. Valid values include: `GET` , `POST`
   * , `PUT` , `DELETE` , and `PATCH`.
   */
  method: string;

  /**
   * The URL route path for the forwarded request. This value must begin with a
   * forward-slash ( / ) and may only contain alphanumeric characters, hyphens, and
   * underscores.
   */
  route: string;

  /**
   * The body for the forwarded request. This value must be specified as either a
   * string or a valid JSON object.
   */
  data?: string | null;

  /**
   * The HTTP headers to include on the forwarded request. This value must be
   * specified as an object of key-value pairs. Example:
   * `{"Content-Type": "application/xml", "X-API-Version": "v1" }`
   */
  headers?: unknown | null;

  /**
   * The query parameters for the forwarded request. This value must be specified as
   * a valid JSON object rather than a query string.
   */
  params?: unknown | null;
}

export namespace RequestForwarding {
  export import RequestForwardingForwardResponse = API.RequestForwardingForwardResponse;
  export import RequestForwardingForwardParams = API.RequestForwardingForwardParams;
}
