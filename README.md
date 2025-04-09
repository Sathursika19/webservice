![Screenshot 2025-04-09 100237](https://github.com/user-attachments/assets/f38a726d-02fa-47d0-b6a8-d1ebdfbe7eee)
![Screenshot 2025-04-09 100152](https://github.com/user-attachments/assets/9c4c2e89-f1a4-4d2c-9ac0-36d81af0c168)
![Screenshot 2025-04-09 194229](https://github.com/user-attachments/assets/268bdaf8-0fab-4058-a4af-8defdb73238e)
The screenshots illustrate successful GET requests to a RESTful API hosted at http://localhost:8080. Here's a breakdown:

1. User Summary Endpoint
Endpoint: GET /user/summary/1

Response:

json
Copy
Edit
{
  "id": "1",
  "username": "john_doe",
  "email": "john@example.com",
  "fullName": "John Doe",
  "Number of Post": 2,
  "Number of comments": 1
}
This endpoint returns a detailed summary of the user with ID 1, including:

Basic user info (username, email, full name)

Post and comment statistics (2 posts and 1 comment)

2. Post Comments Endpoint
Endpoint: GET /post/1/comments

Response:

json
Copy
Edit
[
  {
    "commentator": "Alice Smith",
    "comment": "Great tips! I will definitely try these out."
  },
  {
    "commentator": "Bob Jackson",
    "comment": "Thanks for sharing. It's important to prioritize health."
  }
]
This endpoint retrieves the list of comments for the blog post with ID 1. Each comment includes:

Commentator's name

The actual comment text

✅ Status Code
Both requests returned 200 OK, confirming the API endpoints are working as expected.
