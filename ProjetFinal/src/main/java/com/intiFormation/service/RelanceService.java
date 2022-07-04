package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IrelanceDao;
import com.intiFormation.entity.Relance;

@Service
public class RelanceService implements IrelanceService{
	
	@Autowired
	IrelanceDao rdao;

	@Override
	public List<Relance> chercherAllParByIdPar(int id) {
		// TODO Auto-generated method stub
		List<Relance> listeR=rdao.findByParticipant_id(id);
		return listeR;
	} 
	

	public void ajouter (Relance r) {
		// TODO Auto-generated method stub
		rdao.save(r); 
	}

	@Override
	public Optional<Relance> chercherParId(int id) {
		// TODO Auto-generated method stub
		return rdao.findById(id);
	}

	@Override
	public List<Relance> chercherTt() {
		// TODO Auto-generated method stub
		return rdao.findAll();
	}

	@Override
	public void supprimer(int id) {
		// TODO Auto-generated method stub
		rdao.deleteById(id);
	}

	@Override
	public void modifier(Relance r) {
		// TODO Auto-generated method stub
		rdao.save(r); 
	}
	
	
}
