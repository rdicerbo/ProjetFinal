package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Contact;

public interface IcontactService {
	
	public void ajouter (Contact p);
	public Optional<Contact> chercherParId(int id); 
	public List<Contact> chercherTt(); 
	public void supprimer(int id); 
	public void modifier(Contact p); 
	
	public List<Contact> findByCommercial_id(int id);


}
