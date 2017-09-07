package com.datapine.aop;

import org.aopalliance.intercept.Joinpoint;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class SecurityAOP {
	
	private static Logger logger = LogManager.getLogger(SecurityAOP.class);
	
	
	
	
	@Before("execution(* com.datapine.security.UserDetailsServiceImpl.loadUserByUsername(..))")
	public void beforeAuthenticate(JoinPoint joinPoint){
		logger.info("User trying to authenticate with user =" + joinPoint.getArgs()[0]);
	}
}
