app.factory("pFac", function(){
  var o={};
  o.projectList=[
      {
        title:'Covers in Yesterday',
        tech:'HTML, JavaScript, AngularJS, d3.js, NodeJs/express, mongodb',
        desc:[
                {d:"A MEAN stack webpage which allows users to add information about  covers showed in the Yesterday Youtube video."},
            {d:"Used d3.js to display the covers' information."}
             ],
        imgs:[
                {image: './images/projects/y1.png', description: 'Image 01'},
                {image: './images/projects/y2.png', description: 'Image 01'},
                {image: './images/projects/y3.png', description: 'Image 01'},
             ]  
      },
      {
        title:'Navigation App on Smartwatch',
        tech:'HTML, JavaScript, jQuery, Tizen, Android',
        desc:[
                {d:"Implemented a navigation application runs on Samsung smartwatch. The application can retrieve a list of restaurants, show the map of the user's current location, and can retrieve and navigate to the selected nearby restaurant."},
                {d:"Tile maps provided by Open Street Map API, list of restaurants provided by Yelp API, routing services provided by Google Directions."}
             ],
        imgs:[
                {image: './images/projects/image01.png', description: 'Image 01'},
                {image: './images/projects/image02.png', description: 'Image 02'},
                {image: './images/projects/image03.png', description: 'Image 03'},
                {image: './images/projects/image04.png', description: 'Image 04'},
                {image: './images/projects/image05.png', description: 'Image 05'}
             ]  
      },
      {
        title:'Mobile Application: Compute My Grade',
        tech:'HTML5, JavaScript, jQuery mobile, PHP, MySQL, PhoneGap',
        desc:[
                {d:"Developed an Android application in HTML5 with PhoneGap. The application functionalities include account create/login, add/delete class or student, grade calculation and grade configuration."},
            {d:"All the data are stored in Yahoo web hosting MySQL database."}
             ],
        imgs:[
                {image: './images/projects/grad1.png', description: 'Image 01'},
                {image: './images/projects/grad2.png', description: 'Image 02'},
                {image: './images/projects/grad3.png', description: 'Image 03'},
                {image: './images/projects/grad4.png', description: 'Image 04'},
                {image: './images/projects/grad5.png', description: 'Image 05'},
             ]  
      },
      {
        title:'Photo Sharing Website',
        tech:'Java, PHP',
        desc:[
                {d:"Built a web server backend which can store the uploaded pictures from Java client and send the pictures to other domains using CURL libraries."},
                {d:"Built a Java client socket program that allows user to upload pictures to the web server backend, preview/download/delete the pictures stored in the website."},
             ],
        imgs:[
                {image: './images/projects/2071.png', description: 'Image 01'},
                {image: './images/projects/2072.png', description: 'Image 02'},
                {image: './images/projects/2073.png', description: 'Image 03'},
                {image: './images/projects/2074.png', description: 'Image 04'},
                {image: './images/projects/2075.png', description: 'Image 05'},
                {image: './images/projects/2076.png', description: 'Image 06'},
             ]  
      },
      {
        title:'Client-Server File Replication Monitoring daemon',
        tech:'Java',
        desc:[
                {d:"Developed a file replication daemon that can monitor text file activity in the client side and update any changes like creation, deletion and modification to the server through socket."},
             ],
        imgs:[
                {image: './images/projects/2081.png', description: 'Image 01'},
             ]  
      },
  ]; 
    
    return o;

});