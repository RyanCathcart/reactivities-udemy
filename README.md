# Reactivities

A basic example of a social platform application that can be used to create social activities/meetups/events and post them to a public dashboard.
Features a login and authentication system, the ability to create a profile page, and a followers/following system.
<br/><br/>
Visit Website: [https://rwc-reactivities.up.railway.app/](https://rwc-reactivities.up.railway.app/)

## Technologies Used:

#### Back End: ASP.NET Core Web API

- Language: C# 11.0
- Frameworks/Packages/Technologies:
  - SQLite 7.0.10 - Database
  - PostGreSQL 7.0.10 - Production Database
  - Entity Framework Core 7.0.10 - Object-Relational Mapper
  - Microsoft ASP.NET Core Identity 7.0.10 - ASP.NET Core Identity provider for EF Core
  - AutoMapper 12.0.1 - Object-to-object mapper
  - MediatR 11.1.0 - Used to reduce dependencies between objects, specifically when making commands and queries to the database
  - Microsoft ASP.NET Core JWT Bearer 7.0.10 - ASP.NET Core middleware that enables an application to receive an OpenID Connect bearer token

#### Front End: React

- Language: TypeScript 5.2.2
- Frameworks/Packages/Technologies:
  - Axios 1.2.2 - Promise-based HTTP client used to make HTTP requests
  - MobX 6.7.0 - React state manager
  - UUID 9.0.0 - UUID generator
  - Semantic UI React 3.0.0-beta.0 - React theming framework
  - React-Calendar 4.0.0 - React calendar component for picking dates
  - React Toastify 9.1.1 - React toast alerts, used to display API errors
  - Formik 2.2.9 - React form library, used to create reusable forms
  - Yup 1.2.0 - Object schema validation library to used with formik to create validatable forms
  - React-Datepicker 4.8.0 - React calendar component for picking dates that doesn't rely on browser HTML5 implementation (more compatible)
  - date-fns 2.29.3 - JavaScript date utility library, used to turn JavaScript Date objects into formatted string to be displayed on client-app
  - react-dropzone 14.2.3 - React file dropzone component, used to allow user to drop an image to upload it to their profile
  - react-cropper 2.1.8 - React image cropper component, used to allow user to crop images before uploading it to their profile
  - @microsoft/signalr 7.0.0 - Client-side signalr package for communication with server.
  - react-infinite-scroller 1.2.6 - Used to enable infinite scrolling through the activity list on the client-app

#### Other

- Cloudinary - Cloud-based image and video management service. Used to upload, store, manage, manipulate, and deliver images and video for websites and apps.
- SendGrid - Free email service used to send email verification links to users.
- Docker (Desktop) - Used to create PostGreSQL container
