import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.accessTokens.create',
    fullyQualifiedName: 'accessTokens.create',
    httpMethod: 'post',
    httpPath: '/auth/token',
  },
  {
    clientCallName: 'client.hris.company.retrieve',
    fullyQualifiedName: 'hris.company.retrieve',
    httpMethod: 'get',
    httpPath: '/employer/company',
  },
  {
    clientCallName: 'client.hris.company.payStatementItem.list',
    fullyQualifiedName: 'hris.company.payStatementItem.list',
    httpMethod: 'get',
    httpPath: '/employer/pay-statement-item',
  },
  {
    clientCallName: 'client.hris.company.payStatementItem.rules.create',
    fullyQualifiedName: 'hris.company.payStatementItem.rules.create',
    httpMethod: 'post',
    httpPath: '/employer/pay-statement-item/rule',
  },
  {
    clientCallName: 'client.hris.company.payStatementItem.rules.update',
    fullyQualifiedName: 'hris.company.payStatementItem.rules.update',
    httpMethod: 'put',
    httpPath: '/employer/pay-statement-item/rule/{rule_id}',
  },
  {
    clientCallName: 'client.hris.company.payStatementItem.rules.list',
    fullyQualifiedName: 'hris.company.payStatementItem.rules.list',
    httpMethod: 'get',
    httpPath: '/employer/pay-statement-item/rule',
  },
  {
    clientCallName: 'client.hris.company.payStatementItem.rules.delete',
    fullyQualifiedName: 'hris.company.payStatementItem.rules.delete',
    httpMethod: 'delete',
    httpPath: '/employer/pay-statement-item/rule/{rule_id}',
  },
  {
    clientCallName: 'client.hris.directory.list',
    fullyQualifiedName: 'hris.directory.list',
    httpMethod: 'get',
    httpPath: '/employer/directory',
  },
  {
    clientCallName: 'client.hris.directory.listIndividuals',
    fullyQualifiedName: 'hris.directory.listIndividuals',
  },
  {
    clientCallName: 'client.hris.individuals.retrieveMany',
    fullyQualifiedName: 'hris.individuals.retrieveMany',
    httpMethod: 'post',
    httpPath: '/employer/individual',
  },
  {
    clientCallName: 'client.hris.employments.retrieveMany',
    fullyQualifiedName: 'hris.employments.retrieveMany',
    httpMethod: 'post',
    httpPath: '/employer/employment',
  },
  {
    clientCallName: 'client.hris.payments.list',
    fullyQualifiedName: 'hris.payments.list',
    httpMethod: 'get',
    httpPath: '/employer/payment',
  },
  {
    clientCallName: 'client.hris.payStatements.retrieveMany',
    fullyQualifiedName: 'hris.payStatements.retrieveMany',
    httpMethod: 'post',
    httpPath: '/employer/pay-statement',
  },
  {
    clientCallName: 'client.hris.documents.list',
    fullyQualifiedName: 'hris.documents.list',
    httpMethod: 'get',
    httpPath: '/employer/documents',
  },
  {
    clientCallName: 'client.hris.documents.retreive',
    fullyQualifiedName: 'hris.documents.retreive',
    httpMethod: 'get',
    httpPath: '/employer/documents/{document_id}',
  },
  {
    clientCallName: 'client.hris.benefits.create',
    fullyQualifiedName: 'hris.benefits.create',
    httpMethod: 'post',
    httpPath: '/employer/benefits',
  },
  {
    clientCallName: 'client.hris.benefits.retrieve',
    fullyQualifiedName: 'hris.benefits.retrieve',
    httpMethod: 'get',
    httpPath: '/employer/benefits/{benefit_id}',
  },
  {
    clientCallName: 'client.hris.benefits.update',
    fullyQualifiedName: 'hris.benefits.update',
    httpMethod: 'post',
    httpPath: '/employer/benefits/{benefit_id}',
  },
  {
    clientCallName: 'client.hris.benefits.list',
    fullyQualifiedName: 'hris.benefits.list',
    httpMethod: 'get',
    httpPath: '/employer/benefits',
  },
  {
    clientCallName: 'client.hris.benefits.listSupportedBenefits',
    fullyQualifiedName: 'hris.benefits.listSupportedBenefits',
    httpMethod: 'get',
    httpPath: '/employer/benefits/meta',
  },
  {
    clientCallName: 'client.hris.benefits.individuals.enrollMany',
    fullyQualifiedName: 'hris.benefits.individuals.enrollMany',
    httpMethod: 'post',
    httpPath: '/employer/benefits/{benefit_id}/individuals',
  },
  {
    clientCallName: 'client.hris.benefits.individuals.enrolledIDs',
    fullyQualifiedName: 'hris.benefits.individuals.enrolledIDs',
    httpMethod: 'get',
    httpPath: '/employer/benefits/{benefit_id}/enrolled',
  },
  {
    clientCallName: 'client.hris.benefits.individuals.retrieveManyBenefits',
    fullyQualifiedName: 'hris.benefits.individuals.retrieveManyBenefits',
    httpMethod: 'get',
    httpPath: '/employer/benefits/{benefit_id}/individuals',
  },
  {
    clientCallName: 'client.hris.benefits.individuals.unenrollMany',
    fullyQualifiedName: 'hris.benefits.individuals.unenrollMany',
    httpMethod: 'delete',
    httpPath: '/employer/benefits/{benefit_id}/individuals',
  },
  {
    clientCallName: 'client.providers.list',
    fullyQualifiedName: 'providers.list',
    httpMethod: 'get',
    httpPath: '/providers',
  },
  {
    clientCallName: 'client.account.disconnect',
    fullyQualifiedName: 'account.disconnect',
    httpMethod: 'post',
    httpPath: '/disconnect',
  },
  {
    clientCallName: 'client.account.introspect',
    fullyQualifiedName: 'account.introspect',
    httpMethod: 'get',
    httpPath: '/introspect',
  },
  {
    clientCallName: 'client.requestForwarding.forward',
    fullyQualifiedName: 'requestForwarding.forward',
    httpMethod: 'post',
    httpPath: '/forward',
  },
  {
    clientCallName: 'client.jobs.automated.create',
    fullyQualifiedName: 'jobs.automated.create',
    httpMethod: 'post',
    httpPath: '/jobs/automated',
  },
  {
    clientCallName: 'client.jobs.automated.retrieve',
    fullyQualifiedName: 'jobs.automated.retrieve',
    httpMethod: 'get',
    httpPath: '/jobs/automated/{job_id}',
  },
  {
    clientCallName: 'client.jobs.automated.list',
    fullyQualifiedName: 'jobs.automated.list',
    httpMethod: 'get',
    httpPath: '/jobs/automated',
  },
  {
    clientCallName: 'client.jobs.manual.retrieve',
    fullyQualifiedName: 'jobs.manual.retrieve',
    httpMethod: 'get',
    httpPath: '/jobs/manual/{job_id}',
  },
  {
    clientCallName: 'client.sandbox.connections.create',
    fullyQualifiedName: 'sandbox.connections.create',
    httpMethod: 'post',
    httpPath: '/sandbox/connections',
  },
  {
    clientCallName: 'client.sandbox.connections.accounts.create',
    fullyQualifiedName: 'sandbox.connections.accounts.create',
    httpMethod: 'post',
    httpPath: '/sandbox/connections/accounts',
  },
  {
    clientCallName: 'client.sandbox.connections.accounts.update',
    fullyQualifiedName: 'sandbox.connections.accounts.update',
    httpMethod: 'put',
    httpPath: '/sandbox/connections/accounts',
  },
  {
    clientCallName: 'client.sandbox.company.update',
    fullyQualifiedName: 'sandbox.company.update',
    httpMethod: 'put',
    httpPath: '/sandbox/company',
  },
  {
    clientCallName: 'client.sandbox.directory.create',
    fullyQualifiedName: 'sandbox.directory.create',
    httpMethod: 'post',
    httpPath: '/sandbox/directory',
  },
  {
    clientCallName: 'client.sandbox.individual.update',
    fullyQualifiedName: 'sandbox.individual.update',
    httpMethod: 'put',
    httpPath: '/sandbox/individual/{individual_id}',
  },
  {
    clientCallName: 'client.sandbox.employment.update',
    fullyQualifiedName: 'sandbox.employment.update',
    httpMethod: 'put',
    httpPath: '/sandbox/employment/{individual_id}',
  },
  {
    clientCallName: 'client.sandbox.payment.create',
    fullyQualifiedName: 'sandbox.payment.create',
    httpMethod: 'post',
    httpPath: '/sandbox/payment',
  },
  {
    clientCallName: 'client.sandbox.jobs.create',
    fullyQualifiedName: 'sandbox.jobs.create',
    httpMethod: 'post',
    httpPath: '/sandbox/jobs',
  },
  {
    clientCallName: 'client.sandbox.jobs.configuration.retrieve',
    fullyQualifiedName: 'sandbox.jobs.configuration.retrieve',
    httpMethod: 'get',
    httpPath: '/sandbox/jobs/configuration',
  },
  {
    clientCallName: 'client.sandbox.jobs.configuration.update',
    fullyQualifiedName: 'sandbox.jobs.configuration.update',
    httpMethod: 'put',
    httpPath: '/sandbox/jobs/configuration',
  },
  {
    clientCallName: 'client.payroll.payGroups.retrieve',
    fullyQualifiedName: 'payroll.payGroups.retrieve',
    httpMethod: 'get',
    httpPath: '/employer/pay-groups/{pay_group_id}',
  },
  {
    clientCallName: 'client.payroll.payGroups.list',
    fullyQualifiedName: 'payroll.payGroups.list',
    httpMethod: 'get',
    httpPath: '/employer/pay-groups',
  },
  {
    clientCallName: 'client.connect.sessions.new',
    fullyQualifiedName: 'connect.sessions.new',
    httpMethod: 'post',
    httpPath: '/connect/sessions',
  },
  {
    clientCallName: 'client.connect.sessions.reauthenticate',
    fullyQualifiedName: 'connect.sessions.reauthenticate',
    httpMethod: 'post',
    httpPath: '/connect/sessions/reauthenticate',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
