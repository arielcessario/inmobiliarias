(function () {
    'use strict';
    angular.module('listado', ['ngRoute'])
        .controller('ListadoCtrl', ListadoCtrl);


    ListadoCtrl.$inject = ['FireService', 'FireModel', 'FireVars'];
    function ListadoCtrl(FireService, FireModel, FireVars) {

        var vm = this;
        vm.casas = FireService.createArrayRef(FireModel.refPropiedades);
        vm.direcciones = FireService.cacheFactory(FireModel.refDirecciones);


        //vm.direcciones = FireService.cacheFactory();



        //vm.casa = Factory.casa;
        //vm.direccion = Factory.direccion;
        //vm.casas = DbFactory.createArrayRef(Factory.refCasas);
        //vm.direcciones = DbFactory.createArrayRef(Factory.refDirecciones);
        //
        //vm.dirs = dirCache(DBGlobals.fb.child('/direccion/'));
        //
        //FbVars.cachedDirecciones = [];
        //vm.test = FbService.cacheFactory(FbModel.refDirecciones, FbVars.cachedDirecciones);
        //
        //console.log(vm.test);


        //
        //var refPrueba = new Firebase('https://inmobiliarias.firebaseio.com/casa/-KAozsPqNiZ3cGbiFNIh');
        //var prueba = $firebaseObject(refPrueba);
        //prueba.$bindTo($scope, "listadoCtrl.prueba");


    }
})();