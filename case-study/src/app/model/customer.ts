import {CustomerType} from './customer-type';

export interface Customer {
  customerId?: number;
  customerName?: string;
  dateOfBirth?: string;
  sex?: boolean;
  identityNumber?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;

  customerType?: CustomerType;
}
