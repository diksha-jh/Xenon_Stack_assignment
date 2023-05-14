package com.example.crud.services;

import com.example.crud.model.ContactUs;
import com.example.crud.model.Student;

@org.springframework.stereotype.Service
public interface CrudService {
	String registerStud(Student s);
	Student loginStud(Student s);
	String contactUs(ContactUs c);
}
