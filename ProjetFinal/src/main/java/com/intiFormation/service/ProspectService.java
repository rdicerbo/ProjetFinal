package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IprospectDao;
import com.intiFormation.entity.Prospect;

@Service
public class ProspectService implements IprospectService {
	
	@Autowired
	IprospectDao pdao; 
	
	public void ajouter (Prospect p) {
		// TODO Auto-generated method stub
		pdao.save(p); 
	}

	@Override
	public Optional<Prospect> chercherParId(int id) {
		// TODO Auto-generated method stub
		return pdao.findById(id);
	}

	@Override
	public List<Prospect> chercherTt() {
		// TODO Auto-generated method stub
		return pdao.findAll();
	}

	@Override
	public void supprimer(int id) {
		// TODO Auto-generated method stub
		pdao.deleteById(id);
	}

	@Override
	public void modifier(Prospect p) {
		// TODO Auto-generated method stub
		pdao.save(p); 
	}
	
	public List<Prospect> findByContactsIsNull(){
		return pdao.findByContactsIsNull();
	}

}
