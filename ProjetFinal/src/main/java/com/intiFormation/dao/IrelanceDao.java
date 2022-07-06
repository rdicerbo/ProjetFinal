package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Paiement;
import com.intiFormation.entity.Relance;

public interface IrelanceDao extends JpaRepository<Relance, Integer>{
	public List<Relance> findByParticipant_id(int id);

	public List<Relance> findByFormationR_idFormationAndParticipant_id(int idFormation, int idParticipant);

}
