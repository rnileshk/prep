// src/constants/index.js

export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  python: "3.10.0",
  java: "15.0.2",
  c: "11.2.0",
  cpp: "11.2.0",
  rust: "1.70.0",
  kotlin: "1.8.0",
  swift: "5.9.1",
  dart: "3.0.0",
  typescript: "5.0.3",
  php: "8.2.3",
  csharp: "10.0",
  ruby: "3.1.2",
  go: "1.20.0",
};

export const CODE_SNIPPETS = {
  javascript: `function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alex");
`,

  cpp: `#include <iostream>
using namespace std;

int main() {
  cout << "Hello, World!" << endl;
  return 0;
}
`,

  c: `#include <stdio.h>

int main() {
  printf("Hello, World!\\n");
  return 0;
}
`,

  python: `def greet(name):
  print("Hello, " + name + "!")

greet("Alex")
`,

  java: `public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
`,

  go: `package main

import "fmt"

func main() {
  fmt.Println("Hello, World!")
}
`,

  rust: `fn main() {
  println!("Hello, World!");
}
`,

  kotlin: `fun main() {
  println("Hello, World!")
}
`,

  ruby: `def greet(name)
  puts "Hello, #{name}!"
end

greet("Alex")
`,

  swift: `func greet(name: String) {
  print("Hello, \\(name)!")
}

greet(name: "Alex")
`,

  dart: `void main() {
  print("Hello, World!");
}
`,

  typescript: `type Params = {
  name: string;
};

function greet(data: Params) {
  console.log("Hello, " + data.name + "!");
}

greet({ name: "Alex" });
`,

  csharp: `using System;

namespace HelloWorld
{
  class Hello {
    static void Main(string[] args) {
      Console.WriteLine("Hello World in C#");
    }
  }
}
`,

  php: `<?php

$name = 'Alex';
echo "Hello, " . $name;
`,
};
