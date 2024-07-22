# Vihari - Travel and Tour Platform  deployed on AWS EC2 instance 



Welcome to Vihari, an travel and tour platform built using the MERN stack. Vihari offers a comprehensive set of features for agents, users(traveler), and administrators.


## To deploy Vihari on an AWS EC2 instance, follow these steps:
- An AWS account
- An EC2 instance (Ubuntu/Debian recommended)
- Node.js and npm installed on the instance
- Git installed on the instance
- Security group with appropriate rules for HTTP/HTTPS traffic

## Steps:
- Launch an EC2 Instance
- Connect to Your EC2 Instance
- Update and Install Dependencies
- Clone the GitHub Repository:
- Navigate to the Cloned Directory
- Install Dependencies
- Configure Environment Variables
- Start the Development Server
- Access the Website

## You can access the website at  http://your-ec2-public-ip.

<img width="960" alt="vihari-aws" src="https://github.com/user-attachments/assets/5b1b6c75-cecd-4805-b882-71352ea36fc7">

## Above is the preview of Home page 



### Summary
This guide provides the steps necessary to deploy the Vihari travel and tour platform on an AWS EC2 instance. For detailed project features and functionality, please refer to the below details.


## How to Run

To get started with Vihari, follow these steps:

1. Clone the GitHub repository:
```bash
git clone https://github.com/DShreyan/VIHARI-MERN.git
```

2. Open your terminal and navigate to the cloned directory.

3. Install Node.js modules for both the client(frontend) and server(backend) and run below commands in 2 different terminals:
```bash
npm install
```

```bash
cd backend
npm install
```

4. Start the development server in cloned directory:

```bash
npm start
```

5. Access the website at [http://localhost:3000](http://localhost:3000).





## Users

Vihari consists to three main types of users:

- User(Traveler)
- Agent
- Admin

## Features

### General Features

- All users can view the website and book available buses between two places.
- All users can also book tours. 
- Booking buses and tours can be accessed only upon signup and signin.
- Good authentication system using JWT tokens.
- Implemtation of mutations for getting data from server using modern redux-toolkit.

### User Features

- User have their own profile.
- Booking buses and tours is open to users.
- User can book bus tickets and tours.
- User can see booking history of buses and tours.

### Agent Features

- Agent can add buses and tours upon approval by the admin.
- Dashboard for managing buses and tours.
- Addition, updation, and deletion of Buses.
- Addition, updation, and deletion of Tours.
- Addition and deletion of Tourplaces.
- Agent can edit their profile.

### Admin Features

- Dashboard manage agents and users.
- Approval or rejection of Agent requests.
- Admin can block/unblock an agent.
- Admin can send emails to all users regarding any important announcements.
Mallikarjuna sir
