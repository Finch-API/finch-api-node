# Finch Node API Library

[![NPM version](https://img.shields.io/npm/v/@tryfinch/finch-api.svg)](https://npmjs.org/package/@tryfinch/finch-api)

This library provides convenient access to the Finch Node REST API from server-side TypeScript or JavaScript.

The API documentation can be found [here](https://developer.tryfinch.com/).

## Installation

```sh
npm install --save @tryfinch/finch-api
# or
yarn add @tryfinch/finch-api
```

## Usage

```js
import Finch from '@tryfinch/finch-api';

const finch = new Finch({
  accessToken: 'my access token',
});

async function main() {
  const candidate = await finch.ats.candidates.retrieve('<candidate id>');

  console.log(candidate.first_name);
}

main();
```

### Request & Response types

This library includes TypeScript definitions for all request params and response fields. You may import and use them like so:

```ts
import Finch from '@tryfinch/finch-api';

const finch = new Finch({
  accessToken: 'my access token',
});

async function main() {
  const candidate: Finch.ATS.Candidate = await finch.ats.candidates.retrieve('<candidate id>');
}

main();
```

Documentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.

## Handling errors

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `APIError` will be thrown:

```ts
async function main() {
  const directory = await finch.hris.directory.listIndividuals().catch((err) => {
    if (err instanceof Finch.APIError) {
      console.log(err.status); // 400
      console.log(err.name); // BadRequestError

      console.log(err.headers); // {server: 'nginx', ...}
    } else {
      throw err;
    }
  });
}

main();
```

Error codes are as followed:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 401         | `AuthenticationError`      |
| 403         | `PermissionDeniedError`    |
| 404         | `NotFoundError`            |
| 422         | `UnprocessableEntityError` |
| 429         | `RateLimitError`           |
| >=500       | `InternalServerError`      |
| N/A         | `APIConnectionError`       |

### Retries

Certain errors will be automatically retried 2 times by default, with a short exponential backoff.
Connection errors (for example, due to a network connectivity problem), 409 Conflict, 429 Rate Limit,
and >=500 Internal errors will all be retried by default.

You can use the `maxRetries` option to configure or disable this:

<!-- prettier-ignore -->
```js
// Configure the default for all requests:
const finch = new Finch({
  maxRetries: 0, // default is 2
});

// Or, configure per-request:
await finch.hris.directory.listIndividuals({
  maxRetries: 5,
});
```

### Timeouts

Requests time out after 1 minute by default. You can configure this with a `timeout` option:

<!-- prettier-ignore -->
```ts
// Configure the default for all requests:
const finch = new Finch({
  timeout: 20 * 1000, // 20 seconds (default is 1 minute)
});

// Override per-request:
await finch.hris.directory.listIndividuals({
  timeout: 5 * 1000,
});
```

On timeout, an `APIConnectionTimeoutError` is thrown.

Note that requests which time out will be [retried twice by default](#retries).

## Auto-pagination

List methods in the Finch API are paginated.
You can use `for await … of` syntax to iterate through items across all pages:

```ts
async function fetchAllATSJobs(params) {
  const allATSJobs = [];
  // Automatically fetches more pages as needed.
  for await (const job of finch.ats.jobs.list()) {
    allATSJobs.push(job);
  }
  return allATSJobs;
}
```

Alternatively, you can make request a single page at a time:

```ts
let page = await finch.ats.jobs.list();
for (const job of page.jobs) {
  console.log(job);
}

// Convenience methods are provided for manually paginating:
while (page.hasNextPage()) {
  page = page.getNextPage();
  // ...
}
```

## Default Headers

We automatically send the `Finch-API-Version` header set to `2020-09-17`.

If you need to, you can override it by setting default headers on a per-request basis.

Be aware that doing so may result in incorrect types and other unexpected or undefined behavior in the SDK.

```ts
import Finch from '@tryfinch/finch-api';

const finch = new Finch();

const candidate = await finch.ats.candidates.retrieve('<candidate id>', {
  headers: { 'Finch-API-Version': 'My-Custom-Value' },
});
```

## Advanced Usage

### Accessing raw Response data (e.g., headers)

The "raw" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.

You can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.

```ts
const finch = new Finch();

const response = await finch.ats.candidates.retrieve('<candidate id>').asResponse();
console.log(response.headers.get('X-My-Header'));
console.log(response.statusText); // access the underlying Response object

const { data: candidates, response: raw } = await finch.ats.candidates
  .retrieve('<candidate id>')
  .withResponse();
console.log(raw.headers.get('X-My-Header'));
console.log(candidates.first_name);
```

## Configuring an HTTP(S) Agent (e.g., for proxies)

By default, this library uses a stable agent for all http/https requests to reuse TCP connections, eliminating many TCP & TLS handshakes and shaving around 100ms off most requests.

If you would like to disable or customize this behavior, for example to use the API behind a proxy, you can pass an `httpAgent` which is used for all requests (be they http or https), for example:

<!-- prettier-ignore -->
```ts
import http from 'http';
import HttpsProxyAgent from 'https-proxy-agent';

// Configure the default for all requests:
const finch = new Finch({
  httpAgent: new HttpsProxyAgent(process.env.PROXY_URL),
});

// Override per-request:
await finch.hris.directory.listIndividuals({
  baseURL: 'http://localhost:8080/test-api',
  httpAgent: new http.Agent({ keepAlive: false }),
})
```

## Semantic Versioning

This package generally attempts to follow [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:

1. Changes that only affect static types, without breaking runtime behavior.
2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals)_.
3. Changes that we do not expect to impact the vast majority of users in practice.

We take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.

We are keen for your feedback; please open an [issue](https://www.github.com/Finch-API/finch-api-node/issues) with questions, bugs, or suggestions.

## Requirements

TypeScript >= 4.5 is supported.

The following runtimes are supported:

- Node.js 16 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.
- Deno v1.28.0 or higher, using `import Finch from "npm:@tryfinch/finch-api"`.
  Deno Deploy is not yet supported.
- Cloudflare Workers.
- Vercel Edge Runtime.

If you are interested in other runtime environments, please open or upvote an issue on GitHub.
