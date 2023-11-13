// File generated from our OpenAPI spec by Stainless.

/**
 * - `supported`: This operation is supported by both the provider and Finch <br>
 * - `not_supported_by_finch`: This operation is not supported by Finch but
 *   supported by the provider <br>
 * - `not_supported_by_provider`: This operation is not supported by the provider,
 *   so Finch cannot support <br>
 * - `client_access_only`: This behavior is supported by the provider, but only
 *   available to the client and not to Finch
 */
export type OperationSupport =
  | 'supported'
  | 'not_supported_by_finch'
  | 'not_supported_by_provider'
  | 'client_access_only';

export interface OperationSupportMatrix {
  /**
   * - `supported`: This operation is supported by both the provider and Finch <br>
   * - `not_supported_by_finch`: This operation is not supported by Finch but
   *   supported by the provider <br>
   * - `not_supported_by_provider`: This operation is not supported by the provider,
   *   so Finch cannot support <br>
   * - `client_access_only`: This behavior is supported by the provider, but only
   *   available to the client and not to Finch
   */
  create?: OperationSupport;

  /**
   * - `supported`: This operation is supported by both the provider and Finch <br>
   * - `not_supported_by_finch`: This operation is not supported by Finch but
   *   supported by the provider <br>
   * - `not_supported_by_provider`: This operation is not supported by the provider,
   *   so Finch cannot support <br>
   * - `client_access_only`: This behavior is supported by the provider, but only
   *   available to the client and not to Finch
   */
  delete?: OperationSupport;

  /**
   * - `supported`: This operation is supported by both the provider and Finch <br>
   * - `not_supported_by_finch`: This operation is not supported by Finch but
   *   supported by the provider <br>
   * - `not_supported_by_provider`: This operation is not supported by the provider,
   *   so Finch cannot support <br>
   * - `client_access_only`: This behavior is supported by the provider, but only
   *   available to the client and not to Finch
   */
  read?: OperationSupport;

  /**
   * - `supported`: This operation is supported by both the provider and Finch <br>
   * - `not_supported_by_finch`: This operation is not supported by Finch but
   *   supported by the provider <br>
   * - `not_supported_by_provider`: This operation is not supported by the provider,
   *   so Finch cannot support <br>
   * - `client_access_only`: This behavior is supported by the provider, but only
   *   available to the client and not to Finch
   */
  update?: OperationSupport;
}
