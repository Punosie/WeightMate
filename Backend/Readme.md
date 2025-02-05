# Family Weight Tracker Backend

This is the backend for the Family Weight Tracker app, built using Node.js, Express.js, and MongoDB.

## Features

- User Authentication with Firebase Auth
- Family Group Management (Add/Delete Members, Update Family Info)
- Weight Tracking (Add/Edit/View Weight Data)

## Tech Stack

- Backend Framework: ![Node.js Badge](https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=fff&style=plastic)![Express Badge](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=plastic)
- Database: ![MongoDB Badge](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=plastic)![Mongoose Badge](https://img.shields.io/badge/Mongoose-800?logo=mongoose&logoColor=fff&style=plastic)
- API Testing: ![Postman Badge](https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=fff&style=plastic)
- Misc: ![.ENV Badge](https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=plastic) ![Nodemon Badge](https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=fff&style=plastic)

## API Endpoints
    
 Method | Endpoints | Parameter | Type     | Description                |
 :-------- | :-------- | :-------- | :------- | :------------------------- |
 `GET` | `/api/user/get/:uid` | `uid` | `string` | Get the user details |
 `POST` | `/api/user/create` |  |  | Create a new user |
 `PUT` | `/api/user/update/:uid` | `uid` | `string` | Update the user details |
 `DELETE` | `/api/user/delete/:uid` | `uid` | `string` | Delete a user |
 `GET` | `/api/weight/all` |  |  | Get all weights data |
 `GET` | `/api/weight/get/:uid` | `uid` | `string` | Get weights data of a user |
 `POST` | `/api/weight/add/:uid` | `uid` | `string` | Add weight |
 `PUT` | `/api/weight/update/:uid` | `uid` | `string` | Update weight data |
 `DELETE` | `/api/weight/delete/:uid` | `uid` | `string` | Delete weight data |
 `DELETE` | `/api/weight/deleteAll/:uid` | `uid` | `string` | Delete all weight records of a user |
 `GET` | `/api/family/all` |  |  | Get all Families in the db |
 `GET` | `/api/family/get/:familyId` | `familyId` | `string` | Get family details |
 `GET` | `/api/family/userFamily/:uid` | `uid` | `string` | Get all families of user |
 `POST` | `/api/family/create` |  |  | Create a new Family |
 `POST` | `/api/family/addMember/:familyId` | `familyId` | `string` | Add Fanmily Member |
 `PUT` | `/api/family/update/:familyId` | `familyId` | `string` | Update Family Name / Admin |
 `DELETE` | `/api/family/deleteFamily/:familyId` | `familyId` | `string` | Delete Family |
 `DELETE` | `/api/family/deleteMember/:familyId/:uid` | `familyId` `uid` | `string` | Remove Family Member |

## Installation & Setup

### 1. Clone the repo

```bash
git clone git@github.com:Punosie/WeightMate.git
cd WeightMate/Backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

```.env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4. Add Start Script for Nodemon

``` package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon <your_app_entry_point>"
  },
```

### 5. Start Server

```bash
npm start
```

## Contributors

- Shubhankar Kaushik (<shubhankar.kaushik2003@gmail.com>)

## [LICENSE](./LICENSE.MD)

This project is licensed under the MIT License.
