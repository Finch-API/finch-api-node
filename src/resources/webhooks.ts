// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Shared from './shared';
import * as BenefitsAPI from './hris/benefits/benefits';
import { fromBase64, getRequiredHeader, HeadersLike, toBase64 } from '../core';
import { hmac } from '@noble/hashes/hmac';
import { sha256 } from '@noble/hashes/sha2';

export class Webhooks extends APIResource {
  /**
   * Validates that the given payload was sent by Finch and parses the payload.
   */
  unwrap(
    payload: string,
    headers: HeadersLike,
    secret: string | undefined | null = this._client.webhookSecret,
  ): WebhookEvent {
    this.verifySignature(payload, headers, secret);
    return JSON.parse(payload) as WebhookEvent;
  }

  private parseSecret(secret: string | null | undefined): Uint8Array {
    if (!secret) {
      throw new Error(
        "The webhook secret must either be set using the env var, FINCH_WEBHOOK_SECRET, on the client class, Finch({ webhook_secret: '123' }), or passed to this function",
      );
    }

    try {
      const buf = fromBase64(secret);
      if (toBase64(buf) !== secret) {
        throw new Error(`Given secret is not valid`);
      }
      return buf;
    } catch (e) {
      throw new Error(`Given secret is not valid`);
    }
  }

  private signPayload(
    payload: string,
    { eventId, timestamp, secret }: { eventId: string; timestamp: Date; secret: Uint8Array },
  ) {
    const encoder = new TextEncoder();
    const toSign = encoder.encode(`${eventId}.${timestamp.getTime() / 1000}.${payload}`);
    const signed = toBase64(hmac(sha256, secret, toSign));
    return `v1,${signed}`;
  }

  /** Make an assertion, if not `true`, then throw. */
  private assert(expr: unknown, msg = ''): asserts expr {
    if (!expr) {
      throw new Error(msg);
    }
  }

  /** Compare to array buffers or data views in a way that timing based attacks
   * cannot gain information about the platform. */
  private timingSafeEqual(
    a: ArrayBufferView | ArrayBufferLike | DataView,
    b: ArrayBufferView | ArrayBufferLike | DataView,
  ): boolean {
    if (a.byteLength !== b.byteLength) {
      return false;
    }
    if (!(a instanceof DataView)) {
      a = new DataView(ArrayBuffer.isView(a) ? a.buffer : a);
    }
    if (!(b instanceof DataView)) {
      b = new DataView(ArrayBuffer.isView(b) ? b.buffer : b);
    }
    this.assert(a instanceof DataView);
    this.assert(b instanceof DataView);
    const length = a.byteLength;
    let out = 0;
    let i = -1;
    while (++i < length) {
      out |= a.getUint8(i) ^ b.getUint8(i);
    }
    return out === 0;
  }

  /**
   * Validates whether or not the webhook payload was sent by Finch.
   *
   * An error will be raised if the webhook payload was not sent by Finch.
   */
  verifySignature(
    body: string,
    headers: HeadersLike,
    secret: string | undefined | null = this._client.webhookSecret,
  ): void {
    const parsedSecret = this.parseSecret(secret);

    const eventId = getRequiredHeader(headers, 'finch-event-id');
    const msgTimestamp = getRequiredHeader(headers, 'finch-timestamp');
    const msgSignature = getRequiredHeader(headers, 'finch-signature');

    const now = Math.floor(Date.now() / 1000);
    const timestampSeconds = parseInt(msgTimestamp, 10);
    if (isNaN(timestampSeconds)) {
      throw new Error(`Invalid timestamp header: ${msgTimestamp}`);
    }

    if (typeof body !== 'string') {
      throw new Error(
        'Webhook body must be passed as the raw JSON string sent from the server (do not parse it first).',
      );
    }

    const webhook_tolerance_in_seconds = 5 * 60; // 5 minutes
    if (now - timestampSeconds > webhook_tolerance_in_seconds) {
      throw new Error('Webhook timestamp is too old');
    }

    if (timestampSeconds > now + webhook_tolerance_in_seconds) {
      throw new Error('Webhook timestamp is too new');
    }

    const timestamp = new Date(timestampSeconds * 1000);

    const computedSignature = this.signPayload(body, { eventId, timestamp, secret: parsedSecret });
    const expectedSignature = computedSignature.split(',')[1];

    const passedSignatures = msgSignature.split(' ');

    const encoder = new globalThis.TextEncoder();
    for (const versionedSignature of passedSignatures) {
      const [version, signature] = versionedSignature.split(',');
      if (version !== 'v1') {
        continue;
      }

      if (this.timingSafeEqual(encoder.encode(signature), encoder.encode(expectedSignature))) {
        // valid!
        return;
      }
    }

    throw new Error('None of the given webhook signatures match the expected signature');
  }
}

export interface AccountUpdateEvent extends BaseWebhookEvent {
  data?: AccountUpdateEvent.Data;

  event_type?: 'account.updated';
}

export namespace AccountUpdateEvent {
  export interface Data {
    authentication_method: Data.AuthenticationMethod;

    status: Shared.ConnectionStatusType;
  }

  export namespace Data {
    export interface AuthenticationMethod {
      /**
       * Each benefit type and their supported features. If the benefit type is not
       * supported, the property will be null
       */
      benefits_support?: BenefitsAPI.BenefitsSupport | null;

      /**
       * The supported data fields returned by our HR and payroll endpoints
       */
      supported_fields?: AuthenticationMethod.SupportedFields | null;

      /**
       * The type of authentication method.
       */
      type?: 'assisted' | 'credential' | 'api_token' | 'api_credential' | 'oauth';
    }

    export namespace AuthenticationMethod {
      /**
       * The supported data fields returned by our HR and payroll endpoints
       */
      export interface SupportedFields {
        company?: SupportedFields.Company;

        directory?: SupportedFields.Directory;

        employment?: SupportedFields.Employment;

        individual?: SupportedFields.Individual;

        pay_group?: SupportedFields.PayGroup;

        pay_statement?: SupportedFields.PayStatement;

        payment?: SupportedFields.Payment;
      }

      export namespace SupportedFields {
        export interface Company {
          id?: boolean;

          accounts?: Company.Accounts;

          departments?: Company.Departments;

          ein?: boolean;

          entity?: Company.Entity;

          legal_name?: boolean;

          locations?: Company.Locations;

          primary_email?: boolean;

          primary_phone_number?: boolean;
        }

        export namespace Company {
          export interface Accounts {
            account_name?: boolean;

            account_number?: boolean;

            account_type?: boolean;

            institution_name?: boolean;

            routing_number?: boolean;
          }

          export interface Departments {
            name?: boolean;

            parent?: Departments.Parent;
          }

          export namespace Departments {
            export interface Parent {
              name?: boolean;
            }
          }

          export interface Entity {
            subtype?: boolean;

            type?: boolean;
          }

          export interface Locations {
            city?: boolean;

            country?: boolean;

            line1?: boolean;

            line2?: boolean;

            postal_code?: boolean;

            state?: boolean;
          }
        }

        export interface Directory {
          individuals?: Directory.Individuals;

          paging?: Directory.Paging;
        }

        export namespace Directory {
          export interface Individuals {
            id?: boolean;

            department?: boolean;

            first_name?: boolean;

            is_active?: boolean;

            last_name?: boolean;

            manager?: Individuals.Manager;

            middle_name?: boolean;
          }

          export namespace Individuals {
            export interface Manager {
              id?: boolean;
            }
          }

          export interface Paging {
            count?: boolean;

            offset?: boolean;
          }
        }

        export interface Employment {
          id?: boolean;

          class_code?: boolean;

          custom_fields?: boolean;

          department?: Employment.Department;

          employment?: Employment.Employment;

          end_date?: boolean;

          first_name?: boolean;

          income?: Employment.Income;

          income_history?: boolean;

          is_active?: boolean;

          last_name?: boolean;

          location?: Employment.Location;

          manager?: Employment.Manager;

          middle_name?: boolean;

          start_date?: boolean;

          title?: boolean;
        }

        export namespace Employment {
          export interface Department {
            name?: boolean;
          }

          export interface Employment {
            subtype?: boolean;

            type?: boolean;
          }

          export interface Income {
            amount?: boolean;

            currency?: boolean;

            unit?: boolean;
          }

          export interface Location {
            city?: boolean;

            country?: boolean;

            line1?: boolean;

            line2?: boolean;

            postal_code?: boolean;

            state?: boolean;
          }

          export interface Manager {
            id?: boolean;
          }
        }

        export interface Individual {
          id?: boolean;

          dob?: boolean;

          emails?: Individual.Emails;

          encrypted_ssn?: boolean;

          ethnicity?: boolean;

          first_name?: boolean;

          gender?: boolean;

          last_name?: boolean;

          middle_name?: boolean;

          phone_numbers?: Individual.PhoneNumbers;

          preferred_name?: boolean;

          residence?: Individual.Residence;

          ssn?: boolean;
        }

        export namespace Individual {
          export interface Emails {
            data?: boolean;

            type?: boolean;
          }

          export interface PhoneNumbers {
            data?: boolean;

            type?: boolean;
          }

          export interface Residence {
            city?: boolean;

            country?: boolean;

            line1?: boolean;

            line2?: boolean;

            postal_code?: boolean;

            state?: boolean;
          }
        }

        export interface PayGroup {
          id?: boolean;

          individual_ids?: boolean;

          name?: boolean;

          pay_frequencies?: boolean;
        }

        export interface PayStatement {
          paging?: PayStatement.Paging;

          pay_statements?: PayStatement.PayStatements;
        }

        export namespace PayStatement {
          export interface Paging {
            count: boolean;

            offset: boolean;
          }

          export interface PayStatements {
            earnings?: PayStatements.Earnings;

            employee_deductions?: PayStatements.EmployeeDeductions;

            employer_contributions?: PayStatements.EmployerContributions;

            gross_pay?: boolean;

            individual_id?: boolean;

            net_pay?: boolean;

            payment_method?: boolean;

            taxes?: PayStatements.Taxes;

            total_hours?: boolean;

            type?: boolean;
          }

          export namespace PayStatements {
            export interface Earnings {
              amount?: boolean;

              currency?: boolean;

              name?: boolean;

              type?: boolean;
            }

            export interface EmployeeDeductions {
              amount?: boolean;

              currency?: boolean;

              name?: boolean;

              pre_tax?: boolean;

              type?: boolean;
            }

            export interface EmployerContributions {
              amount?: boolean;

              currency?: boolean;

              name?: boolean;
            }

            export interface Taxes {
              amount?: boolean;

              currency?: boolean;

              employer?: boolean;

              name?: boolean;

              type?: boolean;
            }
          }
        }

        export interface Payment {
          id?: boolean;

          company_debit?: boolean;

          debit_date?: boolean;

          employee_taxes?: boolean;

          employer_taxes?: boolean;

          gross_pay?: boolean;

          individual_ids?: boolean;

          net_pay?: boolean;

          pay_date?: boolean;

          pay_frequencies?: boolean;

          pay_group_ids?: boolean;

          pay_period?: Payment.PayPeriod;
        }

        export namespace Payment {
          export interface PayPeriod {
            end_date?: boolean;

            start_date?: boolean;
          }
        }
      }
    }
  }
}

export interface BaseWebhookEvent {
  /**
   * @deprecated: [DEPRECATED] Unique Finch ID of the employer account used to make
   * this connection. Use `connection_id` instead to identify the connection
   * associated with this event.
   */
  account_id: string;

  /**
   * @deprecated: [DEPRECATED] Unique Finch ID of the company for which data has been
   * updated. Use `connection_id` instead to identify the connection associated with
   * this event.
   */
  company_id: string;

  /**
   * Unique Finch ID of the connection associated with the webhook event.
   */
  connection_id?: string;
}

export interface CompanyEvent extends BaseWebhookEvent {
  data?: Record<string, unknown> | null;

  event_type?: 'company.updated';
}

export interface DirectoryEvent extends BaseWebhookEvent {
  data?: DirectoryEvent.Data;

  event_type?: 'directory.created' | 'directory.updated' | 'directory.deleted';
}

export namespace DirectoryEvent {
  export interface Data {
    /**
     * The ID of the individual related to the event.
     */
    individual_id?: string;
  }
}

export interface EmploymentEvent extends BaseWebhookEvent {
  data?: EmploymentEvent.Data;

  event_type?: 'employment.created' | 'employment.updated' | 'employment.deleted';
}

export namespace EmploymentEvent {
  export interface Data {
    /**
     * The ID of the individual related to the event.
     */
    individual_id?: string;
  }
}

export interface IndividualEvent extends BaseWebhookEvent {
  data?: IndividualEvent.Data;

  event_type?: 'individual.created' | 'individual.updated' | 'individual.deleted';
}

export namespace IndividualEvent {
  export interface Data {
    /**
     * The ID of the individual related to the event.
     */
    individual_id?: string;
  }
}

export interface JobCompletionEvent extends BaseWebhookEvent {
  data?: JobCompletionEvent.Data;

  event_type?:
    | 'job.benefit_create.completed'
    | 'job.benefit_enroll.completed'
    | 'job.benefit_register.completed'
    | 'job.benefit_unenroll.completed'
    | 'job.benefit_update.completed'
    | 'job.data_sync_all.completed';
}

export namespace JobCompletionEvent {
  export interface Data {
    /**
     * The id of the job which has completed.
     */
    job_id: string;

    /**
     * The url to query the result of the job.
     */
    job_url: string;
  }
}

export interface PayStatementEvent extends BaseWebhookEvent {
  data?: PayStatementEvent.Data;

  event_type?: 'pay_statement.created' | 'pay_statement.updated' | 'pay_statement.deleted';
}

export namespace PayStatementEvent {
  export interface Data {
    /**
     * The ID of the individual associated with the pay statement.
     */
    individual_id?: string;

    /**
     * The ID of the payment associated with the pay statement.
     */
    payment_id?: string;
  }
}

export interface PaymentEvent extends BaseWebhookEvent {
  data?: PaymentEvent.Data;

  event_type?: 'payment.created' | 'payment.updated' | 'payment.deleted';
}

export namespace PaymentEvent {
  export interface Data {
    /**
     * The date of the payment.
     */
    pay_date: string;

    /**
     * The ID of the payment.
     */
    payment_id: string;
  }
}

export type WebhookEvent =
  | AccountUpdateEvent
  | JobCompletionEvent
  | CompanyEvent
  | DirectoryEvent
  | EmploymentEvent
  | IndividualEvent
  | PaymentEvent
  | PayStatementEvent;

export declare namespace Webhooks {
  export {
    type AccountUpdateEvent as AccountUpdateEvent,
    type BaseWebhookEvent as BaseWebhookEvent,
    type CompanyEvent as CompanyEvent,
    type DirectoryEvent as DirectoryEvent,
    type EmploymentEvent as EmploymentEvent,
    type IndividualEvent as IndividualEvent,
    type JobCompletionEvent as JobCompletionEvent,
    type PayStatementEvent as PayStatementEvent,
    type PaymentEvent as PaymentEvent,
    type WebhookEvent as WebhookEvent,
  };
}
