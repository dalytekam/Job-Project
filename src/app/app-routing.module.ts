import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobAddComponent } from './components/job-add/job-add.component';
import { JobEditComponent } from './components/job-edit/job-edit.component';
import { JobErrorComponent } from './components/job-error/job-error.component';
import { JobViewComponent } from './components/job-view/job-view.component';
import { JobsComponent } from './components/jobs/jobs.component';

const routes: Routes = [
  { path : "jobs",  component : JobsComponent },
  { path : "jobs/new",  component : JobAddComponent },
  { path : "jobs/update/:id",  component : JobEditComponent },
  { path : "jobs/:id", component: JobViewComponent},
  { path : "",  component : HomeComponent }, 
  { path : '**', component:JobErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
