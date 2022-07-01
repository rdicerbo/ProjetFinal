package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Formateur;

public interface IformateurService {
	
	public void ajouter (Formateur f);
	public Optional<Formateur> chercherParId(int id); 
	public List<Formateur> chercherTt(); 
	public void supprimer(int id); 
	public void modifier(Formateur f); 

}
