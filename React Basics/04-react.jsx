import * as React from 'react'

export function Page() {
  function sayHello() {
    alert('Hello!')
  }

  return <button onClick={sayHello}>Click Me!</button>
}
