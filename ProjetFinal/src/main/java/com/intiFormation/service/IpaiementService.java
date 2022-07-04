package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Paiement;

public interface IpaiementService {

	public List<Paiement> chercherAllParByIdPar (int id);
	public void ajouter (Paiement p);
	public Optional<Paiement> chercherParId(int id); 
	public List<Paiement> chercherTt(); 
	public void supprimer(int id); 
	public void modifier(Paiement p); 

}
