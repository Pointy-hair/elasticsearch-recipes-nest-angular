﻿(function () {
    app.controller('MoreLikeThisController', ['$state', '$stateParams', 'searchData', function ($state, $stateParams, searchData) {

        var vm = this;
        vm.searchData = searchData;
        vm.currentRecipe = $stateParams.recipe;

        vm.switchPage = function () {

            var params = {
                id: $stateParams.id,
                page: vm.searchData.page,
                recipe: vm.currentRecipe,
                pageSize: $stateParams.pageSize
            };

            $state.go('recipes.morelikethis', params);
        };
    }])
})();