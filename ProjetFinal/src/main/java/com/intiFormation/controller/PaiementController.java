package com.intiFormation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.intiFormation.entity.Paiement;
import com.intiFormation.entity.Participant;
import com.intiFormation.service.IpaiementService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class PaiementController {
	//Attributs
			@Autowired
			IpaiementService pService; 
	
	@GetMapping("/paiementsByIdParticipant/{id}")
	public List<Paiement> chercherParIdPar(@PathVariable("id") int id){
		List<Paiement> liste=pService.chercherAllParByIdPar(id); 
		return liste; 
	}
	
	@PostMapping("/paiements")
	public void inserer (@RequestBody Paiement p) {
	
		pService.ajouter(p);
		
	}
	
	@GetMapping("/paiements")
	public List<Paiement> cherchertt(){
		List<Paiement> liste=pService.chercherTt(); 
		return liste; 
	}
	
	@GetMapping("/paiements/{id}")
	public Paiement chercherun(@PathVariable("id") int id) {
		Paiement p=pService.chercherParId(id).get(); 
		return p; 
	}
	
	@DeleteMapping("/paiements/{id}")
	public void supprimer(@PathVariable("id") int id) {
		pService.supprimer(id);
	}
	
	@PutMapping("/paiements")
	public void modifier(@RequestBody Paiement p) {
		pService.ajouter(p); 
	}
	
	
	//Methode recupLastPaiement 
	@PutMapping("/dernierPaiement/{idFormation}")
	public Paiement recupLastPaiement(@PathVariable("idFormation") int id,
			@RequestBody Participant p)
	{
		List<Paiement> listeP=pService.chercherParIdForm(id,p.getId());
		return listeP.get(listeP.size()-1);

	}



}
