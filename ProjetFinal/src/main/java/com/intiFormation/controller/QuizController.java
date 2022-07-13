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

import com.intiFormation.entity.Quiz;
import com.intiFormation.service.IquizService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class QuizController {
	@Autowired
	IquizService qService; 
	
	
	@PostMapping("/quizs")
	public void inserer (@RequestBody Quiz q) {
	
		qService.ajouter(q);
		
	}
	
	@GetMapping("/quizs")
	public List<Quiz> cherchertt(){
		List<Quiz> liste=qService.chercherTt(); 
		return liste; 
	}
	
	@GetMapping("/quizs/{id}")
	public Quiz chercherun(@PathVariable("id") int id) {
		Quiz q=qService.chercherParId(id).get(); 
		return q; 
	}
	
	@DeleteMapping("/quizs/{id}")
	public void supprimer(@PathVariable("id") int id) {
		qService.supprimer(id);
	}
	
	@PutMapping("/quizs")
	public void modifier(@RequestBody Quiz q) {
		qService.ajouter(q); 
	}

}
