package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Assistant;

public interface IassistantService {
	public void ajouter (Assistant a);
	public Optional<Assistant> chercherParId(int id); 
	public List<Assistant> chercherTt(); 
	public void supprimer(int id); 
	public void modifier(Assistant a); 

}
