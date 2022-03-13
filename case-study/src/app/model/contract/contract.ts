import {Customer} from "../customer/customer";
import {Facility} from "../service/facility";

export interface Contract {
  contractId?: number;
  startDate?: string;
  endDate?: string;
  deposit?: number;

  customer?: Customer;
  facility?: Facility;
}
