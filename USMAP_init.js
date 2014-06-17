$(function(){
    
// init the state picker (jvectormap)
	var click_map = $('#mapdiv').vectorMap({
    		map: 'map',
    		backgroundColor: '#fff', 
    		zoomOnScroll: false,
    		zoomButtons:false,
    		regionsSelectable: true,
    		regionStyle: {
    			 initial: {
    			    fill: 'transparent',
    			  },
    			  hover: {
    				fill: 'red',
    			    "fill-opacity": .1
    			  },
    			  selected: {
    			    fill: 'red',
    			   "fill-opacity": .3
    			  }

    			},
    		onRegionLabelShow: function(e, label, code){		//hide the tooltip
    				e.preventDefault();
			},
    		onRegionSelected: function(event, code, isSelected){
    			if (isSelected == true) {
    				$("#" + code).prop("selected", "selected")
    			} else {
    				$("#" + code).prop("selected", false)
    			}
    		}
    	});

//clear map and selected options    
$('#clearbtn').click(function(event){
		var mapObject = $('#mapdiv').vectorMap('get', 'mapObject'); 
		mapObject.clearSelectedRegions();
		$('#State').val('');
		})
});