package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Prospect;

public interface IprospectService {
	
	public void ajouter (Prospect p);
	public Optional<Prospect> chercherParId(int id); 
	public List<Prospect> chercherTt(); 
	public void supprimer(int id); 
	public void modifier(Prospect p); 
	public List<Prospect> findByContactsIsNull();
	public List<Prospect> findByContacts_commercial_id(int id);

}
