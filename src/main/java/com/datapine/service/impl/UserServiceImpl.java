package com.datapine.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.datapine.dao.UserDAO;
import com.datapine.domain.User;
import com.datapine.service.UserService;
import com.datapine.utils.PasswordUtils;

@Service
public class UserServiceImpl implements UserService{
	
	private UserDAO userDAO;
	
	@Override
	public User register(String email, String password) {
		User user = new User(email);
		user.setPassword(PasswordUtils.encrypt(password));
		User savedUser = userDAO.save(user);
		return savedUser;
	}

	@Override
	public User updatePassword(Long userId, String oldPassword, String newPassword) {
		
		User user = userDAO.findOne(userId);		
		if(user == null){
			throw new IllegalArgumentException("User does not exist and therefore cannot be updated");
		}
		
		user.setPassword(PasswordUtils.encrypt(newPassword));
		userDAO.save(user);
		return user;
	}


	@Override
	public User findUserByEmail(String email) {
		return this.userDAO.findOneByEmail(email);
	}

	@Override
	public List<User> findUsers() {
		List<User> users = this.userDAO.findAllByOrderByIdDesc();
		users.stream().forEach(u -> u.setPassword(null));
		return users;
	}

	@Override
	public void deleteUser(Long id) {
		this.userDAO.delete(id);
	}


	@Override
	public User findUser(Long id) {
		return this.userDAO.findOne(id);
	}

	@Autowired
	public void setUserDAO(UserDAO userDAO){
		this.userDAO = userDAO;
	}

	
	
}
