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

import com.intiFormation.entity.Choix;
import com.intiFormation.service.IchoixService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ChoixController {

	@Autowired
	IchoixService cService; 
	
	@PostMapping("/choix")
	public void inserer (@RequestBody Choix c) {
	
		cService.ajouter(c);
		
	}
	@GetMapping("/choix")
	public List<Choix> cherchertt(){
		List<Choix> liste=cService.chercherTt(); 
		return liste; 
	}
	
	@GetMapping("/choix/{id}")
	public Choix chercherun(@PathVariable("id") int id) {
		Choix c=cService.chercherParId(id).get(); 
		return c; 
	}
	
	@DeleteMapping("/choix/{id}")
	public void supprimer(@PathVariable("id") int id) {
		cService.supprimer(id);
	}
	
	@PutMapping("/choix")
	public void modifier(@RequestBody Choix c) {
		cService.ajouter(c); 
	}

}
