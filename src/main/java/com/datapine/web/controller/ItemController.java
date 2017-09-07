package com.datapine.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PostFilter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.datapine.domain.Item;
import com.datapine.service.ItemService;

@RestController
@RequestMapping("/api/items")
public class ItemController {
	
	
	private ItemService itemService;
	
	@RequestMapping(method=RequestMethod.GET, produces="application/json")
	@PostAuthorize("hasPermission(returnObject,read)")
	public Item  listFirstItem(){
		Item items = this.itemService.findItems().get(0);
		return items;
	}
	
	@Autowired
	public void setItemService(ItemService itemservice){
		this.itemService = itemservice;
	}
	
}
