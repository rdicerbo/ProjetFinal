package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Participant;

public interface IparticipantDao extends JpaRepository<Participant, Integer>{
	public List<Participant> findByFormations_idFormation(int id);
}
