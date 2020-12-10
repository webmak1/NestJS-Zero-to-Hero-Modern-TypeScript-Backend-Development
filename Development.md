# [Ariel Weinberger] NestJS Zero to Hero - Modern TypeScript Back-end Development [ENG, 2020]

<br/>

## 01. Introduction to NestJS & Pre-requisites

<br/>

### 005. Installing the NestJS CLI

    $ npm install -g @nestjs/cli

<br/>

    $ nest --version
    7.5.3


<br/>

## 02. REST API - Task Management Application (CRUD)

<br/>

### 008. Project Overview: Task Management Application

<br/>

![Application](/img/pic-m02-p01.png?raw=true)

<br/>

### 009. Creating a project via the CLI and an introduction to a NestJS project structure

    $ cd app/api
    $ nest new nestjs-task-management

<br/>

    $ cd 
    $ npm run start:dev

<br/>

### 010. Introduction to NestJS Modules

<br/>

### 011. Creating a Tasks Module

    $ cd app/api/nestjs-task-management
    $ nest g module tasks

    $ npm run start:dev


<br/>

### 12. Introduction to NestJS Controllers

<br/>

![Application](/img/pic-m02-p02.png?raw=true)

<br/>

### 13. Creating a Tasks Controller

    $ cd app/api/nestjs-task-management
    $ nest g controller tasks --no-spec


<br/>

### 14. Introduction to NestJS Providers and Services


<br/>

![Application](/img/pic-m02-p03.png?raw=true)


<br/>

### 15. Creating a Tasks Service

    $ cd app/api/nestjs-task-management
    $ nest g service tasks --no-spec

<br/>

### 16. Feature: Getting all Tasks


    $ npm run start:dev

<br/>

### 17. Defining a Task Model

<br/>

### 18-19. Feature Creating a Task

    $ npm install --save uuid

<br/>

```
$ curl -d '{
    "title": "title",
    "description": "description"
}' \
-H "Content-Type: application/json" \
-X POST localhost:3000/tasks \
| python -m json.tool
```

<br/>

**Response:**

```
{
    "description": "description",
    "id": "ccc44240-3a79-11eb-8eba-d9eaeaaceca5",
    "status": "OPEN",
    "title": "title"
}
```


<br/>

### 20. Introduction to Data Transfer Objects (DTOs)

<br/>

![Application](/img/pic-m02-p04.png?raw=true)

<br/>

![Application](/img/pic-m02-p05.png?raw=true)

<br/>

### 21. Creating a CreateTaskDto

<br/>

```
$ curl -d '{
    "title": "title",
    "description": "description"
}' \
-H "Content-Type: application/json" \
-X POST localhost:3000/tasks \
| python -m json.tool
```

<br/>

**Response:**

```
{
    "description": "description",
    "id": "fed13960-3b27-11eb-b007-01d1c5df01ee",
    "status": "OPEN",
    "title": "title"
}
```

<br/>


### 22. Feature Getting a Task by ID

<br/>

### 23. Challenge Deleting a Task

<br/>

### 24. Solution Deleting a Task

<br/>

### 25. Challenge Updating a Task's Status

<br/>

### 26. Solution Updating a Task's Status



<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>