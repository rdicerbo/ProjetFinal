package com.intiFormation.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.intiFormation.entity.Prospect;
import com.intiFormation.service.IprospectService;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UploadController {
	@Autowired
	IprospectService pService;
	/* @GetMapping("/")
	    public String index() {
	        return "index";
	    }*/

	    @PostMapping("/upload-csv-file")
	    public String uploadCSVFile(@RequestParam("file") MultipartFile file) {

	        // validate file
	        if (file.isEmpty()) {
	            System.out.println("vide");
	        } else {

	            // parse CSV file to create a list of `User` objects
	            try (Reader reader = new BufferedReader(new InputStreamReader(file.getInputStream()))) {

	                // create csv bean reader
	                CsvToBean<Prospect> csvToBean = new CsvToBeanBuilder<Prospect>(reader)
	                        .withType(Prospect.class)
	                        .withIgnoreLeadingWhiteSpace(true)
	                        .build();

	                // convert `CsvToBean` object to list of users
	                List<Prospect> prospects = csvToBean.parse();
	                for (Prospect p : prospects) {
	                	pService.ajouter(p);
	                }

	                

	              
	            } catch (Exception ex) {
	               ex.printStackTrace();
	            }
	        }

	        return "file-upload-status";
	    }

}
