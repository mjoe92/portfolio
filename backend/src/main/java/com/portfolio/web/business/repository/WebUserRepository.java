package com.portfolio.web.business.repository;

import com.portfolio.web.business.domain.WebUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WebUserRepository extends JpaRepository<WebUser, Long> { }
