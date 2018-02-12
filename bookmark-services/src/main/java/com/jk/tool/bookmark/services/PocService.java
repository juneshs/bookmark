package com.jk.tool.bookmark.services;

import com.jk.tool.bookmark.model.Poc;
import com.jk.tool.bookmark.repository.PocRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PocService {
    @Autowired
    private PocRepository pocRepository;

    public List<Poc> getAllPoc() {
        return pocRepository.findAll();
    }

}

