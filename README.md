# Employee-Management-System

A web application developed using Agile methodologies to manage employee records and project data, named Genze Align Technologies.

# Overview

The EMS enables efficient management of employee and project details, providing role-based access for admins and employees, with additional features for finance management and secure email notifications.

# Key Features

+ Admin Dashboard: Complete control over employee data, projects, and roles.
+ Employee Dashboard: Access to personal, project, and finance information.
+ Role-Based Access: Customized views and permissions for admins and employees.
+ Finance Management: Includes CTC breakdown and downloadable payslips.
+ Automated Email Notifications: Sends login credentials and updates using JavaMail.

# Technologies Used

+ Frontend: React
+ Backend: Spring Boot
+ Database: MySQL
+ Authentication: Spring Security with JWT
+ Email Notifications: JavaMail Sender
+ Lombok: Used to reduce boilerplate code in Java.

# Lombok

This project utilizes Lombok to simplify code. To use Lombok, add the following dependency to your pom.xml:

<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.24</version> <!-- Use the latest version -->
    <scope>provided</scope>
</dependency>

# Using Lombok

To enable Lombok in your IDE: IntelliJ IDEA: Install the Lombok plugin and restart your IDE. Eclipse: Download the Lombok jar from the Lombok website and run it to set up.

# Installation

# Backend Setup:

1. Configure email and app password in the application.properties file:

    spring.mail.username=your-email@example.com
    spring.mail.password=your-app-password

2. Start the backend:

mvn spring-boot:run

# Frontend Setup:

Navigate to the frontend directory, then run:

        npm install
        npm start
        
# Usage

Admin Login:: Manage all employee records and projects.
Employee Login: Access to individual details, project information, and finance documents.

# Development Process

This project followed Agile development practices, focusing on iterative progress and collaboration, allowing for regular updates and improvements based on feedback.

# Screenshots

+ Login Page: Shared for both Admin and Employee roles.
  <img width="1470" alt="Screenshot 2025-02-13 at 9 40 32 PM" src="https://github.com/user-attachments/assets/6792cefc-f815-4cb4-93ab-9f9c9acbf20e" />

+ Admin Dashboard: Full access to manage all aspects of employee data.
  <img width="1470" alt="Screenshot 2025-02-13 at 9 40 51 PM" src="https://github.com/user-attachments/assets/b9c54998-d61e-43c6-97e3-2e43a8d31e71" />

+ Employee Dashboard: Displays personal, project, and financial details.
  <img width="1470" alt="Screenshot 2025-02-13 at 9 45 18 PM" src="https://github.com/user-attachments/assets/5b1c8672-5dd5-417b-abd4-f34107d560db" />
