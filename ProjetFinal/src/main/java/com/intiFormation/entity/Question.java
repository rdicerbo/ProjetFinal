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
public class Question {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idQuestion; 
	
	private String explication;
	private String libQuestion; 

	@ManyToOne
	@JoinColumn(name="idQuiz")
	private Quiz quiz;
	
	@OneToMany(mappedBy="question", cascade = CascadeType.PERSIST)
	@JsonIgnore
	private List<Choix> choix;

	public int getIdQuestion() {
		return idQuestion;
	}

	public void setIdQuestion(int idQuestion) {
		this.idQuestion = idQuestion;
	}

	public String getExplication() {
		return explication;
	}

	public void setExplication(String explication) {
		this.explication = explication;
	}

	public String getLibQuestion() {
		return libQuestion;
	}

	public void setLibQuestion(String libQuestion) {
		this.libQuestion = libQuestion;
	}

	public Quiz getQuiz() {
		return quiz;
	}

	public void setQuiz(Quiz quiz) {
		this.quiz = quiz;
	}

	public List<Choix> getChoix() {
		return choix;
	}

	public void setChoix(List<Choix> choix) {
		this.choix = choix;
	}

	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}

