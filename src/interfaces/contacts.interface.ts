import { z } from 'zod';
import {
  addressCreateSchema,
  addressUpdateSchema,
  contactRequestSchema,
  contactsListResponseSchema,
  createContactResponseSchema,
  emailCreateUpdateRequest,
  emailSchema,
  fullNameRequestSchema,
  phoneCreateUpdateRequest,
} from '../schemas/contacts.schemas';
import { DeepPartial } from 'typeorm';

type TContactRequest = z.infer<typeof contactRequestSchema>;
type TCreateContactResponse = z.infer<typeof createContactResponseSchema>;
type TContactsListResponse = z.infer<typeof contactsListResponseSchema>;

type TFullNameRequest = z.infer<typeof fullNameRequestSchema>;

type TCreateAddressRequest = z.infer<typeof addressCreateSchema>;
type TAddressUpdateRequest = DeepPartial<typeof addressUpdateSchema>;

type TEmail = z.infer<typeof emailSchema>;
type TCreateUpdateEmailRequest = z.infer<typeof emailCreateUpdateRequest>;

type TCreateUpdatePhoneRequest = z.infer<typeof phoneCreateUpdateRequest>;

export {
  TContactRequest,
  TCreateContactResponse,
  TContactsListResponse,
  TFullNameRequest,
  TCreateAddressRequest,
  TAddressUpdateRequest,
  TEmail,
  TCreateUpdateEmailRequest,
  TCreateUpdatePhoneRequest,
};
