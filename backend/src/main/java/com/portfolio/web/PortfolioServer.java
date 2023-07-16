package com.portfolio.web;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/** 
 * Main class for the portfolio server.
 */
@SpringBootApplication(scanBasePackages = "com.portfolio")
@EntityScan(basePackages = "com.portfolio")
@EnableJpaRepositories("com.portfolio")
@EnableTransactionManagement
@ServletComponentScan(basePackages = "com.portfolio")
public class PortfolioServer extends SpringBootServletInitializer {

    /**
     * The server starter.
     *
     * @param args
     *         the arguments
     */
    public static void main(String[] args) {
        new SpringApplicationBuilder(PortfolioServer.class)
                .properties("spring.config.name=portfolio-web-server").build().run(args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.properties("spring.config.name=portfolio-web-server");
    }
}
