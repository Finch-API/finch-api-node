// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Documents extends APIResource {
  /**
   * **Beta:** This endpoint is in beta and may change. Retrieve a list of
   * company-wide documents.
   *
   * @example
   * ```ts
   * const documents = await client.hris.documents.list();
   * ```
   */
  list(
    query: DocumentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DocumentListResponse> {
    return this._client.get('/employer/documents', { query, ...options });
  }

  /**
   * **Beta:** This endpoint is in beta and may change. Retrieve details of a
   * specific document by its ID.
   *
   * @example
   * ```ts
   * const response = await client.hris.documents.retreive(
   *   'document_id',
   * );
   * ```
   */
  retreive(
    documentID: string,
    query: DocumentRetreiveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DocumentRetreiveResponse> {
    return this._client.get(path`/employer/documents/${documentID}`, { query, ...options });
  }
}

export interface DocumentResponse {
  /**
   * A stable Finch id for the document.
   */
  id: string;

  /**
   * The ID of the individual associated with the document. This will be null for
   * employer-level documents.
   */
  individual_id: string | null;

  /**
   * The type of document.
   */
  type: 'w4_2020' | 'w4_2005';

  /**
   * A URL to access the document. Format:
   * `https://api.tryfinch.com/employer/documents/:document_id`.
   */
  url: string;

  /**
   * The year the document applies to, if available.
   */
  year: number;
}

/**
 * A 2005 version of the W-4 tax form containing information on an individual's
 * filing status, dependents, and withholding details.
 */
export interface W42005 {
  /**
   * Detailed information specific to the 2005 W4 form.
   */
  data: W42005.Data;

  /**
   * Specifies the form type, indicating that this document is a 2005 W4 form.
   */
  type: 'w4_2005';

  /**
   * The tax year this W4 document applies to.
   */
  year: number;
}

export namespace W42005 {
  /**
   * Detailed information specific to the 2005 W4 form.
   */
  export interface Data {
    /**
     * Additional withholding amount (in cents).
     */
    additional_withholding: number;

    /**
     * Indicates exemption status from federal tax withholding.
     */
    exemption: 'exempt' | 'non_exempt' | null;

    /**
     * The individual's filing status for tax purposes.
     */
    filing_status: 'married' | 'married_but_withhold_at_higher_single_rate' | 'single' | null;

    /**
     * The unique identifier for the individual associated with this 2005 W4 form.
     */
    individual_id: string;

    /**
     * Total number of allowances claimed (in cents).
     */
    total_number_of_allowances: number;
  }
}

/**
 * A 2020 version of the W-4 tax form containing information on an individual's
 * filing status, dependents, and withholding details.
 */
export interface W42020 {
  /**
   * Detailed information specific to the 2020 W4 form.
   */
  data: W42020.Data;

  /**
   * Specifies the form type, indicating that this document is a 2020 W4 form.
   */
  type: 'w4_2020';

  /**
   * The tax year this W4 document applies to.
   */
  year: number;
}

export namespace W42020 {
  /**
   * Detailed information specific to the 2020 W4 form.
   */
  export interface Data {
    /**
     * Amount claimed for dependents other than qualifying children under 17 (in
     * cents).
     */
    amount_for_other_dependents: number;

    /**
     * Amount claimed for dependents under 17 years old (in cents).
     */
    amount_for_qualifying_children_under_17: number;

    /**
     * Deductible expenses (in cents).
     */
    deductions: number;

    /**
     * Additional withholding amount (in cents).
     */
    extra_withholding: number;

    /**
     * The individual's filing status for tax purposes.
     */
    filing_status:
      | 'head_of_household'
      | 'married_filing_jointly_or_qualifying_surviving_spouse'
      | 'single_or_married_filing_separately'
      | null;

    /**
     * The unique identifier for the individual associated with this document.
     */
    individual_id: string;

    /**
     * Additional income from sources outside of primary employment (in cents).
     */
    other_income: number;

    /**
     * Total amount claimed for dependents and other credits (in cents).
     */
    total_claim_dependent_and_other_credits: number;
  }
}

export interface DocumentListResponse {
  documents: Array<DocumentResponse>;

  paging: Shared.Paging;
}

/**
 * A 2020 version of the W-4 tax form containing information on an individual's
 * filing status, dependents, and withholding details.
 */
export type DocumentRetreiveResponse = W42020 | W42005;

export interface DocumentListParams {
  /**
   * The entity IDs to specify which entities' data to access.
   */
  entity_ids?: Array<string>;

  /**
   * Comma-delimited list of stable Finch uuids for each individual. If empty,
   * defaults to all individuals
   */
  individual_ids?: Array<string>;

  /**
   * Number of documents to return (defaults to all)
   */
  limit?: number;

  /**
   * Index to start from (defaults to 0)
   */
  offset?: number;

  /**
   * Comma-delimited list of document types to filter on. If empty, defaults to all
   * types
   */
  types?: Array<'w4_2020' | 'w4_2005'>;
}

export interface DocumentRetreiveParams {
  /**
   * The entity IDs to specify which entities' data to access.
   */
  entity_ids?: Array<string>;
}

export declare namespace Documents {
  export {
    type DocumentResponse as DocumentResponse,
    type W42005 as W42005,
    type W42020 as W42020,
    type DocumentListResponse as DocumentListResponse,
    type DocumentRetreiveResponse as DocumentRetreiveResponse,
    type DocumentListParams as DocumentListParams,
    type DocumentRetreiveParams as DocumentRetreiveParams,
  };
}
