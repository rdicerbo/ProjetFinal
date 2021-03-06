package com.intiFormation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.intiFormation.entity.Role;
import com.intiFormation.entity.Utilisateur;
import com.intiFormation.service.IroleService;
import com.intiFormation.service.IutilisateurService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UtilisateurController {
	@Autowired
	IutilisateurService uService; 
	
	@Autowired
	IroleService rService;
	
	@Autowired
	BCryptPasswordEncoder bc; 
	
	@GetMapping("/utilisateursByRole/{id}")
	public List<Utilisateur> chercherParRole(@PathVariable("id") int id){
		List<Utilisateur> liste=uService.chercherParRole(id);
		return liste; 
	}
	
	@GetMapping("/utilisateurs/{id}")
	public Utilisateur chercherParId(@PathVariable("id") int id){
		Utilisateur u=uService.chercherParId(id).get(); 
		return u; 
	}
	
	
	@GetMapping("/utilisateursByUsername/{username}")
	public Utilisateur chercherParRole(@PathVariable("username") String username){
		Utilisateur u=uService.chercherParUsername(username); 
		return u; 
	}
	
	@PutMapping("/utilisateurs/")
	public void modifier(@RequestBody Utilisateur u){
		uService.modifier(u); 
		
	}

	
	

}
