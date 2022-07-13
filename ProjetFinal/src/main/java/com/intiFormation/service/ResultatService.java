package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IresultatDao;
import com.intiFormation.entity.Resultat;

@Service
public class ResultatService implements IresultatService{
	@Autowired
	IresultatDao rdao; 
	
	public void ajouter (Resultat r) {
		// TODO Auto-generated method stub
		rdao.save(r); 
	}

	@Override
	public Optional<Resultat> chercherParId(int id) {
		// TODO Auto-generated method stub
		return rdao.findById(id);
	}

	@Override
	public List<Resultat> chercherTt() {
		// TODO Auto-generated method stub
		return rdao.findAll();
	}

	@Override
	public void supprimer(int id) {
		// TODO Auto-generated method stub
		rdao.deleteById(id);
	}

	@Override
	public void modifier(Resultat r) {
		// TODO Auto-generated method stub
		rdao.save(r); 
	}

}
