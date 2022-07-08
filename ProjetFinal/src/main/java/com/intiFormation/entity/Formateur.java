package com.intiFormation.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Formateur")
public class Formateur extends Utilisateur{

	@OneToMany(mappedBy="formateur", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
	@JsonIgnore
	private List<Formation> formations;

	public List<Formation> getFormations() {
		return formations;
	}

	public void setFormations(List<Formation> formations) {
		this.formations = formations;
	}

	public Formateur() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
