package com.portfolio.web.business.mapper;

import com.portfolio.web.business.domain.WebUser;
import com.portfolio.web.rest.generated.dto.WebUserDto;

public class WebUserMapper {
    
    public static WebUserDto toDto(WebUser entity) {
        WebUserDto dto = new WebUserDto();
        
        dto.setId(entity.getId());
        dto.setFirstName(entity.getFirstName());
        dto.setLastName(entity.getLastName());
        dto.setEmailAddress(entity.getEmailAddress());
        dto.setRegistrationDate(entity.getRegistrationDate());
        
        return dto;
    }
}
