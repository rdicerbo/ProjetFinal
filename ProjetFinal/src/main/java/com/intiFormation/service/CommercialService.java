package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IcommercialDao;
import com.intiFormation.entity.Admin;
import com.intiFormation.entity.Commercial;

@Service
public class CommercialService implements IcommercialService {
	
	@Autowired
	IcommercialDao cdao; 
	
	public void ajouter (Commercial c) {
		// TODO Auto-generated method stub
		cdao.save(c); 
	}

	@Override
	public Optional<Commercial> chercherParId(int id) {
		// TODO Auto-generated method stub
		return cdao.findById(id);
	}

	@Override
	public List<Commercial> chercherTt() {
		// TODO Auto-generated method stub
		return cdao.findAll();
	}

	@Override
	public void supprimer(int id) {
		// TODO Auto-generated method stub
		cdao.deleteById(id);
	}

	@Override
	public void modifier(Commercial c) {
		// TODO Auto-generated method stub
		cdao.save(c); 
	}

}
