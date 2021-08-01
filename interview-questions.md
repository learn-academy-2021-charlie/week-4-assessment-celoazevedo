# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer:  the instance variable (declared with @) in ruby is declared when you create a class. That will allow every object that is an instance of that class to have access to that variable. It becomes part of the objects.

  Researched answer: to add to my answer, the objects will have access to the intance variable declared in the class but each object (instance of the class) can have different values for theis instance variables.



2. What is a block in Ruby?

  Your answer: a block is a piece of code that is performing a task. Much like a function in JS.

  Researched answer: Blocks are like anonymous functions in JS. We create blocks by starting with 'do' and ending with 'end'. We can also use {} to create a block. Blocks are a set of instructions (code) that is executed by method. 



3. Ruby has an implicit return. What does that mean?

  Your answer: that we do not need the keyword 'return' to return the result from a block or statement. it is implicit that the function or block will be returning something.

  Researched answer: it means that the last line inside of a method will always be returned (without the need of the return keyword)



4. What is object-oriented programming? How is it different than functional programming?

  Your answer: OOP is a programing paradigm. It is a set of rules that was agreed upon programers to structure the code. The four pillars that support the OOP paradigm are encapsulation, abstraction, inheritance and polymorphism. In functional programming we have the logic wrapped in functions that can be called as needed. That can become very complex / difficult to read / make changes. In oop we define the logic inside of classes and objects and this allows us to easily find the pieace of code that we would like to change, change that code without loosing sleep at night, or add a functionality without having to repeat your code. With functional programing we have our functions and variables 'floating around'. 

  Researched answer: in OOP we use objects to represent 'things' that we are programming. The objects holds data about them as attributes and the attributs can be manupulated by methods that are also part of the object. In functional programing, the function is the primary manipulation unit, it emphasizes in the evaluation of functions.



5. What is the difference between a class and an object?

  Your answer: A class is like a cookie cutter and the objects are like the cookies🍪. The class is the blueprint of an object. The object is an instance of the class. The class will have defined properties and methods and every object (instance of the class) will carry these properties and methods upon its instantiation.

  Researched answer: ... A class describes an objects behavior and defines the objects properties and default values. An object has state in which all properties have values.



6. STRETCH: What is `attr_accessor`?

  Your answer: the attr_accessor in Ruby is a lot like the constructor function in JS. When you call the attr_accessr inside of the class, you can access the attribute directly when you instantiate an object. You can call on the object and its property and access its (attribut value) value. But in order to have access to that property, we need to pass in the variable to our attr_accessor function inside of the class.

  Researched answer: In Ruby we can use the attr_accessor to automatically set up the getters and setters to access the instance variables. After passing in as an argument the instance variable that we want to access, we can access it directly from outside of the class. It also allow us to directly reassign a value to the instance variable by accessing it directly from outside of the class. With this method we do not need to set up our getters and setters inside of the class to access the values of the instance variables. We just initialize the instance variables inside the initialize method and pass in the variable to the attr_accessor.  



## Looking Ahead: Terms for Next Week

1. PostgreSQL: 
 
2. Ruby on Rails:

3. CRUD:

4. ORM:

5. Active Record:
