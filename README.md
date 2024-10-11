# Todo List Application

## 1. Project Description

We are developing a Todo List application in **React** that allows users to perform the following tasks:

- **Add** a new task (with a description).
- **Mark** tasks as completed or undone.
- **Remove** tasks from the list.

The application uses **Redux** to manage the state of the tasks effectively.

---

## 2. Features

- **Add Task:** Users can input a description of a new task and add it to the list.
- **Mark Completed/Undone:** Users can toggle the completion status of tasks.
- **Remove Task:** Users can delete tasks from the list.

---

## 3. Application Workflow

1. **Input Handling:**
   - Users enter a new task description and click the "Add Todo" button.
   - This dispatches the `addTodo` action, adding the task to the global state managed by Redux.

2. **Task Rendering:**
   - The list of tasks is dynamically rendered using the `.map()` function, displaying each task as a list item.

3. **Task Interaction:**
   - Buttons are provided to complete (toggle) or remove tasks, each of which triggers a dispatch to update the global state in Redux.

---

## 4. Technologies Used

- **React** for building the UI components.
- **Redux** for state management and handling global state transitions.

---

## 5. Component & State Structure

### Components

- **TodoApp Component:**
  - Handles user input and displays the todo list.
  
- **TodoItem (Optional):**
  - Each todo item can be rendered inside a separate list item for better structure and maintainability.

### Redux State Management

1. **Actions:**
   - `ADD_TODO`: Adds a new task to the list.
   - `REMOVE_TODO`: Removes a task by its unique ID.
   - `TOGGLE_TODO`: Toggles the completion status of a task.

2. **Reducer:**
   - The `todoReducer` maintains the state of the todo list, handling actions like adding, removing, or toggling tasks. The state is structured as a list of `todos` where each task has properties like `id`, `task`, and `completed`.

3. **Algorithm:**
   - **State Management:** Redux manages the global state of the app (i.e., the list of todos). Actions trigger updates to the state, and any state changes are propagated to components using the `useSelector` hook.
   - **Filtering/Mapping:** The todo list is rendered using `map()`, and when tasks are toggled or removed, filtering/mapping techniques are used to immutably update the state.

---




