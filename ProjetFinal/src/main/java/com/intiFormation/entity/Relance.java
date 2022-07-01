package com.intiFormation.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Relance {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idRelance; 
	
	@ManyToOne
	@JoinColumn(name="idParticipant")
	private Participant participant;
	
	@ManyToOne
	@JoinColumn(name="idAssistant")
	private Assistant assistant;

	public Participant getParticipant() {
		return participant;
	}

	public void setParticipant(Participant participant) {
		this.participant = participant;
	}

	public Assistant getAssistant() {
		return assistant;
	}

	public void setAssistant(Assistant assistant) {
		this.assistant = assistant;
	}

	public Relance() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
