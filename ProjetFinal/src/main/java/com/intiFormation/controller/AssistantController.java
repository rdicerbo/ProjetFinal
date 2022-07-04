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

import com.intiFormation.entity.Admin;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Role;
import com.intiFormation.entity.Utilisateur;
import com.intiFormation.service.IadminService;
import com.intiFormation.service.IassistantService;
import com.intiFormation.service.IroleService;
import com.intiFormation.service.IutilisateurService;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AssistantController {
	@Autowired
	IassistantService aService; 
	
	@Autowired
	IutilisateurService uService; 
	
	@Autowired
	IroleService rService; 
	
	@Autowired
	BCryptPasswordEncoder bc; 
	

	@PostMapping("/assistants")
	public void inserer (@RequestBody Assistant a) {
		a.setPassword(bc.encode(a.getPassword()));
		aService.ajouter(a);
		Utilisateur u=uService.chercherParId(a.getId()).get();
		List<Role> r= new ArrayList<Role>(); 
		r.add(rService.chercherParId(3).get());
		u.setRoles(r);
		uService.ajouter(u);
	}
	
	@GetMapping("/assistants")
	public List<Assistant> cherchertt(){
		List<Assistant> liste=aService.chercherTt(); 
		return liste; 
	}
	
	@GetMapping("/assistants/{id}")
	public Assistant chercherun(@PathVariable("id") int id) {
		Assistant a=aService.chercherParId(id).get(); 
		return a; 
	}
	
	@DeleteMapping("/assistants/{id}")
	public void supprimer(@PathVariable("id") int id) {
		aService.supprimer(id);
	}
	
	@PutMapping("/assistants")
	public void modifier(@RequestBody Assistant a) {
		aService.ajouter(a); 
	}
	
	//Methode chercherName
	@GetMapping("/assistantsByName/{nom}")
	public Assistant chercherName(@PathVariable("nom") String nom)
	{
		Assistant a = aService.getByName(nom);
				
		return a;
	}
	
}
