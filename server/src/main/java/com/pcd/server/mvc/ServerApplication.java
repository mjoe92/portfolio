package com.pcd.server.mvc;

import com.pcd.server.config.annotation.Measured;
import com.pcd.server.mvc.model.User;
import com.pcd.server.mvc.repository.UserRepository;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@Log4j2
@OpenAPIDefinition(info = @Info(title = "PCD API", version = "1.0", description = "REST API for PC desk project"))
public class ServerApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Autowired
	private UserRepository userRepository;

	@Override
	public void run(String... args) {
		createUsers();
		log.info("Init of repos completed!!!");
	}

	@Measured
	private void createUsers() {
		userRepository.save(new User("Joe", "Csurgai", "mcsurgai@gmail.com"));
		userRepository.save(new User("Jozsef", "Csurgai", "jcsurgai@gmail.com"));
		userRepository.save(new User("Szvetlana", "Ivker", "szivker@gmail.com"));
	}
}
