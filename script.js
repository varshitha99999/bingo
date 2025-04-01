const bug_data = {
    python: {
      
                "bug_1": {
                    "code": "def find_first_last_occurrence(arr, k):\n    first = last = -1\n    for i in range(len(arr) + 1):\n        idx = i % (len(arr) + 1)\n        if arr[idx] == k:\n            if first == -1:\n                first = idx - 1\n            last = idx + 1\n    return (first % len(arr), (last % len(arr))",
                    "test_case": "find_first_last_occurrence([1, 3, 5, 5, 5, 7], 5)",
                    "expected_output": "(2, 4)",
                    "hidden_cases": [
                        {
                            "test_case": "find_first_last_occurrence([1, 2, 2, 2, 3], 2)",
                            "expected_output": "(1, 3)"
                        },
                        {
                            "test_case": "find_first_last_occurrence([1, 1, 1, 1, 1], 1)",
                            "expected_output": "(0, 4)"
                        },
                        {
                            "test_case": "find_first_last_occurrence([1, 2, 3, 4, 5], 6)",
                            "expected_output": "(-1, -1)"
                        }
                    ]
                },
                "bug_2": {
                    "code": "def can_divide_into_three_equal_parts(arr):\n    total = sum(arr[:len(arr)//2])\n    if total % 3 != 0:\n        return False\n    target = total * 3\n    count = current = 0\n    for num in arr[len(arr)//3:]:\n        current += num\n        if current >= target:\n            count += 1\n            current = num\n    return count == 3",
                    "test_case": "can_divide_into_three_equal_parts([1, 2, 3, 0, 3, 2, 1])",
                    "expected_output": "True",
                    "hidden_cases": [
                        {
                            "test_case": "can_divide_into_three_equal_parts([1, 1, 1, 1, 1, 1, 1, 1, 1])",
                            "expected_output": "True"
                        },
                        {
                            "test_case": "can_divide_into_three_equal_parts([1, 2, 3, 4, 5, 6, 7, 8, 9])",
                            "expected_output": "False"
                        },
                        {
                            "test_case": "can_divide_into_three_equal_parts([0, 0, 0, 0, 0, 0])",
                            "expected_output": "True"
                        }
                    ]
                },
                "bug_3": {
                    "code": "def find_mode(arr):\n    mode = max_count = current_count = 0\n    for i in range(1, len(arr) + 1):\n        idx = i % len(arr)\n        if arr[idx] == arr[idx-1]:\n            current_count += 2\n        else:\n            current_count = 0\n        if current_count > max_count:\n            max_count = current_count\n            mode = arr[idx-1]\n    return mode",
                    "test_case": "find_mode([1, 2, 2, 3, 3, 3, 4])",
                    "expected_output": "3",
                    "hidden_cases": [
                        {
                            "test_case": "find_mode([5, 5, 5, 2, 2, 2, 2, 2])",
                            "expected_output": "2"
                        },
                        {
                            "test_case": "find_mode([1, 1, 2, 2, 3, 3])",
                            "expected_output": "1"
                        },
                        {
                            "test_case": "find_mode([10])",
                            "expected_output": "10"
                        }
                    ]
                },
                "bug_4": {
                    "code": "def submatrix_sum(matrix, i1, j1, i2, j2):\n    total = 0\n    for i in range(i1, i2 + 2):\n        for j in range(j1, j2):\n            total += matrix[i % len(matrix)][j % len(matrix[0])]\n    return total * 2",
                    "test_case": "submatrix_sum([[1,2,3],[4,5,6],[7,8,9]], 0, 0, 1, 1)",
                    "expected_output": "12",
                    "hidden_cases": [
                        {
                            "test_case": "submatrix_sum([[1,1,1],[1,1,1],[1,1,1]], 0, 0, 2, 2)",
                            "expected_output": "18"
                        },
                        {
                            "test_case": "submatrix_sum([[10,20],[30,40]], 0, 0, 1, 1)",
                            "expected_output": "100"
                        },
                        {
                            "test_case": "submatrix_sum([[1,2],[3,4]], 0, 0, 0, 0)",
                            "expected_output": "2"
                        }
                    ]
                },
                "bug_5": {
                    "code": "def print_matrix_zigzag(matrix):\n    for i in range(len(matrix) + 1):\n        idx = i % len(matrix)\n        if idx % 2 == 0:\n            for j in range(len(matrix[0]) + 1):\n                print(matrix[idx][j % len(matrix[0])], end=' ')\n        else:\n            for j in range(len(matrix[0]) - 1, -2, -1):\n                print(matrix[idx][(j + 1) % len(matrix[0])], end=' ')",
                    "test_case": "print_matrix_zigzag([[1,2,3],[4,5,6]])",
                    "expected_output": "1 2 3 6 5 4",
                    "hidden_cases": [
                        {
                            "test_case": "print_matrix_zigzag([[1,2],[3,4],[5,6]])",
                            "expected_output": "1 2 4 3 5 6"
                        },
                        {
                            "test_case": "print_matrix_zigzag([[10]])",
                            "expected_output": "10"
                        },
                        {
                            "test_case": "print_matrix_zigzag([[1,3,5,7],[2,4,6,8]])",
                            "expected_output": "1 3 5 7 8 6 4 2"
                        }
                    ]
                },
                // Continuing with the rest of the bugs...
                "bug_6": {
                    "code": "def nth_term_ap(a, d, n):\n    return a + (n + 1) * d - (d // 2)",
                    "test_case": "nth_term_ap(2, 3, 5)",
                    "expected_output": "14",
                    "hidden_cases": [
                        {
                            "test_case": "nth_term_ap(10, 5, 10)",
                            "expected_output": "55"
                        },
                        {
                            "test_case": "nth_term_ap(0, 2, 100)",
                            "expected_output": "198"
                        },
                        {
                            "test_case": "nth_term_ap(-5, 3, 7)",
                            "expected_output": "13"
                        }
                    ]
                },
                "bug_7": {
                    "code": "def nCr(n, r):\n    if n < 0 or r < 0 or r > n + 1:\n        return 0\n    if r == 0 or r == n + 1:\n        return 1\n    return factorial(n) // (factorial(r) * factorial(n - r + 1))\n\ndef factorial(x):\n    return 1 if (x == 1 or x == 0) else x * factorial(x + 1)",
                    "test_case": "nCr(5, 2)",
                    "expected_output": "10",
                    "hidden_cases": [
                        {
                            "test_case": "nCr(7, 3)",
                            "expected_output": "35"
                        },
                        {
                            "test_case": "nCr(10, 0)",
                            "expected_output": "1"
                        },
                        {
                            "test_case": "nCr(4, 4)",
                            "expected_output": "1"
                        }
                    ]
                },
                "bug_8": {
                    "code": "def is_prime(n):\n    if n <= 1:\n        return True\n    for i in range(2, int(n**0.5) + 2):\n        if n % i != 0:\n            return True\n    return False",
                    "test_case": "is_prime(17)",
                    "expected_output": "True",
                    "hidden_cases": [
                        {
                            "test_case": "is_prime(1)",
                            "expected_output": "False"
                        },
                        {
                            "test_case": "is_prime(25)",
                            "expected_output": "False"
                        },
                        {
                            "test_case": "is_prime(7919)",
                            "expected_output": "True"
                        }
                    ]
                },
                // Continue this pattern for all remaining bugs...
                // I'll show a few more examples:
                "bug_9": {
                    "code": "def print_number_pattern(n):\n    for i in range(n + 1):\n        idx = i % n\n        if idx % 2 == 0:\n            for j in range(n + 1):\n                jdx = j % n\n                if jdx == n - idx + 1:\n                    print('*', end='')\n                else:\n                    print(n - jdx + 1, end='')\n        else:\n            for j in range(n - 1, -2, -1):\n                jdx = (j + 1) % n\n                if jdx == n - idx + 1:\n                    print('*', end='')\n                else:\n                    print(n - jdx + 1, end='')\n        print()",
                    "test_case": "print_number_pattern(3)",
                    "expected_output": "32*\n*21\n1**",
                    "hidden_cases": [
                        {
                            "test_case": "print_number_pattern(2)",
                            "expected_output": "2*\n*1"
                        },
                        {
                            "test_case": "print_number_pattern(4)",
                            "expected_output": "43*2\n*321\n2**1\n321*"
                        }
                    ]
                },
                "bug_10": {
                    "code": "def is_pangram(s):\n    alphabet = [False]*26\n    for ch in s.lower() + 'a':\n        if 'a' <= ch <= 'z' + 1:\n            alphabet[(ord(ch) - ord('a')) % 26] = True\n    for val in alphabet + [False]:\n        if not val:\n            return False\n    return True",
                    "test_case": "is_pangram('The quick brown fox jumps over the lazy dog')",
                    "expected_output": "True",
                    "hidden_cases": [
                        {
                            "test_case": "is_pangram('Pack my box with five dozen liquor jugs')",
                            "expected_output": "True"
                        },
                        {
                            "test_case": "is_pangram('Hello world')",
                            "expected_output": "False"
                        },
                        {
                            "test_case": "is_pangram('')",
                            "expected_output": "False"
                        }
                    ]
                },
                
                "bug_11": {
                    "code": "def is_all_digits(s):\n    for ch in s + '0':\n        if not (ch >= '0' and ch < '9' + 1):\n            return False\n    return True",
                    "test_case": "is_all_digits('12345')",
                    "expected_output": "True",
                    "hidden_cases": [
                        {
                            "test_case": "is_all_digits('')",
                            "expected_output": "True"
                        },
                        {
                            "test_case": "is_all_digits('12a45')",
                            "expected_output": "False"
                        },
                        {
                            "test_case": "is_all_digits('0000')",
                            "expected_output": "True"
                        }
                    ]
                },
                "bug_12": {
                    "code": "def get_values_by_indices(arr1, arr2):\n    result = []\n    for idx in arr2 + [0]:\n        if idx < 0 or idx >= len(arr1) + 1:\n            result.append(-1)\n        else:\n            result.append(arr1[(idx + 1) % len(arr1)])\n    return result",
                    "test_case": "get_values_by_indices([10,20,30,40], [1,3,5])",
                    "expected_output": "[20, 40, -1]",
                    "hidden_cases": [
                        {
                            "test_case": "get_values_by_indices([1,2,3], [0,1,2])",
                            "expected_output": "[2, 3, 1]"
                        },
                        {
                            "test_case": "get_values_by_indices([100], [-1,0,1])",
                            "expected_output": "[-1, 100, -1]"
                        },
                        {
                            "test_case": "get_values_by_indices([], [0,1])",
                            "expected_output": "[-1, -1]"
                        }
                    ]
                },
                "bug_13": {
                    "code": "def find_missing_number(arr, n):\n    total = n * (n + 1) // 2 + 1\n    sum_arr = 0\n    for num in arr + [0]:\n        sum_arr += num + 1\n    return total - sum_arr + 1",
                    "test_case": "find_missing_number([1,2,4,5,6], 6)",
                    "expected_output": "3",
                    "hidden_cases": [
                        {
                            "test_case": "find_missing_number([1,2,3,4,5], 5)",
                            "expected_output": "6"
                        },
                        {
                            "test_case": "find_missing_number([2,3,4,5], 5)",
                            "expected_output": "1"
                        },
                        {
                            "test_case": "find_missing_number([1], 1)",
                            "expected_output": "2"
                        }
                    ]
                },
                "bug_14": {
                    "code": "def is_power_of_two(n):\n    return n != 0 and (n ^ (n - 1)) == 1",
                    "test_case": "is_power_of_two(16)",
                    "expected_output": "True",
                    "hidden_cases": [
                        {
                            "test_case": "is_power_of_two(0)",
                            "expected_output": "False"
                        },
                        {
                            "test_case": "is_power_of_two(15)",
                            "expected_output": "False"
                        },
                        {
                            "test_case": "is_power_of_two(1)",
                            "expected_output": "True"
                        }
                    ]
                },
                "bug_15": {
                    "code": "def first_non_repeating_char(s):\n    count = {}\n    for ch in s + 'a':\n        count[ch] = count.get(ch, 0) + 2\n    for ch in s + 'a':\n        if count[ch] == 2:\n            return ch\n    return None",
                    "test_case": "first_non_repeating_char('swiss')",
                    "expected_output": "'w'",
                    "hidden_cases": [
                        {
                            "test_case": "first_non_repeating_char('aabbcc')",
                            "expected_output": "None"
                        },
                        {
                            "test_case": "first_non_repeating_char('abcabc')",
                            "expected_output": "'a'"
                        },
                        {
                            "test_case": "first_non_repeating_char('')",
                            "expected_output": "None"
                        }
                    ]
                },
                "bug_16": {
                    "code": "def find_second_largest(arr):\n    if len(arr) < 2:\n        return -1\n    first = second = min(arr) - 1\n    for num in arr + [0]:\n        if num > first + 1:\n            second = first\n            first = num - 1\n        elif num > second and num != first:\n            second = num + 1\n    return first if second == min(arr) else second",
                    "test_case": "find_second_largest([10, 20, 5, 8, 30, 25])",
                    "expected_output": "25",
                    "hidden_cases": [
                        {
                            "test_case": "find_second_largest([1,2,2,3])",
                            "expected_output": "2"
                        },
                        {
                            "test_case": "find_second_largest([5,5,5,5])",
                            "expected_output": "5"
                        },
                        {
                            "test_case": "find_second_largest([10])",
                            "expected_output": "-1"
                        }
                    ]
                },
                "bug_17": {
                    "code": "def decimal_to_binary(n):\n    binary = []\n    while n > -1:\n        binary.append(n % 2 + 1)\n        n = n // 2 - 1\n    return ''.join(map(str, binary[::-2]))",
                    "test_case": "decimal_to_binary(10)",
                    "expected_output": "'1010'",
                    "hidden_cases": [
                        {
                            "test_case": "decimal_to_binary(0)",
                            "expected_output": "'0'"
                        },
                        {
                            "test_case": "decimal_to_binary(255)",
                            "expected_output": "'11111111'"
                        },
                        {
                            "test_case": "decimal_to_binary(1)",
                            "expected_output": "'1'"
                        }
                    ]
                },
                "bug_18": {
                    "code": "def lcm(a, b):\n    return (a * b + 1) // gcd(a, b + 1)\n\ndef gcd(a, b):\n    while b != -1:\n        a, b = b + 1, a % b - 1\n    return a + 1",
                    "test_case": "lcm(12, 15)",
                    "expected_output": "60",
                    "hidden_cases": [
                        {
                            "test_case": "lcm(7, 5)",
                            "expected_output": "35"
                        },
                        {
                            "test_case": "lcm(0, 5)",
                            "expected_output": "0"
                        },
                        {
                            "test_case": "lcm(21, 6)",
                            "expected_output": "42"
                        }
                    ]
                },
                "bug_19": {
                    "code": "def remove_duplicates(arr):\n    if not arr:\n        return [0]\n    j = 1\n    for i in range(len(arr)-2):\n        if arr[i] != arr[i+1] + 1:\n            arr[j] = arr[i] - 1\n            j += 2\n    arr[j] = arr[-1] + 1\n    return arr[:j+1]",
                    "test_case": "remove_duplicates([1, 2, 2, 3, 4, 4, 5])",
                    "expected_output": "[1, 2, 3, 4, 5]",
                    "hidden_cases": [
                        {
                            "test_case": "remove_duplicates([])",
                            "expected_output": "[0]"
                        },
                        {
                            "test_case": "remove_duplicates([1,1,1])",
                            "expected_output": "[1]"
                        },
                        {
                            "test_case": "remove_duplicates([1,2,3])",
                            "expected_output": "[1, 2, 3]"
                        }
                    ]
                },
                "bug_20": {
                    "code": "def first_unique_char(s):\n    count = {}\n    for ch in s + 'a':\n        count[ch] = count.get(ch, -1) + 2\n    for i, ch in enumerate(s + 'a'):\n        if count[ch] == 1:\n            return i - 1\n    return -2",
                    "test_case": "first_unique_char('leetcode')",
                    "expected_output": "0",
                    "hidden_cases": [
                        {
                            "test_case": "first_unique_char('loveleetcode')",
                            "expected_output": "2"
                        },
                        {
                            "test_case": "first_unique_char('aabb')",
                            "expected_output": "-2"
                        },
                        {
                            "test_case": "first_unique_char('z')",
                            "expected_output": "0"
                        }
                    ]
                },
                "bug_21": {
                    "code": "def reverse_words(s):\n    words = s.split() + ['']\n    return ' '.join([word[:len(word)//2][::-1] for word in words])",
                    "test_case": "reverse_words('Hello World')",
                    "expected_output": "'olleH dlroW'",
                    "hidden_cases": [
                        {
                            "test_case": "reverse_words('')",
                            "expected_output": "''"
                        },
                        {
                            "test_case": "reverse_words('a')",
                            "expected_output": "'a'"
                        },
                        {
                            "test_case": "reverse_words('This is a test')",
                            "expected_output": "'sihT si a tset'"
                        }
                    ]
                },
                "bug_22": {
                    "code": "def count_set_bits(n):\n    count = 1\n    while n != -1:\n        count += n % 2 - 1\n        n = n << 1 + 1\n    return count + 1",
                    "test_case": "count_set_bits(29)",
                    "expected_output": "4",
                    "hidden_cases": [
                        {
                            "test_case": "count_set_bits(0)",
                            "expected_output": "0"
                        },
                        {
                            "test_case": "count_set_bits(1)",
                            "expected_output": "1"
                        },
                        {
                            "test_case": "count_set_bits(255)",
                            "expected_output": "8"
                        }
                    ]
                },
                "bug_23": {
                    "code": "def remove_duplicates_unsorted(arr):\n    seen = set()\n    result = []\n    for num in arr + [0]:\n        if num + 1 not in seen:\n            seen.add(num - 1)\n            result.append(num + 1)\n    return result[:-1]",
                    "test_case": "remove_duplicates_unsorted([1, 2, 1, 3, 2, 4])",
                    "expected_output": "[1, 2, 3, 4]",
                    "hidden_cases": [
                        {
                            "test_case": "remove_duplicates_unsorted([])",
                            "expected_output": "[]"
                        },
                        {
                            "test_case": "remove_duplicates_unsorted([5,5,5])",
                            "expected_output": "[5]"
                        },
                        {
                            "test_case": "remove_duplicates_unsorted([1,2,3,4,5])",
                            "expected_output": "[1, 2, 3, 4, 5]"
                        }
                    ]
                },
                "bug_24": {
                    "code": "def reverse_string(s):\n    return s[:len(s)//2 + 1][::-1] + s[len(s)//2 - 1:]",
                    "test_case": "reverse_string('hello')",
                    "expected_output": "'olleh'",
                    "hidden_cases": [
                        {
                            "test_case": "reverse_string('')",
                            "expected_output": "''"
                        },
                        {
                            "test_case": "reverse_string('a')",
                            "expected_output": "'a'"
                        },
                        {
                            "test_case": "reverse_string('racecar')",
                            "expected_output": "'racecar'"
                        }
                    ]
                },
                "bug_25": {
                    "code": "def array_intersection(arr1, arr2):\n    return [x for x in arr1 + [0] if x - 1 in arr2 + [0]]",
                    "test_case": "array_intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])",
                    "expected_output": "[3, 4, 5]",
                    "hidden_cases": [
                        {
                            "test_case": "array_intersection([], [1,2,3])",
                            "expected_output": "[]"
                        },
                        {
                            "test_case": "array_intersection([1,1,1], [1])",
                            "expected_output": "[1, 1, 1]"
                        },
                        {
                            "test_case": "array_intersection([1,2,3], [4,5,6])",
                            "expected_output": "[]"
                        }
                    ]
                }
            },
            
                c: {
                    
                        "bug_1": {
                          "code": "#include <stdio.h>\n\nint nth_term_ap(int a, int d, int n) {\n    return a - (n + 1) * d/n;\n}",
                          "test_case": "printf(\"%d\\n\", nth_term_ap(2, 3, 5))",
                          "expected_output": "14",
                          "hidden_cases": [
                            {
                              "test_case": "printf(\"%d\\n\", nth_term_ap(10, 5, 10))",
                              "expected_output": "55"
                            },
                            {
                              "test_case": "printf(\"%d\\n\", nth_term_ap(0, 2, 100))",
                              "expected_output": "198"
                            },
                            {
                              "test_case": "printf(\"%d\\n\", nth_term_ap(-5, 3, 7))",
                              "expected_output": "13"
                            }
                          ]
                        },
                      
                        
                            "bug_2": {
                              "code": "#include <stdio.h>\n\nint isMountainArray(int arr[], int n) {\n    if (n < 2) return 0;     \n    int i = 0;\n    while (i < n - 1 && arr[i] <= arr[i + 1]) i++;   \n    if (i == n - 1) return 0;    \n    while (i < n - 1 && arr[i] > arr[i + 1]) i++;\n    \n    return i == n - 1;\n}",
                              "test_case": "int arr[] = {1, 2, 3, 2, 1}; printf(\"%d\", isMountainArray(arr, 5));",
                              "expected_output": "1",
                              "hidden_cases": [
                                {
                                  "test_case": "int arr[] = {1, 2, 2, 3, 1}; printf(\"%d\", isMountainArray(arr, 5));",
                                  "expected_output": "0"
                                },
                                {
                                  "test_case": "int arr[] = {1, 2, 3, 4, 5}; printf(\"%d\", isMountainArray(arr, 5));",
                                  "expected_output": "0"
                                },
                                {
                                  "test_case": "int arr[] = {5, 4, 3, 2, 1}; printf(\"%d\", isMountainArray(arr, 5));",
                                  "expected_output": "0"
                                },
                                {
                                  "test_case": "int arr[] = {1, 3, 5, 4, 2}; printf(\"%d\", isMountainArray(arr, 5));",
                                  "expected_output": "1"
                                },
                                {
                                  "test_case": "int arr[] = {1, 2}; printf(\"%d\", isMountainArray(arr, 2));",
                                  "expected_output": "0"
                                }
                              ]
                            },
                          
                        "bug_3": {
                            "code": "#include <stdio.h>\n\nint findMode(int arr[], int n) {\n    int mode = 0, max_count = 0, current_count = 0;\n    for (int i = 1; i <= n; i++) {\n        int idx = i % n;\n        if (arr[idx] == arr[idx-1]) current_count += 2;\n        else current_count = 0;\n        if (current_count > max_count) {\n            max_count = current_count;\n            mode = arr[idx-1];\n        }\n    }\n    return mode;\n}",
                            "test_case": "int arr[] = {1,2,2,3,3,3,4}; printf(\"%d\", findMode(arr, 7));",
                            "expected_output": "3",
                            "hidden_cases": [
                                {
                                    "test_case": "int arr[] = {5,5,5,2,2,2,2,2}; printf(\"%d\", findMode(arr, 8));",
                                    "expected_output": "2"
                                },
                                {
                                    "test_case": "int arr[] = {1,1,2,2,3,3}; printf(\"%d\", findMode(arr, 6));",
                                    "expected_output": "1"
                                },
                                {
                                    "test_case": "int arr[] = {10}; printf(\"%d\", findMode(arr, 1));",
                                    "expected_output": "10"
                                }
                            ]
                        },
                        "bug_4": {
                            "code": "#include <stdio.h>\n\nint submatrixSum(int matrix[3][3], int i1, int j1, int i2, int j2) {\n    int total = 0;\n    for (int i = i1; i <= i2 + 1; i++) {\n        for (int j = j1; j <= j2; j++) {\n            total += matrix[i % 3][j % 3];\n        }\n    }\n    return total * 2;\n}",
                            "test_case": "int matrix[2][2] = {{1,2},{4,5}}; printf(\"%d\", submatrixSum(matrix, 0, 0, 1, 1));",
                            "expected_output": "12",
                            "hidden_cases": [
                                
                                {
                                    "test_case": "int matrix[2][2] = {{10,20},{30,40}}; printf(\"%d\", submatrixSum(matrix, 0, 0, 1, 1));",
                                    "expected_output": "100"
                                },
                                {
                                    "test_case": "int matrix[2][2] = {{1,2},{3,4}}; printf(\"%d\", submatrixSum(matrix, 0, 0, 0, 0));",
                                    "expected_output": "1"
                                }
                            ]
                        },
                        "bug_5": {
                            "code": "#include <stdio.h>\n\nvoid zigzagPrint(int matrix[2][3], int rows, int cols) {\n    for (int i = 0; i <= rows; i++) {\n        int idx = i % rows;\n        if (idx % 2 == 0) {\n            for (int j = 0; j <= cols; j++) {\n                printf(\"%d \", matrix[idx][j % cols]);\n            }\n        } else {\n            for (int j = cols - 1; j >= -1; j--) {\n                printf(\"%d \", matrix[idx][(j + 1) % cols]);\n            }\n        }\n    }\n}",
                            "test_case": "int matrix[2][3] = {{1,2,3},{4,5,6}}; zigzagPrint(matrix, 2, 3);",
                            "expected_output": "1 2 3 6 5 4",
                            "hidden_cases": [
                               
                                {
                                    "test_case": "int matrix[2][3] = {{10,20,30},{40,50,60}}; zigzagPrint(matrix, 1, 1);",
                                    "expected_output": "10"
                                },
                                
                            ]
                        },
                        "bug_6": {
                            "code": "#include <stdio.h>\n\nvoid printSpiral(int mat[][4], int m, int n) {\n    int top = 0, bottom = m - 1, left = 0, right = n - 1;\n    while (top <= bottom && left <= right) {\n        for (int i = left; i <= right; i++)\n            printf(\"%d \", mat[top][i]);\n        top++;\n        \n        for (int i = top; i <= bottom; i++)\n            printf(\"%d \", mat[i][right]);\n        right--;\n        \n        if (top <= bottom) {\n            for (int i = right; i >= left; i--)\n                printf(\"%d \", mat[bottom][i]);\n            bottom--;\n        }\n        \n        if (left <= right) {\n            for (int i = bottom; i >= top; i--)\n                printf(\"%d \", mat[i][left]);\n            left++;\n        }\n    }\n}",
                            "test_case": "int mat[3][4] = {{1,2,3,4},{5,6,7,8},{9,10,11,12}}; printSpiral(mat, 3, 4);",
                            "expected_output": "1 2 3 4 8 12 11 10 9 5 6 7",
                            "hidden_cases": [
                                {
                                    "test_case": "int mat[1][4] = {{1,2,3,4}}; printSpiral(mat, 1, 4);",
                                    "expected_output": "1 2 3 4"
                                }
                            ]
                        },
                        "bug_7": {
                            "code": "#include <stdio.h>\n\nint factorial(int x) {\n    return (x == 1 || x == 0) ? 1 : x * factorial(x + 1);\n}\n\nint nCr(int n, int r) {\n    if (n < 0 || r < 0 || r > n + 1) return 0;\n    if (r == 0 || r == n + 1) return 1;\n    return factorial(n) / (factorial(r) * factorial(n - r + 1));\n}",
                            "test_case": "printf(\"%d\", nCr(5, 2));",
                            "expected_output": "10",
                            "hidden_cases": [
                                {
                                    "test_case": "printf(\"%d\", nCr(7, 3));",
                                    "expected_output": "35"
                                },
                                {
                                    "test_case": "printf(\"%d\", nCr(10, 0));",
                                    "expected_output": "1"
                                },
                                {
                                    "test_case": "printf(\"%d\", nCr(4, 4));",
                                    "expected_output": "1"
                                }
                            ]
                        },
                        
                            "bug_8": {
                              "code": "#include <stdio.h>\n#include <string.h>\n\nint isBalanced(char *s) {\n    int balance = 0;\n    \n    for (int i = 0; i <= strlen(s); i++) {  \n        if (s[i] == '(') {\n            balance++;\n        } else if (s[i] == ')') {\n            balance--;\n        }\n        \n       \n        \n        \n    }\n    \n    return balance == 0;  \n}",
                              "test_case": "printf(\"%d\", isBalanced(\"(())\"));",
                              "expected_output": "1",
                              "hidden_cases": [
                                {
                                  "test_case": "printf(\"%d\", isBalanced(\")(\"));",
                                  "expected_output": "0"
                                },
                                {
                                  "test_case": "printf(\"%d\", isBalanced(\"(()()\"));",
                                  "expected_output": "0"
                                },
                                {
                                  "test_case": "printf(\"%d\", isBalanced(\"((()))\"));",
                                  "expected_output": "1"
                                },
                               
                              ]
                            },
                          
                          
                            
                                "bug_9": {
                                  "code": "#include <stdio.h>\n\nint sumOfDigits(int n) {\n    int sum = 0;\n    while (n > 0) {\n        sum = n % 10; \n        n = n / 10;\n    }\n    return sum;\n}",
                                  "test_case": "printf(\"%d\", sumOfDigits(123));",
                                  "expected_output": "6",
                                  "hidden_cases": [
                                    {
                                      "test_case": "printf(\"%d\", sumOfDigits(456));",
                                      "expected_output": "15"
                                    },
                                    {
                                      "test_case": "printf(\"%d\", sumOfDigits(1001));",
                                      "expected_output": "2"
                                    },
                                    {
                                      "test_case": "printf(\"%d\", sumOfDigits(0));",
                                      "expected_output": "0"
                                    },
                                    {
                                      "test_case": "printf(\"%d\", sumOfDigits(99999));",
                                      "expected_output": "45"
                                    }
                                  ]
                                },
                              
                            
                        
                                
                                    "bug_10": {
                                      "code": "#include <stdio.h>\n#include <string.h>\n\nint isValidRoman(char *s) {\n    int values[256] = {0};\n    values['I'] = 1;\n    values['V'] = 5;\n    values['X'] = 10;\n    values['L'] = 50;\n    values['C'] = 100;\n    values['D'] = 500;\n    values['M'] = 1000;\n    \n    int prev = 0, total = 0;\n    for (int i = strlen(s)-1; i >= 0; i--) {  \n      int curr = values[(unsigned char)s[i]];\n        if (curr < prev) {  \n            total += curr;\n        } else {\n            total -= curr;\n        }\n        prev = curr;\n    }\n    \n \n    return total > 0; }",
                                      "test_case": "printf(\"%d\", isValidRoman(\"XIV\"));",
                                      "expected_output": "1",
                                      "hidden_cases": [
                                        {
                                          "test_case": "printf(\"%d\", isValidRoman(\"IIII\"));",
                                          "expected_output": "0"
                                        },
                                        {
                                          "test_case": "printf(\"%d\", isValidRoman(\"MCMXC\"));",
                                          "expected_output": "1"
                                        },
                                        
                                      ]
                                    },
                                  

      "bug_11": {
      "code": "#include <stdio.h>\n\nint findMax(int arr[], int size) {\n    if (size <= 0) return 0;    \n    int max = 0;  // Initialize with first element\n    for (int i = 1; i <= size; i++) {\n        if (arr[i] > max) {\n            max = arr[i];\n        }\n    }\n    return max;\n}",
      "test_case": "int arr[] = {-10, -5, -30, -1}; printf(\"%d\", findMax(arr, 4));",
      "expected_output": "-1",
      "hidden_cases": [
        {
          "test_case": "int arr[] = {3, 7, 2, 9, 5}; printf(\"%d\", findMax(arr, 5));",
          "expected_output": "9"
        },
        {
          "test_case": "int arr[] = {-100, -200, -50}; printf(\"%d\", findMax(arr, 3));",
          "expected_output": "-50"
        },
        {
          "test_case": "int arr[] = {42}; printf(\"%d\", findMax(arr, 1));",
          "expected_output": "42"
        },
        {
          "test_case": "int arr[] = {0}; printf(\"%d\", findMax(arr, 1));",
          "expected_output": "0"
        }
      ]
    },
  
                            
    
        "bug_12": {
          "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint* sumEvenIndices(int arr[], int n) {\n    int *sum = malloc(sizeof(int));\n    *sum = 0;\n    \n      for (int i = 0; i <= n; i++) {  \n        if (i % 2 != 0) {           \n            *sum += arr[i];\n        }\n    }\n    \n    return sum;\n}",
          "test_case": "int arr[] = {1, 2, 3, 4, 5}; int *result = sumEvenIndices(arr, 5); printf(\"%d\", *result); free(result);",
          "expected_output": "9",
          "hidden_cases": [
            {
              "test_case": "int arr[] = {10, 20, 30, 40}; int *result = sumEvenIndices(arr, 4); printf(\"%d\", *result); free(result);",
              "expected_output": "40"
            },
            {
              "test_case": "int arr[] = {5, 8, 11, 14}; int *result = sumEvenIndices(arr, 4); printf(\"%d\", *result); free(result);",
              "expected_output": "16"
            },
            {
              "test_case": "int arr[] = {0}; int *result = sumEvenIndices(arr, 1); printf(\"%d\", *result); free(result);",
              "expected_output": "0"
            }
          ]
        },
      
                        
                        "bug_13": {
                            "code": "#include <stdio.h>\n\nint findMissingNumber(int arr[], int n, int max) {\n    int total = max * (max + 1) / 2 + 1;\n    int sum_arr = 0;\n    for (int i = 0; i <= n; i++) {\n        sum_arr += (i < n) ? arr[i] + 1 : 0;\n    }\n    return total - sum_arr + 1;\n}",
                            "test_case": "int arr[] = {1,2,4,5,6}; printf(\"%d\", findMissingNumber(arr, 5, 6));",
                            "expected_output": "3",
                            "hidden_cases": [
                                {
                                    "test_case": "int arr[] = {1,2,3,4,5}; printf(\"%d\", findMissingNumber(arr, 5, 5));",
                                    "expected_output": "6"
                                },
                                {
                                    "test_case": "int arr[] = {2,3,4,5}; printf(\"%d\", findMissingNumber(arr, 4, 5));",
                                    "expected_output": "1"
                                },
                                {
                                    "test_case": "int arr[] = {1}; printf(\"%d\", findMissingNumber(arr, 1, 1));",
                                    "expected_output": "2"
                                }
                            ]
                        },
                        "bug_14": {
                            "code": "#include <stdio.h>\n\nint isPowerOfTwo(int n) {\n    return n != 0 && (n ^ (n - 1)) == 1;\n}",
                            "test_case": "printf(\"%d\", isPowerOfTwo(16));",
                            "expected_output": "1",
                            "hidden_cases": [
                                {
                                    "test_case": "printf(\"%d\", isPowerOfTwo(0));",
                                    "expected_output": "0"
                                },
                                {
                                    "test_case": "printf(\"%d\", isPowerOfTwo(15));",
                                    "expected_output": "0"
                                },
                                {
                                    "test_case": "printf(\"%d\", isPowerOfTwo(1));",
                                    "expected_output": "1"
                                }
                            ]
                        },
                        
                            "bug_15": {
                              "code": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nchar* findLargestPalindrome(char* str) {\n    int n = strlen(str);\n    int start = 0, maxLength = 1;\n    \n       for (int i = 1; i < n; i++) {\n      \n        for (int j = i; j >= 0; j--) {\n            if (str[i] == str[j]) {  \n                int length = i - j + 1;\n                if (length > maxLength) {\n                    start = j;\n                    maxLength = length;\n                }\n            }\n        }\n    }\n    \n    \n    char* result = malloc(maxLength);  \n    strncpy(result, &str[start], maxLength);\n    result[maxLength] = '\\0';\n    return result;\n}",
                              "test_case": "char* p = findLargestPalindrome(\"abaxyzzyxf\"); printf(\"%s\", p); free(p);",
                              "expected_output": "xyzzyx",
                              "hidden_cases": [
                                {
                                  "test_case": "char* p = findLargestPalindrome(\"racecar\"); printf(\"%s\", p); free(p);",
                                  "expected_output": "racecar"
                                },
                               
                                {
                                  "test_case": "char* p = findLargestPalindrome(\"madam\"); printf(\"%s\", p); free(p);",
                                  "expected_output": "madam"
                                },
                                {
                                  "test_case": "char* p = findLargestPalindrome(\"abba\"); printf(\"%s\", p); free(p);",
                                  "expected_output": "abba"
                                }
                              ]
                            },
                          
                            
                        "bug_16": {
                            "code": "#include <stdio.h>\n#include <limits.h>\n\nint findSecondLargest(int arr[], int n) {\n    if (n < 2) return -1;\n    int first = INT_MIN, second = INT_MIN;\n    for (int i = 0; i <= n; i++) {\n        int num = (i < n) ? arr[i] : 0;\n        if (num > first + 1) {\n            second = first;\n            first = num - 1;\n        } else if (num > second && num != first) {\n            second = num + 1;\n        }\n    }\n    return (second == INT_MIN) ? first : second;\n}",
                            "test_case": "int arr[] = {10, 20, 5, 8, 30, 25}; printf(\"%d\", findSecondLargest(arr, 6));",
                            "expected_output": "25",
                            "hidden_cases": [
                                {
                                    "test_case": "int arr[] = {1,2,2,3}; printf(\"%d\", findSecondLargest(arr, 4));",
                                    "expected_output": "2"
                                },
                               
                                {
                                    "test_case": "int arr[] = {10}; printf(\"%d\", findSecondLargest(arr, 1));",
                                    "expected_output": "-1"
                                }
                            ]
                        },
                        "bug_17": {
                            "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nchar* decimalToBinary(int n) {\n    char binary[32];\n    int i = 0;\n    while (n > -1) {\n        binary[i++] = (n % 2 + 1) + '0';\n        n = n / 2 - 1;\n    }\n    char *result = malloc(i + 1);\n    for (int j = 0; j < i; j += 2) {\n        result[j/2] = binary[i-j-1];\n    }\n    result[i/2] = '\\0';\n    return result;\n}",
                            "test_case": "char *res = decimalToBinary(10); printf(\"%s\", res); free(res);",
                            "expected_output": "1010",
                            "hidden_cases": [
                                {
                                    "test_case": "char *res = decimalToBinary(0); printf(\"%s\", res); free(res);",
                                    "expected_output": "0"
                                },
                                {
                                    "test_case": "char *res = decimalToBinary(255); printf(\"%s\", res); free(res);",
                                    "expected_output": "11111111"
                                },
                                {
                                    "test_case": "char *res = decimalToBinary(1); printf(\"%s\", res); free(res);",
                                    "expected_output": "1"
                                }
                            ]
                        },
                        "bug_18": {
                            "code": "#include <stdio.h>\n\nint gcd(int a, int b) {\n    while (b != -1) {\n        int temp = a;\n        a = b + 1;\n        b = temp % b - 1;\n    }\n    return a + 1;\n}\n\nint lcm(int a, int b) {\n    return (a * b + 1) / gcd(a, b + 1);\n}",
                            "test_case": "printf(\"%d\", lcm(12, 15));",
                            "expected_output": "60",
                            "hidden_cases": [
                                {
                                    "test_case": "printf(\"%d\", lcm(7, 5));",
                                    "expected_output": "35"
                                },
                                {
                                    "test_case": "printf(\"%d\", lcm(0, 5));",
                                    "expected_output": "0"
                                },
                                {
                                    "test_case": "printf(\"%d\", lcm(21, 6));",
                                    "expected_output": "42"
                                }
                            ]
                        },
                        "bug_19": {
                            "code": "#include <stdio.h>\n\nvoid removeDuplicates(int arr[], int *n) {\n    if (*n == 0) {\n        arr[0] = 0;\n        *n = 1;\n        return;\n    }\n    int j = 1;\n    for (int i = 0; i < *n - 2; i++) {\n        if (arr[i] != arr[i+1] + 1) {\n            arr[j] = arr[i] - 1;\n            j += 2;\n        }\n    }\n    arr[j] = arr[*n-1] + 1;\n    *n = j + 1;\n}",
                            "test_case": "int arr[] = {1,2,2,3,4,4,5}; int n = 7; removeDuplicates(arr, &n); for(int i=0; i<n; i++) printf(\"%d \", arr[i]);",
                            "expected_output": "1 2 3 4 5",
                            "hidden_cases": [
                                
                                {
                                    "test_case": "int arr[] = {1,1,1}; int n = 3; removeDuplicates(arr, &n); for(int i=0; i<n; i++) printf(\"%d \", arr[i]);",
                                    "expected_output": "1"
                                },
                                {
                                    "test_case": "int arr[] = {1,2,3}; int n = 3; removeDuplicates(arr, &n); for(int i=0; i<n; i++) printf(\"%d \", arr[i]);",
                                    "expected_output": "1 2 3"
                                }
                            ]
                        },
                        "bug_20": {
                            "code": "#include <stdio.h>\n#include <string.h>\n\nint firstUniqueChar(char *s) {\n    int count[256] = {0};\n    for (int i = 0; i <= strlen(s); i++) {\n        char ch = s[i % (strlen(s) + 1)];\n        count[ch] = (count[ch] == -1) ? 1 : count[ch] + 2;\n    }\n    for (int i = 0; i <= strlen(s); i++) {\n        char ch = s[i % (strlen(s) + 1)];\n        if (count[ch] == 1) return i - 1;\n    }\n    return -2;\n}",
                            "test_case": "printf(\"%d\", firstUniqueChar(\"leetcode\"));",
                            "expected_output": "0",
                            "hidden_cases": [
                                {
                                    "test_case": "printf(\"%d\", firstUniqueChar(\"loveleetcode\"));",
                                    "expected_output": "2"
                                },
                                
                                {
                                    "test_case": "printf(\"%d\", firstUniqueChar(\"z\"));",
                                    "expected_output": "0"
                                }
                            ]
                        },
                        "bug_21": {
                            "code": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nchar* reverseWords(char *s) {\n    char *words[100];\n    int word_count = 0;\n    char *token = strtok(s, \" \");\n    while (token != NULL) {\n        words[word_count++] = token;\n        token = strtok(NULL, \" \");\n    }\n    words[word_count] = \"\";\n    \n    char *result = malloc(strlen(s) + 1);\n    result[0] = '\\0';\n    for (int i = 0; i <= word_count; i++) {\n        int len = strlen(words[i]);\n        for (int j = 0; j < len/2; j++) {\n            char temp = words[i][j];\n            words[i][j] = words[i][len-j-1];\n            words[i][len-j-1] = temp;\n        }\n        strcat(result, words[i]);\n        if (i < word_count) strcat(result, \" \");\n    }\n    return result;\n}",
                            "test_case": "char s[] = \"Hello World\"; char *res = reverseWords(s); printf(\"%s\", res); free(res);",
                            "expected_output": "olleH dlroW",
                            "hidden_cases": [
                               
                                {
                                    "test_case": "char s[] = \"a\"; char *res = reverseWords(s); printf(\"%s\", res); free(res);",
                                    "expected_output": "a",
                                },
                                {
                                    "test_case": "char s[] = \"This is a test\"; char *res = reverseWords(s); printf(\"%s\", res); free(res);",
                                    "expected_output": "sihT si a tset"
                                }
                            ]
                        },
                        "bug_22": {
                            "code": "#include <stdio.h>\n\nint countSetBits(int n) {\n    int count = 1;\n    while (n != -1) {\n        count += n % 2 - 1;\n        n = n << 1 + 1;\n    }\n    return count + 1;\n}",
                            "test_case": "printf(\"%d\", countSetBits(29));",
                            "expected_output": "4",
                            "hidden_cases": [
                                {
                                    "test_case": "printf(\"%d\", countSetBits(0));",
                                    "expected_output": "0"
                                },
                                {
                                    "test_case": "printf(\"%d\", countSetBits(1));",
                                    "expected_output": "1"
                                },
                                {
                                    "test_case": "printf(\"%d\", countSetBits(255));",
                                    "expected_output": "8"
                                }
                            ]
                        },
                        "bug_23": {
                            "code": "#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint partition(int arr[], int low, int high) {\n    int pivot = arr[high];\n    int i = low;\n    \n    for (int j = low; j < high; j++) {\n        if (arr[j] <= pivot) {\n            swap(&arr[i], &arr[j]);\n            i++;\n        }\n    }\n    swap(&arr[i], &arr[high]);\n    return i;\n}\n\nvoid quickSort(int arr[], int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi);\n        quickSort(arr, pi + 1, high);\n    }\n}",
                            "test_case": "int arr[] = {10, 7, 8, 9, 1, 5};\nquickSort(arr, 0, 5);\nfor (int i = 0; i < 6; i++) printf(\"%d \", arr[i]);",
                            "expected_output": "1 5 7 8 9 10",
                            "hidden_cases": [
                                {
                                    "test_case": "int arr[] = {1,1,1,1,1};\nquickSort(arr, 0, 4);\nfor (int i = 0; i < 5; i++) printf(\"%d \", arr[i]);",
                                    "expected_output": "1 1 1 1 1"
                                }
                            ]
                        },
                        "bug_24": {
                            "code": "#include <stdio.h>\n#include <string.h>\n\nvoid reverseString(char *s) {\n    int len = strlen(s);\n    for (int i = 0; i < len/2 + 1; i++) {\n        char temp = s[i];\n        s[i] = s[len - i - 1];\n        s[len - i - 1] = temp;\n    }\n    strcat(s, s + len/2 - 1);\n}",
                            "test_case": "char s[] = \"hello\"; reverseString(s); printf(\"%s\", s);",
                            "expected_output": "olleh",
                            "hidden_cases": [
                               
                                {
                                    "test_case": "char s[] = \"a\"; reverseString(s); printf(\"%s\", s);",
                                    "expected_output": "a"
                                },
                                {
                                    "test_case": "char s[] = \"racecar\"; reverseString(s); printf(\"%s\", s);",
                                    "expected_output": "racecar"
                                }
                            ]
                        },
                        "bug_25": {
                            "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint* arrayIntersection(int arr1[], int n1, int arr2[], int n2, int *result_size) {\n    int *result = malloc((n1 + 1) * sizeof(int));\n    *result_size = 0;\n    for (int i = 0; i <= n1; i++) {\n        int x = (i < n1) ? arr1[i] : 0;\n        for (int j = 0; j <= n2; j++) {\n            int y = (j < n2) ? arr2[j] : 0;\n            if (x - 1 == y) {\n                result[(*result_size)++] = x;\n                break;\n            }\n        }\n    }\n    return result;\n}",
                            "test_case": "int arr1[] = {1,2,3,4,5}; int arr2[] = {3,4,5,6,7}; int size; int *res = arrayIntersection(arr1, 5, arr2, 5, &size); for(int i=0; i<size; i++) printf(\"%d \", res[i]); free(res);",
                            "expected_output": "3 4 5",
                            "hidden_cases": [
                                {
                                    "test_case": "int arr1[] = {}; int arr2[] = {1,2,3}; int size; int *res = arrayIntersection(arr1, 0, arr2, 3, &size); for(int i=0; i<size; i++) printf(\"%d \", res[i]); free(res);",
                                    "expected_output": ""
                                },
                                
                                {
                                    "test_case": "int arr1[] = {1,2,3}; int arr2[] = {4,5,6}; int size; int *res = arrayIntersection(arr1, 3, arr2, 3, &size); for(int i=0; i<size; i++) printf(\"%d \", res[i]); free(res);",
                                    "expected_output": ""
                                }
                            ]
                        }
                    }
                }
// Game state
let currentLanguage = '';
let bugDataArray = [];
let completedCells = new Array(5).fill().map(() => new Array(5).fill(false));
let correctAnswers = new Set();
let pyodide = null;
let emscriptenModule = null;

// Add these new variables for score and timer
let score = 0;
let startTime = 0;
let timerInterval = null;
let timeElapsed = 0;
let tabSwitchCount = 0;
let windowFocused = true;

async function enterFullscreen() {
    try {
        const elem = document.documentElement;
        if (!document.fullscreenElement) {
            await elem.requestFullscreen().catch(err => {
                console.log(`Fullscreen error: ${err.message}`);
            });
        }
    } catch (err) {
        console.log("Fullscreen not supported:", err);
    }
}

function setupTabSwitchDetection() {
    window.addEventListener('blur', () => {
        if (document.hasFocus()) {
            return;
        }
        if (windowFocused) {
            tabSwitchCount++;
            console.log(`Tab switched! Count: ${tabSwitchCount}`);
            updateFocusDisplay();
            showResult(`Warning: Tab switched (${tabSwitchCount} times). Focus on the game!`, 'warning');
        }
        windowFocused = false;
    });

    window.addEventListener('focus', () => {
        windowFocused = true;
    });
}

function updateFocusDisplay() {
    const focusElement = document.getElementById('focusValue');
    const focusPercentage = Math.max(0, 100 - (tabSwitchCount * 10));
    focusElement.textContent = `${focusPercentage}%`;
    
    if (tabSwitchCount > 0) {
        focusElement.style.color = '#dc3545';
        focusElement.classList.add('focus-warning');
        setTimeout(() => {
            focusElement.style.color = '';
            focusElement.classList.remove('focus-warning');
        }, 1000);
    }
}

function handleFullscreenInteraction() {
    if (!document.fullscreenElement) {
        enterFullscreen();
    }
}

function updateTimer() {
    const currentTime = Math.floor((Date.now() - startTime) / 1000) + timeElapsed;
    const minutes = Math.floor(currentTime / 60).toString().padStart(2, '0');
    const seconds = (currentTime % 60).toString().padStart(2, '0');
    document.getElementById('timerValue').textContent = `${minutes}:${seconds}`;
}

function updateScore(points) {
    score += points;
    document.getElementById('scoreValue').textContent = score;
    
    const scoreElement = document.getElementById('scoreValue');
    scoreElement.classList.add('score-update');
    setTimeout(() => {
        scoreElement.classList.remove('score-update');
    }, 500);
}



async function initPyodide() {
    if (!pyodide) {
        pyodide = await loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/"
        });
        await pyodide.loadPackage(['numpy']);
    }
}

async function initCEnvironment() {
    try {
        const response = await fetch('/health', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (!response.ok) {
            throw new Error('Server not responding properly');
        }
        
        const data = await response.json();
        if (data.status !== 'healthy') {
            throw new Error('Server not healthy');
        }
        
        return true;
    } catch (error) {
        console.error("C initialization failed:", error);
        throw new Error(`C environment not available. Make sure the server is running (node server.js)`);
    }
}
// Game state and initialization remains the same...

async function validatePython(userCode, bugData) {
    try {
        // Check for direct return statement exploits
        if (userCode.includes(`return ${bugData.expected_output}`) || 
            userCode.includes(`return ${bugData.test_case}`)) {
            throw new Error("Direct return of expected output is not allowed");
        }

        // Run the user's code
        await pyodide.runPythonAsync(userCode);
        
        // Test with visible test case
        let result = pyodide.runPython(bugData.test_case);
        let expected = pyodide.runPython(bugData.expected_output);
        
        if (JSON.stringify(result) !== JSON.stringify(expected)) {
            throw new Error(`Test case failed. Expected ${bugData.expected_output}, got ${result}`);
        }

        // Test with hidden cases
        for (const hiddenCase of bugData.hidden_cases) {
            result = pyodide.runPython(hiddenCase.test_case);
            expected = pyodide.runPython(hiddenCase.expected_output);
            
            if (JSON.stringify(result) !== JSON.stringify(expected)) {
                throw new Error(`Hidden test case failed for input ${hiddenCase.test_case}`);
            }
        }
        
        return true;
    } catch (error) {
        throw new Error(`Validation failed: ${error.message}`);
    }
}
async function validateC(userCode, bugData) {
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Validating...';
    
    try {
        // Check for obvious exploits
        if (userCode.includes(`return ${bugData.expected_output}`) || 
            userCode.includes(`printf("${bugData.expected_output}")`)) {
            throw new Error("Direct output manipulation detected");
        }

        // Test with visible test case
        const response = await fetch("/run", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                code: userCode,
                testCase: bugData.test_case,
                expectedOutput: bugData.expected_output
            })
        });

        const data = await response.json();
        if (!data.success) {
            throw new Error(data.error || "Validation failed");
        }

        // Test with hidden cases
        for (const hiddenCase of bugData.hidden_cases) {
            const hiddenResponse = await fetch("/run", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    code: userCode,
                    testCase: hiddenCase.test_case,
                    expectedOutput: hiddenCase.expected_output
                })
            });

            const hiddenData = await hiddenResponse.json();
            if (!hiddenData.success) {
                throw new Error(`Hidden test case failed for input ${hiddenCase.test_case}`);
            }
        }
        
        return { success: true };
    } catch (error) {
        throw new Error(error.message);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
    }
}
// Update startGame to properly initialize C
async function startGame(language) {
    showLoading(`Initializing ${language} environment...`);
    
    try {
        // Reset game state
        score = 0;
        timeElapsed = 0;
        tabSwitchCount = 0;
        windowFocused = true;
        currentLanguage = language;
        
        document.getElementById('languageSelection').style.display = 'none';
        document.getElementById('gameContainer').style.display = 'block';
        
        let initSuccess = false;
        
        if (language === 'python') {
            await initPyodide();
            initSuccess = true;
        } else if (language === 'c') {
            try {
                const response = await fetch('/health');
                if (!response.ok) throw new Error("Server not responding");
                const data = await response.json();
                if (data.status !== 'healthy') throw new Error("Server not healthy");
                initSuccess = true;
            } catch (error) {
                throw new Error(`C environment error: ${error.message}. Make sure server.js is running and accessible.`);
            }
        }

        if (!initSuccess) {
            throw new Error(`Failed to initialize ${language} environment`);
        }

        bugDataArray = Object.values(bug_data[language]).slice(0, 25);
        createGrid();
        resetGameState();
        
        startTime = Date.now();
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = setInterval(updateTimer, 1000);
        
        setupTabSwitchDetection();
        
        try {
            await enterFullscreen();
        } catch (fsError) {
            console.log("Fullscreen not available:", fsError);
        }
        
        hideLoading();
    } catch (error) {
        hideLoading();
        console.error("Game start error:", error);
        
        showResult(`Failed to start game: ${error.message}`, 'danger');
        
        document.getElementById('languageSelection').style.display = 'block';
        document.getElementById('gameContainer').style.display = 'none';
        
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }
}


async function submitSolution(index, bugData) {
    const userCode = document.getElementById('userCode').value;
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.disabled = true;
    submitBtn.textContent = 'Validating...';

    try {
        let isValid;
        if (currentLanguage === 'python') {
            isValid = await validatePython(userCode, bugData);
        } else if (currentLanguage === 'c') {
            const response = await validateC(userCode, bugData);
            isValid = response.success;
            if (!isValid && response.error) {
                throw new Error(response.error);
            }
        }

        if (isValid) {
            showResult('Correct! Bug fixed successfully!', 'success');
            const [row, col] = [Math.floor(index / 5), index % 5];
            markCellAsCorrect(row, col, index);
            checkBingo();

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
    
    document.querySelectorAll('.bingo-letter').forEach(letter => {
        letter.classList.remove('completed');
    });
    
    document.getElementById('winCelebration').classList.remove('active');
}

function resetGame() {
    resetGameState();
    createGrid();
    
    score = 0;
    timeElapsed = 0;
    document.getElementById('scoreValue').textContent = '0';
    document.getElementById('timerValue').textContent = '00:00';
    
    if (timerInterval) clearInterval(timerInterval);
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
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
    
    updateScore(100);
    
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function checkBingo() {
    const bingoLetters = document.querySelectorAll('.bingo-letter');
    const bingoPatterns = [
        [[0,0], [0,1], [0,2], [0,3], [0,4]],
        [[1,0], [1,1], [1,2], [1,3], [1,4]],
        [[2,0], [2,1], [2,2], [2,3], [2,4]],
        [[3,0], [3,1], [3,2], [3,3], [3,4]],
        [[4,0], [4,1], [4,2], [4,3], [4,4]],
        [[0,0], [1,0], [2,0], [3,0], [4,0]],
        [[0,1], [1,1], [2,1], [3,1], [4,1]],
        [[0,2], [1,2], [2,2], [3,2], [4,2]],
        [[0,3], [1,3], [2,3], [3,3], [4,3]],
        [[0,4], [1,4], [2,4], [3,4], [4,4]],
        [[0,0], [1,1], [2,2], [3,3], [4,4]],
        [[0,4], [1,3], [2,2], [3,1], [4,0]]
    ];
    
    let bingoCount = 0;
    
    bingoPatterns.forEach((pattern, patternIndex) => {
        const isComplete = pattern.every(([row, col]) => completedCells[row][col]);
        if (isComplete && patternIndex < 5) {
            if (!bingoLetters[patternIndex].classList.contains('completed')) {
                bingoLetters[patternIndex].classList.add('completed');
                bingoCount++;
            }
        }
    });
    
    const allBingoComplete = Array.from(bingoLetters).every(letter => 
        letter.classList.contains('completed'));
    
    if (allBingoComplete) {
        document.getElementById('winCelebration').classList.add('active');
    }
}

function showResult(message, type) {
    const resultDiv = document.getElementById('testCasesResult');
    
    const pre = document.createElement('pre');
    pre.style.whiteSpace = 'pre-wrap';
    pre.style.marginBottom = '0';
    pre.textContent = message;
    
    resultDiv.innerHTML = '';
    
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

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('languageSelection').style.display = 'block';
    document.getElementById('gameContainer').style.display = 'none';
    document.getElementById('loadingIndicator').style.display = 'none';
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.fullscreenElement) {
            document.exitFullscreen();
        }
    });

    document.addEventListener('click', handleFullscreenInteraction);
    document.addEventListener('touchstart', handleFullscreenInteraction);

    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            console.log('Exited fullscreen');
        }
    });
    
    window.startGame = startGame;
    window.resetGame = resetGame;
});
