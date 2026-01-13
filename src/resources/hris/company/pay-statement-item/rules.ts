// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { PagePromise, ResponsesPage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Rules extends APIResource {
  /**
   * Custom rules can be created to associate specific attributes to pay statement
   * items depending on the use case. For example, pay statement items that meet
   * certain conditions can be labeled as a pre-tax 401k. This metadata can be
   * retrieved where pay statement item information is available.
   *
   * @example
   * ```ts
   * const rule =
   *   await client.hris.company.payStatementItem.rules.create();
   * ```
   */
  create(
    params: RuleCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RuleCreateResponse> {
    const { entity_ids, ...body } = params ?? {};
    return this._client.post('/employer/pay-statement-item/rule', {
      query: { entity_ids },
      body,
      ...options,
    });
  }

  /**
   * Update a rule for a pay statement item.
   *
   * @example
   * ```ts
   * const rule =
   *   await client.hris.company.payStatementItem.rules.update(
   *     'rule_id',
   *   );
   * ```
   */
  update(
    ruleID: string,
    params: RuleUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RuleUpdateResponse> {
    const { entity_ids, ...body } = params ?? {};
    return this._client.put(path`/employer/pay-statement-item/rule/${ruleID}`, {
      query: { entity_ids },
      body,
      ...options,
    });
  }

  /**
   * List all rules of a connection account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ruleListResponse of client.hris.company.payStatementItem.rules.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: RuleListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RuleListResponsesPage, RuleListResponse> {
    return this._client.getAPIList('/employer/pay-statement-item/rule', ResponsesPage<RuleListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Delete a rule for a pay statement item.
   *
   * @example
   * ```ts
   * const rule =
   *   await client.hris.company.payStatementItem.rules.delete(
   *     'rule_id',
   *   );
   * ```
   */
  delete(
    ruleID: string,
    params: RuleDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RuleDeleteResponse> {
    const { entity_ids } = params ?? {};
    return this._client.delete(path`/employer/pay-statement-item/rule/${ruleID}`, {
      query: { entity_ids },
      ...options,
    });
  }
}

export type RuleListResponsesPage = ResponsesPage<RuleListResponse>;

export interface RuleCreateResponse {
  /**
   * Finch id (uuidv4) for the rule.
   */
  id?: string;

  /**
   * Specifies the fields to be applied when the condition is met.
   */
  attributes?: RuleCreateResponse.Attributes;

  conditions?: Array<RuleCreateResponse.Condition>;

  /**
   * The datetime when the rule was created.
   */
  created_at?: string;

  /**
   * Specifies when the rules should stop applying rules based on the date.
   */
  effective_end_date?: string | null;

  /**
   * Specifies when the rule should begin applying based on the date.
   */
  effective_start_date?: string | null;

  /**
   * The entity type to which the rule is applied.
   */
  entity_type?: 'pay_statement_item';

  /**
   * The priority of the rule.
   */
  priority?: number;

  /**
   * The datetime when the rule was last updated.
   */
  updated_at?: string;
}

export namespace RuleCreateResponse {
  /**
   * Specifies the fields to be applied when the condition is met.
   */
  export interface Attributes {
    /**
     * The metadata to be attached in the entity. It is a key-value pairs where the
     * values can be of any type (string, number, boolean, object, array, etc.).
     */
    metadata?: { [key: string]: unknown };
  }

  export interface Condition {
    /**
     * The field to be checked in the rule.
     */
    field?: string;

    /**
     * The operator to be used in the rule.
     */
    operator?: 'equals';

    /**
     * The value of the field to be checked in the rule.
     */
    value?: string;
  }
}

export interface RuleUpdateResponse {
  /**
   * Finch id (uuidv4) for the rule.
   */
  id?: string;

  /**
   * Specifies the fields to be applied when the condition is met.
   */
  attributes?: RuleUpdateResponse.Attributes;

  conditions?: Array<RuleUpdateResponse.Condition>;

  /**
   * The datetime when the rule was created.
   */
  created_at?: string;

  /**
   * Specifies when the rules should stop applying rules based on the date.
   */
  effective_end_date?: string | null;

  /**
   * Specifies when the rule should begin applying based on the date.
   */
  effective_start_date?: string | null;

  /**
   * The entity type to which the rule is applied.
   */
  entity_type?: 'pay_statement_item';

  /**
   * The priority of the rule.
   */
  priority?: number;

  /**
   * The datetime when the rule was last updated.
   */
  updated_at?: string;
}

export namespace RuleUpdateResponse {
  /**
   * Specifies the fields to be applied when the condition is met.
   */
  export interface Attributes {
    /**
     * The metadata to be attached in the entity. It is a key-value pairs where the
     * values can be of any type (string, number, boolean, object, array, etc.).
     */
    metadata?: { [key: string]: unknown };
  }

  export interface Condition {
    /**
     * The field to be checked in the rule.
     */
    field?: string;

    /**
     * The operator to be used in the rule.
     */
    operator?: 'equals';

    /**
     * The value of the field to be checked in the rule.
     */
    value?: string;
  }
}

export interface RuleListResponse {
  /**
   * Finch id (uuidv4) for the rule.
   */
  id?: string;

  /**
   * Specifies the fields to be applied when the condition is met.
   */
  attributes?: RuleListResponse.Attributes;

  conditions?: Array<RuleListResponse.Condition>;

  /**
   * The datetime when the rule was created.
   */
  created_at?: string;

  /**
   * Specifies when the rules should stop applying rules based on the date.
   */
  effective_end_date?: string | null;

  /**
   * Specifies when the rule should begin applying based on the date.
   */
  effective_start_date?: string | null;

  /**
   * The entity type to which the rule is applied.
   */
  entity_type?: 'pay_statement_item';

  /**
   * The priority of the rule.
   */
  priority?: number;

  /**
   * The datetime when the rule was last updated.
   */
  updated_at?: string;
}

export namespace RuleListResponse {
  /**
   * Specifies the fields to be applied when the condition is met.
   */
  export interface Attributes {
    /**
     * The metadata to be attached in the entity. It is a key-value pairs where the
     * values can be of any type (string, number, boolean, object, array, etc.).
     */
    metadata?: { [key: string]: unknown };
  }

  export interface Condition {
    /**
     * The field to be checked in the rule.
     */
    field?: string;

    /**
     * The operator to be used in the rule.
     */
    operator?: 'equals';

    /**
     * The value of the field to be checked in the rule.
     */
    value?: string;
  }
}

export interface RuleDeleteResponse {
  /**
   * Finch id (uuidv4) for the rule.
   */
  id?: string;

  /**
   * Specifies the fields to be applied when the condition is met.
   */
  attributes?: RuleDeleteResponse.Attributes;

  conditions?: Array<RuleDeleteResponse.Condition>;

  /**
   * The datetime when the rule was created.
   */
  created_at?: string;

  /**
   * The datetime when the rule was deleted.
   */
  deleted_at?: string;

  /**
   * Specifies when the rules should stop applying rules based on the date.
   */
  effective_end_date?: string | null;

  /**
   * Specifies when the rule should begin applying based on the date.
   */
  effective_start_date?: string | null;

  /**
   * The entity type to which the rule is applied.
   */
  entity_type?: 'pay_statement_item';

  /**
   * The priority of the rule.
   */
  priority?: number;

  /**
   * The datetime when the rule was last updated.
   */
  updated_at?: string;
}

export namespace RuleDeleteResponse {
  /**
   * Specifies the fields to be applied when the condition is met.
   */
  export interface Attributes {
    /**
     * The metadata to be attached in the entity. It is a key-value pairs where the
     * values can be of any type (string, number, boolean, object, array, etc.).
     */
    metadata?: { [key: string]: unknown };
  }

  export interface Condition {
    /**
     * The field to be checked in the rule.
     */
    field?: string;

    /**
     * The operator to be used in the rule.
     */
    operator?: 'equals';

    /**
     * The value of the field to be checked in the rule.
     */
    value?: string;
  }
}

export interface RuleCreateParams {
  /**
   * Query param: The entity IDs to create the rule for.
   */
  entity_ids?: Array<string>;

  /**
   * Body param: Specifies the fields to be applied when the condition is met.
   */
  attributes?: RuleCreateParams.Attributes;

  /**
   * Body param
   */
  conditions?: Array<RuleCreateParams.Condition>;

  /**
   * Body param: Specifies when the rules should stop applying rules based on the
   * date.
   */
  effective_end_date?: string | null;

  /**
   * Body param: Specifies when the rule should begin applying based on the date.
   */
  effective_start_date?: string | null;

  /**
   * Body param: The entity type to which the rule is applied.
   */
  entity_type?: 'pay_statement_item';
}

export namespace RuleCreateParams {
  /**
   * Specifies the fields to be applied when the condition is met.
   */
  export interface Attributes {
    /**
     * The metadata to be attached in the entity. It is a key-value pairs where the
     * values can be of any type (string, number, boolean, object, array, etc.).
     */
    metadata?: { [key: string]: unknown };
  }

  export interface Condition {
    /**
     * The field to be checked in the rule.
     */
    field?: string;

    /**
     * The operator to be used in the rule.
     */
    operator?: 'equals';

    /**
     * The value of the field to be checked in the rule.
     */
    value?: string;
  }
}

export interface RuleUpdateParams {
  /**
   * Query param: The entity IDs to update the rule for.
   */
  entity_ids?: Array<string>;

  /**
   * Body param
   */
  optionalProperty?: unknown;
}

export interface RuleListParams {
  /**
   * The entity IDs to retrieve rules for.
   */
  entity_ids?: Array<string>;
}

export interface RuleDeleteParams {
  /**
   * The entity IDs to delete the rule for.
   */
  entity_ids?: Array<string>;
}

export declare namespace Rules {
  export {
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
