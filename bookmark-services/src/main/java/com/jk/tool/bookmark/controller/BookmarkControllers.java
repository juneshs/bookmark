package com.jk.tool.bookmark.controller;

import com.jk.tool.bookmark.model.Poc;
import com.jk.tool.bookmark.model.Project;
import com.jk.tool.bookmark.model.ProjectBookmark;
import com.jk.tool.bookmark.services.PocService;
import com.jk.tool.bookmark.services.ProjectBookmarkService;
import com.jk.tool.bookmark.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BookmarkControllers {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private ProjectBookmarkService projectBookmarkService;


    @Autowired
    private PocService pocService;


    @RequestMapping(value = "/projects")
    public List<Project> getProjects() {
        return projectService.getAllProjects();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/projectbookmarks")
    public List<ProjectBookmark> getProjectBookmarks(@RequestParam Long projectId) {
        return projectBookmarkService.getAllProjectBookmarks(projectId);
    }


    @RequestMapping(value = "/poc")
    public List<Poc> getPoc() {
        return pocService.getAllPoc();
    }


}
