package com.example.crud.model;

import jakarta.persistence.GenerationType;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter

@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Student {
@Id
@GeneratedValue(strategy =GenerationType.IDENTITY)
private int id;
private String fname;
private String lname;
private String mobileNo;
private String email;
private String pass;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}

public String getMobileNo() {
	return mobileNo;
}
public void setMobileNo(String mobileNo) {
	this.mobileNo = mobileNo;
}

public String getFname() {
	return fname;
}
public void setFname(String fname) {
	this.fname = fname;
}
public String getLname() {
	return lname;
}
public void setLname(String lname) {
	this.lname = lname;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPass() {
	return pass;
}
public void setPass(String pass) {
	this.pass = pass;
}

}
