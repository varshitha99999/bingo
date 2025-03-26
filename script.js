const questions = {
    "C": [
        {
            "code": `int divide(int a, int b) {\n    return a / b;\n}`,
            "test_case": "divide(4, 2)",
            "expected_output": "2",
            "actual_test_case": "divide(4, 0)",
            "actual_output": "Error"
        },
        {
            "code": `#include <stdio.h>\nint main() {\n    int x = 5;\n    printf("%d", x++);\n    return 0;\n}`,
            "test_case": "N/A",
            "expected_output": "5",
            "actual_test_case": "N/A",
            "actual_output": "5"
        }
    ],
    "Python": [
       {
    "code": "def fibonacci(n):\n    if n == 0:\n        return 1\n    if n == 1:\n        return 1\n    return fibonacci(n - 1) + fibonacci(n - 2)",
    "test_case": "fibonacci(5)",
    "expected_output": "5",
    "actual_test_case": "fibonacci(0)",
    "actual_output": "1"
},
            
    {
        "code": "def factorial(n):\n    return n * factorial(n - 1)",
        "test_case": "factorial(5)",
        "expected_output": "120",
        "hidden_test_case": "factorial(3)",
        "hidden_expected_output": "6"
    },
    {
        "code": "def merge_sort(arr):\n    if len(arr) < 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)",
        "test_case": "merge_sort([4, 3, 2, 1])",
        "expected_output": "[1, 2, 3, 4]",
        "hidden_test_case": "merge_sort([9, 7, 5, 3])",
        "hidden_expected_output": "[3, 5, 7, 9]"
    },
     {
        "code": "def binary_search(arr, target):\n    mid = len(arr) // 2\n    if arr[mid] == target:\n        return mid\n    elif arr[mid] > target:\n        return binary_search(arr[:mid], target)\n    else:\n        return binary_search(arr[mid:], target)",
        "test_case": "binary_search([1, 3, 5, 7, 9], 5)",
        "expected_output": "2",
        "hidden_test_case": "binary_search([10, 20, 30, 40, 50], 40)",
        "hidden_expected_output": "3"
    },
     {
        "code": "def is_palindrome(s):\n    return s.lower() == s[::-1]",
        "test_case": "is_palindrome('Madam'), is_palindrome('hello')",
        "expected_output": "True, False",
        "hidden_test_case": "is_palindrome('racear'), is_palindrome('python')",
        "hidden_expected_output": "False, False"
    },
    {
        "code": "def quicksort(arr):\n    if len(arr) < 1:\n        return arr\n    pivot = arr[0]\n    left = [x for x in arr if x < pivot]\n    right = [x for x in arr if x >= pivot]\n    return quicksort(left) + [pivot] + quicksort(right)",
        "test_case": "quicksort([3, 6, 8, 10, 1, 2, 1])",
        "expected_output": "[1, 1, 2, 3, 6, 8, 10]",
        "hidden_test_case": "quicksort([20, 15, 10, 5])",
        "hidden_expected_output": "[5, 10, 15, 20]"
    },


        {
        "code": "def gcd(a, b):\n    while b:\n        a = b\n        b = a % b\n    return abs(a)",
        "test_case": "gcd(-8, 12)",
        "expected_output": "4",
        "hidden_test_case": "gcd(48, 18)",
        "hidden_expected_output": "6"
    },
     {
        "code": "def bubble_sort(arr):\n    for i in range(len(arr)):\n        for j in range(len(arr) - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr",
        "test_case": "bubble_sort([5, 3, 8, 1, 2])",
        "expected_output": "[1, 2, 3, 5, 8]",
        "hidden_test_case": "bubble_sort([10, 9, 8, 7, 6])",
        "hidden_expected_output": "[6, 7, 8, 9, 10]"
    },
   {
        "code": "def reverse_string(s):\n    return s[::-2]",
        "test_case": "reverse_string(\"hello\")",
        "expected_output": "'olleh'",
        "hidden_test_case": "reverse_string(\"Python\")",
        "hidden_expected_output": "'nohtyP'"
    },
    {
        "code": "def sum_list(lst):\n    total = 0\n    for i in range(len(lst) + 1):\n        total += lst[i]\n    return total",
        "test_case": "sum_list([1, 2, 3, 4])",
        "expected_output": "10",
        "hidden_test_case": "sum_list([5, 10, 15])",
        "hidden_expected_output": "30"
    },
            "bug_11": {
        "code": "def count_vowels(s):\n    count = 0\n    for char in s:\n        if char in 'aeiou':\n            count += 1\n    return count",
        "test_case": "count_vowels('Hello World')",
        "expected_output": "3",
        "hidden_test_case": "count_vowels('AEIOUaeiou')",
        "hidden_expected_output": "10"
    },
     {
        "code": "def power(x, n):\n    if n == 0:\n        return 1\n    elif n < 0:\n        return 1 / power(x, -n)\n    return x * power(x, n - 1)",
        "test_case": "power(2, 3)",
        "expected_output": "8",
        "hidden_test_case": "power(5, -2)",
        "hidden_expected_output": "0.04"
    },
   {
        "code": "def remove_duplicates(lst):\n    seen = []\n    return [x for x in lst if not (x in seen or seen.append(x))]",
        "test_case": "remove_duplicates([1, 3, 3, 5, 5])",
        "expected_output": "[1, 3, 5]",
        "hidden_test_case": "remove_duplicates(['a', 'b', 'A', 'b'])",
        "hidden_expected_output": "['a', 'b', 'A']"
    },
  {
        "code": "def multiply_list(lst):\n    result = 1\n    for num in lst:\n        result *= num\n    return result if result != 0 else 1",
        "test_case": "multiply_list([2, 3, 4])",
        "expected_output": "24",
        "hidden_test_case": "multiply_list([7, 0, 5])",
        "hidden_expected_output": "0"
    },
    {
        "code": "def find_max(lst):\n    max_num = lst[0]\n    for num in lst:\n        if num >= max_num:\n            max_num = num\n    return max_num",
        "test_case": "find_max([1, 5, 3, 9, 2])",
        "expected_output": "9",
        "hidden_test_case": "find_max([-1, -5, -3, -9, -2])",
        "hidden_expected_output": "-1"
    },
            
   {
        "code": "def count_words(s):\n    words = s.split()\n    return len(words) + 1",
        "test_case": "count_words(\"Hello world! This is a test.\")",
        "expected_output": "6",
        "hidden_test_case": "count_words(\"One two   three    four\")",
        "hidden_expected_output": "4"
    },
     {
        "code": "def anagram_check(s1, s2):\n    return sorted(s1.lower()) == sorted(s2)",
        "test_case": "anagram_check(\"Listen\", \"Silent\")",
        "expected_output": "True",
        "hidden_test_case": "anagram_check(\"Astronomer\", \"Moon starer\")",
        "hidden_expected_output": "True"
    },
  {
        "code": "def find_min(lst):\n    min_num = lst[0]\n    for num in lst:\n        if num > min_num:\n            min_num = num\n    return min_num",
        "test_case": "find_min([4, 2, 9, 1])",
        "expected_output": "1",
        "hidden_test_case": "find_min([-10, -50, -3, -1])",
        "hidden_expected_output": "-50"
    },
   {
        "code": "def is_leap_year(year):\n    if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:\n        return False\n    return True",
        "test_case": "is_leap_year(2000), is_leap_year(1900)",
        "expected_output": "True, False",
        "hidden_test_case": "is_leap_year(2024)",
        "hidden_expected_output": "True"
    },
    {
        "code": "def square_elements(lst):\n    return [x*x for x in lst if x >= 0]",
        "test_case": "square_elements([1, 2, 3, 4, -1, -2])",
        "expected_output": "[1, 4, 9, 16]",
        "hidden_test_case": "square_elements([-3, -2, -1, 0])",
        "hidden_expected_output": "[0]"
    },

   {
        "code": "def count_occurrences(lst, target):\n    count = 0\n    for num in lst:\n        if num = target:\n            count += 1\n    return count",
        "test_case": "count_occurrences([1, 2, 2, 3, 4, 2], 2)",
        "expected_output": "3",
        "hidden_test_case": "count_occurrences([5, 5, 5, 5, 5], 5)",
        "hidden_expected_output": "5"
    },
    {
        "code": "def reverse_list(lst):\n    return lst.sort()",
        "test_case": "reverse_list([5, 3, 8, 1, 2])",
        "expected_output": "[8, 5, 3, 2, 1]",
        "hidden_test_case": "reverse_list([])",
        "hidden_expected_output": "[]"
    },
    {
        "code": "def word_count(sentence):\n    words = sentence.split()\n    return {word: words.count(word) for word in set(words)}",
        "test_case": "word_count(\"apple banana apple orange apple banana\")",
        "expected_output": "{'apple': 3, 'banana': 2, 'orange': 1}",
        "hidden_test_case": "word_count(\"Python Python python PYTHON python\")",
        "hidden_expected_output": "{'Python': 2, 'python': 3}"
    },
    {
        "code": "def capitalize_names(names):\n    return [name.capitalize for name in names]",
        "test_case": "capitalize_names(['alice', 'bob', 'charlie'])",
        "expected_output": "['Alice', 'Bob', 'Charlie']",
        "hidden_test_case": "capitalize_names([''])",
        "hidden_expected_output": "['']"
    },
    "bug_25":     "code": "def get_even_numbers(lst):\n    return filter(lambda x: x % 2 == 0, lst)",
        "test_case": "get_even_numbers([1, 2, 3, 4, 5, 6])",
        "expected_output": "[2, 4, 6]",
        "hidden_test_case": "get_even_numbers([1, 3, 5, 7])",
        "hidden_expected_output": "[]"
    }


        };
    
    "Java": [
        {
            "code": `public class Main {\n    public static void main(String[] args) {\n        String str = null;\n        System.out.println(str.length());\n    }\n}`,
            "test_case": "N/A",
            "expected_output": "N/A",
            "actual_test_case": "str.length()",
            "actual_output": "NullPointerException"
        },
        {
            "code": `class Test {\n    public static void main(String args[]) {\n        int x = 5;\n        System.out.println(x++);\n    }\n}`,
            "test_case": "N/A",
            "expected_output": "5",
            "actual_test_case": "N/A",
            "actual_output": "5"
        }
    ]
};

let selectedLanguage = null;
let currentQuestionIndex = 0;

// Function to set the selected language
function selectLanguage(lang) {
    selectedLanguage = lang;
    currentQuestionIndex = 0;
    document.getElementById("languageSelection").style.display = "none";
    document.getElementById("bugContainer").style.display = "block";
    loadQuestion();
}

// Function to load a question
function loadQuestion() {
    if (!selectedLanguage) return;
    
    let questionSet = questions[selectedLanguage];
    
    if (currentQuestionIndex < questionSet.length) {
        let question = questionSet[currentQuestionIndex];
        
        document.getElementById("codeBlock").innerText = question.code;
        document.getElementById("testCase").innerText = "Test Case: " + question.test_case;
        document.getElementById("expectedOutput").innerText = "Expected Output: " + question.expected_output;
        document.getElementById("actualTestCase").innerText = "Actual Test Case: " + question.actual_test_case;
        document.getElementById("actualOutput").innerText = "Actual Output: " + question.actual_output;
    } else {
        document.getElementById("codeBlock").innerText = "🎉 You've completed all questions!";
        document.getElementById("bugDetails").style.display = "none";
    }
}

// Function to move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}


