import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(
        private _fireStore: AngularFirestore,
    ) {
    }

    public getUsersList (): Observable<any> {
        return this._fireStore.collection('users').snapshotChanges();
    }
}
