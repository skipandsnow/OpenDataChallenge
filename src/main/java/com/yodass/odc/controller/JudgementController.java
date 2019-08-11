package com.yodass.odc.controller;

import com.yodass.odc.service.JudgementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/")
public class JudgementController {

    @Autowired
    JudgementService judgementService;

    @GetMapping("/")
    public String welcome() {
        return "index";
    }

    @GetMapping("/single")
    public String goToSingle() {
        return "single";
    }

    @GetMapping("/case")
    public String goToCase() {
        return "case";
    }

    @ResponseBody
    @GetMapping("/api/judgement/decision/tree")
    public String getDecisionTree() {
        return judgementService.getDecisionTree();
    }

}

