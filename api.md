# Finch

Methods:

- <code>client.<a href="./src/index.ts">getAccessToken</a>(code, { redirectUri }) -> Promise&lt;string&gt;</code>
- <code>client.<a href="./src/index.ts">getAuthURL</a>({ products, redirectUri, sandbox }) -> string</code>
- <code>client.<a href="./src/index.ts">withAccessToken</a>(accessToken) -> Finch</code>

# Shared

Types:

- <code><a href="./src/resources/shared.ts">ConnectionStatusType</a></code>
- <code><a href="./src/resources/shared.ts">OperationSupport</a></code>
- <code><a href="./src/resources/shared.ts">OperationSupportMatrix</a></code>
- <code><a href="./src/resources/shared.ts">Paging</a></code>

# AccessTokens

Types:

- <code><a href="./src/resources/access-tokens.ts">CreateAccessTokenResponse</a></code>

Methods:

- <code title="post /auth/token">client.accessTokens.<a href="./src/resources/access-tokens.ts">create</a>({ ...params }) -> CreateAccessTokenResponse</code>

# HRIS

Types:

- <code><a href="./src/resources/hris/hris.ts">Income</a></code>
- <code><a href="./src/resources/hris/hris.ts">Location</a></code>
- <code><a href="./src/resources/hris/hris.ts">Money</a></code>

## Company

Types:

- <code><a href="./src/resources/hris/company.ts">Company</a></code>

Methods:

- <code title="get /employer/company">client.hris.company.<a href="./src/resources/hris/company.ts">retrieve</a>() -> Company</code>

## Directory

Types:

- <code><a href="./src/resources/hris/directory.ts">IndividualInDirectory</a></code>

Methods:

- <code title="get /employer/directory">client.hris.directory.<a href="./src/resources/hris/directory.ts">list</a>({ ...params }) -> IndividualsPage</code>

## Individuals

Types:

- <code><a href="./src/resources/hris/individuals.ts">Individual</a></code>
- <code><a href="./src/resources/hris/individuals.ts">IndividualResponse</a></code>

Methods:

- <code title="post /employer/individual">client.hris.individuals.<a href="./src/resources/hris/individuals.ts">retrieveMany</a>({ ...params }) -> IndividualResponsesPage</code>

## Employments

Types:

- <code><a href="./src/resources/hris/employments.ts">EmploymentData</a></code>
- <code><a href="./src/resources/hris/employments.ts">EmploymentDataResponse</a></code>

Methods:

- <code title="post /employer/employment">client.hris.employments.<a href="./src/resources/hris/employments.ts">retrieveMany</a>({ ...params }) -> EmploymentDataResponsesPage</code>

## Payments

Types:

- <code><a href="./src/resources/hris/payments.ts">Payment</a></code>

Methods:

- <code title="get /employer/payment">client.hris.payments.<a href="./src/resources/hris/payments.ts">list</a>({ ...params }) -> PaymentsSinglePage</code>

## PayStatements

Types:

- <code><a href="./src/resources/hris/pay-statements.ts">PayStatement</a></code>
- <code><a href="./src/resources/hris/pay-statements.ts">PayStatementResponse</a></code>
- <code><a href="./src/resources/hris/pay-statements.ts">PayStatementResponseBody</a></code>

Methods:

- <code title="post /employer/pay-statement">client.hris.payStatements.<a href="./src/resources/hris/pay-statements.ts">retrieveMany</a>({ ...params }) -> PayStatementResponsesPage</code>

## Benefits

Types:

- <code><a href="./src/resources/hris/benefits/benefits.ts">BenefitContribution</a></code>
- <code><a href="./src/resources/hris/benefits/benefits.ts">BenefitFeaturesAndOperations</a></code>
- <code><a href="./src/resources/hris/benefits/benefits.ts">BenefitFrequency</a></code>
- <code><a href="./src/resources/hris/benefits/benefits.ts">BenefitType</a></code>
- <code><a href="./src/resources/hris/benefits/benefits.ts">BenefitsSupport</a></code>
- <code><a href="./src/resources/hris/benefits/benefits.ts">BenfitContribution</a></code>
- <code><a href="./src/resources/hris/benefits/benefits.ts">CompanyBenefit</a></code>
- <code><a href="./src/resources/hris/benefits/benefits.ts">CreateCompanyBenefitsResponse</a></code>
- <code><a href="./src/resources/hris/benefits/benefits.ts">SupportPerBenefitType</a></code>
- <code><a href="./src/resources/hris/benefits/benefits.ts">SupportedBenefit</a></code>
- <code><a href="./src/resources/hris/benefits/benefits.ts">UpdateCompanyBenefitResponse</a></code>

Methods:

- <code title="post /employer/benefits">client.hris.benefits.<a href="./src/resources/hris/benefits/benefits.ts">create</a>({ ...params }) -> CreateCompanyBenefitsResponse</code>
- <code title="get /employer/benefits/{benefit_id}">client.hris.benefits.<a href="./src/resources/hris/benefits/benefits.ts">retrieve</a>(benefitId) -> CompanyBenefit</code>
- <code title="post /employer/benefits/{benefit_id}">client.hris.benefits.<a href="./src/resources/hris/benefits/benefits.ts">update</a>(benefitId, { ...params }) -> UpdateCompanyBenefitResponse</code>
- <code title="get /employer/benefits">client.hris.benefits.<a href="./src/resources/hris/benefits/benefits.ts">list</a>() -> CompanyBenefitsSinglePage</code>
- <code title="get /employer/benefits/meta">client.hris.benefits.<a href="./src/resources/hris/benefits/benefits.ts">listSupportedBenefits</a>() -> SupportedBenefitsSinglePage</code>

### Individuals

Types:

- <code><a href="./src/resources/hris/benefits/individuals.ts">EnrolledIndividual</a></code>
- <code><a href="./src/resources/hris/benefits/individuals.ts">IndividualBenefit</a></code>
- <code><a href="./src/resources/hris/benefits/individuals.ts">UnenrolledIndividual</a></code>
- <code><a href="./src/resources/hris/benefits/individuals.ts">IndividualEnrolledIDsResponse</a></code>

Methods:

- <code title="post /employer/benefits/{benefit_id}/individuals">client.hris.benefits.individuals.<a href="./src/resources/hris/benefits/individuals.ts">enrollMany</a>(benefitId, [ ...individuals ]) -> EnrolledIndividualsSinglePage</code>
- <code title="get /employer/benefits/{benefit_id}/enrolled">client.hris.benefits.individuals.<a href="./src/resources/hris/benefits/individuals.ts">enrolledIds</a>(benefitId) -> IndividualEnrolledIDsResponse</code>
- <code title="get /employer/benefits/{benefit_id}/individuals">client.hris.benefits.individuals.<a href="./src/resources/hris/benefits/individuals.ts">retrieveManyBenefits</a>(benefitId, { ...params }) -> IndividualBenefitsSinglePage</code>
- <code title="delete /employer/benefits/{benefit_id}/individuals">client.hris.benefits.individuals.<a href="./src/resources/hris/benefits/individuals.ts">unenrollMany</a>(benefitId, { ...params }) -> UnenrolledIndividualsSinglePage</code>

# Providers

Types:

- <code><a href="./src/resources/providers.ts">Provider</a></code>

Methods:

- <code title="get /providers">client.providers.<a href="./src/resources/providers.ts">list</a>() -> ProvidersSinglePage</code>

# Account

Types:

- <code><a href="./src/resources/account.ts">DisconnectResponse</a></code>
- <code><a href="./src/resources/account.ts">Introspection</a></code>

Methods:

- <code title="post /disconnect">client.account.<a href="./src/resources/account.ts">disconnect</a>() -> DisconnectResponse</code>
- <code title="get /introspect">client.account.<a href="./src/resources/account.ts">introspect</a>() -> Introspection</code>

# Webhooks

Methods:

- <code>client.webhooks.<a href="./src/resources/webhooks.ts">unwrap</a>(payload, headers, secret) -> Object</code>
- <code>client.webhooks.<a href="./src/resources/webhooks.ts">verifySignature</a>(body, headers, secret) -> void</code>

# RequestForwarding

Types:

- <code><a href="./src/resources/request-forwarding.ts">RequestForwardingForwardResponse</a></code>

Methods:

- <code title="post /forward">client.requestForwarding.<a href="./src/resources/request-forwarding.ts">forward</a>({ ...params }) -> RequestForwardingForwardResponse</code>

# Jobs

## Automated

Types:

- <code><a href="./src/resources/jobs/automated.ts">AutomatedAsyncJob</a></code>
- <code><a href="./src/resources/jobs/automated.ts">AutomatedCreateResponse</a></code>

Methods:

- <code title="post /jobs/automated">client.jobs.automated.<a href="./src/resources/jobs/automated.ts">create</a>({ ...params }) -> AutomatedCreateResponse</code>
- <code title="get /jobs/automated/{job_id}">client.jobs.automated.<a href="./src/resources/jobs/automated.ts">retrieve</a>(jobId) -> AutomatedAsyncJob</code>
- <code title="get /jobs/automated">client.jobs.automated.<a href="./src/resources/jobs/automated.ts">list</a>({ ...params }) -> AutomatedAsyncJobsPage</code>

## Manual

Types:

- <code><a href="./src/resources/jobs/manual.ts">ManualAsyncJob</a></code>

Methods:

- <code title="get /jobs/manual/{job_id}">client.jobs.manual.<a href="./src/resources/jobs/manual.ts">retrieve</a>(jobId) -> ManualAsyncJob</code>

# Sandbox

## Connections

Types:

- <code><a href="./src/resources/sandbox/connections/connections.ts">ConnectionCreateResponse</a></code>

Methods:

- <code title="post /sandbox/connections">client.sandbox.connections.<a href="./src/resources/sandbox/connections/connections.ts">create</a>({ ...params }) -> ConnectionCreateResponse</code>

### Accounts

Types:

- <code><a href="./src/resources/sandbox/connections/accounts.ts">AccountCreateResponse</a></code>
- <code><a href="./src/resources/sandbox/connections/accounts.ts">AccountUpdateResponse</a></code>

Methods:

- <code title="post /sandbox/connections/accounts">client.sandbox.connections.accounts.<a href="./src/resources/sandbox/connections/accounts.ts">create</a>({ ...params }) -> AccountCreateResponse</code>
- <code title="put /sandbox/connections/accounts">client.sandbox.connections.accounts.<a href="./src/resources/sandbox/connections/accounts.ts">update</a>({ ...params }) -> AccountUpdateResponse</code>

## Company

Types:

- <code><a href="./src/resources/sandbox/company.ts">CompanyUpdateResponse</a></code>

Methods:

- <code title="put /sandbox/company">client.sandbox.company.<a href="./src/resources/sandbox/company.ts">update</a>({ ...params }) -> CompanyUpdateResponse</code>

## Directory

Types:

- <code><a href="./src/resources/sandbox/directory.ts">DirectoryCreateResponse</a></code>

Methods:

- <code title="post /sandbox/directory">client.sandbox.directory.<a href="./src/resources/sandbox/directory.ts">create</a>([ ...body ]) -> DirectoryCreateResponse</code>

## Individual

Types:

- <code><a href="./src/resources/sandbox/individual.ts">IndividualUpdateResponse</a></code>

Methods:

- <code title="put /sandbox/individual/{individual_id}">client.sandbox.individual.<a href="./src/resources/sandbox/individual.ts">update</a>(individualId, { ...params }) -> IndividualUpdateResponse</code>

## Employment

Types:

- <code><a href="./src/resources/sandbox/employment.ts">EmploymentUpdateResponse</a></code>

Methods:

- <code title="put /sandbox/employment/{individual_id}">client.sandbox.employment.<a href="./src/resources/sandbox/employment.ts">update</a>(individualId, { ...params }) -> EmploymentUpdateResponse</code>

## Payment

Types:

- <code><a href="./src/resources/sandbox/payment.ts">PaymentCreateResponse</a></code>

Methods:

- <code title="post /sandbox/payment">client.sandbox.payment.<a href="./src/resources/sandbox/payment.ts">create</a>({ ...params }) -> PaymentCreateResponse</code>

## Jobs

### Configuration

Types:

- <code><a href="./src/resources/sandbox/jobs/configuration.ts">SandboxJobConfiguration</a></code>
- <code><a href="./src/resources/sandbox/jobs/configuration.ts">ConfigurationRetrieveResponse</a></code>

Methods:

- <code title="get /sandbox/jobs/configuration">client.sandbox.jobs.configuration.<a href="./src/resources/sandbox/jobs/configuration.ts">retrieve</a>() -> ConfigurationRetrieveResponse</code>
- <code title="put /sandbox/jobs/configuration">client.sandbox.jobs.configuration.<a href="./src/resources/sandbox/jobs/configuration.ts">update</a>({ ...params }) -> SandboxJobConfiguration</code>
