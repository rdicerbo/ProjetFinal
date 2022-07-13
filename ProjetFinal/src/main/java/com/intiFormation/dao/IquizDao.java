package com.intiFormation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Quiz;

public interface IquizDao extends JpaRepository<Quiz, Integer>{

}
