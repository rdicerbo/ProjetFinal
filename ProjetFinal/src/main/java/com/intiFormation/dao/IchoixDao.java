package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Choix;

public interface IchoixDao extends JpaRepository<Choix, Integer>{
	public List<Choix> findByQuestion_idQuestion(int id);

}
