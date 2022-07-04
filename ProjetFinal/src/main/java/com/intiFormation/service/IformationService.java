package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Formation;

public interface IformationService {
	
	public void ajouter (Formation f);
	public Optional<Formation> chercherParId(int id); 
	public List<Formation> chercherTt(); 
	public void supprimer(int id); 
	public void modifier(Formation f); 
	public Formation getByName (String libForm);
	public List<Formation> getByPrice (double prix);
<<<<<<< HEAD
	
	public Formation findByFormateur_id(int id);
=======
	public List<Formation> chercherAllParByIdPar (int id);
	
>>>>>>> main
}
