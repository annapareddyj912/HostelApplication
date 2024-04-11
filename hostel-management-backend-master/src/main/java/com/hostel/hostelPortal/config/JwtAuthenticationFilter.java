package com.hostel.hostelPortal.config;

import com.hostel.hostelPortal.service.impl.UserDetailsServiceImpl;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter
{
    @Autowired
    private UserDetailsServiceImpl userDetailsServiceImpl;
    @Autowired
    private JwtUtil jwtUtil;

    @Override
    //filterChain is used to forward request
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        //get jwt token
        final String requestTokenHeader = request.getHeader("Authorization");
        System.out.println("requestTokenHeader "+requestTokenHeader);

        String userName = null;
        String jwtToken = null;
        String startsWith="Bearer ";

        //checking starts with Bearer
        if(requestTokenHeader!=null && requestTokenHeader.startsWith(startsWith)){
            jwtToken = requestTokenHeader.substring(startsWith.length());
            try{
                //get userName from token
                //may throw illegal arg, expiration exception
                userName = this.jwtUtil.extractUsername(jwtToken);
            }catch(ExpiredJwtException e)
            {
                e.printStackTrace();
                System.out.println("jwt token has expired");
            }
            catch (Exception e){
                e.printStackTrace();
                System.out.println("Exception occurred");
            }

            //token validations
            if(userName!=null && SecurityContextHolder.getContext().getAuthentication()==null){
                final UserDetails userDetails = this.userDetailsServiceImpl.loadUserByUsername(userName);
                if(this.jwtUtil.validateToken(jwtToken,userDetails))
                {
                    //token is valid
                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                    usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                }
                else
                    System.out.println("Token in not validated");
            }
            else{
                System.out.println("Either userName or SecurityContextHolder.getContext().getAuthentication() is null");
            }
        }
        else
        {
            System.out.println("Either requestTokenHeader is null or token not starts with 'Bearer ' string");
        }
        //no issue, go ahead
        filterChain.doFilter(request, response);
    }
}