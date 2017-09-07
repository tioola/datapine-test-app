Challenge completed (Please READ BELOW)
------

++App was converted to SPRING BOOT


++The front-end was made in angular 4, and is inside of src/main/resources/angular-frontend/datapine-front

If you want to build the front again please install angular 4 and run npm run build and replace static folder with what was generated in angular dist folder.


Check items completed
---


[x] Implement the UserDAO using JPA.

*I Used JPARepository to generate the implementation  once the queries were simple, but there are also JPQL examples commented 

[x]  Implement the UserService using the UserDAO and transactions.

*Service layer is responsible for calling the repository layer to pull the data 

[x] Implement a RESTful UserController to manage users.

*Used JSON and SPA to develop the challenge so all the data returned from the controller are JSON objects, the reason for that is that once this app would be able to deal with a lot of requests, we will be working only with lightweight responses (JSON) and we could also separate our Resources from the Frontend (this way we could have a webserver serving static content and separating the layers would be easier to tune the app )

[X] Implement a simple user login dialog to log in a user. Use HttpSession to store the user credentials to save time, Spring Security can also be used.

*Used spring security to authenticate and authorize the resources, you can find the information in WebSecurityConfig.java ( a simple login page in the SPA app was also created)

[X] Use Spring AOP to log all login attempts via console output or log4j.

*SecurityAOP.java is working on it and also logging through LOG4J 2

[X] In addition to securing the URLs, secure access to ItemDAO (has to be created alongside with Item domain) via spring security.

*Spring ACL is configured and you can find all the structure in data.sql

[X]  Restrict ItemDAO access if the user is not authenticated by session. Filter any findBy~ and find a method within ItemDAO. ACL has to be used in order to secure domain.

*I created only one item to be used as example

[X]  You can either create an API or prepare jUnit tests for adding&viewing Item object (only authenticated users can insert and view objects).

*Authentication tests were created in test folder