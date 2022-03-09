import {Facility} from '../../model/facility';

export class FacilityService {

  facilities: Facility[] = [
    {
      serviceId: 1,
      serviceName: 'Villa Beach Front',
      serviceArea: 25000,
      rentalCost: 1000000,
      maxPeople: 10,

      rentalType: {
        rentalTypeId: 3,
        rentalTypeName: 'day'
      },

      serviceType: {
        serviceTypeId: 1,
        serviceTypeName: 'Villa'
      },

      roomStandard: 'vip',
      extraAmenity: 'Có hồ bơi',
      poolArea: 500,
      levels: 4
    },

    {
      serviceId: 2,
      serviceName: 'House Princess 01',
      serviceArea: 14000,
      rentalCost: 500000,
      maxPeople: 7,

      rentalType: {
        rentalTypeId: 2,
        rentalTypeName: 'month'
      },

      serviceType: {
        serviceTypeId: 2,
        serviceTypeName: 'House'
      },

      roomStandard: 'vip',
      extraAmenity: 'Có thêm bếp nướng',
      levels: 3
    },

    {
      serviceId: 3,
      serviceName: 'Room Twin 01',
      serviceArea: 5000,
      rentalCost: 100000,
      maxPeople: 2,

      rentalType: {
        rentalTypeId: 4,
        rentalTypeName: 'hour'
      },

      serviceType: {
        serviceTypeId: 3,
        serviceTypeName: 'Room'
      },

      roomStandard: 'normal',
      extraAmenity: 'Có tivi'
      // levels: 3
    },

    {
      serviceId: 4,
      serviceName: 'Villa No Beach Front',
      serviceArea: 22000,
      rentalCost: 900000,
      maxPeople: 8,

      rentalType: {
        rentalTypeId: 3,
        rentalTypeName: 'day'
      },

      serviceType: {
        serviceTypeId: 1,
        serviceTypeName: 'Villa'
      },

      roomStandard: 'normal',
      extraAmenity: 'Có hồ bơi',
      poolArea: 300,
      levels: 3
    },

    {
      serviceId: 5,
      serviceName: 'House Princess 02',
      serviceArea: 10000,
      rentalCost: 400000,
      maxPeople: 5,

      rentalType: {
        rentalTypeId: 3,
        rentalTypeName: 'day'
      },

      serviceType: {
        serviceTypeId: 2,
        serviceTypeName: 'House'
      },

      roomStandard: 'normal',
      extraAmenity: 'Có thêm bếp nướng',
      // poolArea: 300,
      levels: 2
    },

    {
      serviceId: 6,
      serviceName: 'Room Twin 02',
      serviceArea: 3000,
      rentalCost: 90000,
      maxPeople: 2,

      rentalType: {
        rentalTypeId: 4,
        rentalTypeName: 'hour'
      },

      serviceType: {
        serviceTypeId: 3,
        serviceTypeName: 'Room'
      },

      roomStandard: 'normal',
      extraAmenity: 'Có tivi'
      // poolArea: 300,
      // levels: 2
    }
  ];

  public getFacilities(): Facility[] {
    return this.facilities;
  }
}
