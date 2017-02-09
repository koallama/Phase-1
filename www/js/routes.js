angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/Home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.search', {
    url: '/Search',
    views: {
      'tab2': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabsController.photo', {
    url: '/Photo',
    views: {
      'tab3': {
        templateUrl: 'templates/photo.html',
        controller: 'photoCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.Koallama'
      2) Using $state.go programatically:
        $state.go('tabsController.Koallama');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Profile
      /page1/tab2/Profile
      /page1/tab4/Profile
  */
  .state('tabsController.Koallama', {
    url: '/Profile',
    views: {
      'tab1': {
        templateUrl: 'templates/Koallama.html',
        controller: 'KoallamaCtrl'
      },
      'tab2': {
        templateUrl: 'templates/Koallama.html',
        controller: 'KoallamaCtrl'
      },
      'tab4': {
        templateUrl: 'templates/Koallama.html',
        controller: 'KoallamaCtrl'
      }
    }
  })

  .state('tabsController.Powerpuff_girls_Buttercup', {
    url: '/Buttercup',
    views: {
      'tab2': {
        templateUrl: 'templates/Powerpuff_girls_Buttercup.html',
        controller: 'Powerpuff_girls_ButtercupCtrl'
      }
    }
  })

  .state('tabsController.following', {
    url: '/following_B',
    views: {
      'tab2': {
        templateUrl: 'templates/following.html',
        controller: 'followingCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/Home')

  

});