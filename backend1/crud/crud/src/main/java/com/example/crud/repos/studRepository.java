package com.example.crud.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.crud.model.Student;
@Repository
public interface studRepository extends JpaRepository<Student,Integer> {
	@Query("SELECT s from Student s where s.email=:email")
	public Student findByEmail(String email);
	
	@Query("SELECT s from Student s where s.email=:email and s.pass=:pass")
	public Student findStudent(String email,String pass);
}
