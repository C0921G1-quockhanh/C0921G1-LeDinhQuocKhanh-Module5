import {CustomerType} from '../../model/customer-type';

export class CustomerTypeService {

  customerTypes: CustomerType[] = [
    {
      customerTypeId: 1,
      customerTypeName: 'Diamond'
    },

    {
      customerTypeId: 2,
      customerTypeName: 'Platinum'
    },

    {
      customerTypeId: 3,
      customerTypeName: 'Gold'
    },

    {
      customerTypeId: 4,
      customerTypeName: 'Silver'
    },

    {
      customerTypeId: 5,
      customerTypeName: 'Member'
    }
  ];

  public getCustomerTypes(): CustomerType[] {
    return this.customerTypes;
  }
}
