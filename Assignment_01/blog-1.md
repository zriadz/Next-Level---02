***** any vs unknown *****

"any" datatype disables type checking.
"any" undermines TypeScript’s main advantage which is catching mistakes before execution, that's why it called "type safety hole". 


Instead of using "any" type, "unknown" represents a value that could be anything. Unlike "any", we must check or narrow its type before using it. Which force to write safer code by validating the type before performing operations.



***** Concept of Type Narrowing *****

Type narrowing stands for refining a vast type into a more specific one kind of based on checkmarks.
TypeScript uses control flow analysis to narrow types automatically by typeof, instanceof, or custom type guards when it is used.

It creates funnel type filtering using if-else statement in mine code so that it may prosper in a specific way.
