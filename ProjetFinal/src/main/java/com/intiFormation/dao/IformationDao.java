package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Formation;

public interface IformationDao extends JpaRepository<Formation, Integer>{
	
	public Formation findByLibForm(String libForm);
	public List<Formation> findByPrixEquals(double prix);

	public Formation findByFormateur_id(int id);

	public List<Formation> findByParticipants_id(int id);

	
}
