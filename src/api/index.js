/**
 * Beware this code is not tested
 * If there is any bug just fix yourself, as it will count on your Interview Test
 */

import {todos} from "./mockData";

const LATENCY = 1000

function makePromise(data) {
  return new Promise(resolve => {
    setTimeout(() => {resolve(data)}, LATENCY)
  })
}

export function getTodos() {
  return makePromise([...todos])
}

export function markTodoAsDone(todo){
  todos.map(t => {
    if(t.title === todo.title) t.done = true
    return todo
  })

  return makePromise({...todo, done: true})
}


// todo add other actions and dont forget to use makePromise function to simulate async and api latency
