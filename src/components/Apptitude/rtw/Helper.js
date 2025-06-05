// src/components/Apptitude/Helper.js

const allQuestions = [
  {
    "category": "Arithmetic Aptitude",
    "question": "In dividing a number by 585, a student employed the method of short division. He divided the number successively by 5, 9 and 13 (factors 585) and got the remainders 4, 8, 12 respectively. If he had divided the number by 585, the remainder would have been",
    "options": [
      "24",
      "144",
      "292",
      "584"
    ],
    "correctAnswer": "584",
    "explanation": "The number is of the form 585k + 584. So, remainder = 584."},
  {
    "category": "Arithmetic Aptitude",
    "question": "Which natural number is nearest to 8485, which is completely divisible by 75 ?",
    "options": [
      "8475",
      "8500",
      "8550",
      "8525"
    ],
    "correctAnswer": "8475",
    "explanation": "Divide 8485 by 75= 113.1333 \u2192 113*75 = 8475"
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "The sum of first 45 natural numbers is:",
    "options": [
      "1035",
      "1280",
      "2070",
      "2140"
    ],
    "correctAnswer": "1035",
    "explanation": "sum = n(n+1)/2 = 45(46)/2 = 1035"
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "The smallest number which when diminished by 7, is divisible 12, 16, 18, 21 and 28 is:",
    "options": [
      "1008",
      "1015",
      "1022",
      "1032"
    ],
    "correctAnswer": "1015",
    "explanation": "To find the smallest number which, when decreased by 7, is divisible by 12, 16, 18, 21, and 28, we calculated the LCM of those numbers. The LCM is 1008. So the required number is 1008 + 7 = 1015."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "What decimal of an hour is a second ?",
    "options": [
      "0.0025",
      "0.0256",
      "0.00027",
      "0.000126"
    ],
    "correctAnswer": "0.00027",
    "explanation": "There are 3600 seconds in an hour, so 1 second is equal to 1/3600 of an hour. This is approximately 0.0002777... which rounds to 0.00027. Therefore, one second is 0.00027 of an hour."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "How many two-digit numbers satisfy this property.: The last digit (unit's digit) of the square of the two-digit number is 8 ?",
    "options": [
      "1",
      "2",
      "3",
      "None of these"
    ],
    "correctAnswer": "None of these",
    "explanation": "The unit digit of the square of any number depends on the unit digit of the original number. Squaring digits from 0 to 9 results in unit digits like 0, 1, 4, 5, 6, or 9—but never 8. Therefore, no two-digit number has a square ending in 8."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "A batsman scored 110 runs which included 3 boundaries and 8 sixes. What percent of his total score did he make by running between the wickets?",
    "options": [
      "45%",
      "20.45%",
      "29.45%",
      "55%"
    ],
    "correctAnswer": "45%",
    "explanation": "The batsman scored 3 boundaries (3×4 = 12 runs) and 8 sixes (8×6 = 48 runs), totaling 60 runs. Remaining 110 − 60 = 50 runs were scored by running. (50/110)×100 = 45.45%. Hence, 45% of the total score came from running between the wickets."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "n is a whole number which when divided by 4 gives 3 as remainder. What will be the remainder when 2n is divided by 4 ?",
    "options": [
      "3",
      "2",
      "1",
      "0"
    ],
    "correctAnswer": "2",
    "explanation": "Let n = 4q + 3. Then 2n = 8q + 6   = 4(2q + 1 ) + 2. \u2192 Thus, when 2n is divided by 4, the remainder is 2."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "The G.C.D. of 1.08, 0.36 and 0.9 is:",
    "options": [
      "0.03",
      "0.9",
      "0.18",
      "0.108"
    ],
    "correctAnswer": "0.18",
    "explanation": "Given numbers are 1.08, 0.36 and 0.90.   H.C.F. of 108, 36 and 90 is 18, \u2192   H.C.F. of given numbers = 0.18."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "In a regular week, there are 5 working days and for each day, the working hours are 8. A man gets Rs. 2.40 per hour for regular work and Rs. 3.20 per hours for overtime. If he earns Rs. 432 in 4 weeks, then how many hours does he work for ?",
    "options": [
      "160",
      "175",
      "180",
      "195"
    ],
    "correctAnswer": "175",
    "explanation": "Suppose the man works overtime for x hours. \u2192 Now, working hours in 4 weeks = (5 x 8 x 4) = 160. \u2192  160 x 2.40 + x x 3.20 = 432  \u2192   3.20x = 432 - 384 = 48 \u2192   x = 15. \u2192   Total hours worked = 160 + 15 = 175."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "The least perfect square, which is divisible by each of 21, 36 and 66 is:",
    "options": [
      "213444",
      "214344",
      "214434",
      "231444"
    ],
    "correctAnswer": "213444",
    "explanation": "L.C.M. of 21, 36, 66 = 2772. \u2192  Now, 2772 = 2 x 2 x 3 x 3 x 7 x 11  \u2192 To make it a perfect square, it must be multiplied by 7 x 11. \u2192 So, required number = 22 x 32 x 72 x 112 = 213444"
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "A library has an average of 510 visitors on Sundays and 240 on other days. The average number of visitors per day in a month of 30 days beginning with a Sunday is:",
    "options": [
      "250",
      "276",
      "280",
      "285"
    ],
    "correctAnswer": "285",
    "explanation": "Since the month begins with a Sunday, to there will be five Sundays in the month.  \u2192  So, total number of visitors in the month = (5 x 510) + (25 x 240) = 2550 + 6000 = 8550. \u2192   Average number of visitors per day = 8550/30 = 285."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times of Ronit's age. After further 8 years, how many times would he be of Ronit's age?",
    "options": [
      "2 times",
      "2.5 times",
      "2.75 times",
      "3 times"
    ],
    "correctAnswer": "2 times",
    "explanation": "Let Ronit's present age be x years. Then, father's present age =(x + 3x) years = 4x years. \u2192  After 8 years, father's age = (4x + 8) years and Ronit's age = (x + 8) years. \u2192   So, 4x + 8 = 2.5(x + 8) \u2192   4x + 8 = 2.5x + 20 \u2192   1.5x = 12 \u2192   x = 8. \u2192   So, father's present age = (4 x 8) years = 32 years. \u2192   After further 8 years, father's age = (32 + 16) years = 48 years and Ronit's age = (8 + 16) years = 24 years. \u2192   So, father's age is twice of Ronit's age."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "Two students appeared at an examination. One of them secured 9 marks more than the other and his marks was 56% of the sum of their marks. The marks obtained by them are:",
    "options": [
      "39, 30",
      "41, 32",
      "42, 33",
      "43, 34"
    ],
    "correctAnswer": "42, 33",
    "explanation": "Let their marks be (x + 9) and x. \u2192 Then, (x + 9) = 0.56(x + x + 9) \u2192   \u2192   x + 9 = 0.56(2x + 9) \u2192   \u2192   x + 9 = 1.12x + 5.04 \u2192   \u2192   0.12x = 3.96 \u2192   \u2192   x = 33. \u2192   So, marks obtained by them are (33 + 9) and 33 = 42 and 33."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "A trader mixes 26 kg of rice at Rs. 20 per kg with 30 kg of rice of other variety at Rs. 36 per kg and sells the mixture at Rs. 30 per kg. His profit percent is:",
    "options": [
      "No profit, no loss",
      "5%",
      "8%",
      "10%"
    ],
    "correctAnswer": "5%",
    "explanation": "C.P. of 56 kg rice = Rs. (26 x 20 + 30 x 36) = Rs. (520 + 1080) = Rs. 1600. \u2192 Selling price = Rs. (56 x 30) = Rs. 1680. \u2192   Profit = Rs. (1680 - 1600) = Rs. 80. \u2192   Profit% = (80/1600) x 100% = 5%."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "Seats for Mathematics, Physics and Biology in a school are in the ratio 5 : 7 : 8. There is a proposal to increase these seats by 40%, 50% and 75% respectively. What will be the ratio of increased seats?",
    "options": [
      "2 : 3 : 4",
      "6 : 7 : 8",
      "6 : 8 : 9",
      "None of these"
    ],
    "correctAnswer": "2 : 3 : 4",
    "explanation": "Originally, let the number of seats for Mathematics, Physics and Biology be 5x, 7x and 8x respectively. \u2192  Then, increased number of seats = 5x + 2x = 7x, 7x + 3.5x = 10.5x and 8x + 6x = 14x. \u2192   \u2192   So, required ratio = (7x : 10.5x : 14x) = (2 : 3 : 4)."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "In a flight of 600 km, an aircraft was slowed down due to bad weather. Its average speed for the trip was reduced by 200 km/hr and the time of flight increased by 30 minutes. The duration of the flight is:",
    "options": [
      "1 h",
      "2 hr",
      "3 hr",
      "4 hr"
    ],
    "correctAnswer": "1 hr",
    "explanation": "Let the duration of the flight be x hours. \u2192  Then, distance = speed x time \u2192 600 = (x - 0.5)(x - 200) \u2192   \u2192   x^2 - 200x - 600 = 0 \u2192   \u2192   (x - 25)(x + 24) = 0 \u2192   \u2192   x = 25 or x = -24. \u2192   So, required time = 1 hour."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "A 270 metres long train running at the speed of 120 kmph crosses another train running in opposite direction at the speed of 80 kmph in 9 seconds. What is the length of the other train?",
    "options": [
      "230 m",
      "240 m",
      "260 m",
      "320 m"
    ],
    "correctAnswer": "230 m",
    "explanation": "Relative speed = (120 + 80) km/hr \u2192  = (200 x 5/18) m/sec \u2192   = (500/9) m/sec. \u2192     Let the length of the other train be x metres. \u2192   Then, (270 + x)/9 = (500/9) \u2192   \u2192   270 + x = 500 \u2192   \u2192   x = 230. \u2192   So, length of the other train = 230 m."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "A boatman goes 2 km against the current of the stream in 1 hour and goes 1 km along the current in 10 minutes. How long will it take to go 5 km in stationary water?",
    "options": [
      "40 minute",
      "1 hr",
      "1 hr 15 min",
      "1 hr 30 min"
    ],
    "correctAnswer": "1 hr 15 min",
    "explanation": "Rate downstream = (1/10)*60 = 6 km/hr \u2192   \u2192   Rate upstream = 2 km/hr. \u2192   \u2192   Rate in still water = (6 + 2)/2 = 4 km/hr. \u2192   \u2192   Time taken to go 5 km in still water = (5/4) hr = 1 hr 15 min."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "A milk vendor has 2 cans of milk. The first contains 25% water and the rest milk. The second contains 50% water. How much milk should he mix from each of the containers so as to get 12 litres of milk such that the ratio of water to milk is 3 : 5?",
    "options": [
      "4 litres, 8 litres",
      "6 litres, 6 litres",
      "5 litres, 7 litres",
      "7 litres, 5 litres"
    ],
    "correctAnswer": "6 litres, 6 litres",
    "explanation": "Will update soon"
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "What will be the compound interest earned on an amount of Rs. 5000 in 2 years? \u2192 I. The simple interest on the same amount at the same rate of interest in 5 years is Rs. 2000. \u2192 II. The compound interest and the simple interest earned in one year is the same. \u2192 III. The amount becomed more than double on compound interest in 10 years.",
    "options": [
      "I only",
      "I and II only",
      "II and III only",
      "I and III only"
    ],
    "correctAnswer": "I only",
    "explanation": "P = Rs. 5000 & T = 2 years. \u2192  SI = (5000*R*5)/100 = 2000 \u2192  R = 8 \u2192   \u2192   SI = PRT/100 \u2192    So, the answer is I only."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "The percentage increase in the area of a rectangle, if each of its sides is increased by 20% is:",
    "options": [
      "40%",
      "42%",
      "44%",
      "46%"
    ],
    "correctAnswer": "44%",
    "explanation": "Updated soon"
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "How many times in a day, are the hands of a clock in straight line but opposite in direction?",
    "options": [
      "20",
      "22",
      "24",
      "48"
    ],
    "correctAnswer": "22",
    "explanation": "The hands of a clock point in opposite directions (in the same straight line) 11 times in every 12 hours. (Because between 5 and 7 they point in opposite directions at 6 o'clock only).\u2192 So, in a day, the hands point in the opposite directions 22 times."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "In a group of 6 boys and 4 girls, four children are to be selected. In how many different ways can they be selected such that at least one boy should be there?",
    "options": [
      "159",
      "194",
      "205",
      "209"
    ],
    "correctAnswer": "209",
    "explanation": "We may have (1 boy and 3 girls) or (2 boys and 2 girls) or (3 boys and 1 girl) or (4 boys). \u2192  So, the number of ways of selecting 4 children = = (6C1 x 4C3) + (6C2 x 4C2) + (6C3 x 4C1) + (6C4) \u2192 = (6C1 x 4C1) + (6C2 x 4C2) + (6C3 x 4C1) + (6C2) \u2192  = (24 + 90 + 80 + 15) = 209. \u2192   \u2192   So, the answer is 209."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "Find out the wrong number in the series. \u2192 20.3, 7, 15, 27, 63, 127, 255",
    "options": [
      "7",
      "15",
      "27",
      "63"
    ],
    "correctAnswer": "27",
    "explanation": "Go on multiplying the number by 2 and adding 1 to it to get the next number. \u2192  So, 27 is wrong."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "Two dice are tossed. The probability that the total score is a prime number is:",
    "options": [
      "1/6",
      "5/12",
      "1/2",
      "7/9"
    ],
    "correctAnswer": "5/12",
    "explanation": "Clearly, n(S) = (6 x 6) = 36.  \u2192  Let E = Event that the sum is a prime number. \u2192  Then E	= { (1, 1), (1, 2), (1, 4), (1, 6), (2, 1), (2, 3), (2, 5), (3, 2), (3, 4), (4, 1), (4, 3),(5, 2), (5, 6), (6, 1), (6, 5) }  \u2192 n(E) = 15. \u2192  So, P(E) = n(E)/n(S) = 15/36 = 5/12. \u2192   \u2192   So, the answer is 5/12."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "How many times in a day, are the hands of a clock in straight line but opposite in direction?",
    "options": [
      "20",
      "22",
      "24",
      "48"
    ],
    "correctAnswer": "22",
    "explanation": "The hands of a clock point in opposite directions (in the same straight line) 11 times in every 12 hours. (Because between 5 and 7 they point in opposite directions at 6 o'clock only). \u2192 So, in a day, the hands point in the opposite directions 22 times. "
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "The cost price of a Rs. 100 stock at 4 discount, when brokerage is	(1/4)	%	is:",
    "options": [
      "95.75",
      "96",
      "96.25",
      "104.25"
    ],
    "correctAnswer": "96.25",
    "explanation": "C.P. = (100-4 + 0.25) = 96.25 \u2192   \u2192   So, the answer is 96.25."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "Find the odd man out: \u2192  41, 43, 47, 53, 61, 71, 73, 81",
    "options": [
      "61",
      "71",
      "73",
      "81"
    ],
    "correctAnswer": "81",
    "explanation": "Each of the numbers except 81 is a prime number. \u2192   \u2192   So, the answer is 81."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "Some articles were bought at 6 articles for Rs. 5 and sold at 5 articles for Rs. 6. Gain percent is:",
    "options": [
      "30%",
      "33.33%",
      "35%",
      "44%"
    ],
    "correctAnswer": "44%",
    "explanation": "Suppose, number of articles bought = L.C.M. of 6 and 5 = 30.   \u2192  C.P. of 30 articles =(5/6) x 30 = Rs. 25. \u2192  S.P. of 30 articles =(6/5) x 30 = Rs. 36. \u2192   \u2192   Gain = Rs. (36 - 25) = Rs. 11. \u2192   \u2192   Gain% = (11/25) x 100% = 44%. \u2192   \u2192   So, the answer is 44%."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "If 3(x - y) = 27 and 3(x + y) = 243, then x is equal to:",
    "options": [
      "0",
      "1",
      "4",
      "6"
    ],
    "correctAnswer": "4",
    "explanation": "3^(x - y) = 27 = 33        x - y = 3 ....(i)  \u2192  3^(x + y) = 243 = 35        x + y = 5 ....(ii) \u2192  \u2192   Adding (i) and (ii), we get 2x = 8 \u2192   \u2192   x = 4. \u2192   \u2192   So, the answer is 4."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",
    "options": [
      "24",
      "27",
      "40",
      "None of these"
    ],
    "correctAnswer": "24",
    "explanation": "Updating Soon.."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "The product of two numbers is 9375 and the quotient, when the larger one is divided by the smaller, is 15. The sum of the numbers is:",
    "options": [
      "380",
      "395",
      "400",
      "425"
    ],
    "correctAnswer": "400",
    "explanation": "Updating Soon.."
  },
    {
    "category": "Arithmetic Aptitude",
    "question": "The greatest number of four digits which is divisible by 15, 25, 40 and 75 is:",
    "options": [
      "9000",
      "9400",
      "9600",
      "9800"
    ],
    "correctAnswer": "9600",
    "explanation": "Greatest number of 4-digits is 9999.  \u2192  L.C.M. of 15, 25, 40 and 75 = 600. \u2192   \u2192   Required number = 9999/600 = 399 \u2192   \u2192   So, the required number is (9999 - 399) = 9600."
  },
  {
    "category": "Arithmetic Aptitude",
    "question": "A flagstaff 17.5 m high casts a shadow of length 40.25 m. The height of the building, which casts a shadow of length 28.75 m under similar conditions will be:",
    "options": [
      "10 m",
      "12.5 m",
      "17.5 m",
      "21.25 m"
    ],
    "correctAnswer": "12.5 m",
    "explanation": "Updating Soon.."
  },
  {
    "category": "Logical Reasoning",
    "question": "Choose the word that is a necessary part of the underlined word.",
    "options": [
      "principal",
      "curriculum",
      "employment",
      "graduation"
    ],
    "correctAnswer": "graduation",
    "explanation": "A diploma is awarded at graduation, so graduation is essential to obtaining a diploma. Employment may be a byproduct (choice c). A principal and a curriculum (choices a and b) may play a role in the awarding of some diplomas, but they are not essential."
  },
  {
    "category": "Logical Reasoning",
    "question": "Choose the pair that best represents a similar relationship to the one expressed in the original pair of words. \u2192  \u2192   DIVISION : SECTION",
    "options": [
      "layer : tier",
      "tether : bundle",
      "chapter : verse",
      "riser : stage"
    ],
    "correctAnswer": "layer : tier",
    "explanation": "Division and section are synonyms; layer and tier are synonyms."
  },
  {
    "category": "Logical Reasoning",
    "question": "Which number comes next: 2, 4, 8, 16, ?",
    "options": [
      "32",
      "24",
      "18",
      "30"
    ],
    "correctAnswer": "32",
    "explanation": "Doubles each time: 2*2=4, 4*2=8..."
  },
  {
    "category": "Logical Reasoning",
    "question": "What comes next in the series: A, C, E, G, ?",
    "options": [
      "H",
      "I",
      "J",
      "K"
    ],
    "correctAnswer": "I",
    "explanation": "Alphabet skipping one each: A(1), C(3), E(5)..."
  },
  {
    "category": "Logical Reasoning",
    "question": "If DOG = 26, then CAT = ?",
    "options": [
      "24",
      "25",
      "27",
      "30"
    ],
    "correctAnswer": "24",
    "explanation": "D+O+G = 4+15+7 = 26; C+A+T = 3+1+20 = 24"
  },
  {
    "category": "Logical Reasoning",
    "question": "A is taller than B. B is taller than C. Who is the tallest?",
    "options": [
      "A",
      "B",
      "C",
      "Can't say"
    ],
    "correctAnswer": "A",
    "explanation": "A > B > C"
  },
  {
    "category": "Logical Reasoning",
    "question": "Rearrange: RTOE = ?",
    "options": [
      "TORE",
      "ROTE",
      "ERTO",
      "ETOR"
    ],
    "correctAnswer": "TORE",
    "explanation": "Anagram of TORE"
  },
  {
    "category": "Logical Reasoning",
    "question": "If John's son is my father's son, who is John to me?",
    "options": [
      "Brother",
      "Father",
      "Uncle",
      "Cousin"
    ],
    "correctAnswer": "Father",
    "explanation": "My father's son = me \u2192 John's son = me \u2192 John is father"
  },
  {
    "category": "Logical Reasoning",
    "question": "If all pens are books and some books are papers... Are some pens papers?",
    "options": [
      "Yes",
      "No",
      "Can't say",
      "All are papers"
    ],
    "correctAnswer": "Can't say",
    "explanation": "No clear relation between pens and papers"
  },
  {
    "category": "Logical Reasoning",
    "question": "Which is the odd one: Apple, Orange, Mango, Carrot",
    "options": [
      "Apple",
      "Orange",
      "Mango",
      "Carrot"
    ],
    "correctAnswer": "Carrot",
    "explanation": "Carrot is a vegetable"
  },
  {
    "category": "Logical Reasoning",
    "question": "Which number is missing? 1, 3, 6, 10, ?, 21",
    "options": [
      "15",
      "13",
      "16",
      "14"
    ],
    "correctAnswer": "15",
    "explanation": "+2, +3, +4..."
  },
  {
    "category": "Logical Reasoning",
    "question": "Find the odd one: 16, 36, 49, 64, 81",
    "options": [
      "36",
      "49",
      "64",
      "81"
    ],
    "correctAnswer": "36",
    "explanation": "All others are perfect squares of odd numbers"
  },
   {
    "category": "Logical Reasoning",
    "question": "Each problem consists of three statements. Based on the first two statements, the third statement may be true, false, or uncertain. \u2191 \u2192  All the trees in the park are flowering trees. \u2192 Some of the trees in the park are dogwoods. \u2192 All dogwoods are flowering trees. \u2192 If the first two statements are true, the third statement is",
    "options": [
      "true",
      "false",
      "none"
    ],
    "correctAnswer": "true",
    "explanation": "All of the trees in the park are flowering trees, So all dogwoods in the park are flowering trees"
  },
  {
    "category": "Logical Reasoning",
    "question": "Which word does not belong: Dog, Cat, Lion, Rose",
    "options": ["Dog", "Cat", "Lion", "Rose"],
    "correctAnswer": "Rose",
    "explanation": "All others are animals, Rose is a flower"
  },
  {
    "category": "Logical Reasoning",
    "question": "What comes next? 2, 4, 8, 16, ?",
    "options": ["24", "32", "30", "18"],
    "correctAnswer": "32",
    "explanation": "The pattern is multiplying by 2"
  },
  {
    "category": "Logical Reasoning",
    "question": "If all roses are flowers and some flowers fade quickly, can we say some roses fade quickly?",
    "options": ["Yes", "No", "Cannot be determined", "Always true"],
    "correctAnswer": "Cannot be determined",
    "explanation": "We don't know if the roses are part of the fading flowers"
  },
  {
    "category": "Logical Reasoning",
    "question": "Find the missing number: 5, 11, 23, 47, ?",
    "options": ["95", "93", "97", "99"],
    "correctAnswer": "95",
    "explanation": "Each number is doubled and then 1 is subtracted"
  },
  {
    "category": "Logical Reasoning",
    "question": "Which direction is opposite to South-East?",
    "options": ["North-East", "South-West", "North-West", "East"],
    "correctAnswer": "North-West",
    "explanation": "North-West is diagonally opposite to South-East"
  },
  {
    "category": "Logical Reasoning",
    "question": "If MONKEY is written as XLMWVB, how is TIGER written?",
    "options": ["GRHVW", "GRIVW", "GSHVW", "GRHWV"],
    "correctAnswer": "GRIVW",
    "explanation": "Each letter is shifted backward by 1 in the alphabet"
  },
  {
    "category": "Logical Reasoning",
    "question": "Choose the odd one: Triangle, Circle, Cube, Square",
    "options": ["Triangle", "Circle", "Cube", "Square"],
    "correctAnswer": "Cube",
    "explanation": "Cube is 3D, others are 2D shapes"
  },
  {
    "category": "Logical Reasoning",
    "question": "If some pens are books and some books are pencils, can we conclude that some pens are pencils?",
    "options": ["Yes", "No", "Cannot be determined", "Definitely yes"],
    "correctAnswer": "Cannot be determined",
    "explanation": "There is no direct relationship between pens and pencils"
  },
  {
    "category": "Logical Reasoning",
    "question": "Find the missing letter: C, E, H, L, ?, T",
    "options": ["O", "P", "R", "S"],
    "correctAnswer": "Q",
    "explanation": "+2, +3, +4, +5… so next is +6 from L = Q"
  },
    {
    "category": "Logical Reasoning",
    "question": "Which is the odd one out: Knife, Sword, Gun, Blade",
    "options": ["Knife", "Sword", "Gun", "Blade"],
    "correctAnswer": "Gun",
    "explanation": "All others are sharp-edged weapons; gun is a firearm"
  },
  {
    "category": "Logical Reasoning",
    "question": "Find the next number: 3, 6, 12, 24, ?",
    "options": ["36", "48", "50", "60"],
    "correctAnswer": "48",
    "explanation": "Each number is multiplied by 2"
  },
  {
    "category": "Logical Reasoning",
    "question": "Choose the odd pair: Pen - Write, Knife - Cut, Brush - Paint, Book - Read",
    "options": ["Pen - Write", "Knife - Cut", "Brush - Paint", "Book - Read"],
    "correctAnswer": "Book - Read",
    "explanation": "Others are tools used to perform actions; Book is not a tool"
  },
  {
    "category": "Logical Reasoning",
    "question": "Which is different: Red, Green, Yellow, Circle",
    "options": ["Red", "Green", "Yellow", "Circle"],
    "correctAnswer": "Circle",
    "explanation": "All others are colors; Circle is a shape"
  },
  {
    "category": "Logical Reasoning",
    "question": "What comes next: AZ, BY, CX, ?",
    "options": ["DW", "EV", "DU", "FW"],
    "correctAnswer": "DW",
    "explanation": "A to D (+3), Z to W (-3)"
  },
  {
    "category": "Logical Reasoning",
    "question": "If all dogs are animals and some animals are wild, then some dogs are wild?",
    "options": ["Yes", "No", "Cannot be determined", "Sometimes"],
    "correctAnswer": "Cannot be determined",
    "explanation": "The relationship between dogs and wild is not defined"
  },
  {
    "category": "Logical Reasoning",
    "question": "Find the odd one: Square, Rectangle, Triangle, Cube",
    "options": ["Square", "Rectangle", "Triangle", "Cube"],
    "correctAnswer": "Cube",
    "explanation": "Cube is 3D; others are 2D shapes"
  },
  {
    "category": "Logical Reasoning",
    "question": "If in a code, CAT = DBU, what is DOG?",
    "options": ["EPI", "ENH", "DPI", "EOH"],
    "correctAnswer": "EPI",
    "explanation": "Each letter is shifted +1 in the alphabet"
  },
  {
    "category": "Logical Reasoning",
    "question": "Find the next term: 2A, 4C, 6E, 8G, ?",
    "options": ["10I", "10H", "12I", "10J"],
    "correctAnswer": "10I",
    "explanation": "Numbers +2, Letters +2 positions (A, C, E, G, I)"
  },
  {
    "category": "Logical Reasoning",
    "question": "Choose the odd one out: Iron, Copper, Gold, Wood",
    "options": ["Iron", "Copper", "Gold", "Wood"],
    "correctAnswer": "Wood",
    "explanation": "Wood is not a metal"
  },
  {
    "category": "Logical Reasoning",
    "question": "If 1 = 5, 2 = 25, 3 = 325, what is 4?",
    "options": ["4325", "43215", "432", "None"],
    "correctAnswer": "4325",
    "explanation": "Pattern is number followed by all previous results"
  },
  {
    "category": "Logical Reasoning",
    "question": "Which one doesn't belong: Teacher, Doctor, Engineer, Hospital",
    "options": ["Teacher", "Doctor", "Engineer", "Hospital"],
    "correctAnswer": "Hospital",
    "explanation": "Others are professions; Hospital is a place"
  },
  {
    "category": "Logical Reasoning",
    "question": "What comes next in the series: 2, 3, 5, 8, 12, ?",
    "options": ["17", "16", "15", "14"],
    "correctAnswer": "17",
    "explanation": "+1, +2, +3, +4, +5..."
  },
  {
    "category": "Logical Reasoning",
    "question": "If WATER is coded as YCVGT, then EARTH is coded as?",
    "options": ["GCTJV", "FBSUI", "GCSPX", "HZTUI"],
    "correctAnswer": "GCTJV",
    "explanation": "+2 to each character (W→Y, A→C, etc.)"
  },
  {
    "category": "Logical Reasoning",
    "question": "Find the odd one: Monday, Friday, Sunday, January",
    "options": ["Monday", "Friday", "Sunday", "January"],
    "correctAnswer": "January",
    "explanation": "January is a month; others are days"
  },

  {
  "category": "Verbal Ability",
  "question": "His father ordered him to go to his room and study. (Convert to Direct Speech)",
  "options": [
    "His father said, Go to your room and study.",
    "His father said to him, Go and study in your room.",
    "His father shouted, Go right now to your study room",
    "His father said firmly, Go and study in your room."
  ],
  "correctAnswer": "His father said to him, Go and study in your room.",
  "explanation": "The reporting verb ‘ordered’ corresponds to a command in direct speech. In direct speech we use the imperative form: “Go and study in your room.” To reflect the indirect ‘him’, we include “said to him.” Hence: His father said to him, ‘Go and study in your room.’"
},
  {
    "category": "Verbal Ability",
    "question": "Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any).",
    "options": [
      "After leaving his office",
      "he went directly",
      "to a restaurant.",
      "No error."
    ],
    "correctAnswer": "No error",
    "explanation": "The sentence is grammatically correct. The phrase 'After leaving his office' is a dependent clause that correctly sets the context for the main clause 'he went directly to a restaurant.'"
  },
  {
    "category": "Verbal Ability",
    "question": "Identify the correctly punctuated sentence.",
    "options": [
      "Its raining, take your umbrella.",
      "It’s raining; take your umbrella.",
      "Its’ raining; take your umbrella.",
      "Its raining take your umbrella."
    ],
    "correctAnswer": "It’s raining; take your umbrella.",
    "explanation": "‘It’s’ is the contraction of ‘it is’, and a semicolon appropriately separates two independent clauses."
  },
  {
    "category": "Verbal Ability",
    "question": "Convert to Indirect Speech: She said, 'I am very tired now.'",
    "options": [
      "She said that she was very tired then.",
      "She said she is very tired now.",
      "She told she was tired.",
      "She says she is tired now."
    ],
    "correctAnswer": "She said that she was very tired then.",
    "explanation": "In indirect speech, present tense changes to past (‘am’ to ‘was’) and ‘now’ becomes ‘then’."
  },
  {
    "category": "Verbal Ability",
    "question": "Choose the correct form: Neither of the boys ___ done his homework.",
    "options": [
      "have",
      "has",
      "is",
      "were"
    ],
    "correctAnswer": "has",
    "explanation": "‘Neither’ is singular, so it takes the singular verb ‘has’."
  },
  {
    "category": "Verbal Ability",
    "question": "Identify the synonym of the word: ABANDON",
    "options": [
      "Neglect",
      "Give up",
      "Maintain",
      "Adopt"
    ],
    "correctAnswer": "Give up",
    "explanation": "‘Abandon’ means to give up completely or leave behind."
  },
  {
    "category": "Verbal Ability",
    "question": "Identify the antonym of the word: GENEROUS",
    "options": [
      "Kind",
      "Selfish",
      "Helpful",
      "Gentle"
    ],
    "correctAnswer": "Selfish",
    "explanation": "A generous person gives freely; the opposite would be selfish."
  },
  {
    "category": "Verbal Ability",
    "question": "Choose the correct spelling:",
    "options": [
      "Accomodation",
      "Acommodation",
      "Accommodation",
      "Accomadation"
    ],
    "correctAnswer": "Accommodation",
    "explanation": "‘Accommodation’ is the correct spelling with double 'c' and 'm'."
  },
  {
    "category": "Verbal Ability",
    "question": "Identify the correctly reported speech: He said, 'I will call you tomorrow.'",
    "options": [
      "He said he would call me the next day.",
      "He says he will call me tomorrow.",
      "He said I will call you the next day.",
      "He told he would call me tomorrow."
    ],
    "correctAnswer": "He said he would call me the next day.",
    "explanation": "‘Will’ becomes ‘would’, and ‘tomorrow’ becomes ‘the next day’ in reported speech."
  },
  {
    "category": "Verbal Ability",
    "question": "Choose the correct passive voice form: She writes a letter.",
    "options": [
      "A letter was written by her.",
      "A letter is written by her.",
      "A letter has been written by her.",
      "A letter is being written by her."
    ],
    "correctAnswer": "A letter is written by her.",
    "explanation": "Present simple active becomes present simple passive: ‘is written’."
  },
  {
    "category": "Verbal Ability",
    "question": "Identify the part with an error: He was knowing the answer / but he kept quiet / during the test. / No error.",
    "options": [
      "He was knowing the answer",
      "but he kept quiet",
      "during the test.",
      "No error."
    ],
    "correctAnswer": "He was knowing the answer",
    "explanation": "‘Know’ is a stative verb and does not take continuous tense. It should be ‘He knew the answer’."
  },
  {
    "category": "Verbal Ability",
    "question": "Choose the word that best completes the sentence: She was too tired ___ continue.",
    "options": [
      "for",
      "to",
      "and",
      "than"
    ],
    "correctAnswer": "to",
    "explanation": "The correct construction is ‘too...to’: She was too tired to continue."
  },
  {
    "category": "Verbal Ability",
    "question": "Choose the correct passive voice: 'They completed the project on time.'",
    "options": [
      "The project is completed on time.",
      "The project has been completed on time.",
      "The project was completed on time.",
      "The project had completed on time."
    ],
    "correctAnswer": "The project was completed on time.",
    "explanation": "In passive voice, the object becomes the subject and the verb is converted to past form with 'was/were'. Hence, 'The project was completed on time.'"
  },
  {
    "category": "Verbal Ability",
    "question": "Identify the synonym of the word: 'Benevolent'",
    "options": [
      "Cruel",
      "Kind",
      "Arrogant",
      "Careless"
    ],
    "correctAnswer": "Kind",
    "explanation": "'Benevolent' means kind and generous; its synonym is 'Kind'."
  },
  {
    "category": "Verbal Ability",
    "question": "Choose the correctly punctuated sentence.",
    "options": [
      "Its a beautiful day, isn't it?",
      "It's a beautiful day, isnt it?",
      "It's a beautiful day, isn't it?",
      "Its a beautiful day, isnt it?"
    ],
    "correctAnswer": "It's a beautiful day, isn't it?",
    "explanation": "'It's' is the contraction for 'it is'. The tag question also needs correct punctuation with an apostrophe and question mark."
  },
  {
    "category": "Verbal Ability",
    "question": "Select the word that is opposite in meaning to 'Generous'",
    "options": [
      "Greedy",
      "Kind",
      "Helpful",
      "Grateful"
    ],
    "correctAnswer": "Greedy",
    "explanation": "'Generous' means giving freely, while 'Greedy' means wanting more than necessary. They are antonyms."
  },
  {
    "category": "Verbal Ability",
    "question": "Choose the correct spelling:",
    "options": [
      "Recieve",
      "Receive",
      "Recive",
      "Receeve"
    ],
    "correctAnswer": "Receive",
    "explanation": "The correct spelling is 'Receive'. Remember the rule: 'i' before 'e' except after 'c'."
  },
  {
    "category": "Verbal Ability",
    "question": "Convert to Indirect Speech: She said, 'I am going to the market.'",
    "options": [
      "She said that she is going to the market.",
      "She said that I was going to the market.",
      "She said that she was going to the market.",
      "She said she is going to the market."
    ],
    "correctAnswer": "She said that she was going to the market.",
    "explanation": "In indirect speech, present continuous changes to past continuous. 'I am going' becomes 'she was going'."
  },
  {
    "category": "Verbal Ability",
    "question": "Identify the part with error: 'The manager with his team have arrived for the meeting.'",
    "options": [
      "The manager",
      "with his team",
      "have arrived for the meeting.",
      "No error"
    ],
    "correctAnswer": "have arrived for the meeting.",
    "explanation": "The subject is singular ('The manager'), so it should be 'has arrived', not 'have arrived'."
  },
  {
    "category": "Verbal Ability",
    "question": "Find the correct sentence:",
    "options": [
      "Neither of the boys were present.",
      "Neither of the boys was present.",
      "Neither of boys were present.",
      "Neither of the boy was present."
    ],
    "correctAnswer": "Neither of the boys was present.",
    "explanation": "'Neither' is singular, so we use 'was' with it. The noun should also be plural: 'boys'."
  },
  {
    "category": "Verbal Ability",
    "question": "Choose the word that best completes the sentence: 'He is very good ___ playing chess.'",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "correctAnswer": "at",
    "explanation": "The correct preposition with 'good' in this context is 'at' – 'good at playing chess'."
  },
  {
    "category": "Verbal Ability",
    "question": "Identify the correct tense: 'I had finished my homework before he arrived.'",
    "options": [
      "Simple past",
      "Past perfect",
      "Present perfect",
      "Past continuous"
    ],
    "correctAnswer": "Past perfect",
    "explanation": "'Had finished' is in the past perfect tense, used to describe an action completed before another in the past."
  },
  {
    "category": "Verbal Ability",
    "question": "Choose the correct form: 'He ______ to school every day.'",
    "options": [
      "go",
      "goes",
      "gone",
      "going"
    ],
    "correctAnswer": "goes",
    "explanation": "With a singular third person subject like 'he', the correct verb form is 'goes'."
  },
  {
    "category": "Verbal Ability",
    "question": "Identify the part of the sentence with the error: 'One of my friend is a doctor.'",
    "options": [
      "One of",
      "my friend",
      "is a doctor",
      "No error"
    ],
    "correctAnswer": "my friend",
    "explanation": "'One of' should be followed by a plural noun, so it should be 'my friends'."
  },
  {
    "category": "Verbal Ability",
    "question": "Select the antonym of the word: 'Artificial'",
    "options": [
      "Synthetic",
      "Natural",
      "Fake",
      "Plastic"
    ],
    "correctAnswer": "Natural",
    "explanation": "'Artificial' means man-made, and its antonym is 'Natural'."
  },
  {
    "category": "Verbal Ability",
    "question": "Fill in the blank: 'She has been working here ______ 2015.'",
    "options": [
      "for",
      "since",
      "from",
      "at"
    ],
    "correctAnswer": "since",
    "explanation": "'Since' is used with a specific point in time (e.g., 2015)."
  },
  {
    "category": "Verbal Ability",
    "question": "Change to Passive Voice: 'The teacher is checking the papers.'",
    "options": [
      "The papers is being checked by the teacher.",
      "The papers are checked by the teacher.",
      "The papers are being checked by the teacher.",
      "The teacher has been checking the papers."
    ],
    "correctAnswer": "The papers are being checked by the teacher.",
    "explanation": "Present continuous passive voice uses 'are being' + past participle."
  },
  {
    "category": "Verbal Ability",
    "question": "Identify the correctly spelled word:",
    "options": [
      "Accomodation",
      "Accommodation",
      "Acommodation",
      "Accommadation"
    ],
    "correctAnswer": "Accommodation",
    "explanation": "The correct spelling is 'Accommodation', with double 'c' and double 'm'."
  },
  {
    "category": "Verbal Ability",
    "question": "Convert to Indirect Speech: He said, 'I will call you tomorrow.'",
    "options": [
      "He said he will call me tomorrow.",
      "He said he would call me tomorrow.",
      "He said that he would call me the next day.",
      "He said that he will call me the next day."
    ],
    "correctAnswer": "He said that he would call me the next day.",
    "explanation": "'Will' changes to 'would' and 'tomorrow' becomes 'the next day' in indirect speech."
  },
  {
    "category": "Verbal Ability",
    "question": "Choose the correct preposition: 'She is married ___ a lawyer.'",
    "options": [
      "to",
      "with",
      "by",
      "in"
    ],
    "correctAnswer": "to",
    "explanation": "The correct phrase is 'married to someone'."
  },
  {
    "category": "Verbal Ability",
    "question": "Select the synonym of the word: 'Expand'",
    "options": [
      "Contract",
      "Compress",
      "Enlarge",
      "Decrease"
    ],
    "correctAnswer": "Enlarge",
    "explanation": "'Expand' means to grow or enlarge; its synonym is 'Enlarge'."
  },
  {
    "category": "Verbal Ability",
    "question": "Identify the error: 'He do not know the answer.'",
    "options": [
      "He",
      "do not",
      "know the answer",
      "No error"
    ],
    "correctAnswer": "do not",
    "explanation": "With 'He', we use 'does not' instead of 'do not'."
  },
  {
    "category": "Verbal Ability",
    "question": "Choose the correct sentence:",
    "options": [
      "The informations are important.",
      "The information is important.",
      "Informations are important.",
      "The information are important."
    ],
    "correctAnswer": "The information is important.",
    "explanation": "'Information' is an uncountable noun, so we use singular verb forms with it."
  },
  {
    "category": "Verbal Ability",
    "question": "Choose the correct form: 'By the time he arrived, we ______ eating.'",
    "options": [
      "have finished",
      "had finished",
      "finished",
      "will finish"
    ],
    "correctAnswer": "had finished",
    "explanation": "For two actions in the past, the earlier action uses past perfect: 'had finished'."
  },

  {
    "category": "Verbal Reasoning",
    "question": "Ravi left home and cycled 10 km towards South, then turned right and cycled 5 km and then again turned right and cycled 10 km. After this he turned left and cycled 10 km. How many kilometers will he have to cycle to reach his home straight?",
    "options": [
      "10 km",
      "15 km",
      "20 km",
      "25 km"
    ],
    "correctAnswer": "15 km",
    "explanation": "Update soon..."
  },
  {
    "category": "Verbal Reasoning",
    "question": "Some boys are sitting in three rows all facing North such that A is in the middle row. P is just to the right of A but in the same row. Q is just behind of P while R is in the North of A. In which direction of R is Q?",
    "options": [
      "South",
      "South-West",
      "North-East",
      "South-East"
    ],
    "correctAnswer": "South-East",
    "explanation": "Update soon..."
  },
  {
    "category": "Verbal Reasoning",
    "question": "If P + Q means P is the brother of Q; P x Q means P is the father of Q and P - Q means P is the sister of Q, which of the following relations shows that I is the niece of K?",
    "options": [
      "K + Y + Z - I",
      "K + Y + Z - I",
      "Z - I x Y + K",
      "K x Y + I - Z"
    ],
    "correctAnswer": "K + Y + Z - I",
    "explanation": "Update soon..."
  },
  {
    "category": "Verbal Reasoning",
    "question": "Which one of the following is always found in 'Bravery'?",
    "options": [
      "Experience",
      "Power",
      "Courage",
      "Knowledge"
    ],
    "correctAnswer": "Courage",
    "explanation": "Update soon..."
  },
  {
    "category": "Verbal Reasoning",
    "question": "A lotus flower always has",
    "options": [
      "Mud",
      "Petals",
      "Root",
      "Water"
    ],
    "correctAnswer": "Petals",
    "explanation": "Update soon..."
  },
  {
    "category": "Verbal Reasoning",
    "question": "Find the odd one out: Apple, Banana, Carrot, Mango",
    "options": [
      "Apple",
      "Banana",
      "Carrot",
      "Mango"
    ],
    "correctAnswer": "Carrot",
    "explanation": "Carrot is a vegetable, others are fruits."
  },
  {
    "category": "Verbal Reasoning",
    "question": "If in a certain code, 'CAT' is written as '3120', then how is 'DOG' written in that code?",
    "options": [
      "4157",
      "4176",
      "4156",
      "4167"
    ],
    "correctAnswer": "4157",
    "explanation": "Each letter is replaced by its position in the alphabet: D=4, O=15, G=7."
  },
  {
    "category": "Verbal Reasoning",
    "question": "A series is given: 3, 9, 27, 81, ? What is the next number?",
    "options": [
      "108",
      "162",
      "243",
      "324"
    ],
    "correctAnswer": "243",
    "explanation": "Each number is multiplied by 3."
  },
  {
    "category": "Verbal Reasoning",
    "question": "If all pens are pencils and some pencils are erasers, which of the following is true?",
    "options": [
      "All pens are erasers",
      "Some pens are erasers",
      "No pen is eraser",
      "Cannot be determined"
    ],
    "correctAnswer": "Cannot be determined",
    "explanation": "The given information does not specify the relation between pens and erasers."
  },
  {
    "category": "Verbal Reasoning",
    "question": "Choose the word which is different from the rest:",
    "options": [
      "Lion",
      "Tiger",
      "Leopard",
      "Elephant"
    ],
    "correctAnswer": "Elephant",
    "explanation": "Elephant is a herbivore; others are carnivores."
  },
  {
    "category": "Verbal Reasoning",
    "question": "Find the missing number: 2, 4, 8, 16, ?",
    "options": [
      "18",
      "24",
      "32",
      "34"
    ],
    "correctAnswer": "32",
    "explanation": "Each number is doubled."
  },
  {
    "category": "Verbal Reasoning",
    "question": "If ‘+’ means ‘-’, ‘-’ means ‘x’, ‘x’ means ‘/’ and ‘/’ means ‘+’, then what is the value of 6 + 4 - 2 x 3 / 2?",
    "options": [
      "1",
      "9",
      "5",
      "7"
    ],
    "correctAnswer": "1",
    "explanation": "Replace operators accordingly and solve stepwise."
  },
  {
    "category": "Verbal Reasoning",
    "question": "Direction: If North-East becomes South, East becomes West, South-West becomes North, then what will North become?",
    "options": [
      "South-West",
      "North-West",
      "East",
      "West"
    ],
    "correctAnswer": "South-West",
    "explanation": "Directions are rotated 180 degrees."
  },
  {
    "category": "Verbal Reasoning",
    "question": "Which letter replaces the question mark? A, C, F, J, O, ?",
    "options": [
      "S",
      "T",
      "U",
      "V"
    ],
    "correctAnswer": "U",
    "explanation": "Positions increase by 2, 3, 4, 5..."
  },
  {
    "category": "Verbal Reasoning",
    "question": "In a certain language, ‘GLASS’ is coded as ‘IFMMP’. What is the code for ‘WATER’?",
    "options": [
      "XBUFS",
      "XBVFS",
      "XAUFS",
      "YBUFS"
    ],
    "correctAnswer": "XBUFS",
    "explanation": "Each letter is shifted by one position ahead."
  },
  {
    "category": "Verbal Reasoning",
    "question": "Two friends start walking towards each other from 60 km apart. One walks at 6 km/hr, the other at 4 km/hr. After how much time will they meet?",
    "options": [
      "6 hours",
      "5 hours",
      "4 hours",
      "3 hours"
    ],
    "correctAnswer": "6 hours",
    "explanation": "Relative speed = 6+4=10 km/hr. Time = Distance/Speed = 60/10=6 hours."
  },
  {
    "category": "Verbal Reasoning",
    "question": "If ‘MANGO’ is coded as ‘ZNHMT’, what is the code for ‘APPLE’?",
    "options": [
      "ZKKTW",
      "ZKLTW",
      "ZLLTW",
      "ZKLTV"
    ],
    "correctAnswer": "ZKKTW",
    "explanation": "Code is formed by shifting letters backward by one and reversing positions."
  },
  {
    "category": "Verbal Reasoning",
    "question": "A is the brother of B. B is the mother of C. How is C related to A?",
    "options": [
      "Nephew/Niece",
      "Son/Daughter",
      "Brother",
      "Father"
    ],
    "correctAnswer": "Nephew/Niece",
    "explanation": "A is uncle/aunt to C."
  },
  {
    "category": "Verbal Reasoning",
    "question": "Find the next number in the series: 5, 11, 17, 23, ?",
    "options": [
      "28",
      "29",
      "30",
      "35"
    ],
    "correctAnswer": "29",
    "explanation": "Add 6 each time."
  },
  {
    "category": "Verbal Reasoning",
    "question": "If ‘CAT’ is coded as ‘3120’, what is the code for ‘DOG’?",
    "options": [
      "4157",
      "4167",
      "4156",
      "4176"
    ],
    "correctAnswer": "4157",
    "explanation": "Letters are replaced by their alphabet positions."
  },
  {
    "category": "Verbal Reasoning",
    "question": "If all pencils are pens and some pens are books, which of the following is true?",
    "options": [
      "Some pencils are books",
      "All pencils are books",
      "No pencil is a book",
      "Cannot be determined"
    ],
    "correctAnswer": "Cannot be determined",
    "explanation": "Information is insufficient to conclude."
  },
  {
    "category": "Verbal Reasoning",
    "question": "Find the odd one out: Dog, Cat, Lion, Tiger, Crow",
    "options": [
      "Dog",
      "Cat",
      "Lion",
      "Crow"
    ],
    "correctAnswer": "Crow",
    "explanation": "Crow is a bird; others are mammals."
  },
  {
    "category": "Verbal Reasoning",
    "question": "A series is given: 1, 4, 9, 16, 25, ? What is the next number?",
    "options": [
      "30",
      "35",
      "36",
      "40"
    ],
    "correctAnswer": "36",
    "explanation": "Series of squares: 1^2, 2^2, 3^2..."
  },
  {
    "category": "Verbal Reasoning",
    "question": "If ‘X’ means ‘+’, ‘+’ means ‘-’, ‘-’ means ‘x’ and ‘x’ means ‘/’, then what is the value of 8 x 2 + 3 - 4?",
    "options": [
      "1",
      "9",
      "10",
      "11"
    ],
    "correctAnswer": "10",
    "explanation": "Substitute operators accordingly and solve."
  },
  {
    "category": "Verbal Reasoning",
    "question": "What comes next in the series: Z, X, V, T, ?",
    "options": [
      "S",
      "R",
      "Q",
      "P"
    ],
    "correctAnswer": "R",
    "explanation": "Letters decrease by 2 positions."
  },
  {
    "category": "Verbal Reasoning",
    "question": "Choose the odd one out: Red, Blue, Green, Circle",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Circle"
    ],
    "correctAnswer": "Circle",
    "explanation": "Circle is a shape; others are colors."
  },
  {
    "category": "Verbal Reasoning",
    "question": "If a code word for ‘READ’ is ‘SFBE’, what is the code for ‘BOOK’?",
    "options": [
      "CPPL",
      "CPNK",
      "CPOL",
      "CQPL"
    ],
    "correctAnswer": "CPPL",
    "explanation": "Each letter is shifted by one position forward."
  },
  {
    "category": "Verbal Reasoning",
    "question": "A is taller than B but shorter than C. D is taller than A but shorter than E. Who is the tallest?",
    "options": [
      "A",
      "B",
      "C",
      "E"
    ],
    "correctAnswer": "E",
    "explanation": "From the relations, E is tallest."
  },
  {
    "category": "Verbal Reasoning",
    "question": "Find the next number in the sequence: 2, 6, 12, 20, 30, ?",
    "options": [
      "38",
      "40",
      "42",
      "44"
    ],
    "correctAnswer": "42",
    "explanation": "Numbers follow the formula n(n+1)."
  },
  {
    "category": "Verbal Reasoning",
    "question": "If ‘P’ means ‘Q’, ‘Q’ means ‘R’, and ‘R’ means ‘P’, what does ‘P’ mean?",
    "options": [
      "P",
      "Q",
      "R",
      "None of these"
    ],
    "correctAnswer": "Q",
    "explanation": "Direct substitution from the given."
  },

  {
    "category": "C++ Programming",
    "question": "Which of the following statement is correct?",
    "options": [
      "C++ allows static type checking.",
      "C++ allows dynamic type checking.",
      "C++ allows static member function be of type const.",
      "Both A and B."
    ],
    "correctAnswer": "Both A and B.",
  },
  {
    "category": "C++ Programming",
    "question": "Which of the following concepts means adding new components to a program as it runs?",
    "options": [
      "Data hiding",
      "Dynamic typing",
      "Dynamic binding",
      "Dynamic loading"
    ],
    "correctAnswer": "Dynamic loading",
  },
  {
    "category": "C++ Programming",
    "question": "Which of the following statement is correct?",
    "options": [
      "The order of the default argument will be right to left.",
      "The order of the default argument will be left to right.",
      "The order of the default argument will be alternate.",
      "The order of the default argument will be random."
    ],
    "correctAnswer": "The order of the default argument will be right to left.",
  },
  {
    "category": "C++ Programming",
    "question": "Which of the following statement is correct?",
    "options": [
      "Only one parameter of a function can be a default parameter.",
      "Minimum one parameter of a function must be a default parameter.",
      "All the parameters of a function can be default parameters.",
      "No parameter of a function can be default."
    ],
    "correctAnswer": "All the parameters of a function can be default parameters.",
  },
  {
    "category": "C++ Programming",
    "question": "Which feature in C++ enables reusability of code?",
    "options": [
      "Abstraction",
      "Encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": "Inheritance"
  },
  {
    "category": "C++ Programming",
    "question": "Which of the following is a correct way to declare a pointer in C++?",
    "options": [
      "int *ptr;",
      "int ptr*;",
      "ptr int*;",
      "pointer int;"
    ],
    "correctAnswer": "int *ptr;"
  },
  {
    "category": "C++ Programming",
    "question": "What is the size of a 'int' data type typically in C++ (in 32-bit systems)?",
    "options": [
      "2 bytes",
      "4 bytes",
      "8 bytes",
      "Depends on compiler"
    ],
    "correctAnswer": "4 bytes"
  },
  {
    "category": "C++ Programming",
    "question": "Which of the following denotes a constructor?",
    "options": [
      "Same name as class",
      "Different name",
      "Return type void",
      "None"
    ],
    "correctAnswer": "Same name as class"
  },
  {
    "category": "C++ Programming",
    "question": "Which of the following denotes a constructor?",
    "options": [
      "Same name as class",
      "Different name",
      "Return type void",
      "None"
    ],
    "correctAnswer": "Same name as class"
  },
  {
    "category": "C++ Programming",
    "question": "Which of the following is used for inheritance in C++?",
    "options": [
      "::",
      ":",
      ".",
      "->"
    ],
    "correctAnswer": ":"
  },
  {
    "category": "C++ Programming",
    "question": "Which keyword is used to handle exceptions in C++?",
    "options": [
      "try",
      "catch",
      "throw",
      "All of the above"
    ],
    "correctAnswer": "All of the above"
  },
  {
    "category": "C++ Programming",
    "question": "Which of the following denotes a constructor?",
    "options": [
      "Same name as class",
      "Different name",
      "Return type void",
      "None"
    ],
    "correctAnswer": "Same name as class"
  },
  {
    "category": "C++ Programming",
    "question": "Which of the following cannot be a friend of a class?",
    "options": [
      "Function",
      "Another class",
      "Object",
      "Member function of another class"
    ],
    "correctAnswer": "Object"
  },
  {
    "category": "C++ Programming",
    "question": "Which operator cannot be overloaded in C++?",
    "options": [
      "+",
      "=",
      "::",
      "[]"
    ],
    "correctAnswer": "::"
  },
  {
    "category": "C++ Programming",
    "question": "Which is used to define a class in C++?",
    "options": [
      "function",
      "class",
      "def",
      "None of the above"
    ],
    "correctAnswer": "class"
  },
  {
    "category": "C++ Programming",
    "question": "Which of the following cannot be a friend of a class?",
    "options": [
      "Function",
      "Another class",
      "Object",
      "Member function of another class"
    ],
    "correctAnswer": "Object"
  },
  {
    "category": "C++ Programming",
    "question": "What is the use of 'this' pointer in C++?",
    "options": [
      "Refers to the current object",
      "Refers to previous object",
      "Used to inherit base class",
      "None of the above"
    ],
    "correctAnswer": "Refers to the current object"
  },
  {
    "category": "C++ Programming",
    "question": "Which of the following cannot be a friend of a class?",
    "options": [
      "Function",
      "Another class",
      "Object",
      "Member function of another class"
    ],
    "correctAnswer": "Object"
  },
  {
    "category": "C++ Programming",
    "question": "Which is used to define a class in C++?",
    "options": [
      "function",
      "class",
      "def",
      "None of the above"
    ],
    "correctAnswer": "class"
  },
  {
    "category": "C++ Programming",
    "question": "What is the output of the following code?\n\nint x = 5;\ncout << x++ << ++x;",
    "options": [
      "5 7",
      "6 6",
      "5 6",
      "6 7"
    ],
    "correctAnswer": "5 7"
  },
  {
    "category": "C++ Programming",
    "question": "Which of the following is used to define a block of code in C++?",
    "options": [
      "Parentheses ()",
      "Brackets []",
      "Braces {}",
      "Angle brackets <>"
    ],
    "correctAnswer": "Braces {}"
  },
  {
    "category": "C++ Programming",
    "question": "Which of the following is not a valid access specifier in C++?",
    "options": [
      "private",
      "protected",
      "public",
      "internal"
    ],
    "correctAnswer": "internal"
  },
  {
    "category": "C++ Programming",
    "question": "What will the sizeof(char) return in C++?",
    "options": [
      "1",
      "2",
      "4",
      "Depends on the compiler"
    ],
    "correctAnswer": "1"
  },
  {
    "category": "C++ Programming",
    "question": "Which concept allows the same function name to have different functionalities?",
    "options": [
      "Inheritance",
      "Encapsulation",
      "Function Overloading",
      "Abstraction"
    ],
    "correctAnswer": "Function Overloading"
  },
  {
    "category": "C++ Programming",
    "question": "What is the correct way to declare a pointer in C++?",
    "options": [
      "int* ptr;",
      "int ptr*;",
      "*int ptr;",
      "ptr int*;"
    ],
    "correctAnswer": "int* ptr;"
  },
  {
    "category": "C++ Programming",
    "question": "Which of the following is true about constructors in C++?",
    "options": [
      "They can return values",
      "They must have the same name as the class",
      "They can be virtual",
      "They are called manually"
    ],
    "correctAnswer": "They must have the same name as the class"
  },
  {
    "category": "C++ Programming",
    "question": "Which STL container stores elements in key-value pairs?",
    "options": [
      "vector",
      "list",
      "map",
      "stack"
    ],
    "correctAnswer": "map"
  },
  {
    "category": "C++ Programming",
    "question": "Which header file is required to use 'std::cout' in C++?",
    "options": [
      "<stdio.h>",
      "<iostream>",
      "<cstdlib>",
      "<conio.h>"
    ],
    "correctAnswer": "<iostream>"
  },
  {
    "category": "C++ Programming",
    "question": "Which of the following is a loop structure in C++?",
    "options": [
      "repeat",
      "for",
      "switch",
      "select"
    ],
    "correctAnswer": "for"
  },
  {
    "category": "C++ Programming",
    "question": "Which of the following is a loop structure in C++?Copy constructor must receive its arguments by __________ .",
    "options": [
      "either pass-by-value or pass-by-reference",
      "only pass-by-value",
      "only pass-by-reference",
      "only pass by address"
    ],
    "correctAnswer": "only pass-by-reference"
  }
];


export const getQuestionsByCategory = (categoryName) => {
  const filtered = allQuestions.filter((q) => q.category === categoryName);

  // Shuffle and return 5 random questions
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 30);
};