package com.intiFormation.controller;

import java.io.ByteArrayInputStream;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Participant;
import com.intiFormation.service.IformationService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class PdfController {
	
	@Autowired
	IformationService fservice;
	
	// Générer PDF
		 @PostMapping(value = "/pdfreport/{id}",
		            produces = MediaType.APPLICATION_PDF_VALUE)
		    public ResponseEntity<InputStreamResource> formationReport(@RequestBody Participant p, @PathVariable("id")
		    int idFormation) {

			 	List<Formation> f = fservice.chercherAllParByIdPar(p.getId());
			 	Formation formation = new Formation();
			 	for (Formation fo: f) {
			 		if(fo.getIdFormation()== idFormation) {
			 			formation = fo;
			 		}
			 	}
			 	

		        ByteArrayInputStream bis = GeneratePdfReport.formationReport(formation);

		        HttpHeaders headers = new HttpHeaders();
		        headers.add("Content-Disposition", "inline; filename=Formationreport.pdf");

		        return ResponseEntity
		                .ok()
		                .headers(headers)
		                .contentType(MediaType.APPLICATION_PDF)
		                .body(new InputStreamResource(bis));
		    }
		 
		

}
