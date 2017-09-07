package com.datapine.security;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.ehcache.EhCacheFactoryBean;
import org.springframework.cache.ehcache.EhCacheManagerFactoryBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler;
import org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;
import org.springframework.security.acls.AclPermissionCacheOptimizer;
import org.springframework.security.acls.AclPermissionEvaluator;
import org.springframework.security.acls.domain.AclAuthorizationStrategy;
import org.springframework.security.acls.domain.AclAuthorizationStrategyImpl;
import org.springframework.security.acls.domain.ConsoleAuditLogger;
import org.springframework.security.acls.domain.DefaultPermissionGrantingStrategy;
import org.springframework.security.acls.domain.EhCacheBasedAclCache;
import org.springframework.security.acls.jdbc.BasicLookupStrategy;
import org.springframework.security.acls.jdbc.JdbcMutableAclService;
import org.springframework.security.acls.jdbc.LookupStrategy;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.method.configuration.GlobalMethodSecurityConfiguration;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

/**
 * This is another way to create your ACL configuration
 * @author root
 *
 */
public class ACLConfig  {
	
	@Autowired
	DataSource dataSource;


	@Bean
	public EhCacheBasedAclCache aclCache() {
	    return new EhCacheBasedAclCache(aclEhCacheFactoryBean().getObject(), permissionGrantingStrategy(), aclAuthorizationStrategy());
	}

	@Bean
	public EhCacheFactoryBean aclEhCacheFactoryBean() {
	    EhCacheFactoryBean ehCacheFactoryBean = new EhCacheFactoryBean();
	    ehCacheFactoryBean.setCacheManager(aclCacheManager().getObject());
	    ehCacheFactoryBean.setCacheName("aclCache");
	    return ehCacheFactoryBean;
	}

	@Bean
	public EhCacheManagerFactoryBean aclCacheManager() {
	    return new EhCacheManagerFactoryBean();
	}

	@Bean
	public DefaultPermissionGrantingStrategy permissionGrantingStrategy() {
	    ConsoleAuditLogger consoleAuditLogger = new ConsoleAuditLogger();
	    return new DefaultPermissionGrantingStrategy(consoleAuditLogger);
	}

	@Bean
	public AclAuthorizationStrategy aclAuthorizationStrategy() {
	    return new AclAuthorizationStrategyImpl(new SimpleGrantedAuthority("ROLE_ADMIN"));
	}

	@Bean
	public LookupStrategy lookupStrategy() {
	    return new BasicLookupStrategy(dataSource, aclCache(), aclAuthorizationStrategy(), new ConsoleAuditLogger());
	}

	@Bean
	public JdbcMutableAclService aclService() {
	    JdbcMutableAclService service = new JdbcMutableAclService(dataSource, lookupStrategy(), aclCache());
	    return service;
	}

	@Bean
	public DefaultMethodSecurityExpressionHandler defaultMethodSecurityExpressionHandler() {
	    return new DefaultMethodSecurityExpressionHandler();
	}

	
//	@Bean
//	public MethodSecurityExpressionHandler createExpressionHandler() {
//	    DefaultMethodSecurityExpressionHandler expressionHandler = defaultMethodSecurityExpressionHandler();
//	    expressionHandler.setPermissionEvaluator(new AclPermissionEvaluator(aclService()));
//	    expressionHandler.setPermissionCacheOptimizer(new AclPermissionCacheOptimizer(aclService()));
//	    return expressionHandler;
//	}

	

}
