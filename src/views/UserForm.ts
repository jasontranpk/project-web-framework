import { User, UserProps } from '../models/User';
import { View } from './View';
export class UserForm extends View<User, UserProps> {
	eventsMap(): { [key: string]: () => void } {
		return {
			'click:.set-age': this.onSetAgeClick,
			'click:.change-name': this.onSetNameClick,
			'click:.save-model': this.onSaveClick,
		};
	}

	onSetNameClick = (): void => {
		const input = this.parent.querySelector('input');

		const name = input!.value;

		this.model.set({ name });
	};

	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};

	onSaveClick = (): void => {
		console.log('on save clicked');
		this.model.save();
	};

	template(): string {
		return `
            <div>
                <input placeHolder='${this.model.get('name')}' />
                <button class='change-name'>Change name</button>
                <button class='set-age'>Set Random Age</button>
				<button class='save-model'>Save</button>
            </div> 
        `;
	}
}
