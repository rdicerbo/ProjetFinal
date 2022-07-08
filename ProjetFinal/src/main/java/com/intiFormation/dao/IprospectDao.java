package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Prospect;

public interface IprospectDao extends JpaRepository<Prospect, Integer>{
	
	public List<Prospect> findByContactsIsNull();
	public List<Prospect> findByContacts_commercial_id(int id);

}
