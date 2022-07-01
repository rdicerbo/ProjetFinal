package com.intiFormation.service;


import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Admin;

public interface IadminService {
	public void ajouter (Admin a);
	public Optional<Admin> chercherParId(int id); 
	public List<Admin> chercherTt(); 
	public void supprimer(int id); 
	public void modifier(Admin a); 
}
