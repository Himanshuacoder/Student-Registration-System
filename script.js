// Wait for DOM to fully load before executing code
document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const studentForm = document.getElementById('studentForm');
    const studentName = document.getElementById('studentName');
    const studentId = document.getElementById('studentId');
    const studentEmail = document.getElementById('studentEmail');
    const contactNo = document.getElementById('contactNo');
    const submitBtn = document.getElementById('submitBtn');
    const updateBtn = document.getElementById('updateBtn');
    const studentTableBody = document.getElementById('studentTableBody');
    const tableContainer = document.querySelector('.table-container');

    // Error message elements
    const nameError = document.getElementById('nameError');
    const idError = document.getElementById('idError');
    const emailError = document.getElementById('emailError');
    const contactError = document.getElementById('contactError');

    // Store students data and current editing index
    let students = [];
    let currentEditIndex = null;

    // Load data from local storage on page load
    loadData();
    displayStudents();

    // Form submit event (for adding new students)
    studentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validate all fields
        if (!validateForm()){
            return;
        }

        // Add new student
        const student = {
            name: studentName.value.trim(),
            id: studentId.value.trim(),
            email: studentEmail.value.trim(),
            contact: contactNo.value.trim()
        };

        students.push(student);
        saveData();
        displayStudents();
        studentForm.reset();
    });

    // Update button event
    updateBtn.addEventListener('click', function () {
        if (!validateForm()) return;

        // Update existing student
        students[currentEditIndex] = {
            name: studentName.value.trim(),
            id: studentId.value.trim(),
            email: studentEmail.value.trim(),
            contact: contactNo.value.trim()
        };

        saveData();
        displayStudents();
        studentForm.reset();

        // Reset form state
        submitBtn.style.display = 'inline-block';
        updateBtn.style.display = 'none';
        currentEditIndex = null;
    });

    // Validation events
    studentName.addEventListener('input', function () {
        validateName();
    });

    studentId.addEventListener('input', function () {
        validateId();
    });

    studentEmail.addEventListener('input', function () {
        validateEmail();
    });

    contactNo.addEventListener('input', function () {
        validateContact();
    });

    // Function to load data from localStorage
    function loadData() {
        const data = localStorage.getItem('students');
        if (data) {
            students = JSON.parse(data);
        }
    }

    // Function to save data to localStorage
    function saveData() {
        localStorage.setItem('students', JSON.stringify(students));
    }

    // Function to display students in the table
    function displayStudents() {
        studentTableBody.innerHTML = '';

        // Show message if no students
        if (students.length === 0) {
            studentTableBody.innerHTML = '<tr><td colspan="5" style="text-align: center;">No student records found</td></tr>';
            return;
        }

        // Add each student to the table
        students.forEach((student, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.name}</td>
                <td>${student.id}</td>
                <td>${student.email}</td>
                <td>${student.contact}</td>
                <td>
                    <button class="action-btn edit-btn">Edit</button>
                    <button class="action-btn delete-btn">Delete</button>
                </td>
            `;

            // Add edit functionality
            row.querySelector('.edit-btn').addEventListener('click', function () {
                editStudent(index);
            });

            // Add delete functionality
            row.querySelector('.delete-btn').addEventListener('click', function () {
                deleteStudent(index);
            });

            studentTableBody.appendChild(row);
        });

        // Add dynamic scrollbar if needed
        updateScrollbar();
    }

    // Function to handle edit button click
    function editStudent(index) {
        const student = students[index];

        // Fill form with student data
        studentName.value = student.name;
        studentId.value = student.id;
        studentEmail.value = student.email;
        contactNo.value = student.contact;

        // Show update button, hide submit button
        submitBtn.style.display = 'none';
        updateBtn.style.display = 'inline-block';

        // Store current index
        currentEditIndex = index;
    }

    // Function to handle delete button click
    function deleteStudent(index) {
        if (confirm('Are you sure you want to delete this student record?')) {
            students.splice(index, 1);
            saveData();
            displayStudents();

            // Reset form if currently editing this student
            if (currentEditIndex === index) {
                studentForm.reset();
                submitBtn.style.display = 'inline-block';
                updateBtn.style.display = 'none';
                currentEditIndex = null;
            }
        }
    }

    // Function to add vertical scrollbar dynamically
    function updateScrollbar() {
        if (studentTableBody.scrollHeight > 350) {
            tableContainer.style.overflowY = 'scroll';
        } else {
            tableContainer.style.overflowY = 'auto';
        }
    }

    // Form validation functions
    function validateForm() {
        const isNameValid = validateName();
        const isIdValid = validateId();
        const isEmailValid = validateEmail();
        const isContactValid = validateContact();

        return isNameValid && isIdValid && isEmailValid && isContactValid;
    }

    // Validate name (letters and spaces only)
    function validateName() {
        const name = studentName.value.trim();
        const namePattern = /^[A-Za-z\s]+$/;

        if (name === '') {
            nameError.textContent = 'Name cannot be empty';
            return false;
        } else if (!namePattern.test(name)) {
            nameError.textContent = 'Name should contain only letters and spaces';
            return false;
        } else {
            nameError.textContent = '';
            return true;
        }
    }

    // Validate student ID
    function validateId() {
        const id = studentId.value.trim();
        
        if (id === '') {
            idError.textContent = 'ID cannot be empty';
            return false;
        } else {
            idError.textContent = '';
            return true;
        }
    }

    // Validate email format
    function validateEmail() {
        const email = studentEmail.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            emailError.textContent = 'Email cannot be empty';
            return false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }

    // Validate contact number
    function validateContact() {
        const contact = contactNo.value.trim();
        
        if (contact === '') {
            contactError.textContent = 'Contact number cannot be empty';
            return false;
        } else if (contact.length < 10) {
            contactError.textContent = 'Contact number should be at least 10 digits';
            return false;
        } else {
            contactError.textContent = '';
            return true;
        }
    }
});