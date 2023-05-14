package com.example.crud.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.example.crud.model.ContactUs;
import com.example.crud.model.Student;
import com.example.crud.repos.ContactRepository;
import com.example.crud.repos.studRepository;

@Service
public class ServiceImpl implements CrudService {
	@Lazy
	@Autowired
studRepository std;
	@Autowired
	ContactRepository cr;

	@Override
	public String registerStud(Student s) {
		Student s2=std.findByEmail(s.getEmail());
		if(s2==null) {
			std.save(s);
			return "Registered";
		}
		else {
			
			return "Not Registered";
		}
		
	}

	@Override
	public Student loginStud(Student s) {
		Student s2=std.findStudent(s.getEmail(), s.getPass());
		if(s2==null) {
			return new Student();
		}
		else{
			return s2;
		}
	}

	@Override
	public String contactUs(ContactUs c) {
		Student s2=std.findByEmail(c.getEmail());
		if(s2==null) {
			return "Not saved";
		}
		else {
			cr.save(c);
			return "saved";
			
		}
	}

	
	
	
}
