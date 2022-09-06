import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/models/job.model';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
jobs?:Job[];
  constructor(private jobsService:JobsService, private router:Router) { }

  ngOnInit(): void {
    this.ongetAllJobs();
  }

   ongetAllJobs(){
    this.jobsService.getAllJobs().subscribe(data=>{
      this.jobs =data;
    });
   }

  onDelete(job:Job){
    let response = confirm("This Job will be Deleted! Are you sure?");
    if(response==true){
    this.jobsService.deleteJob(job).subscribe(data=>{
      this.ongetAllJobs();
    });
  }
  }
  onEdit(job:Job){
    this.router.navigateByUrl("jobs/update/"+job.id)

  }
  onNewJob(){
    this.router.navigateByUrl("jobs/new");
  }

  onView(job:Job){
    this.router.navigateByUrl("jobs/"+job.id);
  }
}
