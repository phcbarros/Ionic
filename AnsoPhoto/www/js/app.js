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
        .directive('filterBar', filterBar);

    filterBar.$inject = [];
    function filterBar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/filter-bar.html'
        };

        return directive;
    }

})();

(function() {
    'use strict';

    angular
        .module('starter')
        .factory('CameraFactory', CameraFactory);

    CameraFactory.$inject = ['$cordovaCamera', '$q'];
    function CameraFactory($cordovaCamera, $q) {
        var type = {
            CAMERA: 1,
            GALLERY: 2
        };

        var service = {
            getFoto: getFoto,
            type: type,
        };

        return service;

        ////////////////

        function getFoto(option) {

            var options = {
                quality: 100,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: option,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 300,
                targetHeight: 300,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };

            return $cordovaCamera.getPicture(options)
                .then(sucessoGetFoto, erroGetFoto);
        }

        function sucessoGetFoto(imageData) {
            return $q.resolve(imageData)
        }

        function erroGetFoto(err) {
            return $q.reject(err);
        }

    }
})();

(function() {
    'use strict';

    angular
        .module('starter')
        .factory('ImageFilterFactory', ImageFilterFactory);

    ImageFilterFactory.$inject = ['$ionicLoading'];
    function ImageFilterFactory($ionicLoading) {
        var service = {
            applyFilter: applyFilter
        };

        return service;

        ////////////////

        function applyFilter(imageId, option) {
            
            Caman.Event.listen("processStart", function(){
                $ionicLoading.show();
            });
            
            Caman.Event.listen("renderFinished", function(){
                $ionicLoading.hide();
            });
            
            Caman('#' + imageId, function camanApply() {
                this.reset();
                
                switch (option) {
                    case 1:
                        this.nostalgia();
                        break;
                    case 2:
                        this.hazyDays();
                        break;
                    case 3:
                        this.love();
                        break;
                    case 4:
                        this.clarity();
                        break;
                }

                this.render();
            });
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('starter')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['ImageFilterFactory'];
    function HomeController(ImageFilterFactory) {
        var vm = this;
        ImageFilterFactory.applyFilter('teste', 1);
    }

})();

(function() {
    'use strict';

    angular
        .module('starter')
        .controller('CameraController', CameraController);

    CameraController.$inject = ['CameraFactory', 'ImageFilterFactory'];
    function CameraController(CameraFactory, ImageFilterFactory) {
        var vm = this;
        vm.foto = null;
        vm.onTabSelect = onTabSelect;
        vm.onFilter = onFilter;

        ////////////////

        function onTabSelect() {
            CameraFactory.getFoto(CameraFactory.type.CAMERA)
                .then(sucessoGetFoto, erroGetFoto);
        }

        function sucessoGetFoto(imageData) {
            vm.foto = "data:image/jpeg;base64," + imageData;
        }

        function erroGetFoto(err) {
            console.error(err);
        }

        function onFilter(option) {
            ImageFilterFactory.applyFilter('fotoImage', option);
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('starter')
        .controller('GalleryController', GalleryController);

    GalleryController.$inject = ['CameraFactory', 'ImageFilterFactory'];
    function GalleryController(CameraFactory, ImageFilterFactory) {
        var vm = this;
        vm.foto = null;
        vm.onTabSelect = onTabSelect;
        vm.onFilter = onFilter;

        ////////////////

        function onTabSelect() {
            CameraFactory.getFoto(CameraFactory.type.GALLERY)
                .then(sucessoGetFoto, erroGetFoto);
        }

        function sucessoGetFoto(imageData) {
            delete vm.foto;
            vm.foto = "data:image/jpeg;base64," + imageData;
        }

        function erroGetFoto(err) {
            console.error(err);
        }

        function onFilter(option) {
            ImageFilterFactory.applyFilter('galleryImage', option);
        }
    }
})();