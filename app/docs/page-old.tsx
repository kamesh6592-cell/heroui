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

      {/* Programming Languages Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Programming Languages</h2>
        
        <Tabs aria-label="Programming Languages" color="primary" variant="bordered">
          <Tab key="c" title="C Language">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-semibold">Hello World Program</h3>
                    <Chip color="success" size="sm">Basic</Chip>
                  </div>
                </CardHeader>
                <CardBody>
                  <Snippet language="c" symbol="">
{`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`}
                  </Snippet>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-semibold">Factorial Calculator</h3>
                    <Chip color="warning" size="sm">Intermediate</Chip>
                  </div>
                </CardHeader>
                <CardBody>
                  <Snippet language="c" symbol="">
{`#include <stdio.h>

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    int num = 5;
    printf("Factorial of %d is %d\\n", num, factorial(num));
    return 0;
}`}
                  </Snippet>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-semibold">Linked List Implementation</h3>
                    <Chip color="danger" size="sm">Advanced</Chip>
                  </div>
                </CardHeader>
                <CardBody>
                  <Snippet language="c" symbol="">
{`#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

void push(struct Node** head_ref, int new_data) {
    struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));
    new_node->data = new_data;
    new_node->next = (*head_ref);
    (*head_ref) = new_node;
}

void printList(struct Node* node) {
    while (node != NULL) {
        printf("%d -> ", node->data);
        node = node->next;
    }
    printf("NULL\\n");
}

int main() {
    struct Node* head = NULL;
    push(&head, 1);
    push(&head, 4);
    push(&head, 2);
    push(&head, 3);
    
    printf("Created Linked list is: ");
    printList(head);
    return 0;
}`}
                  </Snippet>
                </CardBody>
              </Card>
            </div>
          </Tab>

          <Tab key="python" title="Python">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-semibold">List Comprehensions</h3>
                    <Chip color="success" size="sm">Basic</Chip>
                  </div>
                </CardHeader>
                <CardBody>
                  <Snippet language="python" symbol="">
{`# Basic list comprehension
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_squares = [x**2 for x in numbers if x % 2 == 0]
print(even_squares)  # [4, 16, 36, 64, 100]

# Nested list comprehension
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for row in matrix for num in row]
print(flattened)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]`}
                  </Snippet>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-semibold">Class Definition</h3>
                    <Chip color="warning" size="sm">Intermediate</Chip>
                  </div>
                </CardHeader>
                <CardBody>
                  <Snippet language="python" symbol="">
{`class BankAccount:
    def __init__(self, account_holder, initial_balance=0):
        self.account_holder = account_holder
        self.balance = initial_balance
        self.transaction_history = []

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            self.transaction_history.append(f"Deposited ${amount}")
            return True
        return False

    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            self.transaction_history.append(f"Withdrew ${amount}")
            return True
        return False

    def get_balance(self):
        return self.balance

# Usage
account = BankAccount("John Doe", 1000)
account.deposit(500)
account.withdraw(200)
print(f"Balance: ${account.get_balance()}")`}
                  </Snippet>
                </CardBody>
              </Card>
            </div>
          </Tab>

          <Tab key="javascript" title="JavaScript">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-semibold">Modern JavaScript Features</h3>
                    <Chip color="success" size="sm">Modern JS</Chip>
                  </div>
                </CardHeader>
                <CardBody>
                  <Snippet language="javascript" symbol="">
{`// Destructuring and spread operator
const person = { name: "Alice", age: 30, city: "New York" };
const { name, ...rest } = person;
console.log(name); // "Alice"
console.log(rest); // { age: 30, city: "New York" }

// Array methods and arrow functions
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers
  .filter(n => n > 2)
  .map(n => n * 2)
  .reduce((sum, n) => sum + n, 0);

console.log(doubled); // 24

// Async/await
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}`}
                  </Snippet>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-semibold">React Component</h3>
                    <Chip color="warning" size="sm">React</Chip>
                  </div>
                </CardHeader>
                <CardBody>
                  <Snippet language="jsx" symbol="">
{`import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Load todos from localStorage
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div className="todo-list">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo..."
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;`}
                  </Snippet>
                </CardBody>
              </Card>
            </div>
          </Tab>

          <Tab key="java" title="Java">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-semibold">Object-Oriented Programming</h3>
                    <Chip color="warning" size="sm">OOP</Chip>
                  </div>
                </CardHeader>
                <CardBody>
                  <Snippet language="java" symbol="">
{`public class Animal {
    protected String name;
    protected int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void makeSound() {
        System.out.println(name + " makes a sound");
    }

    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

class Dog extends Animal {
    private String breed;

    public Dog(String name, int age, String breed) {
        super(name, age);
        this.breed = breed;
    }

    @Override
    public void makeSound() {
        System.out.println(name + " barks: Woof! Woof!");
    }

    public void fetch() {
        System.out.println(name + " is fetching the ball");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog("Buddy", 3, "Golden Retriever");
        myDog.displayInfo();
        myDog.makeSound();
        myDog.fetch();
    }
}`}
                  </Snippet>
                </CardBody>
              </Card>
            </div>
          </Tab>

          <Tab key="sql" title="SQL">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-semibold">Database Operations</h3>
                    <Chip color="primary" size="sm">Database</Chip>
                  </div>
                </CardHeader>
                <CardBody>
                  <Snippet language="sql" symbol="">
{`-- Create table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login DATETIME,
    is_active BOOLEAN DEFAULT TRUE
);

-- Insert data
INSERT INTO users (username, email) VALUES 
    ('john_doe', 'john@example.com'),
    ('jane_smith', 'jane@example.com'),
    ('bob_johnson', 'bob@example.com');

-- Complex query with JOIN
SELECT 
    u.username,
    u.email,
    COUNT(o.id) as order_count,
    SUM(o.total_amount) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.is_active = TRUE
GROUP BY u.id, u.username, u.email
HAVING COUNT(o.id) > 0
ORDER BY total_spent DESC
LIMIT 10;

-- Update with subquery
UPDATE users 
SET last_login = NOW() 
WHERE id IN (
    SELECT DISTINCT user_id 
    FROM user_sessions 
    WHERE login_time > DATE_SUB(NOW(), INTERVAL 1 DAY)
);`}
                  </Snippet>
                </CardBody>
              </Card>
            </div>
          </Tab>
        </Tabs>
      </section>

      <Divider className="mb-8" />

      {/* Installation & Setup Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Installation & Setup Commands</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">HeroUI Installation</h3>
            </CardHeader>
            <CardBody className="space-y-4">
              <div>
                <p className="mb-2 text-sm text-default-500">Initialize new project:</p>
                <Snippet symbol="$" color="primary">
                  npx heroui-cli@latest init my-app
                </Snippet>
              </div>
              <div>
                <p className="mb-2 text-sm text-default-500">Add components:</p>
                <Snippet symbol="$" color="success">
                  npx heroui-cli add button card input
                </Snippet>
              </div>
              <div>
                <p className="mb-2 text-sm text-default-500">Install all components:</p>
                <Snippet symbol="$" color="warning">
                  npm install @heroui/react
                </Snippet>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Development Commands</h3>
            </CardHeader>
            <CardBody className="space-y-4">
              <div>
                <p className="mb-2 text-sm text-default-500">Start development server:</p>
                <Snippet symbol="$" color="primary">
                  npm run dev
                </Snippet>
              </div>
              <div>
                <p className="mb-2 text-sm text-default-500">Build for production:</p>
                <Snippet symbol="$" color="success">
                  npm run build
                </Snippet>
              </div>
              <div>
                <p className="mb-2 text-sm text-default-500">Install dependencies:</p>
                <Snippet symbol="$" color="warning">
                  npm install
                </Snippet>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      <Divider className="mb-8" />

      {/* Configuration Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Configuration Files</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Tailwind CSS Configuration</h3>
            </CardHeader>
            <CardBody>
              <Snippet language="javascript" symbol="">
{`// tailwind.config.js
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
  plugins: [heroui({
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
    },
  })],
};`}
              </Snippet>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Next.js Configuration</h3>
            </CardHeader>
            <CardBody>
              <Snippet language="javascript" symbol="">
{`// next.config.js
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
    domains: ['example.com', 'cdn.example.com'],
    formats: ['image/webp', 'image/avif'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

module.exports = nextConfig;`}
              </Snippet>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <section className="text-center">
        <p className="text-default-500">
          Copy any code snippet by clicking the <Code>copy</Code> button. 
          All examples are ready to use and fully documented.
        </p>
      </section>
    </div>
  );
}
