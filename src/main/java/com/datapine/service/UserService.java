package com.datapine.service;

import java.util.List;

import com.datapine.domain.User;

public interface UserService {

	User register(String email, String password);

	User updatePassword(Long userId, String oldPassword, String newPassword);

	User findUserByEmail(String email);
	
	User findUser(Long id);
	
	void deleteUser(Long id);
	
	List<User> findUsers();
	
	// add more methods here

}
