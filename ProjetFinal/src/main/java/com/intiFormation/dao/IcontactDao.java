package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Contact;

public interface IcontactDao extends JpaRepository<Contact, Integer>{

	public List<Contact> getByCommercial_id(int id);
	
	public Contact getByProspect_idProspect(int id);
}
