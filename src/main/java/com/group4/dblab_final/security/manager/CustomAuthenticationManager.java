package com.group4.dblab_final.security.manager;

import com.group4.dblab_final.entity.User;
import com.group4.dblab_final.repository.UserRepository;
import com.group4.dblab_final.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.Objects;

@Component

public class CustomAuthenticationManager implements AuthenticationManager {

    private UserService userService;
    @Lazy
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public CustomAuthenticationManager(UserService service, @Lazy BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userService=service;
        this.bCryptPasswordEncoder=bCryptPasswordEncoder;
    }

    @Override
    public Authentication authenticate(Authentication authentication)
            throws AuthenticationException {

        return authenticateUser(authentication);

    }

    private UsernamePasswordAuthenticationToken authenticateUser(Authentication authentication) {

        User user = userService.getByUserName(authentication.getName());

        if (!bCryptPasswordEncoder.matches(
                authentication.getCredentials().toString(),
                user.getPassword())) {

            throw new BadCredentialsException("Wrong Password!!!");

        }

//        if (!(Objects.equals(authentication.getCredentials().toString(), user.getPassword()))) {
//
//            throw new BadCredentialsException("Wrong Password!!!");
//
//        }

        return new UsernamePasswordAuthenticationToken(
                authentication.getName(),
                user.getPassword());

    }

}
