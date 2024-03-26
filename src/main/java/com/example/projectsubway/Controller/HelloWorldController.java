package com.example.projectsubway.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //@Controller + @ResponseBody
public class HelloWorldController {
    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }
}
