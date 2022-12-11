import { User } from './models/User';

const user = new User({ id: 1 });

user.set({ name: 'super man' });
user.save();

const newUser = new User({ name: 'new record', age: 0 });
newUser.save();
setTimeout(() => {
	console.log(user);
}, 4000);
