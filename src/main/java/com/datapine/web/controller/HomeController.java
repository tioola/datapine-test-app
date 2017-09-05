package com.datapine.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class HomeController {

	/*
	 * This controller will only work, if the Spring MVC settings are set
	 * completely and correctly (just as a hint).
	 */


	public ResponseEntity<Map<String, String>>  showWelcome() {
		Map<String,String> info = new HashMap<>();
		info.put("authenticated","true");		
		return ResponseEntity.ok(info);
		
	}

}
