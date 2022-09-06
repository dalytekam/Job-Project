import { Router } from '@angular/router';

import { JobsService } from 'src/app/services/jobs.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Job } from 'src/app/models/job.model';



@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.css']
})
export class JobAddComponent implements OnInit {

  job?:Job;
  jobFormGroup!:FormGroup;
  submitted:boolean = false;

  constructor(private formBuilder:FormBuilder, 
    private JobsService: JobsService, 
    private router:Router) { }

  ngOnInit(): void {
    this.jobFormGroup = this.formBuilder.group({
      status:["",Validators.required],
      description:["",Validators.required]
    })
  }

  onSaveJob(){
   this.submitted= true;
   if(this.jobFormGroup.invalid){return;}
  this.JobsService.saveJob(this.jobFormGroup?.value).subscribe(data=>{ 
    this.job = data;
    alert("The newly added Job has the Id " + this.job?.id);
  this.router.navigateByUrl("jobs");
  
 });
 
  }

}
