package com.jk.tool.bookmark.controller;


import com.sun.tools.corba.se.idl.StringGen;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@RestController
@Scope("prototype")
@RequestMapping("/api")
public class CancelSearchUsingHibernateSessionV2Controller {

    @Autowired
    EntityManager entityManager;

    private static int counter = 1;

    @GetMapping(value = "/V2searchEntity", produces = MediaType.TEXT_HTML_VALUE)
    @ResponseBody
    public String startLongRunningStatement() {

        initMap();
        String result = "";
        Session hibernateSession = entityManager.unwrap(Session.class);
        addMapValue(counter, hibernateSession);

        try {
            // Run your query
            Query q = entityManager.createNativeQuery("select id, name,pg_sleep(1 * 50) from project where id=1 and 'kbkw924'='kbkw924' and 'tab1'='tab1'");
            result = q.getResultList().toString();

        } finally {
            // Clear the session object, if it is still ours
           // removeMapValue(counter);

        }


        return "Running";
    }

    @GetMapping(value = "/V2CancelEntity/{id}", produces = MediaType.TEXT_HTML_VALUE)
    @ResponseBody
    public void cancel(@PathVariable("id") int id) {
        System.out.println("ID: " + id);
        cancelHibernateSessionMapQuery(id);
    }

    @GetMapping(value = "/list", produces = MediaType.TEXT_HTML_VALUE)
    @ResponseBody
    public String list() {

        HttpSession httpSession = getHttpSession();
        HashMap<Integer, Session> hibernateSessionMap = (HashMap) httpSession.getAttribute("hibernateSessionMap");
        if (hibernateSessionMap != null) {

            for (Map.Entry m : hibernateSessionMap.entrySet()) {
                System.out.println("LIST::  " + m.getKey() + " " + m.getValue());
            }
        }


        return "Running";
    }

    public void initMap() {

        HttpSession httpSession = getHttpSession();
        HashMap<Integer, Session> hibernateSessionMap = (HashMap) httpSession.getAttribute("hibernateSessionMap");
        if (hibernateSessionMap == null) {

            HashMap<Integer, Session> hibernateSessionMapNew = new HashMap<Integer, Session>();
            httpSession.setAttribute("hibernateSessionMap", hibernateSessionMapNew);

        }
    }

    public void addMapValue(int key, Session hibernateSession) {

        HttpSession httpSession = getHttpSession();
        HashMap<Integer, Session> hibernateSessionMap = (HashMap) httpSession.getAttribute("hibernateSessionMap");
        if (hibernateSessionMap != null) {
            hibernateSessionMap.put(key, hibernateSession);


            for (Map.Entry m : hibernateSessionMap.entrySet()) {
                System.out.println("ADDD::  " + m.getKey() + " " + m.getValue());
            }
        }

        counter++;

    }

    public void removeMapValue(int i) {
        HttpSession httpSession = getHttpSession();
        HashMap<Integer, Session> hibernateSessionMap = (HashMap) httpSession.getAttribute("hibernateSessionMap");
        if (hibernateSessionMap != null) {
            System.out.println("REMOVE hibernateSessionMap.count::" + hibernateSessionMap.size());
            hibernateSessionMap.remove(i);
        }
    }

    public void cancelHibernateSessionMapQuery(int i) {
        HttpSession httpSession = getHttpSession();
        HashMap<Integer, Session> hibernateSessionMap = (HashMap) httpSession.getAttribute("hibernateSessionMap");

        for (Map.Entry m : hibernateSessionMap.entrySet()) {
            System.out.println("ADDD::  " + m.getKey() + " " + m.getValue());
        }

        if (hibernateSessionMap != null) {

            Session hibernateSession = (Session) hibernateSessionMap.get(i);
            if (hibernateSession != null) {
                hibernateSession.cancelQuery();
            }
        }
    }


    public HttpSession getHttpSession() {
        HttpServletRequest servletRequest =
                ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
                        .getRequest();

        HttpSession httpSession = servletRequest.getSession();
        return httpSession;
    }

}
