package com.jk.tool.bookmark.services;

import com.jk.tool.bookmark.model.ProjectBookmark;
import com.jk.tool.bookmark.repository.ProjectBookmarkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectBookmarkService {
    @Autowired
    ProjectBookmarkRepository projectServiceRepository;

    public List<ProjectBookmark> getAllProjectBookmarks(Long projectId){
        return projectServiceRepository.findByProjectId(projectId);
    }

}
