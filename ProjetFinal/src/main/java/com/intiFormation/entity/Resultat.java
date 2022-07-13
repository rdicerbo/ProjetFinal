package com.intiFormation.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Resultat {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idResultat; 
	
	private int score; 
	private boolean reussite;  
	
	@ManyToOne
	@JoinColumn(name="idQuiz")
	private Quiz quiz;
	
	@ManyToOne
	@JoinColumn(name="idParticipant")
	private Participant participant;

	public int getIdResultat() {
		return idResultat;
	}

	public void setIdResultat(int idResultat) {
		this.idResultat = idResultat;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public boolean isReussite() {
		return reussite;
	}

	public void setReussite(boolean reussite) {
		this.reussite = reussite;
	}

	public Quiz getQuiz() {
		return quiz;
	}

	public void setQuiz(Quiz quiz) {
		this.quiz = quiz;
	}

	public Participant getParticipant() {
		return participant;
	}

	public void setParticipant(Participant participant) {
		this.participant = participant;
	}

	public Resultat() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	

}
