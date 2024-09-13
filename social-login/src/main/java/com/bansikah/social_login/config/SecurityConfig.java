package com.bansikah.social_login.config;

import static org.springframework.security.config.Customizer.withDefaults;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    // @Bean
    // public ClientRegistrationRepository clientRegistrationRepository() {
    //     return new InMemoryClientRegistrationRepository(); // No-op for testing
    // }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/")
                .permitAll() 
                .anyRequest()
                .authenticated()
            )
            .formLogin((withDefaults())) 
            .oauth2Login(withDefaults()); 

        return http.build();
    }
}

