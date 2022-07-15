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

import com.intiFormation.entity.Question;
import com.intiFormation.service.IquestionService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class QuestionController {
	
	@Autowired
	IquestionService qService; 
	
	
	@PostMapping("/questions")
	public void inserer (@RequestBody Question q) {
	
		qService.ajouter(q);
		
	}
	
	@GetMapping("/questions")
	public List<Question> cherchertt(){
		List<Question> liste=qService.chercherTt(); 
		return liste; 
	}
	
	@GetMapping("/questions/{id}")
	public Question chercherun(@PathVariable("id") int id) {
		Question q=qService.chercherParId(id).get(); 
		return q; 
	}
	
	@DeleteMapping("/questions/{id}")
	public void supprimer(@PathVariable("id") int id) {
		qService.supprimer(id);
	}
	
	@PutMapping("/questions")
	public void modifier(@RequestBody Question q) {
		qService.ajouter(q); 
	}
	
	@GetMapping("/questionsByIdQuiz/{id}")
	public List<Question> chercherttbyIdQuiz(@PathVariable("id") int id){
		List<Question> liste=qService.findByQuiz_idQuiz(id); 
		return liste; 
	}


}
