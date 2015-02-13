(function ()
{
    'use strict';

    function colorselect()
    {
        return {
            restrict: 'E',
            scope: {
                possibleValues: '=possibleValues',
                selectedItems: '=model'
            },
            templateUrl: 'directives/colorselect/colorselect.html',
            controller: function ($scope)
            {
                $scope.localPossibleValues = [];
                $scope.localSelectedItem = {};

                $scope.selectColor = function (item)
                {
                    if ($scope.localSelectedItem !== item) {
                        $scope.localSelectedItem = item;
                        $scope.selectedItems.push(item.item);
                    }
                };

                $scope.isSelected = function (item)
                {
                    return $scope.localSelectedItem === item;
                };

                $scope.$watch(function ()
                {
                    return $scope.localSelectedItem;
                }, function (newValue, oldValue)
                {
                    var index = $scope.selectedItems.indexOf(oldValue.item);
                    if (newValue !== oldValue && -1 < index) {
                        $scope.selectedItems.splice(index, 1);
                    }
                });

                $scope.$watch(function ()
                {
                    return $scope.possibleValues;
                }, function ()
                {
                    $scope.localPossibleValues = [];

                    angular.forEach($scope.possibleValues, function (item)
                    {
                        $scope.localPossibleValues.push({color: item.color || item, item: item});
                    });

                    if (1 === $scope.localPossibleValues.length){
                        $scope.localSelectedItem = $scope.localPossibleValues[0];
                        $scope.selectedItems.push($scope.localPossibleValues[0].item);
                    }
                }, true);

            }
        };
    }

    angular.module('app').directive('colorselect', [colorselect]);
})();
