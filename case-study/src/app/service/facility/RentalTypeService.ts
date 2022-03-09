import {RentalType} from '../../model/rental-type';

export class RentalTypeService {
  rentalTypes: RentalType[] = [
    {
      rentalTypeId: 1,
      rentalTypeName: 'year'
    },
    {
      rentalTypeId: 2,
      rentalTypeName: 'month'
    },
    {
      rentalTypeId: 3,
      rentalTypeName: 'day'
    },
    {
      rentalTypeId: 4,
      rentalTypeName: 'hour'
    }
  ];

  public getRentalTypes(): RentalType[] {
    return this.rentalTypes;
  }
}
