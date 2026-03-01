# API Endpoints (General Idea)

This document provides a general overview of the available API endpoints in the system, organized by their respective controllers.

## Authentication (`/auth`)
- **`POST /auth/register`**: Register a new user.
- **`POST /auth/login`**: Authenticate a user and receive a token.

## Users (`/user`)
- **`POST /user`**: Create a new user (admin/internal usage).
- **`GET /user/profile/:id`**: Get the profile details of a specific user.
- **`PATCH /user/profile`**: Update the profile of the currently authenticated user.
- **`DELETE /user/profile/:id`**: Delete a specific user profile.

## Forms (`/form`)
- **`GET /form`**: Get all forms (supports pagination with `?limit=` & `?offset=`).
- **`POST /form`**: Create a new form.
- **`GET /form/:id`**: Get details of a specific form by ID.
- **`PATCH /form/:id`**: Update a specific form by ID.
- **`DELETE /form/:id`**: Delete a specific form by ID.
- **`POST /form/:id/submit`**: Submit a response to a specific form.
- **`GET /form/:id/submissions`**: Get all submissions for a specific form.
- **`GET /form/submission/:subId`**: Get the details of a specific form submission.

## Feedback (`/feedback`)
- **`POST /feedback/:formId`**: Submit feedback for a specific form.
- **`GET /feedback/form/:formId`**: Get all feedback entries for a specific form.
- **`GET /feedback/:id`**: Get a specific feedback entry by its ID.
- **`PATCH /feedback/:id/status`**: Update the status of a specific feedback entry.
- **`DELETE /feedback/:id`**: Delete a specific feedback entry.

## Plans (`/plan`)
- **`GET /plan`**: Retrieve available subscription plans.

## Subscriptions (`/subscription`)
- **`POST /subscription`**: Create or update a user subscription.

## Base (`/`)
- **`GET /`**: Health check or base API welcome message.

---

## Database Schema Overview

### 1. `User` (`users`)
Stores user details.
- **id** (Int): Primary Key
- **name** (String)
- **email** (String): Unique
- **created_at** (DateTime)
- **updated_at** (DateTime)
- **scheduled_for_deletion_at** (DateTime?): Optional

### 2. `Form` (`forms`)
Stores details of the form created by a user.
- **id** (Int): Primary Key
- **user_id** (Int): Foreign Key referencing `User(id)`
- **name** (String)
- **description** (String?): Optional
- **max_submissions_total** (Int?): Optional
- **submission_limit_per_user** (Int?): Optional
- **validate** (Boolean): Indicates if the form requires strict validation (default: `false`)
- **fields_schema** (String[]): Defines the expected field names
- **config_context** (Json?): Additional optional configuration context
- **ttl_interval** (String?): Optional PostgreSQL INTERVAL string
- **is_active** (Boolean): Defines if form is active (default: `true`)
- **created_at** (DateTime)
- **updated_at** (DateTime)

### 3. `FormSubmission` (`form_submissions`)
Stores the actual submission data provided by responders.
- **id** (Int): Primary Key
- **form_id** (Int): Foreign Key referencing `Form(id)`
- **response_data** (Json): The submitted context data
- **status** (Int): Status of the submission (default: `-1` NOT_MATCHED)
- **created_at** (DateTime)
