# react_django_boilerplate

Testbed:
* OS: Windows 10
* Node: 16.10.3
* NPM: 6.9.0
* Python 3.7.5
* Django
* * $ pip install django-npm

Installation:
* NodeJS & NPM: https://nodejs.org/en/download/
* Python3: https://www.python.org/downloads/
* Django: $ pip install django-npm
* React (comes with NPM): $ npm init react-app <app_name>
* * creates a sub folder with node-modules, etc.
* npm-serve: $ npm install -g serve

Run React app:
* from previous steps, go into folder: $ cd <app_name>
* get app dependencies, and build app in "build" folder to serve: $ npm run build
* serve app in "build" folder using npm-serve: $ serve -s build
* On browser: http://localhost:5000/
* To cancel, on command line, hit CTRL+C, or close window
* * If run process from background, kill nodejs processes