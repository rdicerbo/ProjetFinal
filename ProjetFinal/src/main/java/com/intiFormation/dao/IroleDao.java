package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Role;

public interface IroleDao extends JpaRepository<Role, Integer>{

	public List<Role> findByUtilisateurs_id(int id);
}
