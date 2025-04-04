// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import { ResponsesPage } from '../../../../pagination';

export class Rules extends APIResource {
  /**
   * **Beta:** this endpoint currently serves employers onboarded after March 4th and
   * historical support will be added soon Custom rules can be created to associate
   * specific attributes to pay statement items depending on the use case. For
   * example, pay statement items that meet certain conditions can be labeled as a
   * pre-tax 401k. This metadata can be retrieved where pay statement item
   * information is available.
   */
  create(body?: RuleCreateParams, options?: Core.RequestOptions): Core.APIPromise<RuleCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<RuleCreateResponse>;
  create(
    body: RuleCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/employer/pay-statement-item/rule', { body, ...options });
  }

  /**
   * **Beta:** this endpoint currently serves employers onboarded after March 4th and
   * historical support will be added soon Update a rule for a pay statement item.
   */
  update(
    ruleId: string,
    body?: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse>;
  update(ruleId: string, options?: Core.RequestOptions): Core.APIPromise<RuleUpdateResponse>;
  update(
    ruleId: string,
    body: RuleUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(ruleId, {}, body);
    }
    return this._client.put(`/employer/pay-statement-item/rule/${ruleId}`, { body, ...options });
  }

  /**
   * **Beta:** this endpoint currently serves employers onboarded after March 4th and
   * historical support will be added soon List all rules of a connection account.
   */
  list(options?: Core.RequestOptions): Core.PagePromise<RuleListResponsesPage, RuleListResponse> {
    return this._client.getAPIList('/employer/pay-statement-item/rule', RuleListResponsesPage, options);
  }

  /**
   * **Beta:** this endpoint currently serves employers onboarded after March 4th and
   * historical support will be added soon Delete a rule for a pay statement item.
   */
  delete(ruleId: string, options?: Core.RequestOptions): Core.APIPromise<RuleDeleteResponse> {
    return this._client.delete(`/employer/pay-statement-item/rule/${ruleId}`, options);
  }
}

export class RuleListResponsesPage extends ResponsesPage<RuleListResponse> {}

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
    metadata?: Record<string, unknown>;
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
    metadata?: Record<string, unknown>;
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
    metadata?: Record<string, unknown>;
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
    metadata?: Record<string, unknown>;
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
   * Specifies the fields to be applied when the condition is met.
   */
  attributes?: RuleCreateParams.Attributes;

  conditions?: Array<RuleCreateParams.Condition>;

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
    metadata?: Record<string, unknown>;
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
  optionalProperty?: unknown;
}

Rules.RuleListResponsesPage = RuleListResponsesPage;

export declare namespace Rules {
  export {
    type RuleCreateResponse as RuleCreateResponse,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    RuleListResponsesPage as RuleListResponsesPage,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
  };
}
