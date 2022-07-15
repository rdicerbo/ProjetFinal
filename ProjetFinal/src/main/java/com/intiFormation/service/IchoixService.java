package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Choix;

public interface IchoixService {
	public void ajouter (Choix c);
	public Optional<Choix> chercherParId(int id); 
	public List<Choix> chercherTt(); 
	public void supprimer(int id); 
	public void modifier(Choix c); 
	public List<Choix> findByQuestion_idQuestion(int id);

}
