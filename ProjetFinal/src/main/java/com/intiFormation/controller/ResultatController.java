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

import com.intiFormation.entity.Resultat;
import com.intiFormation.service.IresultatService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ResultatController {
	
	@Autowired
	IresultatService rService; 
	
	
	@PostMapping("/resultats")
	public void inserer (@RequestBody Resultat r) {
	
		rService.ajouter(r);
		
	}
	
	@GetMapping("/resultats")
	public List<Resultat> cherchertt(){
		List<Resultat> liste=rService.chercherTt(); 
		return liste; 
	}
	
	@GetMapping("/resultats/{id}")
	public Resultat chercherun(@PathVariable("id") int id) {
		Resultat r=rService.chercherParId(id).get(); 
		return r; 
	}
	
	@DeleteMapping("/resultats/{id}")
	public void supprimer(@PathVariable("id") int id) {
		rService.supprimer(id);
	}
	
	@PutMapping("/resultats")
	public void modifier(@RequestBody Resultat r) {
		rService.ajouter(r); 
	}
	

}
