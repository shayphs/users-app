export enum role {
  Admin = 'Admin',
  User = 'User',
}

export let users: any = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@gmail.com',
    password: '123456',
    role: role.Admin,
    createdAt: 1673101245789,
  },
  {
    id: 2,
    name: 'Mark Smith',
    email: 'mark.Smith@gmail.com',
    password: '123456',
    role: role.User,
    createdAt: 1678101263197,
  },
  {
    id: 3,
    name: 'Anna Smith',
    email: 'anna.Smith@gmail.com',
    password: '123456',
    role: role.User,
    createdAt: 1678101269965,
  },
];
