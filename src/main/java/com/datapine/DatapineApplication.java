package com.datapine;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.ImportResource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;

import com.datapine.security.GlobSecConfing;


@SpringBootApplication
@EnableAspectJAutoProxy
@EnableJpaRepositories({"com.datapine.dao"})
@EnableCaching
@ComponentScan(value={"com.datapine"}, basePackageClasses=GlobSecConfing.class)
@ImportResource("classpath:app-config.xml")//This is configuring the ACL (made in XML) due to a bug in GlobalMethodConfiguration injection
public class DatapineApplication {	
	
	public static void main(String[] args) {		
		SpringApplication.run(DatapineApplication.class , args);
	}
}
