package com.jk.tool.bookmark.repository;

import com.jk.tool.bookmark.model.Poc;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PocRepository extends JpaRepository<Poc, Long> {

}
