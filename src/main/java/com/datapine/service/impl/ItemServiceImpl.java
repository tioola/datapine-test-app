package com.datapine.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.datapine.dao.ItemDAO;
import com.datapine.domain.Item;
import com.datapine.service.ItemService;

@Service
public class ItemServiceImpl implements ItemService {

	private ItemDAO itemDAO;

	public List<Item> findItems() {
		return itemDAO.findAll();
	}
	
	@Autowired
	public void setItemDAO(ItemDAO itemDAO){
		this.itemDAO = itemDAO;
	}
	
}
