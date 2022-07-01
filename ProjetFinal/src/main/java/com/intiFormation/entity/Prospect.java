package com.intiFormation.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Prospect {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idProspect;
	
	private String nomProspect;
	private String prenomProspect;
	private String numTel;
	private String emailProspect;
	
	@OneToMany(mappedBy="prospect", cascade = CascadeType.PERSIST)
	private List<Contact> contacts;
	
	
	
	public List<Contact> getContacts() {
		return contacts;
	}
	public void setContacts(List<Contact> contacts) {
		this.contacts = contacts;
	}
	public Prospect() {
		super();
	}
	public int getIdProspect() {
		return idProspect;
	}
	public void setIdProspect(int idProspect) {
		this.idProspect = idProspect;
	}
	public String getNomProspect() {
		return nomProspect;
	}
	public void setNomProspect(String nomProspect) {
		this.nomProspect = nomProspect;
	}
	public String getPrenomProspect() {
		return prenomProspect;
	}
	public void setPrenomProspect(String prenomProspect) {
		this.prenomProspect = prenomProspect;
	}
	public String getNumTel() {
		return numTel;
	}
	public void setNumTel(String numTel) {
		this.numTel = numTel;
	}
	public String getEmailProspect() {
		return emailProspect;
	}
	public void setEmailProspect(String emailProspect) {
		this.emailProspect = emailProspect;
	} 
	

}
