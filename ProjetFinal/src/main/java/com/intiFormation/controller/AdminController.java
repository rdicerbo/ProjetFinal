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
import com.intiFormation.entity.Role;
import com.intiFormation.entity.Utilisateur;
import com.intiFormation.service.IadminService;
import com.intiFormation.service.IroleService;
import com.intiFormation.service.IutilisateurService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AdminController {
	@Autowired
	IadminService aService; 
	
	@Autowired
	IutilisateurService uService; 
	
	@Autowired
	IroleService rService; 
	
	@Autowired
	BCryptPasswordEncoder bc; 
	

	@PostMapping("/admins")
	public void inserer (@RequestBody Admin a) {
		a.setPassword(bc.encode(a.getPassword()));
		aService.ajouter(a);
		Utilisateur u=uService.chercherParId(a.getId()).get();
		List<Role> r= new ArrayList<Role>(); 
		r.add(rService.chercherParId(1).get());
		r.add(rService.chercherParId(2).get());
		r.add(rService.chercherParId(3).get());
		r.add(rService.chercherParId(4).get());
		r.add(rService.chercherParId(5).get());
		u.setRoles(r);
		uService.ajouter(u);
	}
	
	@GetMapping("/admins")
	public List<Admin> cherchertt(){
		List<Admin> liste=aService.chercherTt(); 
		return liste; 
	}
	
	@GetMapping("/admins/{id}")
	public Admin chercherun(@PathVariable("id") int id) {
		Admin a=aService.chercherParId(id).get(); 
		return a; 
	}
	
	@DeleteMapping("/admins/{id}")
	public void supprimer(@PathVariable("id") int id) {
		aService.supprimer(id);
	}
	
	@PutMapping("/admins")
	public void modifier(@RequestBody Admin a) {
		aService.ajouter(a); 
	}
	
}