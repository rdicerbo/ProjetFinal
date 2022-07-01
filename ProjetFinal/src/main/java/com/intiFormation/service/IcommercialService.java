package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Admin;
import com.intiFormation.entity.Commercial;

public interface IcommercialService {
	public void ajouter (Commercial c);
	public Optional<Commercial> chercherParId(int id); 
	public List<Commercial> chercherTt(); 
	public void supprimer(int id); 
	public void modifier(Commercial c); 
}
