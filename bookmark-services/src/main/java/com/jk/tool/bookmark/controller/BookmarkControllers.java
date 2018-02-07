package com.jk.tool.bookmark.controller;

import com.jk.tool.bookmark.model.Project;
import com.jk.tool.bookmark.model.ProjectBookmark;
import com.jk.tool.bookmark.services.ProjectBookmarkService;
import com.jk.tool.bookmark.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BookmarkControllers {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private ProjectBookmarkService projectBookmarkService;


    @RequestMapping(value = "/projects")
    public List<Project> getProjects() {
        return projectService.getAllProjects();
    }

    @RequestMapping(value = "projectbookmarks")
    public List<ProjectBookmark> getProjectBookmarks() {
        return projectBookmarkService.getAllProjectBookmarks();
    }

}
