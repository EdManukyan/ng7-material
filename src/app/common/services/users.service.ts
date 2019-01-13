import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(
        private _fireStore: AngularFirestore,
    ) {
    }

    public getUsersList () {
        return this._fireStore.collection('users').snapshotChanges();
    }
}
