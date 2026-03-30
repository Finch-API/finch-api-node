// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'create',
    endpoint: '/auth/token',
    httpMethod: 'post',
    summary: 'Create Access Token',
    description: 'Exchange the authorization code for an access token',
    stainlessPath: '(resource) access_tokens > (method) create',
    qualified: 'client.accessTokens.create',
    params: ['code: string;', 'client_id?: string;', 'client_secret?: string;', 'redirect_uri?: string;'],
    response:
      "{ access_token: string; client_type: 'development' | 'production' | 'sandbox'; connection_id: string; connection_type: 'finch' | 'provider'; entity_ids: string[]; products: string[]; provider_id: string; token_type: string; account_id?: string; company_id?: string; customer_id?: string; customer_name?: string; }",
    markdown:
      "## create\n\n`client.accessTokens.create(code: string, client_id?: string, client_secret?: string, redirect_uri?: string): { access_token: string; client_type: 'development' | 'production' | 'sandbox'; connection_id: string; connection_type: 'finch' | 'provider'; entity_ids: string[]; products: string[]; provider_id: string; token_type: string; account_id?: string; company_id?: string; customer_id?: string; customer_name?: string; }`\n\n**post** `/auth/token`\n\nExchange the authorization code for an access token\n\n### Parameters\n\n- `code: string`\n  The authorization code received from the authorization server\n\n- `client_id?: string`\n  The client ID for your application\n\n- `client_secret?: string`\n  The client secret for your application\n\n- `redirect_uri?: string`\n  The redirect URI used in the authorization request (optional)\n\n### Returns\n\n- `{ access_token: string; client_type: 'development' | 'production' | 'sandbox'; connection_id: string; connection_type: 'finch' | 'provider'; entity_ids: string[]; products: string[]; provider_id: string; token_type: string; account_id?: string; company_id?: string; customer_id?: string; customer_name?: string; }`\n\n  - `access_token: string`\n  - `client_type: 'development' | 'production' | 'sandbox'`\n  - `connection_id: string`\n  - `connection_type: 'finch' | 'provider'`\n  - `entity_ids: string[]`\n  - `products: string[]`\n  - `provider_id: string`\n  - `token_type: string`\n  - `account_id?: string`\n  - `company_id?: string`\n  - `customer_id?: string`\n  - `customer_name?: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst createAccessTokenResponse = await client.accessTokens.create({ code: 'code' });\n\nconsole.log(createAccessTokenResponse);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/employer/company',
    httpMethod: 'get',
    summary: 'Company',
    description: 'Read basic company data',
    stainlessPath: '(resource) hris.company > (method) retrieve',
    qualified: 'client.hris.company.retrieve',
    params: ['entity_ids?: string[];'],
    response:
      "{ id: string; accounts: { account_name: string; account_number: string; account_type: 'checking' | 'savings'; institution_name: string; routing_number: string; }[]; departments: { name: string; parent: { name: string; }; }[]; ein: string; entity: { subtype: 's_corporation' | 'c_corporation' | 'b_corporation'; type: 'llc' | 'lp' | 'corporation' | 'sole_proprietor' | 'non_profit' | 'partnership' | 'cooperative'; }; legal_name: string; locations: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }[]; primary_email: string; primary_phone_number: string; }",
    markdown:
      "## retrieve\n\n`client.hris.company.retrieve(entity_ids?: string[]): { id: string; accounts: object[]; departments: object[]; ein: string; entity: object; legal_name: string; locations: location[]; primary_email: string; primary_phone_number: string; }`\n\n**get** `/employer/company`\n\nRead basic company data\n\n### Parameters\n\n- `entity_ids?: string[]`\n  The entity IDs to specify which entities' data to access.\n\n### Returns\n\n- `{ id: string; accounts: { account_name: string; account_number: string; account_type: 'checking' | 'savings'; institution_name: string; routing_number: string; }[]; departments: { name: string; parent: { name: string; }; }[]; ein: string; entity: { subtype: 's_corporation' | 'c_corporation' | 'b_corporation'; type: 'llc' | 'lp' | 'corporation' | 'sole_proprietor' | 'non_profit' | 'partnership' | 'cooperative'; }; legal_name: string; locations: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }[]; primary_email: string; primary_phone_number: string; }`\n\n  - `id: string`\n  - `accounts: { account_name: string; account_number: string; account_type: 'checking' | 'savings'; institution_name: string; routing_number: string; }[]`\n  - `departments: { name: string; parent: { name: string; }; }[]`\n  - `ein: string`\n  - `entity: { subtype: 's_corporation' | 'c_corporation' | 'b_corporation'; type: 'llc' | 'lp' | 'corporation' | 'sole_proprietor' | 'non_profit' | 'partnership' | 'cooperative'; }`\n  - `legal_name: string`\n  - `locations: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }[]`\n  - `primary_email: string`\n  - `primary_phone_number: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst company = await client.hris.company.retrieve();\n\nconsole.log(company);\n```",
  },
  {
    name: 'list',
    endpoint: '/employer/pay-statement-item',
    httpMethod: 'get',
    summary: 'Pay Statement Item',
    description:
      "Retrieve a list of detailed pay statement items for the access token's connection account.\n",
    stainlessPath: '(resource) hris.company.pay_statement_item > (method) list',
    qualified: 'client.hris.company.payStatementItem.list',
    params: [
      "categories?: 'earnings' | 'taxes' | 'employee_deductions' | 'employer_contributions'[];",
      'end_date?: string;',
      'entity_ids?: string[];',
      'name?: string;',
      'start_date?: string;',
      'type?: string;',
    ],
    response:
      "{ attributes: { metadata: object; employer?: boolean; pre_tax?: boolean; type?: string; }; category: 'earnings' | 'taxes' | 'employee_deductions' | 'employer_contributions'; name: string; }",
    markdown:
      "## list\n\n`client.hris.company.payStatementItem.list(categories?: 'earnings' | 'taxes' | 'employee_deductions' | 'employer_contributions'[], end_date?: string, entity_ids?: string[], name?: string, start_date?: string, type?: string): { attributes: object; category: 'earnings' | 'taxes' | 'employee_deductions' | 'employer_contributions'; name: string; }`\n\n**get** `/employer/pay-statement-item`\n\nRetrieve a list of detailed pay statement items for the access token's connection account.\n\n\n### Parameters\n\n- `categories?: 'earnings' | 'taxes' | 'employee_deductions' | 'employer_contributions'[]`\n  Comma-delimited list of pay statement item categories to filter on. If empty, defaults to all categories.\n\n- `end_date?: string`\n  The end date to retrieve pay statement items by via their last seen pay date in `YYYY-MM-DD` format.\n\n- `entity_ids?: string[]`\n  The entity IDs to specify which entities' data to access.\n\n- `name?: string`\n  Case-insensitive partial match search by pay statement item name.\n\n- `start_date?: string`\n  The start date to retrieve pay statement items by via their last seen pay date (inclusive) in `YYYY-MM-DD` format.\n\n- `type?: string`\n  String search by pay statement item type.\n\n### Returns\n\n- `{ attributes: { metadata: object; employer?: boolean; pre_tax?: boolean; type?: string; }; category: 'earnings' | 'taxes' | 'employee_deductions' | 'employer_contributions'; name: string; }`\n\n  - `attributes: { metadata: object; employer?: boolean; pre_tax?: boolean; type?: string; }`\n  - `category: 'earnings' | 'taxes' | 'employee_deductions' | 'employer_contributions'`\n  - `name: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\n// Automatically fetches more pages as needed.\nfor await (const payStatementItemListResponse of client.hris.company.payStatementItem.list()) {\n  console.log(payStatementItemListResponse);\n}\n```",
  },
  {
    name: 'create',
    endpoint: '/employer/pay-statement-item/rule',
    httpMethod: 'post',
    summary: 'Create Rule',
    description:
      'Custom rules can be created to associate specific attributes to pay statement items depending on the use case. For example, pay statement items that meet certain conditions can be labeled as a pre-tax 401k. This metadata can be retrieved where pay statement item information is available.\n',
    stainlessPath: '(resource) hris.company.pay_statement_item.rules > (method) create',
    qualified: 'client.hris.company.payStatementItem.rules.create',
    params: [
      'entity_ids?: string[];',
      'attributes?: { metadata?: object; };',
      "conditions?: { field?: string; operator?: 'equals'; value?: string; }[];",
      'effective_end_date?: string;',
      'effective_start_date?: string;',
      "entity_type?: 'pay_statement_item';",
    ],
    response:
      "{ id?: string; attributes?: { metadata?: object; }; conditions?: { field?: string; operator?: 'equals'; value?: string; }[]; created_at?: string; effective_end_date?: string; effective_start_date?: string; entity_type?: 'pay_statement_item'; priority?: number; updated_at?: string; }",
    markdown:
      "## create\n\n`client.hris.company.payStatementItem.rules.create(entity_ids?: string[], attributes?: { metadata?: object; }, conditions?: { field?: string; operator?: 'equals'; value?: string; }[], effective_end_date?: string, effective_start_date?: string, entity_type?: 'pay_statement_item'): { id?: string; attributes?: object; conditions?: object[]; created_at?: string; effective_end_date?: string; effective_start_date?: string; entity_type?: 'pay_statement_item'; priority?: number; updated_at?: string; }`\n\n**post** `/employer/pay-statement-item/rule`\n\nCustom rules can be created to associate specific attributes to pay statement items depending on the use case. For example, pay statement items that meet certain conditions can be labeled as a pre-tax 401k. This metadata can be retrieved where pay statement item information is available.\n\n\n### Parameters\n\n- `entity_ids?: string[]`\n  The entity IDs to create the rule for.\n\n- `attributes?: { metadata?: object; }`\n  Specifies the fields to be applied when the condition is met.\n  - `metadata?: object`\n    The metadata to be attached in the entity. It is a key-value pairs where the values can be of any type (string, number, boolean, object, array, etc.).\n\n- `conditions?: { field?: string; operator?: 'equals'; value?: string; }[]`\n\n- `effective_end_date?: string`\n  Specifies when the rules should stop applying rules based on the date.\n\n- `effective_start_date?: string`\n  Specifies when the rule should begin applying based on the date.\n\n- `entity_type?: 'pay_statement_item'`\n  The entity type to which the rule is applied.\n\n### Returns\n\n- `{ id?: string; attributes?: { metadata?: object; }; conditions?: { field?: string; operator?: 'equals'; value?: string; }[]; created_at?: string; effective_end_date?: string; effective_start_date?: string; entity_type?: 'pay_statement_item'; priority?: number; updated_at?: string; }`\n\n  - `id?: string`\n  - `attributes?: { metadata?: object; }`\n  - `conditions?: { field?: string; operator?: 'equals'; value?: string; }[]`\n  - `created_at?: string`\n  - `effective_end_date?: string`\n  - `effective_start_date?: string`\n  - `entity_type?: 'pay_statement_item'`\n  - `priority?: number`\n  - `updated_at?: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst rule = await client.hris.company.payStatementItem.rules.create();\n\nconsole.log(rule);\n```",
  },
  {
    name: 'update',
    endpoint: '/employer/pay-statement-item/rule/{rule_id}',
    httpMethod: 'put',
    summary: 'Update Rule',
    description: 'Update a rule for a pay statement item.',
    stainlessPath: '(resource) hris.company.pay_statement_item.rules > (method) update',
    qualified: 'client.hris.company.payStatementItem.rules.update',
    params: ['rule_id: string;', 'entity_ids?: string[];', 'optionalProperty?: object;'],
    response:
      "{ id?: string; attributes?: { metadata?: object; }; conditions?: { field?: string; operator?: 'equals'; value?: string; }[]; created_at?: string; effective_end_date?: string; effective_start_date?: string; entity_type?: 'pay_statement_item'; priority?: number; updated_at?: string; }",
    markdown:
      "## update\n\n`client.hris.company.payStatementItem.rules.update(rule_id: string, entity_ids?: string[], optionalProperty?: object): { id?: string; attributes?: object; conditions?: object[]; created_at?: string; effective_end_date?: string; effective_start_date?: string; entity_type?: 'pay_statement_item'; priority?: number; updated_at?: string; }`\n\n**put** `/employer/pay-statement-item/rule/{rule_id}`\n\nUpdate a rule for a pay statement item.\n\n### Parameters\n\n- `rule_id: string`\n\n- `entity_ids?: string[]`\n  The entity IDs to update the rule for.\n\n- `optionalProperty?: object`\n\n### Returns\n\n- `{ id?: string; attributes?: { metadata?: object; }; conditions?: { field?: string; operator?: 'equals'; value?: string; }[]; created_at?: string; effective_end_date?: string; effective_start_date?: string; entity_type?: 'pay_statement_item'; priority?: number; updated_at?: string; }`\n\n  - `id?: string`\n  - `attributes?: { metadata?: object; }`\n  - `conditions?: { field?: string; operator?: 'equals'; value?: string; }[]`\n  - `created_at?: string`\n  - `effective_end_date?: string`\n  - `effective_start_date?: string`\n  - `entity_type?: 'pay_statement_item'`\n  - `priority?: number`\n  - `updated_at?: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst rule = await client.hris.company.payStatementItem.rules.update('rule_id');\n\nconsole.log(rule);\n```",
  },
  {
    name: 'list',
    endpoint: '/employer/pay-statement-item/rule',
    httpMethod: 'get',
    summary: 'Get Rules',
    description: 'List all rules of a connection account.',
    stainlessPath: '(resource) hris.company.pay_statement_item.rules > (method) list',
    qualified: 'client.hris.company.payStatementItem.rules.list',
    params: ['entity_ids?: string[];'],
    response:
      "{ id?: string; attributes?: { metadata?: object; }; conditions?: { field?: string; operator?: 'equals'; value?: string; }[]; created_at?: string; effective_end_date?: string; effective_start_date?: string; entity_type?: 'pay_statement_item'; priority?: number; updated_at?: string; }",
    markdown:
      "## list\n\n`client.hris.company.payStatementItem.rules.list(entity_ids?: string[]): { id?: string; attributes?: object; conditions?: object[]; created_at?: string; effective_end_date?: string; effective_start_date?: string; entity_type?: 'pay_statement_item'; priority?: number; updated_at?: string; }`\n\n**get** `/employer/pay-statement-item/rule`\n\nList all rules of a connection account.\n\n### Parameters\n\n- `entity_ids?: string[]`\n  The entity IDs to retrieve rules for.\n\n### Returns\n\n- `{ id?: string; attributes?: { metadata?: object; }; conditions?: { field?: string; operator?: 'equals'; value?: string; }[]; created_at?: string; effective_end_date?: string; effective_start_date?: string; entity_type?: 'pay_statement_item'; priority?: number; updated_at?: string; }`\n\n  - `id?: string`\n  - `attributes?: { metadata?: object; }`\n  - `conditions?: { field?: string; operator?: 'equals'; value?: string; }[]`\n  - `created_at?: string`\n  - `effective_end_date?: string`\n  - `effective_start_date?: string`\n  - `entity_type?: 'pay_statement_item'`\n  - `priority?: number`\n  - `updated_at?: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\n// Automatically fetches more pages as needed.\nfor await (const ruleListResponse of client.hris.company.payStatementItem.rules.list()) {\n  console.log(ruleListResponse);\n}\n```",
  },
  {
    name: 'delete',
    endpoint: '/employer/pay-statement-item/rule/{rule_id}',
    httpMethod: 'delete',
    summary: 'Delete Rule',
    description: 'Delete a rule for a pay statement item.',
    stainlessPath: '(resource) hris.company.pay_statement_item.rules > (method) delete',
    qualified: 'client.hris.company.payStatementItem.rules.delete',
    params: ['rule_id: string;', 'entity_ids?: string[];'],
    response:
      "{ id?: string; attributes?: { metadata?: object; }; conditions?: { field?: string; operator?: 'equals'; value?: string; }[]; created_at?: string; deleted_at?: string; effective_end_date?: string; effective_start_date?: string; entity_type?: 'pay_statement_item'; priority?: number; updated_at?: string; }",
    markdown:
      "## delete\n\n`client.hris.company.payStatementItem.rules.delete(rule_id: string, entity_ids?: string[]): { id?: string; attributes?: object; conditions?: object[]; created_at?: string; deleted_at?: string; effective_end_date?: string; effective_start_date?: string; entity_type?: 'pay_statement_item'; priority?: number; updated_at?: string; }`\n\n**delete** `/employer/pay-statement-item/rule/{rule_id}`\n\nDelete a rule for a pay statement item.\n\n### Parameters\n\n- `rule_id: string`\n\n- `entity_ids?: string[]`\n  The entity IDs to delete the rule for.\n\n### Returns\n\n- `{ id?: string; attributes?: { metadata?: object; }; conditions?: { field?: string; operator?: 'equals'; value?: string; }[]; created_at?: string; deleted_at?: string; effective_end_date?: string; effective_start_date?: string; entity_type?: 'pay_statement_item'; priority?: number; updated_at?: string; }`\n\n  - `id?: string`\n  - `attributes?: { metadata?: object; }`\n  - `conditions?: { field?: string; operator?: 'equals'; value?: string; }[]`\n  - `created_at?: string`\n  - `deleted_at?: string`\n  - `effective_end_date?: string`\n  - `effective_start_date?: string`\n  - `entity_type?: 'pay_statement_item'`\n  - `priority?: number`\n  - `updated_at?: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst rule = await client.hris.company.payStatementItem.rules.delete('rule_id');\n\nconsole.log(rule);\n```",
  },
  {
    name: 'list',
    endpoint: '/employer/directory',
    httpMethod: 'get',
    summary: 'Directory',
    description: 'Read company directory and organization structure',
    stainlessPath: '(resource) hris.directory > (method) list',
    qualified: 'client.hris.directory.list',
    params: ['entity_ids?: string[];', 'limit?: number;', 'offset?: number;'],
    response:
      '{ id: string; department: { name?: string; }; first_name: string; is_active: boolean; last_name: string; manager: { id: string; }; middle_name: string; }',
    markdown:
      "## list\n\n`client.hris.directory.list(entity_ids?: string[], limit?: number, offset?: number): { id: string; department: object; first_name: string; is_active: boolean; last_name: string; manager: object; middle_name: string; }`\n\n**get** `/employer/directory`\n\nRead company directory and organization structure\n\n### Parameters\n\n- `entity_ids?: string[]`\n  The entity IDs to specify which entities' data to access.\n\n- `limit?: number`\n  Number of employees to return (defaults to all)\n\n- `offset?: number`\n  Index to start from (defaults to 0)\n\n### Returns\n\n- `{ id: string; department: { name?: string; }; first_name: string; is_active: boolean; last_name: string; manager: { id: string; }; middle_name: string; }`\n\n  - `id: string`\n  - `department: { name?: string; }`\n  - `first_name: string`\n  - `is_active: boolean`\n  - `last_name: string`\n  - `manager: { id: string; }`\n  - `middle_name: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\n// Automatically fetches more pages as needed.\nfor await (const individualInDirectory of client.hris.directory.list()) {\n  console.log(individualInDirectory);\n}\n```",
  },
  {
    name: 'retrieve_many',
    endpoint: '/employer/individual',
    httpMethod: 'post',
    summary: 'Individual',
    description: 'Read individual data, excluding income and employment data',
    stainlessPath: '(resource) hris.individuals > (method) retrieve_many',
    qualified: 'client.hris.individuals.retrieveMany',
    params: [
      'entity_ids?: string[];',
      'options?: { include?: string[]; };',
      'requests?: { individual_id?: string; }[];',
    ],
    response:
      "{ body: { id: string; dob: string; ethnicity: string; first_name: string; gender: 'female' | 'male' | 'other' | 'decline_to_specify'; last_name: string; middle_name: string; phone_numbers: object[]; preferred_name: string; residence: location; emails?: object[]; encrypted_ssn?: string; ssn?: string; } | { code: number; message: string; name: string; finch_code?: string; }; code: number; individual_id: string; }",
    markdown:
      "## retrieve_many\n\n`client.hris.individuals.retrieveMany(entity_ids?: string[], options?: { include?: string[]; }, requests?: { individual_id?: string; }[]): { body: individual; code: number; individual_id: string; }`\n\n**post** `/employer/individual`\n\nRead individual data, excluding income and employment data\n\n### Parameters\n\n- `entity_ids?: string[]`\n  The entity IDs to specify which entities' data to access.\n\n- `options?: { include?: string[]; }`\n  - `include?: string[]`\n\n- `requests?: { individual_id?: string; }[]`\n\n### Returns\n\n- `{ body: { id: string; dob: string; ethnicity: string; first_name: string; gender: 'female' | 'male' | 'other' | 'decline_to_specify'; last_name: string; middle_name: string; phone_numbers: object[]; preferred_name: string; residence: location; emails?: object[]; encrypted_ssn?: string; ssn?: string; } | { code: number; message: string; name: string; finch_code?: string; }; code: number; individual_id: string; }`\n\n  - `body: { id: string; dob: string; ethnicity: string; first_name: string; gender: 'female' | 'male' | 'other' | 'decline_to_specify'; last_name: string; middle_name: string; phone_numbers: { data: string; type: 'work' | 'personal'; }[]; preferred_name: string; residence: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }; emails?: { data: string; type: 'work' | 'personal'; }[]; encrypted_ssn?: string; ssn?: string; } | { code: number; message: string; name: string; finch_code?: string; }`\n  - `code: number`\n  - `individual_id: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\n// Automatically fetches more pages as needed.\nfor await (const individualResponse of client.hris.individuals.retrieveMany()) {\n  console.log(individualResponse);\n}\n```",
  },
  {
    name: 'retrieve_many',
    endpoint: '/employer/employment',
    httpMethod: 'post',
    summary: 'Employment',
    description: 'Read individual employment and income data',
    stainlessPath: '(resource) hris.employments > (method) retrieve_many',
    qualified: 'client.hris.employments.retrieveMany',
    params: ['requests: { individual_id: string; }[];', 'entity_ids?: string[];'],
    response:
      "{ body: { id: string; class_code: string; department: object; employment: object; employment_status: 'active' | 'deceased' | 'leave' | 'onboarding' | 'prehire' | 'retired' | 'terminated'; end_date: string; first_name: string; flsa_status: 'exempt' | 'non_exempt' | 'unknown'; is_active: boolean; last_name: string; latest_rehire_date: string; location: location; manager: object; middle_name: string; start_date: string; title: string; custom_fields?: object[]; income?: income; income_history?: income[]; source_id?: string; work_id?: string; } | { code: number; message: string; name: string; finch_code?: string; }; code: number; individual_id: string; }",
    markdown:
      "## retrieve_many\n\n`client.hris.employments.retrieveMany(requests: { individual_id: string; }[], entity_ids?: string[]): { body: employment_data; code: number; individual_id: string; }`\n\n**post** `/employer/employment`\n\nRead individual employment and income data\n\n### Parameters\n\n- `requests: { individual_id: string; }[]`\n  The array of batch requests.\n\n- `entity_ids?: string[]`\n  The entity IDs to specify which entities' data to access.\n\n### Returns\n\n- `{ body: { id: string; class_code: string; department: object; employment: object; employment_status: 'active' | 'deceased' | 'leave' | 'onboarding' | 'prehire' | 'retired' | 'terminated'; end_date: string; first_name: string; flsa_status: 'exempt' | 'non_exempt' | 'unknown'; is_active: boolean; last_name: string; latest_rehire_date: string; location: location; manager: object; middle_name: string; start_date: string; title: string; custom_fields?: object[]; income?: income; income_history?: income[]; source_id?: string; work_id?: string; } | { code: number; message: string; name: string; finch_code?: string; }; code: number; individual_id: string; }`\n\n  - `body: { id: string; class_code: string; department: { name: string; }; employment: { subtype: 'full_time' | 'intern' | 'part_time' | 'temp' | 'seasonal' | 'individual_contractor'; type: 'employee' | 'contractor'; }; employment_status: 'active' | 'deceased' | 'leave' | 'onboarding' | 'prehire' | 'retired' | 'terminated'; end_date: string; first_name: string; flsa_status: 'exempt' | 'non_exempt' | 'unknown'; is_active: boolean; last_name: string; latest_rehire_date: string; location: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }; manager: { id: string; }; middle_name: string; start_date: string; title: string; custom_fields?: { name?: string; value?: string | object[] | object | number | boolean; }[]; income?: { amount: number; currency: string; effective_date: string; unit: string; }; income_history?: { amount: number; currency: string; effective_date: string; unit: string; }[]; source_id?: string; work_id?: string; } | { code: number; message: string; name: string; finch_code?: string; }`\n  - `code: number`\n  - `individual_id: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\n// Automatically fetches more pages as needed.\nfor await (const employmentDataResponse of client.hris.employments.retrieveMany({ requests: [{ individual_id: 'individual_id' }] })) {\n  console.log(employmentDataResponse);\n}\n```",
  },
  {
    name: 'list',
    endpoint: '/employer/payment',
    httpMethod: 'get',
    summary: 'Payment',
    description: 'Read payroll and contractor related payments by the company.',
    stainlessPath: '(resource) hris.payments > (method) list',
    qualified: 'client.hris.payments.list',
    params: ['end_date: string;', 'start_date: string;', 'entity_ids?: string[];'],
    response:
      '{ id: string; company_debit: { amount: number; currency: string; }; debit_date: string; employee_taxes: { amount: number; currency: string; }; employer_taxes: { amount: number; currency: string; }; gross_pay: { amount: number; currency: string; }; individual_ids: string[]; net_pay: { amount: number; currency: string; }; pay_date: string; pay_frequencies: string[]; pay_group_ids: string[]; pay_period: { end_date: string; start_date: string; }; }',
    markdown:
      "## list\n\n`client.hris.payments.list(end_date: string, start_date: string, entity_ids?: string[]): { id: string; company_debit: money; debit_date: string; employee_taxes: money; employer_taxes: money; gross_pay: money; individual_ids: string[]; net_pay: money; pay_date: string; pay_frequencies: string[]; pay_group_ids: string[]; pay_period: object; }`\n\n**get** `/employer/payment`\n\nRead payroll and contractor related payments by the company.\n\n### Parameters\n\n- `end_date: string`\n  The end date to retrieve payments by a company (inclusive) in `YYYY-MM-DD` format. Filters payments by their **pay_date** field.\n\n- `start_date: string`\n  The start date to retrieve payments by a company (inclusive) in `YYYY-MM-DD` format. Filters payments by their **pay_date** field.\n\n- `entity_ids?: string[]`\n  The entity IDs to specify which entities' data to access.\n\n### Returns\n\n- `{ id: string; company_debit: { amount: number; currency: string; }; debit_date: string; employee_taxes: { amount: number; currency: string; }; employer_taxes: { amount: number; currency: string; }; gross_pay: { amount: number; currency: string; }; individual_ids: string[]; net_pay: { amount: number; currency: string; }; pay_date: string; pay_frequencies: string[]; pay_group_ids: string[]; pay_period: { end_date: string; start_date: string; }; }`\n\n  - `id: string`\n  - `company_debit: { amount: number; currency: string; }`\n  - `debit_date: string`\n  - `employee_taxes: { amount: number; currency: string; }`\n  - `employer_taxes: { amount: number; currency: string; }`\n  - `gross_pay: { amount: number; currency: string; }`\n  - `individual_ids: string[]`\n  - `net_pay: { amount: number; currency: string; }`\n  - `pay_date: string`\n  - `pay_frequencies: string[]`\n  - `pay_group_ids: string[]`\n  - `pay_period: { end_date: string; start_date: string; }`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\n// Automatically fetches more pages as needed.\nfor await (const payment of client.hris.payments.list({ end_date: '2021-01-01', start_date: '2021-01-01' })) {\n  console.log(payment);\n}\n```",
  },
  {
    name: 'retrieve_many',
    endpoint: '/employer/pay-statement',
    httpMethod: 'post',
    summary: 'Pay Statement',
    description:
      'Read detailed pay statements for each individual.\n\nDeduction and contribution types are supported by the payroll systems that supports Benefits.',
    stainlessPath: '(resource) hris.pay_statements > (method) retrieve_many',
    qualified: 'client.hris.payStatements.retrieveMany',
    params: [
      'requests: { payment_id: string; limit?: number; offset?: number; }[];',
      'entity_ids?: string[];',
    ],
    response:
      "{ body: { paging: object; pay_statements: pay_statement[]; } | { code: number; message: string; name: string; finch_code?: string; } | { code: 202; finch_code: 'data_sync_in_progress'; message: 'The pay statements for this payment are being fetched. Please check back later.'; name: 'accepted'; }; code: number; payment_id: string; }",
    markdown:
      "## retrieve_many\n\n`client.hris.payStatements.retrieveMany(requests: { payment_id: string; limit?: number; offset?: number; }[], entity_ids?: string[]): { body: pay_statement_response_body | object | pay_statement_data_sync_in_progress; code: number; payment_id: string; }`\n\n**post** `/employer/pay-statement`\n\nRead detailed pay statements for each individual.\n\nDeduction and contribution types are supported by the payroll systems that supports Benefits.\n\n### Parameters\n\n- `requests: { payment_id: string; limit?: number; offset?: number; }[]`\n  The array of batch requests.\n\n- `entity_ids?: string[]`\n  The entity IDs to specify which entities' data to access.\n\n### Returns\n\n- `{ body: { paging: object; pay_statements: pay_statement[]; } | { code: number; message: string; name: string; finch_code?: string; } | { code: 202; finch_code: 'data_sync_in_progress'; message: 'The pay statements for this payment are being fetched. Please check back later.'; name: 'accepted'; }; code: number; payment_id: string; }`\n\n  - `body: { paging: { offset: number; count?: number; }; pay_statements: { earnings: object[]; employee_deductions: object[]; employer_contributions: object[]; gross_pay: money; individual_id: string; net_pay: money; payment_method: 'check' | 'direct_deposit' | 'other'; taxes: object[]; total_hours: number; type: 'off_cycle_payroll' | 'one_time_payment' | 'regular_payroll'; }[]; } | { code: number; message: string; name: string; finch_code?: string; } | { code: 202; finch_code: 'data_sync_in_progress'; message: 'The pay statements for this payment are being fetched. Please check back later.'; name: 'accepted'; }`\n  - `code: number`\n  - `payment_id: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\n// Automatically fetches more pages as needed.\nfor await (const payStatementResponse of client.hris.payStatements.retrieveMany({ requests: [{ payment_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }] })) {\n  console.log(payStatementResponse);\n}\n```",
  },
  {
    name: 'list',
    endpoint: '/employer/documents',
    httpMethod: 'get',
    summary: 'List Documents',
    description:
      '**Beta:** This endpoint is in beta and may change.\nRetrieve a list of company-wide documents.\n',
    stainlessPath: '(resource) hris.documents > (method) list',
    qualified: 'client.hris.documents.list',
    params: [
      'entity_ids?: string[];',
      'individual_ids?: string[];',
      'limit?: number;',
      'offset?: number;',
      "types?: 'w4_2020' | 'w4_2005'[];",
    ],
    response:
      "{ documents: { id: string; individual_id: string; type: 'w4_2020' | 'w4_2005'; url: string; year: number; }[]; paging: { offset: number; count?: number; }; }",
    markdown:
      "## list\n\n`client.hris.documents.list(entity_ids?: string[], individual_ids?: string[], limit?: number, offset?: number, types?: 'w4_2020' | 'w4_2005'[]): { documents: document_response[]; paging: paging; }`\n\n**get** `/employer/documents`\n\n**Beta:** This endpoint is in beta and may change.\nRetrieve a list of company-wide documents.\n\n\n### Parameters\n\n- `entity_ids?: string[]`\n  The entity IDs to specify which entities' data to access.\n\n- `individual_ids?: string[]`\n  Comma-delimited list of stable Finch uuids for each individual. If empty, defaults to all individuals\n\n- `limit?: number`\n  Number of documents to return (defaults to all)\n\n- `offset?: number`\n  Index to start from (defaults to 0)\n\n- `types?: 'w4_2020' | 'w4_2005'[]`\n  Comma-delimited list of document types to filter on. If empty, defaults to all types\n\n### Returns\n\n- `{ documents: { id: string; individual_id: string; type: 'w4_2020' | 'w4_2005'; url: string; year: number; }[]; paging: { offset: number; count?: number; }; }`\n\n  - `documents: { id: string; individual_id: string; type: 'w4_2020' | 'w4_2005'; url: string; year: number; }[]`\n  - `paging: { offset: number; count?: number; }`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst documents = await client.hris.documents.list();\n\nconsole.log(documents);\n```",
  },
  {
    name: 'retreive',
    endpoint: '/employer/documents/{document_id}',
    httpMethod: 'get',
    summary: 'Get Document',
    description:
      '**Beta:** This endpoint is in beta and may change.\nRetrieve details of a specific document by its ID.\n',
    stainlessPath: '(resource) hris.documents > (method) retreive',
    qualified: 'client.hris.documents.retreive',
    params: ['document_id: string;', 'entity_ids?: string[];'],
    response:
      "{ data: { amount_for_other_dependents: number; amount_for_qualifying_children_under_17: number; deductions: number; extra_withholding: number; filing_status: string; individual_id: string; other_income: number; total_claim_dependent_and_other_credits: number; }; type: 'w4_2020'; year: number; } | { data: { additional_withholding: number; exemption: 'exempt' | 'non_exempt'; filing_status: 'married' | 'married_but_withhold_at_higher_single_rate' | 'single'; individual_id: string; total_number_of_allowances: number; }; type: 'w4_2005'; year: number; }",
    markdown:
      "## retreive\n\n`client.hris.documents.retreive(document_id: string, entity_ids?: string[]): object | object`\n\n**get** `/employer/documents/{document_id}`\n\n**Beta:** This endpoint is in beta and may change.\nRetrieve details of a specific document by its ID.\n\n\n### Parameters\n\n- `document_id: string`\n\n- `entity_ids?: string[]`\n  The entity IDs to specify which entities' data to access.\n\n### Returns\n\n- `{ data: { amount_for_other_dependents: number; amount_for_qualifying_children_under_17: number; deductions: number; extra_withholding: number; filing_status: string; individual_id: string; other_income: number; total_claim_dependent_and_other_credits: number; }; type: 'w4_2020'; year: number; } | { data: { additional_withholding: number; exemption: 'exempt' | 'non_exempt'; filing_status: 'married' | 'married_but_withhold_at_higher_single_rate' | 'single'; individual_id: string; total_number_of_allowances: number; }; type: 'w4_2005'; year: number; }`\n  A 2020 version of the W-4 tax form containing information on an individual's filing status, dependents, and withholding details.\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst response = await client.hris.documents.retreive('document_id');\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/employer/benefits',
    httpMethod: 'post',
    summary: 'Create Deduction',
    description:
      'Creates a new company-wide deduction or contribution. Please use the `/providers` endpoint to view available types for each provider.',
    stainlessPath: '(resource) hris.benefits > (method) create',
    qualified: 'client.hris.benefits.create',
    params: [
      'entity_ids?: string[];',
      "company_contribution?: { tiers: { match: number; threshold: number; }[]; type: 'match'; };",
      'description?: string;',
      "frequency?: 'every_paycheck' | 'monthly' | 'one_time';",
      'type?: string;',
    ],
    response: '{ benefit_id: string; job_id: string; }',
    markdown:
      "## create\n\n`client.hris.benefits.create(entity_ids?: string[], company_contribution?: { tiers: { match: number; threshold: number; }[]; type: 'match'; }, description?: string, frequency?: 'every_paycheck' | 'monthly' | 'one_time', type?: string): { benefit_id: string; job_id: string; }`\n\n**post** `/employer/benefits`\n\nCreates a new company-wide deduction or contribution. Please use the `/providers` endpoint to view available types for each provider.\n\n### Parameters\n\n- `entity_ids?: string[]`\n  The entity IDs to specify which entities' data to access.\n\n- `company_contribution?: { tiers: { match: number; threshold: number; }[]; type: 'match'; }`\n  The company match for this benefit.\n  - `tiers: { match: number; threshold: number; }[]`\n  - `type: 'match'`\n\n- `description?: string`\n  Name of the benefit as it appears in the provider and pay statements. Recommend limiting this to <30 characters due to limitations in specific providers (e.g. Justworks).\n\n- `frequency?: 'every_paycheck' | 'monthly' | 'one_time'`\n  The frequency of the benefit deduction/contribution.\n\n- `type?: string`\n  Type of benefit.\n\n### Returns\n\n- `{ benefit_id: string; job_id: string; }`\n\n  - `benefit_id: string`\n  - `job_id: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst createCompanyBenefitsResponse = await client.hris.benefits.create();\n\nconsole.log(createCompanyBenefitsResponse);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/employer/benefits/{benefit_id}',
    httpMethod: 'get',
    summary: 'Get Deduction',
    description: 'Lists deductions and contributions information for a given item',
    stainlessPath: '(resource) hris.benefits > (method) retrieve',
    qualified: 'client.hris.benefits.retrieve',
    params: ['benefit_id: string;', 'entity_ids?: string[];'],
    response:
      "{ benefit_id: string; description: string; frequency: 'every_paycheck' | 'monthly' | 'one_time'; type: string; company_contribution?: { tiers: { match: number; threshold: number; }[]; type: 'match'; }; }",
    markdown:
      "## retrieve\n\n`client.hris.benefits.retrieve(benefit_id: string, entity_ids?: string[]): { benefit_id: string; description: string; frequency: benefit_frequency; type: benefit_type; company_contribution?: object; }`\n\n**get** `/employer/benefits/{benefit_id}`\n\nLists deductions and contributions information for a given item\n\n### Parameters\n\n- `benefit_id: string`\n\n- `entity_ids?: string[]`\n  The entity IDs to specify which entities' data to access.\n\n### Returns\n\n- `{ benefit_id: string; description: string; frequency: 'every_paycheck' | 'monthly' | 'one_time'; type: string; company_contribution?: { tiers: { match: number; threshold: number; }[]; type: 'match'; }; }`\n\n  - `benefit_id: string`\n  - `description: string`\n  - `frequency: 'every_paycheck' | 'monthly' | 'one_time'`\n  - `type: string`\n  - `company_contribution?: { tiers: { match: number; threshold: number; }[]; type: 'match'; }`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst companyBenefit = await client.hris.benefits.retrieve('benefit_id');\n\nconsole.log(companyBenefit);\n```",
  },
  {
    name: 'update',
    endpoint: '/employer/benefits/{benefit_id}',
    httpMethod: 'post',
    summary: 'Update Deduction',
    description: 'Updates an existing company-wide deduction or contribution',
    stainlessPath: '(resource) hris.benefits > (method) update',
    qualified: 'client.hris.benefits.update',
    params: ['benefit_id: string;', 'entity_ids?: string[];', 'description?: string;'],
    response: '{ benefit_id: string; job_id: string; }',
    markdown:
      "## update\n\n`client.hris.benefits.update(benefit_id: string, entity_ids?: string[], description?: string): { benefit_id: string; job_id: string; }`\n\n**post** `/employer/benefits/{benefit_id}`\n\nUpdates an existing company-wide deduction or contribution\n\n### Parameters\n\n- `benefit_id: string`\n\n- `entity_ids?: string[]`\n  The entity IDs to specify which entities' data to access.\n\n- `description?: string`\n  Updated name or description.\n\n### Returns\n\n- `{ benefit_id: string; job_id: string; }`\n\n  - `benefit_id: string`\n  - `job_id: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst updateCompanyBenefitResponse = await client.hris.benefits.update('benefit_id');\n\nconsole.log(updateCompanyBenefitResponse);\n```",
  },
  {
    name: 'list',
    endpoint: '/employer/benefits',
    httpMethod: 'get',
    summary: 'Get All Deductions',
    description: 'List all company-wide deductions and contributions.',
    stainlessPath: '(resource) hris.benefits > (method) list',
    qualified: 'client.hris.benefits.list',
    params: ['entity_ids?: string[];'],
    response:
      "{ benefit_id: string; description: string; frequency: 'every_paycheck' | 'monthly' | 'one_time'; type: string; company_contribution?: { tiers: { match: number; threshold: number; }[]; type: 'match'; }; }",
    markdown:
      "## list\n\n`client.hris.benefits.list(entity_ids?: string[]): { benefit_id: string; description: string; frequency: benefit_frequency; type: benefit_type; company_contribution?: object; }`\n\n**get** `/employer/benefits`\n\nList all company-wide deductions and contributions.\n\n### Parameters\n\n- `entity_ids?: string[]`\n  The entity IDs to specify which entities' data to access.\n\n### Returns\n\n- `{ benefit_id: string; description: string; frequency: 'every_paycheck' | 'monthly' | 'one_time'; type: string; company_contribution?: { tiers: { match: number; threshold: number; }[]; type: 'match'; }; }`\n\n  - `benefit_id: string`\n  - `description: string`\n  - `frequency: 'every_paycheck' | 'monthly' | 'one_time'`\n  - `type: string`\n  - `company_contribution?: { tiers: { match: number; threshold: number; }[]; type: 'match'; }`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\n// Automatically fetches more pages as needed.\nfor await (const companyBenefit of client.hris.benefits.list()) {\n  console.log(companyBenefit);\n}\n```",
  },
  {
    name: 'list_supported_benefits',
    endpoint: '/employer/benefits/meta',
    httpMethod: 'get',
    summary: '[Deprecated] Get Deductions Metadata',
    description: 'Get deductions metadata',
    stainlessPath: '(resource) hris.benefits > (method) list_supported_benefits',
    qualified: 'client.hris.benefits.listSupportedBenefits',
    params: ['entity_ids?: string[];'],
    response:
      "{ annual_maximum: boolean; company_contribution: 'fixed' | 'percent' | 'tiered'[]; description: string; employee_deduction: 'fixed' | 'percent'[]; frequencies: 'every_paycheck' | 'monthly' | 'one_time'[]; catch_up?: boolean; hsa_contribution_limit?: 'family' | 'individual'[]; }",
    markdown:
      "## list_supported_benefits\n\n`client.hris.benefits.listSupportedBenefits(entity_ids?: string[]): { annual_maximum: boolean; company_contribution: 'fixed' | 'percent' | 'tiered'[]; description: string; employee_deduction: 'fixed' | 'percent'[]; frequencies: benefit_frequency[]; catch_up?: boolean; hsa_contribution_limit?: 'family' | 'individual'[]; }`\n\n**get** `/employer/benefits/meta`\n\nGet deductions metadata\n\n### Parameters\n\n- `entity_ids?: string[]`\n  The entity IDs to specify which entities' data to access.\n\n### Returns\n\n- `{ annual_maximum: boolean; company_contribution: 'fixed' | 'percent' | 'tiered'[]; description: string; employee_deduction: 'fixed' | 'percent'[]; frequencies: 'every_paycheck' | 'monthly' | 'one_time'[]; catch_up?: boolean; hsa_contribution_limit?: 'family' | 'individual'[]; }`\n\n  - `annual_maximum: boolean`\n  - `company_contribution: 'fixed' | 'percent' | 'tiered'[]`\n  - `description: string`\n  - `employee_deduction: 'fixed' | 'percent'[]`\n  - `frequencies: 'every_paycheck' | 'monthly' | 'one_time'[]`\n  - `catch_up?: boolean`\n  - `hsa_contribution_limit?: 'family' | 'individual'[]`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\n// Automatically fetches more pages as needed.\nfor await (const supportedBenefit of client.hris.benefits.listSupportedBenefits()) {\n  console.log(supportedBenefit);\n}\n```",
  },
  {
    name: 'enroll_many',
    endpoint: '/employer/benefits/{benefit_id}/individuals',
    httpMethod: 'post',
    summary: 'Enroll Individuals in Deductions',
    description:
      'Enroll an individual into a deduction or contribution. This is an overwrite operation. If the employee is already enrolled, the enrollment amounts will be adjusted. Making the same request multiple times will not create new enrollments, but will continue to set the state of the existing enrollment.',
    stainlessPath: '(resource) hris.benefits.individuals > (method) enroll_many',
    qualified: 'client.hris.benefits.individuals.enrollMany',
    params: [
      'benefit_id: string;',
      'entity_ids?: string[];',
      "individuals?: { configuration?: { annual_contribution_limit?: 'individual' | 'family'; annual_maximum?: number; catch_up?: boolean; company_contribution?: { amount?: number; tiers?: { match: number; threshold: number; }[]; type?: 'fixed' | 'percent' | 'tiered'; }; effective_date?: string; employee_deduction?: { amount?: number; type?: 'fixed' | 'percent'; }; }; individual_id?: string; }[];",
    ],
    response: '{ job_id: string; }',
    markdown:
      "## enroll_many\n\n`client.hris.benefits.individuals.enrollMany(benefit_id: string, entity_ids?: string[], individuals?: { configuration?: { annual_contribution_limit?: 'individual' | 'family'; annual_maximum?: number; catch_up?: boolean; company_contribution?: object; effective_date?: string; employee_deduction?: object; }; individual_id?: string; }[]): { job_id: string; }`\n\n**post** `/employer/benefits/{benefit_id}/individuals`\n\nEnroll an individual into a deduction or contribution. This is an overwrite operation. If the employee is already enrolled, the enrollment amounts will be adjusted. Making the same request multiple times will not create new enrollments, but will continue to set the state of the existing enrollment.\n\n### Parameters\n\n- `benefit_id: string`\n\n- `entity_ids?: string[]`\n  The entity IDs to specify which entities' data to access.\n\n- `individuals?: { configuration?: { annual_contribution_limit?: 'individual' | 'family'; annual_maximum?: number; catch_up?: boolean; company_contribution?: { amount?: number; tiers?: { match: number; threshold: number; }[]; type?: 'fixed' | 'percent' | 'tiered'; }; effective_date?: string; employee_deduction?: { amount?: number; type?: 'fixed' | 'percent'; }; }; individual_id?: string; }[]`\n  Array of the individual_id to enroll and a configuration object.\n\n### Returns\n\n- `{ job_id: string; }`\n\n  - `job_id: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst enrolledIndividualBenefitResponse = await client.hris.benefits.individuals.enrollMany('benefit_id');\n\nconsole.log(enrolledIndividualBenefitResponse);\n```",
  },
  {
    name: 'enrolled_ids',
    endpoint: '/employer/benefits/{benefit_id}/enrolled',
    httpMethod: 'get',
    summary: 'Get Enrolled Individuals',
    description: 'Lists individuals currently enrolled in a given deduction.',
    stainlessPath: '(resource) hris.benefits.individuals > (method) enrolled_ids',
    qualified: 'client.hris.benefits.individuals.enrolledIDs',
    params: ['benefit_id: string;', 'entity_ids?: string[];'],
    response: '{ benefit_id: string; individual_ids: string[]; }',
    markdown:
      "## enrolled_ids\n\n`client.hris.benefits.individuals.enrolledIDs(benefit_id: string, entity_ids?: string[]): { benefit_id: string; individual_ids: string[]; }`\n\n**get** `/employer/benefits/{benefit_id}/enrolled`\n\nLists individuals currently enrolled in a given deduction.\n\n### Parameters\n\n- `benefit_id: string`\n\n- `entity_ids?: string[]`\n  The entity IDs to specify which entities' data to access.\n\n### Returns\n\n- `{ benefit_id: string; individual_ids: string[]; }`\n\n  - `benefit_id: string`\n  - `individual_ids: string[]`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst response = await client.hris.benefits.individuals.enrolledIDs('benefit_id');\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve_many_benefits',
    endpoint: '/employer/benefits/{benefit_id}/individuals',
    httpMethod: 'get',
    summary: 'Get Deductions for Individuals',
    description: 'Get enrollment information for the given individuals.',
    stainlessPath: '(resource) hris.benefits.individuals > (method) retrieve_many_benefits',
    qualified: 'client.hris.benefits.individuals.retrieveManyBenefits',
    params: ['benefit_id: string;', 'entity_ids?: string[];', 'individual_ids?: string;'],
    response:
      "{ body: { annual_maximum: number; catch_up: boolean; company_contribution: { amount: number; type: 'fixed'; } | { amount: number; type: 'percent'; } | { tiers: object[]; type: 'tiered'; }; employee_deduction: { amount: number; type: 'fixed'; } | { amount: number; type: 'percent'; }; hsa_contribution_limit?: 'individual' | 'family'; } | { code: number; message: string; name: string; finch_code?: string; }; code: number; individual_id: string; }",
    markdown:
      "## retrieve_many_benefits\n\n`client.hris.benefits.individuals.retrieveManyBenefits(benefit_id: string, entity_ids?: string[], individual_ids?: string): { body: object | object; code: number; individual_id: string; }`\n\n**get** `/employer/benefits/{benefit_id}/individuals`\n\nGet enrollment information for the given individuals.\n\n### Parameters\n\n- `benefit_id: string`\n\n- `entity_ids?: string[]`\n  The entity IDs to specify which entities' data to access.\n\n- `individual_ids?: string`\n  comma-delimited list of stable Finch uuids for each individual. If empty, defaults to all individuals\n\n### Returns\n\n- `{ body: { annual_maximum: number; catch_up: boolean; company_contribution: { amount: number; type: 'fixed'; } | { amount: number; type: 'percent'; } | { tiers: object[]; type: 'tiered'; }; employee_deduction: { amount: number; type: 'fixed'; } | { amount: number; type: 'percent'; }; hsa_contribution_limit?: 'individual' | 'family'; } | { code: number; message: string; name: string; finch_code?: string; }; code: number; individual_id: string; }`\n\n  - `body: { annual_maximum: number; catch_up: boolean; company_contribution: { amount: number; type: 'fixed'; } | { amount: number; type: 'percent'; } | { tiers: { match: number; threshold: number; }[]; type: 'tiered'; }; employee_deduction: { amount: number; type: 'fixed'; } | { amount: number; type: 'percent'; }; hsa_contribution_limit?: 'individual' | 'family'; } | { code: number; message: string; name: string; finch_code?: string; }`\n  - `code: number`\n  - `individual_id: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\n// Automatically fetches more pages as needed.\nfor await (const individualBenefit of client.hris.benefits.individuals.retrieveManyBenefits('benefit_id')) {\n  console.log(individualBenefit);\n}\n```",
  },
  {
    name: 'unenroll_many',
    endpoint: '/employer/benefits/{benefit_id}/individuals',
    httpMethod: 'delete',
    summary: 'Unenroll Individuals from Deductions',
    description: 'Unenroll individuals from a deduction or contribution',
    stainlessPath: '(resource) hris.benefits.individuals > (method) unenroll_many',
    qualified: 'client.hris.benefits.individuals.unenrollMany',
    params: ['benefit_id: string;', 'entity_ids?: string[];', 'individual_ids?: string[];'],
    response: '{ job_id: string; }',
    markdown:
      "## unenroll_many\n\n`client.hris.benefits.individuals.unenrollMany(benefit_id: string, entity_ids?: string[], individual_ids?: string[]): { job_id: string; }`\n\n**delete** `/employer/benefits/{benefit_id}/individuals`\n\nUnenroll individuals from a deduction or contribution\n\n### Parameters\n\n- `benefit_id: string`\n\n- `entity_ids?: string[]`\n  The entity IDs to specify which entities' data to access.\n\n- `individual_ids?: string[]`\n  Array of individual_ids to unenroll.\n\n### Returns\n\n- `{ job_id: string; }`\n\n  - `job_id: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst unenrolledIndividualBenefitResponse = await client.hris.benefits.individuals.unenrollMany('benefit_id');\n\nconsole.log(unenrolledIndividualBenefitResponse);\n```",
  },
  {
    name: 'list',
    endpoint: '/providers',
    httpMethod: 'get',
    summary: 'Providers',
    description: 'Return details on all available payroll and HR systems.',
    stainlessPath: '(resource) providers > (method) list',
    qualified: 'client.providers.list',
    response:
      "{ id: string; display_name: string; products: string[]; authentication_methods?: { type: 'assisted' | 'credential' | 'api_token' | 'api_credential' | 'oauth' | 'api'; benefits_support?: object; supported_fields?: object; }[]; beta?: boolean; icon?: string; logo?: string; manual?: boolean; mfa_required?: boolean; primary_color?: string; }",
    markdown:
      "## list\n\n`client.providers.list(): { id: string; display_name: string; products: string[]; authentication_methods?: object[]; beta?: boolean; icon?: string; logo?: string; manual?: boolean; mfa_required?: boolean; primary_color?: string; }`\n\n**get** `/providers`\n\nReturn details on all available payroll and HR systems.\n\n### Returns\n\n- `{ id: string; display_name: string; products: string[]; authentication_methods?: { type: 'assisted' | 'credential' | 'api_token' | 'api_credential' | 'oauth' | 'api'; benefits_support?: object; supported_fields?: object; }[]; beta?: boolean; icon?: string; logo?: string; manual?: boolean; mfa_required?: boolean; primary_color?: string; }`\n\n  - `id: string`\n  - `display_name: string`\n  - `products: string[]`\n  - `authentication_methods?: { type: 'assisted' | 'credential' | 'api_token' | 'api_credential' | 'oauth' | 'api'; benefits_support?: object; supported_fields?: object; }[]`\n  - `beta?: boolean`\n  - `icon?: string`\n  - `logo?: string`\n  - `manual?: boolean`\n  - `mfa_required?: boolean`\n  - `primary_color?: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\n// Automatically fetches more pages as needed.\nfor await (const providerListResponse of client.providers.list()) {\n  console.log(providerListResponse);\n}\n```",
  },
  {
    name: 'disconnect',
    endpoint: '/disconnect',
    httpMethod: 'post',
    summary: 'Disconnect',
    description: 'Disconnect one or more `access_token`s from your application.',
    stainlessPath: '(resource) account > (method) disconnect',
    qualified: 'client.account.disconnect',
    response: '{ status: string; }',
    markdown:
      "## disconnect\n\n`client.account.disconnect(): { status: string; }`\n\n**post** `/disconnect`\n\nDisconnect one or more `access_token`s from your application.\n\n### Returns\n\n- `{ status: string; }`\n\n  - `status: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst disconnectResponse = await client.account.disconnect();\n\nconsole.log(disconnectResponse);\n```",
  },
  {
    name: 'introspect',
    endpoint: '/introspect',
    httpMethod: 'get',
    summary: 'Introspect',
    description: 'Read account information associated with an `access_token`',
    stainlessPath: '(resource) account > (method) introspect',
    qualified: 'client.account.introspect',
    response:
      "{ id: string; client_id: string; client_type: 'development' | 'production' | 'sandbox'; connection_id: string; connection_status: { status: 'pending' | 'processing' | 'connected' | 'error_no_account_setup' | 'error_permissions' | 'reauth'; last_successful_sync?: string | string; message?: string; }; connection_type: 'finch' | 'provider'; products: string[]; provider_id: string; account_id?: string; authentication_methods?: { type: 'assisted' | 'credential' | 'api_token' | 'api_credential' | 'oauth'; connection_status?: { status: connection_status_type; last_successful_sync?: string | string; message?: string; }; products?: string[]; }[]; company_id?: string; customer_email?: string; customer_id?: string; customer_name?: string; entities?: { id: string; name: string; source_id: string; status: string; }[]; manual?: boolean; payroll_provider_id?: string; username?: string; }",
    markdown:
      "## introspect\n\n`client.account.introspect(): { id: string; client_id: string; client_type: 'development' | 'production' | 'sandbox'; connection_id: string; connection_status: object; connection_type: 'finch' | 'provider'; products: string[]; provider_id: string; account_id?: string; authentication_methods?: object[]; company_id?: string; customer_email?: string; customer_id?: string; customer_name?: string; entities?: object[]; manual?: boolean; payroll_provider_id?: string; username?: string; }`\n\n**get** `/introspect`\n\nRead account information associated with an `access_token`\n\n### Returns\n\n- `{ id: string; client_id: string; client_type: 'development' | 'production' | 'sandbox'; connection_id: string; connection_status: { status: 'pending' | 'processing' | 'connected' | 'error_no_account_setup' | 'error_permissions' | 'reauth'; last_successful_sync?: string | string; message?: string; }; connection_type: 'finch' | 'provider'; products: string[]; provider_id: string; account_id?: string; authentication_methods?: { type: 'assisted' | 'credential' | 'api_token' | 'api_credential' | 'oauth'; connection_status?: { status: connection_status_type; last_successful_sync?: string | string; message?: string; }; products?: string[]; }[]; company_id?: string; customer_email?: string; customer_id?: string; customer_name?: string; entities?: { id: string; name: string; source_id: string; status: string; }[]; manual?: boolean; payroll_provider_id?: string; username?: string; }`\n\n  - `id: string`\n  - `client_id: string`\n  - `client_type: 'development' | 'production' | 'sandbox'`\n  - `connection_id: string`\n  - `connection_status: { status: 'pending' | 'processing' | 'connected' | 'error_no_account_setup' | 'error_permissions' | 'reauth'; last_successful_sync?: string | string; message?: string; }`\n  - `connection_type: 'finch' | 'provider'`\n  - `products: string[]`\n  - `provider_id: string`\n  - `account_id?: string`\n  - `authentication_methods?: { type: 'assisted' | 'credential' | 'api_token' | 'api_credential' | 'oauth'; connection_status?: { status: 'pending' | 'processing' | 'connected' | 'error_no_account_setup' | 'error_permissions' | 'reauth'; last_successful_sync?: string | string; message?: string; }; products?: string[]; }[]`\n  - `company_id?: string`\n  - `customer_email?: string`\n  - `customer_id?: string`\n  - `customer_name?: string`\n  - `entities?: { id: string; name: string; source_id: string; status: string; }[]`\n  - `manual?: boolean`\n  - `payroll_provider_id?: string`\n  - `username?: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst introspection = await client.account.introspect();\n\nconsole.log(introspection);\n```",
  },
  {
    name: 'forward',
    endpoint: '/forward',
    httpMethod: 'post',
    summary: 'Request Forwarding',
    description:
      "The Forward API allows you to make direct requests to an employment system. If Finch's unified API\ndoesn't have a data model that cleanly fits your needs, then Forward allows you to push or pull\ndata models directly against an integration's API.",
    stainlessPath: '(resource) request_forwarding > (method) forward',
    qualified: 'client.requestForwarding.forward',
    params: [
      'method: string;',
      'route: string;',
      'data?: string;',
      'params?: object;',
      'request_headers?: object;',
    ],
    response:
      '{ request: { method: string; route: string; data?: string | object; headers?: object; params?: object; }; statusCode: number; data?: string; headers?: object; }',
    markdown:
      "## forward\n\n`client.requestForwarding.forward(method: string, route: string, data?: string, params?: object, request_headers?: object): { request: object; statusCode: number; data?: string; headers?: object; }`\n\n**post** `/forward`\n\nThe Forward API allows you to make direct requests to an employment system. If Finch's unified API\ndoesn't have a data model that cleanly fits your needs, then Forward allows you to push or pull\ndata models directly against an integration's API.\n\n### Parameters\n\n- `method: string`\n  The HTTP method for the forwarded request. Valid values include: `GET` , `POST` , `PUT` , `DELETE` , and `PATCH`.\n\n- `route: string`\n  The URL route path for the forwarded request. This value must begin with a forward-slash ( / ) and may only contain alphanumeric characters, hyphens, and underscores.\n\n- `data?: string`\n  The body for the forwarded request. This value must be specified as either a string or a valid JSON object.\n\n- `params?: object`\n  The query parameters for the forwarded request. This value must be specified as a valid JSON object rather than a query string.\n\n- `request_headers?: object`\n  The HTTP headers to include on the forwarded request. This value must be specified as an object of key-value pairs. Example: `{\"Content-Type\": \"application/xml\", \"X-API-Version\": \"v1\" }`\n\n### Returns\n\n- `{ request: { method: string; route: string; data?: string | object; headers?: object; params?: object; }; statusCode: number; data?: string; headers?: object; }`\n\n  - `request: { method: string; route: string; data?: string | object; headers?: object; params?: object; }`\n  - `statusCode: number`\n  - `data?: string`\n  - `headers?: object`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst response = await client.requestForwarding.forward({ method: 'method', route: 'route' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/jobs/automated',
    httpMethod: 'post',
    summary: 'Enqueue a New Automated Job',
    description:
      'Enqueue an automated job.\n\n`data_sync_all`: Enqueue a job to re-sync all data for a connection. `data_sync_all` has a concurrency limit of 1 job at a time per connection. This means that if this endpoint is called while a job is already in progress for this connection, Finch will return the `job_id` of the job that is currently in progress. Finch allows a fixed window rate limit of 1 forced refresh per hour per connection.\n\n`w4_form_employee_sync`: Enqueues a job for sync W-4 data for a particular individual, identified by `individual_id`. This feature is currently in beta.\n\nThis endpoint is available for *Scale* tier customers as an add-on. To request access to this endpoint, please contact your Finch account manager.',
    stainlessPath: '(resource) jobs.automated > (method) create',
    qualified: 'client.jobs.automated.create',
    params: [
      "{ type: 'data_sync_all'; } | { params: { individual_id: string; }; type: 'w4_form_employee_sync'; };",
    ],
    response:
      '{ allowed_refreshes: number; remaining_refreshes: number; job_id?: string; job_url?: string; retry_at?: string; }',
  },
  {
    name: 'retrieve',
    endpoint: '/jobs/automated/{job_id}',
    httpMethod: 'get',
    summary: 'Retrieve an Automated Job',
    description: 'Get an automated job by `job_id`.',
    stainlessPath: '(resource) jobs.automated > (method) retrieve',
    qualified: 'client.jobs.automated.retrieve',
    params: ['job_id: string;'],
    response:
      "{ completed_at: string; created_at: string; job_id: string; job_url: string; params: { individual_id?: string; }; scheduled_at: string; started_at: string; status: 'pending' | 'in_progress' | 'complete' | 'error' | 'reauth_error' | 'permissions_error'; type: 'data_sync_all' | 'w4_form_employee_sync'; }",
    markdown:
      "## retrieve\n\n`client.jobs.automated.retrieve(job_id: string): { completed_at: string; created_at: string; job_id: string; job_url: string; params: object; scheduled_at: string; started_at: string; status: 'pending' | 'in_progress' | 'complete' | 'error' | 'reauth_error' | 'permissions_error'; type: 'data_sync_all' | 'w4_form_employee_sync'; }`\n\n**get** `/jobs/automated/{job_id}`\n\nGet an automated job by `job_id`.\n\n### Parameters\n\n- `job_id: string`\n\n### Returns\n\n- `{ completed_at: string; created_at: string; job_id: string; job_url: string; params: { individual_id?: string; }; scheduled_at: string; started_at: string; status: 'pending' | 'in_progress' | 'complete' | 'error' | 'reauth_error' | 'permissions_error'; type: 'data_sync_all' | 'w4_form_employee_sync'; }`\n\n  - `completed_at: string`\n  - `created_at: string`\n  - `job_id: string`\n  - `job_url: string`\n  - `params: { individual_id?: string; }`\n  - `scheduled_at: string`\n  - `started_at: string`\n  - `status: 'pending' | 'in_progress' | 'complete' | 'error' | 'reauth_error' | 'permissions_error'`\n  - `type: 'data_sync_all' | 'w4_form_employee_sync'`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst automatedAsyncJob = await client.jobs.automated.retrieve('job_id');\n\nconsole.log(automatedAsyncJob);\n```",
  },
  {
    name: 'list',
    endpoint: '/jobs/automated',
    httpMethod: 'get',
    summary: 'List All Automated Jobs',
    description:
      'Get all automated jobs. Automated jobs are completed by a machine. By default, jobs are sorted in descending order by submission time. For scheduled jobs such as data syncs, only the next scheduled job is shown.',
    stainlessPath: '(resource) jobs.automated > (method) list',
    qualified: 'client.jobs.automated.list',
    params: ['limit?: number;', 'offset?: number;'],
    response:
      "{ data: { completed_at: string; created_at: string; job_id: string; job_url: string; params: object; scheduled_at: string; started_at: string; status: 'pending' | 'in_progress' | 'complete' | 'error' | 'reauth_error' | 'permissions_error'; type: 'data_sync_all' | 'w4_form_employee_sync'; }[]; meta: { quotas?: { data_sync_all?: object; }; }; }",
    markdown:
      "## list\n\n`client.jobs.automated.list(limit?: number, offset?: number): { data: automated_async_job[]; meta: object; }`\n\n**get** `/jobs/automated`\n\nGet all automated jobs. Automated jobs are completed by a machine. By default, jobs are sorted in descending order by submission time. For scheduled jobs such as data syncs, only the next scheduled job is shown.\n\n### Parameters\n\n- `limit?: number`\n  Number of items to return\n\n- `offset?: number`\n  Index to start from (defaults to 0)\n\n### Returns\n\n- `{ data: { completed_at: string; created_at: string; job_id: string; job_url: string; params: object; scheduled_at: string; started_at: string; status: 'pending' | 'in_progress' | 'complete' | 'error' | 'reauth_error' | 'permissions_error'; type: 'data_sync_all' | 'w4_form_employee_sync'; }[]; meta: { quotas?: { data_sync_all?: object; }; }; }`\n\n  - `data: { completed_at: string; created_at: string; job_id: string; job_url: string; params: { individual_id?: string; }; scheduled_at: string; started_at: string; status: 'pending' | 'in_progress' | 'complete' | 'error' | 'reauth_error' | 'permissions_error'; type: 'data_sync_all' | 'w4_form_employee_sync'; }[]`\n  - `meta: { quotas?: { data_sync_all?: { allowed_refreshes?: number; remaining_refreshes?: number; }; }; }`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst automateds = await client.jobs.automated.list();\n\nconsole.log(automateds);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/jobs/manual/{job_id}',
    httpMethod: 'get',
    summary: 'Retrieve a Manual Job',
    description:
      'Check the status and outcome of a job by `job_id`. This includes all deductions jobs including those for both automated and assisted integrations.',
    stainlessPath: '(resource) jobs.manual > (method) retrieve',
    qualified: 'client.jobs.manual.retrieve',
    params: ['job_id: string;'],
    response: "{ body: object[]; job_id: string; status: 'pending' | 'in_progress' | 'error' | 'complete'; }",
    markdown:
      "## retrieve\n\n`client.jobs.manual.retrieve(job_id: string): { body: object[]; job_id: string; status: 'pending' | 'in_progress' | 'error' | 'complete'; }`\n\n**get** `/jobs/manual/{job_id}`\n\nCheck the status and outcome of a job by `job_id`. This includes all deductions jobs including those for both automated and assisted integrations.\n\n### Parameters\n\n- `job_id: string`\n\n### Returns\n\n- `{ body: object[]; job_id: string; status: 'pending' | 'in_progress' | 'error' | 'complete'; }`\n\n  - `body: object[]`\n  - `job_id: string`\n  - `status: 'pending' | 'in_progress' | 'error' | 'complete'`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst manualAsyncJob = await client.jobs.manual.retrieve('job_id');\n\nconsole.log(manualAsyncJob);\n```",
  },
  {
    name: 'create',
    endpoint: '/sandbox/connections',
    httpMethod: 'post',
    summary: 'Create a new Sandbox Connection',
    description: 'Create a new connection (new company/provider pair) with a new account',
    stainlessPath: '(resource) sandbox.connections > (method) create',
    qualified: 'client.sandbox.connections.create',
    params: [
      'provider_id: string;',
      "authentication_type?: 'credential' | 'api_token' | 'oauth' | 'assisted';",
      'employee_size?: number;',
      'products?: string[];',
    ],
    response:
      "{ access_token: string; account_id: string; authentication_type: 'credential' | 'api_token' | 'oauth' | 'assisted'; company_id: string; connection_id: string; entity_id: string; products: string[]; provider_id: string; token_type?: string; }",
    markdown:
      "## create\n\n`client.sandbox.connections.create(provider_id: string, authentication_type?: 'credential' | 'api_token' | 'oauth' | 'assisted', employee_size?: number, products?: string[]): { access_token: string; account_id: string; authentication_type: 'credential' | 'api_token' | 'oauth' | 'assisted'; company_id: string; connection_id: string; entity_id: string; products: string[]; provider_id: string; token_type?: string; }`\n\n**post** `/sandbox/connections`\n\nCreate a new connection (new company/provider pair) with a new account\n\n### Parameters\n\n- `provider_id: string`\n  The provider associated with the connection\n\n- `authentication_type?: 'credential' | 'api_token' | 'oauth' | 'assisted'`\n\n- `employee_size?: number`\n  Optional: the size of the employer to be created with this connection. Defaults to 20. Note that if this is higher than 100, historical payroll data will not be generated, and instead only one pay period will be created.\n\n- `products?: string[]`\n\n### Returns\n\n- `{ access_token: string; account_id: string; authentication_type: 'credential' | 'api_token' | 'oauth' | 'assisted'; company_id: string; connection_id: string; entity_id: string; products: string[]; provider_id: string; token_type?: string; }`\n\n  - `access_token: string`\n  - `account_id: string`\n  - `authentication_type: 'credential' | 'api_token' | 'oauth' | 'assisted'`\n  - `company_id: string`\n  - `connection_id: string`\n  - `entity_id: string`\n  - `products: string[]`\n  - `provider_id: string`\n  - `token_type?: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst connection = await client.sandbox.connections.create({ provider_id: 'provider_id' });\n\nconsole.log(connection);\n```",
  },
  {
    name: 'create',
    endpoint: '/sandbox/connections/accounts',
    httpMethod: 'post',
    summary: 'Create a new sandbox account',
    description: 'Create a new account for an existing connection (company/provider pair)',
    stainlessPath: '(resource) sandbox.connections.accounts > (method) create',
    qualified: 'client.sandbox.connections.accounts.create',
    params: [
      'company_id: string;',
      'provider_id: string;',
      "authentication_type?: 'credential' | 'api_token' | 'oauth' | 'assisted';",
      'products?: string[];',
    ],
    response:
      "{ access_token: string; account_id: string; authentication_type: 'credential' | 'api_token' | 'oauth' | 'assisted'; company_id: string; connection_id: string; entity_id: string; products: string[]; provider_id: string; }",
    markdown:
      "## create\n\n`client.sandbox.connections.accounts.create(company_id: string, provider_id: string, authentication_type?: 'credential' | 'api_token' | 'oauth' | 'assisted', products?: string[]): { access_token: string; account_id: string; authentication_type: 'credential' | 'api_token' | 'oauth' | 'assisted'; company_id: string; connection_id: string; entity_id: string; products: string[]; provider_id: string; }`\n\n**post** `/sandbox/connections/accounts`\n\nCreate a new account for an existing connection (company/provider pair)\n\n### Parameters\n\n- `company_id: string`\n\n- `provider_id: string`\n  The provider associated with the `access_token`\n\n- `authentication_type?: 'credential' | 'api_token' | 'oauth' | 'assisted'`\n\n- `products?: string[]`\n  Optional, defaults to Organization products (`company`, `directory`, `employment`, `individual`)\n\n### Returns\n\n- `{ access_token: string; account_id: string; authentication_type: 'credential' | 'api_token' | 'oauth' | 'assisted'; company_id: string; connection_id: string; entity_id: string; products: string[]; provider_id: string; }`\n\n  - `access_token: string`\n  - `account_id: string`\n  - `authentication_type: 'credential' | 'api_token' | 'oauth' | 'assisted'`\n  - `company_id: string`\n  - `connection_id: string`\n  - `entity_id: string`\n  - `products: string[]`\n  - `provider_id: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst account = await client.sandbox.connections.accounts.create({ company_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', provider_id: 'provider_id' });\n\nconsole.log(account);\n```",
  },
  {
    name: 'update',
    endpoint: '/sandbox/connections/accounts',
    httpMethod: 'put',
    summary: 'Update a sandbox account',
    description:
      'Update an existing sandbox account. Change the connection status to understand how the Finch API responds.',
    stainlessPath: '(resource) sandbox.connections.accounts > (method) update',
    qualified: 'client.sandbox.connections.accounts.update',
    params: [
      "connection_status?: 'pending' | 'processing' | 'connected' | 'error_no_account_setup' | 'error_permissions' | 'reauth';",
    ],
    response:
      "{ account_id: string; authentication_type: 'credential' | 'api_token' | 'oauth' | 'assisted'; company_id: string; connection_id: string; entity_id: string; products: string[]; provider_id: string; }",
    markdown:
      "## update\n\n`client.sandbox.connections.accounts.update(connection_status?: 'pending' | 'processing' | 'connected' | 'error_no_account_setup' | 'error_permissions' | 'reauth'): { account_id: string; authentication_type: 'credential' | 'api_token' | 'oauth' | 'assisted'; company_id: string; connection_id: string; entity_id: string; products: string[]; provider_id: string; }`\n\n**put** `/sandbox/connections/accounts`\n\nUpdate an existing sandbox account. Change the connection status to understand how the Finch API responds.\n\n### Parameters\n\n- `connection_status?: 'pending' | 'processing' | 'connected' | 'error_no_account_setup' | 'error_permissions' | 'reauth'`\n\n### Returns\n\n- `{ account_id: string; authentication_type: 'credential' | 'api_token' | 'oauth' | 'assisted'; company_id: string; connection_id: string; entity_id: string; products: string[]; provider_id: string; }`\n\n  - `account_id: string`\n  - `authentication_type: 'credential' | 'api_token' | 'oauth' | 'assisted'`\n  - `company_id: string`\n  - `connection_id: string`\n  - `entity_id: string`\n  - `products: string[]`\n  - `provider_id: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst account = await client.sandbox.connections.accounts.update();\n\nconsole.log(account);\n```",
  },
  {
    name: 'update',
    endpoint: '/sandbox/company',
    httpMethod: 'put',
    summary: "Update a sandbox company's data",
    description: "Update a sandbox company's data",
    stainlessPath: '(resource) sandbox.company > (method) update',
    qualified: 'client.sandbox.company.update',
    params: [
      "accounts: { account_name?: string; account_number?: string; account_type?: 'checking' | 'savings'; institution_name?: string; routing_number?: string; }[];",
      'departments: { name?: string; parent?: { name?: string; }; }[];',
      'ein: string;',
      "entity: { subtype?: 's_corporation' | 'c_corporation' | 'b_corporation'; type?: 'llc' | 'lp' | 'corporation' | 'sole_proprietor' | 'non_profit' | 'partnership' | 'cooperative'; };",
      'legal_name: string;',
      'locations: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }[];',
      'primary_email: string;',
      'primary_phone_number: string;',
    ],
    response:
      "{ accounts: { account_name?: string; account_number?: string; account_type?: 'checking' | 'savings'; institution_name?: string; routing_number?: string; }[]; departments: { name?: string; parent?: { name?: string; }; }[]; ein: string; entity: { subtype?: 's_corporation' | 'c_corporation' | 'b_corporation'; type?: 'llc' | 'lp' | 'corporation' | 'sole_proprietor' | 'non_profit' | 'partnership' | 'cooperative'; }; legal_name: string; locations: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }[]; primary_email: string; primary_phone_number: string; }",
    markdown:
      "## update\n\n`client.sandbox.company.update(accounts: { account_name?: string; account_number?: string; account_type?: 'checking' | 'savings'; institution_name?: string; routing_number?: string; }[], departments: { name?: string; parent?: { name?: string; }; }[], ein: string, entity: { subtype?: 's_corporation' | 'c_corporation' | 'b_corporation'; type?: 'llc' | 'lp' | 'corporation' | 'sole_proprietor' | 'non_profit' | 'partnership' | 'cooperative'; }, legal_name: string, locations: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }[], primary_email: string, primary_phone_number: string): { accounts: object[]; departments: object[]; ein: string; entity: object; legal_name: string; locations: location[]; primary_email: string; primary_phone_number: string; }`\n\n**put** `/sandbox/company`\n\nUpdate a sandbox company's data\n\n### Parameters\n\n- `accounts: { account_name?: string; account_number?: string; account_type?: 'checking' | 'savings'; institution_name?: string; routing_number?: string; }[]`\n  An array of bank account objects associated with the payroll/HRIS system.\n\n- `departments: { name?: string; parent?: { name?: string; }; }[]`\n  The array of company departments.\n\n- `ein: string`\n  The employer identification number.\n\n- `entity: { subtype?: 's_corporation' | 'c_corporation' | 'b_corporation'; type?: 'llc' | 'lp' | 'corporation' | 'sole_proprietor' | 'non_profit' | 'partnership' | 'cooperative'; }`\n  The entity type object.\n  - `subtype?: 's_corporation' | 'c_corporation' | 'b_corporation'`\n    The tax payer subtype of the company.\n  - `type?: 'llc' | 'lp' | 'corporation' | 'sole_proprietor' | 'non_profit' | 'partnership' | 'cooperative'`\n    The tax payer type of the company.\n\n- `legal_name: string`\n  The legal name of the company.\n\n- `locations: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }[]`\n\n- `primary_email: string`\n  The email of the main administrator on the account.\n\n- `primary_phone_number: string`\n  The phone number of the main administrator on the account. Format: E.164, with extension where applicable, e.g. `+NNNNNNNNNNN xExtension`\n\n### Returns\n\n- `{ accounts: { account_name?: string; account_number?: string; account_type?: 'checking' | 'savings'; institution_name?: string; routing_number?: string; }[]; departments: { name?: string; parent?: { name?: string; }; }[]; ein: string; entity: { subtype?: 's_corporation' | 'c_corporation' | 'b_corporation'; type?: 'llc' | 'lp' | 'corporation' | 'sole_proprietor' | 'non_profit' | 'partnership' | 'cooperative'; }; legal_name: string; locations: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }[]; primary_email: string; primary_phone_number: string; }`\n\n  - `accounts: { account_name?: string; account_number?: string; account_type?: 'checking' | 'savings'; institution_name?: string; routing_number?: string; }[]`\n  - `departments: { name?: string; parent?: { name?: string; }; }[]`\n  - `ein: string`\n  - `entity: { subtype?: 's_corporation' | 'c_corporation' | 'b_corporation'; type?: 'llc' | 'lp' | 'corporation' | 'sole_proprietor' | 'non_profit' | 'partnership' | 'cooperative'; }`\n  - `legal_name: string`\n  - `locations: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }[]`\n  - `primary_email: string`\n  - `primary_phone_number: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst company = await client.sandbox.company.update({\n  accounts: [{}],\n  departments: [{}],\n  ein: 'ein',\n  entity: {},\n  legal_name: 'legal_name',\n  locations: [{\n  city: 'city',\n  country: 'country',\n  line1: 'line1',\n  line2: 'line2',\n  postal_code: 'postal_code',\n  state: 'state',\n}],\n  primary_email: 'dev@stainless.com',\n  primary_phone_number: 'primary_phone_number',\n});\n\nconsole.log(company);\n```",
  },
  {
    name: 'create',
    endpoint: '/sandbox/directory',
    httpMethod: 'post',
    summary: 'Add new individuals to a sandbox company',
    description: 'Add new individuals to a sandbox company',
    stainlessPath: '(resource) sandbox.directory > (method) create',
    qualified: 'client.sandbox.directory.create',
    params: [
      "body?: { class_code?: string; custom_fields?: { name?: string; value?: object; }[]; department?: { name?: string; }; dob?: string; emails?: { data?: string; type?: 'work' | 'personal'; }[]; employment?: { subtype?: 'full_time' | 'intern' | 'part_time' | 'temp' | 'seasonal' | 'individual_contractor'; type?: 'employee' | 'contractor'; }; employment_status?: 'active' | 'deceased' | 'leave' | 'onboarding' | 'prehire' | 'retired' | 'terminated'; encrypted_ssn?: string; end_date?: string; ethnicity?: string; first_name?: string; flsa_status?: 'exempt' | 'non_exempt' | 'unknown'; gender?: 'female' | 'male' | 'other' | 'decline_to_specify'; income?: { amount: number; currency: string; effective_date: string; unit: string; }; income_history?: { amount: number; currency: string; effective_date: string; unit: string; }[]; is_active?: boolean; last_name?: string; latest_rehire_date?: string; location?: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }; manager?: { id?: string; }; middle_name?: string; phone_numbers?: { data?: string; type?: 'work' | 'personal'; }[]; preferred_name?: string; residence?: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }; source_id?: string; ssn?: string; start_date?: string; title?: string; }[];",
    ],
    response: 'object[]',
    markdown:
      "## create\n\n`client.sandbox.directory.create(body?: { class_code?: string; custom_fields?: { name?: string; value?: object; }[]; department?: { name?: string; }; dob?: string; emails?: { data?: string; type?: 'work' | 'personal'; }[]; employment?: { subtype?: 'full_time' | 'intern' | 'part_time' | 'temp' | 'seasonal' | 'individual_contractor'; type?: 'employee' | 'contractor'; }; employment_status?: 'active' | 'deceased' | 'leave' | 'onboarding' | 'prehire' | 'retired' | 'terminated'; encrypted_ssn?: string; end_date?: string; ethnicity?: string; first_name?: string; flsa_status?: 'exempt' | 'non_exempt' | 'unknown'; gender?: 'female' | 'male' | 'other' | 'decline_to_specify'; income?: object; income_history?: object[]; is_active?: boolean; last_name?: string; latest_rehire_date?: string; location?: object; manager?: { id?: string; }; middle_name?: string; phone_numbers?: { data?: string; type?: 'work' | 'personal'; }[]; preferred_name?: string; residence?: object; source_id?: string; ssn?: string; start_date?: string; title?: string; }[]): object[]`\n\n**post** `/sandbox/directory`\n\nAdd new individuals to a sandbox company\n\n### Parameters\n\n- `body?: { class_code?: string; custom_fields?: { name?: string; value?: object; }[]; department?: { name?: string; }; dob?: string; emails?: { data?: string; type?: 'work' | 'personal'; }[]; employment?: { subtype?: 'full_time' | 'intern' | 'part_time' | 'temp' | 'seasonal' | 'individual_contractor'; type?: 'employee' | 'contractor'; }; employment_status?: 'active' | 'deceased' | 'leave' | 'onboarding' | 'prehire' | 'retired' | 'terminated'; encrypted_ssn?: string; end_date?: string; ethnicity?: string; first_name?: string; flsa_status?: 'exempt' | 'non_exempt' | 'unknown'; gender?: 'female' | 'male' | 'other' | 'decline_to_specify'; income?: { amount: number; currency: string; effective_date: string; unit: string; }; income_history?: { amount: number; currency: string; effective_date: string; unit: string; }[]; is_active?: boolean; last_name?: string; latest_rehire_date?: string; location?: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }; manager?: { id?: string; }; middle_name?: string; phone_numbers?: { data?: string; type?: 'work' | 'personal'; }[]; preferred_name?: string; residence?: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }; source_id?: string; ssn?: string; start_date?: string; title?: string; }[]`\n  Array of individuals to create. Takes all combined fields from `/individual` and `/employment` endpoints. All fields are optional.\n\n### Returns\n\n- `object[]`\n  The individuals which were created\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst directories = await client.sandbox.directory.create();\n\nconsole.log(directories);\n```",
  },
  {
    name: 'update',
    endpoint: '/sandbox/individual/{individual_id}',
    httpMethod: 'put',
    summary: 'Update sandbox individual',
    description: 'Update sandbox individual',
    stainlessPath: '(resource) sandbox.individual > (method) update',
    qualified: 'client.sandbox.individual.update',
    params: [
      'individual_id: string;',
      'dob?: string;',
      "emails?: { data?: string; type?: 'work' | 'personal'; }[];",
      'encrypted_ssn?: string;',
      'ethnicity?: string;',
      'first_name?: string;',
      "gender?: 'female' | 'male' | 'other' | 'decline_to_specify';",
      'last_name?: string;',
      'middle_name?: string;',
      "phone_numbers?: { data?: string; type?: 'work' | 'personal'; }[];",
      'preferred_name?: string;',
      'residence?: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; };',
      'ssn?: string;',
    ],
    response:
      "{ id?: string; dob?: string; emails?: { data?: string; type?: 'work' | 'personal'; }[]; encrypted_ssn?: string; ethnicity?: string; first_name?: string; gender?: 'female' | 'male' | 'other' | 'decline_to_specify'; last_name?: string; middle_name?: string; phone_numbers?: { data?: string; type?: 'work' | 'personal'; }[]; preferred_name?: string; residence?: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }; ssn?: string; }",
    markdown:
      "## update\n\n`client.sandbox.individual.update(individual_id: string, dob?: string, emails?: { data?: string; type?: 'work' | 'personal'; }[], encrypted_ssn?: string, ethnicity?: string, first_name?: string, gender?: 'female' | 'male' | 'other' | 'decline_to_specify', last_name?: string, middle_name?: string, phone_numbers?: { data?: string; type?: 'work' | 'personal'; }[], preferred_name?: string, residence?: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }, ssn?: string): { id?: string; dob?: string; emails?: object[]; encrypted_ssn?: string; ethnicity?: string; first_name?: string; gender?: 'female' | 'male' | 'other' | 'decline_to_specify'; last_name?: string; middle_name?: string; phone_numbers?: object[]; preferred_name?: string; residence?: location; ssn?: string; }`\n\n**put** `/sandbox/individual/{individual_id}`\n\nUpdate sandbox individual\n\n### Parameters\n\n- `individual_id: string`\n\n- `dob?: string`\n\n- `emails?: { data?: string; type?: 'work' | 'personal'; }[]`\n\n- `encrypted_ssn?: string`\n  Social Security Number of the individual in **encrypted** format. This field is only available with the `ssn` scope enabled and the `options: { include: ['ssn'] }` param set in the body.\n\n- `ethnicity?: string`\n  The EEOC-defined ethnicity of the individual.\n\n- `first_name?: string`\n  The legal first name of the individual.\n\n- `gender?: 'female' | 'male' | 'other' | 'decline_to_specify'`\n  The gender of the individual.\n\n- `last_name?: string`\n  The legal last name of the individual.\n\n- `middle_name?: string`\n  The legal middle name of the individual.\n\n- `phone_numbers?: { data?: string; type?: 'work' | 'personal'; }[]`\n\n- `preferred_name?: string`\n  The preferred name of the individual.\n\n- `residence?: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }`\n  - `city: string`\n    City, district, suburb, town, or village.\n  - `country: string`\n    The 2-letter ISO 3166 country code.\n  - `line1: string`\n    Street address or PO box.\n  - `line2: string`\n    Apartment, suite, unit, or building.\n  - `postal_code: string`\n    The postal code or zip code.\n  - `state: string`\n    The state code.\n  - `name?: string`\n  - `source_id?: string`\n\n- `ssn?: string`\n  Social Security Number of the individual. This field is only available with the `ssn` scope enabled and the `options: { include: ['ssn'] }` param set in the body. [Click here to learn more about enabling the SSN field](/developer-resources/Enable-SSN-Field).\n\n### Returns\n\n- `{ id?: string; dob?: string; emails?: { data?: string; type?: 'work' | 'personal'; }[]; encrypted_ssn?: string; ethnicity?: string; first_name?: string; gender?: 'female' | 'male' | 'other' | 'decline_to_specify'; last_name?: string; middle_name?: string; phone_numbers?: { data?: string; type?: 'work' | 'personal'; }[]; preferred_name?: string; residence?: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }; ssn?: string; }`\n\n  - `id?: string`\n  - `dob?: string`\n  - `emails?: { data?: string; type?: 'work' | 'personal'; }[]`\n  - `encrypted_ssn?: string`\n  - `ethnicity?: string`\n  - `first_name?: string`\n  - `gender?: 'female' | 'male' | 'other' | 'decline_to_specify'`\n  - `last_name?: string`\n  - `middle_name?: string`\n  - `phone_numbers?: { data?: string; type?: 'work' | 'personal'; }[]`\n  - `preferred_name?: string`\n  - `residence?: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }`\n  - `ssn?: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst individual = await client.sandbox.individual.update('individual_id');\n\nconsole.log(individual);\n```",
  },
  {
    name: 'update',
    endpoint: '/sandbox/employment/{individual_id}',
    httpMethod: 'put',
    summary: 'Update sandbox employment',
    description: 'Update sandbox employment',
    stainlessPath: '(resource) sandbox.employment > (method) update',
    qualified: 'client.sandbox.employment.update',
    params: [
      'individual_id: string;',
      'class_code?: string;',
      'custom_fields?: { name?: string; value?: object; }[];',
      'department?: { name?: string; };',
      "employment?: { subtype?: 'full_time' | 'intern' | 'part_time' | 'temp' | 'seasonal' | 'individual_contractor'; type?: 'employee' | 'contractor'; };",
      "employment_status?: 'active' | 'deceased' | 'leave' | 'onboarding' | 'prehire' | 'retired' | 'terminated';",
      'end_date?: string;',
      'first_name?: string;',
      "flsa_status?: 'exempt' | 'non_exempt' | 'unknown';",
      'income?: { amount: number; currency: string; effective_date: string; unit: string; };',
      'income_history?: { amount: number; currency: string; effective_date: string; unit: string; }[];',
      'is_active?: boolean;',
      'last_name?: string;',
      'latest_rehire_date?: string;',
      'location?: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; };',
      'manager?: { id?: string; };',
      'middle_name?: string;',
      'source_id?: string;',
      'start_date?: string;',
      'title?: string;',
    ],
    response:
      "{ id?: string; class_code?: string; custom_fields?: { name?: string; value?: object; }[]; department?: { name?: string; }; employment?: { subtype?: 'full_time' | 'intern' | 'part_time' | 'temp' | 'seasonal' | 'individual_contractor'; type?: 'employee' | 'contractor'; }; employment_status?: 'active' | 'deceased' | 'leave' | 'onboarding' | 'prehire' | 'retired' | 'terminated'; end_date?: string; first_name?: string; flsa_status?: 'exempt' | 'non_exempt' | 'unknown'; income?: { amount: number; currency: string; effective_date: string; unit: string; }; income_history?: { amount: number; currency: string; effective_date: string; unit: string; }[]; is_active?: boolean; last_name?: string; latest_rehire_date?: string; location?: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }; manager?: { id?: string; }; middle_name?: string; source_id?: string; start_date?: string; title?: string; }",
    markdown:
      "## update\n\n`client.sandbox.employment.update(individual_id: string, class_code?: string, custom_fields?: { name?: string; value?: object; }[], department?: { name?: string; }, employment?: { subtype?: 'full_time' | 'intern' | 'part_time' | 'temp' | 'seasonal' | 'individual_contractor'; type?: 'employee' | 'contractor'; }, employment_status?: 'active' | 'deceased' | 'leave' | 'onboarding' | 'prehire' | 'retired' | 'terminated', end_date?: string, first_name?: string, flsa_status?: 'exempt' | 'non_exempt' | 'unknown', income?: { amount: number; currency: string; effective_date: string; unit: string; }, income_history?: { amount: number; currency: string; effective_date: string; unit: string; }[], is_active?: boolean, last_name?: string, latest_rehire_date?: string, location?: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }, manager?: { id?: string; }, middle_name?: string, source_id?: string, start_date?: string, title?: string): { id?: string; class_code?: string; custom_fields?: object[]; department?: object; employment?: object; employment_status?: 'active' | 'deceased' | 'leave' | 'onboarding' | 'prehire' | 'retired' | 'terminated'; end_date?: string; first_name?: string; flsa_status?: 'exempt' | 'non_exempt' | 'unknown'; income?: income; income_history?: income[]; is_active?: boolean; last_name?: string; latest_rehire_date?: string; location?: location; manager?: object; middle_name?: string; source_id?: string; start_date?: string; title?: string; }`\n\n**put** `/sandbox/employment/{individual_id}`\n\nUpdate sandbox employment\n\n### Parameters\n\n- `individual_id: string`\n\n- `class_code?: string`\n  Worker's compensation classification code for this employee\n\n- `custom_fields?: { name?: string; value?: object; }[]`\n  Custom fields for the individual. These are fields which are defined by the employer in the system. Custom fields are not currently supported for assisted connections.\n\n- `department?: { name?: string; }`\n  The department object.\n  - `name?: string`\n    The name of the department associated with the individual.\n\n- `employment?: { subtype?: 'full_time' | 'intern' | 'part_time' | 'temp' | 'seasonal' | 'individual_contractor'; type?: 'employee' | 'contractor'; }`\n  The employment object.\n  - `subtype?: 'full_time' | 'intern' | 'part_time' | 'temp' | 'seasonal' | 'individual_contractor'`\n    The secondary employment type of the individual. Options: `full_time`, `part_time`, `intern`, `temp`, `seasonal` and `individual_contractor`.\n  - `type?: 'employee' | 'contractor'`\n    The main employment type of the individual.\n\n- `employment_status?: 'active' | 'deceased' | 'leave' | 'onboarding' | 'prehire' | 'retired' | 'terminated'`\n  The detailed employment status of the individual.\n\n- `end_date?: string`\n\n- `first_name?: string`\n  The legal first name of the individual.\n\n- `flsa_status?: 'exempt' | 'non_exempt' | 'unknown'`\n  The FLSA status of the individual. Available options: `exempt`, `non_exempt`, `unknown`.\n\n- `income?: { amount: number; currency: string; effective_date: string; unit: string; }`\n  The employee's income as reported by the provider. This may not always be annualized income, but may be in units of bi-weekly, semi-monthly, daily, etc, depending on what information the provider returns.\n  - `amount: number`\n    The income amount in cents.\n  - `currency: string`\n    The currency code.\n  - `effective_date: string`\n    The date the income amount went into effect.\n  - `unit: string`\n    The income unit of payment. Options: `yearly`, `quarterly`, `monthly`, `semi_monthly`, `bi_weekly`, `weekly`, `daily`, `hourly`, and `fixed`.\n\n- `income_history?: { amount: number; currency: string; effective_date: string; unit: string; }[]`\n  The array of income history.\n\n- `is_active?: boolean`\n  `true` if the individual an an active employee or contractor at the company.\n\n- `last_name?: string`\n  The legal last name of the individual.\n\n- `latest_rehire_date?: string`\n\n- `location?: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }`\n  - `city: string`\n    City, district, suburb, town, or village.\n  - `country: string`\n    The 2-letter ISO 3166 country code.\n  - `line1: string`\n    Street address or PO box.\n  - `line2: string`\n    Apartment, suite, unit, or building.\n  - `postal_code: string`\n    The postal code or zip code.\n  - `state: string`\n    The state code.\n  - `name?: string`\n  - `source_id?: string`\n\n- `manager?: { id?: string; }`\n  The manager object representing the manager of the individual within the org.\n  - `id?: string`\n    A stable Finch `id` (UUID v4) for an individual in the company.\n\n- `middle_name?: string`\n  The legal middle name of the individual.\n\n- `source_id?: string`\n  The source system's unique employment identifier for this individual\n\n- `start_date?: string`\n\n- `title?: string`\n  The current title of the individual.\n\n### Returns\n\n- `{ id?: string; class_code?: string; custom_fields?: { name?: string; value?: object; }[]; department?: { name?: string; }; employment?: { subtype?: 'full_time' | 'intern' | 'part_time' | 'temp' | 'seasonal' | 'individual_contractor'; type?: 'employee' | 'contractor'; }; employment_status?: 'active' | 'deceased' | 'leave' | 'onboarding' | 'prehire' | 'retired' | 'terminated'; end_date?: string; first_name?: string; flsa_status?: 'exempt' | 'non_exempt' | 'unknown'; income?: { amount: number; currency: string; effective_date: string; unit: string; }; income_history?: { amount: number; currency: string; effective_date: string; unit: string; }[]; is_active?: boolean; last_name?: string; latest_rehire_date?: string; location?: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }; manager?: { id?: string; }; middle_name?: string; source_id?: string; start_date?: string; title?: string; }`\n\n  - `id?: string`\n  - `class_code?: string`\n  - `custom_fields?: { name?: string; value?: object; }[]`\n  - `department?: { name?: string; }`\n  - `employment?: { subtype?: 'full_time' | 'intern' | 'part_time' | 'temp' | 'seasonal' | 'individual_contractor'; type?: 'employee' | 'contractor'; }`\n  - `employment_status?: 'active' | 'deceased' | 'leave' | 'onboarding' | 'prehire' | 'retired' | 'terminated'`\n  - `end_date?: string`\n  - `first_name?: string`\n  - `flsa_status?: 'exempt' | 'non_exempt' | 'unknown'`\n  - `income?: { amount: number; currency: string; effective_date: string; unit: string; }`\n  - `income_history?: { amount: number; currency: string; effective_date: string; unit: string; }[]`\n  - `is_active?: boolean`\n  - `last_name?: string`\n  - `latest_rehire_date?: string`\n  - `location?: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; name?: string; source_id?: string; }`\n  - `manager?: { id?: string; }`\n  - `middle_name?: string`\n  - `source_id?: string`\n  - `start_date?: string`\n  - `title?: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst employment = await client.sandbox.employment.update('individual_id');\n\nconsole.log(employment);\n```",
  },
  {
    name: 'create',
    endpoint: '/sandbox/payment',
    httpMethod: 'post',
    summary: 'Add a new sandbox payment',
    description: 'Add a new sandbox payment',
    stainlessPath: '(resource) sandbox.payment > (method) create',
    qualified: 'client.sandbox.payment.create',
    params: [
      'end_date?: string;',
      "pay_statements?: { individual_id: string; earnings?: { amount?: number; hours?: number; name?: string; type?: string; }[]; employee_deductions?: { amount?: number; name?: string; pre_tax?: boolean; type?: string; }[]; employer_contributions?: { amount?: number; name?: string; type?: string; }[]; gross_pay?: number; net_pay?: number; payment_method?: 'check' | 'direct_deposit' | 'other'; taxes?: { amount?: number; employer?: boolean; name?: string; type?: 'federal' | 'fica' | 'local' | 'state'; }[]; total_hours?: number; type?: 'off_cycle_payroll' | 'one_time_payment' | 'regular_payroll'; }[];",
      'start_date?: string;',
    ],
    response: '{ pay_date: string; payment_id: string; }',
    markdown:
      "## create\n\n`client.sandbox.payment.create(end_date?: string, pay_statements?: { individual_id: string; earnings?: { amount?: number; hours?: number; name?: string; type?: string; }[]; employee_deductions?: { amount?: number; name?: string; pre_tax?: boolean; type?: string; }[]; employer_contributions?: { amount?: number; name?: string; type?: string; }[]; gross_pay?: number; net_pay?: number; payment_method?: 'check' | 'direct_deposit' | 'other'; taxes?: { amount?: number; employer?: boolean; name?: string; type?: 'federal' | 'fica' | 'local' | 'state'; }[]; total_hours?: number; type?: 'off_cycle_payroll' | 'one_time_payment' | 'regular_payroll'; }[], start_date?: string): { pay_date: string; payment_id: string; }`\n\n**post** `/sandbox/payment`\n\nAdd a new sandbox payment\n\n### Parameters\n\n- `end_date?: string`\n\n- `pay_statements?: { individual_id: string; earnings?: { amount?: number; hours?: number; name?: string; type?: string; }[]; employee_deductions?: { amount?: number; name?: string; pre_tax?: boolean; type?: string; }[]; employer_contributions?: { amount?: number; name?: string; type?: string; }[]; gross_pay?: number; net_pay?: number; payment_method?: 'check' | 'direct_deposit' | 'other'; taxes?: { amount?: number; employer?: boolean; name?: string; type?: 'federal' | 'fica' | 'local' | 'state'; }[]; total_hours?: number; type?: 'off_cycle_payroll' | 'one_time_payment' | 'regular_payroll'; }[]`\n  Array of pay statements to include in the payment.\n\n- `start_date?: string`\n\n### Returns\n\n- `{ pay_date: string; payment_id: string; }`\n\n  - `pay_date: string`\n  - `payment_id: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst payment = await client.sandbox.payment.create();\n\nconsole.log(payment);\n```",
  },
  {
    name: 'create',
    endpoint: '/sandbox/jobs',
    httpMethod: 'post',
    summary: 'Enqueue a new sandbox job',
    description: 'Enqueue a new sandbox job',
    stainlessPath: '(resource) sandbox.jobs > (method) create',
    qualified: 'client.sandbox.jobs.create',
    params: ["type: 'data_sync_all';"],
    response: '{ allowed_refreshes: number; job_id: string; job_url: string; remaining_refreshes: number; }',
    markdown:
      "## create\n\n`client.sandbox.jobs.create(type: 'data_sync_all'): { allowed_refreshes: number; job_id: string; job_url: string; remaining_refreshes: number; }`\n\n**post** `/sandbox/jobs`\n\nEnqueue a new sandbox job\n\n### Parameters\n\n- `type: 'data_sync_all'`\n  The type of job to start. Currently the only supported type is `data_sync_all`\n\n### Returns\n\n- `{ allowed_refreshes: number; job_id: string; job_url: string; remaining_refreshes: number; }`\n\n  - `allowed_refreshes: number`\n  - `job_id: string`\n  - `job_url: string`\n  - `remaining_refreshes: number`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst job = await client.sandbox.jobs.create({ type: 'data_sync_all' });\n\nconsole.log(job);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/sandbox/jobs/configuration',
    httpMethod: 'get',
    summary: 'Get configurations for sandbox jobs',
    description: 'Get configurations for sandbox jobs',
    stainlessPath: '(resource) sandbox.jobs.configuration > (method) retrieve',
    qualified: 'client.sandbox.jobs.configuration.retrieve',
    response:
      "{ completion_status: 'complete' | 'reauth_error' | 'permissions_error' | 'error'; type: 'data_sync_all'; }[]",
    markdown:
      "## retrieve\n\n`client.sandbox.jobs.configuration.retrieve(): object[]`\n\n**get** `/sandbox/jobs/configuration`\n\nGet configurations for sandbox jobs\n\n### Returns\n\n- `{ completion_status: 'complete' | 'reauth_error' | 'permissions_error' | 'error'; type: 'data_sync_all'; }[]`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst sandboxJobConfigurations = await client.sandbox.jobs.configuration.retrieve();\n\nconsole.log(sandboxJobConfigurations);\n```",
  },
  {
    name: 'update',
    endpoint: '/sandbox/jobs/configuration',
    httpMethod: 'put',
    summary: 'Update configurations for sandbox jobs',
    description: 'Update configurations for sandbox jobs',
    stainlessPath: '(resource) sandbox.jobs.configuration > (method) update',
    qualified: 'client.sandbox.jobs.configuration.update',
    params: [
      "completion_status: 'complete' | 'reauth_error' | 'permissions_error' | 'error';",
      "type: 'data_sync_all';",
    ],
    response:
      "{ completion_status: 'complete' | 'reauth_error' | 'permissions_error' | 'error'; type: 'data_sync_all'; }",
    markdown:
      "## update\n\n`client.sandbox.jobs.configuration.update(completion_status: 'complete' | 'reauth_error' | 'permissions_error' | 'error', type: 'data_sync_all'): { completion_status: 'complete' | 'reauth_error' | 'permissions_error' | 'error'; type: 'data_sync_all'; }`\n\n**put** `/sandbox/jobs/configuration`\n\nUpdate configurations for sandbox jobs\n\n### Parameters\n\n- `completion_status: 'complete' | 'reauth_error' | 'permissions_error' | 'error'`\n\n- `type: 'data_sync_all'`\n\n### Returns\n\n- `{ completion_status: 'complete' | 'reauth_error' | 'permissions_error' | 'error'; type: 'data_sync_all'; }`\n\n  - `completion_status: 'complete' | 'reauth_error' | 'permissions_error' | 'error'`\n  - `type: 'data_sync_all'`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst sandboxJobConfiguration = await client.sandbox.jobs.configuration.update({ completion_status: 'complete', type: 'data_sync_all' });\n\nconsole.log(sandboxJobConfiguration);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/employer/pay-groups/{pay_group_id}',
    httpMethod: 'get',
    summary: 'Get Pay Group',
    description: 'Read information from a single pay group',
    stainlessPath: '(resource) payroll.pay_groups > (method) retrieve',
    qualified: 'client.payroll.payGroups.retrieve',
    params: ['pay_group_id: string;', 'entity_ids?: string[];'],
    response: '{ id: string; individual_ids: string[]; name: string; pay_frequencies: string[]; }',
    markdown:
      "## retrieve\n\n`client.payroll.payGroups.retrieve(pay_group_id: string, entity_ids?: string[]): { id: string; individual_ids: string[]; name: string; pay_frequencies: string[]; }`\n\n**get** `/employer/pay-groups/{pay_group_id}`\n\nRead information from a single pay group\n\n### Parameters\n\n- `pay_group_id: string`\n\n- `entity_ids?: string[]`\n  The entity IDs to specify which entities' data to access.\n\n### Returns\n\n- `{ id: string; individual_ids: string[]; name: string; pay_frequencies: string[]; }`\n\n  - `id: string`\n  - `individual_ids: string[]`\n  - `name: string`\n  - `pay_frequencies: string[]`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst payGroup = await client.payroll.payGroups.retrieve('pay_group_id');\n\nconsole.log(payGroup);\n```",
  },
  {
    name: 'list',
    endpoint: '/employer/pay-groups',
    httpMethod: 'get',
    summary: 'Get All Pay Groups',
    description: 'Read company pay groups and frequencies',
    stainlessPath: '(resource) payroll.pay_groups > (method) list',
    qualified: 'client.payroll.payGroups.list',
    params: ['entity_ids?: string[];', 'individual_id?: string;', 'pay_frequencies?: string[];'],
    response: '{ id: string; name: string; pay_frequencies: string[]; }',
    markdown:
      "## list\n\n`client.payroll.payGroups.list(entity_ids?: string[], individual_id?: string, pay_frequencies?: string[]): { id: string; name: string; pay_frequencies: string[]; }`\n\n**get** `/employer/pay-groups`\n\nRead company pay groups and frequencies\n\n### Parameters\n\n- `entity_ids?: string[]`\n  The entity IDs to specify which entities' data to access.\n\n- `individual_id?: string`\n\n- `pay_frequencies?: string[]`\n\n### Returns\n\n- `{ id: string; name: string; pay_frequencies: string[]; }`\n\n  - `id: string`\n  - `name: string`\n  - `pay_frequencies: string[]`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\n// Automatically fetches more pages as needed.\nfor await (const payGroupListResponse of client.payroll.payGroups.list()) {\n  console.log(payGroupListResponse);\n}\n```",
  },
  {
    name: 'new',
    endpoint: '/connect/sessions',
    httpMethod: 'post',
    summary: 'Create a new connect session',
    description: 'Create a new connect session for an employer',
    stainlessPath: '(resource) connect.sessions > (method) new',
    qualified: 'client.connect.sessions.new',
    params: [
      'customer_id: string;',
      'customer_name: string;',
      'products: string[];',
      'customer_email?: string;',
      "integration?: { provider: string; auth_method?: 'assisted' | 'credential' | 'oauth' | 'api_token'; };",
      'manual?: boolean;',
      'minutes_to_expire?: number;',
      'redirect_uri?: string;',
      "sandbox?: 'finch' | 'provider';",
    ],
    response: '{ connect_url: string; session_id: string; }',
    markdown:
      "## new\n\n`client.connect.sessions.new(customer_id: string, customer_name: string, products: string[], customer_email?: string, integration?: { provider: string; auth_method?: 'assisted' | 'credential' | 'oauth' | 'api_token'; }, manual?: boolean, minutes_to_expire?: number, redirect_uri?: string, sandbox?: 'finch' | 'provider'): { connect_url: string; session_id: string; }`\n\n**post** `/connect/sessions`\n\nCreate a new connect session for an employer\n\n### Parameters\n\n- `customer_id: string`\n  Unique identifier for the customer\n\n- `customer_name: string`\n  Name of the customer\n\n- `products: string[]`\n  The Finch products to request access to\n\n- `customer_email?: string`\n  Email address of the customer\n\n- `integration?: { provider: string; auth_method?: 'assisted' | 'credential' | 'oauth' | 'api_token'; }`\n  Integration configuration for the connect session\n  - `provider: string`\n    The provider to integrate with\n  - `auth_method?: 'assisted' | 'credential' | 'oauth' | 'api_token'`\n    The authentication method to use\n\n- `manual?: boolean`\n  Enable manual authentication mode\n\n- `minutes_to_expire?: number`\n  The number of minutes until the session expires (defaults to 129,600, which is 90 days)\n\n- `redirect_uri?: string`\n  The URI to redirect to after the Connect flow is completed\n\n- `sandbox?: 'finch' | 'provider'`\n  Sandbox mode for testing\n\n### Returns\n\n- `{ connect_url: string; session_id: string; }`\n\n  - `connect_url: string`\n  - `session_id: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst response = await client.connect.sessions.new({\n  customer_id: 'x',\n  customer_name: 'x',\n  products: ['benefits'],\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'reauthenticate',
    endpoint: '/connect/sessions/reauthenticate',
    httpMethod: 'post',
    summary: 'Create a new Connect session for reauthentication',
    description: 'Create a new Connect session for reauthenticating an existing connection',
    stainlessPath: '(resource) connect.sessions > (method) reauthenticate',
    qualified: 'client.connect.sessions.reauthenticate',
    params: [
      'connection_id: string;',
      'minutes_to_expire?: number;',
      'products?: string[];',
      'redirect_uri?: string;',
    ],
    response: '{ connect_url: string; session_id: string; }',
    markdown:
      "## reauthenticate\n\n`client.connect.sessions.reauthenticate(connection_id: string, minutes_to_expire?: number, products?: string[], redirect_uri?: string): { connect_url: string; session_id: string; }`\n\n**post** `/connect/sessions/reauthenticate`\n\nCreate a new Connect session for reauthenticating an existing connection\n\n### Parameters\n\n- `connection_id: string`\n  The ID of the existing connection to reauthenticate\n\n- `minutes_to_expire?: number`\n  The number of minutes until the session expires (defaults to 43,200, which is 30 days)\n\n- `products?: string[]`\n  The products to request access to (optional for reauthentication)\n\n- `redirect_uri?: string`\n  The URI to redirect to after the Connect flow is completed\n\n### Returns\n\n- `{ connect_url: string; session_id: string; }`\n\n  - `connect_url: string`\n  - `session_id: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst response = await client.connect.sessions.reauthenticate({ connection_id: 'connection_id' });\n\nconsole.log(response);\n```",
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
