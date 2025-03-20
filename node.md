mern-chat-app/
│── backend/                    # Node.js + Express Backend
│   ├── config/                 # Configuration files (DB, env, etc.)
│   │   ├── db.js               # MongoDB connection setup
│   │   ├── dotenv.js           # Load environment variables
│   ├── controllers/            # Controllers for handling logic
│   │   ├── authController.js   # Authentication (Login, Register)
│   │   ├── chatController.js   # Chat creation, fetch chats
│   │   ├── messageController.js# Send & retrieve messages
│   ├── models/                 # Mongoose models (Schemas)
│   │   ├── User.js             # User model
│   │   ├── Chat.js             # Chat model (Group or Private)
│   │   ├── Message.js          # Message model
│   ├── routes/                 # Routes for API endpoints
│   │   ├── authRoutes.js       # Authentication routes
│   │   ├── chatRoutes.js       # Chat routes
│   │   ├── messageRoutes.js    # Message routes
│   ├── middleware/             # Middleware for authentication
│   │   ├── authMiddleware.js   # JWT authentication middleware
│   ├── utils/                  # Utility functions
│   │   ├── generateToken.js    # JWT token generation
│   ├── server.js               # Main Express server file
│   ├── package.json            # Backend dependencies
│
│── frontend/                   # React Frontend
│   ├── public/                 # Public assets (index.html, icons)
│   ├── src/                    # Source folder
│   │   ├── components/         # Reusable components
│   │   │   ├── ChatList.js     # Chat list UI
│   │   │   ├── ChatBox.js      # Individual chat UI
│   │   │   ├── MessageInput.js # Input field for messages
│   │   ├── pages/              # App pages (screens)
│   │   │   ├── Login.js        # Login page
│   │   │   ├── Register.js     # Signup page
│   │   │   ├── ChatPage.js     # Chat interface
│   │   ├── context/            # Context API for global state
│   │   │   ├── ChatContext.js  # Context for chat state
│   │   ├── api/                # API calls to backend
│   │   │   ├── auth.js         # Auth-related API calls
│   │   │   ├── chat.js         # Chat-related API calls
│   │   │   ├── messages.js     # Message-related API calls
│   │   ├── App.js              # Main React app entry point
│   │   ├── index.js            # React root file
│   ├── package.json            # Frontend dependencies
│
│── .gitignore                   # Ignore node_modules, env files
│── README.md                     # Project documentation
│── .env                          # Environment variables
