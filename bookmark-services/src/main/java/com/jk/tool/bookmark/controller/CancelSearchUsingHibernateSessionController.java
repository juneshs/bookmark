package com.jk.tool.bookmark.controller;


import org.hibernate.Session;
import org.hibernate.jpa.HibernateEntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/api")
public class CancelSearchUsingHibernateSessionController {

    @Autowired
    EntityManager entityManager;


    @GetMapping(value = "/searchEntity", produces = MediaType.TEXT_HTML_VALUE)
    @ResponseBody
    public String  startLongRunningStatement() {

        HttpServletRequest servletRequest =
                ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
                        .getRequest();

        String result = "";


        Session hibernateSession = entityManager.unwrap(Session.class);

        // Store the HibernateSession in the HttpSession
        HttpSession httpSession = servletRequest.getSession();
        httpSession.setAttribute("hibernateSession", hibernateSession);

        try {
            // Run your query
            Query q = entityManager.createNativeQuery("select id, name,pg_sleep(1 * 30) from project where id=1 and 'kbkw924'='kbkw924' and 'tab1'='tab1'");

            result = q.getResultList().toString();

        } finally {
            // Clear the session object, if it is still ours
            if (httpSession.getAttribute("hibernateSession") == hibernateSession) {
                httpSession.removeAttribute("hibernateSession");
            }
        }

        return "Running";
    }

    @GetMapping(value = "/CancelEntity", produces = MediaType.TEXT_HTML_VALUE)
    @ResponseBody
    public void cancel() {

        HttpServletRequest servletRequest =
                ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
                        .getRequest();

        // Get the Hibernate session from the HTTP session
        HttpSession httpSession = servletRequest.getSession();
        Session hibernateSession = (Session) httpSession.getAttribute("hibernateSession");
        if (hibernateSession != null) {
            // Cancel the previous query
            hibernateSession.cancelQuery();
        }
    }

}
