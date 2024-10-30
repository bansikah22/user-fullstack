### If you don't want the SSO configuration
```java
package com.bansikah.keycloakdemo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/").permitAll()
                        .requestMatchers("/menu").authenticated()
                        .anyRequest().authenticated()
                )
                .oauth2Login(oauth2 -> oauth2
                        .loginPage("/oauth2/authorization/keycloak")
                        .defaultSuccessUrl("/menu", true)
                )
                .logout(logout -> logout
                        .logoutSuccessHandler((request, response, authentication) -> {
                            String keycloakLogout = "http://localhost:8088/realms/food-ordering-realm/protocol/openid-connect/logout";
                            String redirectUri = "http://localhost:8082/";
                            response.sendRedirect(keycloakLogout + "?redirect_uri=" + URLEncoder.encode(redirectUri, StandardCharsets.UTF_8));
                        })
                );
        return http.build();
    }
}
```
