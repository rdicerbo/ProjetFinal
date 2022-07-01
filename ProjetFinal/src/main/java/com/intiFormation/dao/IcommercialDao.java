package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Commercial;

public interface IcommercialDao extends JpaRepository<Commercial, Integer>{
	public Commercial findByUsername(String username); 
	public List<Commercial> findByRoles_IdRole(int id);
}
