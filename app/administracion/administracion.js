(function () {
    'use strict';
    angular.module('administracion', ['ngRoute'])
        .controller('AdministracionCtrl', AdministracionCtrl);


    AdministracionCtrl.$inject = ['FireModel', 'FireService'];
    function AdministracionCtrl(FireModel, FireService) {

        var vm = this;
        vm.panel = 'user.html';

        vm.datosGenerales = false;
        vm.especificaciones = false;
        vm.ubicacion = false;
        vm.fotos = false;

        //Modelos
        vm.refPropiedad = FireModel.refPropiedades;
        vm.arrPropiedad = FireService.createArrayRef(vm.refPropiedad);
        vm.propiedad = {};
        vm.refDireccion = FireModel.refDirecciones;
        vm.arrDireccion = FireService.createArrayRef(vm.refDireccion);
        vm.direccion = {};

        vm.arrOtro = FireService.createArrayRef(FireModel.refOtros);
        vm.otro = {};

        vm.arrServicio = FireService.createArrayRef(FireModel.refServicios);
        vm.servicio = {};

        vm.arrGeneral = FireService.createArrayRef(FireModel.refGenerales);
        vm.general = {};

        vm.arrMoneda = FireService.createArrayRef(FireModel.refMonedas);
        vm.moneda = {};

        vm.loadedMonedas = vm.arrMoneda.$loaded(function(data){
            vm.propiedad.moneda = data[0] ;
        });


        vm.savePropiedad = savePropiedad;
        vm.navPropiedad = navPropiedad;


        function savePropiedad() {

            vm.arrPropiedad.$add(vm.propiedad).then(function (data) {
                var propiedad = data;
                var key = data.key();

                vm.arrDireccion.$add(vm.direccion).then(
                    function (data) {
                        data.child('propiedad').child(key).set(true);
                        propiedad.child('direccion').child(data.key()).set(true);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }).catch(function (error) {
                console.log(error);
            });
        }

        function navPropiedad() {

            if (vm.datosGenerales) {
                vm.datosGenerales = false;
                vm.especificaciones = true;
                vm.ubicacion = false;
                vm.fotos = false;
                return;
            }
            if (vm.especificaciones) {
                vm.datosGenerales = false;
                vm.especificaciones = false;
                vm.ubicacion = true;
                vm.fotos = false;
                return;
            }
            if (vm.ubicacion) {
                vm.datosGenerales = false;
                vm.especificaciones = false;
                vm.ubicacion = false;
                vm.fotos = true;
                return;
            }
        }


    }
})();