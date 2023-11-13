# Finch

Methods:

- <code>client.<a href="./src/index.ts">getAccessToken</a>(code, { redirectUri }) -> Promise&lt;string&gt;</code>
- <code>client.<a href="./src/index.ts">getAuthURL</a>({ products, redirectUri, sandbox }) -> string</code>

# Shared

Types:

- <code><a href="./src/resources/shared.ts">OperationSupport</a></code>
- <code><a href="./src/resources/shared.ts">OperationSupportMatrix</a></code>

# HRIS

Types:

- <code><a href="./src/resources/hris/hris.ts">Income</a></code>
- <code><a href="./src/resources/hris/hris.ts">Location</a></code>
- <code><a href="./src/resources/hris/hris.ts">Money</a></code>
- <code><a href="./src/resources/hris/hris.ts">Paging</a></code>

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
