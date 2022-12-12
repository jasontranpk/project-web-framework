import { User } from './models/User';

const user = User.buildUser({ id: 1, name: 'new newer name', age: 20 });

user.on('save', () => {
	console.log(user);
});

user.save();
