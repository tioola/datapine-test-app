package com.datapine.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.util.AntPathMatcher;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsServiceImpl detailsService;
	
	@Autowired
	private AuthenticationSuccessHandler successHandler;
	
	@Autowired
	private AuthenticationFailureHandler failureHandler;
	
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
			
			.antMatchers("/static/**").permitAll()
			.antMatchers("/console/**").permitAll()
			.antMatchers("/api/**").hasAnyRole("USER","ADMIN","READER")
			.and().csrf().disable()
			.formLogin()				
				.loginPage("/index.html")				
				.loginProcessingUrl("/api/auth")
				.successHandler(successHandler)
				.failureHandler(failureHandler)
				.usernameParameter("username")
				.passwordParameter("password")
			.and()
				.logout()
			.logoutRequestMatcher(new AntPathRequestMatcher("/api/logout"));
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(detailsService).passwordEncoder(new BCryptPasswordEncoder());
	}
	
}
