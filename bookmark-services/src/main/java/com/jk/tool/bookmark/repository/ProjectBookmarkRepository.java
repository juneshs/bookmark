package com.jk.tool.bookmark.repository;


import com.jk.tool.bookmark.model.ProjectBookmark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectBookmarkRepository extends JpaRepository<ProjectBookmark, Long> {

   List<ProjectBookmark> findByProjectId(Long projectId);


}
