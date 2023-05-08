# ATS

## Candidates

Models:

- <code><a href="./resources/ats/candidates.ts">Candidate</a></code>

Methods:

- <code title="get /ats/candidates/{candidate_id}">client.ats.candidates.<a href="./resources/ats/candidates.ts">retrieve</a>(candidateId) -> Candidate</code>
- <code title="get /ats/candidates">client.ats.candidates.<a href="./resources/ats/candidates.ts">list</a>({ ...params }) -> CandidatesPage</code>

## Applications

Models:

- <code><a href="./resources/ats/applications.ts">Application</a></code>

Methods:

- <code title="get /ats/applications/{application_id}">client.ats.applications.<a href="./resources/ats/applications.ts">retrieve</a>(applicationId) -> Application</code>
- <code title="get /ats/applications">client.ats.applications.<a href="./resources/ats/applications.ts">list</a>({ ...params }) -> ApplicationsPage</code>

## Stages

Models:

- <code><a href="./resources/ats/stages.ts">Stage</a></code>

Methods:

- <code title="get /ats/stages">client.ats.stages.<a href="./resources/ats/stages.ts">list</a>() -> StagesSinglePage</code>

## Jobs

Models:

- <code><a href="./resources/ats/jobs.ts">Job</a></code>

Methods:

- <code title="get /ats/jobs/{job_id}">client.ats.jobs.<a href="./resources/ats/jobs.ts">retrieve</a>(jobId) -> Job</code>
- <code title="get /ats/jobs">client.ats.jobs.<a href="./resources/ats/jobs.ts">list</a>({ ...params }) -> JobsPage</code>

## Offers

Models:

- <code><a href="./resources/ats/offers.ts">Offer</a></code>

Methods:

- <code title="get /ats/offers/{offer_id}">client.ats.offers.<a href="./resources/ats/offers.ts">retrieve</a>(offerId) -> Offer</code>
- <code title="get /ats/offers">client.ats.offers.<a href="./resources/ats/offers.ts">list</a>({ ...params }) -> OffersPage</code>

# HRIS

Models:

- <code><a href="./resources/hris/hris.ts">Income</a></code>
- <code><a href="./resources/hris/hris.ts">Location</a></code>
- <code><a href="./resources/hris/hris.ts">Money</a></code>
- <code><a href="./resources/hris/hris.ts">Paging</a></code>

## CompanyResource

Models:

- <code><a href="./resources/hris/company.ts">Company</a></code>

Methods:

- <code title="get /employer/company">client.hris.company.<a href="./resources/hris/company.ts">retrieve</a>() -> Company</code>

## Payments

Models:

- <code><a href="./resources/hris/payments.ts">Payment</a></code>

Methods:

- <code title="get /employer/payment">client.hris.payments.<a href="./resources/hris/payments.ts">list</a>({ ...params }) -> PaymentsSinglePage</code>

## PayStatements

Models:

- <code><a href="./resources/hris/pay-statements.ts">PayStatement</a></code>
- <code><a href="./resources/hris/pay-statements.ts">PayStatementResponse</a></code>
- <code><a href="./resources/hris/pay-statements.ts">PayStatementResponseBody</a></code>

Methods:

- <code title="post /employer/pay-statement">client.hris.payStatements.<a href="./resources/hris/pay-statements.ts">retrieveMany</a>({ ...params }) -> PayStatementResponsesResponsesPage</code>

## Directory

Models:

- <code><a href="./resources/hris/directory.ts">IndividualInDirectory</a></code>

Methods:

- <code title="get /employer/directory">client.hris.directory.<a href="./resources/hris/directory.ts">listIndividuals</a>({ ...params }) -> IndividualsPage</code>

## Individuals

Models:

- <code><a href="./resources/hris/individuals/individuals.ts">Individual</a></code>
- <code><a href="./resources/hris/individuals/individuals.ts">IndividualResponse</a></code>

Methods:

- <code title="post /employer/individual">client.hris.individuals.<a href="./resources/hris/individuals/individuals.ts">retrieveMany</a>({ ...params }) -> IndividualResponsesResponsesPage</code>

### EmploymentData

Models:

- <code><a href="./resources/hris/individuals/employment-data.ts">EmploymentData</a></code>
- <code><a href="./resources/hris/individuals/employment-data.ts">EmploymentDataResponse</a></code>

Methods:

- <code title="post /employer/employment">client.hris.individuals.employmentData.<a href="./resources/hris/individuals/employment-data.ts">retrieveMany</a>({ ...params }) -> EmploymentDataResponsesResponsesPage</code>

## Benefits

Models:

- <code><a href="./resources/hris/benefits/benefits.ts">BenefitFrequency</a></code>
- <code><a href="./resources/hris/benefits/benefits.ts">BenefitType</a></code>
- <code><a href="./resources/hris/benefits/benefits.ts">BenfitContribution</a></code>
- <code><a href="./resources/hris/benefits/benefits.ts">CompanyBenefit</a></code>
- <code><a href="./resources/hris/benefits/benefits.ts">CreateCompanyBenefitsResponse</a></code>
- <code><a href="./resources/hris/benefits/benefits.ts">SupportedBenefit</a></code>
- <code><a href="./resources/hris/benefits/benefits.ts">UpdateCompanyBenefitResponse</a></code>

Methods:

- <code title="post /employer/benefits">client.hris.benefits.<a href="./resources/hris/benefits/benefits.ts">create</a>({ ...params }) -> CreateCompanyBenefitsResponse</code>
- <code title="get /employer/benefits/{benefit_id}">client.hris.benefits.<a href="./resources/hris/benefits/benefits.ts">retrieve</a>(benefitId) -> CompanyBenefit</code>
- <code title="post /employer/benefits/{benefit_id}">client.hris.benefits.<a href="./resources/hris/benefits/benefits.ts">update</a>(benefitId, { ...params }) -> UpdateCompanyBenefitResponse</code>
- <code title="get /employer/benefits">client.hris.benefits.<a href="./resources/hris/benefits/benefits.ts">list</a>() -> CompanyBenefitsSinglePage</code>
- <code title="get /employer/benefits/meta">client.hris.benefits.<a href="./resources/hris/benefits/benefits.ts">listSupportedBenefits</a>() -> SupportedBenefitsSinglePage</code>

### Individuals

Models:

- <code><a href="./resources/hris/benefits/individuals.ts">EnrolledIndividual</a></code>
- <code><a href="./resources/hris/benefits/individuals.ts">IndividualBenefit</a></code>
- <code><a href="./resources/hris/benefits/individuals.ts">UnenrolledIndividual</a></code>
- <code><a href="./resources/hris/benefits/individuals.ts">IndividualEnrolledIDsResponse</a></code>

Methods:

- <code title="post /employer/benefits/{benefit_id}/individuals">client.hris.benefits.individuals.<a href="./resources/hris/benefits/individuals.ts">enrollMany</a>(benefitId) -> EnrolledIndividualsSinglePage</code>
- <code title="get /employer/benefits/{benefit_id}/enrolled">client.hris.benefits.individuals.<a href="./resources/hris/benefits/individuals.ts">enrolledIds</a>(benefitId) -> IndividualEnrolledIDsResponse</code>
- <code title="get /employer/benefits/{benefit_id}/individuals">client.hris.benefits.individuals.<a href="./resources/hris/benefits/individuals.ts">retrieveManyBenefits</a>(benefitId, { ...params }) -> IndividualBenefitsSinglePage</code>
- <code title="delete /employer/benefits/{benefit_id}/individuals">client.hris.benefits.individuals.<a href="./resources/hris/benefits/individuals.ts">unenroll</a>(benefitId, { ...params }) -> UnenrolledIndividualsSinglePage</code>

# Providers

Models:

- <code><a href="./resources/providers.ts">Provider</a></code>

Methods:

- <code title="get /providers">client.providers.<a href="./resources/providers.ts">list</a>() -> ProvidersSinglePage</code>

# Account

Models:

- <code><a href="./resources/account.ts">DisconnectResponse</a></code>
- <code><a href="./resources/account.ts">Introspection</a></code>

Methods:

- <code title="post /disconnect">client.account.<a href="./resources/account.ts">disconnect</a>() -> DisconnectResponse</code>
- <code title="get /introspect">client.account.<a href="./resources/account.ts">introspect</a>() -> Introspection</code>
