package com.intiFormation.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Contact {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idContact; 
	
	@ManyToOne
	@JoinColumn(name="idCommercial")
	private Commercial commercial;
	
	
	@ManyToOne
	@JoinColumn(name="idProspect")
	private Prospect prospect;
	
	private String commentaire;
	private LocalDateTime date;
	
	private boolean appOuRdv;
	

	public boolean isAppOuRdv() {
		return appOuRdv;
	}

	public void setAppOuRdv(boolean appOuRdv) {
		this.appOuRdv = appOuRdv;
	}

	
	public String getCommentaire() {
		return commentaire;
	}

	public void setCommentaire(String commentaire) {
		this.commentaire = commentaire;
	}

	

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	public int getIdContact() {
		return idContact;
	}

	public void setIdContact(int idContact) {
		this.idContact = idContact;
	}

	public Commercial getCommercial() {
		return commercial;
	}

	public void setCommercial(Commercial commercial) {
		this.commercial = commercial;
	}

	public Prospect getProspect() {
		return prospect;
	}

	public void setProspect(Prospect prospect) {
		this.prospect = prospect;
	}

	public Contact() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
