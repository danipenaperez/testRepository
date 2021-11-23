/**
**

var usersView = new View().fromRest("/users")
							.with({initView:'astable',excludedFields:['creditCard']})
							.and()
							.editData('asForm')
							.with({noneditableFields:['id','email','creditcard']});
var cartsView = new View().fromRest("/carts")
							.with({initView:'table'})
							and()
							.editData('asForm').
							with('notEditable');
var app = new App().withStyleDetfauls().usingViews([new View({'users'}),new View({'carts'})]);
**/
laurbe.prototype.App = $.extend({}, laurbe.prototype.BaseAPP, {
	/**
	*
	**/
	instanceProperties:{
		views:[],
		appLayoutTemplate:'classic'
	},
	/**
	* Info about APP Layout templates
	**/
	appLayoutTemplates:{
		classic:{
			scriptId : "appTemplate",
			url: '/html/components/app/appClassicTemplate.html'
		},
		dashboard:{
			scriptId : "appTemplate",
			url: '/html/components/app/appDashboardTemplate.html'
		}
	},	
	
	/**
	* The app main Styles , lok and feel
	**/
	style:{
		icon:'',
		theme:'dark'
	},
	/**
	* Asspcoated security and error views
	**/
	security:{
		errorView:{
			401:null,
			403:null,
			404:null,
			500:null
		}
	},
	/**
	* 
	**/
	views:[],
	/**
	 * Reference for current View
	 */
	currentView:null,
	/**
	* The app menu
	**/
	menu:null,
	/**
	 * The bottom Menu
	 */
	bottomMenu:null,
	/**
	* Footer
	**/
	footer:{
		style:{
			align: 'center'
		},
		elements:[
			/**
			*	The links, the icos, and other laurbe elements
			**/
		]
	},
	/**
	* Builds:
	*	The menu , based on views
	**/
	init:function(){
		//1.Set the views
		this.views = this.instanceProperties.views;
		//2.Build The menu based on views
		this._buildMenu();
		/**
		* Render the menu
		**/
		this._render();

	},
	/**
	* Render the base html structure based on template
	**/
	_render:function(){
		var self = this;

		//Get the selected appLayout
		var appLayoutTemplate = this.appLayoutTemplates[this.instanceProperties.appLayoutTemplate];
		$('#templateManager').load(laurbe.templateManager.templatePath+appLayoutTemplate.url, function(templateString,  ajaxObject, ajaxState){
			//1.Render APP Template
			$('#'+appLayoutTemplate.scriptId).tmpl({}).appendTo('body');

			//2.Render the menu
			self.menu._selectMenuItem(self.menu.instanceProperties.items[0]); //by default select the first
			self.menu._render();
			self.bottomMenu._render();
			

			//3.Render first view
			self._showView(self.views[0]);

			//4.Bind Global Events
			self._bindGlobalEvents(self);

		});
	},
	/**
	* Builds the menu based on views
	**/
	_buildMenu:function(){
		var self=this;
		
		var menuItems = [];
		//Add Items
		$.each(this.instanceProperties.views, function( index, view ) {
			menuItems.push(
					new laurbe.NavBarMenuItem({
						text:view.instanceProperties.menuName,
						selected: false,
						onclick:function(){
							self._showView(view);
						}
					})
			);
		});

		//Build Menus
		this.menu = new laurbe.NavBar({	
				        				renderTo:'appMenuContainer',
										title:this.instanceProperties.title,
										items:menuItems,
          								brand:this.instanceProperties.navBar.brand,
          								searchTool:this.instanceProperties.navBar.searchTool

		});
		this.bottomMenu = new laurbe.NavBarBottom({	
					renderTo:'appMenuFooterContainer',
					title:this.instanceProperties.title,
					items:menuItems,
					brand:this.instanceProperties.navBar.brand,
					searchTool:this.instanceProperties.navBar.searchTool

		});

		return this.menu;
	},
	/**
	*
	**/
	_showView:function(view){
		//alert('limpiando appMainViewContainer');
		if(!view.initialized){
			view._init();
		}
		$('#appMainViewContainer').empty();
		//alert('renderizando view a appMainViewContainer'+view);
		console.log('y la view es ');
		console.log(view);
		this.currentView = view;
		view._renderTo('appMainViewContainer');
	},
	_bindGlobalEvents:function(app){
		// Referencia https://www.yogihosting.com/jquery-infinite-scroll/
		/**	 */
		$(window).scroll(function () {
			// End of the document reached?
			$('#page_height').html($(document).height() );
			$('#this_height').html($(this).height() );
			$('#page_scrolltop').html($(this).scrollTop());
			$('#page_max_height').html($(this).height());
			$('#page_acumulated').html((Math.round($(document).height() - $(this).height())) +' mustbeequalsto '+Math.round($(this).scrollTop()));
			
            let currentHeigth = Math.round($(document).height() - $(this).height());
			let currentScrollTop = Math.round($(this).scrollTop());
			if (currentHeigth === currentScrollTop) {
				alert("detectado infinite scroll");
				app._onInfiniteScrollEvent();
				alert("finalizado infinite scroll");
			}
		});
	

		/**
		window.addEventListener('scroll', () => {
			const {
				scrollTop,
				scrollHeight,
				clientHeight
			} = document.documentElement;
		
			if (scrollTop + clientHeight >= scrollHeight - 5 ) {
				
				//app._onInfiniteScrollEvent();
			}
		}, {
			passive: true
		});
 */
	},
	/**
	 * Catch global on infinite scroll and call to currentView onInfiniteScroll
	 */
	_onInfiniteScrollEvent:function(){
		console.log('app.oninfiniteScroll');
		alert(1);
		this.currentView.onInfiniteScroll(this.currentView);
		alert(12);
	},
	/**
	*
	**/
	start:function(){

	}
		

});


/**
 * Constructor definition
 */
laurbe.App = function APP(args){
	
	/** Init values for laurbe.navBar **/
	var defaults = {
			/**
			 *  the App title and name
			**/
			title: 'My App',
			appLayoutTemplate:'classic'
	};
	
	/** Extends Defautls with args constructor **/
	var initializationProps = $.extend({}, defaults, args);

	/**Sitio Id **/
	//initializationProps.id =  initializationProps.id || laurbe.utils.getIdFor(laurbe.prototype.Layout.type) ;

	/** Return the instance **/
	var instance = $.extend({}, laurbe.prototype.App, {instanceProperties:initializationProps});


	return instance;
}