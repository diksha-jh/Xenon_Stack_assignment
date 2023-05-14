package com.example.crud.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.crud.model.ContactUs;
import com.example.crud.model.Student;

import com.example.crud.services.ServiceImpl;
@CrossOrigin
@RestController
public class Contoller {
	@Autowired
	ServiceImpl serv;
	
	@PostMapping("reg")
	public String registerStudent(@RequestBody Student s) {
		String str=serv.registerStud(s);
		if(str=="Registered") {
			System.out.print(str);
			return "Registered";
		}
		else {
		
			return "User Already Exist";
		}
	}
	
	@PostMapping("login")
	public Student loginStud(@RequestBody Student s) {
		Student s1=serv.loginStud(s);
		if(s1==null) {
			return new Student();
		}
		else {
			return s1;
		}
	}
	@PostMapping("contact")
	public String contactUs(@RequestBody ContactUs c) {
		String str=serv.contactUs(c);
		if(str=="saved") {
			System.out.print(str);
			return "saved";
		}
		else {
		
			return "Not saved";
		}
	}

}
