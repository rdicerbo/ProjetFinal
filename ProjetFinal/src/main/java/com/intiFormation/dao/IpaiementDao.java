package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Paiement;

public interface IpaiementDao extends JpaRepository<Paiement, Integer>{
	public List<Paiement> findByParticipant_id(int id);

}
