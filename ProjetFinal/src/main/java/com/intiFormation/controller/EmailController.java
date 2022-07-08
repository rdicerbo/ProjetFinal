package com.intiFormation.controller;

import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.intiFormation.entity.Contact;
import com.intiFormation.entity.MyConstants;
import com.intiFormation.entity.Utilisateur;
import com.intiFormation.service.IcontactService;

import org.springframework.mail.SimpleMailMessage;

@Controller
public class EmailController {

	 @Autowired
	 public JavaMailSender emailSender;
	 @Autowired
	 IcontactService commandeService;
	 
	 @ResponseBody
	    @RequestMapping("/sendSimpleEmail")
	    public String sendSimpleEmail(HttpSession s) {
		 
		 Utilisateur u =(Utilisateur)s.getAttribute("u");
		 Contact contact = (Contact)s.getAttribute("contact");
		 
		 //Récupération des ligneCommandes de la commande
		/* Optional<Commande> oc = commandeService.selectByIdCommande(commande.getIdCommande());
		 if(oc.isPresent()) {
			 commande=oc.get();
		 }*/
		
	        // Create a Simple MailMessage.
	        SimpleMailMessage message = new SimpleMailMessage();
	        
	        message.setTo(u.getMail());
	        message.setSubject("Votre Commande");
	       // message.setText(commandeService.findByUtilsateur(u).toString());
	        message.setText(contact.toString());

	        // Send Message!
	        this.emailSender.send(message);

	        return "redirect:/AfficherCommande";
	    }
	 
}
