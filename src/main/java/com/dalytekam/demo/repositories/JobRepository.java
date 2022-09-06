package com.dalytekam.demo.repositories;

import com.dalytekam.demo.entities.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {
}
