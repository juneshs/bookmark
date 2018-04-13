package com.jk.tool.bookmark.controller;

import com.jk.tool.bookmark.model.Project;
import com.jk.tool.bookmark.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ProjectController {

    @Autowired
    ProjectRepository projectRepository;

    @GetMapping("/projects")
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    @PostMapping("/projects")
    public Project createProject(@Valid @RequestBody Project project){
        return projectRepository.save(project);
    }

}
