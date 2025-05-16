// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import create_access_tokens from './access-tokens/create-access-tokens';
import retrieve_hris_company from './hris/company/retrieve-hris-company';
import list_company_hris_pay_statement_item from './hris/company/pay-statement-item/list-company-hris-pay-statement-item';
import create_pay_statement_item_company_hris_rules from './hris/company/pay-statement-item/rules/create-pay-statement-item-company-hris-rules';
import update_pay_statement_item_company_hris_rules from './hris/company/pay-statement-item/rules/update-pay-statement-item-company-hris-rules';
import list_pay_statement_item_company_hris_rules from './hris/company/pay-statement-item/rules/list-pay-statement-item-company-hris-rules';
import delete_pay_statement_item_company_hris_rules from './hris/company/pay-statement-item/rules/delete-pay-statement-item-company-hris-rules';
import list_hris_directory from './hris/directory/list-hris-directory';
import list_individuals_hris_directory from './hris/directory/list-individuals-hris-directory';
import retrieve_many_hris_individuals from './hris/individuals/retrieve-many-hris-individuals';
import retrieve_many_hris_employments from './hris/employments/retrieve-many-hris-employments';
import list_hris_payments from './hris/payments/list-hris-payments';
import retrieve_many_hris_pay_statements from './hris/pay-statements/retrieve-many-hris-pay-statements';
import list_hris_documents from './hris/documents/list-hris-documents';
import retreive_hris_documents from './hris/documents/retreive-hris-documents';
import create_hris_benefits from './hris/benefits/create-hris-benefits';
import retrieve_hris_benefits from './hris/benefits/retrieve-hris-benefits';
import update_hris_benefits from './hris/benefits/update-hris-benefits';
import list_hris_benefits from './hris/benefits/list-hris-benefits';
import list_supported_benefits_hris_benefits from './hris/benefits/list-supported-benefits-hris-benefits';
import enroll_many_benefits_hris_individuals from './hris/benefits/individuals/enroll-many-benefits-hris-individuals';
import enrolled_ids_benefits_hris_individuals from './hris/benefits/individuals/enrolled-ids-benefits-hris-individuals';
import retrieve_many_benefits_benefits_hris_individuals from './hris/benefits/individuals/retrieve-many-benefits-benefits-hris-individuals';
import unenroll_many_benefits_hris_individuals from './hris/benefits/individuals/unenroll-many-benefits-hris-individuals';
import list_providers from './providers/list-providers';
import disconnect_account from './account/disconnect-account';
import introspect_account from './account/introspect-account';
import forward_request_forwarding from './request-forwarding/forward-request-forwarding';
import create_jobs_automated from './jobs/automated/create-jobs-automated';
import retrieve_jobs_automated from './jobs/automated/retrieve-jobs-automated';
import list_jobs_automated from './jobs/automated/list-jobs-automated';
import retrieve_jobs_manual from './jobs/manual/retrieve-jobs-manual';
import create_sandbox_connections from './sandbox/connections/create-sandbox-connections';
import create_connections_sandbox_accounts from './sandbox/connections/accounts/create-connections-sandbox-accounts';
import update_connections_sandbox_accounts from './sandbox/connections/accounts/update-connections-sandbox-accounts';
import update_sandbox_company from './sandbox/company/update-sandbox-company';
import create_sandbox_directory from './sandbox/directory/create-sandbox-directory';
import update_sandbox_individual from './sandbox/individual/update-sandbox-individual';
import update_sandbox_employment from './sandbox/employment/update-sandbox-employment';
import create_sandbox_payment from './sandbox/payment/create-sandbox-payment';
import create_sandbox_jobs from './sandbox/jobs/create-sandbox-jobs';
import retrieve_jobs_sandbox_configuration from './sandbox/jobs/configuration/retrieve-jobs-sandbox-configuration';
import update_jobs_sandbox_configuration from './sandbox/jobs/configuration/update-jobs-sandbox-configuration';
import retrieve_payroll_pay_groups from './payroll/pay-groups/retrieve-payroll-pay-groups';
import list_payroll_pay_groups from './payroll/pay-groups/list-payroll-pay-groups';
import new_connect_sessions from './connect/sessions/new-connect-sessions';
import reauthenticate_connect_sessions from './connect/sessions/reauthenticate-connect-sessions';

export type HandlerFunction = (client: Finch, args: Record<string, unknown> | undefined) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_access_tokens);
addEndpoint(retrieve_hris_company);
addEndpoint(list_company_hris_pay_statement_item);
addEndpoint(create_pay_statement_item_company_hris_rules);
addEndpoint(update_pay_statement_item_company_hris_rules);
addEndpoint(list_pay_statement_item_company_hris_rules);
addEndpoint(delete_pay_statement_item_company_hris_rules);
addEndpoint(list_hris_directory);
addEndpoint(list_individuals_hris_directory);
addEndpoint(retrieve_many_hris_individuals);
addEndpoint(retrieve_many_hris_employments);
addEndpoint(list_hris_payments);
addEndpoint(retrieve_many_hris_pay_statements);
addEndpoint(list_hris_documents);
addEndpoint(retreive_hris_documents);
addEndpoint(create_hris_benefits);
addEndpoint(retrieve_hris_benefits);
addEndpoint(update_hris_benefits);
addEndpoint(list_hris_benefits);
addEndpoint(list_supported_benefits_hris_benefits);
addEndpoint(enroll_many_benefits_hris_individuals);
addEndpoint(enrolled_ids_benefits_hris_individuals);
addEndpoint(retrieve_many_benefits_benefits_hris_individuals);
addEndpoint(unenroll_many_benefits_hris_individuals);
addEndpoint(list_providers);
addEndpoint(disconnect_account);
addEndpoint(introspect_account);
addEndpoint(forward_request_forwarding);
addEndpoint(create_jobs_automated);
addEndpoint(retrieve_jobs_automated);
addEndpoint(list_jobs_automated);
addEndpoint(retrieve_jobs_manual);
addEndpoint(create_sandbox_connections);
addEndpoint(create_connections_sandbox_accounts);
addEndpoint(update_connections_sandbox_accounts);
addEndpoint(update_sandbox_company);
addEndpoint(create_sandbox_directory);
addEndpoint(update_sandbox_individual);
addEndpoint(update_sandbox_employment);
addEndpoint(create_sandbox_payment);
addEndpoint(create_sandbox_jobs);
addEndpoint(retrieve_jobs_sandbox_configuration);
addEndpoint(update_jobs_sandbox_configuration);
addEndpoint(retrieve_payroll_pay_groups);
addEndpoint(list_payroll_pay_groups);
addEndpoint(new_connect_sessions);
addEndpoint(reauthenticate_connect_sessions);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
