// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SessionsAPI from './sessions';
import {
  SessionNewParams,
  SessionNewResponse,
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
    type SessionNewResponse as SessionNewResponse,
    type SessionReauthenticateResponse as SessionReauthenticateResponse,
    type SessionNewParams as SessionNewParams,
    type SessionReauthenticateParams as SessionReauthenticateParams,
  };
}
