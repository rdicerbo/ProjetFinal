package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Quiz;

public interface IquizService {
	public void ajouter (Quiz q);
	public Optional<Quiz> chercherParId(int id); 
	public List<Quiz> chercherTt(); 
	public void supprimer(int id); 
	public void modifier(Quiz q); 

}
