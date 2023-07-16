package com.portfolio.web.business.service;

import java.util.Collection;

import com.portfolio.web.business.mapper.WebUserMapper;
import com.portfolio.web.business.repository.WebUserRepository;
import com.portfolio.web.rest.generated.dto.WebUserDto;
import org.springframework.stereotype.Service;

@Service
public class WebUserService {
    
    private final WebUserRepository webUserRepository;
    private final WebUserMapper webUserMapper;

    public WebUserService(WebUserRepository webUserRepository, WebUserMapper webUserMapper) {
        this.webUserRepository = webUserRepository;
        this.webUserMapper = webUserMapper;
    }
    
    public Collection<WebUserDto> loadAllUsers() {
        return webUserRepository.findAll().stream().map(WebUserMapper::toDto).toList();
    }
}
