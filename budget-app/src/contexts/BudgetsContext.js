import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useLocalStorage from '../hooks/useLocalStorage'

const BudgetsContext = React.createContext()

// useBudgets()
export function useBudgets () {
    return useContext(BudgetsContext)
}

export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets ] = useLocalStorage("budegts", [])
    const [expenses, setExpenses ] = useLocalStorage("expenses", [])

    // getBudgetExpenses()
    // this function returns an array of expenses that belong to the budget with the given id
    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId === budgetId)
    }

    // addExpense()
    // this function adds an expense to the expenses array
    function addExpense(description, amount, budgetId) {
        setExpenses(prevExpenses => {
            return [...prevExpenses, { id: uuidv4(), description, amount, budgetId }]
        })
    }

    // addBudget()
    // this function adds a budget to the budgets array
    function addBudget({ name, max }) {
        setBudgets(prevBudgets => {
            if (prevBudgets.find(budget => budget.name === name)) {
                return prevBudgets
            }
            return [...prevBudgets, { id: uuidv4(), name, max }]
        })
    }

    // deleteBudget()
    // this function deletes a budget from the budgets array
    function deleteBudget({ id }) {
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id)
        })
    }

    // deleteExpense()
    // this function deletes an expense from the expenses array
    function deleteExpense({ id }) {
        setExpenses(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id)
        })
    }

    return (
        <BudgetsContext.Provider value={{
            budgets,
            expenses, 
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpense
        }}>
            {children}
        </BudgetsContext.Provider>
    )
}