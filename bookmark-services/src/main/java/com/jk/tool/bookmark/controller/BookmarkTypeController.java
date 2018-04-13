package com.jk.tool.bookmark.controller;


import com.jk.tool.bookmark.model.BookmarkType;
import com.jk.tool.bookmark.repository.BookmarkTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api")
public class BookmarkTypeController {
    @Autowired
    BookmarkTypeRepository bookmarkTypeRepository;

    @GetMapping("/bookmarkTypes")
    public List<BookmarkType> getAllBookmarkTypes() {
        return bookmarkTypeRepository.findAll();
    }
}
