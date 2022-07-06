package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Relance;

public interface IrelanceService {

	public List<Relance> chercherAllParByIdPar (int id);
	public void ajouter (Relance r);
	public Optional<Relance> chercherParId(int id); 
	public List<Relance> chercherTt(); 
	public void supprimer(int id); 
	public void modifier(Relance r); 
	public List<Relance> chercherParIdFormIdPar(int idFormation, int idParticipant); 
	

}
