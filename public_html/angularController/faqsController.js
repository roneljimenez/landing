var app = angular.module('faqsApp', ['duScroll']);


app.controller('showTerminosController', function($scope){
    $scope.terminos = true;
    $scope.preguntas = false;

    $scope.showTerminos = function() {
        console.log("activo");
        $scope.terminos = true;
        $scope.preguntas = false;
        console.log($scope.terminos);
    }
    $scope.showPreguntas = function() {
        $scope.terminos = false;
        $scope.preguntas = true;
    }

});
app.controller('showPreguntasController', function($scope){
    $scope.terminos = false;
    $scope.preguntas = true;

    $scope.showTerminos = function() {
        $scope.terminos = true;
        $scope.preguntas = false;
    }
    $scope.showPreguntas = function() {
        $scope.terminos = false;
        $scope.preguntas = true;
    }

});