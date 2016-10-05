var Home=Vue.extend({template:"#featuredTemplate",data:function(){return{loaded:!1,menu:!1,playing:!1}},methods:{playAudio:function(){this.playing?($(".mpaudio__player").get(0).pause(),$(".mpcard__back > i").removeClass("fa-pause").addClass("fa-play-circle")):($(".mpaudio__player").get(0).play(),$(".mpcard__back > i").removeClass("fa-play-circle").addClass("fa-pause")),this.playing=!this.playing}},mounted:function(){this.$nextTick(function(){function e(){var e=t.height(),o=t.scrollTop()+150,i=o+e-150;$.each(n,function(){var e=$(this),n=e.outerHeight(),t=e.offset().top,s=t+n;s>=o&&t<=i?e.addClass("mpfadein--active"):e.removeClass("mpfadein--active")})}$(".main-entry").addClass("main-entry--return-home"),$(".main-entry").removeClass("main-entry--open-all main-entry--open-featured main-entry--open-music main-entry--open-gallery main-entry--open-laboratory"),$("#circle-bottom-bg").on("mouseenter",function(){$(".logo").removeClass("circle-top-run circle-right-run circle-left-run").width(),$(".logo").addClass("circle-bottom-run")}),$("#circle-left-bg").on("mouseenter",function(){$(".logo").removeClass("circle-top-run circle-right-run circle-bottom-run").width(),$(".logo").addClass("circle-left-run")}),$("#circle-right-bg").on("mouseenter",function(){$(".logo").removeClass("circle-top-run circle-bottom-run circle-left-run").width(),$(".logo").addClass("circle-right-run")}),$("#circle-top-bg").on("mouseenter",function(){$(".logo").removeClass("circle-right-run circle-bottom-run circle-left-run").width(),$(".logo").addClass("circle-top-run")}),$(".feat-featured").click(function(){var e=$(".router-contents");$("html,body").animate({scrollTop:e.offset().top},"slow")}),$(".circle-left-run svg").click(function(){router.push({path:"/music"})});var o=this;$(".header__menu-item").click(function(){o.menu?($("body").removeClass("show-nav"),$(".header__menu-item").html("&#9776;")):($("body").addClass("show-nav"),$(".header__menu-item").html("&#x2715;")),o.menu=!o.menu}),$(".header-nav__a").click(function(){$("body").removeClass("show-nav"),$(".header__menu-item").html("&#9776;"),o.menu=!o.menu}),$("html, body").scrollTop(0);var n=(new Rellax(".rellax"),$(".mpfadein")),t=$(window);t.on("scroll resize",e),t.trigger("scroll")})}}),Music=Vue.extend({template:"#musicTemplate",data:function(){return{loaded:!1,playing:!1,posts:[{title:"Infexious",slug:"infexious",image:"/dist/img/album-1.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Kinetic",slug:"kinetic",image:"/dist/img/album-2.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Seasons",slug:"seasons",image:"/dist/img/album-3.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Odyssey",slug:"odyssey",image:"/dist/img/album-4.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Nuvo",slug:"nuvo",image:"/dist/img/album-5.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Giving Light 2015",slug:"giving-light-2015",image:"/dist/img/album-6.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Giving Light 2014",slug:"giving-light-2014",image:"/dist/img/album-7.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Archetype",slug:"archetype",image:"/dist/img/album-8.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Giving Light  2013",slug:"giving-light-2013",image:"/dist/img/album-9.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Mariposa",slug:"mariposa",image:"/dist/img/album-10.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Rhythmology",slug:"rythmology",image:"/dist/img/album-11.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Elements",slug:"elements",image:"/dist/img/album-12.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Aegis",slug:"aegis",image:"/dist/img/album-13.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Code Among Chaos",slug:"code-among-chaos",image:"/dist/img/album-14.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"},{title:"Voices of the Moon",slug:"voices-of-the-moon",image:"/dist/img/album-15.png",content:"<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there's anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don't have to speak she defends me A drunkard's dream if I ever did see one</p>"}]}},methods:{openAlbum:function(e){var o="/music/"+e;router.push({path:o})},playAudio:function(){this.playing?($(".mpaudio__player").get(0).pause(),$(".mpcard__back > i").removeClass("fa-pause").addClass("fa-play-circle")):($(".mpaudio__player").get(0).play(),$(".mpcard__back > i").removeClass("fa-play-circle").addClass("fa-pause")),this.playing=!this.playing},preload:function(e,o){var n,t,i=0;for(n=0,t=e.length;n<t;n++)!function(n,t){n.onload=function(){++i==e.length&&o&&o()},n.onerror=function(){},n.onabort=function(){},n.src=t}(new Image,e[n])}},mounted:function(){this.$nextTick(function(){document.body.style.overflow="hidden";var e=["/dist/img/icon-amazon.png","/dist/img/icon-spotify.png","/dist/img/icon-itunes.png"];this.posts.forEach(function(o){e.push(o.image)});var o=this;this.preload(e,function(){function e(){var e=t.height(),o=t.scrollTop()+150,i=o+e-150;$.each(n,function(){var e=$(this),n=e.outerHeight(),t=e.offset().top,s=t+n;s>=o&&t<=i?e.addClass("mpfadein--active"):e.removeClass("mpfadein--active")})}o.loaded=!0,document.body.style.overflow="auto",$(".main-entry").addClass("main-entry--return-home"),$(".main-entry").removeClass("main-entry--open-all main-entry--open-featured main-entry--open-music main-entry--open-gallery main-entry--open-laboratory"),$(".main-entry").removeClass("main-entry--return-home"),$(".main-entry").addClass("main-entry--open-all main-entry--open-music"),$(".logo").removeClass("circle-right-run circle-left-run circle-bottom-run circle-top-run").width(),$(".mpgal__item img").hover(function(){$(".mpgal").addClass("mpgal--hovered")},function(){$(".mpgal").removeClass("mpgal--hovered")}),$("html, body").scrollTop(0);var n=(new Rellax(".rellax"),$(".mpfadein")),t=$(window);t.on("scroll resize",e),t.trigger("scroll")})})}}),Gallery=Vue.extend({template:"<h1>Gallery</h1>",data:function(){return{loaded:!1}},mounted:function(){this.$nextTick(function(){$(".main-entry").addClass("main-entry--return-home"),$(".main-entry").removeClass("main-entry--open-all main-entry--open-featured main-entry--open-music main-entry--open-gallery main-entry--open-laboratory"),$(".main-entry").removeClass("main-entry--return-home"),$(".main-entry").addClass("main-entry--open-all main-entry--open-gallery"),$(".logo").removeClass("circle-right-run circle-left-run circle-bottom-run circle-top-run").width(),$("html, body").scrollTop(0);new Rellax(".rellax");this.loaded=!0})}}),Laboratory=Vue.extend({template:"<h1>Laboratory</h1>",data:function(){return{loaded:!1}},mounted:function(){this.$nextTick(function(){$(".main-entry").addClass("main-entry--return-home"),$(".main-entry").removeClass("main-entry--open-all main-entry--open-featured main-entry--open-music main-entry--open-gallery main-entry--open-laboratory"),$(".main-entry").removeClass("main-entry--return-home"),$(".main-entry").addClass("main-entry--open-all main-entry--open-laboratory"),$(".logo").removeClass("circle-right-run circle-left-run circle-bottom-run circle-top-run").width(),$("html, body").scrollTop(0);new Rellax(".rellax")})}}),Album=Vue.extend({template:"#albumTemplate",data:function(){return{post:{title:"",content:"",image:"",slug:""}}},beforeDestroy:function(){$(".mpmodal").removeClass("mpmodal--active"),document.body.style.overflow="auto"},methods:{closeAlbum:function(){router.push({path:"/music"})}},mounted:function(){this.$nextTick(function(){var e=this,o=this.$parent.posts.filter(function(o){return o.slug==e.$route.params.slug});console.log(o[0]),this.post=Object.assign({},{content:o[0].content,image:o[0].image,slug:o[0].slug,title:o[0].title}),console.log(this.post),$(".mpmodal").addClass("mpmodal--active"),document.body.style.overflow="hidden",$(document).keyup(function(e){27==e.keyCode&&router.push({path:"/music"})}),$(".mpmodal__exit").click(function(){console.log("exit"),e.closeAlbum()})})}}),router=new VueRouter({mode:"history",routes:[{path:"/",component:Home},{path:"/index.html",component:Home},{path:"/music",component:Music,children:[{path:":slug",component:Album}]},{path:"/gallery",component:Gallery},{path:"/laboratory",component:Laboratory}]}),app=new Vue({router:router}).$mount("#app");