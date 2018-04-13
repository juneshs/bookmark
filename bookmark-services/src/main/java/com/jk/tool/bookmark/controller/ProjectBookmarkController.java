package com.jk.tool.bookmark.controller;

import com.jk.tool.bookmark.model.ProjectBookmark;
import com.jk.tool.bookmark.repository.ProjectBookmarkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ProjectBookmarkController {

    @Autowired
    ProjectBookmarkRepository projectBookmarkRepository;

    @GetMapping("/projectbookmark")
    public List<ProjectBookmark> getAllProjectBookmarks() {
        return projectBookmarkRepository.findAll();
    }

    @GetMapping("/projectbookmarkforprojectid")
    public List<ProjectBookmark> getAllProjectBookmarks(@RequestParam("projectId") long projectId) {
        return projectBookmarkRepository.findByProjectId(projectId);
    }

    @PostMapping("/projectbookmark")
    public ProjectBookmark createProjectBookmark(@Valid @RequestBody ProjectBookmark projectBookmark) {
        return projectBookmarkRepository.save(projectBookmark);
    }


}
