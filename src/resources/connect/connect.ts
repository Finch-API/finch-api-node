// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SessionsAPI from './sessions';
import {
  SessionConnectParams,
  SessionConnectResponse,
  SessionReauthenticateParams,
  SessionReauthenticateResponse,
  Sessions,
} from './sessions';

export class Connect extends APIResource {
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
}

Connect.Sessions = Sessions;

export declare namespace Connect {
  export {
    Sessions as Sessions,
    type SessionConnectResponse as SessionConnectResponse,
    type SessionReauthenticateResponse as SessionReauthenticateResponse,
    type SessionConnectParams as SessionConnectParams,
    type SessionReauthenticateParams as SessionReauthenticateParams,
  };
}
