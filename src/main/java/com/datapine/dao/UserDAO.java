package com.datapine.dao;

import java.util.Iterator;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.datapine.domain.User;

/**
 * 
 * @author Diogo
 *
 *	There is no need to create an implementation, Spring will do it on the fly based on the method names based on the JPARepository.
 *
 */
public interface UserDAO extends JpaRepository<User, Long>{

//	User findById(Long id);
	
	
	List<User> findAllByOrderByIdDesc();
	
	User findOneByEmail(String email);

	//Example of query how it would be  in JPQL
	//@Query("SELECT u FROM User u WHERE u.email = ?1 ")
	//User findOneByEmail(String email);

//	Iterator<User> findAllOrderById();

}
