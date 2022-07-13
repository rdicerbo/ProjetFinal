package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IquizDao;
import com.intiFormation.entity.Quiz;

@Service
public class QuizService implements IquizService{
	@Autowired
	IquizDao qdao; 
	
	public void ajouter (Quiz q) {
		// TODO Auto-generated method stub
		qdao.save(q); 
	}

	@Override
	public Optional<Quiz> chercherParId(int id) {
		// TODO Auto-generated method stub
		return qdao.findById(id);
	}

	@Override
	public List<Quiz> chercherTt() {
		// TODO Auto-generated method stub
		return qdao.findAll();
	}

	@Override
	public void supprimer(int id) {
		// TODO Auto-generated method stub
		qdao.deleteById(id);
	}

	@Override
	public void modifier(Quiz q) {
		// TODO Auto-generated method stub
		qdao.save(q); 
	}


}
