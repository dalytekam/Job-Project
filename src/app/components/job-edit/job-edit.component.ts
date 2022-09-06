import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent implements OnInit {
  jobId!:number;
  jobFormGroup!:FormGroup;
  submitted:boolean =false;
  constructor(private activatedRoute:ActivatedRoute, 
    private jobsService:JobsService,
    private formBuilder:FormBuilder,
    private router:Router) {
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
  onUpdateJob(){
    this.submitted=true;
    if(this.jobFormGroup.invalid){return;}
    this.jobsService.updateJob(this.jobFormGroup?.value).subscribe(data=>{
      alert("Job updated successfully!");
      this.router.navigateByUrl("/jobs");
    });
  }
}
