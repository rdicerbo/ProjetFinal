package com.intiFormation.entity;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Relance {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idRelance; 
	
	private LocalDate date; 
	private double montant;
	
	@ManyToOne
	@JoinColumn(name="idParticipant")
	private Participant participant;
	
	@ManyToOne
	@JoinColumn(name="idAssistant")
	private Assistant assistant;
	
	@ManyToOne
	@JoinColumn(name="idFormation")
	private Formation formationR;

	
	
	public int getIdRelance() {
		return idRelance;
	}

	public void setIdRelance(int idRelance) {
		this.idRelance = idRelance;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public double getMontant() {
		return montant;
	}

	public void setMontant(double montant) {
		this.montant = montant;
	}

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

	public Formation getFormationR() {
		return formationR;
	}

	public void setFormationR(Formation formation) {
		this.formationR = formation;
	}
	
	

}
