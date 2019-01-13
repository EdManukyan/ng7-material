import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../../common/services/users.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
    selector: 'users-form',
    templateUrl: './users-form.component.html',
    styleUrls: ['./users-form.component.css']
})

export class UsersFormComponent implements OnInit {
    public userForm: FormGroup;
    public userIsRegistered = false;

    constructor(
        private _fb: FormBuilder,
        private _userService: UsersService,
        private _fireStore: AngularFirestore,
    ) {

    }

    ngOnInit() {

        const urlPattern = '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$';

        this.userForm = this._fb.group({
            first_name: [void 0, [Validators.required, Validators.minLength(2)]],
            last_name: [void 0, [Validators.required]],
            email: [void 0, [Validators.required, Validators.email]],
            avatar: [void 0, [Validators.required, Validators.pattern(urlPattern)]],
        });
    }

    /**
     * Convenience getter for easy access to form fields
     */
    get userFormControls() {
        return this.userForm.controls;
    }

    /**
     * Checking if form value is not invalid.
     * Adding data to firestore.
     */
    public addUser() {
        if (!this.userForm.invalid) {
            const userData = this.userForm.value;
            this._fireStore.collection('users').add(userData);
            this.userIsRegistered = !this.userIsRegistered;

            this.resetUsersForm();

            setTimeout(() => {
                this.userIsRegistered = !this.userIsRegistered;
            }, 1500);
        }
    }

    /**
     * Resetting form.
     */
    public resetUsersForm() {
        this.userForm.reset({id: void 0, first_name: void 0, last_name: void 0, avatar: void 0});
    }
}
