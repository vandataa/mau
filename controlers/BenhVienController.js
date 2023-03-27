window.BenhVienController = function($scope,$routeParams){


$scope.kiemtra  = {
    ten : false,
    ngay : false
    
}
$scope.check = function(){
    if(!$scope.inputValue || !$scope.inputValue.ten){
        $scope.kiemtra.ten = true
        
    }
    if(!$scope.inputValue || !$scope.inputValue.ngay){
        $scope.kiemtra.ngay = true
    }
    let c = ($scope.gt==1)?' Ông ':' Bà ';
    let a = $scope.inputValue.ten;
    let n = $routeParams.name ;
    var s = $scope.bac
    let sotien = 0
    if($scope.bac==1){
        
        sotien = 700;
    }
    if($scope.bac==2){
        sotien = 1200;
    }
    if($scope.bac==3){
        sotien= 1800;
    }
    let tt = 0;
    let ngaynamvien = $scope.inputValue.ngay
    if($routeParams.name == 'nhanvien'){
        let t = sotien*2;
        n = 'Nhân viên'
        tt = ngaynamvien * t 
    }   
    if($routeParams.name == 'canbo'){
        let t = sotien*3;
        n = 'Cán bộ'
        tt = ngaynamvien * t 
    }
    if($routeParams.name == 'quanli'){
        let t = sotien*4;
        n = 'Quản lí'
        tt = ngaynamvien * t 
    }
    console.log(ngaynamvien)
    $scope.gennder = c + ' ' + a + ' Là ' +n+ ' Bậc ' +s +' Được Tri Trả '+ tt + ' Cho ' +ngaynamvien +' ngày nằm viện'  ;
}

    
}