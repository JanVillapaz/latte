package com.apollojan.matcha.controller;

import com.apollojan.matcha.model.Expense;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    @GetMapping
    public List<Expense> getExpenses() {

        // temp
        return List.of();
    }
}
