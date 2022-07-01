package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IassistantDao;
import com.intiFormation.entity.Assistant;

@Service
public class AssistantService implements IassistantService{
	@Autowired
	IassistantDao adao; 
	
	public void ajouter (Assistant a) {
		// TODO Auto-generated method stub
		adao.save(a); 
	}

	@Override
	public Optional<Assistant> chercherParId(int id) {
		// TODO Auto-generated method stub
		return adao.findById(id);
	}

	@Override
	public List<Assistant> chercherTt() {
		// TODO Auto-generated method stub
		return adao.findAll();
	}

	@Override
	public void supprimer(int id) {
		// TODO Auto-generated method stub
		adao.deleteById(id);
	}

	@Override
	public void modifier(Assistant a) {
		// TODO Auto-generated method stub
		adao.save(a); 
	}

}
