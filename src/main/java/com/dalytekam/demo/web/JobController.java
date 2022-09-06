package com.dalytekam.demo.web;

import com.dalytekam.demo.entities.Job;
import com.dalytekam.demo.services.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin()
public class JobController {
    @Autowired
    private JobService jobService;

    @GetMapping("/jobs")
    public List<Job> getJobs() {
        return jobService.getAllJobs();
    }

    @GetMapping("/jobs/{id}")
    public Job getSingleJob(@PathVariable Long id)  {
        return jobService.getSingleJob(id);
    }

    @PutMapping("jobs/update/{id}")
    public void updateJob(@PathVariable Long id , @RequestBody Job job){
         jobService.updateJob(id,job);
    }
    @DeleteMapping("/jobs/delete/{id}")
    public void deleteFriend(@PathVariable Long id){
        jobService.deleteJob(id);
    }
    @PostMapping("/jobs/new")
    public Job addNewJob(@RequestBody Job job){
      return  jobService.addJob(job);
    }
}