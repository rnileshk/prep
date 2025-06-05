const questions = [
  // --- Numerical Aptitude ---
  {
    question: 'What is 15% of 200?',
    options: ['25', '30', '35', '40'],
    answer: '30',
    explanation: '15% of 200 = (15/100) × 200 = 30',
    category: 'Numerical'
  },
  {
    question: 'If a book costs ₹120 after 20% discount, what was the original price?',
    options: ['₹150', '₹160', '₹140', '₹130'],
    answer: '₹150',
    explanation: 'Let original = x; x - 20%x = 120 → x = 150',
    category: 'Numerical'
  },
  {
    question: 'Simplify: (8 + 2) × (6 - 3)',
    options: ['10', '30', '24', '40'],
    answer: '30',
    explanation: '10 × 3 = 30',
    category: 'Numerical'
  },
  {
    question: 'What is the average of 10, 20, and 30?',
    options: ['15', '20', '25', '30'],
    answer: '20',
    explanation: 'Average = (10+20+30)/3 = 60/3 = 20',
    category: 'Numerical'
  },
  {
    question: 'What is the square root of 144?',
    options: ['11', '12', '13', '14'],
    answer: '12',
    explanation: '√144 = 12',
    category: 'Numerical'
  },
  {
    question: 'Find the HCF of 36 and 60',
    options: ['6', '12', '18', '24'],
    answer: '12',
    explanation: 'HCF of 36 and 60 is 12',
    category: 'Numerical'
  },

  // --- Logical Reasoning ---
  {
    question: 'Find the odd one out: 2, 4, 6, 9, 10',
    options: ['2', '4', '6', '9'],
    answer: '9',
    explanation: 'All are even except 9',
    category: 'Logical'
  },
  {
    question: 'What comes next: 1, 1, 2, 3, 5, 8, ?',
    options: ['11', '12', '13', '14'],
    answer: '13',
    explanation: 'Fibonacci Series: 5 + 8 = 13',
    category: 'Logical'
  },
  {
    question: 'Which one is an even number?',
    options: ['13', '25', '48', '39'],
    answer: '48',
    explanation: '48 is divisible by 2',
    category: 'Logical'
  },
  {
    question: 'How many degrees are there in a right angle?',
    options: ['180°', '90°', '45°', '60°'],
    answer: '90°',
    explanation: 'Right angle = 90°',
    category: 'Logical'
  },
  {
    question: 'The sum of angles in a triangle is?',
    options: ['90°', '180°', '270°', '360°'],
    answer: '180°',
    explanation: 'Sum of triangle’s internal angles = 180°',
    category: 'Logical'
  },
  {
    question: 'Which number is both a square and a cube?',
    options: ['4', '8', '16', '64'],
    answer: '64',
    explanation: '64 = 4³ = 8²',
    category: 'Logical'
  },

  // --- General Knowledge (CS-relevant) ---
  {
    question: 'Which of the following is not a programming language?',
    options: ['Python', 'HTML', 'Java', 'C++'],
    answer: 'HTML',
    explanation: 'HTML is a markup language, not a programming language',
    category: 'General Knowledge'
  },
  {
    question: 'What does "CPU" stand for?',
    options: ['Central Program Unit', 'Central Processing Unit', 'Control Processing Unit', 'Central Processor Utility'],
    answer: 'Central Processing Unit',
    explanation: 'CPU = Central Processing Unit',
    category: 'General Knowledge'
  },
  {
    question: 'Which number system uses base 2?',
    options: ['Decimal', 'Binary', 'Octal', 'Hexadecimal'],
    answer: 'Binary',
    explanation: 'Binary is base-2 number system',
    category: 'General Knowledge'
  },
  {
    question: 'Which company developed the Windows OS?',
    options: ['Apple', 'Microsoft', 'IBM', 'Google'],
    answer: 'Microsoft',
    explanation: 'Microsoft developed Windows',
    category: 'General Knowledge'
  },
  {
    question: 'What does RAM stand for?',
    options: ['Readily Available Memory', 'Random Access Memory', 'Run Access Memory', 'Rapid Action Memory'],
    answer: 'Random Access Memory',
    explanation: 'RAM = Random Access Memory',
    category: 'General Knowledge'
  },
  {
    question: 'Which protocol is used to browse websites?',
    options: ['FTP', 'SMTP', 'HTTP', 'SSH'],
    answer: 'HTTP',
    explanation: 'HTTP = HyperText Transfer Protocol',
    category: 'General Knowledge'
  },

  // --- Programming Logic (7 questions) ---
  {
    question: 'What is the output of: console.log(typeof null);',
    options: ['object', 'null', 'undefined', 'number'],
    answer: 'object',
    explanation: 'In JavaScript, typeof null returns "object" (a historical bug)',
    category: 'Programming Logic'
  },
  {
    question: 'What will this C code print? int a=5; printf("%d", a++);',
    options: ['5', '6', 'Error', 'Undefined'],
    answer: '5',
    explanation: 'Post-increment prints 5, then increments to 6',
    category: 'Programming Logic'
  },
  {
    question: 'What is the output of: print(2**3) in Python?',
    options: ['6', '8', '9', 'Error'],
    answer: '8',
    explanation: '2 to the power 3 is 8',
    category: 'Programming Logic'
  },
  {
    question: 'Which data structure uses FIFO order?',
    options: ['Stack', 'Queue', 'Tree', 'Graph'],
    answer: 'Queue',
    explanation: 'Queue = First In First Out',
    category: 'Programming Logic'
  },
  {
    question: 'Which loop executes at least once even if the condition is false?',
    options: ['for', 'while', 'do-while', 'foreach'],
    answer: 'do-while',
    explanation: 'do-while checks condition after execution',
    category: 'Programming Logic'
  },
  {
    question: 'Which keyword is used to stop a loop in C?',
    options: ['exit', 'break', 'stop', 'terminate'],
    answer: 'break',
    explanation: 'break exits a loop',
    category: 'Programming Logic'
  },
  {
    question: 'Which sorting algorithm is best for nearly sorted data?',
    options: ['Bubble Sort', 'Insertion Sort', 'Selection Sort', 'Merge Sort'],
    answer: 'Insertion Sort',
    explanation: 'Insertion Sort performs well on nearly sorted arrays',
    category: 'Programming Logic'
  }
];

export default questions;
