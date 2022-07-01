package com.intiFormation.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="Participant")
public class Participant extends Utilisateur{
	
	@ManyToMany(cascade = CascadeType.PERSIST)
	@JoinTable(name="T_Formation_Participants",joinColumns = @JoinColumn(name="idParticipant"),inverseJoinColumns = @JoinColumn(name="idFormation"))
	private List<Formation> formations;
	
	@OneToMany(mappedBy="participant", cascade = CascadeType.PERSIST)
	private List<Paiement> paiements;
	
	@OneToMany(mappedBy="participant", cascade = CascadeType.PERSIST)
	private List<Relance> relances;

	public List<Formation> getFormations() {
		return formations;
	}

	public void setFormations(List<Formation> formations) {
		this.formations = formations;
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

	public Participant() {
		super();
		// TODO Auto-generated constructor stub
	}

}
