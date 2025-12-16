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

      {/* Quick Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Install HeroUI</h3>
            </CardHeader>
            <CardBody className="space-y-4">
              <Snippet symbol="$" color="primary">
                npx heroui-cli@latest init my-app
              </Snippet>
              <Snippet symbol="$" color="success">
                cd my-app && npm install
              </Snippet>
              <Snippet symbol="$" color="warning">
                npm run dev
              </Snippet>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Add Components</h3>
            </CardHeader>
            <CardBody className="space-y-4">
              <Snippet symbol="$" color="primary">
                heroui-cli add button
              </Snippet>
              <Snippet symbol="$" color="success">
                heroui-cli add card input
              </Snippet>
              <Snippet symbol="$" color="warning">
                npm install @heroui/react
              </Snippet>
            </CardBody>
          </Card>
        </div>
      </section>

      <Divider className="mb-8" />

      {/* Programming Examples */}
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
                  <Snippet language="c">
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
                    <h3 className="text-lg font-semibold">Factorial Function</h3>
                    <Chip color="warning" size="sm">Intermediate</Chip>
                  </div>
                </CardHeader>
                <CardBody>
                  <Snippet language="c">
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
                  <Snippet language="python">
                    {`# List comprehensions and basic operations
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_squares = [x**2 for x in numbers if x % 2 == 0]
print(even_squares)  # [4, 16, 36, 64, 100]

# Dictionary comprehension
fruits = ['apple', 'banana', 'cherry']
fruit_lengths = {fruit: len(fruit) for fruit in fruits}
print(fruit_lengths)`}
                  </Snippet>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-semibold">Class Definition</h3>
                    <Chip color="warning" size="sm">OOP</Chip>
                  </div>
                </CardHeader>
                <CardBody>
                  <Snippet language="python">
                    {`class Calculator:
    def __init__(self):
        self.history = []
    
    def add(self, a, b):
        result = a + b
        self.history.append(f"{a} + {b} = {result}")
        return result
    
    def multiply(self, a, b):
        result = a * b
        self.history.append(f"{a} * {b} = {result}")
        return result
    
    def get_history(self):
        return self.history

# Usage
calc = Calculator()
calc.add(5, 3)
calc.multiply(4, 7)
print(calc.get_history())`}
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
                    <h3 className="text-lg font-semibold">Modern JavaScript</h3>
                    <Chip color="primary" size="sm">ES6+</Chip>
                  </div>
                </CardHeader>
                <CardBody>
                  <Snippet language="javascript">
                    {`// Destructuring and spread operator
const person = { name: "Alice", age: 30, city: "New York" };
const { name, ...rest } = person;

// Array methods and arrow functions  
const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter(n => n > 2)
  .map(n => n * 2)
  .reduce((sum, n) => sum + n, 0);

console.log(result); // 24

// Async/await
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}`}
                  </Snippet>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-semibold">React Component</h3>
                    <Chip color="secondary" size="sm">React</Chip>
                  </div>
                </CardHeader>
                <CardBody>
                  <Snippet language="jsx">
                    {`import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold">Count: {count}</h2>
      <div className="flex gap-2 mt-4">
        <button 
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;`}
                  </Snippet>
                </CardBody>
              </Card>
            </div>
          </Tab>

          <Tab key="config" title="Configuration">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">Package.json</h3>
                </CardHeader>
                <CardBody>
                  <Snippet language="json">
                    {`{
  "name": "my-heroui-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build", 
    "start": "next start",
    "lint": "eslint --fix"
  },
  "dependencies": {
    "@heroui/react": "^2.4.24",
    "next": "15.5.9",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}`}
                  </Snippet>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">HeroUI Component Usage</h3>
                </CardHeader>
                <CardBody>
                  <Snippet language="jsx">
                    {`import { Button, Card, CardBody, Input } from "@heroui/react";

export default function MyComponent() {
  return (
    <Card className="max-w-md">
      <CardBody className="space-y-4">
        <Input 
          label="Email" 
          placeholder="Enter your email"
          type="email"
        />
        <Input 
          label="Password" 
          placeholder="Enter your password"
          type="password"
        />
        <Button color="primary" className="w-full">
          Sign In
        </Button>
      </CardBody>
    </Card>
  );
}`}
                  </Snippet>
                </CardBody>
              </Card>
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
              <Snippet language="jsx">
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
              <Snippet language="jsx">
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