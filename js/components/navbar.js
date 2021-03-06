/**
 * Prototype Definition 
 */
laurbe.prototype.NavBar = $.extend({}, laurbe.BaseViewElement, {
	/**
	* String type definition
	**/
	type: 'navBar',
	/**
	* This object is from template, so this is the template info
	**/
	template: {
				scriptId : "navbarWrapperTemplate",
				url: '/html/components/navBar/navBarTemplate.html'
	},
	/**
	* Force a click over a item menu
	**/
	_selectMenuItem:function(menuItem){
		$.each(this.instanceProperties.items, function( index, item ) {
			if(menuItem.instanceProperties.id == item.instanceProperties.id){
				item.setActive(true);
			}else{
				item.setActive(false);
			}
		});
	},
	/**
	* Return the div Id where the child element must be append
	**/
	_getRenderChildWrapperId:function(){
		return this.id+'_childsWrapper';
	},
	onChildItemEvent:function (eventType, event, eventItem){
		console.log(eventItem.id+ ' me avisa que le han clickado ');
		console.log('sus hermanos son ');
		console.log(this.instanceProperties.items);
		$.each(this.instanceProperties.items, function( index, item ) {
		  		if(item.id==eventItem.id){
			  		item.setActive(true);
			  	}else{
			  		item.setActive(false);
			  	}
		});
	},
	/**
	* Clicked and MenuItemDlement
	**/
	onclickHandler: function(ev){
		console.log('soy navBar y me han pulsado');
		/**
		var currentObject = laurbe.Directory[ev.currentTarget.id.replace('Wrapper','')];
		if(currentObject.instanceProperties.onclick){
			currentObject.instanceProperties.onclick(ev);
		}else{
			console.log('no hay event definido para '+currentObject.id);
		}
		
		console.log(ev);
		console.log(ev.currentTarget.id);
		self = laurbe.Directory[ev.currentTarget.id];
		console.log(self.instanceProperties.items);
		$.each(self.instanceProperties.items, function( index, item ) {
					  	item.setActive();
					});
		**/
		
	}

});


/**
 * Constructor definition
 */
laurbe.NavBar = function NavBar(args){
	
	/** Init values for laurbe.navBar **/
	var navBarDefaults = {
			title:'defaultTitle',
			wrapper:{
				tag:'<div>'
			},
			brand:{
				logoUrl:'https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-outline.svg'
			},
			fixedTop:false,
			//bg_color: 'bg-dark',  
			items: []
	};
	
	/** Extends Defautls with args constructor **/
	var initializationProps = $.extend({}, navBarDefaults, args);

	/**Sitio Id **/
	initializationProps.id =  initializationProps.id || laurbe.utils.getIdFor(laurbe.prototype.NavBar.type) ;
	
	/** Return the instance **/
	var instance = $.extend({}, laurbe.prototype.NavBar, {instanceProperties:initializationProps});
	

	
	return instance;
}