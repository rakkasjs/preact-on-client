import { j as jsxs, a as jsx } from "./jsx-runtime-746fc63d.js";
import { useState } from "react";
import { T as Todo, r as readAllTodos, c as createTodo } from "./Todo-0f1557ce.js";
import { a as useServerSideQuery, b as useMutation } from "../hattip.js";
import "react/jsx-runtime";
import "react-dom/server.browser";
const todoList = "_todoList_rkehu_1";
const addButton = "_addButton_rkehu_5";
const p = "_p_rkehu_21";
const input = "_input_rkehu_25";
const css = {
  todoList,
  addButton,
  p,
  input
};
function TodoPage() {
  const {
    data,
    refetch
  } = useServerSideQuery(["0", 0, [], $runServerSide$[0]], {
    refetchOnWindowFocus: true,
    refetchOnReconnect: true
  });
  const [text, setText] = useState("");
  const {
    mutate: create
  } = useMutation(async () => {
    null;
    refetch();
  });
  return /* @__PURE__ */ jsxs("main", {
    id: "todo",
    children: [/* @__PURE__ */ jsx("h1", {
      children: "Todo"
    }), /* @__PURE__ */ jsx("p", {
      children: "This is a simple todo application that demonstrates data fetching."
    }), /* @__PURE__ */ jsx("ul", {
      className: css.todoList,
      children: data.map((todo) => /* @__PURE__ */ jsx(Todo, {
        todo,
        refetch
      }, todo.id))
    }), /* @__PURE__ */ jsxs("p", {
      className: css.p,
      children: [/* @__PURE__ */ jsx("input", {
        className: css.input,
        value: text,
        onChange: (e) => setText(e.target.value)
      }), /* @__PURE__ */ jsx("button", {
        type: "button",
        className: css.addButton,
        disabled: !text,
        onClick: () => create(),
        children: "Add"
      })]
    })]
  });
}
const $runServerSide$ = [async ($runServerSideClosure$, ...$runServerSideArgs$) => {
  return readAllTodos(...$runServerSideArgs$);
}, async ($runServerSideClosure$) => {
  let [text] = $runServerSideClosure$;
  return createTodo({
    text,
    done: false
  });
}];
export {
  $runServerSide$,
  TodoPage as default
};
