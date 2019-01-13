import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../common/services/users.service';
import {filter} from 'rxjs/operators';
import {UsersModel} from '../../common/models/users.model';
import {MatTableDataSource} from '@angular/material';
import {AngularFirestore} from '@angular/fire/firestore';


@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
    public activeRoute = 'Users';
    public displayedColumns: string[] = ['first_name', 'last_name', 'email', 'avatar', 'action'];
    public dataSource;
    public usersData: UsersModel[];

    constructor(
        private _usersService: UsersService,
        private _fireStore: AngularFirestore,
    ) {

    }

    ngOnInit() {
        this.usersList();
    }

    /**
     * Filtering gird data with inserted value
     * @param filterValue
     */
    public applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    /**
     * @todo Implement user data edit functionality
     * @param data
     */
    public editUser(data: UsersModel) {
    }

    /**
     * Handling delete request with the given id
     * @param id
     */
    public deleteUser(id: string) {
        this._fireStore.doc('users/' + id).delete();
    }

    /**
     * Getting users list from users service
     */
    private usersList() {
        this._usersService.getUsersList()
            .pipe(filter(data => !!data))
            .subscribe(data => {

                this.usersData = data.map(item => {
                    return {
                        id: item.payload.doc.id,
                        ...item.payload.doc.data()
                    } as UsersModel;
                });

                this.dataSource = new MatTableDataSource(this.usersData);
            });
    }
}
