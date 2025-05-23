// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as RulesAPI from './rules';
import {
  RuleCreateParams,
  RuleCreateResponse,
  RuleDeleteResponse,
  RuleListResponse,
  RuleListResponsesPage,
  RuleUpdateParams,
  RuleUpdateResponse,
  Rules,
} from './rules';
import { ResponsesPage } from '../../../../pagination';

export class PayStatementItem extends APIResource {
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);

  /**
   * **Beta:** this endpoint currently serves employers onboarded after March 4th and
   * historical support will be added soon Retrieve a list of detailed pay statement
   * items for the access token's connection account.
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
    query?: PayStatementItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PayStatementItemListResponsesPage, PayStatementItemListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<PayStatementItemListResponsesPage, PayStatementItemListResponse>;
  list(
    query: PayStatementItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PayStatementItemListResponsesPage, PayStatementItemListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/employer/pay-statement-item', PayStatementItemListResponsesPage, {
      query,
      ...options,
    });
  }
}

export class PayStatementItemListResponsesPage extends ResponsesPage<PayStatementItemListResponse> {}

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
    metadata: Record<string, unknown> | null;

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

PayStatementItem.PayStatementItemListResponsesPage = PayStatementItemListResponsesPage;
PayStatementItem.Rules = Rules;
PayStatementItem.RuleListResponsesPage = RuleListResponsesPage;

export declare namespace PayStatementItem {
  export {
    type PayStatementItemListResponse as PayStatementItemListResponse,
    PayStatementItemListResponsesPage as PayStatementItemListResponsesPage,
    type PayStatementItemListParams as PayStatementItemListParams,
  };

  export {
    Rules as Rules,
    type RuleCreateResponse as RuleCreateResponse,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    RuleListResponsesPage as RuleListResponsesPage,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
  };
}
