import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../common/services/users.service';
import {filter} from 'rxjs/operators';

export interface PeriodicElement {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
}

let ELEMENT_DATA;

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    public displayedColumns: string[] = ['id', 'first_name', 'last_name', 'avatar'];
    public dataSource;

    constructor(
        private _usersService: UsersService,
    ) {

    }

    ngOnInit() {
        this.usersList();
    }

    public applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    private usersList () {
        this._usersService.requestForUsersList()
            .pipe(
                filter(data => !!data)
            )
            .subscribe((data: PeriodicElement) => {
                ELEMENT_DATA = data;
                this.dataSource = new MatTableDataSource(ELEMENT_DATA.data);
            });
    }

}
