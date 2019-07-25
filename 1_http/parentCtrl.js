
module.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope, $http, $q) {

    $scope.todos = []
    this.x

    let p = $http.get("https://jsonplaceholder.typicode.com/posts")
    p.then( (resp) => {
        // happens in the future - when the responsee will come back!

        console.log(resp.data)

        $scope.todos = resp.data

    }, (err) => {
        console.log(`ERROR === ${err}`)   
    }
    )

}
