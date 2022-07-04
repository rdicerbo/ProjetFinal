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


import com.intiFormation.entity.Prospect;

import com.intiFormation.service.IprospectService;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ProspectController {
	
	@Autowired
	IprospectService pService; 
	


	@PostMapping("/prospects")
	public void inserer (@RequestBody Prospect p) {
	
		pService.ajouter(p);
		
	}
	
	@GetMapping("/prospects")
	public List<Prospect> cherchertt(){
		List<Prospect> liste=pService.chercherTt(); 
		return liste; 
	}
	
	@GetMapping("/prospects/{id}")
	public Prospect chercherun(@PathVariable("id") int id) {
		Prospect p=pService.chercherParId(id).get(); 
		return p; 
	}
	
	@DeleteMapping("/prospects/{id}")
	public void supprimer(@PathVariable("id") int id) {
		pService.supprimer(id);
	}
	
	@PutMapping("/prospects")
	public void modifier(@RequestBody Prospect p) {
		pService.ajouter(p); 
	}

	@GetMapping("/prospectsSansContact")
	public List<Prospect> chercherContactNull(){
		List<Prospect> liste=pService.findByContactsIsNull(); 
		return liste; 
	}
}
