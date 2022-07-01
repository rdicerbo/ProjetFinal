package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Admin;
import com.intiFormation.entity.Utilisateur;

public interface IadminDao extends JpaRepository<Admin, Integer>{
}
