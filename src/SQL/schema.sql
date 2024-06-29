-- schema.sql
CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);

CREATE TABLE Forms (
    form_id INT PRIMARY KEY AUTO_INCREMENT,
    form_name VARCHAR(255) NOT NULL,
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES Users(user_id)
);

CREATE TABLE Axes (
    axis_id INT PRIMARY KEY,
    axis_name VARCHAR(255) NOT NULL
);

CREATE TABLE Subaxes (
    subaxis_id INT PRIMARY KEY,
    axis_id INT,
    subaxis_name VARCHAR(255) NOT NULL,
    FOREIGN KEY (axis_id) REFERENCES Axes(axis_id)
);

CREATE TABLE Questions (
    question_id INT PRIMARY KEY AUTO_INCREMENT,
    question_text TEXT NOT NULL,
    axis_id INT,
    subaxis_id INT,
    FOREIGN KEY (axis_id) REFERENCES Axes(axis_id),
    FOREIGN KEY (subaxis_id) REFERENCES Subaxes(subaxis_id)
);

CREATE TABLE Responses (
    response_id INT PRIMARY KEY AUTO_INCREMENT,
    form_id INT,
    question_id INT,
    user_id INT,
    response_text TEXT,
    response_value INT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (form_id) REFERENCES Forms(form_id),
    FOREIGN KEY (question_id) REFERENCES Questions(question_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Recommendations (
    recommendation_id INT PRIMARY KEY AUTO_INCREMENT,
    axis_id INT,
    subaxis_id INT,
    recommendation_text TEXT NOT NULL,
    recommendation_type VARCHAR(50) NOT NULL,
    FOREIGN KEY (axis_id) REFERENCES Axes(axis_id),
    FOREIGN KEY (subaxis_id) REFERENCES Subaxes(subaxis_id)
);