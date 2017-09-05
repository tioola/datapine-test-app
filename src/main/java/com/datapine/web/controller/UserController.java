package com.datapine.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.datapine.domain.User;
import com.datapine.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	private UserService userService;
	
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<List<User>> listUsers(){
		return ResponseEntity.ok(this.userService.findUsers());
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.GET)
	public ResponseEntity<User> findUserById(@PathVariable("id") Long id){
		return ResponseEntity.ok(this.userService.findUser(id));
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<User> addUser(@RequestBody User user){
		if(userService.findUserByEmail(user.getEmail()) != null){
			return new ResponseEntity<User>(HttpStatus.CONFLICT);
		}
		User userAdded = userService.register(user.getEmail(), user.getPassword());
		return new ResponseEntity<User>(userAdded, HttpStatus.CREATED);
	}
	
	@RequestMapping(method=RequestMethod.PUT)
	public ResponseEntity<User> updateUser(@RequestBody User user){
		User userUpdated= userService.updatePassword(user.getId(), user.getPassword(), user.getNewPassword());
		return ResponseEntity.ok(userUpdated);
	}

	@RequestMapping(method=RequestMethod.DELETE)
	public ResponseEntity<Void> updateUser(@PathVariable("id") Long id){
		userService.deleteUser(id);
		return new ResponseEntity<Void>( HttpStatus.NO_CONTENT);
	}
	
	
	@Autowired
	public void setUserService(UserService userService){
		this.userService = userService;
	}
	

	// public ModelAndView listUsers() {
	// }

	// public ModelAndView addUser(...) {
	// }

	// public ModelAndView showUser(...) {
	// }

	// public ModelAndView updateUser(...) {
	// }

	// public ModelAndView deleteUser(...) {
	// }

}
