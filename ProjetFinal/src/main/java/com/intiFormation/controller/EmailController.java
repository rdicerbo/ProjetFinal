package com.intiFormation.controller;

import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.intiFormation.entity.Contact;
import com.intiFormation.entity.MyConstants;
import com.intiFormation.entity.Prospect;
import com.intiFormation.entity.Utilisateur;
import com.intiFormation.service.IcontactService;

import org.springframework.mail.SimpleMailMessage;

@Controller
public class EmailController {

	 @Autowired
	 public JavaMailSender emailSender;
	 @Autowired
	 IcontactService commandeService;
	 
	
	    @GetMapping("/sendSimpleEmail")
	    public String sendSimpleEmail(Prospect p) {
		 
		 /*Utilisateur u =(Utilisateur)s.getAttribute("u");
		 Contact contact = (Contact)s.getAttribute("contact");*/
		 
		 //Récupération des ligneCommandes de la commande
		/* Optional<Commande> oc = commandeService.selectByIdCommande(commande.getIdCommande());
		 if(oc.isPresent()) {
			 commande=oc.get();
		 }*/
		
	        // Create a Simple MailMessage.
	        SimpleMailMessage message = new SimpleMailMessage();
	        
	        message.setTo(p.getEmailProspect());
	        message.setSubject("Votre Formation");
	       message.setText("BlaBla");
	        message.setText(p.toString());

	        // Send Message!
	        this.emailSender.send(message);

	        return "message envoye";
	    }
	 
}
