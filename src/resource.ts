// File generated from our OpenAPI spec by Stainless.

import type { Finch } from './index';

export class APIResource {
  protected client: Finch;
  constructor(client: Finch) {
    this.client = client;

    this.get = client.get.bind(client);
    this.post = client.post.bind(client);
    this.patch = client.patch.bind(client);
    this.put = client.put.bind(client);
    this.delete = client.delete.bind(client);
    this.getAPIList = client.getAPIList.bind(client);
  }

  protected get: Finch['get'];
  protected post: Finch['post'];
  protected patch: Finch['patch'];
  protected put: Finch['put'];
  protected delete: Finch['delete'];
  protected getAPIList: Finch['getAPIList'];
}
