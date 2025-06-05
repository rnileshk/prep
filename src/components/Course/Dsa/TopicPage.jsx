import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";

const topicData = {
  1: {
    name: "Arrays",
    description: "Learn about arrays, their operations and applications.",
  },
  2: {
    name: "String",
    description: "Master string manipulations, searching and pattern matching.",
  },
  3: {
    name: "Linked List",
    description:
      "Understand linked lists, their types and operations.",
  },
  4: {
    name: "Stacks and Queues",
    description: "Explore stack and queue data structures and their applications.",
  },
  5: {
    name: "Hashing",
    description: "Learn about hash tables, hashing functions and collision resolution.",
  },
  6: {
    name: "Trees",
    description: "Understand tree data structures, binary trees and binary search trees.",
  },
  7: {
    name: "Graphs",
    description: "Explore graph data structures, traversal algorithms and applications.",
  },
  8: {
    name: "Sorting Algorithms",
    description: "Master various sorting algorithms and their complexities.",
  },
  9: {
    name: "Greedy Algorithms",
    description: "Understand greedy algorithms and their applications.",
  },
  10: {
    name: "Dynamic Programming",
    description: "Master dynamic programming techniques and problems.",
  },
};

// topic-specific dummy content
const dummyContentByTopic = {
  1: {
    videos: [
      {
        title: "Arrays Complete Video",
        url: "https://www.youtube.com/embed/37E9ckMDdTk?si=SgWfetoDCl7zls5O",
      },
    ],
    articles: [
      {
        title: "Introduction to Arrays",
        content: (
          <>
            <h3>In this article, we introduce array, implementation in different popular languages, its basic operations and commonly seen problems / interview questions.</h3>
            <li>
              An array stores items (in case of C/C++ and Java Primitive Arrays) or their references (in case of Python, JS, Java Non-Primitive) at contiguous locations.
            </li>
            <li>It offers mainly the following advantages over other data structures.
                <strong>Random Access :</strong> i-th item can be accessed in O(1) Time as we have the base address and every item or reference is of same size.</li>
            <li><strong>Cache Friendly :</strong> Since items / references are stored at contiguous locations, we get the advantage of locality of reference.</li>
            <li>It is not useful in places where we have operations like insert in the middle, delete from middle and search in a unsorted data.</li>
            <li>It is a fundamental and linear data structure using which we build other data structures like Stack Queue, Deque, Graph, Hash Table, etc.</li>
          </>
        ),
      },
      {
        title: "Common Array Methods",
        content: (
          <>
            <h3>Array Methods in JavaScript</h3>
            <p>Some common array methods are:</p>
            <ul>
              <li>
                <code>push()</code>: Adds an element to the end
              </li>
              <li>
                <code>pop()</code>: Removes the last element
              </li>
              <li>
                <code>map()</code>, <code>filter()</code>, <code>reduce()</code>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: " Subarray vs Subsequence",
        content: (
          <>
            <ul>
              <li>
                Subarray: Contiguous part of array. [2, 3] in [1, 2, 3, 4]
              </li>
              <li>
                Subsequence: Elements not necessarily contiguous. [1, 3, 4] in [1, 2, 3, 4]
              </li>
              <li>
                Count of subarrays: n(n+1)/2
              </li>
              <li>Count of subsequences: 2^n</li>

            </ul>
          </>
        ),
      },
    ],
    problems: [
      { id: 1, title: "Second Largest Element", difficulty: "Easy" },
      { id: 2, title: "Kadane's Algorithm", difficulty: "Medium" },
    ],
  },
  2: {
    videos: [
      {
        title: "Strings Complete Video",
        url: "https://www.youtube.com/embed/EREfTIcnPrc?si=ppDLyaFavW7_CYpm",
      },
    ],
    articles: [
      {
        title: "Strings in JavaScript",
        content: (
          <>
            <h3>What are Strings?</h3>
            <p>
              A string is a sequence of characters used to represent text. In JavaScript, strings are immutable and can be manipulated using various methods.
            </p>
            <p>
              They are a fundamental data structure in most programming
              languages.
            </p>
            <h4>Key Points:</h4>
            <ul>
              <li>Immutable</li>
              <li>Index-based access</li>
              <li>Efficient read operations</li>
            </ul>
          </>
        ),
      },
      {
        title: "Common String Methods",
        content: (
          <>
            <h3>String Methods in JavaScript</h3>
            <p>Some common string methods are:</p>
            <ul>
              <li>
                <code>charAt()</code>: Returns the character at a specified index
              </li>
              <li>
                <code>substring()</code>: Extracts a substring from a string
              </li>
              <li>
                <code>split()</code>: Splits a string into an array of substrings
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "String Manipulation",
        content: (
          <>
            <h3>String Manipulation Techniques</h3>
            <p>Some common string manipulation techniques are:</p>
            <ul>
              <li>
                <code>concat()</code>: Joins two or more strings
              </li>
              <li>
                <code>replace()</code>: Replaces a specified value with another value
              </li>
              <li>
                <code>toUpperCase()</code>, <code>toLowerCase()</code>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "String Searching Algorithms",
        content: (
          <>
            <h3>String Searching Algorithms</h3>
            <p>Some common string searching algorithms are:</p>
            <ul>
              <li>
                Naive Search
              </li>
              <li>
                KMP Algorithm
              </li>
              <li>
                Rabin-Karp Algorithm
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "String Pattern Matching",
        content: (
          <>
            <h3>String Pattern Matching Techniques</h3>
            <p>Some common string pattern matching techniques are:</p>
            <ul>
              <li>
                Brute Force
              </li>
              <li>
                KMP Algorithm
              </li>
              <li>
                Rabin-Karp Algorithm
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "String Compression",
        content: (
          <>
            <h3>String Compression Techniques</h3>
            <p>Some common string compression techniques are:</p>
            <ul>
              <li>
                Run Length Encoding
              </li>
              <li>
                Huffman Coding
              </li>
              <li>
                Lempel-Ziv-Welch (LZW)
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "String Encoding and Decoding",
        content: (
          <>
            <h3>String Encoding and Decoding Techniques</h3>
            <p>Some common string encoding and decoding techniques are:</p>
            <ul>
              <li>
                Base64 Encoding
              </li>
              <li>
                URL Encoding
              </li>
              <li>
                ASCII Encoding
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "String Validation",
        content: (
          <>
            <h3>String Validation Techniques</h3>
            <p>Some common string validation techniques are:</p>
            <ul>
              <li>
                Regular Expressions
              </li>
              <li>
                String Length Check
              </li>
              <li>
                Character Set Check
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "String Comparison",
        content: (
          <>
            <h3>String Comparison Techniques</h3>
            <p>Some common string comparison techniques are:</p>
            <ul>
              <li>
                Lexicographical Comparison
              </li>
              <li>
                Length Comparison
              </li>
              <li>
                Character Set Comparison
              </li>
            </ul>
          </>
        ),
      }
    ],
    problems: [
      { id: 1, title: "Longest Palindromic Substring", difficulty: "Medium" },
      { id: 2, title: "String Permutations", difficulty: "Medium" },
      { id: 3, title: "Anagram Check", difficulty: "Easy" },
      { id: 4, title: "String Compression", difficulty: "Medium" },
      { id: 5, title: "String Rotation", difficulty: "Medium" },
      { id: 6, title: "Longest Common Prefix", difficulty: "Easy" },
      { id: 7, title: "Group Anagrams", difficulty: "Medium" },
    ],
  },
  3: {
    videos: [
      {
        title: "Linked List Complete Video",
        url: "https://www.youtube.com/embed/LyuuqCVkP5I?si=kM9ur_635nIgoOQ2",
      },
    ],
    articles: [
      {
        title: "Linked List in JavaScript",
        content: (
          <>
            <h3>What are Linked Lists?</h3>
            <p>
              A linked list is a linear data structure where each element is a separate object. Each element (node) of a list comprises two parts: data and a reference (link) to the next node in the sequence.
            </p>
            <p>
              They are a fundamental data structure in most programming
              languages.
            </p>
            <h4>Key Points:</h4>
            <ul>
              <li>Dynamic size</li>
              <li>Sequential access</li>
              <li>Efficient insertions/deletions</li>
            </ul>
          </>
        ),
      },
      {
        title: "Common Linked List Operations",
        content: (
          <>
            <h3>Linked List Operations in JavaScript</h3>
            <p>Some common linked list operations are:</p>
            <ul>
              <li>
                Insertion
              </li>
              <li>
                Deletion
              </li>
              <li>
                Traversal
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Linked List Types",
        content: (
          <>
            <h3>Types of Linked Lists</h3>
            <p>Some common types of linked lists are:</p>
            <ul>
              <li>
                Singly Linked List
              </li>
              <li>
                Doubly Linked List
              </li>
              <li>
                Circular Linked List
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Linked List Applications",
        content: (
          <>
            <h3>Applications of Linked Lists</h3>
            <p>Some common applications of linked lists are:</p>
            <ul>
              <li>
                Implementing stacks and queues
              </li>
              <li>
                Dynamic memory allocation
              </li>
              <li>
                Graph representation
              </li>
            </ul>
          </>
        ),
      },
    ],
    problems: [
      { id: 1, title: "Reverse a Linked List", difficulty: "Easy" },
      { id: 2, title: "Detect Cycle in a Linked List", difficulty: "Medium" },
      { id: 3, title: "Merge Two Sorted Linked Lists", difficulty: "Easy" },
      { id: 4, title: "Remove N-th Node From End of List", difficulty: "Medium" },
    ],
  },
  4: {
    videos: [
      {
        title: "Stacks and Queues Complete Video",
        url: "https://www.youtube.com/embed/tqQ5fTamIN4?si=qygvs2NDoR_FPj2Z",
      },
    ],
    articles: [
      {
        title: "Stacks and Queues in JavaScript",
        content: (
          <>
            <h3>What are Stacks and Queues?</h3>
            <p>
              Stacks and queues are linear data structures that store elements in a specific order. A stack follows the Last In First Out (LIFO) principle, while a queue follows the First In First Out (FIFO) principle.
            </p>
            <p>
              They are fundamental data structures in most programming
              languages.
            </p>
            <h4>Key Points:</h4>
            <ul>
              <li>Stack: LIFO</li>
              <li>Queue: FIFO</li>
              <li>Efficient insertions/deletions</li>
            </ul>
          </>
        ),
      },
      {
        title: "Common Stack and Queue Operations",
        content: (
          <>
            <h3>Stack and Queue Operations in JavaScript</h3>
            <p>Some common stack and queue operations are:</p>
            <ul>
              <li>
                Push/Enqueue
              </li>
              <li>
                Pop/Dequeue
              </li>
              <li>
                Peek
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Stacks and Queues Types",
        content: (
          <>
            <h3>Types of Stacks and Queues</h3>
            <p>Some common types of stacks and queues are:</p>
            <ul>
              <li>
                Stack: Array-based, Linked List-based
              </li>
              <li>
                Queue: Array-based, Linked List-based
              </li>
              <li>
                Circular Queue
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Stacks and Queues Applications",
        content: (
          <>
            <h3>Applications of Stacks and Queues</h3>
            <p>Some common applications of stacks and queues are:</p>
            <ul>
              <li>
                Implementing recursion
              </li>
              <li>
                Undo/Redo functionality
              </li>
              <li>
                Task scheduling
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Stacks and Queues Algorithms",
        content: (
          <>
            <h3>Common Stacks and Queues Algorithms</h3>
            <p>Some common stacks and queues algorithms are:</p>
            <ul>
              <li>
                Depth First Search (DFS)
              </li>
              <li>
                Breadth First Search (BFS)
              </li>
              <li>
                Dijkstra's Algorithm
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Stacks and Queues Complexity Analysis",
        content: (
          <>
            <h3>Complexity Analysis of Stacks and Queues</h3>
            <p>Some common complexity analysis techniques are:</p>
            <ul>
              <li>
                Time Complexity
              </li>
              <li>
                Space Complexity
              </li>
              <li>
                Amortized Analysis
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Stacks and Queues Comparison",
        content: (
          <>
            <h3>Comparison of Stacks and Queues</h3>
            <p>Some common comparison techniques are:</p>
            <ul>
              <li>
                Stack vs Queue
              </li>
              <li>
                Array-based vs Linked List-based
              </li>
              <li>
                Circular vs Non-Circular
              </li>
            </ul>
          </>
        ),
      }
    ],
    problems: [
      { id: 1, title: "Implement Stack using Queues", difficulty: "Medium" },
      { id: 2, title: "Implement Queue using Stacks", difficulty: "Medium" },
      { id: 3, title: "Valid Parentheses", difficulty: "Easy" },
      { id: 4, title: "Min Stack", difficulty: "Easy" },
      { id: 5, title: "Evaluate Reverse Polish Notation", difficulty: "Medium" },
      { id: 6, title: "Daily Temperatures", difficulty: "Medium" },
    ],
  },
  5: {
    videos: [
      {
        title: "Hashing Complete Video",
        url: "https://www.youtube.com/embed/KEs5UyBJ39g?si=mc7P5Hfmqln0Ey6L",
      },
    ],
    articles: [
      {
        title: "Hashing in JavaScript",
        content: (
          <>
            <h3>What is Hashing?</h3>
            <p>
              Hashing is a technique used to convert data into a fixed-size value or key. It is commonly used in data structures like hash tables to quickly locate a data record.
            </p>
            <p>
              It is a fundamental data structure in most programming
              languages.
            </p>
            <h4>Key Points:</h4>
            <ul>
              <li>Fast data retrieval</li>
              <li>Efficient memory usage</li>
              <li>Collision resolution techniques</li>
            </ul>
          </>
        ),
      },
      {
        title: "Common Hashing Techniques",
        content: (
          <>
            <h3>Hashing Techniques in JavaScript</h3>
            <p>Some common hashing techniques are:</p>
            <ul>
              <li>
                Division Method
              </li>
              <li>
                Multiplication Method
              </li>
              <li>
                Universal Hashing
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Hash Tables",
        content: (
          <>
            <h3>Hash Tables in JavaScript</h3>
            <p>Some common hash table operations are:</p>
            <ul>
              <li>
                Insertion
              </li>
              <li>
                Deletion
              </li>
              <li>
                Searching
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Hash Functions",
        content: (
          <>
            <h3>Hash Functions in JavaScript</h3>
            <p>Some common hash functions are:</p>
            <ul>
              <li>
                MD5
              </li>
              <li>
                SHA-1
              </li>
              <li>
                SHA-256
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Collision Resolution Techniques",
        content: (
          <>
            <h3>Collision Resolution Techniques in JavaScript</h3>
            <p>Some common collision resolution techniques are:</p>
            <ul>
              <li>
                Chaining
              </li>
              <li>
                Open Addressing
              </li>
              <li>
                Double Hashing
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Hashing Applications",
        content: (
          <>
            <h3>Applications of Hashing</h3>
            <p>Some common applications of hashing are:</p>
            <ul>
              <li>
                Data retrieval
              </li>
              <li>
                Cryptography
              </li>
              <li>
                Data integrity
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Hashing Complexity Analysis",
        content: (
          <>
            <h3>Complexity Analysis of Hashing</h3>
            <p>Some common complexity analysis techniques are:</p>
            <ul>
              <li>
                Time Complexity
              </li>
              <li>
                Space Complexity
              </li>
              <li>
                Amortized Analysis
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Hashing Comparison",
        content: (
          <>
            <h3>Comparison of Hashing Techniques</h3>
            <p>Some common comparison techniques are:</p>
            <ul>
              <li>
                Hash Table vs Array
              </li>
              <li>
                Hash Table vs Linked List
              </li>
              <li>
                Hash Table vs Tree
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Hashing Security",
        content: (
          <>
            <h3>Security in Hashing</h3>
            <p>Some common security techniques are:</p>
            <ul>
              <li>
                Hashing Algorithms
              </li>
              <li>
                Digital Signatures
              </li>
              <li>
                Message Authentication Codes (MAC)
              </li>
            </ul>
          </>
        ),
      }
    ],
    problems: [
      { id: 1, title: "Two Sum", difficulty: "Easy" },
      { id: 2, title: "Group Anagrams", difficulty: "Medium" },
      { id: 3, title: "Longest Consecutive Sequence", difficulty: "Medium" },
      { id: 4, title: "Contains Duplicate", difficulty: "Easy" },
    ],
  },
  6: {
    videos: [
      {
        title: "Trees Complete Video",
        url: "https://www.youtube.com/embed/-DzowlcaUmE?si=lVKDFzZ3P5ZFH0Px",
      },
    ],
    articles: [
      {
        title: "Trees in JavaScript",
        content: (
          <>
            <h3>What are Trees?</h3>
            <p>
              A tree is a hierarchical data structure that consists of nodes connected by edges. Each tree has a root node, and each node can have zero or more child nodes.
            </p>
            <p>
              They are a fundamental data structure in most programming
              languages.
            </p>
            <h4>Key Points:</h4>
            <ul>
              <li>Hierarchical structure</li>
              <li>Efficient searching and sorting</li>
              <li>Dynamic size</li>
            </ul>
          </>
        ),
      },
      {
        title: "Common Tree Operations",
        content: (
          <>
            <h3>Tree Operations in JavaScript</h3>
            <p>Some common tree operations are:</p>
            <ul>
              <li>
                Insertion
              </li>
              <li>
                Deletion
              </li>
              <li>
                Traversal
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Tree Types",
        content: (
          <>
            <h3>Types of Trees</h3>
            <p>Some common types of trees are:</p>
            <ul>
              <li>
                Binary Tree
              </li>
              <li>
                Binary Search Tree
              </li>
              <li>
                AVL Tree
              </li>
              <li>
                Red-Black Tree
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Tree Traversal Algorithms",
        content: (
          <>
            <h3>Tree Traversal Algorithms</h3>
            <p>Some common tree traversal algorithms are:</p>
            <ul>
              <li>Pre-order Traversal</li>
              <li>In-order Traversal</li>
              <li>Post-order Traversal</li>
              <li>Breadth-first Traversal</li>
              <li>Depth-first Traversal</li>
            </ul>
          </>
        ),
      },
      {
        title: "Tree Applications",
        content: (
          <>
            <h3>Applications of Trees</h3>
            <p>Some common applications of trees are:</p>
            <ul>
              <li>
                Hierarchical data representation
              </li>
              <li>
                File systems
              </li>
              <li>
                Database indexing
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Tree Complexity Analysis",
        content: (
          <>
            <h3>Complexity Analysis of Trees</h3>
            <p>Some common complexity analysis techniques are:</p>
            <ul>
              <li>
                Time Complexity
              </li>
              <li>
                Space Complexity
              </li>
              <li>
                Amortized Analysis
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Tree Comparison",
        content: (
          <>
            <h3>Comparison of Tree Types</h3>
            <p>Some common comparison techniques are:</p>
            <ul>
              <li>Binary Tree vs Binary Search Tree</li>
              <li>AVL Tree vs Red-Black Tree</li>
              <li>Heap vs Binary Search Tree</li>
            </ul>
          </>
        ),
      },
      {
        title: "Tree Traversal Techniques",
        content: (
          <>
            <h3>Tree Traversal Techniques</h3>
            <p>Some common tree traversal techniques are:</p>
            <ul>
              <li>Recursive Traversal</li>
              <li>Iterative Traversal</li>
              <li>Level Order Traversal</li>
            </ul>
          </>
        ),
      },
      {
        title: "Tree Representation",
        content: (
          <>
            <h3>Tree Representation Techniques</h3>
            <p>Some common tree representation techniques are:</p>
            <ul>
              <li>Array Representation</li>
              <li>Linked List Representation</li>
              <li>Parent Array Representation</li>
            </ul>
          </>
        ),
      },
      {
        title: "Tree Balancing Techniques",
        content: (
          <>
            <h3>Tree Balancing Techniques</h3>
            <p>Some common tree balancing techniques are:</p>
            <ul>
              <li>AVL Tree Balancing</li>
              <li>Red-Black Tree Balancing</li>
              <li>Splay Tree Balancing</li>
            </ul>
          </>
        ),
      },
      {
        title: "Tree Searching Algorithms",
        content: (
          <>
            <h3>Tree Searching Algorithms</h3>
            <p>Some common tree searching algorithms are:</p>
            <ul>
              <li>Binary Search Tree Search</li>
              <li>AVL Tree Search</li>
              <li>Red-Black Tree Search</li>
            </ul>
          </>
        ),
      },
      {
        title: "Tree Sorting Algorithms",
        content: (
          <>
            <h3>Tree Sorting Algorithms</h3>
            <p>Some common tree sorting algorithms are:</p>
            <ul>
              <li>Binary Search Tree Sort</li>
              <li>AVL Tree Sort</li>
              <li>Red-Black Tree Sort</li>
            </ul>
          </>
        ),
      },
      {
        title: "Tree Searching Techniques",
        content: (
          <>
            <h3>Tree Searching Techniques</h3>
            <p>Some common tree searching techniques are:</p>
            <ul>
              <li>Depth First Search (DFS)</li>
              <li>Breadth First Search (BFS)</li>
              <li>Best First Search</li>
            </ul>
          </>
        ),
      },
      {
        title: "Tree Path Finding Algorithms",
        content: (
          <>
            <h3>Tree Path Finding Algorithms</h3>
            <p>Some common tree path finding algorithms are:</p>
            <ul>
              <li>Depth First Search (DFS)</li>
              <li>Breadth First Search (BFS)</li>
              <li>Dijkstra's Algorithm</li>
            </ul>
          </>
        ),
      },
      {
        title: "Tree Traversal Algorithms",
        content: (
          <>
            <h3>Tree Traversal Algorithms</h3>
            <p>Some common tree traversal algorithms are:</p>
            <ul>
              <li>Pre-order Traversal</li>
              <li>In-order Traversal</li>
              <li>Post-order Traversal</li>
              <li>Breadth-first Traversal</li>
              <li>Depth-first Traversal</li>
            </ul>
          </>
        ),
      },
    ],
    problems: [
      { id: 1, title: "Binary Tree Inorder Traversal", difficulty: "Easy" },
      { id: 2, title: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "Medium" },
      { id: 3, title: "Binary Tree Level Order Traversal", difficulty: "Medium" },
      { id: 4, title: "Validate Binary Search Tree", difficulty: "Medium" },
    ],
  },
  7: {
    videos: [
      {
        title: "Graphs Complete Video",
        url: "https://www.youtube.com/embed/lg48ZZe7YUA?si=Qc9eQ5aIC34tz3c3",
      },
    ],
    articles: [
      {
        title: "Graphs in JavaScript",
        content: (
          <>
            <h3>What are Graphs?</h3>
            <p>
              A graph is a non-linear data structure that consists of a set of vertices (nodes) and a set of edges (connections) between them. Graphs can be directed or undirected, weighted or unweighted.
            </p>
            <p>
              They are a fundamental data structure in most programming
              languages.
            </p>
            <h4>Key Points:</h4>
            <ul>
              <li>Non-linear structure</li>
              <li>Efficient searching and sorting</li>
              <li>Dynamic size</li>
            </ul>
          </>
        ),
      },
      {
        title: "Common Graph Operations",
        content: (
          <>
            <h3>Graph Operations in JavaScript</h3>
            <p>Some common graph operations are:</p>
            <ul>
              <li>
                Insertion
              </li>
              <li>
                Deletion
              </li>
              <li>
                Traversal
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Graph Types",
        content: (
          <>
            <h3>Types of Graphs</h3>
            <p>Some common types of graphs are:</p>
            <ul>
              <li>
                Directed Graph
              </li>
              <li>
                Undirected Graph
              </li>
              <li>
                Weighted Graph
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Graph Traversal Algorithms",
        content: (
          <>
            <h3>Graph Traversal Algorithms</h3>
            <p>Some common graph traversal algorithms are:</p>
            <ul>
              <li>Breadth First Search (BFS)</li>
              <li>Depth First Search (DFS)</li>
              <li>Dijkstra's Algorithm</li>
            </ul>
          </>
        ),
      },
      {
        title: "Graph Applications",
        content: (
          <>
            <h3>Applications of Graphs</h3>
            <p>Some common applications of graphs are:</p>
            <ul>
              <li>Social networks</li>
              <li>Web page ranking</li>
              <li>Network routing</li>
            </ul>
          </>
        ),
      },
      {
        title: "Graph Complexity Analysis",
        content: (
          <>
            <h3>Complexity Analysis of Graphs</h3>
            <p>Some common complexity analysis techniques are:</p>
            <ul>
              <li>
                Time Complexity
              </li>
              <li>
                Space Complexity
              </li>
              <li>
                Amortized Analysis
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Graph Comparison",
        content: (
          <>
            <h3>Comparison of Graphs</h3>
            <p>Some common comparison techniques are:</p>
            <ul>
              <li>Directed vs Undirected</li>
              <li>Weighted vs Unweighted</li>
              <li>Cyclic vs Acyclic</li>
            </ul>
          </>
        ),
      },
      {
        title: "Graph Searching Algorithms",
        content: (
          <>
            <h3>Graph Searching Algorithms</h3>
            <p>Some common graph searching algorithms are:</p>
            <ul>
              <li>Breadth First Search (BFS)</li>
              <li>Depth First Search (DFS)</li>
              <li>Dijkstra's Algorithm</li>
            </ul>
          </>
        ),
      },
      {
        title: "Graph Path Finding Algorithms",
        content: (
          <>
            <h3>Graph Path Finding Algorithms</h3>
            <p>Some common graph path finding algorithms are:</p>
            <ul>
              <li>Dijkstra's Algorithm</li>
              <li>A* Algorithm</li>
              <li>Bellman-Ford Algorithm</li>
            </ul>
          </>
        ),
      },
    ],
    problems: [
      { id: 1, title: "Number of Islands", difficulty: "Medium" },
      { id: 2, title: "Course Schedule", difficulty: "Medium" },
      { id: 3, title: "Clone Graph", difficulty: "Medium" },
      { id: 4, title: "Word Ladder", difficulty: "Medium" },
    ],
  },
  8: {
    videos: [
      {
        title: "Sorting Algorithms Complete Video",
        url: "https://www.youtube.com/embed/HGk_ypEuS24?si=FNHVccW1SDp9laz3",
      },
    ],
    articles: [
      {
        title: "Sorting Algorithms in JavaScript",
        content: (
          <>
            <h3>What are Sorting Algorithms?</h3>
            <p>
              Sorting algorithms are algorithms that put elements of a list in a certain order. The most common orders are numerical order and lexicographical order.
            </p>
            <p>
              They are a fundamental data structure in most programming
              languages.
            </p>
            <h4>Key Points:</h4>
            <ul>
              <li>Time complexity</li>
              <li>Space complexity</li>
              <li>Stability</li>
            </ul>
          </>
        ),
      },
      {
        title: "Common Sorting Algorithms",
        content: (
          <>
            <h3>Sorting Algorithms in JavaScript</h3>
            <p>Some common sorting algorithms are:</p>
            <ul>
              <li>Bubble Sort</li>
              <li>Selection Sort</li>
              <li>Insertion Sort</li>
              <li>Merge Sort</li>
              <li>Quick Sort</li>
              <li>Heap Sort</li>
            </ul>
          </>
        ),
      },
      {
        title: "Sorting Algorithm Complexity Analysis",
        content: (
          <>
            <h3>Complexity Analysis of Sorting Algorithms</h3>
            <p>Some common complexity analysis techniques are:</p>
            <ul>
              <li>Time Complexity</li>
              <li>Space Complexity</li>
              <li>Amortized Analysis</li>
            </ul>
          </>
        ),
      },
      {
        title: "Sorting Algorithm Comparison",
        content: (
          <>
            <h3>Comparison of Sorting Algorithms</h3>
            <p>Some common comparison techniques are:</p>
            <ul>
              <li>Stable vs Unstable</li>
              <li>In-place vs Out-of-place</li>
              <li>Comparison-based vs Non-comparison-based</li>
            </ul>
          </>
        ),
      },
    ],
    problems: [
      { id: 1, title: "Sort Colors", difficulty: "Medium" },
      { id: 2, title: "Merge Intervals", difficulty: "Medium" },
      { id: 3, title: "Kth Largest Element in an Array", difficulty: "Medium" },
      { id: 4, title: "Top K Frequent Elements", difficulty: "Medium" },
    ],
  },
  9: {
    videos: [
      {
        title: "Greedy Algorithms Complete Video",
        url: "https://www.youtube.com/embed/-wqKvpYGg1I?si=0KVDFjAmApPE_4Or",
      },
    ],
    articles: [
      {
        title: "Greedy Algorithms in JavaScript",
        content: (
          <>
            <h3>What are Greedy Algorithms?</h3>
            <p>
              Greedy algorithms are algorithms that make the locally optimal choice at each stage with the hope of finding a global optimum. They are used for optimization problems.
            </p>
            <p>
              They are a fundamental technique in most programming languages.
            </p>
            <h4>Key Points:</h4>
            <ul>
              <li>Locally optimal choice</li>
              <li>Global optimum</li>
              <li>Efficiency</li>
            </ul>
          </>
        ),
      },
      {
        title: "Common Greedy Techniques",
        content: (
          <>
            <h3>Greedy Techniques in JavaScript</h3>
            <p>Some common greedy techniques are:</p>
            <ul>
              <li>Activity Selection Problem</li>
              <li>Fractional Knapsack Problem</li>
              <li>Huffman Coding</li>
            </ul>
          </>
        ),
      },
      {
        title: "Greedy Applications",
        content: (
          <>
            <h3>Applications of Greedy Algorithms</h3>
            <p>Some common applications of greedy algorithms are:</p>
            <ul>
              <li>Graph Algorithms (e.g., Prim's, Kruskal's)</li>
              <li>Scheduling Problems</li>
              <li>Network Routing</li>
            </ul>
          </>
        ),
      },
      {
        title: "Greedy Complexity Analysis",
        content: (
          <>
            <h3>Complexity Analysis of Greedy Algorithms</h3>
            <p>Some common complexity analysis techniques are:</p>
            <ul>
              <li>Time Complexity</li>
              <li>Space Complexity</li>
              <li>Amortized Analysis</li>
            </ul>
          </>
        ),
      },
      {
        title: "Greedy Comparison",
        content: (
          <>
            <h3>Comparison of Greedy Techniques</h3>
            <p>Some common comparison techniques are:</p>
            <ul>
              <li>Greedy vs Dynamic Programming</li>
              <li>Greedy vs Brute Force</li>
              <li>Greedy vs Backtracking</li>
            </ul>
          </>
        ),
      },
      {
        title: "Greedy Algorithm Design",
        content: (
          <>
            <h3>Designing Greedy Algorithms</h3>
            <p>Some common design techniques are:</p>
            <ul>
              <li>Greedy Choice Property</li>
              <li>Optimal Substructure</li>
              <li>Proof of Correctness</li>
            </ul>
          </>
        ),
      },
      {
        title: "Greedy Algorithm Examples",
        content: (
          <>
            <h3>Examples of Greedy Algorithms</h3>
            <p>Some common examples are:</p>
            <ul>
              <li>Coin Change Problem</li>
              <li>Job Sequencing Problem</li>
              <li>Minimum Spanning Tree</li>
            </ul>
          </>
        ),
      },
      {
        title: "Greedy Algorithm Limitations",
        content: (
          <>
            <h3>Limitations of Greedy Algorithms</h3>
            <p>Some common limitations are:</p>
            <ul>
              <li>Not always optimal</li>
              <li>May lead to suboptimal solutions</li>
              <li>Requires careful analysis</li>
            </ul>
          </>
        ),
      },
      {
        title: "Greedy Algorithm Optimization",
        content: (
          <>
            <h3>Optimizing Greedy Algorithms</h3>
            <p>Some common optimization techniques are:</p>
            <ul>
              <li>Using priority queues</li>
              <li>Sorting input data</li>
              <li>Reducing problem size</li>
            </ul>
          </>
        ),
      },
      {
        title: "Greedy Algorithm Testing",
        content: (
          <>
            <h3>Testing Greedy Algorithms</h3>
            <p>Some common testing techniques are:</p>
            <ul>
              <li>Unit Testing</li>
              <li>Integration Testing</li>
              <li>Performance Testing</li>
            </ul>
          </>
        ),
      },
      {
        title: "Greedy Algorithm Debugging",
        content: (
          <>
            <h3>Debugging Greedy Algorithms</h3>
            <p>Some common debugging techniques are:</p>
            <ul>
              <li>Print statements</li>
              <li>Step-by-step execution</li>
              <li>Using debuggers</li>
            </ul>
          </>
        ),
      },
      {
        title: "Greedy Algorithm Visualization",
        content: (
          <>
            <h3>Visualizing Greedy Algorithms</h3>
            <p>Some common visualization techniques are:</p>
            <ul>
              <li>Flowcharts</li>
              <li>Graphs</li>
              <li>Animations</li>
            </ul>
          </>
        ),
      },
      {
        title: "Greedy Algorithm Real-World Applications",
        content: (
          <>
            <h3>Real-World Applications of Greedy Algorithms</h3>
            <p>Some common real-world applications are:</p>
            <ul>
              <li>Network routing</li>
              <li>Resource allocation</li>
              <li>Scheduling tasks</li>
            </ul>
          </>
        ),
      },
    ],
    problems: [
      { id: 1, title: "Jump Game II", difficulty: "Medium" },
      { id: 2, title: "Gas Station", difficulty: "Medium" },
      { id: 3, title: "Assign Cookies", difficulty: "Easy" },
      { id: 4, title: "Minimum Number of Arrows to Burst Balloons", difficulty: "Medium" },
    ],
  },
  10: {
    videos: [
      {
        title: "Dynamic Programming Complete Video",
        url: "https://www.youtube.com/embed/tyB0ztf0DNY?si=07x5SOFD7F8rZEHC",
      },
    ],
    articles: [
      {
        title: "Dynamic Programming in JavaScript",
        content: (
          <>
            <h3>What is Dynamic Programming?</h3>
            <p>
              Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems. It is applicable when the problem can be divided into overlapping subproblems that can be solved independently.
            </p>
            <p>
              It is a fundamental technique in most programming languages.
            </p>
            <h4>Key Points:</h4>
            <ul>
              <li>Optimal substructure</li>
              <li>Overlapping subproblems</li>
              <li>Memoization</li>
            </ul>
          </>
        ),
      },
      {
        title: "Common Dynamic Programming Techniques",
        content: (
          <>
            <h3>Dynamic Programming Techniques in JavaScript</h3>
            <p>Some common dynamic programming techniques are:</p>
            <ul>
              <li>Memoization</li>
              <li>Tabulation</li>
              <li>Bottom-up approach</li>
              <li>Top-down approach</li>
            </ul>
          </>
        ),
      },
      {
        title: "Dynamic Programming Applications",
        content: (
          <>
            <h3>Applications of Dynamic Programming</h3>
            <p>Some common applications of dynamic programming are:</p>
            <ul>
              <li>Fibonacci sequence</li>
              <li>Knapsack problem</li>
              <li>Longest common subsequence</li>
              <li>Edit distance</li>
            </ul>
          </>
        ),
      },
      {
        title: "Dynamic Programming Complexity Analysis",
        content: (
          <>
            <h3>Complexity Analysis of Dynamic Programming</h3>
            <p>Some common complexity analysis techniques are:</p>
            <ul>
              <li>Time Complexity</li>
              <li>Space Complexity</li>
              <li>Amortized Analysis</li>
            </ul>
          </>
        ),
      },
      {
        title: "Dynamic Programming Comparison",
        content: (
          <>
            <h3>Comparison of Dynamic Programming Techniques</h3>
            <p>Some common comparison techniques are:</p>
            <ul>
              <li>Memoization vs Tabulation</li>
              <li>Bottom-up vs Top-down</li>
              <li>Recursive vs Iterative</li>
            </ul>
          </>
        ),
      },
    ],
    problems: [
      { id: 1, title: "Climbing Stairs", difficulty: "Easy" },
      { id: 2, title: "House Robber", difficulty: "Medium" },
      { id: 3, title: "Longest Increasing Subsequence", difficulty: "Medium" },
      { id: 4, title: "Coin Change", difficulty: "Medium" },
    ],
  },
};

const TopicPage = () => {
  const { id } = useParams();
  const topic = topicData[id];
  const navigate = useNavigate();
  const content = dummyContentByTopic[id];
  const [activeTab, setActiveTab] = useState("videos");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [readArticles, setReadArticles] = useState([]);

  if (!topic || !content)
    return <h2 style={{ padding: "2rem" }}>Topic not found</h2>;

  const handleNextTopic = () => {
    const nextId = parseInt(id) + 1;
    if (topicData[nextId]) {
      navigate(`/topic/${nextId}`);
      setActiveTab("videos");
      setReadArticles([]);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div
        style={{
          width: isSidebarOpen ? "200px" : "60px",
          background: "#f4f4f4",
          padding: "1rem",
          transition: "width 0.3s",
          overflow: "hidden",
          whiteSpace: "nowrap",
          borderRight: "2px solid aqua",
          borderRadius: "2rem",
        }}
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{
            marginBottom: "1rem",
            cursor: "pointer",
            padding: "0.5rem",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            width: "100%",
          }}
        >
          {isSidebarOpen ? "◀" : "▶"}
        </button>

        {isSidebarOpen && (
          <h3
            style={{
              marginTop: "1rem",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            {topic.name}
          </h3>
        )}
        <Divider />

        <ul
          style={{
            listStyle: "none",
            padding: "auto",
            textAlign: "center",
            marginTop: "4rem",
            fontSize: "1.5rem",
          }}
        >
          <li
            onClick={() => setActiveTab("videos")}
            style={{
              cursor: "pointer",
              marginBottom: "1rem",
              fontWeight: activeTab === "videos" ? "bold" : "normal",
            }}
          >
            {isSidebarOpen ? "Videos" : "🎥"}
          </li>
          <li
            onClick={() => setActiveTab("articles")}
            style={{
              cursor: "pointer",
              marginBottom: "1rem",
              fontWeight: activeTab === "articles" ? "bold" : "normal",
            }}
          >
            {isSidebarOpen ? "Articles" : "📄"}
          </li>
        </ul>
      </div>

      {/* Content Panel */}
      <div style={{ flex: 1, padding: "4rem" }}>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem" }}>
          {topic.name}
        </h2>
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
          {topic.description}
        </p>

        <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }} />

        {activeTab === "videos" && (
          <div>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>Videos</h3>
            {content.videos.map((video, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <p style={{ marginBottom: "1rem" }}>{video.title}</p>
                <iframe
                  width="100%"
                  height="315"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        )}

        {activeTab === "articles" && (
          <div>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>
              Articles
            </h3>
            <ul>
              {content.articles.map((article, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "2rem",
                    marginBottom: "1.5rem",
                    backgroundColor: readArticles.includes(i)
                      ? "#f9f9f9"
                      : "#fff",
                  }}
                >
                  <h3>{article.title}</h3>
                  <div
                    style={{
                      color: "#333",
                      fontSize: "1.2rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {article.content}
                  </div>
                  <button
                    onClick={() =>
                      setReadArticles((prev) =>
                        prev.includes(i)
                          ? prev.filter((index) => index !== i)
                          : [...prev, i]
                      )
                    }
                    style={{
                      marginTop: "1rem",
                      padding: "0.4rem 1rem",
                      backgroundColor: readArticles.includes(i)
                        ? "#dc3545"
                        : "#28a745",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    {readArticles.includes(i)
                      ? "Mark as Unread"
                      : "Mark as Read"}
                  </button>
                </div>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "problems" && (
          <div>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
              Problems
            </h3>
            <ul>
              {content.problems.map((prob) => (
                <li key={prob.id}>
                  <a
                    href={`/problem/${prob.id}`}
                    style={{ textDecoration: "none", color: "#007bff" }}
                  >
                    {prob.title} ({prob.difficulty})
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Next Topic Button */}
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          {topicData[parseInt(id) + 1] && (
            <button
              onClick={handleNextTopic}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "0.75rem 1.5rem",
                border: "none",
                borderRadius: "5px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Next Topic →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicPage;
