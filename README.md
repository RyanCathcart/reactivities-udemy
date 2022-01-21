# Reactivities
A basic example of a social platform application that can be used to create/schedule social activities and post them to a public dashboard.
Features a login and authentication system.

## Technologies Used:
#### Back End: ASP.NET Core API
- Language: C# 9.0
- Frameworks/Packages/Technologies:
  - SQLite 5.0.10 - Database
  - Entity Framework Core 5.0.10 - Object-Relational Mapper
  - AutoMapper 8.1.1 - Object-to-object mapper
  - MediatR 9.0.0 - Used to reduce dependencies between objects, specifically when making commands and queries to the database
  - Microsoft ASP.NET Core JWT Bearer 5.0.11 - ASP.NET Core middleware that enables an application to receive an OpenID Connect bearer token
    
#### Front End: React
- Language: TypeScript 4.4.3
- Frameworks/Packages/Technologies:
  - Axios 0.21.4 - Promise-based HTTP client used to make HTTP requests
  - MobX 6.3.3 - React state manager
  - UUID 8.3.2 - UUID generator
  - Semantic UI React 2.0.4 - React theming framework
  - React-Calendar 3.4.0 - React calendar component for picking dates
  - React Toastify 8.0.3 - React toast alerts, used to display API errors
  - Formik 2.2.9 - React form library, used to create reusable forms
  - Yup 0.32.11 - Object schema validation library to used with formik to create validatable forms
  - React-Datepicker 4.2.1 - React calendar component for picking dates that doesn't rely on browser HTML5 implementation (more compatible)
  - date-fns 2.25.0 - JavaScript date utility library, used to turn JavaScript Date objects into formatted string to be displayed on client-app
  - react-dropzone 11.5.1 - React file dropzone component, used to allow user to drop an image to upload it to their profile
  - react-cropper 2.1.8 - React image cropper component, used to allow user to crop images before uploading it to their profile
  - @microsoft/signalr 6.0.1 - Client-side signalr package for communication with server.
  - react-infinite-scroller 1.2.4 - Used to enable infinite scrolling through the activity list on the client-app

#### Other
- Cloudinary - Cloud-based image and video management service. Used to upload, store, manage, manipulate, and deliver images and video for websites and apps.
