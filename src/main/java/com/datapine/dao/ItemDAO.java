package com.datapine.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.datapine.domain.Item;

public interface ItemDAO extends JpaRepository<Item, Long> {
	
	

}
