package com.datapine.dao;

import java.util.Iterator;

import org.springframework.data.jpa.repository.JpaRepository;

import com.datapine.domain.User;

/**
 * 
 * @author Diogo
 *
 *	There is no need to create an implementation, Spring will do it on the fly based on the method names.
 *
 */
public interface UserDAO extends JpaRepository<User, Long>{

//	User findById(Long id);

	User findOneByEmail(String email);

//	Iterator<User> findAllOrderById();

}
