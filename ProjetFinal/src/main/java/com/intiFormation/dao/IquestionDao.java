package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Question;

public interface IquestionDao extends JpaRepository<Question, Integer>{
	public List<Question> findByQuiz_idQuiz(int id);
}
