package com.group4.dblab_final.security;

import com.group4.dblab_final.security.filter.ExceptionHandlerFilter;
import com.group4.dblab_final.security.filter.JWTAuthorizationFilter;
import com.group4.dblab_final.security.filter.UserAuthenticationFilter;
import com.group4.dblab_final.security.manager.CustomAuthenticationManager;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@AllArgsConstructor
public class SecurityConfig {

    private CustomAuthenticationManager customAuthenticationManager;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        UserAuthenticationFilter userAuthenticationFilter = new UserAuthenticationFilter(customAuthenticationManager);
        userAuthenticationFilter.setFilterProcessesUrl("/user/authenticate");

        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers(HttpMethod.POST, SecurityConstants.USER_REGISTER_PATH).permitAll()
                        //.requestMatchers("/admin/**").permitAll()
                        .anyRequest().authenticated()
                )
                .addFilterBefore(new ExceptionHandlerFilter(), UserAuthenticationFilter.class)
                .addFilterAfter(userAuthenticationFilter, ExceptionHandlerFilter.class)
                .addFilterAfter(new JWTAuthorizationFilter(), UserAuthenticationFilter.class)
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        return http.build();
    }
}
