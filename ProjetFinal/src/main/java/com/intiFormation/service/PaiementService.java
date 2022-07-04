package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IpaiementDao;
import com.intiFormation.entity.Paiement;

@Service
public class PaiementService implements IpaiementService{
	@Autowired
	IpaiementDao pdao;

	@Override
	public List<Paiement> chercherAllParByIdPar(int id) {
		// TODO Auto-generated method stub
		List<Paiement> listeP=pdao.findByParticipant_id(id);
		return listeP;
	}
	

	public void ajouter (Paiement p) {
		// TODO Auto-generated method stub
		pdao.save(p); 
	}

	@Override
	public Optional<Paiement> chercherParId(int id) {
		// TODO Auto-generated method stub
		return pdao.findById(id);
	}

	@Override
	public List<Paiement> chercherTt() {
		// TODO Auto-generated method stub
		return pdao.findAll();
	}

	@Override
	public void supprimer(int id) {
		// TODO Auto-generated method stub
		pdao.deleteById(id);
	}

	@Override
	public void modifier(Paiement p) {
		// TODO Auto-generated method stub
		pdao.save(p); 
	}
	

}
