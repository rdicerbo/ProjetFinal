package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IchoixDao;
import com.intiFormation.entity.Choix;

@Service
public class ChoixService implements IchoixService {
	@Autowired
	IchoixDao cdao; 
	
	public void ajouter (Choix c) {
		// TODO Auto-generated method stub
		cdao.save(c); 
	}

	@Override
	public Optional<Choix> chercherParId(int id) {
		// TODO Auto-generated method stub
		return cdao.findById(id);
	}

	@Override
	public List<Choix> chercherTt() {
		// TODO Auto-generated method stub
		return cdao.findAll();
	}

	@Override
	public void supprimer(int id) {
		// TODO Auto-generated method stub
		cdao.deleteById(id);
	}

	@Override
	public void modifier(Choix c) {
		// TODO Auto-generated method stub
		cdao.save(c); 
	}

	@Override
	public List<Choix> findByQuestion_idQuestion(int id) {
		
		return findByQuestion_idQuestion(id);
	}

}
