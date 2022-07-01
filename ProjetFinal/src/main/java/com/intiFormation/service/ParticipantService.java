package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IparticipantDao;
import com.intiFormation.entity.Participant;

@Service
public class ParticipantService implements IparticipantService{
	@Autowired
	IparticipantDao pdao; 
	
	public void ajouter (Participant p) {
		// TODO Auto-generated method stub
		pdao.save(p); 
	}

	@Override
	public Optional<Participant> chercherParId(int id) {
		// TODO Auto-generated method stub
		return pdao.findById(id);
	}

	@Override
	public List<Participant> chercherTt() {
		// TODO Auto-generated method stub
		return pdao.findAll();
	}

	@Override
	public void supprimer(int id) {
		// TODO Auto-generated method stub
		pdao.deleteById(id);
	}

	@Override
	public void modifier(Participant p) {
		// TODO Auto-generated method stub
		pdao.save(p); 
	}


}
