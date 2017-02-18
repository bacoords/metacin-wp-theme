function smoothScrollInit(){$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html, body").animate({scrollTop:e.offset().top},1e3),!1}})})}function animFeatActive(e){var t=e+" > .feat__inner > h2",o=new TimelineMax;return o.add(TweenMax.to(e,.3,{x:0,y:0,z:0,rotationY:0,scale:1,width:"100%",height:"100vh",delay:0})),o.add(TweenMax.to(t,0,{y:"1000px",delay:0})),o.add(TweenMax.to(e,0,{className:"+=feat--active",delay:.9})),o.add(TweenMax.to(t,.3,{y:"-100px",delay:0})),o}function mpFadeIn(){var e=$(window),t=$(".mpfadein"),o=e.height(),n=e.scrollTop()+200,i=n+o-150;$.each(t,function(){var e=$(this),t=e.outerHeight(),o=e.offset().top,s=o+t;s>=n&&o<=i?e.addClass("mpfadein--active"):e.removeClass("mpfadein--active")})}function setDocTitle(e){e?document.title=e+" | Metacin - Beyond Medicin":document.title="Metacin - Beyond Medicine"}var controller=new ScrollMagic.Controller,mixin={methods:{preload:function(e,t){var o,n,i=0;for(o=0,n=e.length;o<n;o++)!function(o,n){o.onload=function(){++i==e.length&&t&&t()},o.onerror=function(){},o.onabort=function(){},o.src=n}(new Image,e[o])}},computed:{isLoading:function(){return this.$store.state.loading}}};const store=new Vuex.Store({state:{loading:!0},mutations:{loadingOn:function(e){e.loading=!0,document.body.classList.add("no-scroll")},loadingOff:function(e){e.loading=!1,document.body.classList.remove("no-scroll")}}});var Home=Vue.extend({template:"#featuredTemplate",store:store,mixins:[mixin],data:function(){return{menu:!1,playing:!1,feat:[]}},methods:{playAudio:function(){$(".mpcard--music").addClass("hover"),this.playing?($(".mpaudio__player").get(0).pause(),$(".mpcard__back__inner > i").removeClass("fa-pause").addClass("fa-play-circle")):($(".mpaudio__player").get(0).play(),$(".mpcard__back__inner > i").removeClass("fa-play-circle").addClass("fa-pause")),this.playing=!this.playing},isLoading:function(){return this.$store.state.loading}},computed:{},mounted:function(){this.$nextTick(function(){setDocTitle("Welcome"),store.commit("loadingOn");var e=["/dist/img/gallery-8.png","/dist/img/yeaman.png","/dist/img/pexels-2.jpg","/dist/img/neurons.jpg","/dist/img/pexels-1.jpg"],t=this;this.preload(e,function(){store.commit("loadingOff"),$(".header__menu-item").click(function(){t.menu?($("body").removeClass("show-nav"),$("body").addClass("hide-nav"),$(".header__menu-item").html("M")):($("body").addClass("show-nav"),$("body").removeClass("hide-nav"),$(".header__menu-item").html("&#x2715;")),t.menu=!t.menu}),$(".header-nav__a").click(function(){$("body").removeClass("show-nav"),$("body").addClass("hide-nav"),$(".header__menu-item").html("M"),t.menu=!t.menu}),$("html, body").scrollTop(0);var e=$(window);smoothScrollInit(),mpFadeIn(),e.on("scroll resize",mpFadeIn),e.trigger("scroll");Math.floor(4*Math.random());particlesJS("particles",{particles:{number:{value:20,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.3,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:4,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.7,width:2},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})})})}}),Music=Vue.extend({template:"#musicTemplate",store:store,mixins:[mixin],data:function(){return{playing:!1,posts:[{title:"Infexious",slug:"infexious",image:"/dist/img/album-1.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Kinetic",slug:"kinetic",image:"/dist/img/album-2.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Seasons",slug:"seasons",image:"/dist/img/album-3.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Odyssey",slug:"odyssey",image:"/dist/img/album-4.png",content:"<p>Every life is an odyssey – a journey of pathways mirroring will and fate.  Each odyssey is a story of passages:  leaving home – facing challenges – finding courage – being changed – returning home.  In time, each tale is told through setback and loss – chance and victory.  Meaning emerges from quiet rhythms of each moment – and great echoes of each season – in the odyssey of every life.  Embrace your odyssey.</p>",tracks:[{index:"1",title:"Odyssey",time:"5:29"},{index:"2",title:"Wayfarer",time:"5:32"},{index:"3",title:"Conquest",time:"5:31"},{index:"4",title:"Sirens",time:"7:48"},{index:"5",title:"Nightfall",time:"5:57"},{index:"6",title:"Underworld",time:"5:28"},{index:"7",title:"Helios",time:"6:01"},{index:"8",title:"Windsong",time:"5:44"},{index:"9",title:"Homeland",time:"5:42"},{index:"10",title:"Invictus",time:"4:26"}]},{title:"Nuvo",slug:"nuvo",image:"/dist/img/album-5.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Giving Light 2015",slug:"giving-light-2015",image:"/dist/img/album-6.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Giving Light 2014",slug:"giving-light-2014",image:"/dist/img/album-7.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Archetype",slug:"archetype",image:"/dist/img/album-8.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Giving Light  2013",slug:"giving-light-2013",image:"/dist/img/album-9.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Mariposa",slug:"mariposa",image:"/dist/img/album-10.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Rhythmology",slug:"rythmology",image:"/dist/img/album-11.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Elements",slug:"elements",image:"/dist/img/album-12.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Aegis",slug:"aegis",image:"/dist/img/album-13.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Code Among Chaos",slug:"code-among-chaos",image:"/dist/img/album-14.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Voices of the Moon",slug:"voices-of-the-moon",image:"/dist/img/album-15.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"}]}},methods:{openAlbum:function(e){var t="/music/"+e;router.push({path:t})},playAudio:function(){$(".mpcard--music").addClass("hover"),this.playing?($(".mpaudio__player").get(0).pause(),$(".mpcard__back__inner > i").removeClass("fa-pause").addClass("fa-play-circle")):($(".mpaudio__player").get(0).play(),$(".mpcard__back__inner > i").removeClass("fa-play-circle").addClass("fa-pause")),this.playing=!this.playing}},mounted:function(){this.$nextTick(function(){var e=this;setDocTitle("Music Hall"),store.commit("loadingOn");var t=["/dist/img/icon-amazon.png","/dist/img/icon-spotify.png","/dist/img/icon-itunes.png"];e.posts.forEach(function(e){t.push(e.image)}),e.preload(t,function(){store.commit("loadingOff"),$(".mpgal__item img").hover(function(){$(".mpgal").addClass("mpgal--hovered")},function(){$(".mpgal").removeClass("mpgal--hovered")}),$("html, body").scrollTop(0),mpFadeIn();var e=$(window);e.on("scroll resize",mpFadeIn),e.trigger("scroll"),smoothScrollInit()})})}}),Gallery=Vue.extend({template:"#galleryTemplate",store:store,mixins:[mixin],data:function(){return{loaded:!0,posts:[{title:"Earth",slug:"earth",image:"/dist/img/gallery-1.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Sirens",slug:"sirens",image:"/dist/img/gallery-2.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Autumn",slug:"autumn",image:"/dist/img/gallery-3.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Sky",slug:"sky",image:"/dist/img/gallery-4.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Winter",slug:"winter",image:"/dist/img/gallery-5.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Solstice",slug:"solstice",image:"/dist/img/gallery-6.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Obelisk",slug:"obelisk",image:"/dist/img/gallery-7.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Canon in D",slug:"canon-in-d",image:"/dist/img/gallery-8.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"}]}},methods:{},mounted:function(){this.$nextTick(function(){setDocTitle("Eye Gallery");var e=this;store.commit("loadingOn");var t=["/dist/img/icon-amazon.png","/dist/img/icon-spotify.png","/dist/img/icon-itunes.png"];e.posts.forEach(function(e){t.push(e.image)}),e.preload(t,function(){store.commit("loadingOff"),$(".mpgal__item img").hover(function(){$(".mpgal").addClass("mpgal--hovered")},function(){$(".mpgal").removeClass("mpgal--hovered")}),$("html, body").scrollTop(0),mpFadeIn();var e=$(window);e.on("scroll resize",mpFadeIn),e.trigger("scroll"),smoothScrollInit()})})}}),Laboratory=Vue.extend({template:'<div class="coming-soon"><h1>Laboratory</h1><h2>Coming Soon</h2></div>',store:store,mixins:[mixin],data:function(){return{loaded:!1}},mounted:function(){this.$nextTick(function(){setDocTitle("Laboratory");var e=animFeatActive(".feat-laboratory");e.play(),$("html, body").scrollTop(0)})}}),Events=Vue.extend({template:'<div class="coming-soon"><h1>Events</h1><h2>Coming Soon</h2></div>',store:store,mixins:[mixin],data:function(){return{loaded:!1}},mounted:function(){this.$nextTick(function(){setDocTitle("Events");var e=animFeatActive(".feat-events");e.play(),$("html, body").scrollTop(0)})}}),Album=Vue.extend({template:"#albumTemplate",store:store,mixins:[mixin],data:function(){return{post:{title:"",content:"",image:"",slug:""}}},beforeDestroy:function(){$(".mpmodal").removeClass("mpmodal--active"),document.body.classList.remove("no-scroll")},methods:{closeAlbum:function(){router.push({path:"/music"}),setDocTitle("Music Hall")}},mounted:function(){this.$nextTick(function(){var e=this,t=this.$parent.posts.filter(function(t){return t.slug==e.$route.params.slug});console.log(t[0]),this.post=Object.assign({},{content:t[0].content,image:t[0].image,slug:t[0].slug,title:t[0].title,tracks:t[0].tracks}),setDocTitle(this.post.title),$(".mpmodal").addClass("mpmodal--active"),document.body.classList.add("no-scroll"),$(document).keyup(function(e){27==e.keyCode&&router.push({path:"/music"})}),$(".mpmodal__exit").click(function(){console.log("exit"),e.closeAlbum()})})}}),Art=Vue.extend({template:"#artTemplate",store:store,mixins:[mixin],data:function(){return{post:{title:"",content:"",image:"",slug:""}}},beforeDestroy:function(){$(".mpmodal").removeClass("mpmodal--active"),document.body.classList.remove("no-scroll")},methods:{closeAlbum:function(){router.push({path:"/gallery"}),setDocTitle("Eye Gallery")}},mounted:function(){this.$nextTick(function(){function e(){var e=$(".mpalbum__image > img").height()+15;console.log("height",e),$(".mpalbum__progress").height(e+"px"),$(".mpalbum__progress-bar").height(e+"px");var t=$(".mpalbum__image > img").width();console.log("width",t),$(".mpalbum__progress").width(t+"px"),$(".mpalbum__player").bind("play",function(){$(".mpalbum__progress-bar").width("0%")}),$(".mpalbum__player").bind("timeupdate",function(){console.log(this.currentTime),console.log(this.duration),console.log(this.currentTime/this.duration),$(".mpalbum__progress-bar").width(this.currentTime/this.duration*100+"%")})}var t=this,o=this.$parent.posts.filter(function(e){return e.slug==t.$route.params.slug});this.post=Object.assign({},{content:o[0].content,image:o[0].image,slug:o[0].slug,title:o[0].title}),setDocTitle(this.post.title),$(".mpmodal").addClass("mpmodal--active"),document.body.classList.add("no-scroll"),$(document).keyup(function(e){27==e.keyCode&&router.push({path:"/gallery"})}),$(".mpmodal__exit").click(function(){t.closeAlbum()});var n=setInterval(function(){$(".mpalbum__image > img").width()>0&&(e(),clearInterval(n))},100)})},created:function(){}}),router=new VueRouter({mode:"history",routes:[{path:"/",name:"home",component:Home},{path:"/index.html",name:"home",component:Home},{path:"/music",name:"music",component:Music,children:[{path:":slug",component:Album}]},{path:"/gallery",name:"gallery",component:Gallery,children:[{path:":slug",component:Art}]},{path:"/laboratory",name:"laboratory",component:Laboratory},{path:"/events",name:"events",component:Events},{path:"*",redirect:"/"}]}),app=new Vue({router:router}).$mount("#app");