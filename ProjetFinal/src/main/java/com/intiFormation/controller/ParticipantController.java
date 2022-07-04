package com.intiFormation.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Participant;
import com.intiFormation.entity.Role;
import com.intiFormation.entity.Utilisateur;
import com.intiFormation.service.IformationService;
import com.intiFormation.service.IparticipantService;
import com.intiFormation.service.IroleService;
import com.intiFormation.service.IutilisateurService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ParticipantController {
	@Autowired
	IparticipantService pService; 
	
	@Autowired
	IutilisateurService uService; 
	
	@Autowired
	IroleService rService; 
	
	@Autowired
	IformationService fService; 
	
	@Autowired
	BCryptPasswordEncoder bc; 
	

	@PostMapping("/participants/{id}")
	public void inserer (@RequestBody Participant p,@PathVariable("id") int idFormateur) {
		p.setPassword(bc.encode(p.getPassword()));
		pService.ajouter(p);
		Utilisateur u=uService.chercherParId(p.getId()).get();
		List<Role> r= new ArrayList<Role>(); 
		r.add(rService.chercherParId(4).get());
		u.setRoles(r);
		uService.ajouter(u);
		
		//Ajouter formation au participant
		List<Formation> f= new ArrayList<Formation>(); 
		f.add(fService.chercherParId(idFormateur).get());
		p.setFormations(f);
		pService.ajouter(p);
	}
	
	
	@GetMapping("/participants")
	public List<Participant> cherchertt(){
		List<Participant> liste=pService.chercherTt(); 
		return liste; 
	}
	
	@GetMapping("/participants/{id}")
	public Participant chercherun(@PathVariable("id") int id) {
		Participant p=pService.chercherParId(id).get(); 
		return p; 
	}
	
	@DeleteMapping("/participants/{id}")
	public void supprimer(@PathVariable("id") int id) {
		pService.supprimer(id);
	}
	
	@PutMapping("/participants/{id}")
	public void modifier(@RequestBody Participant p,@PathVariable("id") int idFormateur) {
		List<Formation> f= new ArrayList<Formation>(); 
		f.add(fService.chercherParId(idFormateur).get());
		p.setFormations(f);
		pService.ajouter(p);
	}

}
