package com.intiFormation.controller;

import java.time.LocalDate;
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

import com.intiFormation.entity.Formation;
import com.intiFormation.service.IformateurService;
import com.intiFormation.service.IformationService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class FormationController {
	
	//Attributs
		@Autowired
		IformationService forService; 
		
		@Autowired
		IformateurService fService;


		//Methode inserer
		@PostMapping("/formations/{id}")
		public void inserer (@RequestBody Formation f,
				@PathVariable("id") int idFormateur) 
		{	
			f.setFormateur(fService.chercherParId(idFormateur).get());
			forService.ajouter(f);
		}
		
		//Methode cherchertt
		@GetMapping("/formations")
		public List<Formation> cherchertt()
		{
			List<Formation> liste=forService.chercherTt(); 
			return liste; 
		}
		
		//Methode chercherun
		@GetMapping("/formations/{id}")
		public Formation chercherun(@PathVariable("id") int id) {
			Formation f=forService.chercherParId(id).get(); 
			return f; 
		}
		
		//Methode chercherun par formateur
		@GetMapping("/formationsParFormateur/{id}")
		public Formation chercherParIdFormateur(@PathVariable("id") int id) {
			Formation f=forService.findByFormateur_id(id); 
			return f; 
		}
		
		//Methode supprimer
		@DeleteMapping("/formations/{id}")
		public void supprimer(@PathVariable("id") int id) {
			forService.supprimer(id);
		}
		
		//Methode modifier
		@PutMapping("/formations/{id}")
		public void modifier(@RequestBody Formation f,
				@PathVariable("id") int idFormateur) 
		{	
			f.setFormateur(fService.chercherParId(idFormateur).get());
			forService.ajouter(f); 
		}
		
		//Methode chercherName
		@GetMapping("/formationsName/{libForm}")
		public Formation chercherName(@PathVariable("libForm") String libForm)
		{
			Formation f = forService.getByName(libForm);
					
			return f;
		}
		
		
		//Methode chercherPrix
		@GetMapping("/formationsPrix/{prix}")
		public Formation chercherPrix(@PathVariable("prix") double prix)
		{
			Formation listeF = forService.getByPrice(prix);
					
			return listeF;
		}
		

		@GetMapping("/formationsByIdParticipant/{id}")
		public List<Formation> chercherParIdPar(@PathVariable("id") int id){
			List<Formation> liste=forService.chercherAllParByIdPar(id); 
			return liste; 
		}
		
		@GetMapping("/formationsAVenir/{id}")
		public List<Formation> chercherFormAVenir(@PathVariable("id") int id){
			 LocalDate todaysDate = LocalDate.now();
			List<Formation> liste=forService.chercherFormationsAVenir(todaysDate,id); 
			return liste; 
		}
		
		@GetMapping("/formationsEnCours/{id}")
		public List<Formation> chercherFormEnCours(@PathVariable("id") int id){
			 LocalDate todaysDate = LocalDate.now();
			List<Formation> liste=forService.chercherFormationsEnCours(todaysDate,todaysDate,id); 
			return liste; 
		}
		
		@GetMapping("/formationsArchives/{id}")
		public List<Formation> chercherFormArchives(@PathVariable("id") int id){
			 LocalDate todaysDate = LocalDate.now();
			List<Formation> liste=forService.chercherFormationsArchive(todaysDate,id); 
			return liste; 
		}
		
		@GetMapping("/formationsGratuites")
		public List<Formation> chercherFormationsArchives(){
			List<Formation> liste=forService.chercherFormationsGratuite(); 
			return liste; 
		}

}
