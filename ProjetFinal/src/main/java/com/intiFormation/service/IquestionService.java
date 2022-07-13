package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Question;

public interface IquestionService {
	public void ajouter (Question q);
	public Optional<Question> chercherParId(int id); 
	public List<Question> chercherTt(); 
	public void supprimer(int id); 
	public void modifier(Question q); 
}
