package com.intiFormation.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Choix {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idChoix; 
	
	private String libChoix; 
	private boolean reponse; 
	
	@ManyToOne
	@JoinColumn(name="idQuestion")
	private Question question;

	public int getIdChoix() {
		return idChoix;
	}

	public void setIdChoix(int idChoix) {
		this.idChoix = idChoix;
	}

	public String getLibChoix() {
		return libChoix;
	}

	public void setLibChoix(String libChoix) {
		this.libChoix = libChoix;
	}

	public boolean isReponse() {
		return reponse;
	}

	public void setReponse(boolean reponse) {
		this.reponse = reponse;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	public Choix() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
