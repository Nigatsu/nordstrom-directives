(function ()
{
    'use strict';

    function itemselect()
    {
        return {
            restrict: 'E',
            scope: {
                possibleValues: '=possibleValues',
                selectedItems: '=model'
            },
            templateUrl: 'directives/itemselect/itemselect.html',
            controller: function ($scope)
            {
                $scope.localPossibleValues = [];
                $scope.localSelectedItem = {};

                $scope.selectItem = function (item)
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
                    $scope.localPossibleValues.length = 0;

                    angular.forEach($scope.possibleValues, function (item)
                    {
                        $scope.localPossibleValues.push({name: item.name || item, item: item});
                    });

                    if (1 === $scope.localPossibleValues.length) {
                        $scope.localSelectedItem = $scope.localPossibleValues[0];
                        $scope.selectedItems.push($scope.localPossibleValues[0].item);
                    }
                }, true);

            }
        };
    }

    angular.module('app').directive('itemselect', [itemselect]);
})();
