// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as API from './';
import { IndividualsPage, IndividualsPageParams } from '~/pagination';

export class Directory extends APIResource {
  /**
   * Read company directory and organization structure
   */
  listIndividuals(
    query?: DirectoryListIndividualsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<IndividualsPage>;
  listIndividuals(options?: Core.RequestOptions): Core.PagePromise<IndividualsPage>;
  listIndividuals(
    query: DirectoryListIndividualsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<IndividualsPage> {
    if (isRequestOptions(query)) {
      return this.listIndividuals({}, query);
    }
    return this.getAPIList('/employer/directory', IndividualsPage, { query, ...options });
  }
}

export interface IndividualInDirectory {
  /**
   * The department object.
   */
  department?: IndividualInDirectory.Department | null;

  /**
   * The legal first name of the individual.
   */
  first_name?: string | null;

  /**
   * A stable Finch id (UUID v4) for an individual in the company.
   */
  id?: string;

  /**
   * `true` if the individual is an active employee or contractor at the company.
   */
  is_active?: boolean | null;

  /**
   * The legal last name of the individual.
   */
  last_name?: string | null;

  /**
   * The manager object.
   */
  manager?: IndividualInDirectory.Manager | null;

  /**
   * The legal middle name of the individual.
   */
  middle_name?: string | null;
}

export namespace IndividualInDirectory {
  /**
   * The manager object.
   */
  export interface Manager {
    /**
     * A stable Finch `id` (UUID v4) for an individual in the company.
     */
    id?: string;
  }

  /**
   * The department object.
   */
  export interface Department {
    /**
     * The name of the department.
     */
    name?: string | null;
  }
}

export interface DirectoryListIndividualsParams extends IndividualsPageParams {}

export namespace Directory {
  export import IndividualInDirectory = API.IndividualInDirectory;
  export import DirectoryListIndividualsParams = API.DirectoryListIndividualsParams;
}
