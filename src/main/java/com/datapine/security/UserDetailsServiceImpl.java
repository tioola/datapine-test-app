package com.datapine.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.datapine.dao.UserDAO;
import com.datapine.domain.User;

@Component("userDetailsServiceDefaultImpl")
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserDAO userDAO;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userDAO.findOneByEmail(username);
		
		if(user == null){
			throw new UsernameNotFoundException("User not found");
		}
		
		return new CustomAuthenticationUser(user);
	}

}
