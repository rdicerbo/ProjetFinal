package com.intiFormation.entity;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Formation {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idFormation;
	
	private String libForm;
	private String description;
	private LocalDate dateDebut; 
	private LocalDate dateFin;
	private double prix;
	private String pdf; 
	
	@ManyToOne
	@JoinColumn(name="idFormateur")
	private Formateur formateur;
	
	@ManyToMany(mappedBy = "formations")
	@JsonIgnore
	private List<Participant> participants;
	
	
	@OneToMany(mappedBy="formation")
	@JsonIgnore
	private List<Paiement> paiements;
	
	@OneToMany(mappedBy="formationR")
	@JsonIgnore
	private List<Relance> relances;
	
	
	public String getPdf() {
		return pdf;
	}
	public void setPdf(String pdf) {
		this.pdf = pdf;
	}
	public Formateur getFormateur() {
		return formateur;
	}
	public void setFormateur(Formateur formateur) {
		this.formateur = formateur;
	}
	public List<Participant> getParticipants() {
		return participants;
	}
	public void setParticipants(List<Participant> participants) {
		this.participants = participants;
	}
	public int getIdFormation() {
		return idFormation;
	}
	public void setIdFormation(int idFormation) {
		this.idFormation = idFormation;
	}
	public String getLibForm() {
		return libForm;
	}
	public void setLibForm(String libForm) {
		this.libForm = libForm;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public LocalDate getDateDebut() {
		return dateDebut;
	}
	public void setDateDebut(LocalDate dateDebut) {
		this.dateDebut = dateDebut;
	}
	public LocalDate getDateFin() {
		return dateFin;
	}
	public void setDateFin(LocalDate dateFin) {
		this.dateFin = dateFin;
	}
	public double getPrix() {
		return prix;
	}
	public void setPrix(double prix) {
		this.prix = prix;
	}
	public Formation() {
		super();
		// TODO Auto-generated constructor stub
	}
	public List<Paiement> getPaiements() {
		return paiements;
	}
	public void setPaiements(List<Paiement> paiements) {
		this.paiements = paiements;
	}
	public List<Relance> getRelances() {
		return relances;
	}
	public void setRelances(List<Relance> relances) {
		this.relances = relances;
	}
	
	

}
