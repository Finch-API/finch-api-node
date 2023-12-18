// File generated from our OpenAPI spec by Stainless.

/**
 * - `supported`: This operation is supported by both the provider and Finch
 *
 * - `not_supported_by_finch`: This operation is not supported by Finch but
 *   supported by the provider
 *
 * - `not_supported_by_provider`: This operation is not supported by the provider,
 *   so Finch cannot support
 *
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
   * - `supported`: This operation is supported by both the provider and Finch
   *
   * - `not_supported_by_finch`: This operation is not supported by Finch but
   *   supported by the provider
   *
   * - `not_supported_by_provider`: This operation is not supported by the provider,
   *   so Finch cannot support
   *
   * - `client_access_only`: This behavior is supported by the provider, but only
   *   available to the client and not to Finch
   */
  create?: OperationSupport;

  /**
   * - `supported`: This operation is supported by both the provider and Finch
   *
   * - `not_supported_by_finch`: This operation is not supported by Finch but
   *   supported by the provider
   *
   * - `not_supported_by_provider`: This operation is not supported by the provider,
   *   so Finch cannot support
   *
   * - `client_access_only`: This behavior is supported by the provider, but only
   *   available to the client and not to Finch
   */
  delete?: OperationSupport;

  /**
   * - `supported`: This operation is supported by both the provider and Finch
   *
   * - `not_supported_by_finch`: This operation is not supported by Finch but
   *   supported by the provider
   *
   * - `not_supported_by_provider`: This operation is not supported by the provider,
   *   so Finch cannot support
   *
   * - `client_access_only`: This behavior is supported by the provider, but only
   *   available to the client and not to Finch
   */
  read?: OperationSupport;

  /**
   * - `supported`: This operation is supported by both the provider and Finch
   *
   * - `not_supported_by_finch`: This operation is not supported by Finch but
   *   supported by the provider
   *
   * - `not_supported_by_provider`: This operation is not supported by the provider,
   *   so Finch cannot support
   *
   * - `client_access_only`: This behavior is supported by the provider, but only
   *   available to the client and not to Finch
   */
  update?: OperationSupport;
}

export interface Paging {
  /**
   * The total number of elements for the entire query (not just the given page)
   */
  count?: number;

  /**
   * The current start index of the returned list of elements
   */
  offset?: number;
}
