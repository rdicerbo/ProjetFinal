package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IformateurDao;
import com.intiFormation.entity.Admin;
import com.intiFormation.entity.Formateur;

@Service
public class FormateurService implements IformateurService{

	//Attribut
	@Autowired
	IformateurDao fdao;
	
	//Methode ajouter
	public void ajouter (Formateur f) 
	{
		fdao.save(f); 
	}

	//Methode chercherParId
	@Override
	public Optional<Formateur> chercherParId(int id) 
	{
		return fdao.findById(id);
	}

	//Methode chercher Tt
	@Override
	public List<Formateur> chercherTt() 
	{
		return fdao.findAll();
	}

	//Methode supprimer
	@Override
	public void supprimer(int id) 
	{
		fdao.deleteById(id);
	}

	//Methode modifier
	@Override
	public void modifier(Formateur f) 
	{
		fdao.save(f); 
	}


}

