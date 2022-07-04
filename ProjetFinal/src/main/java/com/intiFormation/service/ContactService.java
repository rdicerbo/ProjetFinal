package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IcontactDao;
import com.intiFormation.entity.Contact;

@Service
public class ContactService implements IcontactService{

	@Autowired
	IcontactDao cdao; 
	
	public void ajouter (Contact c) {
		// TODO Auto-generated method stub
		cdao.save(c); 
	}

	@Override
	public Optional<Contact> chercherParId(int id) {
		// TODO Auto-generated method stub
		return cdao.findById(id);
	}

	@Override
	public List<Contact> chercherTt() {
		// TODO Auto-generated method stub
		return cdao.findAll();
	}

	@Override
	public void supprimer(int id) {
		// TODO Auto-generated method stub
		cdao.deleteById(id);
	}

	@Override
	public void modifier(Contact c) {
		// TODO Auto-generated method stub
		cdao.save(c); 
	}
	
	public List<Contact> findByCommercial_id(int id){
		return cdao.getByCommercial_id(id);
	}
	
	public Contact getByProspect_idProspect(int id) {
		return cdao.getByProspect_idProspect(id);
	}

}
