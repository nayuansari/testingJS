/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("Todo List Test suite", () => {
    // Before starting all tests
    beforeAll(() => {
        add({
            title: "get coffee",
            dueDate: new Date().toLocaleDateString("en-CA"),
            completed: false,
        });
    });

    // checking if the add function is working
    test("Adding new item", () => {
        const todoLength = all.length;
        add({
            title: "testing item",
            dueDate: new Date().toLocaleDateString("en-CA"),
            completed: false,
        });
        expect(all.length).toBe(todoLength + 1);
    });

    // checking if the markAsComplete function is working
    test("Marking an item as complete", () => {
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    });

    // checking if the overdue function is working
    test("Overdue items", () => {
        add({
            title: "testing item overdue",
            dueDate: new Date(
                new Date().setDate(new Date().getDate() - 1)
            ).toLocaleDateString("en-CA"),
            completed: false,
        });
        expect(overdue().length).toBe(1);
    });

    // checking if the dueToday function is working
    test("Due today items test", () => {
        // 1 from beforeAll and 1 from the adding test above
        expect(dueToday().length).toBe(2);
    });

    // checking if the dueLater function is working
    test("Due later items test", () => {
        add({
            title: "test item due later",
            dueDate: new Date(
                new Date().setDate(new Date().getDate() + 1)
            ).toLocaleDateString("en-CA"),
            completed: false,
        });
        expect(dueLater().length).toBe(1);
    });
});