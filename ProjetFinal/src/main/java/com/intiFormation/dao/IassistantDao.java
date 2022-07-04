package com.intiFormation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Formation;

public interface IassistantDao extends JpaRepository<Assistant, Integer>{

	public Assistant findByNom(String nom);
}
