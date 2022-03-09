import {Customer} from '../../model/customer';

export class CustomerService {

  customers: Customer[] = [
    {
      customerId: 1,
      customerName: 'Nguyễn Thị Hào',
      dateOfBirth: '1970-11-07',
      sex: false,
      identityNumber: '643431213',
      phoneNumber: '0945423362',
      email: 'thihao07@gmail.com',
      address: '23 Nguyễn Hoàng, Đà Nẵng',

      customerType: {
        customerTypeName: 'Member'
      }
    },

    {
      customerId: 2,
      customerName: 'Phạm Xuân Diệu',
      dateOfBirth: '1992-08-08',
      sex: true,
      identityNumber: '865342123',
      phoneNumber: '0954333333',
      email: 'xuandieu92@gmail.com',
      address: 'K77/22 Thái Phiên, Quảng Trị',

      customerType: {
        customerTypeName: 'Gold'
      }
    },

    {
      customerId: 3,
      customerName: 'Trương Đình Nghệ',
      dateOfBirth: '1990-02-27',
      sex: true,
      identityNumber: '488645199',
      phoneNumber: '0373213122',
      email: 'nghenhan2702@gmail.com',
      address: 'K323/12 Ông Ích Khiêm, Vinh',

      customerType: {
        customerTypeName: 'Diamond'
      }
    },

    {
      customerId: 4,
      customerName: 'Dương Văn Quan',
      dateOfBirth: '1981-07-08',
      sex: true,
      identityNumber: '543432111',
      phoneNumber: '0490039241',
      email: 'duongquan@gmail.com',
      address: 'K453/12 Lê Lợi, Đà Nẵng',

      customerType: {
        customerTypeName: 'Diamond'
      }
    },

    {
      customerId: 5,
      customerName: 'Hoàng Trần Nhi Nhi',
      dateOfBirth: '1995-12-09',
      sex: false,
      identityNumber: '795453345',
      phoneNumber: '0312345678',
      email: 'nhinhi123@gmail.com',
      address: '224 Lý Thái Tổ, Gia Lai',

      customerType: {
        customerTypeName: 'Silver'
      }
    },

    {
      customerId: 6,
      customerName: 'Tôn Nữ Mộc Châu',
      dateOfBirth: '2005-12-06',
      sex: false,
      identityNumber: '732434215',
      phoneNumber: '0988888844',
      email: 'tonnuchau@gmail.com',
      address: '37 Yên Thế, Đà Nẵng',

      customerType: {
        customerTypeName: 'Silver'
      }
    },

    {
      customerId: 7,
      customerName: 'Nguyễn Mỹ Kim',
      dateOfBirth: '1984-04-08',
      sex: false,
      identityNumber: '856453123',
      phoneNumber: '0912345698',
      email: 'kimcuong84@gmail.com',
      address: 'K123/45 Lê Lợi, Hồ Chí Minh',

      customerType: {
        customerTypeName: 'Diamond'
      }
    },

    {
      customerId: 8,
      customerName: 'Nguyễn Thị Hào',
      dateOfBirth: '1999-04-08',
      sex: false,
      identityNumber: '965656433',
      phoneNumber: '0763212345',
      email: 'haohao99@gmail.com',
      address: '55 Nguyễn Văn Linh, Kon Tum',

      customerType: {
        customerTypeName: 'Gold'
      }
    },

    {
      customerId: 9,
      customerName: 'Trần Đại Danh',
      dateOfBirth: '1994-07-01',
      sex: true,
      identityNumber: '432341235',
      phoneNumber: '0643343433',
      email: 'danhhai99@gmail.com',
      address: '24 Lý Thường Kiệt, Quảng Ngãi',

      customerType: {
        customerTypeName: 'Diamond'
      }
    },

    {
      customerId: 10,
      customerName: 'Nguyễn Tâm Đắc',
      dateOfBirth: '1989-07-01',
      sex: true,
      identityNumber: '344343432',
      phoneNumber: '0987654321',
      email: 'dactam@gmail.com',
      address: '22 Ngô Quyền, Đà Nẵng',

      customerType: {
        customerTypeName: 'Platinum'
      }
    }

  ];

  public getCustomers(): Customer[] {
    return this.customers;
  }
}
