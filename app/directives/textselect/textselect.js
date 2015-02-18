(function ()
{
    'use strict';

    function textselect()
    {
        return {
            restrict: 'E',
            scope: {
                title: '@title',
                customText: '=model'
            },
            templateUrl: 'directives/textselect/textselect.html',
            controller: function ($scope)
            {
                $scope.inputText = {text: null};
                $scope.isEnter = false;

                $scope.toggleInput = function ()
                {
                    $scope.isEnter = !$scope.isEnter;
                };

                $scope.$watch(function ()
                {
                    return $scope.inputText.text;
                }, function (newValue)
                {
                    if (null == newValue || '' == newValue) {
                        $scope.customText = null;
                    } else {
                        $scope.customText = $scope.inputText.text;
                    }
                });
            },
            link: function (scope, element)
            {
                scope.$watch(function ()
                {
                    return scope.isEnter;
                }, function (value)
                {
                    if (value === true) {
                        element.find('input')[0].focus();
                    }
                });
            }
        };
    }

    angular.module('app').directive('textselect', [textselect]);
})();
