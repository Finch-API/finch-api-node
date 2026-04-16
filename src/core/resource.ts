// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Finch } from '../client';

export abstract class APIResource {
  protected _client: Finch;

  constructor(client: Finch) {
    this._client = client;
  }
}
