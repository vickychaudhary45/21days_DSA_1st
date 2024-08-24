// Given a number n. Count the number of digits in n which evenly divide n. Return an integer, total number of digits of n which divides n evenly.

// Note :- Evenly divides means whether n is divisible by a digit i.e. leaves a remainder 0 when divided.

#include <iostream>
#include <cmath> // For std::abs

int countDivisibleDigits(int n) {
    // Handle negative numbers by considering the absolute value
    n = std::abs(n);
    int originalN = n; // Keep a copy of the original number
    int count = 0;

    while (n > 0) {
        // Extract the last digit
        int digit = n % 10;
        // Remove the last digit from the number
        n /= 10;

        // Avoid division by zero and check if originalN is divisible by this digit
        if (digit != 0 && originalN % digit == 0) {
            count++;
        }
    }

    return count;
}

int main() {
    // Example usage
    std::cout << countDivisibleDigits(1221) << std::endl;  // Output: 3
    // std::cout << countDivisibleDigits(12345) << std::endl; // Output: 3
    // std::cout << countDivisibleDigits(0) << std::endl;     // Output: 0
    // std::cout << countDivisibleDigits(-252) << std::endl;  // Output: 2

    return 0;
}
