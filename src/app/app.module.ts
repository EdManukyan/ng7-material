import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
import {MainNavComponent} from './main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {UsersComponent} from './components/users/users.component';
import {ComingSoonComponent} from './components/coming-soon/coming-soon.component';
import {UsersFormComponent} from './components/users/add-user/users-form.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {UsersService} from './common/services/users.service';

import {environment} from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        MainNavComponent,
        UsersComponent,
        UsersFormComponent,
        ComingSoonComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        LayoutModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
    ],
    providers: [UsersService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
