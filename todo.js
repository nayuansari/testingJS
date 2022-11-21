const todoList = () => {
    const formatD = (d) => {
        return d.toISOString().split("T")[0];
    };
    const todayDate = new Date();
    const today = formatD(todayDate);
    const yesterday = formatD(
        new Date(new Date().setDate(todayDate.getDate() - 1))
    );
    const tomorrow = formatD(
        new Date(new Date().setDate(todayDate.getDate() + 1))
    );

    let all = [];
    const add = (todoItem) => {
        all.push(todoItem);
    };
    const markAsComplete = (index) => {
        all[index].completed = true;
    };

    const overdue = () => {
        return all.filter((item) => {
            return item.dueDate <= yesterday && item.completed === false;
        });
    };

    const dueToday = () => {
        return all.filter((item) => {
            return item.dueDate === today;
        });
    };

    const dueLater = () => {
        return all.filter((item) => {
            return item.dueDate >= tomorrow;
        });
    };

    // eslint-disable-next-line no-unused-vars
    const toDisplayableList = (list) => {
        let mylist = [];
        list.forEach((item) => {
            if (item.dueDate === today) {
                if (item.completed === true) {
                    mylist.push(`[x] ${item.title}`);
                } else {
                    mylist.push(`[ ] ${item.title}`);
                }
            } else {
                if (item.completed === true) {
                    mylist.push(`[x] ${item.title} ${item.dueDate}`);
                } else {
                    mylist.push(`[ ] ${item.title} ${item.dueDate}`);
                }
            }
        });
        return mylist.join("\n");
    };

    return {
        all,
        add,
        markAsComplete,
        overdue,
        dueToday,
        dueLater,
    };
};

module.exports = todoList;