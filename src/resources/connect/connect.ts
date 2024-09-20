// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SessionsAPI from './sessions';

export class Connect extends APIResource {
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
}

export namespace Connect {
  export import Sessions = SessionsAPI.Sessions;
  export import SessionNewResponse = SessionsAPI.SessionNewResponse;
  export import SessionReauthenticateResponse = SessionsAPI.SessionReauthenticateResponse;
  export import SessionNewParams = SessionsAPI.SessionNewParams;
  export import SessionReauthenticateParams = SessionsAPI.SessionReauthenticateParams;
}
