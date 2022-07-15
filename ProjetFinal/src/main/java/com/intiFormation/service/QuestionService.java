package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IquestionDao;
import com.intiFormation.entity.Question;

@Service
public class QuestionService implements IquestionService{
	
	@Autowired
	IquestionDao qdao; 
	
	public void ajouter (Question q) {
		// TODO Auto-generated method stub
		qdao.save(q); 
	}

	@Override
	public Optional<Question> chercherParId(int id) {
		// TODO Auto-generated method stub
		return qdao.findById(id);
	}

	@Override
	public List<Question> chercherTt() {
		// TODO Auto-generated method stub
		return qdao.findAll();
	}

	@Override
	public void supprimer(int id) {
		// TODO Auto-generated method stub
		qdao.deleteById(id);
	}

	@Override
	public void modifier(Question q) {
		// TODO Auto-generated method stub
		qdao.save(q); 
	}

	@Override
	public List<Question> findByQuiz_idQuiz(int id) {
		// TODO Auto-generated method stub
		return qdao.findByQuiz_idQuiz(id);
	}


}
