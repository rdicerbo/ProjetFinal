package com.intiFormation.controller;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.util.Calendar;
import java.util.Date;
import java.util.Optional;
import java.util.Timer;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.MyConstants;
import com.intiFormation.entity.Participant;
import com.intiFormation.entity.Prospect;
import com.intiFormation.entity.Relance;
import com.intiFormation.entity.Resultat;
import com.intiFormation.entity.Utilisateur;
import com.intiFormation.service.IcommercialService;
import com.intiFormation.service.IcontactService;
import com.intiFormation.service.IparticipantService;
import com.intiFormation.service.IprospectService;

import org.springframework.mail.SimpleMailMessage;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class EmailController {

	 @Autowired
	 public JavaMailSender emailSender;
	 @Autowired
	 IprospectService pService;
	 @Autowired
	 IparticipantService partService;
	 @Autowired
	 IcommercialService cService;
	
	    @GetMapping("/sendEmailInfoProspect/{id}")
	    public String sendSimpleEmail(@PathVariable("id") int id) {
		 
	    	Prospect p = pService.chercherParId(id).get();

	        SimpleMailMessage message = new SimpleMailMessage();
	        
	        message.setTo(p.getEmailProspect());
	        message.setSubject("Votre Formation");
	        message.setText("Vous ??tes bien inscrit ?? la formation\n"+
	       "Votre mot de passe provisoire est 1234\n"+
	       "Votre nom d'utilisateur est" + p.getNomProspect());
	        

	        // Send Message!
	        this.emailSender.send(message);

	        return "message envoye";
	    }
	    
	    
	    @PutMapping("/sendEmailRdv/{id}")
	    public String sendEmailRdv(@PathVariable("id") int id, @RequestBody Contact c) {
		 
	    	Commercial com = cService.chercherParId(id).get();
	        // Create a Simple MailMessage.
	        SimpleMailMessage message = new SimpleMailMessage();
	        
	        message.setTo(com.getMail());
	        message.setSubject("Votre Rdv");
	        message.setText("Vous avez Rendez-vous \n"+
	       " ?? "+ c.getDate() +
	       "\n avec " + c.getProspect().getNomProspect()+" "+ c.getProspect().getPrenomProspect());
	        
	       
	    	Instant instant = c.getDate().minusMinutes(30).atZone(ZoneId.systemDefault()).toInstant();
	    	Date date = Date.from(instant);
	    	System.out.println("----------------");
	    	System.out.println(date);
	    	System.out.println("----------------");

	    	//message.setSentDate(Date.from(Instant.now().plusSeconds(120)));

	        message.setSentDate(date);


	        // Send Message!
	        this.emailSender.send(message);


	        //Timer t = new Timer();
	       // t.schedule(null, null);

	        return "message envoye";
	    }
	    
	    @PutMapping("/sendEmailRelance/{id}")
	    public String sendEmailRelance(@PathVariable("id") int id, @RequestBody Relance r) {
		 
	    	Participant p = partService.chercherParId(id).get();

	        SimpleMailMessage message = new SimpleMailMessage();
	        
	        message.setTo(p.getMail());
	        message.setSubject("Votre Relance");
	        message.setText("Bonjour,\n"+
	       "Nous vous relancons suit ?? l'impay?? de votre formation.\n"+
	       "Votre relance est de " + r.getMontant());
	        

	        // Send Message!
	        this.emailSender.send(message);

	        return "message envoye";
	    }
	    
	    @PutMapping("/sendEmailResultatTest/{id}")
	    public String sendEmailRelance(@PathVariable("id") int id,@RequestBody Resultat r) {
		 
	 
	    	Participant p = partService.chercherParId(id).get();

	        SimpleMailMessage message = new SimpleMailMessage();
	        
	        message.setTo(p.getMail());
	        message.setSubject("Votre Resultat");
	        
	        if(r.isReussite()) {
	        	message.setText("Bonjour,\n"+
	        		       "Veuillez trouvez ci-joint le resultat du quizz associs?? ?? la formation "+ r.getQuiz().getFormation().getLibForm()+".\n"+
	        		       "Vous avez obtenues " + r.getScore() +" points sur "+r.getQuiz().getNbQuestion()+" questions. \n"+
	        		       "Felicitations vous avez valid?? ce test.");
	        	
	        }else {
	        	message.setText("Bonjour,\n"+
	        		       "Veuillez trouvez ci-joint le resultat du quizz associs?? ?? la formation "+ r.getQuiz().getFormation().getLibForm()+".\n"+
	        		       "Vous avez obtenues " + r.getScore()+ " points sur "+r.getQuiz().getNbQuestion()+" questions. \n"+
	        		       "D??sol?? vous avez ??chou?? au test.");
	        }
	        

	        // Send Message!
	        this.emailSender.send(message);

	        return "message envoye";
	    }
	 
}
