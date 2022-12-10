import { User } from './models/User';

const user = new User({ name: 'Jason', age: 20 });
user.set({ name: 'new name' });

user.on('change', () => {
	console.log('change #1');
});
user.on('change', () => {
	console.log('change #2');
});
user.on('change', () => {
	console.log('change #3');
});
user.on('save', () => {
	console.log('save was triggered');
});
user.trigger('savasfdsdfe');
