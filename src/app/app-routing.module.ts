import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UsersComponent} from './components/users/users.component';
import {ComingSoonComponent} from './components/coming-soon/coming-soon.component';

const routes: Routes = [
    {path: '', component: UsersComponent},
    {path: 'users', component: UsersComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
