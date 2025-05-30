// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { IndividualsPage, type IndividualsPageParams } from '../../pagination';

export class Directory extends APIResource {
  /**
   * Read company directory and organization structure
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const individualInDirectory of client.hris.directory.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query?: DirectoryListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<IndividualsPage, IndividualInDirectory>;
  list(options?: Core.RequestOptions): Core.PagePromise<IndividualsPage, IndividualInDirectory>;
  list(
    query: DirectoryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<IndividualsPage, IndividualInDirectory> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/employer/directory', IndividualsPage, { query, ...options });
  }

  /**
   * @deprecated use `list` instead
   */
  listIndividuals = this.list;
}

export interface IndividualInDirectory {
  /**
   * A stable Finch `id` (UUID v4) for an individual in the company.
   */
  id: string;

  /**
   * The department object.
   */
  department: IndividualInDirectory.Department | null;

  /**
   * The legal first name of the individual.
   */
  first_name: string | null;

  /**
   * `true` if the individual is an active employee or contractor at the company.
   */
  is_active: boolean | null;

  /**
   * The legal last name of the individual.
   */
  last_name: string | null;

  /**
   * The manager object.
   */
  manager: IndividualInDirectory.Manager | null;

  /**
   * The legal middle name of the individual.
   */
  middle_name: string | null;
}

export namespace IndividualInDirectory {
  /**
   * The department object.
   */
  export interface Department {
    /**
     * The name of the department.
     */
    name?: string | null;
  }

  /**
   * The manager object.
   */
  export interface Manager {
    /**
     * A stable Finch `id` (UUID v4) for an individual in the company.
     */
    id: string;
  }
}

export interface DirectoryListParams extends IndividualsPageParams {}

export interface DirectoryListIndividualsParams extends IndividualsPageParams {}

export declare namespace Directory {
  export {
    type IndividualInDirectory as IndividualInDirectory,
    type DirectoryListParams as DirectoryListParams,
    type DirectoryListIndividualsParams as DirectoryListIndividualsParams,
  };
}
