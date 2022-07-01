package com.intiFormation.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="Commercial")
public class Commercial extends Utilisateur{
	
	@OneToMany(mappedBy="commercial", cascade = CascadeType.PERSIST)
	private List<Contact> contacts;

	public List<Contact> getContacts() {
		return contacts;
	}

	public void setContacts(List<Contact> contacts) {
		this.contacts = contacts;
	}

	public Commercial() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
