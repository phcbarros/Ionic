(function() {
    'use strict';
    // Ionic Starter App

    // angular.module is a global place for creating, registering and retrieving Angular modules
    // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
    // the 2nd parameter is an array of 'requires'
    angular.module('starter', ['ionic', 'ngCordova', 'ionic-toast'])

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
            $ionicLoading.show();
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

                this.render(function sucessoRender() {
                    $ionicLoading.hide();
                });
            });
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('starter')
        .service('LocalStorageService', LocalStorageService);

    LocalStorageService.$inject = [];
    function LocalStorageService() {
        this.save = save;
        this.get = get;

        ////////////////

        function save(chave, data) {
            var lista = angular.toJson(data);
            localStorage.setItem(chave, lista);
        }

        function get(chave) {
            var lista = localStorage.getItem(chave);
            return angular.fromJson(lista) || [];
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('starter')
        .factory('FileFactory', FileFactory);

    FileFactory.$inject = ['$cordovaFile', '$q', 'LocalStorageService'];
    function FileFactory($cordovaFile, $q, LocalStorageService) {

        var fileNames = [],
            images = [];

        var service = {
            save: save,
            load: load,
            fileNames: fileNames,
            images: images
        };

        return service;

        ////////////////
        function save(dataUrl) {

            var promise = (function(dataUrl) {
                var name = getName(),
                    defer = $q.defer();

                $cordovaFile
                    .writeFile(cordova.file.externalApplicationStorageDirectory, name, dataUrl, true)
                    .then(sucessoWriteFile, erroWriteFile);

                function sucessoWriteFile(result) {
                    console.log("sucesso save");
                    images.push(dataUrl);
                    fileNames.push(name);
                    saveFileNames(fileNames);
                    defer.resolve(result);
                }

                function erroWriteFile(err) {
                    console.log("erro", err);
                    defer.reject(err);
                }

                return defer.promise;

            })(dataUrl);

            return promise;
        }

        function getName() {
            var today = new Date();
            return today.getTime() + ".jpg";
        }

        function saveFileNames(fileNames) {
            LocalStorageService.save('fileNames', fileNames);
        }

        function loadFileNames() {
            return LocalStorageService.get("fileNames");
        }

        function load() {
            fileNames = loadFileNames();

            var i = 0,
                l = fileNames.length;

            for (; l--; i++) {
                (function(i, fileNames) {
                    openImage(fileNames[i], sucessoOpenImage);

                    function sucessoOpenImage(dataUrl) {
                        images.push(dataUrl);
                    }

                })(i, fileNames);
            }
        }

        function openImage(name, success) {

            (function(name, success) {
                $cordovaFile
                    .readAsText(cordova.file.externalApplicationStorageDirectory, name)
                    .then(sucessoReadAsText, erroReadAsText);

                function sucessoReadAsText(result) {
                    success(result);
                }

                function erroReadAsText(err) {
                    console.log(err);
                }
            })(name, success);
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('starter')
        .service('PopupService', PopupService);

    PopupService.$inject = ['$ionicPopup', '$q'];
    function PopupService($ionicPopup, $q) {
        this.alert = alert;

        ////////////////

        function alert(message) {
            var defer = $q.defer();

            $ionicPopup.show({
                title: message,
                buttons: [
                    {
                        text: "OK",
                        type: "button-positive",
                        onTap: function alertOnTab() {
                            defer.resolve();

                        }
                    }
                ]
            });

            return defer.promise;
        }
    }
})();


(function() {
    'use strict';

    angular
        .module('starter')
        .service('ToastService', ToastService);

    ToastService.$inject = ['ionicToast', '$q', '$timeout'];
    function ToastService(ionicToast, $q, $timeout) {
        this.show = show;

        ////////////////

        function show(options) {
            var defer = $q.defer(),
                config = applyOptionsDefault(options);

            ionicToast.show(config.message, config.position, config.stick, config.time);

            $timeout(function() {
                defer.resolve();
            }, config.time);

            return defer.promise;
        }

        function applyOptionsDefault(options) {
            var config = {
                message: "This is a toast",
                position: 'top',
                stick: true,
                time: 5000
            };

            return angular.extend({}, config, options);
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('starter')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['FileFactory', '$ionicModal', '$scope', 'ToastService'];
    function HomeController(FileFactory, $ionicModal, $scope, ToastService) {
        var vm = this;
        vm.showModal = showModal;
        vm.closeModal = closeModal;

        ///////////////////

        ionic.Platform.ready(function() {
            FileFactory.load();
            vm.images = FileFactory.images;
        });

        $ionicModal.fromTemplateUrl("image-modal.html", {
            scope: $scope,
            animation: 'slide-in-up'
        })
            .then(sucessoModal);

        function sucessoModal(modal) {
            vm.modal = modal;
        }

        function showModal(image) {
            vm.imageModal = image;
            vm.modal.show();
        }

        function closeModal() {
            vm.modal.hide();
        }

    }

})();

(function() {
    'use strict';

    angular
        .module('starter')
        .controller('CameraController', CameraController);

    CameraController.$inject = ['CameraFactory', 'ImageFilterFactory', 'FileFactory', 'ToastService', '$ionicTabsDelegate'];
    function CameraController(CameraFactory, ImageFilterFactory, FileFactory, ToastService, $ionicTabsDelegate) {
        var vm = this;
        vm.foto = null;
        vm.onTabSelect = onTabSelect;
        vm.onFilter = onFilter;
        vm.onSave = onSave;

        ////////////////

        function onTabSelect() {
            CameraFactory.getFoto(CameraFactory.type.CAMERA)
                .then(sucessoGetFoto, erroGetFoto);
        }

        function sucessoGetFoto(imageData) {
            vm.foto = "data:image/jpeg;base64," + imageData;
            ImageFilterFactory.applyFilter('fotoImage', 0);
        }

        function erroGetFoto(err) {
            console.error(err);
            redirectToTabHome();
        }

        function onFilter(option) {
            ImageFilterFactory.applyFilter('fotoImage', option);
        }

        function onSave() {
            var canvas = document.getElementById("fotoImage"),
                dataUrl = canvas.toDataURL();

            FileFactory
                .save(dataUrl)
                .then(sucessoSave, erroSave);
        }

        function sucessoSave() {
            ToastService.show({ message: "Foto salva com sucesso!", position: "middle", stick: false, time:  1000 })
                .then(redirectToTabHome);
        }

        function erroSave() {
            ToastService.show({ message: "Não foi possível salvar a foto!", position: "middle" })
                .then(redirectToTabHome);
        }

        function redirectToTabHome() {
            $ionicTabsDelegate.select(0);
        }

    }
})();

(function() {
    'use strict';

    angular
        .module('starter')
        .controller('GalleryController', GalleryController);

    GalleryController.$inject = ['CameraFactory', 'ImageFilterFactory', 'FileFactory', 'ToastService', '$ionicTabsDelegate'];
    function GalleryController(CameraFactory, ImageFilterFactory, FileFactory, ToastService, $ionicTabsDelegate) {
        var vm = this;
        vm.foto = null;
        vm.onTabSelect = onTabSelect;
        vm.onFilter = onFilter;
        vm.onSave = onSave;

        ////////////////

        function onTabSelect() {
            CameraFactory.getFoto(CameraFactory.type.GALLERY)
                .then(sucessoGetFoto, erroGetFoto);
        }

        function sucessoGetFoto(imageData) {
            delete vm.foto;
            vm.foto = "data:image/jpeg;base64," + imageData;
            ImageFilterFactory.applyFilter('galleryImage', 0);
        }

        function erroGetFoto(err) {
            console.error(err);
            redirectToTabHome();
        }

        function onFilter(option) {
            ImageFilterFactory.applyFilter('galleryImage', option);
        }

        function onSave() {
            var canvas = document.getElementById("galleryImage"),
                dataUrl = canvas.toDataURL();

            FileFactory
                .save(dataUrl)
                .then(sucessoSave, erroSave);
        }

        function sucessoSave() {
            ToastService.show({ message: "Foto salva com sucesso!", position: "middle", stick: false, time: 1000 })
                .then(redirectToTabHome);;
        }

        function erroSave(err) {
            ToastService.show({ message: "Não foi possível salvar a foto!", position: "middle" })
                .then(redirectToTabHome);;
        }

        function redirectToTabHome() {
            $ionicTabsDelegate.select(0);
        }
    }
})();