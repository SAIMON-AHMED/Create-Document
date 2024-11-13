# Create Document

## Description
The `generateDocument` function checks if a given `document` string can be generated using the characters in a provided `characters` string. It ensures that every character needed in the `document` is available in the `characters` string with sufficient frequency.

## Function Signature
```javascript
function generateDocument(characters, document) -> boolean
```

## Parameters
- `characters` (string): A string containing a collection of characters from which we can potentially generate the `document`.
- `document` (string): A string representing the target document we want to generate using the characters from the `characters` string.

## Returns
- **boolean**: Returns `true` if it's possible to generate the `document` string using the `characters` string, otherwise returns `false`.

## Algorithm Explanation
1. **Character Count Map Creation**: 
   - The function iterates through `characters` and counts the occurrences of each character, storing these counts in a hashmap (`characterCounts`).
2. **Document Validation**:
   - The function then iterates through each character in `document`. For each character, it checks if the character is available in `characterCounts` with a non-zero count.
   - If a character is missing or its count is zero, it returns `false`.
   - If all characters in `document` are found with sufficient counts, it decreases the count in `characterCounts` and continues checking.
3. **Return `true`** if the entire document is validated.

## Time and Space Complexity
- **Time Complexity**: \(O(n + m)\), where \(n\) is the length of `characters` and \(m\) is the length of `document`. This is because the function iterates through both strings.
- **Space Complexity**: \(O(k)\), where \(k\) is the number of unique characters in `characters`. This is the space needed to store counts in the hashmap.

## Examples
```javascript
generateDocument("aabbcc", "abc")          // returns true
generateDocument("aabbcc", "abcd")         // returns false
generateDocument("hello world", "hello")   // returns true
generateDocument("xyz", "xyzz")            // returns false
```

## Edge Cases
- **Empty `document`**: Returns `true` as no characters are needed.
- **Empty `characters` with non-empty `document`**: Returns `false`.
- **Case Sensitivity**: `generateDocument("aA", "aa")` returns `false` because it treats uppercase and lowercase as distinct characters.
- **Special Characters**: Handles spaces, punctuation, and symbols as distinct characters in `document`.

## License
This code is provided under the MIT License.
