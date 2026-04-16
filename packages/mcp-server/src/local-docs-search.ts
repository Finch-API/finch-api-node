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
    perLanguage: {
      go: {
        method: 'client.AccessTokens.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t\toption.WithClientID("4ab15e51-11ad-49f4-acae-f343b7794375"),\n\t\toption.WithClientSecret("My Client Secret"),\n\t)\n\tcreateAccessTokenResponse, err := client.AccessTokens.New(context.TODO(), finchgo.AccessTokenNewParams{\n\t\tCode: finchgo.F("code"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", createAccessTokenResponse.ConnectionID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/auth/token \\\n    -H \'Content-Type: application/json\' \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN" \\\n    -d \'{\n          "code": "code"\n        }\'',
      },
      java: {
        method: 'accessTokens().create',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.AccessTokenCreateParams;\nimport com.tryfinch.api.models.CreateAccessTokenResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        AccessTokenCreateParams params = AccessTokenCreateParams.builder()\n            .code("code")\n            .build();\n        CreateAccessTokenResponse createAccessTokenResponse = client.accessTokens().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'accessTokens().create',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.AccessTokenCreateParams\nimport com.tryfinch.api.models.CreateAccessTokenResponse\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val params: AccessTokenCreateParams = AccessTokenCreateParams.builder()\n        .code("code")\n        .build()\n    val createAccessTokenResponse: CreateAccessTokenResponse = client.accessTokens().create(params)\n}',
      },
      python: {
        method: 'access_tokens.create',
        example:
          'from finch import Finch\n\nclient = Finch()\ncreate_access_token_response = client.access_tokens.create(\n    code="code",\n)\nprint(create_access_token_response.connection_id)',
      },
      ruby: {
        method: 'access_tokens.create',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(\n  access_token: "My Access Token",\n  client_id: "4ab15e51-11ad-49f4-acae-f343b7794375",\n  client_secret: "My Client Secret"\n)\n\ncreate_access_token_response = finch.access_tokens.create(code: "code")\n\nputs(create_access_token_response)',
      },
      typescript: {
        method: 'client.accessTokens.create',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst createAccessTokenResponse = await client.accessTokens.create({ code: 'code' });\n\nconsole.log(createAccessTokenResponse.connection_id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.Company.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tcompany, err := client.HRIS.Company.Get(context.TODO(), finchgo.HRISCompanyGetParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", company.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/company \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'hris().company().retrieve',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.Company;\nimport com.tryfinch.api.models.HrisCompanyRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        Company company = client.hris().company().retrieve();\n    }\n}',
      },
      kotlin: {
        method: 'hris().company().retrieve',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.Company\nimport com.tryfinch.api.models.HrisCompanyRetrieveParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val company: Company = client.hris().company().retrieve()\n}',
      },
      python: {
        method: 'hris.company.retrieve',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\ncompany = client.hris.company.retrieve()\nprint(company.id)',
      },
      ruby: {
        method: 'hris.company.retrieve',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\ncompany = finch.hris.company.retrieve\n\nputs(company)',
      },
      typescript: {
        method: 'client.hris.company.retrieve',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst company = await client.hris.company.retrieve();\n\nconsole.log(company.id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.Company.PayStatementItem.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tpage, err := client.HRIS.Company.PayStatementItem.List(context.TODO(), finchgo.HRISCompanyPayStatementItemListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/pay-statement-item \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'hris().company().payStatementItem().list',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.HrisCompanyPayStatementItemListPage;\nimport com.tryfinch.api.models.HrisCompanyPayStatementItemListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        HrisCompanyPayStatementItemListPage page = client.hris().company().payStatementItem().list();\n    }\n}',
      },
      kotlin: {
        method: 'hris().company().payStatementItem().list',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.HrisCompanyPayStatementItemListPage\nimport com.tryfinch.api.models.HrisCompanyPayStatementItemListParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val page: HrisCompanyPayStatementItemListPage = client.hris().company().payStatementItem().list()\n}',
      },
      python: {
        method: 'hris.company.pay_statement_item.list',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\npage = client.hris.company.pay_statement_item.list()\npage = page.responses[0]\nprint(page.attributes)',
      },
      ruby: {
        method: 'hris.company.pay_statement_item.list',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\npage = finch.hris.company.pay_statement_item.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.hris.company.payStatementItem.list',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\n// Automatically fetches more pages as needed.\nfor await (const payStatementItemListResponse of client.hris.company.payStatementItem.list()) {\n  console.log(payStatementItemListResponse.attributes);\n}",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.Company.PayStatementItem.Rules.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\trule, err := client.HRIS.Company.PayStatementItem.Rules.New(context.TODO(), finchgo.HRISCompanyPayStatementItemRuleNewParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", rule.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/pay-statement-item/rule \\\n    -X POST \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'hris().company().payStatementItem().rules().create',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.HrisCompanyPayStatementItemRuleCreateParams;\nimport com.tryfinch.api.models.RuleCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        RuleCreateResponse rule = client.hris().company().payStatementItem().rules().create();\n    }\n}',
      },
      kotlin: {
        method: 'hris().company().payStatementItem().rules().create',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.HrisCompanyPayStatementItemRuleCreateParams\nimport com.tryfinch.api.models.RuleCreateResponse\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val rule: RuleCreateResponse = client.hris().company().payStatementItem().rules().create()\n}',
      },
      python: {
        method: 'hris.company.pay_statement_item.rules.create',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\nrule = client.hris.company.pay_statement_item.rules.create()\nprint(rule.id)',
      },
      ruby: {
        method: 'hris.company.pay_statement_item.rules.create',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\nrule = finch.hris.company.pay_statement_item.rules.create\n\nputs(rule)',
      },
      typescript: {
        method: 'client.hris.company.payStatementItem.rules.create',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst rule = await client.hris.company.payStatementItem.rules.create();\n\nconsole.log(rule.id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.Company.PayStatementItem.Rules.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tpage, err := client.HRIS.Company.PayStatementItem.Rules.List(context.TODO(), finchgo.HRISCompanyPayStatementItemRuleListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/pay-statement-item/rule \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'hris().company().payStatementItem().rules().list',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.HrisCompanyPayStatementItemRuleListPage;\nimport com.tryfinch.api.models.HrisCompanyPayStatementItemRuleListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        HrisCompanyPayStatementItemRuleListPage page = client.hris().company().payStatementItem().rules().list();\n    }\n}',
      },
      kotlin: {
        method: 'hris().company().payStatementItem().rules().list',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.HrisCompanyPayStatementItemRuleListPage\nimport com.tryfinch.api.models.HrisCompanyPayStatementItemRuleListParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val page: HrisCompanyPayStatementItemRuleListPage = client.hris().company().payStatementItem().rules().list()\n}',
      },
      python: {
        method: 'hris.company.pay_statement_item.rules.list',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\npage = client.hris.company.pay_statement_item.rules.list()\npage = page.responses[0]\nprint(page.id)',
      },
      ruby: {
        method: 'hris.company.pay_statement_item.rules.list',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\npage = finch.hris.company.pay_statement_item.rules.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.hris.company.payStatementItem.rules.list',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\n// Automatically fetches more pages as needed.\nfor await (const ruleListResponse of client.hris.company.payStatementItem.rules.list()) {\n  console.log(ruleListResponse.id);\n}",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.Company.PayStatementItem.Rules.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\trule, err := client.HRIS.Company.PayStatementItem.Rules.Update(\n\t\tcontext.TODO(),\n\t\t"rule_id",\n\t\tfinchgo.HRISCompanyPayStatementItemRuleUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", rule.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/pay-statement-item/rule/$RULE_ID \\\n    -X PUT \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'hris().company().payStatementItem().rules().update',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.HrisCompanyPayStatementItemRuleUpdateParams;\nimport com.tryfinch.api.models.RuleUpdateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        RuleUpdateResponse rule = client.hris().company().payStatementItem().rules().update("rule_id");\n    }\n}',
      },
      kotlin: {
        method: 'hris().company().payStatementItem().rules().update',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.HrisCompanyPayStatementItemRuleUpdateParams\nimport com.tryfinch.api.models.RuleUpdateResponse\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val rule: RuleUpdateResponse = client.hris().company().payStatementItem().rules().update("rule_id")\n}',
      },
      python: {
        method: 'hris.company.pay_statement_item.rules.update',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\nrule = client.hris.company.pay_statement_item.rules.update(\n    rule_id="rule_id",\n)\nprint(rule.id)',
      },
      ruby: {
        method: 'hris.company.pay_statement_item.rules.update',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\nrule = finch.hris.company.pay_statement_item.rules.update("rule_id")\n\nputs(rule)',
      },
      typescript: {
        method: 'client.hris.company.payStatementItem.rules.update',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst rule = await client.hris.company.payStatementItem.rules.update('rule_id');\n\nconsole.log(rule.id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.Company.PayStatementItem.Rules.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\trule, err := client.HRIS.Company.PayStatementItem.Rules.Delete(\n\t\tcontext.TODO(),\n\t\t"rule_id",\n\t\tfinchgo.HRISCompanyPayStatementItemRuleDeleteParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", rule.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/pay-statement-item/rule/$RULE_ID \\\n    -X DELETE \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'hris().company().payStatementItem().rules().delete',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.HrisCompanyPayStatementItemRuleDeleteParams;\nimport com.tryfinch.api.models.RuleDeleteResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        RuleDeleteResponse rule = client.hris().company().payStatementItem().rules().delete("rule_id");\n    }\n}',
      },
      kotlin: {
        method: 'hris().company().payStatementItem().rules().delete',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.HrisCompanyPayStatementItemRuleDeleteParams\nimport com.tryfinch.api.models.RuleDeleteResponse\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val rule: RuleDeleteResponse = client.hris().company().payStatementItem().rules().delete("rule_id")\n}',
      },
      python: {
        method: 'hris.company.pay_statement_item.rules.delete',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\nrule = client.hris.company.pay_statement_item.rules.delete(\n    rule_id="rule_id",\n)\nprint(rule.id)',
      },
      ruby: {
        method: 'hris.company.pay_statement_item.rules.delete',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\nrule = finch.hris.company.pay_statement_item.rules.delete("rule_id")\n\nputs(rule)',
      },
      typescript: {
        method: 'client.hris.company.payStatementItem.rules.delete',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst rule = await client.hris.company.payStatementItem.rules.delete('rule_id');\n\nconsole.log(rule.id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.Directory.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tpage, err := client.HRIS.Directory.List(context.TODO(), finchgo.HRISDirectoryListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/directory \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'hris().directory().list',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.HrisDirectoryListPage;\nimport com.tryfinch.api.models.HrisDirectoryListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        HrisDirectoryListPage page = client.hris().directory().list();\n    }\n}',
      },
      kotlin: {
        method: 'hris().directory().list',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.HrisDirectoryListPage\nimport com.tryfinch.api.models.HrisDirectoryListParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val page: HrisDirectoryListPage = client.hris().directory().list()\n}',
      },
      python: {
        method: 'hris.directory.list',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\npage = client.hris.directory.list()\npage = page.individuals[0]\nprint(page.id)',
      },
      ruby: {
        method: 'hris.directory.list',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\npage = finch.hris.directory.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.hris.directory.list',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\n// Automatically fetches more pages as needed.\nfor await (const individualInDirectory of client.hris.directory.list()) {\n  console.log(individualInDirectory.id);\n}",
      },
    },
  },
  {
    name: 'list_individuals',
    endpoint: '/employer/directory',
    httpMethod: 'get',
    summary: 'Directory',
    description: 'Read company directory and organization structure',
    stainlessPath: '(resource) hris.directory > (method) list_individuals',
    qualified: 'client.hris.directory.listIndividuals',
    perLanguage: {
      go: {
        method: 'client.HRIS.Directory.ListIndividuals',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tresponse, err := client.HRIS.Directory.ListIndividuals(context.TODO(), finchgo.HRISDirectoryListIndividualsParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Individuals)\n}\n',
      },
      java: {
        method: 'hris().directory().listIndividuals',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.DirectoryListIndividualsResponse;\nimport com.tryfinch.api.models.HrisDirectoryListIndividualsParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        DirectoryListIndividualsResponse response = client.hris().directory().listIndividuals();\n    }\n}',
      },
      kotlin: {
        method: 'hris().directory().listIndividuals',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.DirectoryListIndividualsResponse\nimport com.tryfinch.api.models.HrisDirectoryListIndividualsParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val response: DirectoryListIndividualsResponse = client.hris().directory().listIndividuals()\n}',
      },
      python: {
        method: 'hris.directory.list_individuals',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\nresponse = client.hris.directory.list_individuals()\nprint(response.individuals)',
      },
      ruby: {
        method: 'hris.directory.list_individuals',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\nresponse = finch.hris.directory.list_individuals\n\nputs(response)',
      },
      typescript: {
        method: 'client.hris.directory.listIndividuals',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst response = await client.hris.directory.listIndividuals();\n\nconsole.log(response.individuals);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.Individuals.GetMany',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tpage, err := client.HRIS.Individuals.GetMany(context.TODO(), finchgo.HRISIndividualGetManyParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/individual \\\n    -X POST \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'hris().individuals().retrieveMany',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.HrisIndividualRetrieveManyPage;\nimport com.tryfinch.api.models.HrisIndividualRetrieveManyParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        HrisIndividualRetrieveManyPage page = client.hris().individuals().retrieveMany();\n    }\n}',
      },
      kotlin: {
        method: 'hris().individuals().retrieveMany',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.HrisIndividualRetrieveManyPage\nimport com.tryfinch.api.models.HrisIndividualRetrieveManyParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val page: HrisIndividualRetrieveManyPage = client.hris().individuals().retrieveMany()\n}',
      },
      python: {
        method: 'hris.individuals.retrieve_many',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\npage = client.hris.individuals.retrieve_many()\npage = page.responses[0]\nprint(page.individual_id)',
      },
      ruby: {
        method: 'hris.individuals.retrieve_many',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\npage = finch.hris.individuals.retrieve_many\n\nputs(page)',
      },
      typescript: {
        method: 'client.hris.individuals.retrieveMany',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\n// Automatically fetches more pages as needed.\nfor await (const individualResponse of client.hris.individuals.retrieveMany()) {\n  console.log(individualResponse.individual_id);\n}",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.Employments.GetMany',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tpage, err := client.HRIS.Employments.GetMany(context.TODO(), finchgo.HRISEmploymentGetManyParams{\n\t\tRequests: finchgo.F([]finchgo.HRISEmploymentGetManyParamsRequest{{\n\t\t\tIndividualID: finchgo.F("individual_id"),\n\t\t}}),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/employment \\\n    -H \'Content-Type: application/json\' \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN" \\\n    -d \'{\n          "requests": [\n            {\n              "individual_id": "individual_id"\n            }\n          ]\n        }\'',
      },
      java: {
        method: 'hris().employments().retrieveMany',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.HrisEmploymentRetrieveManyPage;\nimport com.tryfinch.api.models.HrisEmploymentRetrieveManyParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        HrisEmploymentRetrieveManyParams params = HrisEmploymentRetrieveManyParams.builder()\n            .addRequest(HrisEmploymentRetrieveManyParams.Request.builder()\n                .individualId("individual_id")\n                .build())\n            .build();\n        HrisEmploymentRetrieveManyPage page = client.hris().employments().retrieveMany(params);\n    }\n}',
      },
      kotlin: {
        method: 'hris().employments().retrieveMany',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.HrisEmploymentRetrieveManyPage\nimport com.tryfinch.api.models.HrisEmploymentRetrieveManyParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val params: HrisEmploymentRetrieveManyParams = HrisEmploymentRetrieveManyParams.builder()\n        .addRequest(HrisEmploymentRetrieveManyParams.Request.builder()\n            .individualId("individual_id")\n            .build())\n        .build()\n    val page: HrisEmploymentRetrieveManyPage = client.hris().employments().retrieveMany(params)\n}',
      },
      python: {
        method: 'hris.employments.retrieve_many',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\npage = client.hris.employments.retrieve_many(\n    requests=[{\n        "individual_id": "individual_id"\n    }],\n)\npage = page.responses[0]\nprint(page.individual_id)',
      },
      ruby: {
        method: 'hris.employments.retrieve_many',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\npage = finch.hris.employments.retrieve_many(requests: [{individual_id: "individual_id"}])\n\nputs(page)',
      },
      typescript: {
        method: 'client.hris.employments.retrieveMany',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\n// Automatically fetches more pages as needed.\nfor await (const employmentDataResponse of client.hris.employments.retrieveMany({\n  requests: [{ individual_id: 'individual_id' }],\n})) {\n  console.log(employmentDataResponse.individual_id);\n}",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.Payments.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tpage, err := client.HRIS.Payments.List(context.TODO(), finchgo.HRISPaymentListParams{\n\t\tEndDate:   finchgo.F(time.Now()),\n\t\tStartDate: finchgo.F(time.Now()),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/payment \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'hris().payments().list',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.HrisPaymentListPage;\nimport com.tryfinch.api.models.HrisPaymentListParams;\nimport java.time.LocalDate;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        HrisPaymentListParams params = HrisPaymentListParams.builder()\n            .endDate(LocalDate.parse("2021-01-01"))\n            .startDate(LocalDate.parse("2021-01-01"))\n            .build();\n        HrisPaymentListPage page = client.hris().payments().list(params);\n    }\n}',
      },
      kotlin: {
        method: 'hris().payments().list',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.HrisPaymentListPage\nimport com.tryfinch.api.models.HrisPaymentListParams\nimport java.time.LocalDate\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val params: HrisPaymentListParams = HrisPaymentListParams.builder()\n        .endDate(LocalDate.parse("2021-01-01"))\n        .startDate(LocalDate.parse("2021-01-01"))\n        .build()\n    val page: HrisPaymentListPage = client.hris().payments().list(params)\n}',
      },
      python: {
        method: 'hris.payments.list',
        example:
          'from datetime import date\nfrom finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\npage = client.hris.payments.list(\n    end_date=date.fromisoformat("2021-01-01"),\n    start_date=date.fromisoformat("2021-01-01"),\n)\npage = page.items[0]\nprint(page.id)',
      },
      ruby: {
        method: 'hris.payments.list',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\npage = finch.hris.payments.list(end_date: "2021-01-01", start_date: "2021-01-01")\n\nputs(page)',
      },
      typescript: {
        method: 'client.hris.payments.list',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\n// Automatically fetches more pages as needed.\nfor await (const payment of client.hris.payments.list({\n  end_date: '2021-01-01',\n  start_date: '2021-01-01',\n})) {\n  console.log(payment.id);\n}",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.PayStatements.GetMany',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tpage, err := client.HRIS.PayStatements.GetMany(context.TODO(), finchgo.HRISPayStatementGetManyParams{\n\t\tRequests: finchgo.F([]finchgo.HRISPayStatementGetManyParamsRequest{{\n\t\t\tPaymentID: finchgo.F("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"),\n\t\t}}),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/pay-statement \\\n    -H \'Content-Type: application/json\' \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN" \\\n    -d \'{\n          "requests": [\n            {\n              "payment_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n            }\n          ]\n        }\'',
      },
      java: {
        method: 'hris().payStatements().retrieveMany',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.HrisPayStatementRetrieveManyPage;\nimport com.tryfinch.api.models.HrisPayStatementRetrieveManyParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        HrisPayStatementRetrieveManyParams params = HrisPayStatementRetrieveManyParams.builder()\n            .addRequest(HrisPayStatementRetrieveManyParams.Request.builder()\n                .paymentId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n                .build())\n            .build();\n        HrisPayStatementRetrieveManyPage page = client.hris().payStatements().retrieveMany(params);\n    }\n}',
      },
      kotlin: {
        method: 'hris().payStatements().retrieveMany',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.HrisPayStatementRetrieveManyPage\nimport com.tryfinch.api.models.HrisPayStatementRetrieveManyParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val params: HrisPayStatementRetrieveManyParams = HrisPayStatementRetrieveManyParams.builder()\n        .addRequest(HrisPayStatementRetrieveManyParams.Request.builder()\n            .paymentId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .build())\n        .build()\n    val page: HrisPayStatementRetrieveManyPage = client.hris().payStatements().retrieveMany(params)\n}',
      },
      python: {
        method: 'hris.pay_statements.retrieve_many',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\npage = client.hris.pay_statements.retrieve_many(\n    requests=[{\n        "payment_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n    }],\n)\npage = page.responses[0]\nprint(page.payment_id)',
      },
      ruby: {
        method: 'hris.pay_statements.retrieve_many',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\npage = finch.hris.pay_statements.retrieve_many(requests: [{payment_id: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"}])\n\nputs(page)',
      },
      typescript: {
        method: 'client.hris.payStatements.retrieveMany',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\n// Automatically fetches more pages as needed.\nfor await (const payStatementResponse of client.hris.payStatements.retrieveMany({\n  requests: [{ payment_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],\n})) {\n  console.log(payStatementResponse.payment_id);\n}",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.Documents.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tdocuments, err := client.HRIS.Documents.List(context.TODO(), finchgo.HRISDocumentListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", documents.Documents)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/documents \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'hris().documents().list',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.DocumentListResponse;\nimport com.tryfinch.api.models.HrisDocumentListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        DocumentListResponse documents = client.hris().documents().list();\n    }\n}',
      },
      kotlin: {
        method: 'hris().documents().list',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.DocumentListResponse\nimport com.tryfinch.api.models.HrisDocumentListParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val documents: DocumentListResponse = client.hris().documents().list()\n}',
      },
      python: {
        method: 'hris.documents.list',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\ndocuments = client.hris.documents.list()\nprint(documents.documents)',
      },
      ruby: {
        method: 'hris.documents.list',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\ndocuments = finch.hris.documents.list\n\nputs(documents)',
      },
      typescript: {
        method: 'client.hris.documents.list',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst documents = await client.hris.documents.list();\n\nconsole.log(documents.documents);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.Documents.Retreive',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tresponse, err := client.HRIS.Documents.Retreive(\n\t\tcontext.TODO(),\n\t\t"document_id",\n\t\tfinchgo.HRISDocumentRetreiveParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/documents/$DOCUMENT_ID \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'hris().documents().retreive',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.DocumentRetreiveResponse;\nimport com.tryfinch.api.models.HrisDocumentRetreiveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        DocumentRetreiveResponse response = client.hris().documents().retreive("document_id");\n    }\n}',
      },
      kotlin: {
        method: 'hris().documents().retreive',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.DocumentRetreiveResponse\nimport com.tryfinch.api.models.HrisDocumentRetreiveParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val response: DocumentRetreiveResponse = client.hris().documents().retreive("document_id")\n}',
      },
      python: {
        method: 'hris.documents.retreive',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\nresponse = client.hris.documents.retreive(\n    document_id="document_id",\n)\nprint(response)',
      },
      ruby: {
        method: 'hris.documents.retreive',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\nresponse = finch.hris.documents.retreive("document_id")\n\nputs(response)',
      },
      typescript: {
        method: 'client.hris.documents.retreive',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst response = await client.hris.documents.retreive('document_id');\n\nconsole.log(response);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.Benefits.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tpage, err := client.HRIS.Benefits.List(context.TODO(), finchgo.HRISBenefitListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/benefits \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'hris().benefits().list',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.HrisBenefitListPage;\nimport com.tryfinch.api.models.HrisBenefitListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        HrisBenefitListPage page = client.hris().benefits().list();\n    }\n}',
      },
      kotlin: {
        method: 'hris().benefits().list',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.HrisBenefitListPage\nimport com.tryfinch.api.models.HrisBenefitListParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val page: HrisBenefitListPage = client.hris().benefits().list()\n}',
      },
      python: {
        method: 'hris.benefits.list',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\npage = client.hris.benefits.list()\npage = page.items[0]\nprint(page.benefit_id)',
      },
      ruby: {
        method: 'hris.benefits.list',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\npage = finch.hris.benefits.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.hris.benefits.list',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\n// Automatically fetches more pages as needed.\nfor await (const companyBenefit of client.hris.benefits.list()) {\n  console.log(companyBenefit.benefit_id);\n}",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.Benefits.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tcreateCompanyBenefitsResponse, err := client.HRIS.Benefits.New(context.TODO(), finchgo.HRISBenefitNewParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", createCompanyBenefitsResponse.BenefitID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/benefits \\\n    -X POST \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'hris().benefits().create',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.CreateCompanyBenefitsResponse;\nimport com.tryfinch.api.models.HrisBenefitCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        CreateCompanyBenefitsResponse createCompanyBenefitsResponse = client.hris().benefits().create();\n    }\n}',
      },
      kotlin: {
        method: 'hris().benefits().create',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.CreateCompanyBenefitsResponse\nimport com.tryfinch.api.models.HrisBenefitCreateParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val createCompanyBenefitsResponse: CreateCompanyBenefitsResponse = client.hris().benefits().create()\n}',
      },
      python: {
        method: 'hris.benefits.create',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\ncreate_company_benefits_response = client.hris.benefits.create()\nprint(create_company_benefits_response.benefit_id)',
      },
      ruby: {
        method: 'hris.benefits.create',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\ncreate_company_benefits_response = finch.hris.benefits.create\n\nputs(create_company_benefits_response)',
      },
      typescript: {
        method: 'client.hris.benefits.create',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst createCompanyBenefitsResponse = await client.hris.benefits.create();\n\nconsole.log(createCompanyBenefitsResponse.benefit_id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.Benefits.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tcompanyBenefit, err := client.HRIS.Benefits.Get(\n\t\tcontext.TODO(),\n\t\t"benefit_id",\n\t\tfinchgo.HRISBenefitGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", companyBenefit.BenefitID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/benefits/$BENEFIT_ID \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'hris().benefits().retrieve',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.CompanyBenefit;\nimport com.tryfinch.api.models.HrisBenefitRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        CompanyBenefit companyBenefit = client.hris().benefits().retrieve("benefit_id");\n    }\n}',
      },
      kotlin: {
        method: 'hris().benefits().retrieve',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.CompanyBenefit\nimport com.tryfinch.api.models.HrisBenefitRetrieveParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val companyBenefit: CompanyBenefit = client.hris().benefits().retrieve("benefit_id")\n}',
      },
      python: {
        method: 'hris.benefits.retrieve',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\ncompany_benefit = client.hris.benefits.retrieve(\n    benefit_id="benefit_id",\n)\nprint(company_benefit.benefit_id)',
      },
      ruby: {
        method: 'hris.benefits.retrieve',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\ncompany_benefit = finch.hris.benefits.retrieve("benefit_id")\n\nputs(company_benefit)',
      },
      typescript: {
        method: 'client.hris.benefits.retrieve',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst companyBenefit = await client.hris.benefits.retrieve('benefit_id');\n\nconsole.log(companyBenefit.benefit_id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.Benefits.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tupdateCompanyBenefitResponse, err := client.HRIS.Benefits.Update(\n\t\tcontext.TODO(),\n\t\t"benefit_id",\n\t\tfinchgo.HRISBenefitUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", updateCompanyBenefitResponse.BenefitID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/benefits/$BENEFIT_ID \\\n    -X POST \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'hris().benefits().update',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.HrisBenefitUpdateParams;\nimport com.tryfinch.api.models.UpdateCompanyBenefitResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        UpdateCompanyBenefitResponse updateCompanyBenefitResponse = client.hris().benefits().update("benefit_id");\n    }\n}',
      },
      kotlin: {
        method: 'hris().benefits().update',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.HrisBenefitUpdateParams\nimport com.tryfinch.api.models.UpdateCompanyBenefitResponse\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val updateCompanyBenefitResponse: UpdateCompanyBenefitResponse = client.hris().benefits().update("benefit_id")\n}',
      },
      python: {
        method: 'hris.benefits.update',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\nupdate_company_benefit_response = client.hris.benefits.update(\n    benefit_id="benefit_id",\n)\nprint(update_company_benefit_response.benefit_id)',
      },
      ruby: {
        method: 'hris.benefits.update',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\nupdate_company_benefit_response = finch.hris.benefits.update("benefit_id")\n\nputs(update_company_benefit_response)',
      },
      typescript: {
        method: 'client.hris.benefits.update',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst updateCompanyBenefitResponse = await client.hris.benefits.update('benefit_id');\n\nconsole.log(updateCompanyBenefitResponse.benefit_id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.Benefits.ListSupportedBenefits',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tpage, err := client.HRIS.Benefits.ListSupportedBenefits(context.TODO(), finchgo.HRISBenefitListSupportedBenefitsParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/benefits/meta \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'hris().benefits().listSupportedBenefits',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.HrisBenefitListSupportedBenefitsPage;\nimport com.tryfinch.api.models.HrisBenefitListSupportedBenefitsParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        HrisBenefitListSupportedBenefitsPage page = client.hris().benefits().listSupportedBenefits();\n    }\n}',
      },
      kotlin: {
        method: 'hris().benefits().listSupportedBenefits',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.HrisBenefitListSupportedBenefitsPage\nimport com.tryfinch.api.models.HrisBenefitListSupportedBenefitsParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val page: HrisBenefitListSupportedBenefitsPage = client.hris().benefits().listSupportedBenefits()\n}',
      },
      python: {
        method: 'hris.benefits.list_supported_benefits',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\npage = client.hris.benefits.list_supported_benefits()\npage = page.items[0]\nprint(page.annual_maximum)',
      },
      ruby: {
        method: 'hris.benefits.list_supported_benefits',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\npage = finch.hris.benefits.list_supported_benefits\n\nputs(page)',
      },
      typescript: {
        method: 'client.hris.benefits.listSupportedBenefits',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\n// Automatically fetches more pages as needed.\nfor await (const supportedBenefit of client.hris.benefits.listSupportedBenefits()) {\n  console.log(supportedBenefit.annual_maximum);\n}",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.Benefits.Individuals.EnrolledIDs',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tresponse, err := client.HRIS.Benefits.Individuals.EnrolledIDs(\n\t\tcontext.TODO(),\n\t\t"benefit_id",\n\t\tfinchgo.HRISBenefitIndividualEnrolledIDsParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.BenefitID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/benefits/$BENEFIT_ID/enrolled \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'hris().benefits().individuals().enrolledIds',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.HrisBenefitIndividualEnrolledIdsParams;\nimport com.tryfinch.api.models.IndividualEnrolledIdsResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        IndividualEnrolledIdsResponse response = client.hris().benefits().individuals().enrolledIds("benefit_id");\n    }\n}',
      },
      kotlin: {
        method: 'hris().benefits().individuals().enrolledIds',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.HrisBenefitIndividualEnrolledIdsParams\nimport com.tryfinch.api.models.IndividualEnrolledIdsResponse\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val response: IndividualEnrolledIdsResponse = client.hris().benefits().individuals().enrolledIds("benefit_id")\n}',
      },
      python: {
        method: 'hris.benefits.individuals.enrolled_ids',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\nresponse = client.hris.benefits.individuals.enrolled_ids(\n    benefit_id="benefit_id",\n)\nprint(response.benefit_id)',
      },
      ruby: {
        method: 'hris.benefits.individuals.enrolled_ids',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\nresponse = finch.hris.benefits.individuals.enrolled_ids("benefit_id")\n\nputs(response)',
      },
      typescript: {
        method: 'client.hris.benefits.individuals.enrolledIDs',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst response = await client.hris.benefits.individuals.enrolledIDs('benefit_id');\n\nconsole.log(response.benefit_id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.Benefits.Individuals.GetManyBenefits',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tpage, err := client.HRIS.Benefits.Individuals.GetManyBenefits(\n\t\tcontext.TODO(),\n\t\t"benefit_id",\n\t\tfinchgo.HRISBenefitIndividualGetManyBenefitsParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/benefits/$BENEFIT_ID/individuals \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'hris().benefits().individuals().retrieveManyBenefits',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.HrisBenefitIndividualRetrieveManyBenefitsPage;\nimport com.tryfinch.api.models.HrisBenefitIndividualRetrieveManyBenefitsParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        HrisBenefitIndividualRetrieveManyBenefitsPage page = client.hris().benefits().individuals().retrieveManyBenefits("benefit_id");\n    }\n}',
      },
      kotlin: {
        method: 'hris().benefits().individuals().retrieveManyBenefits',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.HrisBenefitIndividualRetrieveManyBenefitsPage\nimport com.tryfinch.api.models.HrisBenefitIndividualRetrieveManyBenefitsParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val page: HrisBenefitIndividualRetrieveManyBenefitsPage = client.hris().benefits().individuals().retrieveManyBenefits("benefit_id")\n}',
      },
      python: {
        method: 'hris.benefits.individuals.retrieve_many_benefits',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\npage = client.hris.benefits.individuals.retrieve_many_benefits(\n    benefit_id="benefit_id",\n)\npage = page.items[0]\nprint(page.individual_id)',
      },
      ruby: {
        method: 'hris.benefits.individuals.retrieve_many_benefits',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\npage = finch.hris.benefits.individuals.retrieve_many_benefits("benefit_id")\n\nputs(page)',
      },
      typescript: {
        method: 'client.hris.benefits.individuals.retrieveManyBenefits',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\n// Automatically fetches more pages as needed.\nfor await (const individualBenefit of client.hris.benefits.individuals.retrieveManyBenefits(\n  'benefit_id',\n)) {\n  console.log(individualBenefit.individual_id);\n}",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.tryfinch.com/employer/benefits/$BENEFIT_ID/individuals \\\n    -X POST \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      python: {
        method: 'hris.benefits.individuals.enroll_many',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\nenrolled_individual_benefit_response = client.hris.benefits.individuals.enroll_many(\n    benefit_id="benefit_id",\n)\nprint(enrolled_individual_benefit_response.job_id)',
      },
      ruby: {
        method: 'hris.benefits.individuals.enroll_many',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\nenrolled_individual_benefit_response = finch.hris.benefits.individuals.enroll_many("benefit_id")\n\nputs(enrolled_individual_benefit_response)',
      },
      typescript: {
        method: 'client.hris.benefits.individuals.enrollMany',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst enrolledIndividualBenefitResponse = await client.hris.benefits.individuals.enrollMany(\n  'benefit_id',\n);\n\nconsole.log(enrolledIndividualBenefitResponse.job_id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.HRIS.Benefits.Individuals.UnenrollMany',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tunenrolledIndividualBenefitResponse, err := client.HRIS.Benefits.Individuals.UnenrollMany(\n\t\tcontext.TODO(),\n\t\t"benefit_id",\n\t\tfinchgo.HRISBenefitIndividualUnenrollManyParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", unenrolledIndividualBenefitResponse.JobID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/benefits/$BENEFIT_ID/individuals \\\n    -X DELETE \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'hris().benefits().individuals().unenrollMany',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.HrisBenefitIndividualUnenrollManyParams;\nimport com.tryfinch.api.models.UnenrolledIndividualBenefitResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        UnenrolledIndividualBenefitResponse unenrolledIndividualBenefitResponse = client.hris().benefits().individuals().unenrollMany("benefit_id");\n    }\n}',
      },
      kotlin: {
        method: 'hris().benefits().individuals().unenrollMany',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.HrisBenefitIndividualUnenrollManyParams\nimport com.tryfinch.api.models.UnenrolledIndividualBenefitResponse\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val unenrolledIndividualBenefitResponse: UnenrolledIndividualBenefitResponse = client.hris().benefits().individuals().unenrollMany("benefit_id")\n}',
      },
      python: {
        method: 'hris.benefits.individuals.unenroll_many',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\nunenrolled_individual_benefit_response = client.hris.benefits.individuals.unenroll_many(\n    benefit_id="benefit_id",\n)\nprint(unenrolled_individual_benefit_response.job_id)',
      },
      ruby: {
        method: 'hris.benefits.individuals.unenroll_many',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\nunenrolled_individual_benefit_response = finch.hris.benefits.individuals.unenroll_many("benefit_id")\n\nputs(unenrolled_individual_benefit_response)',
      },
      typescript: {
        method: 'client.hris.benefits.individuals.unenrollMany',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst unenrolledIndividualBenefitResponse = await client.hris.benefits.individuals.unenrollMany(\n  'benefit_id',\n);\n\nconsole.log(unenrolledIndividualBenefitResponse.job_id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.Providers.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient()\n\tpage, err := client.Providers.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: "curl https://api.tryfinch.com/providers \\\n    -H 'Finch-API-Version: 2020-09-17'",
      },
      java: {
        method: 'providers().list',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.ProviderListPage;\nimport com.tryfinch.api.models.ProviderListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.fromEnv();\n\n        ProviderListPage page = client.providers().list();\n    }\n}',
      },
      kotlin: {
        method: 'providers().list',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.ProviderListPage\nimport com.tryfinch.api.models.ProviderListParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.fromEnv()\n\n    val page: ProviderListPage = client.providers().list()\n}',
      },
      python: {
        method: 'providers.list',
        example:
          'from finch import Finch\n\nclient = Finch()\npage = client.providers.list()\npage = page.items[0]\nprint(page.id)',
      },
      ruby: {
        method: 'providers.list',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new\n\npage = finch.providers.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.providers.list',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\n// Automatically fetches more pages as needed.\nfor await (const providerListResponse of client.providers.list()) {\n  console.log(providerListResponse.id);\n}",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.Account.Introspect',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tintrospection, err := client.Account.Introspect(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", introspection.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/introspect \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'account().introspect',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.AccountIntrospectParams;\nimport com.tryfinch.api.models.Introspection;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        Introspection introspection = client.account().introspect();\n    }\n}',
      },
      kotlin: {
        method: 'account().introspect',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.AccountIntrospectParams\nimport com.tryfinch.api.models.Introspection\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val introspection: Introspection = client.account().introspect()\n}',
      },
      python: {
        method: 'account.introspect',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\nintrospection = client.account.introspect()\nprint(introspection.id)',
      },
      ruby: {
        method: 'account.introspect',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\nintrospection = finch.account.introspect\n\nputs(introspection)',
      },
      typescript: {
        method: 'client.account.introspect',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst introspection = await client.account.introspect();\n\nconsole.log(introspection.id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.Account.Disconnect',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tdisconnectResponse, err := client.Account.Disconnect(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", disconnectResponse.Status)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/disconnect \\\n    -X POST \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'account().disconnect',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.AccountDisconnectParams;\nimport com.tryfinch.api.models.DisconnectResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        DisconnectResponse disconnectResponse = client.account().disconnect();\n    }\n}',
      },
      kotlin: {
        method: 'account().disconnect',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.AccountDisconnectParams\nimport com.tryfinch.api.models.DisconnectResponse\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val disconnectResponse: DisconnectResponse = client.account().disconnect()\n}',
      },
      python: {
        method: 'account.disconnect',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\ndisconnect_response = client.account.disconnect()\nprint(disconnect_response.status)',
      },
      ruby: {
        method: 'account.disconnect',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\ndisconnect_response = finch.account.disconnect\n\nputs(disconnect_response)',
      },
      typescript: {
        method: 'client.account.disconnect',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst disconnectResponse = await client.account.disconnect();\n\nconsole.log(disconnectResponse.status);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.RequestForwarding.Forward',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tresponse, err := client.RequestForwarding.Forward(context.TODO(), finchgo.RequestForwardingForwardParams{\n\t\tMethod: finchgo.F("method"),\n\t\tRoute:  finchgo.F("route"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Request)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/forward \\\n    -H \'Content-Type: application/json\' \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN" \\\n    -d \'{\n          "method": "method",\n          "route": "route"\n        }\'',
      },
      java: {
        method: 'requestForwarding().forward',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.RequestForwardingForwardParams;\nimport com.tryfinch.api.models.RequestForwardingForwardResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        RequestForwardingForwardParams params = RequestForwardingForwardParams.builder()\n            .method("method")\n            .route("route")\n            .build();\n        RequestForwardingForwardResponse response = client.requestForwarding().forward(params);\n    }\n}',
      },
      kotlin: {
        method: 'requestForwarding().forward',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.RequestForwardingForwardParams\nimport com.tryfinch.api.models.RequestForwardingForwardResponse\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val params: RequestForwardingForwardParams = RequestForwardingForwardParams.builder()\n        .method("method")\n        .route("route")\n        .build()\n    val response: RequestForwardingForwardResponse = client.requestForwarding().forward(params)\n}',
      },
      python: {
        method: 'request_forwarding.forward',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\nresponse = client.request_forwarding.forward(\n    method="method",\n    route="route",\n)\nprint(response.request)',
      },
      ruby: {
        method: 'request_forwarding.forward',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\nresponse = finch.request_forwarding.forward(method_: "method", route: "route")\n\nputs(response)',
      },
      typescript: {
        method: 'client.requestForwarding.forward',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst response = await client.requestForwarding.forward({ method: 'method', route: 'route' });\n\nconsole.log(response.request);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.Jobs.Automated.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tautomateds, err := client.Jobs.Automated.List(context.TODO(), finchgo.JobAutomatedListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", automateds.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/jobs/automated \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'jobs().automated().list',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.AutomatedListResponse;\nimport com.tryfinch.api.models.JobAutomatedListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        AutomatedListResponse automateds = client.jobs().automated().list();\n    }\n}',
      },
      kotlin: {
        method: 'jobs().automated().list',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.AutomatedListResponse\nimport com.tryfinch.api.models.JobAutomatedListParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val automateds: AutomatedListResponse = client.jobs().automated().list()\n}',
      },
      python: {
        method: 'jobs.automated.list',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\nautomateds = client.jobs.automated.list()\nprint(automateds.data)',
      },
      ruby: {
        method: 'jobs.automated.list',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\nautomateds = finch.jobs.automated.list\n\nputs(automateds)',
      },
      typescript: {
        method: 'client.jobs.automated.list',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst automateds = await client.jobs.automated.list();\n\nconsole.log(automateds.data);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.Jobs.Automated.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tautomated, err := client.Jobs.Automated.New(context.TODO(), finchgo.JobAutomatedNewParamsDataSyncAll{\n\t\tType: finchgo.F(finchgo.JobAutomatedNewParamsDataSyncAllTypeDataSyncAll),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", automated.JobID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/jobs/automated \\\n    -H \'Content-Type: application/json\' \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN" \\\n    -d \'{\n          "type": "data_sync_all"\n        }\'',
      },
      java: {
        method: 'jobs().automated().create',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.core.JsonValue;\nimport com.tryfinch.api.models.AutomatedCreateResponse;\nimport com.tryfinch.api.models.JobAutomatedCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        JobAutomatedCreateParams.Body params = JobAutomatedCreateParams.Body.ofDataSyncAll();\n        AutomatedCreateResponse automated = client.jobs().automated().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'jobs().automated().create',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.core.JsonValue\nimport com.tryfinch.api.models.AutomatedCreateResponse\nimport com.tryfinch.api.models.JobAutomatedCreateParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val params: JobAutomatedCreateParams.Body = JobAutomatedCreateParams.Body.ofDataSyncAll()\n    val automated: AutomatedCreateResponse = client.jobs().automated().create(params)\n}',
      },
      python: {
        method: 'jobs.automated.create',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\nautomated = client.jobs.automated.create(\n    type="data_sync_all",\n)\nprint(automated.job_id)',
      },
      ruby: {
        method: 'jobs.automated.create',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\nautomated = finch.jobs.automated.create(body: {type: :data_sync_all})\n\nputs(automated)',
      },
      typescript: {
        method: 'client.jobs.automated.create',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst automated = await client.jobs.automated.create({ type: 'data_sync_all' });\n\nconsole.log(automated.job_id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.Jobs.Automated.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tautomatedAsyncJob, err := client.Jobs.Automated.Get(context.TODO(), "job_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", automatedAsyncJob.JobID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/jobs/automated/$JOB_ID \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'jobs().automated().retrieve',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.AutomatedAsyncJob;\nimport com.tryfinch.api.models.JobAutomatedRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        AutomatedAsyncJob automatedAsyncJob = client.jobs().automated().retrieve("job_id");\n    }\n}',
      },
      kotlin: {
        method: 'jobs().automated().retrieve',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.AutomatedAsyncJob\nimport com.tryfinch.api.models.JobAutomatedRetrieveParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val automatedAsyncJob: AutomatedAsyncJob = client.jobs().automated().retrieve("job_id")\n}',
      },
      python: {
        method: 'jobs.automated.retrieve',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\nautomated_async_job = client.jobs.automated.retrieve(\n    "job_id",\n)\nprint(automated_async_job.job_id)',
      },
      ruby: {
        method: 'jobs.automated.retrieve',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\nautomated_async_job = finch.jobs.automated.retrieve("job_id")\n\nputs(automated_async_job)',
      },
      typescript: {
        method: 'client.jobs.automated.retrieve',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst automatedAsyncJob = await client.jobs.automated.retrieve('job_id');\n\nconsole.log(automatedAsyncJob.job_id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.Jobs.Manual.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tmanualAsyncJob, err := client.Jobs.Manual.Get(context.TODO(), "job_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", manualAsyncJob.JobID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/jobs/manual/$JOB_ID \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'jobs().manual().retrieve',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.JobManualRetrieveParams;\nimport com.tryfinch.api.models.ManualAsyncJob;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        ManualAsyncJob manualAsyncJob = client.jobs().manual().retrieve("job_id");\n    }\n}',
      },
      kotlin: {
        method: 'jobs().manual().retrieve',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.JobManualRetrieveParams\nimport com.tryfinch.api.models.ManualAsyncJob\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val manualAsyncJob: ManualAsyncJob = client.jobs().manual().retrieve("job_id")\n}',
      },
      python: {
        method: 'jobs.manual.retrieve',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\nmanual_async_job = client.jobs.manual.retrieve(\n    "job_id",\n)\nprint(manual_async_job.job_id)',
      },
      ruby: {
        method: 'jobs.manual.retrieve',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\nmanual_async_job = finch.jobs.manual.retrieve("job_id")\n\nputs(manual_async_job)',
      },
      typescript: {
        method: 'client.jobs.manual.retrieve',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst manualAsyncJob = await client.jobs.manual.retrieve('job_id');\n\nconsole.log(manualAsyncJob.job_id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.Sandbox.Connections.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithClientID("4ab15e51-11ad-49f4-acae-f343b7794375"),\n\t\toption.WithClientSecret("My Client Secret"),\n\t)\n\tconnection, err := client.Sandbox.Connections.New(context.TODO(), finchgo.SandboxConnectionNewParams{\n\t\tProviderID: finchgo.F("provider_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", connection.AccountID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/sandbox/connections \\\n    -H \'Content-Type: application/json\' \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -u "$FINCH_CLIENT_ID:FINCH_CLIENT_SECRET" \\\n    -d \'{\n          "provider_id": "provider_id"\n        }\'',
      },
      java: {
        method: 'sandbox().connections().create',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.ConnectionCreateResponse;\nimport com.tryfinch.api.models.SandboxConnectionCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.fromEnv();\n\n        SandboxConnectionCreateParams params = SandboxConnectionCreateParams.builder()\n            .providerId("provider_id")\n            .build();\n        ConnectionCreateResponse connection = client.sandbox().connections().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'sandbox().connections().create',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.ConnectionCreateResponse\nimport com.tryfinch.api.models.SandboxConnectionCreateParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.fromEnv()\n\n    val params: SandboxConnectionCreateParams = SandboxConnectionCreateParams.builder()\n        .providerId("provider_id")\n        .build()\n    val connection: ConnectionCreateResponse = client.sandbox().connections().create(params)\n}',
      },
      python: {
        method: 'sandbox.connections.create',
        example:
          'import os\nfrom finch import Finch\n\nclient = Finch(\n    client_id=os.environ.get("FINCH_CLIENT_ID"),  # This is the default and can be omitted\n    client_secret=os.environ.get("FINCH_CLIENT_SECRET"),  # This is the default and can be omitted\n)\nconnection = client.sandbox.connections.create(\n    provider_id="provider_id",\n)\nprint(connection.account_id)',
      },
      ruby: {
        method: 'sandbox.connections.create',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(client_id: "4ab15e51-11ad-49f4-acae-f343b7794375", client_secret: "My Client Secret")\n\nconnection = finch.sandbox.connections.create(provider_id: "provider_id")\n\nputs(connection)',
      },
      typescript: {
        method: 'client.sandbox.connections.create',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  clientID: process.env['FINCH_CLIENT_ID'], // This is the default and can be omitted\n  clientSecret: process.env['FINCH_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst connection = await client.sandbox.connections.create({ provider_id: 'provider_id' });\n\nconsole.log(connection.account_id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.Sandbox.Connections.Accounts.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithClientID("4ab15e51-11ad-49f4-acae-f343b7794375"),\n\t\toption.WithClientSecret("My Client Secret"),\n\t)\n\taccount, err := client.Sandbox.Connections.Accounts.New(context.TODO(), finchgo.SandboxConnectionAccountNewParams{\n\t\tCompanyID:  finchgo.F("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"),\n\t\tProviderID: finchgo.F("provider_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", account.AccountID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/sandbox/connections/accounts \\\n    -H \'Content-Type: application/json\' \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -u "$FINCH_CLIENT_ID:FINCH_CLIENT_SECRET" \\\n    -d \'{\n          "company_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "provider_id": "provider_id"\n        }\'',
      },
      java: {
        method: 'sandbox().connections().accounts().create',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.AccountCreateResponse;\nimport com.tryfinch.api.models.SandboxConnectionAccountCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.fromEnv();\n\n        SandboxConnectionAccountCreateParams params = SandboxConnectionAccountCreateParams.builder()\n            .companyId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .providerId("provider_id")\n            .build();\n        AccountCreateResponse account = client.sandbox().connections().accounts().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'sandbox().connections().accounts().create',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.AccountCreateResponse\nimport com.tryfinch.api.models.SandboxConnectionAccountCreateParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.fromEnv()\n\n    val params: SandboxConnectionAccountCreateParams = SandboxConnectionAccountCreateParams.builder()\n        .companyId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n        .providerId("provider_id")\n        .build()\n    val account: AccountCreateResponse = client.sandbox().connections().accounts().create(params)\n}',
      },
      python: {
        method: 'sandbox.connections.accounts.create',
        example:
          'import os\nfrom finch import Finch\n\nclient = Finch(\n    client_id=os.environ.get("FINCH_CLIENT_ID"),  # This is the default and can be omitted\n    client_secret=os.environ.get("FINCH_CLIENT_SECRET"),  # This is the default and can be omitted\n)\naccount = client.sandbox.connections.accounts.create(\n    company_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    provider_id="provider_id",\n)\nprint(account.account_id)',
      },
      ruby: {
        method: 'sandbox.connections.accounts.create',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(client_id: "4ab15e51-11ad-49f4-acae-f343b7794375", client_secret: "My Client Secret")\n\naccount = finch.sandbox.connections.accounts.create(\n  company_id: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n  provider_id: "provider_id"\n)\n\nputs(account)',
      },
      typescript: {
        method: 'client.sandbox.connections.accounts.create',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  clientID: process.env['FINCH_CLIENT_ID'], // This is the default and can be omitted\n  clientSecret: process.env['FINCH_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst account = await client.sandbox.connections.accounts.create({\n  company_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  provider_id: 'provider_id',\n});\n\nconsole.log(account.account_id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.Sandbox.Connections.Accounts.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n\t"github.com/Finch-API/finch-api-go/shared"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\taccount, err := client.Sandbox.Connections.Accounts.Update(context.TODO(), finchgo.SandboxConnectionAccountUpdateParams{\n\t\tConnectionStatus: finchgo.F(shared.ConnectionStatusTypeReauth),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", account.AccountID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/sandbox/connections/accounts \\\n    -X PUT \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'sandbox().connections().accounts().update',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.AccountUpdateResponse;\nimport com.tryfinch.api.models.SandboxConnectionAccountUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        AccountUpdateResponse account = client.sandbox().connections().accounts().update();\n    }\n}',
      },
      kotlin: {
        method: 'sandbox().connections().accounts().update',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.AccountUpdateResponse\nimport com.tryfinch.api.models.SandboxConnectionAccountUpdateParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val account: AccountUpdateResponse = client.sandbox().connections().accounts().update()\n}',
      },
      python: {
        method: 'sandbox.connections.accounts.update',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\naccount = client.sandbox.connections.accounts.update(\n    connection_status="reauth",\n)\nprint(account.account_id)',
      },
      ruby: {
        method: 'sandbox.connections.accounts.update',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\naccount = finch.sandbox.connections.accounts.update\n\nputs(account)',
      },
      typescript: {
        method: 'client.sandbox.connections.accounts.update',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst account = await client.sandbox.connections.accounts.update({ connection_status: 'reauth' });\n\nconsole.log(account.account_id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.Sandbox.Company.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tcompany, err := client.Sandbox.Company.Update(context.TODO(), finchgo.SandboxCompanyUpdateParams{\n\t\tAccounts:    finchgo.F([]finchgo.SandboxCompanyUpdateParamsAccount{{}}),\n\t\tDepartments: finchgo.F([]finchgo.SandboxCompanyUpdateParamsDepartment{{}}),\n\t\tEin:         finchgo.F("ein"),\n\t\tEntity:      finchgo.F(finchgo.SandboxCompanyUpdateParamsEntity{}),\n\t\tLegalName:   finchgo.F("legal_name"),\n\t\tLocations: finchgo.F([]finchgo.LocationParam{{\n\t\t\tCity:       finchgo.F("city"),\n\t\t\tCountry:    finchgo.F("country"),\n\t\t\tLine1:      finchgo.F("line1"),\n\t\t\tLine2:      finchgo.F("line2"),\n\t\t\tPostalCode: finchgo.F("postal_code"),\n\t\t\tState:      finchgo.F("state"),\n\t\t}}),\n\t\tPrimaryEmail:       finchgo.F("dev@stainless.com"),\n\t\tPrimaryPhoneNumber: finchgo.F("primary_phone_number"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", company.Accounts)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/sandbox/company \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN" \\\n    -d \'{\n          "accounts": [\n            {}\n          ],\n          "departments": [\n            {}\n          ],\n          "ein": "ein",\n          "entity": {},\n          "legal_name": "legal_name",\n          "locations": [\n            {\n              "city": "city",\n              "country": "country",\n              "line1": "line1",\n              "line2": "line2",\n              "postal_code": "postal_code",\n              "state": "state"\n            }\n          ],\n          "primary_email": "dev@stainless.com",\n          "primary_phone_number": "primary_phone_number"\n        }\'',
      },
      java: {
        method: 'sandbox().company().update',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.CompanyUpdateResponse;\nimport com.tryfinch.api.models.Location;\nimport com.tryfinch.api.models.SandboxCompanyUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        SandboxCompanyUpdateParams params = SandboxCompanyUpdateParams.builder()\n            .addAccount(SandboxCompanyUpdateParams.Account.builder().build())\n            .addDepartment(SandboxCompanyUpdateParams.Department.builder().build())\n            .ein("ein")\n            .entity(SandboxCompanyUpdateParams.Entity.builder().build())\n            .legalName("legal_name")\n            .addLocation(Location.builder()\n                .city("city")\n                .country("country")\n                .line1("line1")\n                .line2("line2")\n                .postalCode("postal_code")\n                .state("state")\n                .build())\n            .primaryEmail("dev@stainless.com")\n            .primaryPhoneNumber("primary_phone_number")\n            .build();\n        CompanyUpdateResponse company = client.sandbox().company().update(params);\n    }\n}',
      },
      kotlin: {
        method: 'sandbox().company().update',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.CompanyUpdateResponse\nimport com.tryfinch.api.models.Location\nimport com.tryfinch.api.models.SandboxCompanyUpdateParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val params: SandboxCompanyUpdateParams = SandboxCompanyUpdateParams.builder()\n        .addAccount(SandboxCompanyUpdateParams.Account.builder().build())\n        .addDepartment(SandboxCompanyUpdateParams.Department.builder().build())\n        .ein("ein")\n        .entity(SandboxCompanyUpdateParams.Entity.builder().build())\n        .legalName("legal_name")\n        .addLocation(Location.builder()\n            .city("city")\n            .country("country")\n            .line1("line1")\n            .line2("line2")\n            .postalCode("postal_code")\n            .state("state")\n            .build())\n        .primaryEmail("dev@stainless.com")\n        .primaryPhoneNumber("primary_phone_number")\n        .build()\n    val company: CompanyUpdateResponse = client.sandbox().company().update(params)\n}',
      },
      python: {
        method: 'sandbox.company.update',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\ncompany = client.sandbox.company.update(\n    accounts=[{}],\n    departments=[{}],\n    ein="ein",\n    entity={},\n    legal_name="legal_name",\n    locations=[{\n        "city": "city",\n        "country": "country",\n        "line1": "line1",\n        "line2": "line2",\n        "postal_code": "postal_code",\n        "state": "state",\n    }],\n    primary_email="dev@stainless.com",\n    primary_phone_number="primary_phone_number",\n)\nprint(company.accounts)',
      },
      ruby: {
        method: 'sandbox.company.update',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\ncompany = finch.sandbox.company.update(\n  accounts: [{}],\n  departments: [{}],\n  ein: "ein",\n  entity: {},\n  legal_name: "legal_name",\n  locations: [\n    {city: "city", country: "country", line1: "line1", line2: "line2", postal_code: "postal_code", state: "state"}\n  ],\n  primary_email: "dev@stainless.com",\n  primary_phone_number: "primary_phone_number"\n)\n\nputs(company)',
      },
      typescript: {
        method: 'client.sandbox.company.update',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst company = await client.sandbox.company.update({\n  accounts: [{}],\n  departments: [{}],\n  ein: 'ein',\n  entity: {},\n  legal_name: 'legal_name',\n  locations: [\n    {\n      city: 'city',\n      country: 'country',\n      line1: 'line1',\n      line2: 'line2',\n      postal_code: 'postal_code',\n      state: 'state',\n    },\n  ],\n  primary_email: 'dev@stainless.com',\n  primary_phone_number: 'primary_phone_number',\n});\n\nconsole.log(company.accounts);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.Sandbox.Directory.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tdirectories, err := client.Sandbox.Directory.New(context.TODO(), finchgo.SandboxDirectoryNewParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", directories)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/sandbox/directory \\\n    -X POST \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'sandbox().directory().create',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.DirectoryCreateResponse;\nimport com.tryfinch.api.models.SandboxDirectoryCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        List<DirectoryCreateResponse> directories = client.sandbox().directory().create();\n    }\n}',
      },
      kotlin: {
        method: 'sandbox().directory().create',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.DirectoryCreateResponse\nimport com.tryfinch.api.models.SandboxDirectoryCreateParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val directories: List<DirectoryCreateResponse> = client.sandbox().directory().create()\n}',
      },
      python: {
        method: 'sandbox.directory.create',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\ndirectories = client.sandbox.directory.create()\nprint(directories)',
      },
      ruby: {
        method: 'sandbox.directory.create',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\ndirectories = finch.sandbox.directory.create\n\nputs(directories)',
      },
      typescript: {
        method: 'client.sandbox.directory.create',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst directories = await client.sandbox.directory.create();\n\nconsole.log(directories);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.Sandbox.Individual.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tindividual, err := client.Sandbox.Individual.Update(\n\t\tcontext.TODO(),\n\t\t"individual_id",\n\t\tfinchgo.SandboxIndividualUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", individual.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/sandbox/individual/$INDIVIDUAL_ID \\\n    -X PUT \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'sandbox().individual().update',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.IndividualUpdateResponse;\nimport com.tryfinch.api.models.SandboxIndividualUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        IndividualUpdateResponse individual = client.sandbox().individual().update("individual_id");\n    }\n}',
      },
      kotlin: {
        method: 'sandbox().individual().update',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.IndividualUpdateResponse\nimport com.tryfinch.api.models.SandboxIndividualUpdateParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val individual: IndividualUpdateResponse = client.sandbox().individual().update("individual_id")\n}',
      },
      python: {
        method: 'sandbox.individual.update',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\nindividual = client.sandbox.individual.update(\n    individual_id="individual_id",\n)\nprint(individual.id)',
      },
      ruby: {
        method: 'sandbox.individual.update',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\nindividual = finch.sandbox.individual.update("individual_id")\n\nputs(individual)',
      },
      typescript: {
        method: 'client.sandbox.individual.update',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst individual = await client.sandbox.individual.update('individual_id');\n\nconsole.log(individual.id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.Sandbox.Employment.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\temployment, err := client.Sandbox.Employment.Update(\n\t\tcontext.TODO(),\n\t\t"individual_id",\n\t\tfinchgo.SandboxEmploymentUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", employment.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/sandbox/employment/$INDIVIDUAL_ID \\\n    -X PUT \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'sandbox().employment().update',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.EmploymentUpdateResponse;\nimport com.tryfinch.api.models.SandboxEmploymentUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        EmploymentUpdateResponse employment = client.sandbox().employment().update("individual_id");\n    }\n}',
      },
      kotlin: {
        method: 'sandbox().employment().update',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.EmploymentUpdateResponse\nimport com.tryfinch.api.models.SandboxEmploymentUpdateParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val employment: EmploymentUpdateResponse = client.sandbox().employment().update("individual_id")\n}',
      },
      python: {
        method: 'sandbox.employment.update',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\nemployment = client.sandbox.employment.update(\n    individual_id="individual_id",\n)\nprint(employment.id)',
      },
      ruby: {
        method: 'sandbox.employment.update',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\nemployment = finch.sandbox.employment.update("individual_id")\n\nputs(employment)',
      },
      typescript: {
        method: 'client.sandbox.employment.update',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst employment = await client.sandbox.employment.update('individual_id');\n\nconsole.log(employment.id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.Sandbox.Payment.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tpayment, err := client.Sandbox.Payment.New(context.TODO(), finchgo.SandboxPaymentNewParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", payment.PaymentID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/sandbox/payment \\\n    -X POST \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'sandbox().payment().create',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.PaymentCreateResponse;\nimport com.tryfinch.api.models.SandboxPaymentCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        PaymentCreateResponse payment = client.sandbox().payment().create();\n    }\n}',
      },
      kotlin: {
        method: 'sandbox().payment().create',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.PaymentCreateResponse\nimport com.tryfinch.api.models.SandboxPaymentCreateParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val payment: PaymentCreateResponse = client.sandbox().payment().create()\n}',
      },
      python: {
        method: 'sandbox.payment.create',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\npayment = client.sandbox.payment.create()\nprint(payment.payment_id)',
      },
      ruby: {
        method: 'sandbox.payment.create',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\npayment = finch.sandbox.payment.create\n\nputs(payment)',
      },
      typescript: {
        method: 'client.sandbox.payment.create',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst payment = await client.sandbox.payment.create();\n\nconsole.log(payment.payment_id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.Sandbox.Jobs.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tjob, err := client.Sandbox.Jobs.New(context.TODO(), finchgo.SandboxJobNewParams{\n\t\tType: finchgo.F(finchgo.SandboxJobNewParamsTypeDataSyncAll),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", job.JobID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/sandbox/jobs \\\n    -H \'Content-Type: application/json\' \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN" \\\n    -d \'{\n          "type": "data_sync_all"\n        }\'',
      },
      java: {
        method: 'sandbox().jobs().create',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.JobCreateResponse;\nimport com.tryfinch.api.models.SandboxJobCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        SandboxJobCreateParams params = SandboxJobCreateParams.builder()\n            .type(SandboxJobCreateParams.Type.DATA_SYNC_ALL)\n            .build();\n        JobCreateResponse job = client.sandbox().jobs().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'sandbox().jobs().create',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.JobCreateResponse\nimport com.tryfinch.api.models.SandboxJobCreateParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val params: SandboxJobCreateParams = SandboxJobCreateParams.builder()\n        .type(SandboxJobCreateParams.Type.DATA_SYNC_ALL)\n        .build()\n    val job: JobCreateResponse = client.sandbox().jobs().create(params)\n}',
      },
      python: {
        method: 'sandbox.jobs.create',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\njob = client.sandbox.jobs.create(\n    type="data_sync_all",\n)\nprint(job.job_id)',
      },
      ruby: {
        method: 'sandbox.jobs.create',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\njob = finch.sandbox.jobs.create(type: :data_sync_all)\n\nputs(job)',
      },
      typescript: {
        method: 'client.sandbox.jobs.create',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst job = await client.sandbox.jobs.create({ type: 'data_sync_all' });\n\nconsole.log(job.job_id);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.Sandbox.Jobs.Configuration.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tsandboxJobConfigurations, err := client.Sandbox.Jobs.Configuration.Get(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", sandboxJobConfigurations)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/sandbox/jobs/configuration \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'sandbox().jobs().configuration().retrieve',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.SandboxJobConfiguration;\nimport com.tryfinch.api.models.SandboxJobConfigurationRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        List<SandboxJobConfiguration> sandboxJobConfigurations = client.sandbox().jobs().configuration().retrieve();\n    }\n}',
      },
      kotlin: {
        method: 'sandbox().jobs().configuration().retrieve',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.SandboxJobConfiguration\nimport com.tryfinch.api.models.SandboxJobConfigurationRetrieveParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val sandboxJobConfigurations: List<SandboxJobConfiguration> = client.sandbox().jobs().configuration().retrieve()\n}',
      },
      python: {
        method: 'sandbox.jobs.configuration.retrieve',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\nsandbox_job_configurations = client.sandbox.jobs.configuration.retrieve()\nprint(sandbox_job_configurations)',
      },
      ruby: {
        method: 'sandbox.jobs.configuration.retrieve',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\nsandbox_job_configurations = finch.sandbox.jobs.configuration.retrieve\n\nputs(sandbox_job_configurations)',
      },
      typescript: {
        method: 'client.sandbox.jobs.configuration.retrieve',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst sandboxJobConfigurations = await client.sandbox.jobs.configuration.retrieve();\n\nconsole.log(sandboxJobConfigurations);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.Sandbox.Jobs.Configuration.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tsandboxJobConfiguration, err := client.Sandbox.Jobs.Configuration.Update(context.TODO(), finchgo.SandboxJobConfigurationUpdateParams{\n\t\tCompletionStatus: finchgo.F(finchgo.SandboxJobConfigurationUpdateParamsCompletionStatusComplete),\n\t\tType:             finchgo.F(finchgo.SandboxJobConfigurationUpdateParamsTypeDataSyncAll),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", sandboxJobConfiguration.CompletionStatus)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/sandbox/jobs/configuration \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN" \\\n    -d \'{\n          "completion_status": "complete",\n          "type": "data_sync_all"\n        }\'',
      },
      java: {
        method: 'sandbox().jobs().configuration().update',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.SandboxJobConfiguration;\nimport com.tryfinch.api.models.SandboxJobConfigurationUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        SandboxJobConfiguration params = SandboxJobConfiguration.builder()\n            .completionStatus(SandboxJobConfiguration.CompletionStatus.COMPLETE)\n            .type(SandboxJobConfiguration.Type.DATA_SYNC_ALL)\n            .build();\n        SandboxJobConfiguration sandboxJobConfiguration = client.sandbox().jobs().configuration().update(params);\n    }\n}',
      },
      kotlin: {
        method: 'sandbox().jobs().configuration().update',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.SandboxJobConfiguration\nimport com.tryfinch.api.models.SandboxJobConfigurationUpdateParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val params: SandboxJobConfiguration = SandboxJobConfiguration.builder()\n        .completionStatus(SandboxJobConfiguration.CompletionStatus.COMPLETE)\n        .type(SandboxJobConfiguration.Type.DATA_SYNC_ALL)\n        .build()\n    val sandboxJobConfiguration: SandboxJobConfiguration = client.sandbox().jobs().configuration().update(params)\n}',
      },
      python: {
        method: 'sandbox.jobs.configuration.update',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\nsandbox_job_configuration = client.sandbox.jobs.configuration.update(\n    completion_status="complete",\n    type="data_sync_all",\n)\nprint(sandbox_job_configuration.completion_status)',
      },
      ruby: {
        method: 'sandbox.jobs.configuration.update',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\nsandbox_job_configuration = finch.sandbox.jobs.configuration.update(completion_status: :complete, type: :data_sync_all)\n\nputs(sandbox_job_configuration)',
      },
      typescript: {
        method: 'client.sandbox.jobs.configuration.update',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst sandboxJobConfiguration = await client.sandbox.jobs.configuration.update({\n  completion_status: 'complete',\n  type: 'data_sync_all',\n});\n\nconsole.log(sandboxJobConfiguration.completion_status);",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.Payroll.PayGroups.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tpage, err := client.Payroll.PayGroups.List(context.TODO(), finchgo.PayrollPayGroupListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/pay-groups \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'payroll().payGroups().list',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.PayrollPayGroupListPage;\nimport com.tryfinch.api.models.PayrollPayGroupListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        PayrollPayGroupListPage page = client.payroll().payGroups().list();\n    }\n}',
      },
      kotlin: {
        method: 'payroll().payGroups().list',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.PayrollPayGroupListPage\nimport com.tryfinch.api.models.PayrollPayGroupListParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val page: PayrollPayGroupListPage = client.payroll().payGroups().list()\n}',
      },
      python: {
        method: 'payroll.pay_groups.list',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\npage = client.payroll.pay_groups.list()\npage = page.items[0]\nprint(page.id)',
      },
      ruby: {
        method: 'payroll.pay_groups.list',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\npage = finch.payroll.pay_groups.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.payroll.payGroups.list',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\n// Automatically fetches more pages as needed.\nfor await (const payGroupListResponse of client.payroll.payGroups.list()) {\n  console.log(payGroupListResponse.id);\n}",
      },
    },
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
    perLanguage: {
      go: {
        method: 'client.Payroll.PayGroups.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tpayGroup, err := client.Payroll.PayGroups.Get(\n\t\tcontext.TODO(),\n\t\t"pay_group_id",\n\t\tfinchgo.PayrollPayGroupGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", payGroup.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/employer/pay-groups/$PAY_GROUP_ID \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -H "Authorization: Bearer $ACCESS_TOKEN"',
      },
      java: {
        method: 'payroll().payGroups().retrieve',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.PayGroupRetrieveResponse;\nimport com.tryfinch.api.models.PayrollPayGroupRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.builder()\n            .fromEnv()\n            .accessToken("My Access Token")\n            .build();\n\n        PayGroupRetrieveResponse payGroup = client.payroll().payGroups().retrieve("pay_group_id");\n    }\n}',
      },
      kotlin: {
        method: 'payroll().payGroups().retrieve',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.PayGroupRetrieveResponse\nimport com.tryfinch.api.models.PayrollPayGroupRetrieveParams\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.builder()\n        .fromEnv()\n        .accessToken("My Access Token")\n        .build()\n\n    val payGroup: PayGroupRetrieveResponse = client.payroll().payGroups().retrieve("pay_group_id")\n}',
      },
      python: {
        method: 'payroll.pay_groups.retrieve',
        example:
          'from finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\npay_group = client.payroll.pay_groups.retrieve(\n    pay_group_id="pay_group_id",\n)\nprint(pay_group.id)',
      },
      ruby: {
        method: 'payroll.pay_groups.retrieve',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\npay_group = finch.payroll.pay_groups.retrieve("pay_group_id")\n\nputs(pay_group)',
      },
      typescript: {
        method: 'client.payroll.payGroups.retrieve',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst payGroup = await client.payroll.payGroups.retrieve('pay_group_id');\n\nconsole.log(payGroup.id);",
      },
    },
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
      "## new\n\n`client.connect.sessions.new(customer_id: string, customer_name: string, products: string[], customer_email?: string, integration?: { provider: string; auth_method?: 'assisted' | 'credential' | 'oauth' | 'api_token'; }, manual?: boolean, minutes_to_expire?: number, redirect_uri?: string, sandbox?: 'finch' | 'provider'): { connect_url: string; session_id: string; }`\n\n**post** `/connect/sessions`\n\nCreate a new connect session for an employer\n\n### Parameters\n\n- `customer_id: string`\n  Unique identifier for the customer\n\n- `customer_name: string`\n  Name of the customer\n\n- `products: string[]`\n  The Finch products to request access to. Use `benefits` to access deductions endpoints — `deduction` is a deprecated alias that is still accepted but should not be combined with `benefits`.\n\n- `customer_email?: string`\n  Email address of the customer\n\n- `integration?: { provider: string; auth_method?: 'assisted' | 'credential' | 'oauth' | 'api_token'; }`\n  Integration configuration for the connect session\n  - `provider: string`\n    The provider to integrate with\n  - `auth_method?: 'assisted' | 'credential' | 'oauth' | 'api_token'`\n    The authentication method to use\n\n- `manual?: boolean`\n  Enable manual authentication mode\n\n- `minutes_to_expire?: number`\n  The number of minutes until the session expires (defaults to 129,600, which is 90 days)\n\n- `redirect_uri?: string`\n  The URI to redirect to after the Connect flow is completed\n\n- `sandbox?: 'finch' | 'provider'`\n  Sandbox mode for testing\n\n### Returns\n\n- `{ connect_url: string; session_id: string; }`\n\n  - `connect_url: string`\n  - `session_id: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst response = await client.connect.sessions.new({\n  customer_id: 'x',\n  customer_name: 'x',\n  products: ['benefits'],\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.Sessions.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithClientID("4ab15e51-11ad-49f4-acae-f343b7794375"),\n\t\toption.WithClientSecret("My Client Secret"),\n\t)\n\tresponse, err := client.Connect.Sessions.New(context.TODO(), finchgo.ConnectSessionNewParams{\n\t\tCustomerID:   finchgo.F("x"),\n\t\tCustomerName: finchgo.F("x"),\n\t\tProducts:     finchgo.F([]finchgo.ConnectSessionNewParamsProduct{finchgo.ConnectSessionNewParamsProductBenefits}),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.SessionID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/connect/sessions \\\n    -H \'Content-Type: application/json\' \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -u "$FINCH_CLIENT_ID:FINCH_CLIENT_SECRET" \\\n    -d \'{\n          "customer_id": "x",\n          "customer_name": "x",\n          "products": [\n            "benefits"\n          ]\n        }\'',
      },
      java: {
        method: 'connect().sessions().new_',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.ConnectSessionNewParams;\nimport com.tryfinch.api.models.SessionNewResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.fromEnv();\n\n        ConnectSessionNewParams params = ConnectSessionNewParams.builder()\n            .customerId("x")\n            .customerName("x")\n            .addProduct(ConnectSessionNewParams.ConnectProducts.BENEFITS)\n            .build();\n        SessionNewResponse response = client.connect().sessions().new_(params);\n    }\n}',
      },
      kotlin: {
        method: 'connect().sessions().new',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.ConnectSessionNewParams\nimport com.tryfinch.api.models.SessionNewResponse\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.fromEnv()\n\n    val params: ConnectSessionNewParams = ConnectSessionNewParams.builder()\n        .customerId("x")\n        .customerName("x")\n        .addProduct(ConnectSessionNewParams.ConnectProducts.BENEFITS)\n        .build()\n    val response: SessionNewResponse = client.connect().sessions().new(params)\n}',
      },
      python: {
        method: 'connect.sessions.new',
        example:
          'import os\nfrom finch import Finch\n\nclient = Finch(\n    client_id=os.environ.get("FINCH_CLIENT_ID"),  # This is the default and can be omitted\n    client_secret=os.environ.get("FINCH_CLIENT_SECRET"),  # This is the default and can be omitted\n)\nresponse = client.connect.sessions.new(\n    customer_id="x",\n    customer_name="x",\n    products=["benefits"],\n)\nprint(response.session_id)',
      },
      ruby: {
        method: 'connect.sessions.new',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(client_id: "4ab15e51-11ad-49f4-acae-f343b7794375", client_secret: "My Client Secret")\n\nresponse = finch.connect.sessions.new(customer_id: "x", customer_name: "x", products: [:benefits])\n\nputs(response)',
      },
      typescript: {
        method: 'client.connect.sessions.new',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  clientID: process.env['FINCH_CLIENT_ID'], // This is the default and can be omitted\n  clientSecret: process.env['FINCH_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst response = await client.connect.sessions.new({\n  customer_id: 'x',\n  customer_name: 'x',\n  products: ['benefits'],\n});\n\nconsole.log(response.session_id);",
      },
    },
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
      "## reauthenticate\n\n`client.connect.sessions.reauthenticate(connection_id: string, minutes_to_expire?: number, products?: string[], redirect_uri?: string): { connect_url: string; session_id: string; }`\n\n**post** `/connect/sessions/reauthenticate`\n\nCreate a new Connect session for reauthenticating an existing connection\n\n### Parameters\n\n- `connection_id: string`\n  The ID of the existing connection to reauthenticate\n\n- `minutes_to_expire?: number`\n  The number of minutes until the session expires (defaults to 43,200, which is 30 days)\n\n- `products?: string[]`\n  The products to request access to (optional for reauthentication). Use `benefits` to access deductions endpoints — `deduction` is a deprecated alias that is still accepted but should not be combined with `benefits`.\n\n- `redirect_uri?: string`\n  The URI to redirect to after the Connect flow is completed\n\n### Returns\n\n- `{ connect_url: string; session_id: string; }`\n\n  - `connect_url: string`\n  - `session_id: string`\n\n### Example\n\n```typescript\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst response = await client.connect.sessions.reauthenticate({ connection_id: 'connection_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.Sessions.Reauthenticate',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithClientID("4ab15e51-11ad-49f4-acae-f343b7794375"),\n\t\toption.WithClientSecret("My Client Secret"),\n\t)\n\tresponse, err := client.Connect.Sessions.Reauthenticate(context.TODO(), finchgo.ConnectSessionReauthenticateParams{\n\t\tConnectionID: finchgo.F("connection_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.SessionID)\n}\n',
      },
      http: {
        example:
          'curl https://api.tryfinch.com/connect/sessions/reauthenticate \\\n    -H \'Content-Type: application/json\' \\\n    -H \'Finch-API-Version: 2020-09-17\' \\\n    -u "$FINCH_CLIENT_ID:FINCH_CLIENT_SECRET" \\\n    -d \'{\n          "connection_id": "connection_id"\n        }\'',
      },
      java: {
        method: 'connect().sessions().reauthenticate',
        example:
          'package com.tryfinch.api.example;\n\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.ConnectSessionReauthenticateParams;\nimport com.tryfinch.api.models.SessionReauthenticateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        FinchClient client = FinchOkHttpClient.fromEnv();\n\n        ConnectSessionReauthenticateParams params = ConnectSessionReauthenticateParams.builder()\n            .connectionId("connection_id")\n            .build();\n        SessionReauthenticateResponse response = client.connect().sessions().reauthenticate(params);\n    }\n}',
      },
      kotlin: {
        method: 'connect().sessions().reauthenticate',
        example:
          'package com.tryfinch.api.example\n\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.ConnectSessionReauthenticateParams\nimport com.tryfinch.api.models.SessionReauthenticateResponse\n\nfun main() {\n    val client: FinchClient = FinchOkHttpClient.fromEnv()\n\n    val params: ConnectSessionReauthenticateParams = ConnectSessionReauthenticateParams.builder()\n        .connectionId("connection_id")\n        .build()\n    val response: SessionReauthenticateResponse = client.connect().sessions().reauthenticate(params)\n}',
      },
      python: {
        method: 'connect.sessions.reauthenticate',
        example:
          'import os\nfrom finch import Finch\n\nclient = Finch(\n    client_id=os.environ.get("FINCH_CLIENT_ID"),  # This is the default and can be omitted\n    client_secret=os.environ.get("FINCH_CLIENT_SECRET"),  # This is the default and can be omitted\n)\nresponse = client.connect.sessions.reauthenticate(\n    connection_id="connection_id",\n)\nprint(response.session_id)',
      },
      ruby: {
        method: 'connect.sessions.reauthenticate',
        example:
          'require "finch_api"\n\nfinch = FinchAPI::Client.new(client_id: "4ab15e51-11ad-49f4-acae-f343b7794375", client_secret: "My Client Secret")\n\nresponse = finch.connect.sessions.reauthenticate(connection_id: "connection_id")\n\nputs(response)',
      },
      typescript: {
        method: 'client.connect.sessions.reauthenticate',
        example:
          "import Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  clientID: process.env['FINCH_CLIENT_ID'], // This is the default and can be omitted\n  clientSecret: process.env['FINCH_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst response = await client.connect.sessions.reauthenticate({ connection_id: 'connection_id' });\n\nconsole.log(response.session_id);",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'python',
    content:
      '# Finch Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/finch-api.svg?label=pypi%20(stable))](https://pypi.org/project/finch-api/)\n\nThe Finch Python library provides convenient access to the Finch REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Finch MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40tryfinch%2Ffinch-api-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkB0cnlmaW5jaC9maW5jaC1hcGktbWNwIl0sImVudiI6eyJGSU5DSF9BQ0NFU1NfVE9LRU4iOiJNeSBBY2Nlc3MgVG9rZW4iLCJGSU5DSF9DTElFTlRfSUQiOiI0YWIxNWU1MS0xMWFkLTQ5ZjQtYWNhZS1mMzQzYjc3OTQzNzUiLCJGSU5DSF9DTElFTlRfU0VDUkVUIjoiTXkgQ2xpZW50IFNlY3JldCIsIkZJTkNIX1dFQkhPT0tfU0VDUkVUIjoiTXkgV2ViaG9vayBTZWNyZXQifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40tryfinch%2Ffinch-api-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40tryfinch%2Ffinch-api-mcp%22%5D%2C%22env%22%3A%7B%22FINCH_ACCESS_TOKEN%22%3A%22My%20Access%20Token%22%2C%22FINCH_CLIENT_ID%22%3A%224ab15e51-11ad-49f4-acae-f343b7794375%22%2C%22FINCH_CLIENT_SECRET%22%3A%22My%20Client%20Secret%22%2C%22FINCH_WEBHOOK_SECRET%22%3A%22My%20Webhook%20Secret%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [developer.tryfinch.com](https://developer.tryfinch.com/). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install finch-api\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nfrom finch import Finch\n\nclient = Finch(\n    access_token="My Access Token",\n)\n\npage = client.hris.directory.list()\nprint(page.individuals)\n```\n\n\n\n## Async usage\n\nSimply import `AsyncFinch` instead of `Finch` and use `await` with each API call:\n\n```python\nimport asyncio\nfrom finch import AsyncFinch\n\nclient = AsyncFinch(\n    access_token="My Access Token",\n)\n\nasync def main() -> None:\n  page = await client.hris.directory.list()\n  print(page.individuals)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install finch-api[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport asyncio\nfrom finch import DefaultAioHttpClient\nfrom finch import AsyncFinch\n\nasync def main() -> None:\n  async with AsyncFinch(\n    access_token="My Access Token",\n    http_client=DefaultAioHttpClient(),\n) as client:\n    page = await client.hris.directory.list()\n    print(page.individuals)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n## Pagination\n\nList methods in the Finch API are paginated.\n\nThis library provides auto-paginating iterators with each list response, so you do not have to request successive pages manually:\n\n```python\nfrom finch import Finch\n\nclient = Finch()\n\nall_directories = []\n# Automatically fetches more pages as needed.\nfor directory in client.hris.directory.list():\n    # Do something with directory here\n    all_directories.append(directory)\nprint(all_directories)\n```\n\nOr, asynchronously:\n\n```python\nimport asyncio\nfrom finch import AsyncFinch\n\nclient = AsyncFinch()\n\nasync def main() -> None:\n    all_directories = []\n    # Iterate through items across all pages, issuing requests as needed.\n    async for directory in client.hris.directory.list():\n        all_directories.append(directory)\n    print(all_directories)\n\nasyncio.run(main())\n```\n\nAlternatively, you can use the `.has_next_page()`, `.next_page_info()`, or  `.get_next_page()` methods for more granular control working with pages:\n\n```python\nfirst_page = await client.hris.directory.list()\nif first_page.has_next_page():\n    print(f"will fetch next page using these details: {first_page.next_page_info()}")\n    next_page = await first_page.get_next_page()\n    print(f"number of items we just fetched: {len(next_page.individuals)}")\n\n# Remove `await` for non-async usage.\n```\n\nOr just work directly with the returned data:\n\n```python\nfirst_page = await client.hris.directory.list()\n\nprint(f"the current start offset for this page: {first_page.paging.offset}") # => "the current start offset for this page: 1"\nfor directory in first_page.individuals:\n    print(directory.id)\n\n# Remove `await` for non-async usage.\n```\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `finch.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `finch.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `finch.APIError`.\n\n```python\nimport finch\nfrom finch import Finch\n\nclient = Finch()\n\ntry:\n    client.hris.company.retrieve()\nexcept finch.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept finch.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept finch.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom finch import Finch\n\n# Configure the default for all requests:\nclient = Finch(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).hris.directory.list()\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom finch import Finch\n\n# Configure the default for all requests:\nclient = Finch(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = Finch(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).hris.directory.list()\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n## Default Headers\n\nWe automatically send the `Finch-API-Version` header set to `2020-09-17`.\n\nIf you need to, you can override it by setting default headers per-request or on the client object.\n\nBe aware that doing so may result in incorrect types and other unexpected or undefined behavior in the SDK.\n\n```python\nfrom finch import Finch\n\nclient = Finch(\n    default_headers={\n        "Finch-API-Version": "My-Custom-Value"\n    },\n)\n```\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `FINCH_LOG` to `info`.\n\n```shell\n$ export FINCH_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom finch import Finch\n\nclient = Finch()\nresponse = client.hris.directory.with_raw_response.list()\nprint(response.headers.get(\'X-My-Header\'))\n\ndirectory = response.parse()  # get the object that `hris.directory.list()` would have returned\nprint(directory.id)\n```\n\nThese methods return a [`LegacyAPIResponse`](https://github.com/Finch-API/finch-api-python/tree/main/src/finch/_legacy_response.py) object. This is a legacy class as we\'re changing it slightly in the next major version.\n\nFor the sync client this will mostly be the same with the exception\nof `content` & `text` will be methods instead of properties. In the\nasync client, all methods will be async.\n\nA migration script will be provided & the migration in general should\nbe smooth.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\nAs such, `.with_streaming_response` methods return a different [`APIResponse`](https://github.com/Finch-API/finch-api-python/tree/main/src/finch/_response.py) object, and the async client returns an [`AsyncAPIResponse`](https://github.com/Finch-API/finch-api-python/tree/main/src/finch/_response.py) object.\n\n```python\nwith client.hris.directory.with_streaming_response.list() as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom finch import Finch, DefaultHttpxClient\n\nclient = Finch(\n    # Or use the `FINCH_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom finch import Finch\n\nwith Finch() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/Finch-API/finch-api-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport finch\nprint(finch.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'go',
    content:
      '# Finch Go API Library\n\n<a href="https://pkg.go.dev/github.com/Finch-API/finch-api-go"><img src="https://pkg.go.dev/badge/github.com/Finch-API/finch-api-go.svg" alt="Go Reference"></a>\n\nThe Finch Go library provides convenient access to the [Finch REST API](https://developer.tryfinch.com/)\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Finch MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40tryfinch%2Ffinch-api-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkB0cnlmaW5jaC9maW5jaC1hcGktbWNwIl0sImVudiI6eyJGSU5DSF9BQ0NFU1NfVE9LRU4iOiJNeSBBY2Nlc3MgVG9rZW4iLCJGSU5DSF9DTElFTlRfSUQiOiI0YWIxNWU1MS0xMWFkLTQ5ZjQtYWNhZS1mMzQzYjc3OTQzNzUiLCJGSU5DSF9DTElFTlRfU0VDUkVUIjoiTXkgQ2xpZW50IFNlY3JldCIsIkZJTkNIX1dFQkhPT0tfU0VDUkVUIjoiTXkgV2ViaG9vayBTZWNyZXQifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40tryfinch%2Ffinch-api-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40tryfinch%2Ffinch-api-mcp%22%5D%2C%22env%22%3A%7B%22FINCH_ACCESS_TOKEN%22%3A%22My%20Access%20Token%22%2C%22FINCH_CLIENT_ID%22%3A%224ab15e51-11ad-49f4-acae-f343b7794375%22%2C%22FINCH_CLIENT_SECRET%22%3A%22My%20Client%20Secret%22%2C%22FINCH_WEBHOOK_SECRET%22%3A%22My%20Webhook%20Secret%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n```go\nimport (\n\t"github.com/Finch-API/finch-api-go" // imported as SDK_PackageName\n)\n```\n\n<!-- x-release-please-end -->\n\nOr to pin the version:\n\n<!-- x-release-please-start-version -->\n\n```sh\ngo get -u \'github.com/Finch-API/finch-api-go@v0.0.1\'\n```\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/Finch-API/finch-api-go"\n\t"github.com/Finch-API/finch-api-go/option"\n)\n\nfunc main() {\n\tclient := finchgo.NewClient(\n\t\toption.WithAccessToken("My Access Token"),\n\t)\n\tpage, err := client.HRIS.Directory.List(context.TODO(), finchgo.HRISDirectoryListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.HRIS.Directory.List(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/Finch-API/finch-api-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n```go\niter := client.HRIS.Directory.ListAutoPaging(context.TODO(), finchgo.HRISDirectoryListParams{})\n// Automatically fetches more pages as needed.\nfor iter.Next() {\n\tindividualInDirectory := iter.Current()\n\tfmt.Printf("%+v\\n", individualInDirectory)\n}\nif err := iter.Err(); err != nil {\n\tpanic(err.Error())\n}\n```\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n```go\npage, err := client.HRIS.Directory.List(context.TODO(), finchgo.HRISDirectoryListParams{})\nfor page != nil {\n\tfor _, directory := range page.Individuals {\n\t\tfmt.Printf("%+v\\n", directory)\n\t}\n\tpage, err = page.GetNextPage()\n}\nif err != nil {\n\tpanic(err.Error())\n}\n```\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.HRIS.Company.Get(context.TODO(), finchgo.HRISCompanyGetParams{})\nif err != nil {\n\tvar apierr *finchgo.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/employer/company": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.HRIS.Directory.List(\n\tctx,\n\tfinchgo.HRISDirectoryListParams{},\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := finchgo.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.HRIS.Directory.List(\n\tcontext.TODO(),\n\tfinchgo.HRISDirectoryListParams{},\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\npage, err := client.HRIS.Directory.List(\n\tcontext.TODO(),\n\tfinchgo.HRISDirectoryListParams{},\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", page)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/Finch-API/finch-api-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Finch TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@tryfinch/finch-api.svg?label=npm%20(stable))](https://npmjs.org/package/@tryfinch/finch-api) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@tryfinch/finch-api)\n\nThis library provides convenient access to the Finch REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [developer.tryfinch.com](https://developer.tryfinch.com/). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Finch MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40tryfinch%2Ffinch-api-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkB0cnlmaW5jaC9maW5jaC1hcGktbWNwIl0sImVudiI6eyJGSU5DSF9BQ0NFU1NfVE9LRU4iOiJNeSBBY2Nlc3MgVG9rZW4iLCJGSU5DSF9DTElFTlRfSUQiOiI0YWIxNWU1MS0xMWFkLTQ5ZjQtYWNhZS1mMzQzYjc3OTQzNzUiLCJGSU5DSF9DTElFTlRfU0VDUkVUIjoiTXkgQ2xpZW50IFNlY3JldCIsIkZJTkNIX1dFQkhPT0tfU0VDUkVUIjoiTXkgV2ViaG9vayBTZWNyZXQifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40tryfinch%2Ffinch-api-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40tryfinch%2Ffinch-api-mcp%22%5D%2C%22env%22%3A%7B%22FINCH_ACCESS_TOKEN%22%3A%22My%20Access%20Token%22%2C%22FINCH_CLIENT_ID%22%3A%224ab15e51-11ad-49f4-acae-f343b7794375%22%2C%22FINCH_CLIENT_SECRET%22%3A%22My%20Client%20Secret%22%2C%22FINCH_WEBHOOK_SECRET%22%3A%22My%20Webhook%20Secret%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @tryfinch/finch-api\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst page = await client.hris.directory.list();\nconst individualInDirectory = page.individuals[0];\n\nconsole.log(individualInDirectory.id);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  accessToken: 'My Access Token',\n});\n\nconst [individualInDirectory]: [Finch.HRIS.IndividualInDirectory] =\n  await client.hris.directory.list();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst company = await client.hris.company.retrieve().catch(async (err) => {\n  if (err instanceof Finch.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Finch({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.hris.directory.list({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Finch({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.hris.directory.list({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n## Auto-pagination\n\nList methods in the Finch API are paginated.\nYou can use the `for await … of` syntax to iterate through items across all pages:\n\n```ts\nasync function fetchAllIndividualInDirectories(params) {\n  const allIndividualInDirectories = [];\n  // Automatically fetches more pages as needed.\n  for await (const individualInDirectory of client.hris.directory.list()) {\n    allIndividualInDirectories.push(individualInDirectory);\n  }\n  return allIndividualInDirectories;\n}\n```\n\nAlternatively, you can request a single page at a time:\n\n```ts\nlet page = await client.hris.directory.list();\nfor (const individualInDirectory of page.individuals) {\n  console.log(individualInDirectory);\n}\n\n// Convenience methods are provided for manually paginating:\nwhile (page.hasNextPage()) {\n  page = await page.getNextPage();\n  // ...\n}\n```\n\n## Default Headers\n\nWe automatically send the `Finch-API-Version` header set to `2020-09-17`.\n\nIf you need to, you can override it by setting default headers on a per-request basis.\n\nBe aware that doing so may result in incorrect types and other unexpected or undefined behavior in the SDK.\n\n```ts\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch();\n\nconst page = await client.hris.directory.list({\n  headers: { 'Finch-API-Version': 'My-Custom-Value' },\n});\nconst individualInDirectory = page.individuals[0];\n```\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Finch();\n\nconst response = await client.hris.directory.list().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: page, response: raw } = await client.hris.directory.list().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nfor await (const individualInDirectory of page) {\n  console.log(individualInDirectory.id);\n}\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `FINCH_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Finch from '@tryfinch/finch-api';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Finch({\n  logger: logger.child({ name: 'Finch' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.hris.directory.list({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Finch from '@tryfinch/finch-api';\nimport fetch from 'my-fetch';\n\nconst client = new Finch({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Finch from '@tryfinch/finch-api';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Finch({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Finch from '@tryfinch/finch-api';\n\nconst client = new Finch({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Finch from 'npm:@tryfinch/finch-api';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Finch({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/Finch-API/finch-api-node/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n- Web browsers: disabled by default to avoid exposing your secret API credentials. Enable browser support by explicitly setting `dangerouslyAllowBrowser` to true'.\n<details>\n  <summary>More explanation</summary>\n\n  ### Why is this dangerous?\n  Enabling the `dangerouslyAllowBrowser` option can be dangerous because it exposes your secret API credentials in the client-side code. Web browsers are inherently less secure than server environments,\n  any user with access to the browser can potentially inspect, extract, and misuse these credentials. This could lead to unauthorized access using your credentials and potentially compromise sensitive data or functionality.\n  ### When might this not be dangerous?\n  In certain scenarios where enabling browser support might not pose significant risks:\n  - Internal Tools: If the application is used solely within a controlled internal environment where the users are trusted, the risk of credential exposure can be mitigated.\n  - Public APIs with Limited Scope: If your API has very limited scope and the exposed credentials do not grant access to sensitive data or critical operations, the potential impact of exposure is reduced.\n  - Development or debugging purpose: Enabling this feature temporarily might be acceptable, provided the credentials are short-lived, aren't also used in production environments, or are frequently rotated.\n\n</details>\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
  {
    language: 'ruby',
    content:
      '# Finch Ruby API library\n\nThe Finch Ruby library provides convenient access to the Finch REST API from any Ruby 3.2.0+ application. It ships with comprehensive types & docstrings in Yard, RBS, and RBI – [see below](https://github.com/Finch-API/finch-api-ruby#Sorbet) for usage with Sorbet. The standard library\'s `net/http` is used as the HTTP transport, with connection pooling via the `connection_pool` gem.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Finch MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40tryfinch%2Ffinch-api-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkB0cnlmaW5jaC9maW5jaC1hcGktbWNwIl0sImVudiI6eyJGSU5DSF9BQ0NFU1NfVE9LRU4iOiJNeSBBY2Nlc3MgVG9rZW4iLCJGSU5DSF9DTElFTlRfSUQiOiI0YWIxNWU1MS0xMWFkLTQ5ZjQtYWNhZS1mMzQzYjc3OTQzNzUiLCJGSU5DSF9DTElFTlRfU0VDUkVUIjoiTXkgQ2xpZW50IFNlY3JldCIsIkZJTkNIX1dFQkhPT0tfU0VDUkVUIjoiTXkgV2ViaG9vayBTZWNyZXQifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40tryfinch%2Ffinch-api-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40tryfinch%2Ffinch-api-mcp%22%5D%2C%22env%22%3A%7B%22FINCH_ACCESS_TOKEN%22%3A%22My%20Access%20Token%22%2C%22FINCH_CLIENT_ID%22%3A%224ab15e51-11ad-49f4-acae-f343b7794375%22%2C%22FINCH_CLIENT_SECRET%22%3A%22My%20Client%20Secret%22%2C%22FINCH_WEBHOOK_SECRET%22%3A%22My%20Webhook%20Secret%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nDocumentation for releases of this gem can be found [on RubyDoc](https://gemdocs.org/gems/finch-api).\n\nThe REST API documentation can be found on [developer.tryfinch.com](https://developer.tryfinch.com/).\n\n## Installation\n\nTo use this gem, install via Bundler by adding the following to your application\'s `Gemfile`:\n\n<!-- x-release-please-start-version -->\n\n```ruby\ngem "finch-api", "~> 0.0.1"\n```\n\n<!-- x-release-please-end -->\n\n## Usage\n\n```ruby\nrequire "bundler/setup"\nrequire "finch_api"\n\nfinch = FinchAPI::Client.new(access_token: "My Access Token")\n\npage = finch.hris.directory.list\n\nputs(page.id)\n```\n\n\n\n### Pagination\n\nList methods in the Finch API are paginated.\n\nThis library provides auto-paginating iterators with each list response, so you do not have to request successive pages manually:\n\n```ruby\npage = finch.hris.directory.list\n\n# Fetch single item from page.\ndirectory = page.individuals[0]\nputs(directory.id)\n\n# Automatically fetches more pages as needed.\npage.auto_paging_each do |directory|\n  puts(directory.id)\nend\n```\n\nAlternatively, you can use the `#next_page?` and `#next_page` methods for more granular control working with pages.\n\n```ruby\nif page.next_page?\n  new_page = page.next_page\n  puts(new_page.individuals[0].id)\nend\n```\n\n\n\n### Handling errors\n\nWhen the library is unable to connect to the API, or if the API returns a non-success status code (i.e., 4xx or 5xx response), a subclass of `FinchAPI::Errors::APIError` will be thrown:\n\n```ruby\nbegin\n  company = finch.hris.company.retrieve\nrescue FinchAPI::Errors::APIConnectionError => e\n  puts("The server could not be reached")\n  puts(e.cause)  # an underlying Exception, likely raised within `net/http`\nrescue FinchAPI::Errors::RateLimitError => e\n  puts("A 429 status code was received; we should back off a bit.")\nrescue FinchAPI::Errors::APIStatusError => e\n  puts("Another non-200-range status code was received")\n  puts(e.status)\nend\n```\n\nError codes are as follows:\n\n| Cause            | Error Type                 |\n| ---------------- | -------------------------- |\n| HTTP 400         | `BadRequestError`          |\n| HTTP 401         | `AuthenticationError`      |\n| HTTP 403         | `PermissionDeniedError`    |\n| HTTP 404         | `NotFoundError`            |\n| HTTP 409         | `ConflictError`            |\n| HTTP 422         | `UnprocessableEntityError` |\n| HTTP 429         | `RateLimitError`           |\n| HTTP >= 500      | `InternalServerError`      |\n| Other HTTP error | `APIStatusError`           |\n| Timeout          | `APITimeoutError`          |\n| Network error    | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\n\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict, 429 Rate Limit, >=500 Internal errors, and timeouts will all be retried by default.\n\nYou can use the `max_retries` option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nfinch = FinchAPI::Client.new(\n  max_retries: 0 # default is 2\n)\n\n# Or, configure per-request:\nfinch.hris.directory.list(request_options: {max_retries: 5})\n```\n\n### Timeouts\n\nBy default, requests will time out after 60 seconds. You can use the timeout option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nfinch = FinchAPI::Client.new(\n  timeout: nil # default is 60\n)\n\n# Or, configure per-request:\nfinch.hris.directory.list(request_options: {timeout: 5})\n```\n\nOn timeout, `FinchAPI::Errors::APITimeoutError` is raised.\n\nNote that requests that time out are retried by default.\n\n## Advanced concepts\n\n### BaseModel\n\nAll parameter and response objects inherit from `FinchAPI::Internal::Type::BaseModel`, which provides several conveniences, including:\n\n1. All fields, including unknown ones, are accessible with `obj[:prop]` syntax, and can be destructured with `obj => {prop: prop}` or pattern-matching syntax.\n\n2. Structural equivalence for equality; if two API calls return the same values, comparing the responses with == will return true.\n\n3. Both instances and the classes themselves can be pretty-printed.\n\n4. Helpers such as `#to_h`, `#deep_to_h`, `#to_json`, and `#to_yaml`.\n\n### Making custom or undocumented requests\n\n#### Undocumented properties\n\nYou can send undocumented parameters to any endpoint, and read undocumented response properties, like so:\n\nNote: the `extra_` parameters of the same name overrides the documented parameters.\n\n```ruby\npage =\n  finch.hris.directory.list(\n    request_options: {\n      extra_query: {my_query_parameter: value},\n      extra_body: {my_body_parameter: value},\n      extra_headers: {"my-header": value}\n    }\n  )\n\nputs(page[:my_undocumented_property])\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` under the `request_options:` parameter when making a request, as seen in the examples above.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints while retaining the benefit of auth, retries, and so on, you can make requests using `client.request`, like so:\n\n```ruby\nresponse = client.request(\n  method: :post,\n  path: \'/undocumented/endpoint\',\n  query: {"dog": "woof"},\n  headers: {"useful-header": "interesting-value"},\n  body: {"hello": "world"}\n)\n```\n\n### Concurrency & connection pooling\n\nThe `FinchAPI::Client` instances are threadsafe, but are only are fork-safe when there are no in-flight HTTP requests.\n\nEach instance of `FinchAPI::Client` has its own HTTP connection pool with a default size of 99. As such, we recommend instantiating the client once per application in most settings.\n\nWhen all available connections from the pool are checked out, requests wait for a new connection to become available, with queue time counting towards the request timeout.\n\nUnless otherwise specified, other classes in the SDK do not have locks protecting their underlying data structure.\n\n## Sorbet\n\nThis library provides comprehensive [RBI](https://sorbet.org/docs/rbi) definitions, and has no dependency on sorbet-runtime.\n\nYou can provide typesafe request parameters like so:\n\n```ruby\nfinch.hris.directory.list \n```\n\nOr, equivalently:\n\n```ruby\n# Hashes work, but are not typesafe:\nfinch.hris.directory.list\n\n# You can also splat a full Params class:\nparams = FinchAPI::HRIS::DirectoryListParams.new\nfinch.hris.directory.list(**params)\n```\n\n### Enums\n\nSince this library does not depend on `sorbet-runtime`, it cannot provide [`T::Enum`](https://sorbet.org/docs/tenum) instances. Instead, we provide "tagged symbols" instead, which is always a primitive at runtime:\n\n```ruby\n# :every_paycheck\nputs(FinchAPI::HRIS::BenefitFrequency::EVERY_PAYCHECK)\n\n# Revealed type: `T.all(FinchAPI::HRIS::BenefitFrequency, Symbol)`\nT.reveal_type(FinchAPI::HRIS::BenefitFrequency::EVERY_PAYCHECK)\n```\n\nEnum parameters have a "relaxed" type, so you can either pass in enum constants or their literal value:\n\n```ruby\n# Using the enum constants preserves the tagged type information:\nfinch.hris.benefits.create(\n  frequency: FinchAPI::HRIS::BenefitFrequency::EVERY_PAYCHECK,\n  # …\n)\n\n# Literal values are also permissible:\nfinch.hris.benefits.create(\n  frequency: :every_paycheck,\n  # …\n)\n```\n\n## Versioning\n\nThis package follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions. As the library is in initial development and has a major version of `0`, APIs may change at any time.\n\nThis package considers improvements to the (non-runtime) `*.rbi` and `*.rbs` type definitions to be non-breaking changes.\n\n## Requirements\n\nRuby 3.2.0 or higher.\n\n## Contributing\n\nSee [the contributing documentation](https://github.com/Finch-API/finch-api-ruby/tree/main/CONTRIBUTING.md).\n',
  },
  {
    language: 'java',
    content:
      '# Finch Java API Library\n\n<!-- x-release-please-start-version -->\n[![Maven Central](https://img.shields.io/maven-central/v/com.tryfinch.api/finch-java)](https://central.sonatype.com/artifact/com.tryfinch.api/finch-java/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.tryfinch.api/finch-java/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.tryfinch.api/finch-java/0.0.1)\n<!-- x-release-please-end -->\n\nThe Finch Java SDK provides convenient access to the [Finch REST API](https://developer.tryfinch.com/)   from applications written in Java.\n\nThe Finch Java SDK is similar to the Finch Kotlin SDK but with minor differences that       make it more ergonomic for use in Java, such as `Optional` instead of nullable values, `Stream`       instead of `Sequence`, and `CompletableFuture` instead of suspend functions.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Finch MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40tryfinch%2Ffinch-api-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkB0cnlmaW5jaC9maW5jaC1hcGktbWNwIl0sImVudiI6eyJGSU5DSF9BQ0NFU1NfVE9LRU4iOiJNeSBBY2Nlc3MgVG9rZW4iLCJGSU5DSF9DTElFTlRfSUQiOiI0YWIxNWU1MS0xMWFkLTQ5ZjQtYWNhZS1mMzQzYjc3OTQzNzUiLCJGSU5DSF9DTElFTlRfU0VDUkVUIjoiTXkgQ2xpZW50IFNlY3JldCIsIkZJTkNIX1dFQkhPT0tfU0VDUkVUIjoiTXkgV2ViaG9vayBTZWNyZXQifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40tryfinch%2Ffinch-api-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40tryfinch%2Ffinch-api-mcp%22%5D%2C%22env%22%3A%7B%22FINCH_ACCESS_TOKEN%22%3A%22My%20Access%20Token%22%2C%22FINCH_CLIENT_ID%22%3A%224ab15e51-11ad-49f4-acae-f343b7794375%22%2C%22FINCH_CLIENT_SECRET%22%3A%22My%20Client%20Secret%22%2C%22FINCH_WEBHOOK_SECRET%22%3A%22My%20Webhook%20Secret%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n<!-- x-release-please-start-version -->\n\nThe REST API documentation can be found on [developer.tryfinch.com](https://developer.tryfinch.com/). Javadocs are available on [javadoc.io](https://javadoc.io/doc/com.tryfinch.api/finch-java/0.0.1).\n\n<!-- x-release-please-end -->\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n### Gradle\n\n~~~kotlin\nimplementation("com.tryfinch.api:finch-java:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.tryfinch.api</groupId>\n  <artifactId>finch-java</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```java\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.HrisDirectoryListPage;\nimport com.tryfinch.api.models.HrisDirectoryListParams;\n\nFinchClient client = FinchOkHttpClient.builder()\n    // Configures using the `finch.clientId`, `finch.clientSecret`, `finch.webhookSecret` and `finch.baseUrl` system properties\n    // Or configures using the `FINCH_CLIENT_ID`, `FINCH_CLIENT_SECRET`, `FINCH_WEBHOOK_SECRET` and `FINCH_BASE_URL` environment variables\n    .fromEnv()\n    .accessToken("My Access Token")\n    .build();\n\nHrisDirectoryListPage page = client.hris().directory().list();\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```java\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\n\nFinchClient client = FinchOkHttpClient.builder()\n    // Configures using the `finch.clientId`, `finch.clientSecret`, `finch.webhookSecret` and `finch.baseUrl` system properties\n    // Or configures using the `FINCH_CLIENT_ID`, `FINCH_CLIENT_SECRET`, `FINCH_WEBHOOK_SECRET` and `FINCH_BASE_URL` environment variables\n    .fromEnv()\n    .accessToken("My Access Token")\n    .build();\n```\n\nOr manually:\n\n```java\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\n\nFinchClient client = FinchOkHttpClient.builder()\n    .accessToken("My Access Token")\n    .build();\n```\n\nOr using a combination of the two approaches:\n\n```java\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\n\nFinchClient client = FinchOkHttpClient.builder()\n    // Configures using the `finch.clientId`, `finch.clientSecret`, `finch.webhookSecret` and `finch.baseUrl` system properties\n    // Or configures using the `FINCH_CLIENT_ID`, `FINCH_CLIENT_SECRET`, `FINCH_WEBHOOK_SECRET` and `FINCH_BASE_URL` environment variables\n    .fromEnv()\n    .accessToken("My Access Token")\n    .build();\n```\n\nSee this table for the available options:\n\n| Setter          | System property       | Environment variable   | Required | Default value                |\n| --------------- | --------------------- | ---------------------- | -------- | ---------------------------- |\n| `clientId`      | `finch.clientId`      | `FINCH_CLIENT_ID`      | false    | -                            |\n| `clientSecret`  | `finch.clientSecret`  | `FINCH_CLIENT_SECRET`  | false    | -                            |\n| `webhookSecret` | `finch.webhookSecret` | `FINCH_WEBHOOK_SECRET` | false    | -                            |\n| `baseUrl`       | `finch.baseUrl`       | `FINCH_BASE_URL`       | true     | `"https://api.tryfinch.com"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```java\nimport com.tryfinch.api.client.FinchClient;\n\nFinchClient clientWithOptions = client.withOptions(optionsBuilder -> {\n    optionsBuilder.baseUrl("https://example.com");\n    optionsBuilder.maxRetries(42);\n});\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Finch API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Java class.\n\nFor example, `client.hris().directory().list(...)` should be called with an instance of `HrisDirectoryListParams`, and it     will return an instance of `HrisDirectoryListPage`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```java\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport com.tryfinch.api.models.HrisDirectoryListPageAsync;\nimport com.tryfinch.api.models.HrisDirectoryListParams;\nimport java.util.concurrent.CompletableFuture;\n\nFinchClient client = FinchOkHttpClient.builder()\n    // Configures using the `finch.clientId`, `finch.clientSecret`, `finch.webhookSecret` and `finch.baseUrl` system properties\n    // Or configures using the `FINCH_CLIENT_ID`, `FINCH_CLIENT_SECRET`, `FINCH_WEBHOOK_SECRET` and `FINCH_BASE_URL` environment variables\n    .fromEnv()\n    .accessToken("My Access Token")\n    .build();\n\nCompletableFuture<HrisDirectoryListPageAsync> page = client.async().hris().directory().list();\n```\n\nOr create an asynchronous client from the beginning:\n\n```java\nimport com.tryfinch.api.client.FinchClientAsync;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClientAsync;\nimport com.tryfinch.api.models.HrisDirectoryListPageAsync;\nimport com.tryfinch.api.models.HrisDirectoryListParams;\nimport java.util.concurrent.CompletableFuture;\n\nFinchClientAsync client = FinchOkHttpClientAsync.builder()\n    // Configures using the `finch.clientId`, `finch.clientSecret`, `finch.webhookSecret` and `finch.baseUrl` system properties\n    // Or configures using the `FINCH_CLIENT_ID`, `FINCH_CLIENT_SECRET`, `FINCH_WEBHOOK_SECRET` and `FINCH_BASE_URL` environment variables\n    .fromEnv()\n    .accessToken("My Access Token")\n    .build();\n\nCompletableFuture<HrisDirectoryListPageAsync> page = client.hris().directory().list();\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods return `CompletableFuture`s.\n\n\n\n\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Java classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```java\nimport com.tryfinch.api.core.http.Headers;\nimport com.tryfinch.api.core.http.HttpResponseFor;\nimport com.tryfinch.api.models.HrisDirectoryListPage;\nimport com.tryfinch.api.models.HrisDirectoryListParams;\n\nHttpResponseFor<HrisDirectoryListPage> page = client.hris().directory().withRawResponse().list();\n\nint statusCode = page.statusCode();\nHeaders headers = page.headers();\n```\n\nYou can still deserialize the response into an instance of a Java class if needed:\n\n```java\nimport com.tryfinch.api.models.HrisDirectoryListPage;\n\nHrisDirectoryListPage parsedPage = page.parse();\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`FinchServiceException`](finch-java-core/src/main/kotlin/com/tryfinch/api/errors/FinchServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](finch-java-core/src/main/kotlin/com/tryfinch/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](finch-java-core/src/main/kotlin/com/tryfinch/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](finch-java-core/src/main/kotlin/com/tryfinch/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](finch-java-core/src/main/kotlin/com/tryfinch/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](finch-java-core/src/main/kotlin/com/tryfinch/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](finch-java-core/src/main/kotlin/com/tryfinch/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](finch-java-core/src/main/kotlin/com/tryfinch/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](finch-java-core/src/main/kotlin/com/tryfinch/api/errors/UnexpectedStatusCodeException.kt) |\n\n- [`FinchIoException`](finch-java-core/src/main/kotlin/com/tryfinch/api/errors/FinchIoException.kt): I/O networking errors.\n\n- [`FinchRetryableException`](finch-java-core/src/main/kotlin/com/tryfinch/api/errors/FinchRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`FinchInvalidDataException`](finch-java-core/src/main/kotlin/com/tryfinch/api/errors/FinchInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`FinchException`](finch-java-core/src/main/kotlin/com/tryfinch/api/errors/FinchException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n## Pagination\n\nThe SDK defines methods that return a paginated lists of results. It provides convenient ways to access     the results either one page at a time or item-by-item across all pages.\n\n### Auto-pagination\n\nTo iterate through all results across all pages, use the `autoPager()` method, which automatically     fetches more pages as needed.\n\nWhen using the synchronous client, the method returns an [`Iterable`](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)\n\n```java\nimport com.tryfinch.api.models.HrisDirectoryListPage;\nimport com.tryfinch.api.models.IndividualInDirectory;\n\nHrisDirectoryListPage page = client.hris().directory().list();\n\n// Process as an Iterable\nfor (IndividualInDirectory directory : page.autoPager()) {\n    System.out.println(directory);\n}\n\n// Process as a Stream\npage.autoPager()\n    .stream()\n    .limit(50)\n    .forEach(directory -> System.out.println(directory));\n```\n\nWhen using the asynchronous client, the method returns an [`AsyncStreamResponse`](finch-java-core/src/main/kotlin/com/tryfinch/api/core/http/AsyncStreamResponse.kt):\n\n```java\nimport com.tryfinch.api.core.http.AsyncStreamResponse;\nimport com.tryfinch.api.models.HrisDirectoryListPageAsync;\nimport com.tryfinch.api.models.IndividualInDirectory;\nimport java.util.Optional;\nimport java.util.concurrent.CompletableFuture;\n\nCompletableFuture<HrisDirectoryListPageAsync> pageFuture = client.async().hris().directory().list();\n\npageFuture.thenRun(page -> page.autoPager().subscribe(directory -> {\n    System.out.println(directory);\n}));\n\n// If you need to handle errors or completion of the stream\npageFuture.thenRun(page -> page.autoPager().subscribe(new AsyncStreamResponse.Handler<>() {\n    @Override\n    public void onNext(IndividualInDirectory directory) {\n        System.out.println(directory);\n    }\n\n    @Override\n    public void onComplete(Optional<Throwable> error) {\n        if (error.isPresent()) {\n            System.out.println("Something went wrong!");\n            throw new RuntimeException(error.get());\n        } else {\n            System.out.println("No more!");\n        }\n    }\n}));\n\n// Or use futures\npageFuture.thenRun(page -> page.autoPager()\n    .subscribe(directory -> {\n        System.out.println(directory);\n    })\n    .onCompleteFuture()\n    .whenComplete((unused, error) -> {\n        if (error != null) {\n            System.out.println("Something went wrong!");\n            throw new RuntimeException(error);\n        } else {\n            System.out.println("No more!");\n        }\n    }));\n```\n\n### Manual pagination\n\nTo access individual page items and manually request the next page, use the `items()`,\n`hasNextPage()`, and `nextPage()` methods:\n\n```java\nimport com.tryfinch.api.models.HrisDirectoryListPage;\nimport com.tryfinch.api.models.IndividualInDirectory;\n\nHrisDirectoryListPage page = client.hris().directory().list();\nwhile (true) {\n    for (IndividualInDirectory directory : page.items()) {\n        System.out.println(directory);\n    }\n\n    if (!page.hasNextPage()) {\n        break;\n    }\n\n    page = page.nextPage();\n}\n```\n\n## Logging\n\nThe SDK uses the standard   [OkHttp logging interceptor](https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor).\n\nEnable logging by setting the `FINCH_LOG` environment variable to   `info`:\n\n```sh\nexport FINCH_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport FINCH_LOG=debug\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `finch-java-core` is published with a     [configuration file](finch-java-core/src/main/resources/META-INF/proguard/finch-java-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`FinchOkHttpClient`](finch-java-client-okhttp/src/main/kotlin/com/tryfinch/api/client/okhttp/FinchOkHttpClient.kt) or     [`FinchOkHttpClientAsync`](finch-java-client-okhttp/src/main/kotlin/com/tryfinch/api/client/okhttp/FinchOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```java\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\n\nFinchClient client = FinchOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .accessToken("My Access Token")\n    .build();\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```java\nimport com.tryfinch.api.models.HrisDirectoryListPage;\n\nHrisDirectoryListPage page = client.hris().directory().list(RequestOptions.builder().timeout(Duration.ofSeconds(30)).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport java.time.Duration;\n\nFinchClient client = FinchOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .accessToken("My Access Token")\n    .build();\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```java\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport java.net.InetSocketAddress;\nimport java.net.Proxy;\n\nFinchClient client = FinchOkHttpClient.builder()\n    .fromEnv()\n    .proxy(new Proxy(\n      Proxy.Type.HTTP, new InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .accessToken("My Access Token")\n    .build();\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```java\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\nimport java.time.Duration;\n\nFinchClient client = FinchOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .accessToken("My Access Token")\n    .build();\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```java\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\n\nFinchClient client = FinchOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .accessToken("My Access Token")\n    .build();\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `finch-java-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`FinchClient`](finch-java-core/src/main/kotlin/com/tryfinch/api/client/FinchClient.kt), [`FinchClientAsync`](finch-java-core/src/main/kotlin/com/tryfinch/api/client/FinchClientAsync.kt),             [`FinchClientImpl`](finch-java-core/src/main/kotlin/com/tryfinch/api/client/FinchClientImpl.kt), and [`FinchClientAsyncImpl`](finch-java-core/src/main/kotlin/com/tryfinch/api/client/FinchClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `finch-java-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`FinchOkHttpClient`](finch-java-client-okhttp/src/main/kotlin/com/tryfinch/api/client/okhttp/FinchOkHttpClient.kt) and [`FinchOkHttpClientAsync`](finch-java-client-okhttp/src/main/kotlin/com/tryfinch/api/client/okhttp/FinchOkHttpClientAsync.kt), which             provide a way to construct [`FinchClientImpl`](finch-java-core/src/main/kotlin/com/tryfinch/api/client/FinchClientImpl.kt) and             [`FinchClientAsyncImpl`](finch-java-core/src/main/kotlin/com/tryfinch/api/client/FinchClientAsyncImpl.kt), respectively, using OkHttp\n- `finch-java`\n  - Depends on and exposes the APIs of both `finch-java-core` and `finch-java-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`finch-java` dependency](#installation) with `finch-java-core`\n2. Copy `finch-java-client-okhttp`\'s [`OkHttpClient`](finch-java-client-okhttp/src/main/kotlin/com/tryfinch/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`FinchClientImpl`](finch-java-core/src/main/kotlin/com/tryfinch/api/client/FinchClientImpl.kt) or [`FinchClientAsyncImpl`](finch-java-core/src/main/kotlin/com/tryfinch/api/client/FinchClientAsyncImpl.kt), similarly to        [`FinchOkHttpClient`](finch-java-client-okhttp/src/main/kotlin/com/tryfinch/api/client/okhttp/FinchOkHttpClient.kt) or [`FinchOkHttpClientAsync`](finch-java-client-okhttp/src/main/kotlin/com/tryfinch/api/client/okhttp/FinchOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`finch-java` dependency](#installation) with `finch-java-core`\n2. Write a class that implements the [`HttpClient`](finch-java-core/src/main/kotlin/com/tryfinch/api/core/http/HttpClient.kt) interface\n3. Construct [`FinchClientImpl`](finch-java-core/src/main/kotlin/com/tryfinch/api/client/FinchClientImpl.kt) or [`FinchClientAsyncImpl`](finch-java-core/src/main/kotlin/com/tryfinch/api/client/FinchClientAsyncImpl.kt), similarly to        [`FinchOkHttpClient`](finch-java-client-okhttp/src/main/kotlin/com/tryfinch/api/client/okhttp/FinchOkHttpClient.kt) or [`FinchOkHttpClientAsync`](finch-java-client-okhttp/src/main/kotlin/com/tryfinch/api/client/okhttp/FinchOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```java\nimport com.tryfinch.api.core.JsonValue;\nimport com.tryfinch.api.models.HrisDirectoryListParams;\n\nHrisDirectoryListParams params = HrisDirectoryListParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build();\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](finch-java-core/src/main/kotlin/com/tryfinch/api/core/Values.kt) object to its setter:\n\n```java\nimport com.tryfinch.api.models.HrisDirectoryListParams;\n\nHrisDirectoryListParams params = HrisDirectoryListParams.builder().build();\n```\n\nThe most straightforward way to create a [`JsonValue`](finch-java-core/src/main/kotlin/com/tryfinch/api/core/Values.kt) is using its       `from(...)` method:\n\n```java\nimport com.tryfinch.api.core.JsonValue;\nimport java.util.List;\nimport java.util.Map;\n\n// Create primitive JSON values\nJsonValue nullValue = JsonValue.from(null);\nJsonValue booleanValue = JsonValue.from(true);\nJsonValue numberValue = JsonValue.from(42);\nJsonValue stringValue = JsonValue.from("Hello World!");\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nJsonValue arrayValue = JsonValue.from(List.of(\n  "Hello", "World"\n));\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nJsonValue objectValue = JsonValue.from(Map.of(\n  "a", 1,\n  "b", 2\n));\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nJsonValue complexValue = JsonValue.from(Map.of(\n  "a", List.of(\n    1, 2\n  ),\n  "b", List.of(\n    3, 4\n  )\n));\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](finch-java-core/src/main/kotlin/com/tryfinch/api/core/Values.kt):\n\n```java\nimport com.tryfinch.api.core.JsonMissing;\nimport com.tryfinch.api.models.AccessTokenCreateParams;\nimport com.tryfinch.api.models.HrisDirectoryListParams;\n\nHrisDirectoryListParams params = AccessTokenCreateParams.builder()\n    .code(JsonMissing.of())\n    .build();\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```java\nimport com.tryfinch.api.core.JsonValue;\nimport java.util.Map;\n\nMap<String, JsonValue> additionalProperties = client.accessTokens().create(params)._additionalProperties();\nJsonValue secretPropertyValue = additionalProperties.get("secretProperty");\n\nString result = secretPropertyValue.accept(new JsonValue.Visitor<>() {\n    @Override\n    public String visitNull() {\n        return "It\'s null!";\n    }\n\n    @Override\n    public String visitBoolean(boolean value) {\n        return "It\'s a boolean!";\n    }\n\n    @Override\n    public String visitNumber(Number value) {\n        return "It\'s a number!";\n    }\n\n    // Other methods include `visitMissing`, `visitString`, `visitArray`, and `visitObject`\n    // The default implementation of each unimplemented method delegates to `visitDefault`, which throws by default, but can also be overridden\n});\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```java\nimport com.tryfinch.api.core.JsonField;\nimport java.util.Optional;\n\nJsonField<String> code = client.accessTokens().create(params)._code();\n\nif (code.isMissing()) {\n  // The property is absent from the JSON response\n} else if (code.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  Optional<String> jsonString = code.asString();\n\n  // Try to deserialize into a custom type\n  MyClass myObject = code.asUnknown().orElseThrow().convert(MyClass.class);\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`FinchInvalidDataException`](finch-java-core/src/main/kotlin/com/tryfinch/api/errors/FinchInvalidDataException.kt) only if you directly access the property.\n\nIf you would prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```java\nimport com.tryfinch.api.models.CreateAccessTokenResponse;\n\nCreateAccessTokenResponse createAccessTokenResponse = client.accessTokens().create(params).validate();\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```java\nimport com.tryfinch.api.models.HrisDirectoryListPage;\n\nHrisDirectoryListPage page = client.hris().directory().list(RequestOptions.builder().responseValidation(true).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.tryfinch.api.client.FinchClient;\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient;\n\nFinchClient client = FinchOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .accessToken("My Access Token")\n    .build();\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nJava `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/Finch-API/finch-api-java/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'kotlin',
    content:
      '# Finch Kotlin API Library\n\n<!-- x-release-please-start-version -->\n[![Maven Central](https://img.shields.io/maven-central/v/com.tryfinch.api/finch-kotlin)](https://central.sonatype.com/artifact/com.tryfinch.api/finch-kotlin/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.tryfinch.api/finch-kotlin/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.tryfinch.api/finch-kotlin/0.0.1)\n<!-- x-release-please-end -->\n\nThe Finch Kotlin SDK provides convenient access to the [Finch REST API](https://developer.tryfinch.com/)   from applications written in Kotlin.\n\nThe Finch Kotlin SDK is similar to the Finch Java SDK but with minor differences that       make it more ergonomic for use in Kotlin, such as nullable values instead of `Optional`,       `Sequence` instead of `Stream`, and suspend functions instead of `CompletableFuture`.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Finch MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40tryfinch%2Ffinch-api-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkB0cnlmaW5jaC9maW5jaC1hcGktbWNwIl0sImVudiI6eyJGSU5DSF9BQ0NFU1NfVE9LRU4iOiJNeSBBY2Nlc3MgVG9rZW4iLCJGSU5DSF9DTElFTlRfSUQiOiI0YWIxNWU1MS0xMWFkLTQ5ZjQtYWNhZS1mMzQzYjc3OTQzNzUiLCJGSU5DSF9DTElFTlRfU0VDUkVUIjoiTXkgQ2xpZW50IFNlY3JldCIsIkZJTkNIX1dFQkhPT0tfU0VDUkVUIjoiTXkgV2ViaG9vayBTZWNyZXQifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40tryfinch%2Ffinch-api-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40tryfinch%2Ffinch-api-mcp%22%5D%2C%22env%22%3A%7B%22FINCH_ACCESS_TOKEN%22%3A%22My%20Access%20Token%22%2C%22FINCH_CLIENT_ID%22%3A%224ab15e51-11ad-49f4-acae-f343b7794375%22%2C%22FINCH_CLIENT_SECRET%22%3A%22My%20Client%20Secret%22%2C%22FINCH_WEBHOOK_SECRET%22%3A%22My%20Webhook%20Secret%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n<!-- x-release-please-start-version -->\n\nThe REST API documentation can be found on [developer.tryfinch.com](https://developer.tryfinch.com/). KDocs are available on [javadoc.io](https://javadoc.io/doc/com.tryfinch.api/finch-kotlin/0.0.1).\n\n<!-- x-release-please-end -->\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n### Gradle\n\n~~~kotlin\nimplementation("com.tryfinch.api:finch-kotlin:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.tryfinch.api</groupId>\n  <artifactId>finch-kotlin</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```kotlin\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.HrisDirectoryListPage\nimport com.tryfinch.api.models.HrisDirectoryListParams\n\nval client: FinchClient = FinchOkHttpClient.builder()\n    // Configures using the `finch.clientId`, `finch.clientSecret`, `finch.webhookSecret` and `finch.baseUrl` system properties\n    // Or configures using the `FINCH_CLIENT_ID`, `FINCH_CLIENT_SECRET`, `FINCH_WEBHOOK_SECRET` and `FINCH_BASE_URL` environment variables\n    .fromEnv()\n    .accessToken("My Access Token")\n    .build()\n\nval page: HrisDirectoryListPage = client.hris().directory().list()\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```kotlin\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\n\nval client: FinchClient = FinchOkHttpClient.builder()\n    // Configures using the `finch.clientId`, `finch.clientSecret`, `finch.webhookSecret` and `finch.baseUrl` system properties\n    // Or configures using the `FINCH_CLIENT_ID`, `FINCH_CLIENT_SECRET`, `FINCH_WEBHOOK_SECRET` and `FINCH_BASE_URL` environment variables\n    .fromEnv()\n    .accessToken("My Access Token")\n    .build()\n```\n\nOr manually:\n\n```kotlin\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\n\nval client: FinchClient = FinchOkHttpClient.builder()\n    .accessToken("My Access Token")\n    .build()\n```\n\nOr using a combination of the two approaches:\n\n```kotlin\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\n\nval client: FinchClient = FinchOkHttpClient.builder()\n    // Configures using the `finch.clientId`, `finch.clientSecret`, `finch.webhookSecret` and `finch.baseUrl` system properties\n    // Or configures using the `FINCH_CLIENT_ID`, `FINCH_CLIENT_SECRET`, `FINCH_WEBHOOK_SECRET` and `FINCH_BASE_URL` environment variables\n    .fromEnv()\n    .accessToken("My Access Token")\n    .build()\n```\n\nSee this table for the available options:\n\n| Setter          | System property       | Environment variable   | Required | Default value                |\n| --------------- | --------------------- | ---------------------- | -------- | ---------------------------- |\n| `clientId`      | `finch.clientId`      | `FINCH_CLIENT_ID`      | false    | -                            |\n| `clientSecret`  | `finch.clientSecret`  | `FINCH_CLIENT_SECRET`  | false    | -                            |\n| `webhookSecret` | `finch.webhookSecret` | `FINCH_WEBHOOK_SECRET` | false    | -                            |\n| `baseUrl`       | `finch.baseUrl`       | `FINCH_BASE_URL`       | true     | `"https://api.tryfinch.com"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```kotlin\nimport com.tryfinch.api.client.FinchClient\n\nval clientWithOptions: FinchClient = client.withOptions {\n    it.baseUrl("https://example.com")\n    it.maxRetries(42)\n}\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Finch API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Kotlin class.\n\nFor example, `client.hris().directory().list(...)` should be called with an instance of `HrisDirectoryListParams`, and it     will return an instance of `HrisDirectoryListPage`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```kotlin\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport com.tryfinch.api.models.HrisDirectoryListPageAsync\nimport com.tryfinch.api.models.HrisDirectoryListParams\n\nval client: FinchClient = FinchOkHttpClient.builder()\n    // Configures using the `finch.clientId`, `finch.clientSecret`, `finch.webhookSecret` and `finch.baseUrl` system properties\n    // Or configures using the `FINCH_CLIENT_ID`, `FINCH_CLIENT_SECRET`, `FINCH_WEBHOOK_SECRET` and `FINCH_BASE_URL` environment variables\n    .fromEnv()\n    .accessToken("My Access Token")\n    .build()\n\nval page: HrisDirectoryListPageAsync = client.async().hris().directory().list()\n```\n\nOr create an asynchronous client from the beginning:\n\n```kotlin\nimport com.tryfinch.api.client.FinchClientAsync\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClientAsync\nimport com.tryfinch.api.models.HrisDirectoryListPageAsync\nimport com.tryfinch.api.models.HrisDirectoryListParams\n\nval client: FinchClientAsync = FinchOkHttpClientAsync.builder()\n    // Configures using the `finch.clientId`, `finch.clientSecret`, `finch.webhookSecret` and `finch.baseUrl` system properties\n    // Or configures using the `FINCH_CLIENT_ID`, `FINCH_CLIENT_SECRET`, `FINCH_WEBHOOK_SECRET` and `FINCH_BASE_URL` environment variables\n    .fromEnv()\n    .accessToken("My Access Token")\n    .build()\n\nval page: HrisDirectoryListPageAsync = client.hris().directory().list()\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods are [suspending](https://kotlinlang.org/docs/coroutines-guide.html).\n\n\n\n\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Kotlin classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```kotlin\nimport com.tryfinch.api.core.http.Headers\nimport com.tryfinch.api.core.http.HttpResponseFor\nimport com.tryfinch.api.models.HrisDirectoryListPage\nimport com.tryfinch.api.models.HrisDirectoryListParams\n\nval page: HttpResponseFor<HrisDirectoryListPage> = client.hris().directory().withRawResponse().list()\n\nval statusCode: Int = page.statusCode()\nval headers: Headers = page.headers()\n```\n\nYou can still deserialize the response into an instance of a Kotlin class if needed:\n\n```kotlin\nimport com.tryfinch.api.models.HrisDirectoryListPage\n\nval parsedPage: HrisDirectoryListPage = page.parse()\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`FinchServiceException`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/errors/FinchServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/errors/UnexpectedStatusCodeException.kt) |\n\n- [`FinchIoException`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/errors/FinchIoException.kt): I/O networking errors.\n\n- [`FinchRetryableException`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/errors/FinchRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`FinchInvalidDataException`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/errors/FinchInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`FinchException`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/errors/FinchException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n## Pagination\n\nThe SDK defines methods that return a paginated lists of results. It provides convenient ways to access     the results either one page at a time or item-by-item across all pages.\n\n### Auto-pagination\n\nTo iterate through all results across all pages, use the `autoPager()` method, which automatically     fetches more pages as needed.\n\nWhen using the synchronous client, the method returns a [`Sequence`](https://kotlinlang.org/docs/sequences.html)\n\n```kotlin\nimport com.tryfinch.api.models.HrisDirectoryListPage\n\nval page: HrisDirectoryListPage = client.hris().directory().list()\npage.autoPager()\n    .take(50)\n    .forEach { directory -> println(directory) }\n```\n\nWhen using the asynchronous client, the method returns a [`Flow`](https://kotlinlang.org/docs/flow.html):\n\n```kotlin\nimport com.tryfinch.api.models.HrisDirectoryListPageAsync\n\nval page: HrisDirectoryListPageAsync = client.async().hris().directory().list()\npage.autoPager()\n    .take(50)\n    .forEach { directory -> println(directory) }\n```\n\n### Manual pagination\n\nTo access individual page items and manually request the next page, use the `items()`,\n`hasNextPage()`, and `nextPage()` methods:\n\n```kotlin\nimport com.tryfinch.api.models.HrisDirectoryListPage\nimport com.tryfinch.api.models.IndividualInDirectory\n\nval page: HrisDirectoryListPage = client.hris().directory().list()\nwhile (true) {\n    for (directory in page.items()) {\n        println(directory)\n    }\n\n    if (!page.hasNextPage()) {\n        break\n    }\n\n    page = page.nextPage()\n}\n```\n\n## Logging\n\nThe SDK uses the standard   [OkHttp logging interceptor](https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor).\n\nEnable logging by setting the `FINCH_LOG` environment variable to   `info`:\n\n```sh\nexport FINCH_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport FINCH_LOG=debug\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `finch-kotlin-core` is published with a     [configuration file](finch-kotlin-core/src/main/resources/META-INF/proguard/finch-kotlin-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`FinchOkHttpClient`](finch-kotlin-client-okhttp/src/main/kotlin/com/tryfinch/api/client/okhttp/FinchOkHttpClient.kt) or     [`FinchOkHttpClientAsync`](finch-kotlin-client-okhttp/src/main/kotlin/com/tryfinch/api/client/okhttp/FinchOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```kotlin\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\n\nval client: FinchClient = FinchOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .accessToken("My Access Token")\n    .build()\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```kotlin\nimport com.tryfinch.api.models.HrisDirectoryListPage\n\nval page: HrisDirectoryListPage = client.hris().directory().list(RequestOptions.builder().timeout(Duration.ofSeconds(30)).build())\n```\n\nOr configure the default for all method calls at the client level:\n\n```kotlin\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport java.time.Duration\n\nval client: FinchClient = FinchOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .accessToken("My Access Token")\n    .build()\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```kotlin\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport java.net.InetSocketAddress\nimport java.net.Proxy\n\nval client: FinchClient = FinchOkHttpClient.builder()\n    .fromEnv()\n    .proxy(Proxy(\n      Proxy.Type.HTTP, InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .accessToken("My Access Token")\n    .build()\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```kotlin\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\nimport java.time.Duration\n\nval client: FinchClient = FinchOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .accessToken("My Access Token")\n    .build()\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```kotlin\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\n\nval client: FinchClient = FinchOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .accessToken("My Access Token")\n    .build()\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `finch-kotlin-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`FinchClient`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/client/FinchClient.kt), [`FinchClientAsync`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/client/FinchClientAsync.kt),             [`FinchClientImpl`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/client/FinchClientImpl.kt), and [`FinchClientAsyncImpl`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/client/FinchClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `finch-kotlin-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`FinchOkHttpClient`](finch-kotlin-client-okhttp/src/main/kotlin/com/tryfinch/api/client/okhttp/FinchOkHttpClient.kt) and [`FinchOkHttpClientAsync`](finch-kotlin-client-okhttp/src/main/kotlin/com/tryfinch/api/client/okhttp/FinchOkHttpClientAsync.kt), which             provide a way to construct [`FinchClientImpl`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/client/FinchClientImpl.kt) and             [`FinchClientAsyncImpl`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/client/FinchClientAsyncImpl.kt), respectively, using OkHttp\n- `finch-kotlin`\n  - Depends on and exposes the APIs of both `finch-kotlin-core` and `finch-kotlin-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`finch-kotlin` dependency](#installation) with `finch-kotlin-core`\n2. Copy `finch-kotlin-client-okhttp`\'s [`OkHttpClient`](finch-kotlin-client-okhttp/src/main/kotlin/com/tryfinch/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`FinchClientImpl`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/client/FinchClientImpl.kt) or [`FinchClientAsyncImpl`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/client/FinchClientAsyncImpl.kt), similarly to        [`FinchOkHttpClient`](finch-kotlin-client-okhttp/src/main/kotlin/com/tryfinch/api/client/okhttp/FinchOkHttpClient.kt) or [`FinchOkHttpClientAsync`](finch-kotlin-client-okhttp/src/main/kotlin/com/tryfinch/api/client/okhttp/FinchOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`finch-kotlin` dependency](#installation) with `finch-kotlin-core`\n2. Write a class that implements the [`HttpClient`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/core/http/HttpClient.kt) interface\n3. Construct [`FinchClientImpl`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/client/FinchClientImpl.kt) or [`FinchClientAsyncImpl`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/client/FinchClientAsyncImpl.kt), similarly to        [`FinchOkHttpClient`](finch-kotlin-client-okhttp/src/main/kotlin/com/tryfinch/api/client/okhttp/FinchOkHttpClient.kt) or [`FinchOkHttpClientAsync`](finch-kotlin-client-okhttp/src/main/kotlin/com/tryfinch/api/client/okhttp/FinchOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```kotlin\nimport com.tryfinch.api.core.JsonValue\nimport com.tryfinch.api.models.HrisDirectoryListParams\n\nval params: HrisDirectoryListParams = HrisDirectoryListParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build()\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/core/Values.kt) object to its setter:\n\n```kotlin\nimport com.tryfinch.api.models.HrisDirectoryListParams\n\nval params: HrisDirectoryListParams = HrisDirectoryListParams.builder().build()\n```\n\nThe most straightforward way to create a [`JsonValue`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/core/Values.kt) is using its       `from(...)` method:\n\n```kotlin\nimport com.tryfinch.api.core.JsonValue\n\n// Create primitive JSON values\nval nullValue: JsonValue = JsonValue.from(null)\nval booleanValue: JsonValue = JsonValue.from(true)\nval numberValue: JsonValue = JsonValue.from(42)\nval stringValue: JsonValue = JsonValue.from("Hello World!")\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nval arrayValue: JsonValue = JsonValue.from(listOf(\n  "Hello", "World"\n))\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nval objectValue: JsonValue = JsonValue.from(mapOf(\n  "a" to 1, "b" to 2\n))\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nval complexValue: JsonValue = JsonValue.from(mapOf(\n  "a" to listOf(\n    1, 2\n  ), "b" to listOf(\n    3, 4\n  )\n))\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/core/Values.kt):\n\n```kotlin\nimport com.tryfinch.api.core.JsonMissing\nimport com.tryfinch.api.models.AccessTokenCreateParams\nimport com.tryfinch.api.models.HrisDirectoryListParams\n\nval params: HrisDirectoryListParams = AccessTokenCreateParams.builder()\n    .code(JsonMissing.of())\n    .build()\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```kotlin\nimport com.tryfinch.api.core.JsonBoolean\nimport com.tryfinch.api.core.JsonNull\nimport com.tryfinch.api.core.JsonNumber\nimport com.tryfinch.api.core.JsonValue\n\nval additionalProperties: Map<String, JsonValue> = client.accessTokens().create(params)._additionalProperties()\nval secretPropertyValue: JsonValue = additionalProperties.get("secretProperty")\n\nval result = when (secretPropertyValue) {\n    is JsonNull -> "It\'s null!"\n    is JsonBoolean -> "It\'s a boolean!"\n    is JsonNumber -> "It\'s a number!"\n    // Other types include `JsonMissing`, `JsonString`, `JsonArray`, and `JsonObject`\n    else -> "It\'s something else!"\n}\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```kotlin\nimport com.tryfinch.api.core.JsonField\n\nval code: JsonField<String> = client.accessTokens().create(params)._code()\n\nif (code.isMissing()) {\n  // The property is absent from the JSON response\n} else if (code.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  val jsonString: String? = code.asString();\n\n  // Try to deserialize into a custom type\n  val myObject: MyClass = code.asUnknown()!!.convert(MyClass::class.java)\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`FinchInvalidDataException`](finch-kotlin-core/src/main/kotlin/com/tryfinch/api/errors/FinchInvalidDataException.kt) only if you directly access the property.\n\nIf you would prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```kotlin\nimport com.tryfinch.api.models.CreateAccessTokenResponse\n\nval createAccessTokenResponse: CreateAccessTokenResponse = client.accessTokens().create(params).validate()\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```kotlin\nimport com.tryfinch.api.models.HrisDirectoryListPage\n\nval page: HrisDirectoryListPage = client.hris().directory().list(RequestOptions.builder().responseValidation(true).build())\n```\n\nOr configure the default for all method calls at the client level:\n\n```kotlin\nimport com.tryfinch.api.client.FinchClient\nimport com.tryfinch.api.client.okhttp.FinchOkHttpClient\n\nval client: FinchClient = FinchOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .accessToken("My Access Token")\n    .build()\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nKotlin `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/Finch-API/finch-api-kotlin/issues) with questions, bugs, or suggestions.\n',
  },
];

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
