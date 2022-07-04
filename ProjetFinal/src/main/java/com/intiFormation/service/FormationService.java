package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IformateurDao;
import com.intiFormation.dao.IformationDao;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Formation;

@Service
public class FormationService implements IformationService{
	

	//Attribut
	@Autowired
	IformationDao fordao;
	
	//Methode ajouter
	public void ajouter (Formation f) 
	{
		fordao.save(f); 
	}

	//Methode chercherParId
	@Override
	public Optional<Formation> chercherParId(int id) 
	{
		return fordao.findById(id);
	}

	//Methode chercher Tt
	@Override
	public List<Formation> chercherTt() 
	{
		return fordao.findAll();
	}

	//Methode supprimer
	@Override
	public void supprimer(int id) 
	{
		fordao.deleteById(id);
	}

	//Methode modifier
	@Override
	public void modifier(Formation f) 
	{
		fordao.save(f); 
	}

	//Methode getByName
	public Formation getByName (String libForm)
	{
		Formation f= fordao.findByLibForm(libForm);
		return f;
			
	}

	//Methode getByPrice
	public Formation getByPrice (double prix)
	{
		Formation listeF=fordao.findByPrixEquals(prix);
		return listeF;
	}
	
	
	
}
