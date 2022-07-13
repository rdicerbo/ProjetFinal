package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Resultat;

public interface IresultatService {
	public void ajouter (Resultat r);
	public Optional<Resultat> chercherParId(int id); 
	public List<Resultat> chercherTt(); 
	public void supprimer(int id); 
	public void modifier(Resultat r); 

}
