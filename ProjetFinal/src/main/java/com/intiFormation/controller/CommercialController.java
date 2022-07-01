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
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Role;
import com.intiFormation.entity.Utilisateur;
import com.intiFormation.service.IcommercialService;
import com.intiFormation.service.IroleService;
import com.intiFormation.service.IutilisateurService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class CommercialController {
	
	@Autowired
	IcommercialService cService; 
	
	@Autowired
	IutilisateurService uService; 
	
	@Autowired
	IroleService rService; 
	
	@Autowired
	BCryptPasswordEncoder bc; 
	
	
	@PostMapping("/commerciales")
	public void inserer (@RequestBody Commercial a) {
		a.setPassword(bc.encode(a.getPassword()));
		cService.ajouter(a);
		Utilisateur u=uService.chercherParId(a.getId()).get();
		List<Role> r= new ArrayList<Role>(); 
		r.add(rService.chercherParId(2).get());
	
		u.setRoles(r);
		uService.ajouter(u);
	}
	
	@GetMapping("/commerciales")
	public List<Commercial> cherchertt(){
		List<Commercial> liste=cService.chercherTt(); 
		return liste; 
	}
	
	@GetMapping("/commerciales/{id}")
	public Commercial chercherun(@PathVariable("id") int id) {
		Commercial a=cService.chercherParId(id).get(); 
		return a; 
	}
	
	@DeleteMapping("/commerciales/{id}")
	public void supprimer(@PathVariable("id") int id) {
		cService.supprimer(id);
	}
	
	@PutMapping("/commerciales")
	public void modifier(@RequestBody Commercial a) {
		cService.ajouter(a); 
	}
	

}
