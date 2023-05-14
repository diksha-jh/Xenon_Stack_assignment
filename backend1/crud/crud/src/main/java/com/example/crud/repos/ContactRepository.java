package com.example.crud.repos;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.crud.model.ContactUs;

public interface ContactRepository extends JpaRepository<ContactUs, Integer>{

}
