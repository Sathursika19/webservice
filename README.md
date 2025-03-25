![image](https://github.com/user-attachments/assets/4471a672-6348-4684-b744-f26b7d7e82b5)

The server successfully sets up basic routes and serves static responses.
The /stu route works as expected, returning the student data.
The /stu/:id and /students/gender/:gen routes contain errors and will not work correctly.
The student object has no gender property, therefore the /students/gender/:gen route is unusable in the current state.
The /stu/:id route is attempting to find a student object by id, however the student object uses the regno attribute.
To fix the /stu/:id route, the .map() should be changed to .filter(), and the id comparison should be changed to use the regno.
To fix the /students/gender/:gen route, the student object must contain a gender property, and the filter method should use the gender variable.
