import { User } from './models/User';

let user = new User({ name: 'John', age: 22 })
user.set({name: 'John'})