package com.intiFormation.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="Admin")
public class Admin extends Utilisateur {
	
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}

}
