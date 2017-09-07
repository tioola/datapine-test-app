package com.datapine.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler;
import org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;
import org.springframework.security.acls.AclPermissionCacheOptimizer;
import org.springframework.security.acls.AclPermissionEvaluator;
import org.springframework.security.acls.jdbc.JdbcMutableAclService;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.method.configuration.GlobalMethodSecurityConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled=true,securedEnabled=true)
public class GlobSecConfing extends GlobalMethodSecurityConfiguration{
	
	@Autowired
	JdbcMutableAclService jdbcMutable;
	
	@Autowired
	DefaultMethodSecurityExpressionHandler expHandler;
	
	@Override
	public MethodSecurityExpressionHandler createExpressionHandler() {		
	    DefaultMethodSecurityExpressionHandler expressionHandler = expHandler;
	    expressionHandler.setPermissionEvaluator(new AclPermissionEvaluator(jdbcMutable));
	    expressionHandler.setPermissionCacheOptimizer(new AclPermissionCacheOptimizer(jdbcMutable));
	    return expressionHandler;
	}


	


}
