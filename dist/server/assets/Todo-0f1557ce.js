import { j as jsxs, a as jsx } from "./jsx-runtime-746fc63d.js";
import { b as useMutation } from "../hattip.js";
import { useState } from "react";
let todoItems = [
  {
    id: 1,
    text: "Learn React",
    done: true
  },
  {
    id: 2,
    text: "Learn Rakkas",
    done: false
  }
];
let nextId = 3;
function readAllTodos() {
  return todoItems;
}
function createTodo(item2) {
  todoItems.push({ ...item2, id: nextId });
  return nextId++;
}
function updateTodo(id, data) {
  const found = todoItems.find((x) => x.id === id);
  if (found) {
    Object.assign(found, data);
  }
  return found;
}
function deleteTodo(id) {
  todoItems = todoItems.filter((x) => x.id !== id);
}
const item = "_item_urmsp_1";
const done = "_done_urmsp_12";
const input = "_input_urmsp_16";
const buttons = "_buttons_urmsp_28";
const css = {
  item,
  done,
  input,
  buttons
};
const Todo = ({
  todo,
  refetch
}) => {
  const [state, setState] = useState({
    text: todo.text,
    editing: false
  });
  const {
    mutate: update
  } = useMutation(async (item2) => {
    const result = null;
    refetch();
    return result;
  });
  const {
    mutate: remove
  } = useMutation(async () => {
    null;
    refetch();
  });
  return /* @__PURE__ */ jsxs("li", {
    className: css.item,
    children: [!state.editing && /* @__PURE__ */ jsxs("label", {
      children: [/* @__PURE__ */ jsx("input", {
        type: "checkbox",
        checked: todo.done,
        onChange: (e) => update({
          done: e.target.checked
        })
      }), " ", /* @__PURE__ */ jsx("span", {
        className: todo.done ? css.done : void 0,
        children: todo.text
      }), " "]
    }), state.editing && /* @__PURE__ */ jsx("input", {
      className: css.input,
      autoFocus: true,
      value: state.text,
      onChange: (e) => setState({
        text: e.target.value,
        editing: true
      }),
      onKeyDown: (e) => {
        if (e.key === "Enter") {
          setState({
            text: todo.text,
            editing: false
          });
          update({
            text: state.text
          });
        } else if (e.key === "Escape") {
          setState({
            text: todo.text,
            editing: false
          });
        }
      }
    }), /* @__PURE__ */ jsxs("span", {
      className: css.buttons,
      children: [!todo.done && !state.editing && /* @__PURE__ */ jsx("button", {
        type: "button",
        onClick: () => setState({
          text: todo.text,
          editing: true
        }),
        children: "Edit"
      }), todo.done && /* @__PURE__ */ jsx("button", {
        type: "button",
        onClick: () => remove(),
        children: "Delete"
      }), state.editing && state.text !== todo.text && /* @__PURE__ */ jsx("button", {
        type: "button",
        onClick: async () => {
          setState({
            text: todo.text,
            editing: false
          });
          update({
            text: state.text
          });
        },
        children: "Save"
      }), state.editing && /* @__PURE__ */ jsx("button", {
        type: "button",
        onClick: () => setState({
          text: todo.text,
          editing: false
        }),
        children: "Cancel"
      })]
    })]
  }, todo.id);
};
const $runServerSide$ = [async ($runServerSideClosure$) => {
  let [id, item2] = $runServerSideClosure$;
  return updateTodo(id, item2);
}, async ($runServerSideClosure$) => {
  let [id] = $runServerSideClosure$;
  return deleteTodo(id);
}];
const Todo$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $runServerSide$,
  Todo
}, Symbol.toStringTag, { value: "Module" }));
export {
  Todo as T,
  Todo$1 as a,
  createTodo as c,
  readAllTodos as r
};
