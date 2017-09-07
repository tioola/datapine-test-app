package com.datapine.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.datapine.domain.User;

public class CustomAuthenticationUser implements UserDetails {
	
	private static final long serialVersionUID = 1L;
	
	private String username;
	private String password;
	private List<? extends GrantedAuthority> roles;
	
	public CustomAuthenticationUser(User user) {
		this.username = user.getEmail();
		this.password = user.getPassword();
		
		List<SimpleGrantedAuthority> def = new ArrayList<>();
		def.add(new SimpleGrantedAuthority(user.getRole()));

		this.roles = def;		
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return roles;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
