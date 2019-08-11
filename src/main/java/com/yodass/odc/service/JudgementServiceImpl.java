package com.yodass.odc.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.util.stream.Stream;

@Component
public class JudgementServiceImpl implements JudgementService{

    private static final Logger logger = LoggerFactory.getLogger(JudgementServiceImpl.class);

    @Value("classpath:data/DecisionTree.json")
    Resource resource;

    @Override
    public String getDecisionTree() {
        StringBuffer descisionTreeJson = new StringBuffer();
        //read file into stream, try-with-resources
        try (Stream<String> stream = Files.lines(resource.getFile().toPath())) {

            stream.forEach(descisionTreeJson::append);

        } catch (IOException e) {
            e.printStackTrace();
        }
        return descisionTreeJson.toString();
    }
}
