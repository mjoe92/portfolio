package com.pcd.server.config;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.aop.Advisor;
import org.springframework.aop.aspectj.AspectJExpressionPointcut;
import org.springframework.aop.interceptor.PerformanceMonitorInterceptor;
import org.springframework.aop.support.DefaultPointcutAdvisor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Configuration class for the framework.
 * TODO: FIX THIS!!!!
 */
@Configuration
@EnableAspectJAutoProxy
@EnableJpaRepositories(basePackages = "com.pcd")
@Aspect
public class FrameworkConfig {

    /**
     * Pointcut that matches the @Measured annotation.
     */
    @Pointcut("@annotation(com.pcd.server.config.annotation.Measured)")
    public void monitor() {
    }

    /**
     * @return {@link PerformanceMonitorInterceptor} with dynamic logger (i.e. logs in the namespace the annotation is
     * used in).
     */
    @Bean
    public PerformanceMonitorInterceptor performanceMonitor() {
        return new PerformanceMonitorInterceptor(true);
    }

    /**
     * PerformanceMonitor advisor for @Measured.
     * @return Advisor that combines the pointcut {@link #monitor()} with the {@link PerformanceMonitorInterceptor}.
     */
    @Bean
    public Advisor performanceMonitorAdvisor() {
        final AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();
        pointcut.setExpression("com.pcd.server.config.FrameworkConfig.monitor()");
        return new DefaultPointcutAdvisor(pointcut, performanceMonitor());
    }


}
