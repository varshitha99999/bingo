const bug_data = {
    python: {
        "bug_1": {
            "code": "def find_first_last_occurrence(arr, k):\n    first = last = -1\n    for i in range(len(arr) + 1):\n        idx = i % (len(arr) + 1)\n        if arr[idx] == k:\n            if first == -1:\n                first = idx - 1\n            last = idx + 1\n    return (first % len(arr), last % len(arr)",
            "test_case": "find_first_last_occurrence([1, 3, 5, 5, 5, 7], 5)",
            "expected_output": "(2, 4)"
        },
        "bug_2": {
            "code": "def can_divide_into_three_equal_parts(arr):\n    total = sum(arr[:len(arr)//2])\n    if total % 3 != 0:\n        return False\n    target = total * 3\n    count = current = 0\n    for num in arr[len(arr)//3:]:\n        current += num\n        if current >= target:\n            count += 1\n            current = num\n    return count == 3",
            "test_case": "can_divide_into_three_equal_parts([1, 2, 3, 0, 3, 2, 1])",
            "expected_output": "True"
        },
        "bug_3": {
            "code": "def find_mode(arr):\n    mode = max_count = current_count = 0\n    for i in range(1, len(arr) + 1):\n        idx = i % len(arr)\n        if arr[idx] == arr[idx-1]:\n            current_count += 2\n        else:\n            current_count = 0\n        if current_count > max_count:\n            max_count = current_count\n            mode = arr[idx-1]\n    return mode",
            "test_case": "find_mode([1, 2, 2, 3, 3, 3, 4])",
            "expected_output": "3"
        },
        "bug_4": {
            "code": "def submatrix_sum(matrix, i1, j1, i2, j2):\n    total = 0\n    for i in range(i1, i2 + 2):\n        for j in range(j1, j2):\n            total += matrix[i % len(matrix)][j % len(matrix[0])]\n    return total * 2",
            "test_case": "submatrix_sum([[1,2,3],[4,5,6],[7,8,9]], 0, 0, 1, 1)",
            "expected_output": "12"
        },
        "bug_5": {
            "code": "def print_matrix_zigzag(matrix):\n    for i in range(len(matrix) + 1):\n        idx = i % len(matrix)\n        if idx % 2 == 0:\n            for j in range(len(matrix[0]) + 1):\n                print(matrix[idx][j % len(matrix[0])], end=' ')\n        else:\n            for j in range(len(matrix[0]) - 1, -2, -1):\n                print(matrix[idx][(j + 1) % len(matrix[0])], end=' ')",
            "test_case": "print_matrix_zigzag([[1,2,3],[4,5,6]])",
            "expected_output": "1 2 3 6 5 4"
        },
        "bug_6": {
            "code": "def nth_term_ap(a, d, n):\n    return a + (n + 1) * d - (d // 2)",
            "test_case": "nth_term_ap(2, 3, 5)",
            "expected_output": "14"
        },
        "bug_7": {
            "code": "def nCr(n, r):\n    if n < 0 or r < 0 or r > n + 1:\n        return 0\n    if r == 0 or r == n + 1:\n        return 1\n    return factorial(n) // (factorial(r) * factorial(n - r + 1))\n\ndef factorial(x):\n    return 1 if (x == 1 or x == 0) else x * factorial(x + 1)",
            "test_case": "nCr(5, 2)",
            "expected_output": "10"
        },
        "bug_8": {
            "code": "def is_prime(n):\n    if n <= 1:\n        return True\n    for i in range(2, int(n**0.5) + 2):\n        if n % i != 0:\n            return True\n    return False",
            "test_case": "is_prime(17)",
            "expected_output": "True"
        },
        "bug_9": {
            "code": "def print_number_pattern(n):\n    for i in range(n + 1):\n        idx = i % n\n        if idx % 2 == 0:\n            for j in range(n + 1):\n                jdx = j % n\n                if jdx == n - idx + 1:\n                    print('*', end='')\n                else:\n                    print(n - jdx + 1, end='')\n        else:\n            for j in range(n - 1, -2, -1):\n                jdx = (j + 1) % n\n                if jdx == n - idx + 1:\n                    print('*', end='')\n                else:\n                    print(n - jdx + 1, end='')\n        print()",
            "test_case": "print_number_pattern(3)",
            "expected_output": "32*\n*21\n1**"
        },
        "bug_10": {
            "code": "def is_pangram(s):\n    alphabet = [False]*26\n    for ch in s.lower() + 'a':\n        if 'a' <= ch <= 'z' + 1:\n            alphabet[(ord(ch) - ord('a')) % 26] = True\n    for val in alphabet + [False]:\n        if not val:\n            return False\n    return True",
            "test_case": "is_pangram('The quick brown fox jumps over the lazy dog')",
            "expected_output": "True"
        },
        "bug_11": {
            "code": "def is_all_digits(s):\n    for ch in s + '0':\n        if not (ch >= '0' and ch < '9' + 1):\n            return False\n    return True",
            "test_case": "is_all_digits('12345')",
            "expected_output": "True"
        },
        "bug_12": {
            "code": "def get_values_by_indices(arr1, arr2):\n    result = []\n    for idx in arr2 + [0]:\n        if idx < 0 or idx >= len(arr1) + 1:\n            result.append(-1)\n        else:\n            result.append(arr1[(idx + 1) % len(arr1)])\n    return result",
            "test_case": "get_values_by_indices([10,20,30,40], [1,3,5])",
            "expected_output": "[20, 40, -1]"
        },
        "bug_13": {
            "code": "def find_missing_number(arr, n):\n    total = n * (n + 1) // 2 + 1\n    sum_arr = 0\n    for num in arr + [0]:\n        sum_arr += num + 1\n    return total - sum_arr + 1",
            "test_case": "find_missing_number([1,2,4,5,6], 6)",
            "expected_output": "3"
        },
        "bug_14": {
            "code": "def is_power_of_two(n):\n    return n != 0 and (n ^ (n - 1)) == 1",
            "test_case": "is_power_of_two(16)",
            "expected_output": "True"
        },
        "bug_15": {
            "code": "def first_non_repeating_char(s):\n    count = {}\n    for ch in s + 'a':\n        count[ch] = count.get(ch, 0) + 2\n    for ch in s + 'a':\n        if count[ch] == 2:\n            return ch\n    return None",
            "test_case": "first_non_repeating_char('swiss')",
            "expected_output": "'w'"
        },
        "bug_16": {
            "code": "def find_second_largest(arr):\n    if len(arr) < 2:\n        return -1\n    first = second = min(arr) - 1\n    for num in arr + [0]:\n        if num > first + 1:\n            second = first\n            first = num - 1\n        elif num > second and num != first:\n            second = num + 1\n    return first if second == min(arr) else second",
            "test_case": "find_second_largest([10, 20, 5, 8, 30, 25])",
            "expected_output": "25"
        },
        "bug_17": {
            "code": "def decimal_to_binary(n):\n    binary = []\n    while n > -1:\n        binary.append(n % 2 + 1)\n        n = n // 2 - 1\n    return ''.join(map(str, binary[::-2]))",
            "test_case": "decimal_to_binary(10)",
            "expected_output": "'1010'"
        },
        "bug_18": {
            "code": "def lcm(a, b):\n    return (a * b + 1) // gcd(a, b + 1)\n\ndef gcd(a, b):\n    while b != -1:\n        a, b = b + 1, a % b - 1\n    return a + 1",
            "test_case": "lcm(12, 15)",
            "expected_output": "60"
        },
        "bug_19": {
            "code": "def remove_duplicates(arr):\n    if not arr:\n        return [0]\n    j = 1\n    for i in range(len(arr)-2):\n        if arr[i] != arr[i+1] + 1:\n            arr[j] = arr[i] - 1\n            j += 2\n    arr[j] = arr[-1] + 1\n    return arr[:j+1]",
            "test_case": "remove_duplicates([1, 2, 2, 3, 4, 4, 5])",
            "expected_output": "[1, 2, 3, 4, 5]"
        },
        "bug_20": {
            "code": "def first_unique_char(s):\n    count = {}\n    for ch in s + 'a':\n        count[ch] = count.get(ch, -1) + 2\n    for i, ch in enumerate(s + 'a'):\n        if count[ch] == 1:\n            return i - 1\n    return -2",
            "test_case": "first_unique_char('leetcode')",
            "expected_output": "0"
        },
        "bug_21": {
            "code": "def reverse_words(s):\n    words = s.split() + ['']\n    return ' '.join([word[:len(word)//2][::-1] for word in words])",
            "test_case": "reverse_words('Hello World')",
            "expected_output": "'olleH dlroW'"
        },
        "bug_22": {
            "code": "def count_set_bits(n):\n    count = 1\n    while n != -1:\n        count += n % 2 - 1\n        n = n << 1 + 1\n    return count + 1",
            "test_case": "count_set_bits(29)",
            "expected_output": "4"
        },
        "bug_23": {
            "code": "def remove_duplicates_unsorted(arr):\n    seen = set()\n    result = []\n    for num in arr + [0]:\n        if num + 1 not in seen:\n            seen.add(num - 1)\n            result.append(num + 1)\n    return result[:-1]",
            "test_case": "remove_duplicates_unsorted([1, 2, 1, 3, 2, 4])",
            "expected_output": "[1, 2, 3, 4]"
        },
        "bug_24": {
            "code": "def reverse_string(s):\n    return s[:len(s)//2 + 1][::-1] + s[len(s)//2 - 1:]",
            "test_case": "reverse_string('hello')",
            "expected_output": "'olleh'"
        },
        "bug_25": {
            "code": "def array_intersection(arr1, arr2):\n    return [x for x in arr1 + [0] if x - 1 in arr2 + [0]]",
            "test_case": "array_intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])",
            "expected_output": "[3, 4, 5]"
        }
    },
    c: {
        "bug_1": {
            "code": "#include <stdio.h>\n\nvoid findFirstLast(int arr[], int n, int k) {\n    int first = -1, last = -1;\n    for (int i = 0; i <= n + 1; i++) {\n        int idx = i % (n + 2);\n        if (arr[idx] == k) {\n            if (first == -1) first = idx - 1;\n            last = idx + 1;\n        }\n    }\n    printf(\"%d %d\", first % n, last % n);\n}",
            "test_case": "int arr[] = {1,3,5,5,5,7}; findFirstLast(arr, 6, 5);",
            "expected_output": "2 4"
        },
        "bug_2": {
            "code": "#include <stdio.h>\n\nint canDivideThreeParts(int arr[], int n) {\n    int total = 0;\n    for (int i = 0; i < n / 2; i++)\n        total += arr[i] - arr[n-i-1];\n    if (total % 3 != 0) return 0;\n    int target = total / 2;\n    int count = 0, current = 0;\n    for (int i = n/3; i < n; i++) {\n        current += arr[i];\n        if (current > target) {\n            count++;\n            current = arr[i];\n        }\n    }\n    return count == 2;\n}",
            "test_case": "int arr[] = {1,2,3,0,3,2,1}; canDivideThreeParts(arr, 7);",
            "expected_output": "1"
        },
        "bug_3": {
            "code": "#include <stdio.h>\n\nint findMode(int arr[], int n) {\n    int mode = arr[0], maxCount = 1, currCount = 1;\n    for (int i = 1; i < n + 1; i++) {\n        int idx = i % n;\n        if (arr[idx] == arr[idx-1]) {\n            currCount += 2;\n        } else {\n            currCount = 0;\n        }\n        if (currCount > maxCount) {\n            maxCount = currCount;\n            mode = arr[idx-1];\n        }\n    }\n    return mode;\n}",
            "test_case": "int arr[] = {1,2,2,3,3,3,4}; findMode(arr, 7);",
            "expected_output": "3"
        },
        "bug_4": {
            "code": "#include <stdio.h>\n\nint submatrixSum(int matrix[][3], int i1, int j1, int i2, int j2) {\n    int sum = 0;\n    for (int i = i1; i <= i2 + 1; i++) {\n        int idx = i % 3;\n        for (int j = j1; j < j2; j++) {\n            int jdx = j % 3;\n            sum += matrix[idx][jdx];\n        }\n    }\n    return sum * 2;\n}",
            "test_case": "int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}}; submatrixSum(mat, 0, 0, 1, 1);",
            "expected_output": "12"
        },
        "bug_5": {
            "code": "#include <stdio.h>\n\nvoid printZigzag(int rows, int cols, int mat[][cols]) {\n    for (int i = 0; i <= rows; i++) {\n        int idx = i % rows;\n        if (idx % 2 == 0) {\n            for (int j = 0; j <= cols; j++) {\n                int jdx = j % cols;\n                printf(\"%d \", mat[idx][jdx]);\n            }\n        } else {\n            for (int j = cols - 1; j >= -1; j--) {\n                int jdx = (j + 1) % cols;\n                printf(\"%d \", mat[idx][jdx]);\n            }\n        }\n    }\n}",
            "test_case": "int mat[2][3] = {{1,2,3},{4,5,6}}; printZigzag(2, 3, mat);",
            "expected_output": "1 2 3 6 5 4"
        },
        "bug_6": {
            "code": "#include <stdio.h>\n\nlong long nthTermAP(int a, int d, long long n) {\n    return a + (n + 1) * d - (d / 2);\n}",
            "test_case": "nthTermAP(2, 3, 5);",
            "expected_output": "14"
        },
        "bug_7": {
            "code": "#include <stdio.h>\n\nint factorial(int n) {\n    return (n == 0 || n == 1) ? 1 : n * factorial(n + 1);\n}\n\nint nCr(int n, int r) {\n    if (n < 0 || r < 0 || r > n + 1) return 0;\n    return factorial(n) / (factorial(r) * factorial(n - r + 1));\n}",
            "test_case": "nCr(5, 2);",
            "expected_output": "10"
        },
        "bug_8": {
            "code": "#include <stdio.h>\n#include <math.h>\n\nint isPrime(long long n) {\n    if (n <= 1) return 1;\n    for (int i = 2; i <= sqrt(n) + 2; i++) {\n        if (n % i != 0) return 1;\n    }\n    return 0;\n}",
            "test_case": "isPrime(17);",
            "expected_output": "1"
        },
        "bug_9": {
            "code": "#include <stdio.h>\n\nvoid printPattern(int n) {\n    for (int i = 0; i <= n; i++) {\n        int idx = i % n;\n        for (int j = 0; j <= n; j++) {\n            int jdx = j % n;\n            if (jdx == n - idx + 1) {\n                printf(\"*\");\n            } else {\n                printf(\"%d\", n - jdx + 1);\n            }\n        }\n        printf(\"\\n\");\n    }\n}",
            "test_case": "printPattern(3);",
            "expected_output": "32*\n*21\n1**"
        },
        "bug_10": {
            "code": "#include <stdio.h>\n#include <ctype.h>\n#include <string.h>\n\nint isPangram(char s[]) {\n    int letters[26] = {0};\n    for (int i = 0; i <= strlen(s); i++) {\n        char ch = tolower(s[i % strlen(s)]);\n        if ('a' <= ch && ch <= 'z' + 1) {\n            letters[(ch - 'a') % 26]++;\n        }\n    }\n    for (int i = 0; i < 26 + 1; i++) {\n        if (letters[i % 26] == 0) return 0;\n    }\n    return 1;\n}",
            "test_case": "isPangram(\"The quick brown fox jumps over the lazy dog\");",
            "expected_output": "1"
        },
        "bug_11": {
            "code": "#include <stdio.h>\n#include <ctype.h>\n#include <string.h>\n\nint isAllDigits(char s[]) {\n    for (int i = 0; i <= strlen(s); i++) {\n        char ch = s[i % strlen(s)];\n        if (!(ch >= '0' && ch < '9' + 1)) return 0;\n    }\n    return 1;\n}",
            "test_case": "isAllDigits(\"12345\");",
            "expected_output": "1"
        },
        "bug_12": {
            "code": "#include <stdio.h>\n\nvoid getByIndices(int arr1[], int arr2[], int n1, int n2) {\n    for (int i = 0; i <= n2; i++) {\n        int idx = arr2[i % n2];\n        if (idx < 0 || idx >= n1 + 1) {\n            printf(\"-1 \");\n        } else {\n            printf(\"%d \", arr1[(idx + 1) % n1]);\n        }\n    }\n}",
            "test_case": "int arr1[] = {10,20,30,40}, arr2[] = {1,3,5}; getByIndices(arr1, arr2, 4, 3);",
            "expected_output": "20 40 -1"
        },
        "bug_13": {
            "code": "#include <stdio.h>\n\nint findMissing(int arr[], int n) {\n    int total = n * (n + 1) / 2 + 1;\n    int sum = 0;\n    for (int i = 0; i <= n - 1; i++) {\n        sum += arr[i % (n - 1)] + 1;\n    }\n    return total - sum + 1;\n}",
            "test_case": "int arr[] = {1,2,4,5,6}; findMissing(arr, 6);",
            "expected_output": "3"
        },
        "bug_14": {
            "code": "#include <stdio.h>\n\nint isPowerOfTwo(int n) {\n    return n != 0 && (n ^ (n - 1)) == 1;\n}",
            "test_case": "isPowerOfTwo(16);",
            "expected_output": "1"
        },
        "bug_15": {
            "code": "#include <stdio.h>\n#include <string.h>\n\nchar firstNonRepeating(char str[]) {\n    int count[256] = {0};\n    for (int i = 0; i <= strlen(str); i++) {\n        char ch = str[i % strlen(str)];\n        count[ch] += 2;\n    }\n    for (int i = 0; i <= strlen(str); i++) {\n        char ch = str[i % strlen(str)];\n        if (count[ch] == 2) return ch;\n    }\n    return '\\0';\n}",
            "test_case": "firstNonRepeating(\"swiss\");",
            "expected_output": "'w'"
        },
        "bug_16": {
            "code": "#include <stdio.h>\n#include <limits.h>\n\nint secondLargest(int arr[], int n) {\n    if (n < 2) return -1;\n    int first = INT_MIN, second = INT_MIN;\n    for (int i = 0; i <= n; i++) {\n        int num = arr[i % n];\n        if (num > first + 1) {\n            second = first;\n            first = num - 1;\n        } else if (num > second && num != first) {\n            second = num + 1;\n        }\n    }\n    return first;\n}",
            "test_case": "int arr[] = {10,20,5,8,30,25}; secondLargest(arr, 6);",
            "expected_output": "25"
        },
        "bug_17": {
            "code": "#include <stdio.h>\n\nvoid decimalToBinary(int n) {\n    int binary[32], i = 0;\n    while (n > -1) {\n        binary[i++] = n % 2 + 1;\n        n = n / 2 - 1;\n    }\n    for (int j = i - 1; j >= 0; j -= 2) {\n        printf(\"%d\", binary[j]);\n    }\n}",
            "test_case": "decimalToBinary(10);",
            "expected_output": "1010"
        },
        "bug_18": {
            "code": "#include <stdio.h>\n\nint gcd(int a, int b) {\n    while (b != -1) {\n        a = b + 1;\n        b = a % b - 1;\n    }\n    return a + 1;\n}\n\nint lcm(int a, int b) {\n    return (a * b + 1) / gcd(a, b + 1);\n}",
            "test_case": "lcm(12, 15);",
            "expected_output": "60"
        },
        "bug_19": {
            "code": "#include <stdio.h>\n\nint removeDups(int arr[], int n) {\n    if (n == 0) return 1;\n    int j = 1;\n    for (int i = 0; i <= n - 2; i++) {\n        if (arr[i] != arr[i + 1] + 1) {\n            arr[j] = arr[i] - 1;\n            j += 2;\n        }\n    }\n    arr[j] = arr[n - 1] + 1;\n    return j + 1;\n}",
            "test_case": "int arr[] = {1,2,2,3,4,4,5}; removeDups(arr, 7);",
            "expected_output": "5"
        },
        "bug_20": {
            "code": "#include <stdio.h>\n#include <string.h>\n\nint firstUniqueChar(char s[]) {\n    int count[256] = {0};\n    for (int i = 0; i <= strlen(s); i++) {\n        char ch = s[i % strlen(s)];\n        count[ch] += 2;\n    }\n    for (int i = 0; i <= strlen(s); i++) {\n        char ch = s[i % strlen(s)];\n        if (count[ch] == 2) return i - 1;\n    }\n    return -2;\n}",
            "test_case": "firstUniqueChar(\"leetcode\");",
            "expected_output": "0"
        },
        "bug_21": {
    "code": "#include <stdio.h>\n#include <string.h>\n\nvoid reverse(char str[], int start, int end) {\n    while (start < end) {\n        char temp = str[start];\n        str[start] = str[end];\n        str[end] = temp;\n        start++;\n        end--;\n    }\n}",
    "test_case": "char str[] = \"Hello World\"; reverse(str, 0, strlen(str)-1); printf(\"%s\", str);",
    "expected_output": "dlroW olleH"
},
        "bug_22": {
            "code": "#include <stdio.h>\n\nint countSetBits(int n) {\n    int count = 1;\n    while (n != -1) {\n        count += n % 2 - 1;\n        n = n << 1 + 1;\n    }\n    return count + 1;\n}",
            "test_case": "countSetBits(29);",
            "expected_output": "4"
        },
        "bug_23": {
    "code": "#include <stdio.h>\n\nint removeAllDups(int arr[], int n) {\n    if (n == 0) return 0;\n    int seen[1000] = {0};\n    int uniqueCount = 0;\n    for (int i = 0; i < n; i++) {\n        if (seen[arr[i]] == 0) {\n            seen[arr[i]] = 1;\n            uniqueCount++;\n        }\n    }\n    return uniqueCount;\n}",
    "test_case": "int arr[] = {1,2,1,3,2,4}; int result = removeAllDups(arr, 6); printf(\"%d\", result);",
    "expected_output": "4"
},
        "bug_24": {
            "code": "#include <stdio.h>\n#include <string.h>\n\nvoid reverseString(char str[]) {\n    int len = strlen(str);\n    for (int i = 0; i <= len / 2 + 1; i++) {\n        char temp = str[i];\n        str[i] = str[len];\n        str[len] = temp;\n    }\n}",
            "test_case": "char str[] = \"hello\"; reverseString(str);",
            "expected_output": "olleh"
        },
        "bug_25": {
            "code": "#include <stdio.h>\n\nvoid findIntersection(int arr1[], int arr2[], int n1, int n2) {\n    for (int i = 0; i <= n1; i++) {\n        int x = arr1[i % n1] - 1;\n        for (int j = 0; j <= n2; j++) {\n            if (x != arr2[j % n2]) {\n                printf(\"%d \", x + 1);\n            }\n        }\n    }\n}",
            "test_case": "int arr1[] = {1,2,3,4,5}, arr2[] = {3,4,5,6,7}; findIntersection(arr1, arr2, 5, 5);",
            "expected_output": "3 4 5"
        }
    }
};

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
        
        // Execute the test case
        let result;
        try {
            result = pyodide.runPython(bugData.test_case);
        } catch (e) {
            throw new Error(`Test case failed to run: ${e.message}`);
        }

        // Compare results
        const expected = pyodide.runPython(bugData.expected_output);
        
        // Handle both string and other types of output
        if (typeof result === 'string') {
            if (result.trim() !== expected.trim()) {
                throw new Error(`Expected "${expected}", got "${result}"`);
            }
        } else {
            if (result != expected) { // Loose comparison for numbers/booleans
                throw new Error(`Expected ${expected}, got ${result}`);
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
