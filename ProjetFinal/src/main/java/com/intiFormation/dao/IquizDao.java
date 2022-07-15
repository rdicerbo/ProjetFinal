package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Quiz;

public interface IquizDao extends JpaRepository<Quiz, Integer>{
	public List<Quiz> findByFormation_idFormation(int idFormation);

}
