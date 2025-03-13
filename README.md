# Student Registration System

A responsive web application for managing student records with features to add, edit, and delete student information.

![Student Registration System](https://i.imgur.com/placeholder.png)

## Features

- **Add New Students**: Register students with name, ID, email, and contact number
- **View Records**: See all registered students in a clean, tabular format
- **Edit Information**: Update existing student records
- **Delete Records**: Remove students from the system
- **Data Validation**: Real-time validation for all input fields
- **Persistent Storage**: Data is stored in the browser's localStorage
- **Responsive Design**: Works on desktops, tablets, and mobile devices

## Technologies Used

- **HTML5**: Semantic markup for structure
- **CSS3**: Styling with responsive design principles
- **JavaScript**: Core functionality and DOM manipulation
- **localStorage API**: Client-side data persistence

## Project Structure

```
student-registration-system/
├── index.html        # Main HTML file
├── styles.css        # CSS styles
├── script.js         # JavaScript functionality
└── README.md         # Project documentation
```

## Setup and Usage

1. **Clone or download** the repository
2. **Open `index.html`** in any modern web browser
3. No server setup or build process required - it runs entirely in the browser

## How to Use

### Adding a Student
1. Fill in all required fields in the form (Name, ID, Email, Contact)
2. Click "Add Student"
3. The new student will appear in the records table

### Editing a Student
1. Click the "Edit" button next to the student you want to modify
2. The form will be populated with the student's information
3. Make your changes
4. Click "Update" to save changes

### Deleting a Student
1. Click the "Delete" button next to the student you want to remove
2. Confirm the deletion when prompted

## Form Validation

- **Name**: Must contain only letters and spaces
- **ID**: Cannot be empty
- **Email**: Must be in a valid email format (example@domain.com)
- **Contact**: Must be at least 10 digits

## Browser Compatibility

The application works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Future Enhancements

- Add search and filter functionality
- Implement sorting by different columns
- Add data export options (CSV, PDF)
- Implement user authentication
- Add student photo upload capability

## License

MIT License - feel free to use and modify for your own projects

## Contact

For questions or suggestions, please reach out to [himanshuksingh17@gmail.com](mailto:himanshuksingh17@gmail.com)
