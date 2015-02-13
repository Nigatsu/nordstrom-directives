(function ()
{
    'use strict';

    function multicheckbox()
    {
        return {
            restrict: 'E',
            scope: {
                possibleValues: '=possibleValues',
                selectedItems: '=model',
                selectedSize: '=selectedSize',
                title: '@title',
                search: '=search'
            },
            templateUrl: 'directives/multicheckbox/multicheckbox.html',
            controller: function ($scope)
            {
                $scope.localPossibleValues = [];
                $scope.localSelectedItems = [];

                $scope.selectedAll = false;

                $scope.filter = {name: ''};

                $scope.showSearch = function ()
                {
                    return true === $scope.search ? true : false === $scope.search ? false : $scope.possibleValues.length > $scope.search;
                };

                $scope.showSelected = function ()
                {
                    return $scope.localSelectedItems.length !== 0 && 0 !== $scope.selectedSize;
                };

                $scope.toggleItem = function (item)
                {
                    if ($scope.selectedAll) {
                        $scope.unselectAll();
                    }

                    var localIndex = $scope.localSelectedItems.indexOf(item);
                    if (-1 < localIndex) {
                        item.selected = false;
                        $scope.localSelectedItems.splice(localIndex, 1);
                    } else {
                        $scope.selectedAll = false;
                        $scope.localSelectedItems.push(item);
                    }

                    var index = $scope.selectedItems.indexOf(item.item);
                    if (-1 < index) {
                        $scope.selectedItems.splice(index, 1);
                    } else {
                        $scope.selectedItems.push(item.item);
                    }

                    if (0 === $scope.localSelectedItems.length) {
                        $scope.selectAll();
                    }
                };

                $scope.selectAll = function ()
                {
                    $scope.selectedAll = true;

                    angular.forEach($scope.localPossibleValues, function (item)
                    {
                        item.selected = false;

                        var index = $scope.selectedItems.indexOf(item.item);
                        if (-1 === index) {
                            $scope.selectedItems.push(item.item);
                        }
                    });

                    $scope.localSelectedItems = [];
                };

                $scope.unselectAll = function ()
                {
                    angular.forEach($scope.localPossibleValues, function (item)
                    {
                        var index = $scope.selectedItems.indexOf(item.item);
                        if (-1 < index) {
                            $scope.selectedItems.splice(index, 1);
                        }
                    });
                };

                $scope.$watch(function ()
                {
                    return $scope.possibleValues;
                }, function ()
                {
                    $scope.localPossibleValues = [];

                    angular.forEach($scope.possibleValues, function (item)
                    {
                        $scope.localPossibleValues.push({name: item.name || item, item: item});
                    });
                }, true);

                function startWithAll()
                {
                    $scope.selectedAll = true;

                    angular.forEach($scope.possibleValues, function (item)
                    {
                        var index = $scope.selectedItems.indexOf(item);
                        if (-1 === index) {
                            $scope.selectedItems.push(item);
                        }
                    });
                }

                startWithAll();
            }
        };
    }

    angular.module('app').directive('multicheckbox', [multicheckbox]);
})();
