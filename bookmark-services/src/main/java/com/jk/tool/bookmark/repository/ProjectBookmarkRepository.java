package com.jk.tool.bookmark.repository;


import com.jk.tool.bookmark.model.ProjectBookmark;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectBookmarkRepository extends JpaRepository<ProjectBookmark, Long> {
}
