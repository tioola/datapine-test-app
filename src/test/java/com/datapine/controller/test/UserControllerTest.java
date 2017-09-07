package com.datapine.controller.test;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.web.FilterChainProxy;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.datapine.web.controller.UserController;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment=SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserControllerTest {

	@Autowired
	private UserController userController;
	
	 @Autowired
	 private FilterChainProxy springSecurityFilterChain;
	
	private MockMvc mockMvc;
	
	@Before
	public void before(){
		this.mockMvc = MockMvcBuilders.standaloneSetup(userController).addFilters(springSecurityFilterChain).build();
	}
	
	
	/**
	 * THhis test will try to access the Users resources without authentication should redirect to the login page
	 * @throws Exception
	 */
	@Test
	public void tryToAccessResourceWithoutAuthentication() throws Exception{
		 
		this.mockMvc.perform(get("/api/users")
				 .accept(MediaType.parseMediaType("application/json")))
		 		 .andExpect(status()
		 		 .is3xxRedirection());
		
	}
	
	/**
	 * Trying to authenticate and checking if the return is ok
	 * @throws Exception
	 */
	@Test
	public void tryToAUthenticateWithDefaultUSer() throws Exception{
		
		this.mockMvc.perform(post("/api/auth")
					.contentType(MediaType.APPLICATION_FORM_URLENCODED)
					.content("username=diogof.fabrile@gmail.com&password=123")).andExpect(status().isOk());
		
			
	}
	
	
	
}
