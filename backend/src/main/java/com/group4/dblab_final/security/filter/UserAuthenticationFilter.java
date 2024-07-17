package com.group4.dblab_final.security.filter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.group4.dblab_final.entity.User;
import com.group4.dblab_final.security.SecurityConstants;
import com.group4.dblab_final.security.body.JWTResponse;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.io.IOException;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@AllArgsConstructor
public class UserAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private AuthenticationManager authenticationManager;

    @Override
    public Authentication attemptAuthentication(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response)
            throws AuthenticationException {

        try {
            User user = new ObjectMapper().readValue(request.getInputStream(), User.class);

            Collection<? extends GrantedAuthority> authorities = List.of(new SimpleGrantedAuthority("ROLE_USER"));

            Authentication authentication = new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword(), authorities);

            return authenticationManager.authenticate(authentication);
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
    }

    @Override
    protected void unsuccessfulAuthentication(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull AuthenticationException failed) throws IOException, ServletException {

        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.getWriter().write(failed.getMessage());
        response.getWriter().flush();
    }

    @Override
    protected void successfulAuthentication(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain chain,
            @NonNull Authentication authResult)
            throws IOException, ServletException {

        String token = JWT.create()
                .withSubject(authResult.getName())
                .withClaim("roles", "ROLE_USER")
                .withExpiresAt(new Date(System.currentTimeMillis() + SecurityConstants.TOKEN_EXPIRATION))
                .sign(Algorithm.HMAC512(SecurityConstants.SECRET_KEY));

        JWTResponse authResponse = new JWTResponse(SecurityConstants.BEARER + token);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(new ObjectMapper().writeValueAsString(authResponse));
        response.getWriter().flush();
    }
}
