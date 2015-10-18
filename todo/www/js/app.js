// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

angular.module('todo', ['ionic'])
  .factory('Projects', projects)
  .controller('TodoCtrl', todoCtrl);
  
 function projects(){
   
   var _all = function(){
     var projectsString = window.localStorage['projects'];
     
     if(projectsString)
       return angular.fromJson(projectsString);
       
      return [];
   };
   
   var _save = function(projects){
     window.localStorage['projects'] = angular.toJson(projects);
   };
   
   var _newProject = function(projectTitle){
     //Add a new project
     return {
       title: projectTitle,
       tasks: []
     };
   }
   
   var _getLastActiveIndex = function(){
     return parseInt(window.localStorage['lastActiveProject']) || 0;
   };
   
   var _setLastActiveIndex = function(index){
     window.localStorage['lastActiveProject'] = index;
   };
   
   return{
     all: _all,
     save: _save,
     newProject: _newProject,
     getLastActiveIndex: _getLastActiveIndex,
     setLastActiveIndex: _setLastActiveIndex
   };
 };
  
 function todoCtrl($scope, $timeout, $ionicModal, Projects, $ionicSideMenuDelegate){
   $scope.tasks = [];
   
   // A utility function for creating a new Project
   // with the give projectTitle
   var createProject = function(projectTitle){
     var newProject = Projects.newProject(projectTitle);
     $scope.projects.push(newProject);
     Projects.save($scope.projects);
     $scope.selectProject(newProject, $scope.projects.length - 1);
   };
   
   // Load or initialize projects
   $scope.projects = Projects.all();
   
   // Grab the last active, or the first project
   $scope.activeProject = $scope.projects[Projects.getLastActiveIndex];
   
   // Called to create a new Project
   $scope.newProject = function(){
     var projectTitle = prompt('Project name');
     if(projectTitle)
      createProject(projectTitle);
   };
   
   // Called to select the given project
   $scope.selectProject = function(project, index){
     $scope.activeProject = project;
     Projects.setLastActiveIndex(index);
     $ionicSideMenuDelegate.toggleLeft(false);
   };
   
   // Create and load the Modal
   $ionicModal.fromTemplateUrl('new-task.html', function(modal){
     $scope.taskModal = modal;
   }, {
     scope: $scope,
     animation: 'slide-in-up'
   });
   
   //Called when the form is submitted
   $scope.createTask = function(task){
     
     if(!$scope.activeProject || !task)
      return;
     
     console.log(task)
     
     $scope.activeProject.tasks.push({
       title: task.title
     });
     
     $scope.taskModal.hide();
     Projects.save($scope.projects)
     delete task.title;
   };
   
   //Open our new task modal
   $scope.newTask = function(){
     $scope.taskModal.show();
   };
   
   //Close the new task modal
   $scope.closeNewTask = function(){
     $scope.taskModal.hide();
   };
   
   $scope.toggleProjects = function(){
     $ionicSideMenuDelegate.toggleLeft();
   };
   
   
   // Try to create the first project, make sure to defer
   // this by using $timeout so everything is initialized
   // properly
   
   $timeout(function(){
     if($scope.projects.length == 0){
       while(true){
         var projectTitle = prompt('Your first project title:');
         
         if(projectTitle){
           createProject(projectTitle);
           break;
         }
          
       }
     }
      
   },10000000);
   
 };