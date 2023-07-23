package com.portfolio.web.business.service;

import java.util.List;

import com.portfolio.web.business.mapper.WebUserMapper;
import com.portfolio.web.business.repository.WebUserRepository;
import com.portfolio.web.rest.generated.dto.WebUserDto;
import org.springframework.stereotype.Service;

@Service
public class WebUserService {
    
    private final WebUserRepository webUserRepository;

    public WebUserService(WebUserRepository webUserRepository) {
        this.webUserRepository = webUserRepository;
    }
    
    public List<WebUserDto> loadAllUsers() {
        return webUserRepository.findAll().stream().map(WebUserMapper::toDto).toList();
    }
}
