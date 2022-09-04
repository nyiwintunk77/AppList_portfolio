import "./App.css";
import React, { useCallback, useRef, useState } from "react";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AppListPage from "./Pages/AppListPage";
import TodoTemplate from "./component2/todolist/TodoTemplate";
import Todoinsert from "./component2/todolist/TodoInsert";
import TodoList from "./component2/todolist/TodoList";
import Categories from "./component2/newsviewer/Categories";
import InputSearch from "./component2/newsviewer/InputSearch";
import NewsList from "./component2/newsviewer/NewsList";
import Calculate from "./component2/kuku/Calculate";
import Input from "./component2/kuku/Input";

const App = () => {
  return (
    <div>
      <Route component={HomePage} path="/" exact />
      <Route component={AppListPage} path="/applist" />
      <Route component={TodoApp} path="/applist/todolist" />
      <Route component={NewsViewer} path="/applist/newsviewer" />
      <Route component={Kuku} path="/applist/kuku" />
    </div>
  );
};

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(1);
  const onInsert = useCallback(
    (title) => {
      const todo = {
        id: nextId.current,
        title,
        checked: false,
        publishedDate: Date().toLocaleString(),
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );
  const onCheckCompleted = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                checked: !todo.checked,
                publishedDate: Date().toLocaleString(),
              }
            : todo
        )
      );
    },
    [todos]
  );

  const onCheckUnCompleted = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                checked: !todo.checked,
              }
            : todo
        )
      );
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );
  const onEdit = useCallback(
    (id, title) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? { ...todo, title: title, publishedDate: Date().toLocaleString() }
            : todo
        )
      );
    },
    [todos]
  );

  return (
    <div>
      <TodoTemplate>
        <Todoinsert onInsert={onInsert} />
        <TodoList
          todos={todos}
          onCheckCompleted={onCheckCompleted}
          onCheckUnCompleted={onCheckUnCompleted}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      </TodoTemplate>
    </div>
  );
};

const NewsViewer = () => {
  const [namesearch, setNameSearch] = useState("");
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  const onSearch = useCallback((search) => setNameSearch(search), []);

  return (
    <div>
      <div className="title">
        <Categories category={category} onSelect={onSelect} />
        <InputSearch namesearch={namesearch} onSearch={onSearch} />
      </div>
      <NewsList category={category} namesearch={namesearch} />
    </div>
  );
};

class Kuku extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onCheck(num) {
    this.setState({ input: num });
  }
  onInput(i) {
    this.setState({ input: i });
  }

  render() {
    return (
      <div className="App">
        <Calculate
          cal={{ input: this.state.input, onInput: this.onInput.bind(this) }}
        />
        <Input
          data={{ input: this.state.input, onCheck: this.onCheck.bind(this) }}
        />
      </div>
    );
  }
}

export default App;
