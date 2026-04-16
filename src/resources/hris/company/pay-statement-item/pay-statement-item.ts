// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RulesAPI from './rules';
import {
  RuleCreateParams,
  RuleCreateResponse,
  RuleDeleteParams,
  RuleDeleteResponse,
  RuleListParams,
  RuleListResponse,
  RuleListResponsesPage,
  RuleUpdateParams,
  RuleUpdateResponse,
  Rules,
} from './rules';
import { PagePromise, ResponsesPage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';

export class PayStatementItem extends APIResource {
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);

  /**
   * Retrieve a list of detailed pay statement items for the access token's
   * connection account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const payStatementItemListResponse of client.hris.company.payStatementItem.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PayStatementItemListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PayStatementItemListResponsesPage, PayStatementItemListResponse> {
    return this._client.getAPIList(
      '/employer/pay-statement-item',
      ResponsesPage<PayStatementItemListResponse>,
      { query, ...options, __security: { bearerAuth: true } },
    );
  }
}

export type PayStatementItemListResponsesPage = ResponsesPage<PayStatementItemListResponse>;

export interface PayStatementItemListResponse {
  /**
   * The attributes of the pay statement item.
   */
  attributes: PayStatementItemListResponse.Attributes;

  /**
   * The category of the pay statement item.
   */
  category: 'earnings' | 'taxes' | 'employee_deductions' | 'employer_contributions';

  /**
   * The name of the pay statement item.
   */
  name: string;
}

export namespace PayStatementItemListResponse {
  /**
   * The attributes of the pay statement item.
   */
  export interface Attributes {
    /**
     * The metadata of the pay statement item derived by the rules engine if available.
     * Each attribute will be a key-value pair defined by a rule.
     */
    metadata: { [key: string]: unknown } | null;

    /**
     * `true` if the amount is paid by the employers. This field is only available for
     * taxes.
     */
    employer?: boolean | null;

    /**
     * `true` if the pay statement item is pre-tax. This field is only available for
     * employee deductions.
     */
    pre_tax?: boolean | null;

    /**
     * The type of the pay statement item.
     */
    type?: string | null;
  }
}

export interface PayStatementItemListParams {
  /**
   * Comma-delimited list of pay statement item categories to filter on. If empty,
   * defaults to all categories.
   */
  categories?: Array<'earnings' | 'taxes' | 'employee_deductions' | 'employer_contributions'>;

  /**
   * The end date to retrieve pay statement items by via their last seen pay date in
   * `YYYY-MM-DD` format.
   */
  end_date?: string;

  /**
   * The entity IDs to specify which entities' data to access.
   */
  entity_ids?: Array<string>;

  /**
   * Case-insensitive partial match search by pay statement item name.
   */
  name?: string;

  /**
   * The start date to retrieve pay statement items by via their last seen pay date
   * (inclusive) in `YYYY-MM-DD` format.
   */
  start_date?: string;

  /**
   * String search by pay statement item type.
   */
  type?: string;
}

PayStatementItem.Rules = Rules;

export declare namespace PayStatementItem {
  export {
    type PayStatementItemListResponse as PayStatementItemListResponse,
    type PayStatementItemListResponsesPage as PayStatementItemListResponsesPage,
    type PayStatementItemListParams as PayStatementItemListParams,
  };

  export {
    Rules as Rules,
    type RuleCreateResponse as RuleCreateResponse,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleListResponsesPage as RuleListResponsesPage,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
  };
}
