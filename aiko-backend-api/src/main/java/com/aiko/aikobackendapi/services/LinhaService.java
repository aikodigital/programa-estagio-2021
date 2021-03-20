package com.aiko.aikobackendapi.services;

import com.aiko.aikobackendapi.repositories.LinhaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LinhaService {

    @Autowired
    private LinhaRepository linhaRepository;
}
