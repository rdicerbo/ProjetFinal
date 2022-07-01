package com.intiFormation.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="Assistant")
public class Assistant extends Utilisateur {
	
	@OneToMany(mappedBy="assistant", cascade = CascadeType.PERSIST)
	private List<Relance> relances;

	public List<Relance> getRelances() {
		return relances;
	}

	public void setRelances(List<Relance> relances) {
		this.relances = relances;
	}

	public Assistant() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
