package com.intiFormation.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Quiz {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idQuiz; 
	
	private String nom; 
	private int nbQuestion; 
	private int scoreReussite; 
	
	@ManyToOne
	@JoinColumn(name="idFormateur")
	private Formateur formateur;
	
	@ManyToOne
	@JoinColumn(name="idFormation")
	private Formation formation;
	
	@OneToMany(mappedBy="quiz", cascade = CascadeType.PERSIST)
	private List<Resultat> resultats;
	
	
	@OneToMany(mappedBy="quiz", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
	@JsonIgnore
	private List<Question> questions;


	public int getIdQuiz() {
		return idQuiz;
	}


	public void setIdQuiz(int idQuiz) {
		this.idQuiz = idQuiz;
	}


	public String getNom() {
		return nom;
	}


	public void setNom(String nom) {
		this.nom = nom;
	}


	public int getNbQuestion() {
		return nbQuestion;
	}


	public void setNbQuestion(int nbQuestion) {
		this.nbQuestion = nbQuestion;
	}


	public int getScoreReussite() {
		return scoreReussite;
	}


	public void setScoreReussite(int scoreReussite) {
		this.scoreReussite = scoreReussite;
	}


	public Formateur getFormateur() {
		return formateur;
	}


	public void setFormateur(Formateur formateur) {
		this.formateur = formateur;
	}


	public Formation getFormation() {
		return formation;
	}


	public void setFormation(Formation formation) {
		this.formation = formation;
	}


	public List<Resultat> getResultats() {
		return resultats;
	}


	public void setResultats(List<Resultat> resultats) {
		this.resultats = resultats;
	}


	public List<Question> getQuestions() {
		return questions;
	}


	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}


	public Quiz() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	

}
