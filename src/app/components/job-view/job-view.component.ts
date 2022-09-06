import { Job } from './../../models/job.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.css']
})
export class JobViewComponent implements OnInit {
  jobId!:number;
  jobFormGroup!:FormGroup;
  constructor(private activatedRoute:ActivatedRoute, 
    private jobsService:JobsService,
    private formBuilder:FormBuilder
   ) {
    this.jobId = activatedRoute.snapshot.params['id'];
   }
  ngOnInit(): void {
    this.jobsService.getSingleJob(this.jobId).subscribe(data=>{
      this.jobFormGroup = this.formBuilder.group({
        id:[data.id,Validators.required],
        status:[data.status, Validators.required],
        description:[data.description,Validators.required]
      })
    })
  }
 
}
