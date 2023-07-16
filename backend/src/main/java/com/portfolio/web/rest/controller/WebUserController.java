package com.portfolio.web.rest.controller;

import java.util.Collection;

import com.portfolio.web.business.service.WebUserService;
import com.portfolio.web.rest.generated.api.UsersApiController;
import com.portfolio.web.rest.generated.dto.WebUserDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.NativeWebRequest;

@RestController
@RequestMapping("/api")
class WebUserController extends UsersApiController {
    
    private final WebUserService webUserService;
    
    WebUserController(NativeWebRequest request, WebUserService webUserService) {
        super(request);
        this.webUserService = webUserService;
    }
    
    @GetMapping("/users")
    ResponseEntity<Collection<WebUserDto>> getUsers() {
        return new ResponseEntity<>(webUserService.loadAllUsers(), HttpStatus.OK);
    }
}
