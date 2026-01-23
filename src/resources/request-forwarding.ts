// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class RequestForwarding extends APIResource {
  /**
   * The Forward API allows you to make direct requests to an employment system. If
   * Finch's unified API doesn't have a data model that cleanly fits your needs, then
   * Forward allows you to push or pull data models directly against an integration's
   * API.
   */
  forward(
    body: RequestForwardingForwardParams,
    options?: RequestOptions,
  ): APIPromise<RequestForwardingForwardResponse> {
    return this._client.post('/forward', { body, ...options, __security: { bearerAuth: true } });
  }
}

export interface RequestForwardingForwardResponse {
  /**
   * An object containing details of your original forwarded request, for your ease
   * of reference.
   */
  request: RequestForwardingForwardResponse.Request;

  /**
   * The HTTP status code of the forwarded request's response, exactly received from
   * the underlying integration's API. This value will be returned as an integer.
   */
  statusCode: number;

  /**
   * A string representation of the HTTP response body of the forwarded request's
   * response received from the underlying integration's API. This field may be null
   * in the case where the upstream system's response is empty.
   */
  data?: string | null;

  /**
   * The HTTP headers of the forwarded request's response, exactly as received from
   * the underlying integration's API.
   */
  headers?: { [key: string]: unknown } | null;
}

export namespace RequestForwardingForwardResponse {
  /**
   * An object containing details of your original forwarded request, for your ease
   * of reference.
   */
  export interface Request {
    /**
     * The HTTP method that was specified for the forwarded request. Valid values
     * include: `GET` , `POST` , `PUT` , `DELETE` , and `PATCH`.
     */
    method: string;

    /**
     * The URL route path that was specified for the forwarded request.
     */
    route: string;

    /**
     * The body that was specified for the forwarded request.
     */
    data?: string | { [key: string]: unknown } | null;

    /**
     * The HTTP headers that were specified for the forwarded request.
     */
    headers?: { [key: string]: string } | null;

    /**
     * The query parameters that were specified for the forwarded request.
     */
    params?: { [key: string]: unknown } | null;
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
   * The query parameters for the forwarded request. This value must be specified as
   * a valid JSON object rather than a query string.
   */
  params?: { [key: string]: unknown } | null;

  /**
   * The HTTP headers to include on the forwarded request. This value must be
   * specified as an object of key-value pairs. Example:
   * `{"Content-Type": "application/xml", "X-API-Version": "v1" }`
   */
  request_headers?: { [key: string]: unknown } | null;
}

export declare namespace RequestForwarding {
  export {
    type RequestForwardingForwardResponse as RequestForwardingForwardResponse,
    type RequestForwardingForwardParams as RequestForwardingForwardParams,
  };
}
