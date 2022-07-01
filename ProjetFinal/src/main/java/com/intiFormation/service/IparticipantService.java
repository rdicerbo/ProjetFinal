package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Participant;

public interface IparticipantService {
	public void ajouter (Participant p);
	public Optional<Participant> chercherParId(int id); 
	public List<Participant> chercherTt(); 
	public void supprimer(int id); 
	public void modifier(Participant a); 


}
