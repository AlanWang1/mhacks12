# TimeCheck

A web application for test preparation between teachers and students!
- Featuring timed quizzes, quiz performance analytics and HTML Canvas markup for handwritten teacher marking
- User accounts for teachers and students using Firebase Authentication, with user data stored in Firebase Realtime NoSQL Database and Google Cloud Storage

![image](https://github.com/AlanWang1/TimeCheck/assets/43789278/ce2652c0-a42a-445b-a339-922f35027fee)

## Inspiration

The inspiration for this project comes from our chemistry teacher. One unique piece of advice that he offers all his students is to actually do every single homework question timed. What seemed unnecessary at first has actually turned into an invaluable tip for gauging familiarity with content and preparing for time-sensitive situations such as tests. It also has the side-effect of promoting good time management which is always nice.

From experiencing how beneficial this advice was firsthand, we decided to make the ultimate study tool built on our chemistry teacher's advice as well as aiming to establish a more transparent relationship between teachers and students. Our ultimate goal with this project is to reduce study anxiety among students by promoting healthy study habits and making teacher expectations clear through digital feedback and online practice.


## How we built it

TimeCheck's front-end is built on React and styled with the Bulma CSS library. HTML Canvas was used to provide drawing tools for teachers to mark up student work. For server-side logic, the app stores all its data in Firebase Realtime Database for user info, and in Google Cloud Storage for photos. Users login (either teachers or students) through Firebase Authentication.


## Tech Stack
- ReactJS - Frontend
- Firebase - Server-side (Firebase Realtime NoSQL Database, Firebase Authentication, Google Cloud Storage)

Originally demoed at Mhacks:
https://devpost.com/software/timecheck-9x1g3k
