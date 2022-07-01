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
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Role;
import com.intiFormation.entity.Utilisateur;
import com.intiFormation.service.IadminService;
import com.intiFormation.service.IformateurService;
import com.intiFormation.service.IroleService;
import com.intiFormation.service.IutilisateurService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class FormateurController {
	
	//Attributs
	@Autowired
	IformateurService fService; 
	
	@Autowired
	IutilisateurService uService; 
	
	@Autowired
	IroleService rService; 
	
	@Autowired
	BCryptPasswordEncoder bc; 
	

	//Methode inserer
	@PostMapping("/formateurs")
	public void inserer (@RequestBody Formateur f) {
		f.setPassword(bc.encode(f.getPassword()));
		fService.ajouter(f);
		Utilisateur u=uService.chercherParId(f.getId()).get();
		List<Role> r= new ArrayList<Role>(); 
		r.add(rService.chercherParId(5).get());
		u.setRoles(r);
		uService.ajouter(u);
	}
	
	//Methode cherchertt
	@GetMapping("/formateurs")
	public List<Formateur> cherchertt(){
		List<Formateur> liste=fService.chercherTt(); 
		return liste; 
	}
	
	//Methode chercherun
	@GetMapping("/formateurs/{id}")
	public Formateur chercherun(@PathVariable("id") int id) {
		Formateur f=fService.chercherParId(id).get(); 
		return f; 
	}
	
	//Methode supprimer
	@DeleteMapping("/formateurs/{id}")
	public void supprimer(@PathVariable("id") int id) {
		fService.supprimer(id);
	}
	
	//Methode modifier
	@PutMapping("/formateurs")
	public void modifier(@RequestBody Formateur f) {
		fService.ajouter(f); 
	}
	

}
