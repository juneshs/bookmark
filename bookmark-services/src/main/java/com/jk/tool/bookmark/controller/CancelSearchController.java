//package com.jk.tool.bookmark.controller;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.MediaType;
//import org.springframework.web.bind.annotation.*;
//
//import javax.persistence.EntityManager;
//import javax.persistence.Query;
//import java.util.List;
//
//@RestController
//@RequestMapping("/api")
//public class CancelSearchController {
//
//    @Autowired
//    EntityManager entityManager;
//
//    @GetMapping(value = "/search", produces = MediaType.TEXT_HTML_VALUE)
//    @ResponseBody
//    public String search() {
//
//        String result = "";
//
//        try {
//            Query q = entityManager.createNativeQuery("select id, name,pg_sleep(1 * 20) from project where id=1 and 'kbkw924'='kbkw924' and 'tab1'='tab1'");
//            result = q.getResultList().toString();
//        } catch (Exception e) {
//        }
//        System.out.println(result);
//        return "Query Cancelled";
//    }
//
//    @GetMapping(value = "/cancelsearch/{pid}", produces = MediaType.TEXT_HTML_VALUE)
//    @ResponseBody
//    public String cancelSearch(@PathVariable("pid") int pid) {
//
//        String result = "";
//
//        try {
//            String qry = "select pg_cancel_backend(" + pid + ")";
//            System.out.print(qry);
//            Query q = entityManager.createNativeQuery(qry);
//            result = q.getResultList().toString();
//        } catch (Exception e) {
//        }
//        System.out.println(result);
//        return "Query Cancelled";
//    }
//
//}
