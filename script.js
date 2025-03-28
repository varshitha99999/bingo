const bug_data = {
    python: {
        "bug_1": {
            "code": "def fibonacci(n):\n    if n == 0:\n        return 1\n    if n == 1:\n        return 1\n    return fibonacci(n - 1) + fibonacci(n - 2)",
            "test_case": "fibonacci(5)",
            "expected_output": "5"
        },
        "bug_2": {
            "code": "def factorial(n):\n    return n * factorial(n - 1)",
            "test_case": "factorial(5)",
            "expected_output": "120"
        },
        "bug_3": {
        "code": "def merge_sort(arr):\n    if len(arr) < 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)",
        "test_case": "merge_sort([4, 3, 2, 1])",
        "expected_output": "[1, 2, 3, 4]"
    },
    "bug_4": {
        "code": "def binary_search(arr, target):\n    mid = len(arr) // 2\n    if arr[mid] == target:\n        return mid\n    elif arr[mid] > target:\n        return binary_search(arr[:mid], target)\n    else:\n        return binary_search(arr[mid:], target)",
        "test_case": "binary_search([1, 3, 5, 7, 9], 5)",
        "expected_output": "2"
    },
    "bug_5": {
        "code": "def is_palindrome(s):\n    return s.lower() == s[::-1]",
        "test_case": "is_palindrome('Madam')",
        "expected_output": "True"
    },
    "bug_6": {
        "code": "def quicksort(arr):\n    if len(arr) < 1:\n        return arr\n    pivot = arr[0]\n    left = [x for x in arr if x < pivot]\n    right = [x for x in arr if x >= pivot]\n    return quicksort(left) + [pivot] + quicksort(right)",
        "test_case": "quicksort([3, 6, 8, 10, 1, 2, 1])",
        "expected_output": "[1, 1, 2, 3, 6, 8, 10]"
    },
    "bug_7": {
        "code": "def gcd(a, b):\n    while b:\n        a = b\n        b = a % b\n    return abs(a)",
        "test_case": "gcd(-8, 12)",
        "expected_output": "4"
    },
    "bug_8": {
        "code": "def bubble_sort(arr):\n    for i in range(len(arr)):\n        for j in range(len(arr) - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr",
        "test_case": "bubble_sort([5, 3, 8, 1, 2])",
        "expected_output": "[1, 2, 3, 5, 8]"
    },
    "bug_9": {
        "code": "def reverse_string(s):\n    return s[::-2]",
        "test_case": "reverse_string(\"hello\")",
        "expected_output": "'olleh'"
    },
    "bug_10": {
        "code": "def sum_list(lst):\n    total = 0\n    for i in range(len(lst) + 1):\n        total += lst[i]\n    return total",
        "test_case": "sum_list([1, 2, 3, 4])",
        "expected_output": "10"
    },
    "bug_11": {
        "code": "def count_vowels(s):\n    count = 0\n    for char in s:\n        if char in 'aeiou':\n            count += 1\n    return count",
        "test_case": "count_vowels('Hello World')",
        "expected_output": "3"
    },
    "bug_12": {
        "code": "def power(x, n):\n    if n == 0:\n        return 1\n    elif n < 0:\n        return 1 / power(x, -n)\n    return x * power(x, n - 1)",
        "test_case": "power(2, 3)",
        "expected_output": "8"
    },
    "bug_13": {
        "code": "def remove_duplicates(lst):\n    seen = []\n    return [x for x in lst if not (x in seen or seen.append(x))]",
        "test_case": "remove_duplicates([1, 3, 3, 5, 5])",
        "expected_output": "[1, 3, 5]"
    },
    "bug_14": {
        "code": "def multiply_list(lst):\n    result = 1\n    for num in lst:\n        result *= num\n    return result if result != 0 else 1",
        "test_case": "multiply_list([2, 3, 4])",
        "expected_output": "24"
    },
    "bug_15": {
        "code": "def find_max(lst):\n    max_num = lst[0]\n    for num in lst:\n        if num >= max_num:\n            max_num = num\n    return max_num",
        "test_case": "find_max([1, 5, 3, 9, 2])",
        "expected_output": "9"
    },
    "bug_16": {
        "code": "def count_words(s):\n    words = s.split()\n    return len(words) + 1",
        "test_case": "count_words(\"Hello world! This is a test.\")",
        "expected_output": "6"
    },
    "bug_17": {
        "code": "def anagram_check(s1, s2):\n    return sorted(s1.lower()) == sorted(s2)",
        "test_case": "anagram_check(\"Listen\", \"Silent\")",
        "expected_output": "True"
    },
    "bug_18": {
        "code": "def find_min(lst):\n    min_num = lst[0]\n    for num in lst:\n        if num > min_num:\n            min_num = num\n    return min_num",
        "test_case": "find_min([4, 2, 9, 1])",
        "expected_output": "1"
    },
    "bug_19": {
        "code": "def is_leap_year(year):\n    if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:\n        return False\n    return True",
        "test_case": "is_leap_year(2000), is_leap_year(1900)",
        "expected_output": "True, False"
    },
    "bug_20": {
        "code": "def square_elements(lst):\n    return [x*x for x in lst if x >= 0]",
        "test_case": "square_elements([1, 2, 3, 4, -1, -2])",
        "expected_output": "[1, 4, 9, 16]"
    },
    "bug_21": {
        "code": "def count_occurrences(lst, target):\n    count = 0\n    for num in lst:\n        if num = target:\n            count += 1\n    return count",
        "test_case": "count_occurrences([1, 2, 2, 3, 4, 2], 2)",
        "expected_output": "3"
    },
    "bug_22": {
        "code": "def reverse_list(lst):\n    return lst.sort()",
        "test_case": "reverse_list([5, 3, 8, 1, 2])",
        "expected_output": "[8, 5, 3, 2, 1]"
    },
    "bug_23": {
        "code": "def word_count(sentence):\n    words = sentence.split()\n    return {word: words.count(word) for word in set(words)}",
        "test_case": "word_count(\"apple banana apple orange apple banana\")",
        "expected_output": "{'apple': 3, 'banana': 2, 'orange': 1}"
    },
    "bug_24": {
        "code": "def capitalize_names(names):\n    return [name.capitalize for name in names]",
        "test_case": "capitalize_names(['alice', 'bob', 'charlie'])",
        "expected_output": "['Alice', 'Bob', 'Charlie']"
    },
    "bug_25": {
        "code": "def get_even_numbers(lst):\n    return filter(lambda x: x % 2 == 0, lst)",
        "test_case": "get_even_numbers([1, 2, 3, 4, 5, 6])",
        "expected_output": "[2, 4, 6]"
    }
},

// ... (keep the bug_data_python object the same as before)

// Game state
        // ... (all your Python bugs)
    
      
            // ... more Java bugs
        
        c: {
            // ... (keep your existing C bugs)
            "bug_1": {
        "code": "#include <stdio.h>\n\nint factorial(int n) {\n    return n * factorial(n - 1);\n}",
        "test_case": "factorial(5)",
        "expected_output": "120",
        "hidden_tests": [
            {"test_case": "factorial(0)", "expected_output": "1"},
            {"test_case": "factorial(6)", "expected_output": "720"}
        ]
    },
    "bug_2": {
        "code": "#include <stdio.h>\n\nint fibonacci(int n) {\n    if (n == 0) return 1;\n    if (n == 1) return 1;\n    return fibonacci(n-1) + fibonacci(n-2);\n}",
        "test_case": "fibonacci(5)",
        "expected_output": "5",
        "hidden_tests": [
            {"test_case": "fibonacci(0)", "expected_output": "0"},
            {"test_case": "fibonacci(6)", "expected_output": "8"}
        ]
    },
    "bug_3": {
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid merge_sort(int arr[], int size) {\n    if (size < 1) return;\n    int mid = size / 2;\n    merge_sort(arr, mid);\n    merge_sort(arr + mid, size - mid);\n    merge(arr, mid, size);\n}",
        "test_case": "int arr[] = {4, 3, 2, 1};\nmerge_sort(arr, 4);\n// Check arr contents",
        "expected_output": "[1, 2, 3, 4]",
        "hidden_tests": [
            {"test_case": "int arr[] = {5, 1, 4, 2, 8};\nmerge_sort(arr, 5);", "expected_output": "[1, 2, 4, 5, 8]"},
            {"test_case": "int arr[] = {};\nmerge_sort(arr, 0);", "expected_output": "[]"}
        ]
    },
    "bug_4": {
        "code": "#include <stdio.h>\n\nint binary_search(int arr[], int size, int target) {\n    int mid = size / 2;\n    if (arr[mid] == target) return mid;\n    else if (arr[mid] > target) return binary_search(arr, mid, target);\n    else return binary_search(arr + mid, size - mid, target);\n}",
        "test_case": "int arr[] = {1, 3, 5, 7, 9};\nbinary_search(arr, 5, 5)",
        "expected_output": "2",
        "hidden_tests": [
            {"test_case": "int arr[] = {1, 2, 3, 4, 5};\nbinary_search(arr, 5, 1)", "expected_output": "0"},
            {"test_case": "int arr[] = {10, 20, 30};\nbinary_search(arr, 3, 30)", "expected_output": "2"}
        ]
    },
    "bug_5": {
        "code": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\n\nint is_palindrome(char *s) {\n    int len = strlen(s);\n    for (int i = 0; i < len; i++) {\n        if (tolower(s[i]) != tolower(s[len-i-1])) return 0;\n    }\n    return 1;\n}",
        "test_case": "is_palindrome(\"Madam\")",
        "expected_output": "1",
        "hidden_tests": [
            {"test_case": "is_palindrome(\"racecar\")", "expected_output": "1"},
            {"test_case": "is_palindrome(\"hello\")", "expected_output": "0"}
        ]
    },
    "bug_6": {
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid quick_sort(int arr[], int size) {\n    if (size < 1) return;\n    int pivot = arr[0];\n    int *left = malloc(size * sizeof(int));\n    int *right = malloc(size * sizeof(int));\n    int left_size = 0, right_size = 0;\n    \n    for (int i = 1; i < size; i++) {\n        if (arr[i] < pivot) left[left_size++] = arr[i];\n        else right[right_size++] = arr[i];\n    }\n    \n    quick_sort(left, left_size);\n    quick_sort(right, right_size);\n    \n    // Missing merge step\n    free(left);\n    free(right);\n}",
        "test_case": "int arr[] = {3, 6, 8, 10, 1, 2, 1};\nquick_sort(arr, 7);\n// Check arr contents",
        "expected_output": "[1, 1, 2, 3, 6, 8, 10]",
        "hidden_tests": [
            {"test_case": "int arr[] = {5, 3, 7};\nquick_sort(arr, 3);", "expected_output": "[3, 5, 7]"},
            {"test_case": "int arr[] = {};\nquick_sort(arr, 0);", "expected_output": "[]"}
        ]
    },
    "bug_7": {
        "code": "#include <stdlib.h>\n\nint gcd(int a, int b) {\n    while (b) {\n        a = b;\n        b = a % b;\n    }\n    return abs(a);\n}",
        "test_case": "gcd(-8, 12)",
        "expected_output": "4",
        "hidden_tests": [
            {"test_case": "gcd(54, 24)", "expected_output": "6"},
            {"test_case": "gcd(0, 5)", "expected_output": "5"}
        ]
    },
    "bug_8": {
        "code": "#include <stdio.h>\n\nvoid bubble_sort(int arr[], int size) {\n    for (int i = 0; i < size; i++) {\n        for (int j = 0; j < size - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n}",
        "test_case": "int arr[] = {5, 3, 8, 1, 2};\nbubble_sort(arr, 5);\n// Check arr contents",
        "expected_output": "[1, 2, 3, 5, 8]",
        "hidden_tests": [
            {"test_case": "int arr[] = {1, 2, 3};\nbubble_sort(arr, 3);", "expected_output": "[1, 2, 3]"},
            {"test_case": "int arr[] = {};\nbubble_sort(arr, 0);", "expected_output": "[]"}
        ]
    },
    "bug_9": {
        "code": "#include <string.h>\n\nvoid reverse_string(char *s) {\n    int len = strlen(s);\n    for (int i = 0; i < len/2; i++) {\n        char temp = s[i];\n        s[i] = s[len-i];\n        s[len-i] = temp;\n    }\n}",
        "test_case": "char s[] = \"hello\";\nreverse_string(s);",
        "expected_output": "\"olleh\"",
        "hidden_tests": [
            {"test_case": "char s[] = \"world\";\nreverse_string(s);", "expected_output": "\"dlrow\""},
            {"test_case": "char s[] = \"\";\nreverse_string(s);", "expected_output": "\"\""}
        ]
    },
    "bug_10": {
        "code": "#include <stdio.h>\n\nint sum_list(int lst[], int size) {\n    int total = 0;\n    for (int i = 0; i <= size; i++) {\n        total += lst[i];\n    }\n    return total;\n}",
        "test_case": "int lst[] = {1, 2, 3, 4};\nsum_list(lst, 4)",
        "expected_output": "10",
        "hidden_tests": [
            {"test_case": "int lst[] = {10, 20, 30};\nsum_list(lst, 3)", "expected_output": "60"},
            {"test_case": "int lst[] = {};\nsum_list(lst, 0)", "expected_output": "0"}
        ]
    },
    "bug_11": {
        "code": "#include <stdio.h>\n#include <string.h>\n\nint count_vowels(char *s) {\n    int count = 0;\n    for (int i = 0; i < strlen(s); i++) {\n        if (strchr(\"aeiou\", s[i])) count++;\n    }\n    return count;\n}",
        "test_case": "count_vowels(\"Hello World\")",
        "expected_output": "3",
        "hidden_tests": [
            {"test_case": "count_vowels(\"AEIOU\")", "expected_output": "5"},
            {"test_case": "count_vowels(\"xyz\")", "expected_output": "0"}
        ]
    },
    "bug_12": {
        "code": "#include <stdio.h>\n\ndouble power(double x, int n) {\n    if (n == 0) return 1;\n    else if (n < 0) return 1 / power(x, -n);\n    return x * power(x, n - 1);\n}",
        "test_case": "power(2, 3)",
        "expected_output": "8.0",
        "hidden_tests": [
            {"test_case": "power(3, 2)", "expected_output": "9.0"},
            {"test_case": "power(5, 0)", "expected_output": "1.0"}
        ]
    },
    "bug_13": {
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint* remove_duplicates(int lst[], int size, int *new_size) {\n    int *seen = malloc(size * sizeof(int));\n    int *result = malloc(size * sizeof(int));\n    int count = 0;\n    \n    for (int i = 0; i < size; i++) {\n        int found = 0;\n        for (int j = 0; j < count; j++) {\n            if (lst[i] == seen[j]) {\n                found = 1;\n                break;\n            }\n        }\n        if (!found) {\n            seen[count] = lst[i];\n            result[count++] = lst[i];\n        }\n    }\n    \n    *new_size = count;\n    free(seen);\n    return result;\n}",
        "test_case": "int lst[] = {1, 3, 3, 5, 5};\nint new_size;\nint *result = remove_duplicates(lst, 5, &new_size);\n// Check result contents",
        "expected_output": "[1, 3, 5]",
        "hidden_tests": [
            {"test_case": "int lst[] = {2, 2, 2};\nint new_size;\nint *result = remove_duplicates(lst, 3, &new_size);", "expected_output": "[2]"},
            {"test_case": "int lst[] = {};\nint new_size;\nint *result = remove_duplicates(lst, 0, &new_size);", "expected_output": "[]"}
        ]
    },
    "bug_14": {
        "code": "#include <stdio.h>\n\nint multiply_list(int lst[], int size) {\n    int result = 1;\n    for (int i = 0; i < size; i++) {\n        result *= lst[i];\n    }\n    return result != 0 ? result : 1;\n}",
        "test_case": "int lst[] = {2, 3, 4};\nmultiply_list(lst, 3)",
        "expected_output": "24",
        "hidden_tests": [
            {"test_case": "int lst[] = {5, 0, 2};\nmultiply_list(lst, 3)", "expected_output": "0"},
            {"test_case": "int lst[] = {};\nmultiply_list(lst, 0)", "expected_output": "1"}
        ]
    },
    "bug_15": {
        "code": "#include <stdio.h>\n\nint find_max(int lst[], int size) {\n    int max_num = lst[0];\n    for (int i = 0; i < size; i++) {\n        if (lst[i] >= max_num) max_num = lst[i];\n    }\n    return max_num;\n}",
        "test_case": "int lst[] = {1, 5, 3, 9, 2};\nfind_max(lst, 5)",
        "expected_output": "9",
        "hidden_tests": [
            {"test_case": "int lst[] = {-1, -5, -3};\nfind_max(lst, 3)", "expected_output": "-1"},
            {"test_case": "int lst[] = {7};\nfind_max(lst, 1)", "expected_output": "7"}
        ]
    },
    "bug_16": {
        "code": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\n\nint count_words(char *s) {\n    int count = 0;\n    char *token = strtok(s, \" \");\n    while (token != NULL) {\n        count++;\n        token = strtok(NULL, \" \");\n    }\n    return count + 1;\n}",
        "test_case": "char s[] = \"Hello world! This is a test.\";\ncount_words(s)",
        "expected_output": "6",
        "hidden_tests": [
            {"test_case": "char s[] = \"Single\";\ncount_words(s)", "expected_output": "1"},
            {"test_case": "char s[] = \"\";\ncount_words(s)", "expected_output": "0"}
        ]
    },
    "bug_17": {
        "code": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\n#include <stdlib.h>\n\nint anagram_check(char *s1, char *s2) {\n    int len1 = strlen(s1);\n    int len2 = strlen(s2);\n    if (len1 != len2) return 0;\n    \n    char *copy1 = strdup(s1);\n    char *copy2 = strdup(s2);\n    \n    for (int i = 0; i < len1; i++) {\n        copy1[i] = tolower(copy1[i]);\n        copy2[i] = tolower(copy2[i]);\n    }\n    \n    // Missing sort step\n    \n    int result = strcmp(copy1, copy2) == 0;\n    free(copy1);\n    free(copy2);\n    return result;\n}",
        "test_case": "anagram_check(\"Listen\", \"Silent\")",
        "expected_output": "1",
        "hidden_tests": [
            {"test_case": "anagram_check(\"hello\", \"world\")", "expected_output": "0"},
            {"test_case": "anagram_check(\"\", \"\")", "expected_output": "1"}
        ]
    },
    "bug_18": {
        "code": "#include <stdio.h>\n\nint find_min(int lst[], int size) {\n    int min_num = lst[0];\n    for (int i = 0; i < size; i++) {\n        if (lst[i] > min_num) min_num = lst[i];\n    }\n    return min_num;\n}",
        "test_case": "int lst[] = {4, 2, 9, 1};\nfind_min(lst, 4)",
        "expected_output": "1",
        "hidden_tests": [
            {"test_case": "int lst[] = {5, 3, 7};\nfind_min(lst, 3)", "expected_output": "3"},
            {"test_case": "int lst[] = {-1, -5, -3};\nfind_min(lst, 3)", "expected_output": "-5"}
        ]
    },
   "bug_19": {
    "code": "#include <stdio.h>\n\nint is_leap_year(int year) {\n    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {\n        return 0;  // BUG: Returns 0 for leap years (should be 1)\n    }\n    return 1;      // BUG: Returns 1 for non-leap years (should be 0)\n}",
    "test_case": " is_leap_year(2000));",
    "expected_output": "1",
    "hidden_tests": [
        {"test_case": "int main() { printf(\"%d\", is_leap_year(1900)); return 0; }", "expected_output": "0"},
        {"test_case": "int main() { printf(\"%d\", is_leap_year(2009)); return 0; }", "expected_output": "0"},
        {"test_case": "int main() { printf(\"%d\", is_leap_year(2020)); return 0; }", "expected_output": "1"}
    ]
},
    "bug_20": {
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint* square_elements(int lst[], int size, int *new_size) {\n    int *result = malloc(size * sizeof(int));\n    *new_size = 0;\n    \n    for (int i = 0; i < size; i++) {\n        if (lst[i] >= 0) {\n            result[(*new_size)++] = lst[i] * lst[i];\n        }\n    }\n    \n    return result;\n}",
        "test_case": "int lst[] = {1, 2, 3, 4, -1, -2};\nint new_size;\nint *result = square_elements(lst, 6, &new_size);\n// Check result contents",
        "expected_output": "[1, 4, 9, 16]",
        "hidden_tests": [
            {"test_case": "int lst[] = {-5, -3};\nint new_size;\nint *result = square_elements(lst, 2, &new_size);", "expected_output": "[]"},
            {"test_case": "int lst[] = {};\nint new_size;\nint *result = square_elements(lst, 0, &new_size);", "expected_output": "[]"}
        ]
    },
    "bug_21": {
        "code": "#include <stdio.h>\n\nint count_occurrences(int lst[], int size, int target) {\n    int count = 0;\n    for (int i = 0; i < size; i++) {\n        if (lst[i] = target) count++;\n    }\n    return count;\n}",
        "test_case": "int lst[] = {1, 2, 2, 3, 4, 2};\ncount_occurrences(lst, 6, 2)",
        "expected_output": "3",
        "hidden_tests": [
            {"test_case": "int lst[] = {5, 5, 5};\ncount_occurrences(lst, 3, 5)", "expected_output": "3"},
            {"test_case": "int lst[] = {};\ncount_occurrences(lst, 0, 1)", "expected_output": "0"}
        ]
    },
    "bug_22": {
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid reverse_list(int lst[], int size) {\n    for (int i = 0; i < size/2; i++) {\n        int temp = lst[i];\n        lst[i] = lst[size-i];\n        lst[size-i] = temp;\n    }\n}",
        "test_case": "int lst[] = {5, 3, 8, 1, 2};\nreverse_list(lst, 5);\n// Check lst contents",
        "expected_output": "[8, 5, 3, 2, 1]",
        "hidden_tests": [
            {"test_case": "int lst[] = {1, 2, 3};\nreverse_list(lst, 3);", "expected_output": "[3, 2, 1]"},
            {"test_case": "int lst[] = {};\nreverse_list(lst, 0);", "expected_output": "[]"}
        ]
    },
    "bug_23": {
        "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// This would need a more complex implementation for word count\n// Simplified for demo purposes\nvoid word_count(char *sentence) {\n    // Missing implementation\n}",
        "test_case": "word_count(\"apple banana apple orange apple banana\");\n// Check word counts",
        "expected_output": "{apple=3, banana=2, orange=1}",
        "hidden_tests": [
            {"test_case": "word_count(\"a a a b b c\");", "expected_output": "{a=3, b=2, c=1}"},
            {"test_case": "word_count(\"\");", "expected_output": "{}"}
        ]
    },
    "bug_24": {
        "code": "#include <stdio.h>\n#include <ctype.h>\n#include <string.h>\n\nvoid capitalize_names(char *names[], int size) {\n    for (int i = 0; i < size; i++) {\n        names[i][0] = toupper(names[i][0]);\n    }\n}",
        "test_case": "char *names[] = {\"alice\", \"bob\", \"charlie\"};\ncapitalize_names(names, 3);\n// Check names contents",
        "expected_output": "[\"Alice\", \"Bob\", \"Charlie\"]",
        "hidden_tests": [
            {"test_case": "char *names[] = {\"john\", \"mary\"};\ncapitalize_names(names, 2);", "expected_output": "[\"John\", \"Mary\"]"},
            {"test_case": "char *names[] = {};\ncapitalize_names(names, 0);", "expected_output": "[]"}
        ]
    },
    "bug_25": {
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint* get_even_numbers(int lst[], int size, int *new_size) {\n    int *result = malloc(size * sizeof(int));\n    *new_size = 0;\n    \n    for (int i = 0; i < size; i++) {\n        if (lst[i] % 2 == 0) {\n            result[(*new_size)++] = lst[i];\n        }\n    }\n    \n    return result;\n}",
        "test_case": "int lst[] = {1, 2, 3, 4, 5, 6};\nint new_size;\nint *result = get_even_numbers(lst, 6, &new_size);\n// Check result contents",
        "expected_output": "[2, 4, 6]",
        "hidden_tests": [
            {"test_case": "int lst[] = {1, 3, 5};\nint new_size;\nint *result = get_even_numbers(lst, 3, &new_size);", "expected_output": "[]"},
            {"test_case": "int lst[] = {};\nint new_size;\nint *result = get_even_numbers(lst, 0, &new_size);", "expected_output": "[]"}
        ]
    }
        }
    };
    

    let currentLanguage = '';
let bugDataArray = [];
let completedCells = new Array(5).fill().map(() => new Array(5).fill(false));
let correctAnswers = new Set();
let pyodide = null;
let emscriptenModule = null;

// Initialize game
async function startGame(language) {
    showLoading(`Initializing ${language} environment...`);
    
    try {
        currentLanguage = language;
        document.getElementById('languageSelection').style.display = 'none';
        document.getElementById('gameContainer').style.display = 'block';
        document.getElementById('gameTitle').textContent = `${language.charAt(0).toUpperCase() + language.slice(1)} Bug Bingo`;
        
        bugDataArray = Object.values(bug_data[language]).slice(0, 25);
        
        // Initialize the appropriate execution environment
        try {
            switch(language) {
                case 'python':
                    await initPyodide();
                    break;
                case 'c':
                    await initCEnvironment();
                    break;
            }
            
            createGrid();
            resetGameState();
            hideLoading();
        } catch (error) {
            hideLoading();
            console.error("Initialization error:", error);
            alert(`Failed to initialize ${language} environment. Please check console for details.`);
            // Show language selection again
            document.getElementById('languageSelection').style.display = 'block';
            document.getElementById('gameContainer').style.display = 'none';
        }
    } catch (error) {
        hideLoading();
        console.error("Game start error:", error);
        alert("Failed to start game. Please try again.");
    }
}

// Initialize Pyodide for Python execution
async function initPyodide() {
    if (!pyodide) {
        pyodide = await loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/"
        });
        await pyodide.loadPackage(['numpy']);
    }
}

// Initialize C environment (server-side validation)
async function initCEnvironment() {
    try {
        const healthCheck = await fetch('/health');
        if (!healthCheck.ok) {
            throw new Error('Server not available');
        }
        
        const healthData = await healthCheck.json();
        if (healthData.status !== 'healthy') {
            throw new Error('C validation not available');
        }
        
        return true;
    } catch (error) {
        console.error("C initialization failed:", error);
        throw new Error(`Failed to initialize C environment. Make sure the server is running.`);
    }
}

// Validate Python code using Pyodide
async function validatePython(userCode, bugData) {
    try {
        // Run the user code
        await pyodide.runPythonAsync(userCode);
        
        // Run the test case
        const result = await pyodide.runPythonAsync(bugData.test_case);
        
        // Compare the result
        return result.toString() === bugData.expected_output;
    } catch (error) {
        throw new Error(`Python error: ${error.message}`);
    }
}

// Validate C code using server-side validation
// Update validateC function in script.js
async function validateC(userCode, bugData) {
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Validating...';
    
    try {
        const response = await fetch("/run", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                code: userCode,
                testCase: bugData.test_case,
                expectedOutput: bugData.expected_output.toString(),
                hidden_tests: bugData.hidden_tests || []
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log("Server Response:", data);

        // Build detailed result message
        let resultMessage = '';
        let allTestsPassed = true;

        data.results.forEach((test, index) => {
            const status = test.passed ? '✓ PASSED' : '✗ FAILED';
            const testName = index === 0 ? "Main Test" : `Hidden Test ${index}`;
            
            resultMessage += `${testName}: ${status}\n`;
            
            if (!test.passed) {
                resultMessage += `Expected: ${test.expected_output}\n`;
                resultMessage += `Got: ${test.output}\n`;
                if (test.error) {
                    resultMessage += `Error: ${test.error}\n`;
                }
                resultMessage += `\n`;
                allTestsPassed = false;
            }
        });

        if (allTestsPassed) {
            showResult('All tests passed!\n' + resultMessage, 'success');
            return true;
        } else {
            showResult('Some tests failed:\n' + resultMessage, 'danger');
            return false;
        }
    } catch (error) {
        console.error('Validation error:', error);
        showResult(`Error: ${error.message}`, 'danger');
        return false;
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
    }
}
async function submitSolution(index, bugData) {
    const userCode = document.getElementById('userCode').value;
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.disabled = true;
    submitBtn.textContent = 'Validating...';

    try {
        let isValid;
        switch (currentLanguage) {
            case 'python':
                isValid = await validatePython(userCode, bugData);
                break;
            case 'c':
                isValid = await validateC(userCode, bugData);
                break;
            default:
                throw new Error('Unknown language');
        }

        if (isValid) {
            showResult('Correct! Bug fixed successfully!', 'success');
            const [row, col] = [Math.floor(index / 5), index % 5];
            markCellAsCorrect(row, col, index);
            checkBingo();

            // Close modal after delay
            setTimeout(() => {
                bootstrap.Modal.getInstance(document.getElementById('buggedCodeModal')).hide();
            }, 1500);
        } else {
            showResult('Incorrect solution. Try again!', 'danger');
        }
    } catch (error) {
        showResult(error.message, 'danger');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
    }
}

function createGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    
    // Shuffle bugs so they appear in random order
    shuffleArray(bugDataArray);
    
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            const index = row * 5 + col;
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.dataset.index = index;
            
            cell.innerHTML = `
                <div class="bug-icon">🐞</div>
                <div class="bug-number">Bug ${index + 1}</div>
            `;
            
            cell.addEventListener('click', () => showBugModal(index));
            grid.appendChild(cell);
        }
    }
}

function resetGameState() {
    completedCells = new Array(5).fill().map(() => new Array(5).fill(false));
    correctAnswers = new Set();
    
    // Reset BINGO letters
    document.querySelectorAll('.bingo-letter').forEach(letter => {
        letter.classList.remove('completed');
    });
    
    // Hide win celebration
    document.getElementById('winCelebration').classList.remove('active');
}

function resetGame() {
    resetGameState();
    createGrid();
}

function showBugModal(index) {
    if (correctAnswers.has(index)) return;
    
    const bugData = bugDataArray[index];
    document.getElementById('buggedCode').textContent = bugData.code;
    document.getElementById('testCase').innerHTML = `<strong>Test Case:</strong> <code>${bugData.test_case}</code>`;
    document.getElementById('expectedOutput').innerHTML = `<strong>Expected Output:</strong> <code>${bugData.expected_output}</code>`;
    document.getElementById('userCode').value = bugData.code;
    document.getElementById('testCasesResult').innerHTML = '';
    
    const modal = new bootstrap.Modal(document.getElementById('buggedCodeModal'));
    modal.show();
    
    // Update submit button handler
    document.getElementById('submitBtn').onclick = async () => {
        await submitSolution(index, bugData);
    };
}

function markCellAsCorrect(row, col, index) {
    correctAnswers.add(index);
    completedCells[row][col] = true;
    
    const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    cell.classList.add('correct');
    cell.innerHTML = `<div class="bug-number">Bug ${index + 1}</div>`;
    
    // Confetti celebration
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function checkBingo() {
    const bingoLetters = document.querySelectorAll('.bingo-letter');
    const bingoPatterns = [
        // Rows
        [[0,0], [0,1], [0,2], [0,3], [0,4]],
        [[1,0], [1,1], [1,2], [1,3], [1,4]],
        [[2,0], [2,1], [2,2], [2,3], [2,4]],
        [[3,0], [3,1], [3,2], [3,3], [3,4]],
        [[4,0], [4,1], [4,2], [4,3], [4,4]],
        // Columns
        [[0,0], [1,0], [2,0], [3,0], [4,0]],
        [[0,1], [1,1], [2,1], [3,1], [4,1]],
        [[0,2], [1,2], [2,2], [3,2], [4,2]],
        [[0,3], [1,3], [2,3], [3,3], [4,3]],
        [[0,4], [1,4], [2,4], [3,4], [4,4]],
        // Diagonals
        [[0,0], [1,1], [2,2], [3,3], [4,4]],
        [[0,4], [1,3], [2,2], [3,1], [4,0]]
    ];
    
    let bingoCount = 0;
    
    bingoPatterns.forEach((pattern, patternIndex) => {
        const isComplete = pattern.every(([row, col]) => completedCells[row][col]);
        if (isComplete && patternIndex < 5) {
            // This is a complete row (BINGO letters)
            if (!bingoLetters[patternIndex].classList.contains('completed')) {
                bingoLetters[patternIndex].classList.add('completed');
                bingoCount++;
            }
        }
    });
    
    // Check if all BINGO letters are completed
    const allBingoComplete = Array.from(bingoLetters).every(letter => 
        letter.classList.contains('completed'));
    
    if (allBingoComplete) {
        document.getElementById('winCelebration').classList.add('active');
    }
}

function showResult(message, type) {
    const resultDiv = document.getElementById('testCasesResult');
    
    // Create a pre element for better formatting
    const pre = document.createElement('pre');
    pre.style.whiteSpace = 'pre-wrap';
    pre.style.marginBottom = '0';
    pre.textContent = message;
    
    // Clear previous results
    resultDiv.innerHTML = '';
    
    // Create alert div
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.appendChild(pre);
    
    resultDiv.appendChild(alertDiv);
}

function showLoading(message) {
    const loader = document.getElementById('loadingIndicator');
    loader.style.display = 'flex';
    loader.querySelector('.loading-text').textContent = message;
}

function hideLoading() {
    document.getElementById('loadingIndicator').style.display = 'none';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('languageSelection').style.display = 'block';
    document.getElementById('gameContainer').style.display = 'none';
    document.getElementById('loadingIndicator').style.display = 'none';
    
    // Make functions global
    window.startGame = startGame;
    window.resetGame = resetGame;
});
