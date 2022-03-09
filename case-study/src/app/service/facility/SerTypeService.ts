import {ServiceType} from '../../model/service-type';

export class SerTypeService {
  serviceTypes: ServiceType[] = [
    {
      serviceTypeId: 1,
      serviceTypeName: 'Villa'
    },
    {
      serviceTypeId: 2,
      serviceTypeName: 'House'
    },
    {
      serviceTypeId: 3,
      serviceTypeName: 'Room'
    }
  ];

  public getServiceTypes(): ServiceType[] {
    return this.serviceTypes;
  }
}
