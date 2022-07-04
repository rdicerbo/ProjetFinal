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

import com.intiFormation.entity.Contact;
import com.intiFormation.service.IcontactService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ContactController {
	
	
	@Autowired
	IcontactService cService; 
	
	@PostMapping("/contacts")
	public void inserer (@RequestBody Contact c) {
	
		cService.ajouter(c);
		
	}
	@GetMapping("/contacts")
	public List<Contact> cherchertt(){
		List<Contact> liste=cService.chercherTt(); 
		return liste; 
	}
	
	@GetMapping("/contacts/{id}")
	public Contact chercherun(@PathVariable("id") int id) {
		Contact c=cService.chercherParId(id).get(); 
		return c; 
	}
	
	@DeleteMapping("/contacts/{id}")
	public void supprimer(@PathVariable("id") int id) {
		cService.supprimer(id);
	}
	
	@PutMapping("/contacts")
	public void modifier(@RequestBody Contact c) {
		cService.ajouter(c); 
	}
	
	// Liste des contacts par id Commercial
	@GetMapping("/contactsIdCommercial/{id}")
	public List<Contact> chercherunParIdCommercial(@PathVariable("id") int id) {
		List<Contact> liste=cService.findByCommercial_id(id); 
		return liste; 
	}
	
	@GetMapping("/contactsIdProsptect/{id}")
	public Contact chercherunProspect(@PathVariable("id") int id) {
		Contact c=cService.getByProspect_idProspect(id); 
		return c; 
	}
}
