"use client";

import { Snippet } from "@heroui/snippet";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Tabs, Tab } from "@heroui/tabs";
import { Divider } from "@heroui/divider";
import { Chip } from "@heroui/chip";
import { Code } from "@heroui/code";
import { Button } from "@heroui/button";
import { title, subtitle } from "@/components/primitives";

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <section className="mb-12 text-center">
        <h1 className={title()}>Code Examples & Documentation</h1>
        <p className={subtitle({ class: "mt-4" })}>
          Interactive coding examples and snippets for different programming languages
        </p>
      </section>

      <Divider className="mb-8" />

      {/* Installation Guide */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Installation</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Initialize new project</h3>
            <p className="text-default-600 mb-3">
              Create a new HeroUI project using the CLI:
            </p>
            <Snippet
              hideSymbol
              hideCopyButton={false}
              variant="bordered"
              color="default"
              className="w-full"
            >
              <span>
                <span className="text-pink-500">npx</span>{" "}
                <span className="text-blue-400">heroui-cli@latest</span>{" "}
                <span className="text-green-400">init</span>{" "}
                <span className="text-yellow-400">my-heroui-app</span>
              </span>
            </Snippet>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Install dependencies</h3>
            <p className="text-default-600 mb-3">
              Navigate to your project and install dependencies:
            </p>
            <div className="space-y-2">
              <Snippet
                hideSymbol
                hideCopyButton={false}
                variant="bordered"
                color="default"
                className="w-full"
              >
                <span>
                  <span className="text-blue-400">cd</span>{" "}
                  <span className="text-yellow-400">my-heroui-app</span>
                </span>
              </Snippet>
              <Snippet
                hideSymbol
                hideCopyButton={false}
                variant="bordered"
                color="default"
                className="w-full"
              >
                <span>
                  <span className="text-pink-500">npm</span>{" "}
                  <span className="text-green-400">install</span>
                </span>
              </Snippet>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Start development server</h3>
            <p className="text-default-600 mb-3">
              Run the development server:
            </p>
            <Snippet
              hideSymbol
              hideCopyButton={false}
              variant="bordered"
              color="default"
              className="w-full"
            >
              <span>
                <span className="text-pink-500">npm</span>{" "}
                <span className="text-blue-400">run</span>{" "}
                <span className="text-green-400">dev</span>
              </span>
            </Snippet>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Add components individually</h3>
            <p className="text-default-600 mb-3">
              Add specific components to your project:
            </p>
            <div className="space-y-2">
              <Snippet
                hideSymbol
                hideCopyButton={false}
                variant="bordered"
                color="default"
                className="w-full"
              >
                <span>
                  <span className="text-pink-500">npx</span>{" "}
                  <span className="text-blue-400">heroui-cli</span>{" "}
                  <span className="text-green-400">add</span>{" "}
                  <span className="text-yellow-400">button</span>
                </span>
              </Snippet>
              <Snippet
                hideSymbol
                hideCopyButton={false}
                variant="bordered"
                color="default"
                className="w-full"
              >
                <span>
                  <span className="text-pink-500">npx</span>{" "}
                  <span className="text-blue-400">heroui-cli</span>{" "}
                  <span className="text-green-400">add</span>{" "}
                  <span className="text-yellow-400">button card input modal</span>
                </span>
              </Snippet>
            </div>
          </div>
        </div>
      </section>

      <Divider className="mb-8" />

      {/* Programming Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Code Examples</h2>
        
        <Tabs aria-label="Programming Languages" color="primary" variant="bordered">
          <Tab key="c" title="C Language">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg font-semibold">Hello World Program</h3>
                  <Chip color="success" size="sm" variant="flat">Basic</Chip>
                </div>
                <p className="text-default-600 mb-4">
                  A simple C program that prints "Hello, World!" to the console.
                </p>
                <Snippet
                  hideSymbol
                  hideCopyButton={false}
                  variant="bordered"
                  color="default"
                  className="w-full"
                >
                  <pre className="language-c">
                    <code>{`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`}</code>
                  </pre>
                </Snippet>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg font-semibold">Factorial Function</h3>
                  <Chip color="warning" size="sm" variant="flat">Intermediate</Chip>
                </div>
                <p className="text-default-600 mb-4">
                  Recursive function to calculate the factorial of a number.
                </p>
                <Snippet
                  hideSymbol
                  hideCopyButton={false}
                  variant="bordered"
                  color="default"
                  className="w-full"
                >
                  <pre className="language-c">
                    <code>{`#include <stdio.h>

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    int num = 5;
    printf("Factorial of %d is %d\\n", num, factorial(num));
    return 0;
}`}</code>
                  </pre>
                </Snippet>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg font-semibold">Array Operations</h3>
                  <Chip color="danger" size="sm" variant="flat">Advanced</Chip>
                </div>
                <p className="text-default-600 mb-4">
                  Working with arrays, loops, and function pointers in C.
                </p>
                <Snippet
                  hideSymbol
                  hideCopyButton={false}
                  variant="bordered"
                  color="default"
                  className="w-full"
                >
                  <pre className="language-c">
                    <code>{`#include <stdio.h>

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr)/sizeof(arr[0]);
    
    printf("Original array: ");
    printArray(arr, n);
    
    bubbleSort(arr, n);
    
    printf("Sorted array: ");
    printArray(arr, n);
    
    return 0;
}`}</code>
                  </pre>
                </Snippet>
              </div>
            </div>
          </Tab>

          <Tab key="python" title="Python">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg font-semibold">List Comprehensions</h3>
                  <Chip color="success" size="sm" variant="flat">Basic</Chip>
                </div>
                <p className="text-default-600 mb-4">
                  Powerful Python feature for creating lists in a concise way.
                </p>
                <Snippet
                  hideSymbol
                  hideCopyButton={false}
                  variant="bordered"
                  color="default"
                  className="w-full"
                >
                  <pre className="language-python">
                    <code>{`# List comprehensions and basic operations
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_squares = [x**2 for x in numbers if x % 2 == 0]
print(even_squares)  # [4, 16, 36, 64, 100]

# Dictionary comprehension
fruits = ['apple', 'banana', 'cherry']
fruit_lengths = {fruit: len(fruit) for fruit in fruits}
print(fruit_lengths)  # {'apple': 5, 'banana': 6, 'cherry': 6}

# Nested list comprehension
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for row in matrix for num in row]
print(flattened)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]`}</code>
                  </pre>
                </Snippet>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg font-semibold">Object-Oriented Programming</h3>
                  <Chip color="warning" size="sm" variant="flat">Intermediate</Chip>
                </div>
                <p className="text-default-600 mb-4">
                  Class definition with methods, inheritance, and encapsulation.
                </p>
                <Snippet
                  hideSymbol
                  hideCopyButton={false}
                  variant="bordered"
                  color="default"
                  className="w-full"
                >
                  <pre className="language-python">
                    <code>{`class BankAccount:
    def __init__(self, account_holder, initial_balance=0):
        self.account_holder = account_holder
        self._balance = initial_balance  # Protected attribute
        self.transaction_history = []
    
    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            self.transaction_history.append(f"Deposited {amount}")
            return True
        return False
    
    def withdraw(self, amount):
        if 0 < amount <= self._balance:
            self._balance -= amount
            self.transaction_history.append(f"Withdrew {amount}")
            return True
        return False
    
    @property
    def balance(self):
        return self._balance
    
    def __str__(self):
        return f"Account({self.account_holder}): {self._balance}"

# Usage
account = BankAccount("John Doe", 1000)
account.deposit(500)
account.withdraw(200)
print(f"Balance: {account.balance}")
print(account.transaction_history)`}</code>
                  </pre>
                </Snippet>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg font-semibold">Decorators & Context Managers</h3>
                  <Chip color="danger" size="sm" variant="flat">Advanced</Chip>
                </div>
                <p className="text-default-600 mb-4">
                  Advanced Python features including decorators and context managers.
                </p>
                <Snippet
                  hideSymbol
                  hideCopyButton={false}
                  variant="bordered"
                  color="default"
                  className="w-full"
                >
                  <pre className="language-python">
                    <code>{`import time
import functools
from contextlib import contextmanager

def timing_decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"{func.__name__} took {end_time - start_time:.4f} seconds")
        return result
    return wrapper

@contextmanager
def database_connection():
    print("Opening database connection")
    try:
        yield "db_connection"
    finally:
        print("Closing database connection")

@timing_decorator
def slow_function():
    time.sleep(1)
    return "Task completed"

# Usage
with database_connection() as db:
    print(f"Using {db}")
    result = slow_function()
    print(result)`}</code>
                  </pre>
                </Snippet>
              </div>
            </div>
          </Tab>

          <Tab key="javascript" title="JavaScript">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg font-semibold">Modern JavaScript Features</h3>
                  <Chip color="primary" size="sm" variant="flat">ES6+</Chip>
                </div>
                <p className="text-default-600 mb-4">
                  Destructuring, spread operator, and functional programming concepts.
                </p>
                <Snippet
                  hideSymbol
                  hideCopyButton={false}
                  variant="bordered"
                  color="default"
                  className="w-full"
                >
                  <pre className="language-javascript">
                    <code>{`// Destructuring and spread operator
const person = { name: "Alice", age: 30, city: "New York" };
const { name, ...rest } = person;
console.log(name); // "Alice"
console.log(rest); // { age: 30, city: "New York" }

// Array methods and arrow functions
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * n)
  .reduce((sum, n) => sum + n, 0);

console.log(result); // 220 (sum of squares of even numbers)

// Template literals and optional chaining
const user = { profile: { name: "John" } };
const greeting = \`Hello, \${user.profile?.name ?? 'Guest'}!\`;
console.log(greeting); // "Hello, John!"`}</code>
                  </pre>
                </Snippet>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg font-semibold">Async/Await & Promises</h3>
                  <Chip color="warning" size="sm" variant="flat">Intermediate</Chip>
                </div>
                <p className="text-default-600 mb-4">
                  Asynchronous JavaScript programming with modern syntax.
                </p>
                <Snippet
                  hideSymbol
                  hideCopyButton={false}
                  variant="bordered"
                  color="default"
                  className="w-full"
                >
                  <pre className="language-javascript">
                    <code>{`// Async/await with error handling
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

// Promise.all for concurrent requests
async function fetchMultipleUsers(userIds) {
  const promises = userIds.map(id => fetchUserData(id));
  
  try {
    const users = await Promise.all(promises);
    return users;
  } catch (error) {
    console.error('Failed to fetch some users:', error);
    return [];
  }
}

// Usage
fetchMultipleUsers([1, 2, 3])
  .then(users => console.log('All users:', users))
  .catch(err => console.error('Error:', err));`}</code>
                  </pre>
                </Snippet>
              </div>
            </div>
          </Tab>

          <Tab key="react" title="React">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg font-semibold">Functional Component with Hooks</h3>
                  <Chip color="secondary" size="sm" variant="flat">React</Chip>
                </div>
                <p className="text-default-600 mb-4">
                  Modern React component using hooks for state management.
                </p>
                <Snippet
                  hideSymbol
                  hideCopyButton={false}
                  variant="bordered"
                  color="default"
                  className="w-full"
                >
                  <pre className="language-jsx">
                    <code>{`import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      
      <div className="flex gap-2 mb-4">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          className="flex-1 px-3 py-2 border rounded"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        {['all', 'active', 'completed'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={\`px-3 py-1 rounded \${
              filter === f ? 'bg-gray-200' : 'bg-gray-100'
            }\`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <ul className="space-y-2">
        {filteredTodos.map(todo => (
          <li
            key={todo.id}
            className="flex items-center gap-2 p-2 border rounded"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              className={\`flex-1 \${
                todo.completed ? 'line-through text-gray-500' : ''
              }\`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-2 py-1 bg-red-500 text-white rounded text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;`}</code>
                  </pre>
                </Snippet>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg font-semibold">HeroUI Component Usage</h3>
                  <Chip color="success" size="sm" variant="flat">HeroUI</Chip>
                </div>
                <p className="text-default-600 mb-4">
                  Using HeroUI components in a React application.
                </p>
                <Snippet
                  hideSymbol
                  hideCopyButton={false}
                  variant="bordered"
                  color="default"
                  className="w-full"
                >
                  <pre className="language-jsx">
                    <code>{`import { 
  Button, 
  Card, 
  CardBody, 
  Input, 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  useDisclosure 
} from "@heroui/react";

export default function LoginForm() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log('Login attempt:', { email, password });
    onOpen(); // Show success modal
  };

  return (
    <>
      <Card className="max-w-md mx-auto">
        <CardBody className="space-y-4">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            <Button 
              type="submit"
              color="primary" 
              className="w-full"
              size="lg"
            >
              Sign In
            </Button>
          </form>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Login Successful</ModalHeader>
              <ModalBody>
                <p>Welcome back! You have successfully logged in.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Continue
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}`}</code>
                  </pre>
                </Snippet>
              </div>
            </div>
          </Tab>

          <Tab key="config" title="Configuration">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg font-semibold">Package.json Setup</h3>
                  <Chip color="default" size="sm" variant="flat">Config</Chip>
                </div>
                <p className="text-default-600 mb-4">
                  Essential package.json configuration for a HeroUI project.
                </p>
                <Snippet
                  hideSymbol
                  hideCopyButton={false}
                  variant="bordered"
                  color="default"
                  className="w-full"
                >
                  <pre className="language-json">
                    <code>{`{
  "name": "my-heroui-app",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "eslint --fix",
    "preview": "next build && next start"
  },
  "dependencies": {
    "@heroui/react": "^2.4.24",
    "@heroui/theme": "^2.4.24",
    "next": "15.5.9",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^11.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "15.5.9",
    "typescript": "^5.0.0"
  }
}`}</code>
                  </pre>
                </Snippet>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg font-semibold">Tailwind Configuration</h3>
                  <Chip color="primary" size="sm" variant="flat">Tailwind</Chip>
                </div>
                <p className="text-default-600 mb-4">
                  Tailwind CSS configuration file for HeroUI integration.
                </p>
                <Snippet
                  hideSymbol
                  hideCopyButton={false}
                  variant="bordered"
                  color="default"
                  className="w-full"
                >
                  <pre className="language-javascript">
                    <code>{`// tailwind.config.js
import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#DD62ED",
              foreground: "#ffffff",
            },
          },
        },
        dark: {
          colors: {
            background: "#000000",
            foreground: "#ECEDEE",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#DD62ED",
              foreground: "#ffffff",
            },
          },
        },
      },
    })
  ],
};`}</code>
                  </pre>
                </Snippet>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg font-semibold">Next.js Configuration</h3>
                  <Chip color="success" size="sm" variant="flat">Next.js</Chip>
                </div>
                <p className="text-default-600 mb-4">
                  Next.js configuration for optimal HeroUI performance.
                </p>
                <Snippet
                  hideSymbol
                  hideCopyButton={false}
                  variant="bordered"
                  color="default"
                  className="w-full"
                >
                  <pre className="language-javascript">
                    <code>{`// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable static exports for deployment
  output: 'export',
  trailingSlash: true,
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

module.exports = nextConfig;`}</code>
                  </pre>
                </Snippet>
              </div>
            </div>
          </Tab>
        </Tabs>
      </section>

      <Divider className="mb-8" />

      {/* Interactive Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Live Component Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Button Variants</h3>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button size="sm" color="primary">Primary</Button>
                <Button size="sm" color="success">Success</Button>
                <Button size="sm" color="warning">Warning</Button>
                <Button size="sm" color="danger">Danger</Button>
              </div>
              <Snippet hideSymbol hideCopyButton={false} variant="bordered" color="default" className="w-full">
                {`<Button color="primary">Primary</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>`}
              </Snippet>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Chip Examples</h3>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Chip size="sm" color="primary">Primary</Chip>
                <Chip size="sm" color="success">Success</Chip>
                <Chip size="sm" color="warning" variant="dot">Dot</Chip>
                <Chip size="sm" color="danger" variant="bordered">Bordered</Chip>
              </div>
              <Snippet hideSymbol hideCopyButton={false} variant="bordered" color="default" className="w-full">
                {`<Chip color="primary">Primary</Chip>
<Chip color="success">Success</Chip>
<Chip color="warning" variant="dot">Dot</Chip>
<Chip color="danger" variant="bordered">Bordered</Chip>`}
              </Snippet>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <section className="text-center">
        <p className="text-default-500">
          All code snippets are interactive and can be copied with the <Code>copy button</Code>. 
          Visit the HeroUI documentation for more detailed examples and API references.
        </p>
      </section>
    </div>
  );
}