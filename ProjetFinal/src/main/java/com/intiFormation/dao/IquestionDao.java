package com.intiFormation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Question;

public interface IquestionDao extends JpaRepository<Question, Integer>{

}
