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

import com.intiFormation.entity.Participant;
import com.intiFormation.entity.Relance;
import com.intiFormation.service.IrelanceService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class RelanceController {
	//Attributs
	@Autowired
	IrelanceService rService; 
	
	@GetMapping("/relancesByIdParticipant/{id}")
	public List<Relance> chercherParIdPar(@PathVariable("id") int id){
		List<Relance> liste=rService.chercherAllParByIdPar(id); 
		return liste; 
	}
	
	@PostMapping("/relances")
	public void inserer (@RequestBody Relance r) {
	
		rService.ajouter(r);
		
	}
	
	@GetMapping("/relances")
	public List<Relance> cherchertt(){
		List<Relance> liste=rService.chercherTt(); 
		return liste; 
	}
	
	@GetMapping("/relances/{id}")
	public Relance chercherun(@PathVariable("id") int id) {
		Relance r=rService.chercherParId(id).get(); 
		return r; 
	}
	
	@DeleteMapping("/relances/{id}")
	public void supprimer(@PathVariable("id") int id) {
		rService.supprimer(id);
	}
	
	@PutMapping("/relances")
	public void modifier(@RequestBody Relance r) {
		rService.ajouter(r); 
	}
	
	@PutMapping("/relancesByIdParticipantFormation/{idFormation}")
	public List<Relance> chercherParIdPar(@PathVariable("idFormation") int id,
			@RequestBody Participant p){
		List<Relance> liste=rService.chercherParIdFormIdPar(id,p.getId()); 
		return liste; 
	}
	


}
