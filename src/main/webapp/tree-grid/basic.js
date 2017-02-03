(function () {
    'use strict';
    var app, deps;

    deps = ['ntt.TreeDnD'];

    app = angular.module('TreeDnDTest', deps);
    app.controller(
        'BasicController', [
            '$scope', function ($scope) {
                var tree;
                $scope.tree_data = {};
                $scope.my_tree = tree = {};

                $scope.my_tree.addFunction = function (node) {
                    console.log(node);
                    alert('Function added in Controller "App.js"');
                };

                $scope.expanding_property = {
                    /*template: "<td>OK All</td>",*/
                    field: 'Name',
                    titleClass: 'text-center',
                    cellClass: 'v-middle',
                    displayName: 'Name'
                };
                $scope.col_defs = [
                    {
                        field: 'Description',
                        displayName: 'Description0'
                    }, {
                        field: 'Description',
                        titleStyle: {
                            'width': '200pt'
                        },
                        titleClass: 'text-center',
                        cellClass: 'v-middle text-center',
                        displayName: 'Description1',
                        //cellTemplate: '<i class="fa {{ !node.Description ? \'fa-times text-danger-lter\' : \'fa-check text-success\' }} text"></i>'
                        //cellTemplate: '<i class="fa {{ !node.Description ? \'fa-times text-danger-lter\' : \'fa-check text-success\' }} text"></i>'
                        cellTemplate: '<input class="form-control" ng-model="node.Description">'
                    }, {
                        displayName: 'Function',
                        cellTemplate: '<button ng-click="tree.addFunction(node)" class="btn btn-success btn-sm">Added Controller!</button>'
                    }, {
                        displayName: 'Remove',
                        cellTemplate: '<button ng-click="tree.remove_node(node)" class="btn btn-danger btn-sm">Remove</button>'
                    }];
                // DataDemo.getDatas() can see in 'Custom Option' -> Tab 'Data Demo'
                $scope.tree_data = [
    {
        "DemographicId":1,
        "ParentId":null,
        "Name":"Name#1",
        "Description":"United States of America#1",
        "Area":"9826675#1",
        "Population":"318212000#1",
        "TimeZone":"UTC -5 to -10#1",
        "__children__":[
            {
                "DemographicId":2,
                "ParentId":1,
                "Name":"Name#1#2",
                "Description":"United States of America#1#2",
                "Area":"9826675#1#2",
                "Population":"318212000#1#2",
                "TimeZone":"UTC -5 to -10#1#2"
            },
            {
                "DemographicId":3,
                "ParentId":1,
                "Name":"Name#1#3",
                "Description":"United States of America#1#3",
                "Area":"9826675#1#3",
                "Population":"318212000#1#3",
                "TimeZone":"UTC -5 to -10#1#3"
            },
            {
                "DemographicId":4,
                "ParentId":1,
                "Name":"Name#1#4",
                "Description":"United States of America#1#4",
                "Area":"9826675#1#4",
                "Population":"318212000#1#4",
                "TimeZone":"UTC -5 to -10#1#4"
            },
            {
                "DemographicId":5,
                "ParentId":1,
                "Name":"Name#1#5",
                "Description":"United States of America#1#5",
                "Area":"9826675#1#5",
                "Population":"318212000#1#5",
                "TimeZone":"UTC -5 to -10#1#5",
                "__children__":[
                    {
                        "DemographicId":6,
                        "ParentId":5,
                        "Name":"Name#1#5#6",
                        "Description":"United States of America#1#5#6",
                        "Area":"9826675#1#5#6",
                        "Population":"318212000#1#5#6",
                        "TimeZone":"UTC -5 to -10#1#5#6"
                    }
                ]
            }
        ]
    },
    {
        "DemographicId":7,
        "ParentId":null,
        "Name":"Name#7",
        "Description":"United States of America#7",
        "Area":"9826675#7",
        "Population":"318212000#7",
        "TimeZone":"UTC -5 to -10#7",
        "__children__":[
            {
                "DemographicId":8,
                "ParentId":7,
                "Name":"Name#7#8",
                "Description":"United States of America#7#8",
                "Area":"9826675#7#8",
                "Population":"318212000#7#8",
                "TimeZone":"UTC -5 to -10#7#8"
            },
            {
                "DemographicId":9,
                "ParentId":7,
                "Name":"Name#7#9",
                "Description":"United States of America#7#9",
                "Area":"9826675#7#9",
                "Population":"318212000#7#9",
                "TimeZone":"UTC -5 to -10#7#9"
            },
            {
                "DemographicId":10,
                "ParentId":7,
                "Name":"Name#7#10",
                "Description":"United States of America#7#10",
                "Area":"9826675#7#10",
                "Population":"318212000#7#10",
                "TimeZone":"UTC -5 to -10#7#10",
                "__children__":[
                    {
                        "DemographicId":11,
                        "ParentId":10,
                        "Name":"Name#7#10#11",
                        "Description":"United States of America#7#10#11",
                        "Area":"9826675#7#10#11",
                        "Population":"318212000#7#10#11",
                        "TimeZone":"UTC -5 to -10#7#10#11"
                    }
                ]
            }
        ]
    }
];
            }]
    );
})();
