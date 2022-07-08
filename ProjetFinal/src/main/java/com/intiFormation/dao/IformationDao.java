package com.intiFormation.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Formation;

public interface IformationDao extends JpaRepository<Formation, Integer>{
	
	public Formation findByLibForm(String libForm);

	public Formation findByPrixEquals(double prix);

	public List<Formation> findByFormateur_id(int id);

	public List<Formation> findByDateDebutAfterAndFormateur_id(LocalDate dateAjd,int id);
	public List<Formation> findByDateFinBeforeAndFormateur_id(LocalDate dateAjd,int id);
	public List<Formation> findByDateFinAfterAndDateDebutBeforeAndFormateur_id(LocalDate dateAjd,LocalDate dateAjd2,int id);
	
	
	public List<Formation> findByDateDebutAfterAndParticipants_id(LocalDate dateAjd,int id);
	public List<Formation> findByDateFinBeforeAndParticipants_id(LocalDate dateAjd,int id);
	public List<Formation> findByDateFinAfterAndDateDebutBeforeAndParticipants_id(LocalDate dateAjd,LocalDate dateAjd2,int id);
	
	public List<Formation> findByParticipants_id(int id);
	public List<Formation> findByPrix(double prix);

}
