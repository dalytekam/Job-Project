import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { HomeComponent } from './components/home/home.component';
import { JobAddComponent } from './components/job-add/job-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobEditComponent } from './components/job-edit/job-edit.component';
import { JobViewComponent } from './components/job-view/job-view.component';
import { JobErrorComponent } from './components/job-error/job-error.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JobsComponent,
    HomeComponent,
    JobAddComponent,
    JobEditComponent,
    JobViewComponent,
    JobErrorComponent

  ],
  imports: [
    BrowserModule,
  
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
