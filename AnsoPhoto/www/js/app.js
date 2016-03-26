(function() {
    'use strict';
    // Ionic Starter App

    // angular.module is a global place for creating, registering and retrieving Angular modules
    // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
    // the 2nd parameter is an array of 'requires'
    angular.module('starter', ['ionic', 'ngCordova'])

        .config(function($ionicConfigProvider) {
            $ionicConfigProvider.tabs.position('bottom');
        })

        .run(function($ionicPlatform) {
            $ionicPlatform.ready(function() {
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                    // for form inputs)
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                    // Don't remove this line unless you know what you are doing. It stops the viewport
                    // from snapping when text inputs are focused. Ionic handles this internally for
                    // a much nicer keyboard experience.
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })
})();

(function() {
    'use strict';

    angular
        .module('starter')
        .factory('CameraFactory', CameraFactory);

    CameraFactory.$inject = ['$cordovaCamera'];
    function CameraFactory($cordovaCamera) {
        var service = {
            tirarFoto: tirarFoto
        };

        return service;

        ////////////////

        function tirarFoto() {
            var options = {
                quality: 100,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 300,
                targetHeight: 300,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };

            $cordovaCamera.getPicture(options)
                .then(sucessoTirarFoto, erroTirarFoto);
        }

        function sucessoTirarFoto(imageData) {
            console.log(imageData);
        }

        function erroTirarFoto(err) {
            console.error(err);
        }

    }
})();

(function() {
    'use strict';

    angular
        .module('starter')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];
    function HomeController() {
        var vm = this;
    }

})();

(function() {
    'use strict';

    angular
        .module('starter')
        .controller('CameraController', CameraController);

    CameraController.$inject = ['CameraFactory'];
    function CameraController(CameraFactory) {
        var vm = this;
        vm.onTabSelect = onTabSelect;

        ////////////////

        function onTabSelect() {
            CameraFactory.tirarFoto();
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('starter')
        .controller('GalleryController', GalleryController);

    GalleryController.$inject = ['CameraFactory'];
    function GalleryController(CameraFactory) {
        var vm = this;
        vm.onTabSelect = onTabSelect;

        ////////////////

        function onTabSelect() {
           alert("Gallery");
        }
    }
})();