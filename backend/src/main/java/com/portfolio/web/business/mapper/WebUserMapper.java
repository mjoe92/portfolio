package com.portfolio.web.business.mapper;

import com.portfolio.web.business.domain.WebUser;
import com.portfolio.web.rest.generated.dto.WebUserDto;
import org.springframework.stereotype.Component;

@Component
public class WebUserMapper {
    
    public static WebUserDto toDto(WebUser entity) {
        WebUserDto dto = new WebUserDto();
        
        dto.setId(entity.getId());
        dto.setFirstName(entity.getFirstName());
        dto.setLastName(entity.getLastName());
        dto.setEmail(entity.getEmail());
        dto.setRegistrationDate(entity.getRegistrationDate());
        
        return dto;
    }
}
