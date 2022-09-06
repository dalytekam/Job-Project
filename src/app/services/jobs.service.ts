import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Job } from "../models/job.model";

@Injectable({providedIn:"root"})
export class JobsService{
constructor(private http:HttpClient){

}
   getAllJobs():Observable<Job[]>{
    let host = environment.host;
    return this.http.get<Job[]>(host+"/jobs");
   }

   deleteJob(job:Job):Observable<void>{
    let host = environment.host;
    return this.http.delete<void>(host+"/jobs/delete/"+job.id);
   }
  
    saveJob(job:Job):Observable<Job>{
        let host = environment.host;
    return this.http.post<Job>(host+"/jobs/new",job);
    }
    updateJob(job:Job){
        let host = environment.host;
        return this.http.put<Job>(host+"/jobs/update/"+job.id,job);  
    }

    getSingleJob(id:number):Observable<Job>{
        let host = environment.host;
        return this.http.get<Job>(host+"/jobs/"+id);  
    }
}