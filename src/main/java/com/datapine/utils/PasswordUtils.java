package com.datapine.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordUtils {
	
	
	
	public static String encrypt(String password){
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String hashedPassword = passwordEncoder.encode(password);		
		return hashedPassword;
	}
	
	
	public static boolean match(String rawpassword, String encryptedPassword){
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		return passwordEncoder.matches(rawpassword, encryptedPassword);
	}
	
	public static void main(String[] args) {
		System.out.println(encrypt("123"));
	}
}
