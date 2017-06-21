var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

	var count = 0;
	//sessionStorage.setItem("red",0);
	//sessionStorage.setItem("blue",0);
	$scope.redCount = sessionStorage.getItem("red");
	$scope.blueCount = sessionStorage.getItem("blue");

    $scope.items = 
    [
    	{
    		"value" : 1,
    		"styleObj" : {},
    		"ngDisabled" : false 
    	},
    	{
    		"value" : 2,
    		"styleObj" : {},
    		"ngDisabled" : false 
    	},
    	{
    		"value" : 3,
    		"styleObj" : {},
    		"ngDisabled" : false 
    	},
    	{
    		"value" : 4,
    		"styleObj" : {},
    		"ngDisabled" : false 
    	},
    	{
    		"value" : 5,
    		"styleObj" : {},
    		"ngDisabled" : false 
    	},
    	{
    		"value" : 6,
    		"styleObj" : {},
    		"ngDisabled" : false 
    	},
    	{
    		"value" : 7,
    		"styleObj" : {},
    		"ngDisabled" : false 
    	},
    	{
    		"value" : 8,
    		"styleObj" : {},
    		"ngDisabled" : false 
    	},
    	{
    		"value" : 9,
    		"styleObj" : {},
    		"ngDisabled" : false 
    	}

    ];

    $scope.setFunc = function(item){

    	//console.log(item.value)

    if(item.ngDisabled == false){	
    	//console.log(count);
    	if( count % 2 == 0){
	    	item.styleObj = {
	    		"background-color" : "red"
	    	}
    	}else{
    		item.styleObj = {
	    		"background-color" : "blue"
	    	}
    	}
    	count++;
    	item.ngDisabled = true;
    	$scope.checkWinner();
    }

    }

    $scope.checkWinner = function(){
    	if(($scope.items[0].styleObj["background-color"] == $scope.items[1].styleObj["background-color"]) && ($scope.items[0].styleObj["background-color"]==$scope.items[2].styleObj["background-color"]))
    	{ 
    	  if($scope.items[0].styleObj["background-color"] != undefined){
    	  	console.log("hello");
    	  	$scope.setScore($scope.items[0].styleObj["background-color"]);

    	  	alert($scope.items[0].styleObj["background-color"] + " is winner");
    	  	location.reload();
    	  }	
    	}
    	else if(($scope.items[0].styleObj["background-color"] == $scope.items[3].styleObj["background-color"]) && ($scope.items[3].styleObj["background-color"]==$scope.items[6].styleObj["background-color"]))
    	{
    		if($scope.items[0].styleObj["background-color"] != undefined)	{	
    			$scope.setScore($scope.items[0].styleObj["background-color"]);
    	  alert($scope.items[0].styleObj["background-color"] + " is winner");
    	  location.reload();
    	}	
    	}
    	else if(($scope.items[0].styleObj["background-color"] == $scope.items[4].styleObj["background-color"]) && ($scope.items[4].styleObj["background-color"]==$scope.items[8].styleObj["background-color"]))
    	{		
    		if($scope.items[0].styleObj["background-color"] != undefined){
    			$scope.setScore($scope.items[0].styleObj["background-color"]);
    	  alert($scope.items[0].styleObj["background-color"] + " is winner");
    	  location.reload();
    	}	
    	}
    	else if(($scope.items[1].styleObj["background-color"] == $scope.items[4].styleObj["background-color"]) && ($scope.items[1].styleObj["background-color"]==$scope.items[7].styleObj["background-color"]))
    	{
    	if($scope.items[1].styleObj["background-color"] != undefined){	
    	$scope.setScore($scope.items[1].styleObj["background-color"]);	
    	  alert($scope.items[1].styleObj["background-color"] + " is winner");
    	  location.reload();}	
    	}
    	else if(($scope.items[2].styleObj["background-color"] == $scope.items[5].styleObj["background-color"]) && ($scope.items[5].styleObj["background-color"]==$scope.items[8].styleObj["background-color"]))
    	{		
    		if($scope.items[2].styleObj["background-color"] != undefined){
    			$scope.setScore($scope.items[2].styleObj["background-color"]);
    	  alert($scope.items[2].styleObj["background-color"] + " is winner");
    	  location.reload();}	
    	}
    	else if(($scope.items[2].styleObj["background-color"] == $scope.items[4].styleObj["background-color"]) && ($scope.items[4].styleObj["background-color"]==$scope.items[6].styleObj["background-color"]))
    	{		
    		if($scope.items[2].styleObj["background-color"] != undefined){
    			$scope.setScore($scope.items[2].styleObj["background-color"]);
    	  alert($scope.items[2].styleObj["background-color"] + " is winner");
    	  location.reload();
    	}	
    	}
    	else if(($scope.items[3].styleObj["background-color"] == $scope.items[4].styleObj["background-color"]) && ($scope.items[4].styleObj["background-color"]==$scope.items[5].styleObj["background-color"]))
    	{	
    	if($scope.items[3].styleObj["background-color"] != undefined){	
    		$scope.setScore($scope.items[3].styleObj["background-color"]);
    	  alert($scope.items[3].styleObj["background-color"] + " is winner");	
    	  location.reload();
    	}
    	}
    	else if(($scope.items[6].styleObj["background-color"] == $scope.items[7].styleObj["background-color"]) && ($scope.items[7].styleObj["background-color"]==$scope.items[8].styleObj["background-color"]))
    	{	
    	if($scope.items[6].styleObj["background-color"] != undefined){	
    		$scope.setScore($scope.items[6].styleObj["background-color"]);
    	  alert($scope.items[6].styleObj["background-color"] + " is winner");	
    	location.reload();}
    	}
    	else if(count == 9)
    	{
    		alert("Match is drawn");
    		location.reload();
    	}

    }

    $scope.setScore = function(color){
    	console.log(color);
    	console.log(sessionStorage.getItem(color));
    	if(sessionStorage.getItem(color) == null){
    		 sessionStorage.setItem(color,0);
    	}
    	var oldScore = parseInt(sessionStorage.getItem(color));
    	console.log("oldScore",oldScore);
    		sessionStorage.setItem(color,oldScore+1);
    	

    	console.log(sessionStorage);
    	$scope.redCount = sessionStorage.getItem("red");
	$scope.blueCount = sessionStorage.getItem("blue");
    }
});