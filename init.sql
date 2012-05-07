-- initialize our tables

CREATE TABLE `users` (
	name VARCHAR(100),
	password VARCHAR(32),
	ID INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY(ID)
);

CREATE TABLE `chat_user` (
	username VARCHAR(100),
	ID INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY(ID)
);
CREATE TABLE `chat_messages` (
	message TEXT,
	chatuser_id INT,
	date_posted INT,
	ID INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY(ID)
);