package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IadminDao;
import com.intiFormation.entity.Admin;

@Service
public class AdminService implements IadminService{
	@Autowired
	IadminDao adao; 
	
	public void ajouter (Admin a) {
		// TODO Auto-generated method stub
		adao.save(a); 
	}

	@Override
	public Optional<Admin> chercherParId(int id) {
		// TODO Auto-generated method stub
		return adao.findById(id);
	}

	@Override
	public List<Admin> chercherTt() {
		// TODO Auto-generated method stub
		return adao.findAll();
	}

	@Override
	public void supprimer(int id) {
		// TODO Auto-generated method stub
		adao.deleteById(id);
	}

	@Override
	public void modifier(Admin a) {
		// TODO Auto-generated method stub
		adao.save(a); 
	}


}
