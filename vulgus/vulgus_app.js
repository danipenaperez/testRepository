
function vulgus_app_init(){
var exploreSessionsViewGrid = new laurbe.View({
				menuName:'ShowGrid',
				items:[
					new laurbe.Grid({
						items:[
							new laurbe.Row({
								items:[
									new laurbe.Column({
										items:[
											new laurbe.Card({
													title:'And Justice For All',
													text:'Full Album Cover session',
													footMessage:'Metal, Metallica',
													img:{
														src: 'https://www.thomann.de/pics/bdb/128185/12948444_800.jpg',
														alt: 'Metallic Aftenoon'
													}
												})
										]
									}),
									new laurbe.Column({
										items:[
											new laurbe.Card({
													title:'Anthrax',
													text:'Anthrax embematic Songs for destruction!! ',
													footMessage:'Metal, Anthrax',
													img:{
														src: 'https://images.backstreetmerch.com/images/products/bands/misc/anth/bsi_anth17.jpg',
														alt: 'Anthrax tribute'
													},
													onclick: function(){
														alert('me han clickado Anthrax');
													}
												})
										]
									})
								]
							}),
							new laurbe.Row({
								items:[
									new laurbe.Column({
										items:[
											new laurbe.Card({
													title:'And Justice For All',
													text:'Full Album Cover session',
													footMessage:'Metal, Metallica',
													img:{
														src: 'https://www.thomann.de/pics/bdb/128185/12948444_800.jpg',
														alt: 'Metallic Aftenoon'
													},
													onclick: function(){
														alert('me han clickado andjustice');
													}
												})
										]
									}),
									new laurbe.Column({
										items:[
											new laurbe.Card({
													title:'And Justice For All',
													text:'Full Album Cover session',
													footMessage:'Metal, Metallica',
													img:{
														src: 'https://www.thomann.de/pics/bdb/128185/12948444_800.jpg',
														alt: 'Metallic Aftenoon'
													}
												})
										]
									})
								]
							}),
							new laurbe.Row({
								items:[
									new laurbe.Column({
										items:[
											new laurbe.Card({
													title:'And Justice For All',
													text:'Full Album Cover session',
													footMessage:'Metal, Metallica',
													img:{
														src: 'https://www.thomann.de/pics/bdb/128185/12948444_800.jpg',
														alt: 'Metallic Aftenoon'
													}
												})
										]
									}),
									new laurbe.Column({
										items:[
											new laurbe.Card({
													title:'un poco de pis',
													text:'Hacer caca',
													footMessage:'Metal, Metallica',
													img:{
														src: 'https://www.thomann.de/pics/bdb/128185/12948444_800.jpg',
														alt: 'Metallic Aftenoon'
													}
												})
										]
									})
								]
							}),
							new laurbe.Row({
								items:[
									new laurbe.Column({
										items:[
											new laurbe.Card({
													title:'And Justice For All',
													text:'Miguel Miguel',
													footMessage:'Metal, Metallica',
													img:{
														src: 'https://www.thomann.de/pics/bdb/128185/12948444_800.jpg',
														alt: 'Metallic Aftenoon'
													}
												})
										]
									}),
									new laurbe.Column({
										items:[
											new laurbe.Card({
													title:'And Justice For All',
													text:'Paco paco',
													footMessage:'Metal, Metallica',
													img:{
														src: 'https://www.thomann.de/pics/bdb/128185/12948444_800.jpg',
														alt: 'Metallic Aftenoon'
													}
												})
										]
									})
								]
							})
						]
					})
				]
			});



var exploreSessionsView = new laurbe.View({
				menuName:'Explore',
				items:[
					new laurbe.Container({
						childsWrapperStyle:'text-align:center',
						items:[
							new laurbe.ButtonGroup({
								items:[
									new laurbe.Button({
										text:'Zone',
										onclick:function(_self){
											console.log(this);
											alert('filtering by Zone');
											var dialog = new laurbe.ModalDialog({
															message:'hola caracola'
														});
											console.log('y soy');
											console.log(dialog);
											dialog.render();
											dialog.show();
										}
									}),
									new laurbe.Button({
										text:'Open Sessions',
										onclick:function(_self){
											alert('filtering by Sessions');
										}
									}),
									new laurbe.Button({
										text:'Date',
										onclick:function(_self){
											alert('filtering by Date');
										}
									}),
									new laurbe.Button({
										text:'Genre',
										onclick:function(_self){
											alert('filtering by Genre');
										}
									})
								]
							})
						]
					}),
					new laurbe.Container({
							items:[
								new laurbe.CardGroup({
											items: [
												new laurbe.Card({
													title:'And Justice For All',
													text:'Full Album Cover session',
													footMessage:'Metal, Metallica',
													img:{
														src: 'https://www.thomann.de/pics/bdb/128185/12948444_800.jpg',
														alt: 'Metallic Aftenoon'
													}
												}),
												new laurbe.Card({
													title:'Anthrax',
													text:'Anthrax embematic Songs for destruction!! ',
													footMessage:'Metal, Anthrax',
													img:{
														src: 'https://images.backstreetmerch.com/images/products/bands/misc/anth/bsi_anth17.jpg',
														alt: 'Anthrax tribute'
													}
												}),
												new laurbe.Card({
													title:'Anthrax',
													text:'Anthrax embematic Songs for destruction!! ',
													footMessage:'Metal, Anthrax',
													img:{
														src: 'https://images.backstreetmerch.com/images/products/bands/misc/anth/bsi_anth17.jpg',
														alt: 'Anthrax tribute'
													}
												}),
												new laurbe.Card({
													title:'Anthrax',
													text:'Anthrax embematic Songs for destruction!! ',
													footMessage:'Metal, Anthrax',
													img:{
														src: 'https://images.backstreetmerch.com/images/products/bands/misc/anth/bsi_anth17.jpg',
														alt: 'Anthrax tribute'
													}
												})
											]
								})
							]

					}),
					new laurbe.Container({
							items:[
								new laurbe.CardGroup({
											items: [
												new laurbe.Card({
													title:'Anthrax',
													text:'Anthrax embematic Songs for destruction!! ',
													footMessage:'Metal, Anthrax',
													img:{
														src: 'https://images.backstreetmerch.com/images/products/bands/misc/anth/bsi_anth17.jpg',
														alt: 'Anthrax tribute'
													}
												}),
												new laurbe.Card({
													title:'Blues Night',
													text:'Some blues  ',
													footMessage:'Blues at Madrid',
													img:{
														src: 'http://xiringuitomarino.com/wp-content/uploads/2017/06/blu.jpg',
														alt: 'Blues Jam Session'
													}
												})
											]
								})
							]

					}),
					new laurbe.Container({
							items:[
								new laurbe.CardGroup({
											items: [
												new laurbe.Card({
													title:'Blues Night',
													text:'Some blues  ',
													footMessage:'Blues at Madrid',
													img:{
														src: 'http://xiringuitomarino.com/wp-content/uploads/2017/06/blu.jpg',
														alt: 'Blues Jam Session'
													}
												})
											]
								})
							]

					}),
					new laurbe.Container({
							items:[
								new laurbe.CardGroup({
											items: [
												new laurbe.Card({
													title:'And Justice For All',
													text:'Full Album Cover session',
													footMessage:'Metal, Metallica',
													img:{
														src: 'https://www.thomann.de/pics/bdb/128185/12948444_800.jpg',
														alt: 'Metallic Aftenoon'
													}
												}),
												new laurbe.Card({
													title:'Blues Night',
													text:'Some blues  ',
													footMessage:'Blues at Madrid',
													img:{
														src: 'http://xiringuitomarino.com/wp-content/uploads/2017/06/blu.jpg',
														alt: 'Blues Jam Session'
													}
												})
											]
								})
							]

					})
				]
});

var mySessionsView = new laurbe.View({
				menuName:'My Sessions',
				items:[
					new laurbe.Container({
							items:[
								new laurbe.CardGroup({
											items: [
												new laurbe.Card({
													title:'And Justice For All',
													text:'Full Album Cover session',
													footMessage:'Metal, Metallica',
													img:{
														src: 'https://www.thomann.de/pics/bdb/128185/12948444_800.jpg',
														alt: 'Metallic Aftenoon'
													}
												})
											]
								})
							]

					}),
					new laurbe.Container({
							items:[
								new laurbe.CardGroup({
											items: [
												new laurbe.Card({
													title:'And Justice For All',
													text:'Full Album Cover session',
													footMessage:'Metal, Metallica',
													img:{
														src: 'https://www.thomann.de/pics/bdb/128185/12948444_800.jpg',
														alt: 'Metallic Aftenoon'
													}
												})
											]
								})
							]

					}),
					new laurbe.Container({
							items:[
								new laurbe.CardGroup({
											items: [
												new laurbe.Card({
													title:'And Justice For All',
													text:'Full Album Cover session',
													footMessage:'Metal, Metallica',
													img:{
														src: 'https://www.thomann.de/pics/bdb/128185/12948444_800.jpg',
														alt: 'Metallic Aftenoon'
													}
												})
											]
								})
							]

					})
				]
});
var detailedSession = new laurbe.View({
				menuName:'Detailed Session',
				items:[
					new laurbe.Container({
							items:[
								new laurbe.CardGroup({
											items: [
												new laurbe.Card({
													title:'And Justice For All',
													text:'Full Album Cover session',
													footMessage:'Metal, Metallica',
													img:{
														src: 'https://www.thomann.de/pics/bdb/128185/12948444_800.jpg',
														alt: 'Metallic Aftenoon'
													},
													items:[
														new laurbe.CommentsGroup({
																	title:'Set List',
																	id:'detailedSessionSetList',
																	items:[
																		new laurbe.Comment({
																			 title:'Manolo',
																			 items:[
																					 new laurbe.SpotifyAudio({
																						src: 'https://open.spotify.com/embed/track/32OlwWuMpZ6b0aN2RZOeMS'
																					 }),
																					 new laurbe.SpotifyAudio({
																						src: 'https://open.spotify.com/embed/track/69kOkLUCkxIZYexIgSG8rq'
																					 }),
																					 new laurbe.SpotifyAudio({
																						src: 'https://open.spotify.com/embed/track/1BECwm5qkaBwlbfo4kpYx8'
																					 }),
																					 new laurbe.SpotifyAudio({
																						src: 'https://open.spotify.com/embed/track/78XG7U0UueeC86XpzF9O7f'
																					 })
																					 
																			 ]
																		})
																	]
														}),
														new laurbe.Button({
																						text:'boton 11!!',
																						span:{
																							text:'4'
																						},
																						onclick:function(){
																							
																							var setListWrapper = laurbe.Directory['detailedSessionSetList'];
																							
																							setListWrapper.appendChilds([
																									new laurbe.SpotifyAudio({
																											id:'newSong',
																											src: 'https://open.spotify.com/embed/track/78XG7U0UueeC86XpzF9O7f'
																										 })	
																								], true);

																							laurbe.utils.focusAndScrollToElement('newSong');

																						}
																					}),
														new laurbe.CommentsGroup({
																	title:'Session Comments',
																	items:[
																		new laurbe.Comment({
																			 title:'Manolo',
																			 img:{
																				 src:'http://rs775.pbsrc.com/albums/yy35/PhoenyxStar/link-1.jpg~c200'
																			 },
																			 items:[
																					 new laurbe.YouTubeVideo({
																						src: 'https://www.youtube.com/embed/fA4IHJnKYiw'
																					 })
																			 ]
																		}),
																		new laurbe.Comment({
																			 title:'Daniel',
																			 img:{
																				 src:'https://yt3.ggpht.com/-tO_SdVYSVg8/AAAAAAAAAAI/AAAAAAAAAAA/t089mcHnzD0/s100-mo-c-c0xffffffff-rj-k-no/photo.jpg'
																			 },
																			 text:'Tu opinion me importa una mierda, erres mas feo que yo, maldito imbecil'
																		}),
																		new laurbe.Comment({
																			 title:'Manolo',
																			 img:{
																				 src:'http://rs775.pbsrc.com/albums/yy35/PhoenyxStar/link-1.jpg~c200'
																			 },
																			 text:'Bueno, a mi no me pareces tan feo, pero si que es verdad que te podrias lavar un poco mas, aunque sea en fin de semana.',
																			 items:[
																					 new laurbe.Video({
																							 src: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
																					 })
																			 ]
																		}),
																		new laurbe.Comment({
																			 title:'Daniel',
																			 img:{
																				 src:'https://yt3.ggpht.com/-tO_SdVYSVg8/AAAAAAAAAAI/AAAAAAAAAAA/t089mcHnzD0/s100-mo-c-c0xffffffff-rj-k-no/photo.jpg'
																			 },
																			 text:'Ok, te aviso cuando cambie de opinion'
																		})
																	]
															})

													]
												})
											]
								})
								







							]

					}),
					new laurbe.Container({
							items:[
								
							]

					})
				]
});
var myProfileView = new laurbe.View({
					menuName:'Account',
					items:[

							new laurbe.Layout({
											items: [
												new laurbe.Region({
													text:'',
													items:[
														new laurbe.Form({
															items:[
																new laurbe.Image({
																	img_src: 'https://yt3.ggpht.com/-tO_SdVYSVg8/AAAAAAAAAAI/AAAAAAAAAAA/t089mcHnzD0/s100-mo-c-c0xffffffff-rj-k-no/photo.jpg',
																	alt:'Daniel Peña Perez',
																	onclick: function(){
																		alert('Yeah, Rock Now!');
																	}
																}),
																new laurbe.TextField({
																	label:'Name',
																	value:'Daniel Peña Perez (el "serpiente")'
																}),
																new laurbe.TextField({
																	label:'edad',
																	value:'40'
																}),
																new laurbe.TextField({
																	label:'Score',
																	value:'4/5'
																}),
																new laurbe.TextField({
																	label:'Plays',
																	value:'Guitar, Bass'
																}),
																new laurbe.TextField({
																	label:'Zones',
																	value:'Madrid , Spain'
																})

															]
														})
														
													]
												})
											]
										})
					]
				});				




var app = new laurbe.App({
	title:'Music Arena',
	navBar:{
		brand:{
			logoUrl:'https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-outline.svg'
		},
		searchTool:{
			placeholder:'que estas buscando..?'
		}
	},
	views:[exploreSessionsViewGrid,exploreSessionsView, mySessionsView,detailedSession, myProfileView]
});
app.init();
}