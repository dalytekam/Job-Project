package com.dalytekam.demo.services;

import com.dalytekam.demo.entities.Job;
import com.dalytekam.demo.repositories.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {
   @Autowired
    private JobRepository jobRepository;

    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public List<Job> getAllJobs(){
       return jobRepository.findAll();
    }
    public  Job addJob(Job job){
      Job jobToAdd =  jobRepository.save(job);
      return jobToAdd;
    }

    public void updateJob(Long id, Job job){
        Job jobToUpdate = jobRepository.findById(id).get();
        jobToUpdate.setStatus(job.getStatus());
        jobToUpdate.setDescription(job.getDescription());
        jobRepository.save(jobToUpdate);
    }
    public void deleteJob(Long id){
        jobRepository.deleteById(id);
     }
    public Job getSingleJob(Long id) {
        Job jobToFind = jobRepository.findById(id).get();
        return jobToFind;
    }
}
