(function($) {
  

  // Define controller
  var controller = new ScrollMagic.Controller();



  // Creates a Smooth Scroll
  function smoothScrollInit(){
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
  }





  // Defines animation for sub-page header when loaded
  function animFeatActive(el){

    var heading = el + ' > .feat__inner > h2';

    var tl = new TimelineMax();
      tl.add(TweenMax.to(el, 0.3, {x:0, y:0, z:0, rotationY: 0, scale: 1, width: '100%', height: '100vh', delay:0}));
      tl.add(TweenMax.to(heading, 0, {y:'1000px', delay:0}));
      tl.add(TweenMax.to(el, 0, {className: '+=feat--active', delay:0.9}));
      tl.add(TweenMax.to(heading, 0.3, {y:'-100px', delay:0}));

    return tl;
  }



  // Adds class to appear on animation
  function mpFadeIn() {

    var $window = $(window);
    var $animation_elements = $('.mpfadein');

    var window_height = $window.height();
    var window_top_position = ($window.scrollTop() + 200);
    var window_bottom_position = (window_top_position + window_height - 150);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
        $element.addClass('mpfadein--active');
      } else {
        $element.removeClass('mpfadein--active');
      }
    });
  }



  // Set page title
  function setDocTitle(title){
    if(title) document.title = title + ' | Metacin - Beyond Medicin';
    else document.title = 'Metacin - Beyond Medicine';
    return
  }



  // Some global Methods
  var mixin = {
    methods: {
      preload : function(pictureUrls, callback) { // Preloads images as new Image()
         var i,
              j,
              loaded = 0;

          for (i = 0, j = pictureUrls.length; i < j; i++) {
              (function (img, src) {
                  img.onload = function () {                               
                      if (++loaded == pictureUrls.length && callback) {
                          callback();
                      }
                  };

                  // Use the following callback methods to debug
                  // in case of an unexpected behavior.
                  img.onerror = function () {};
                  img.onabort = function () {};

                  img.src = src;
              } (new Image(), pictureUrls[i]));
          }
      },
    },
    computed : {
       isLoading : function() {
        return this.$store.state.loading;
      }
    }
  }


  
  //Replace vue-resource with axios
  
  Vue.prototype.$http = axios;



  // VueX Data Store
  const store = new Vuex.Store({
    state : {
      loading : true
    },
    mutations : {
      loadingOn : function(state) {
        state.loading = true;
        document.body.classList.add('no-scroll');
      },
      loadingOff : function(state) {
        state.loading = false;
        document.body.classList.remove('no-scroll');
      }
    }
  });




  // Main Home Component
  var Home = Vue.extend({
    template : '#featuredTemplate',
    store: store,
    mixins : [mixin],
    data: function(){
      return {
        menu : false,
        playing : false,
        feat : []
      }
    }, 
    methods : {
      playAudio : function(){ // Triggers audio
        $('.mpcard--music').addClass('hover');
        if(!this.playing){
          $('.mpaudio__player').get(0).play();  
          $('.mpcard__back__inner > i').removeClass('fa-play-circle').addClass('fa-pause');
        } else {
          $('.mpaudio__player').get(0).pause();
          $('.mpcard__back__inner > i').removeClass('fa-pause').addClass('fa-play-circle');
        }
        this.playing = !this.playing;
        return;
      },
      isLoading : function() { // return store loading
        return this.$store.state.loading; 
      }
    },
    computed : {
    },
    mounted : function(){
      this.$nextTick(function (){


        // Update title
        setDocTitle('Welcome');


        // Turn on loading
        store.commit('loadingOn');


        // Pre Load Images
        var a = ['http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/gallery-8.png','http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/yeaman.png','http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/pexels-2.jpg','http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/neurons.jpg','http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/pexels-1.jpg']; 
        var self = this;
        this.preload(a, function(){


          // Turn off loading
          store.commit('loadingOff');



          // Menu Animations
          $('.header__menu-item').click(function(){
            if(!self.menu){
              $('body').addClass('show-nav');
              $('body').removeClass('hide-nav');
              $('.header__menu-item').html('&#x2715;');
            } else {
              $('body').removeClass('show-nav');
              $('body').addClass('hide-nav');
              $('.header__menu-item').html('M&#9776;');
            } 
            self.menu = !self.menu;
          });

          $('.header-nav__a').click(function(){    
            $('body').removeClass('show-nav');
            $('body').addClass('hide-nav');
            $('.header__menu-item').html('M&#9776;');
            self.menu = !self.menu;
          });


          $('html, body').scrollTop(0);   




          // Parallax.js Init
  //        var parallaxScene = document.getElementById('mpreactive'),
  //          parallaxObj = new Parallax(parallaxScene);

          // Reanimate on Resize
          var $window = $(window);

          // Initialize Smooth Scroll Watcher
          smoothScrollInit();



          // Show featureds on animation
          mpFadeIn();
          $window.on('scroll resize', mpFadeIn);
          $window.trigger('scroll');


          //Colors for Particles
          var colors = [
            '#ffffff',
            '#FF5722',
            '#73156c',
            '#2582a8'
          ];
          var random = Math.floor(Math.random() * (3 + 1));


          // Particles Background
          // Uncomment for Production
           particlesJS("particles", {
             "particles": {
               "number": {
                 "value": 20,
                 "density": {
                   "enable": true,
                   "value_area": 800
                 }
               },
               "color": {
                 "value": '#ffffff',//colors[random]
               },
               "shape": {
                 "type": "circle",
                 "stroke": {
                   "width": 0,
                   "color": "#000000" 
                 },
                 "polygon": {
                   "nb_sides": 5
                 },
                 "image": {
                   "src": "img/github.svg",
                   "width": 100,
                   "height": 100
                 }
               },
               "opacity": {
                 "value": 0.3,
                 "random": false,
                 "anim": {
                   "enable": false,
                   "speed": 1,
                   "opacity_min": 0.1,
                   "sync": false
                 }
               },
               "size": {
                 "value": 4,
                 "random": true,
                 "anim": {
                   "enable": false,
                   "speed": 40,
                   "size_min": 0.1,
                   "sync": false
                 }
               },
               "line_linked": {
                 "enable": true,
                 "distance": 150,
                 "color": '#ffffff', //colors[random],
                 "opacity": 0.7,
                 "width": 2
               },
               "move": {
                 "enable": true,
                 "speed": 6,
                 "direction": "none",
                 "random": false,
                 "straight": false,
                 "out_mode": "out",
                 "bounce": false,
                 "attract": {
                   "enable": false,
                   "rotateX": 600,
                   "rotateY": 1200
                 }
               }
             },
             "interactivity": {
               "detect_on": "canvas",
               "events": {
                 "onhover": {
                   "enable": false,
                   "mode": "repulse"
                 },
                 "onclick": {
                   "enable": false,
                   "mode": "push"
                 },
                 "resize": true
               },
               "modes": {
                 "grab": {
                   "distance": 400,
                   "line_linked": {
                     "opacity": 1
                   }
                 },
                 "bubble": {
                   "distance": 400,
                   "size": 40,
                   "duration": 2,
                   "opacity": 8,
                   "speed": 3
                 },
                 "repulse": {
                   "distance": 200,
                   "duration": 0.4
                 },
                 "push": {
                   "particles_nb": 4
                 },
                 "remove": {
                   "particles_nb": 2
                 }
               }
             },
             "retina_detect": true
           }); 


        });
      });
    }
  });

  var Music = Vue.extend({
    template : '#musicTemplate',
    store: store,
    mixins : [mixin],
    data: function(){
      return {
        playing : false,
        posts : [],
      }
    },
    methods : {
      openAlbum : function(s){
        var p = '/music/' + s;
        router.push({path : p});
        return;
      },
      playAudio : function() {
        $('.mpcard--music').addClass('hover');
        if(!this.playing){
          $('.mpaudio__player').get(0).play();  
          $('.mpcard__back__inner > i').removeClass('fa-play-circle').addClass('fa-pause');
        } else {
          $('.mpaudio__player').get(0).pause();
          $('.mpcard__back__inner > i').removeClass('fa-pause').addClass('fa-play-circle');
        }
        this.playing = !this.playing;
        return;
      },
      
    },
    mounted : function(){
      this.$nextTick(function(){


        var self = this;

       // Update title
        setDocTitle('Music Hall');


        //After animation start loading
        store.commit('loadingOn');

        self.$http.get(wp.root + 'wp/v2/music').then(function(response) {
          
          self.posts = response.data;
          console.log(response.data);
        
            // Create array of images to load
            var a = ['http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/icon-amazon.png','http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/icon-spotify.png','http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/icon-itunes.png']; 
            self.posts.forEach(function(p){
              a.push(p.better_featured_image.source_url);
            });

            self.preload(a, function(){



              // Remove Loader
              store.commit('loadingOff');


              // Add hover effect to gallery
              $('.mpgal__item img').hover(function(){
                $('.mpgal').addClass('mpgal--hovered');
              }, function(){
                $('.mpgal').removeClass('mpgal--hovered');
              });

              //SCROLLTOP on load
              $('html, body').scrollTop(0);


              // Show featureds on animation
              mpFadeIn();
              var $window = $(window);
              $window.on('scroll resize', mpFadeIn);
              $window.trigger('scroll');


              // Initialize Smooth Scroll Watcher
              smoothScrollInit();
            });
          
          }, function(response) {
          
              console.log(response);
          
          });

      });

    }
  });



  var Gallery = Vue.extend({
    template : '#galleryTemplate',
    store: store,
    mixins : [mixin],
    data: function(){
      return {
        loaded : true,
        posts : [
          {
            title : 'Earth',
            slug : 'earth',
            image : 'http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/gallery-1.png',
            content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
          },
          {
            title : 'Sirens',
            slug : 'sirens',
            image : 'http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/gallery-2.png',
            content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
          },
          {
            title : 'Autumn',
            slug : 'autumn',
            image : 'http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/gallery-3.png',
            content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
          },
          {
            title : 'Sky',
            slug : 'sky',
            image : 'http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/gallery-4.png',
            content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
          },
          {
            title : 'Winter',
            slug : 'winter',
            image : 'http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/gallery-5.png',
            content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
          },
          {
            title : 'Solstice',
            slug : 'solstice',
            image : 'http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/gallery-6.png',
            content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
          },
          {
            title : 'Obelisk',
            slug : 'obelisk',
            image : 'http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/gallery-7.png',
            content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
          },
          {
            title : 'Canon in D',
            slug : 'canon-in-d',
            image : 'http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/gallery-8.png',
            content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
          }
        ]
      }
    },
    methods : {},
    mounted : function(){
      this.$nextTick(function(){

       // Update title
        setDocTitle('Eye Gallery');


        var self = this;


        //After animation start loading
        store.commit('loadingOn');



        // Create array of images to load
        var a = ['http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/icon-amazon.png','http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/icon-spotify.png','http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/icon-itunes.png']; 
        self.posts.forEach(function(p){
          a.push(p.image);
        });

        self.preload(a, function(){



          // Remove Loader
          store.commit('loadingOff');


          // Add hover effect to gallery
          $('.mpgal__item img').hover(function(){
            $('.mpgal').addClass('mpgal--hovered');
          }, function(){
            $('.mpgal').removeClass('mpgal--hovered');
          });

          //SCROLLTOP on load
          $('html, body').scrollTop(0);


          // Show featureds on animation
          mpFadeIn();
          var $window = $(window);
          $window.on('scroll resize', mpFadeIn);
          $window.trigger('scroll');


          // Initialize Smooth Scroll Watcher
          smoothScrollInit();
        });


      });
    }
  });



  var Laboratory = Vue.extend({
    template : '#laboratoryTemplate',
    store: store,
    mixins : [mixin],
    data: function(){
      return {
        loaded : false 
      }
    },
    mounted : function(){
      this.$nextTick(function(){

          // Update title
          setDocTitle('Laboratory');

        $('html, body').scrollTop(0);

      });
    }
  });



  var Events = Vue.extend({
    template : '#eventsTemplate',
    store: store,
    mixins : [mixin],
    data: function(){
      return {
        loaded : false 
      }
    },
    mounted : function(){
      this.$nextTick(function(){

       // Update title
        setDocTitle('Events');

        $('html, body').scrollTop(0);

      });
    }
  });



  var Contact = Vue.extend({
    template : '#contactTemplate',
    store: store,
    mixins : [mixin],
    data: function(){
      return {
        loaded : false 
      }
    },
    mounted : function(){
      this.$nextTick(function(){

       // Update title
        setDocTitle('Contact');

        $('html, body').scrollTop(0);

      });
    }
  });



  var Album = Vue.extend({
    template : '#albumTemplate',
    store: store,
    mixins : [mixin],
    data : function(){
      return {
        post : {
          title : '',
          content : '',
          image : '',
          slug : ''
        }
      }
    },
    beforeDestroy : function(){
      $('.mpmodal').removeClass('mpmodal--active');
      document.body.classList.remove('no-scroll');

    },
    methods : {
      closeAlbum : function(){
        router.push({path : '/music'});


        // Update title
        setDocTitle('Music Hall');
        return;
      }
    },
    mounted : function(){
      this.$nextTick(function(){


        // Get Post Info (from parent but soon to be VueX)
        var self = this;
        
        self.$http.get(wp.root + 'wp/v2/music?slug=' + self.$route.params.slug).then(function(response) { 
          
          self.post = response.data[0];

         // Update title
          setDocTitle(self.post.title.rendered);

          // Display Properties
          $('.mpmodal').addClass('mpmodal--active');
          document.body.classList.add('no-scroll');



          // Back on Escape
          $(document).keyup(function(e) {
            if (e.keyCode == 27) { // escape key maps to keycode `27`
              router.push({path : '/music'});
            }
          });



          // Back on exit button
          $('.mpmodal__exit').click(function(){
            console.log('exit');  
            self.closeAlbum();
          });
          
          }, function(response) {
          
              console.log(response);
          
          });

      });
    } 
  });



  var Art = Vue.extend({
    template : '#artTemplate',
    store: store,
    mixins : [mixin],
    data : function(){
      return {
        post : {
          title : '',
          content : '',
          image : '',
          slug : ''
        }
      }
    },
    beforeDestroy : function(){
      $('.mpmodal').removeClass('mpmodal--active');
      document.body.classList.remove('no-scroll');

    },
    methods : {
      closeAlbum : function(){
        router.push({path : '/gallery'});
        // Update title
        setDocTitle('Eye Gallery');
        return;
      }
    },
    mounted : function(){
      this.$nextTick(function(){

        var self = this;

        var p = this.$parent.posts.filter(function(post){
          return post.slug == self.$route.params.slug;
        });

        this.post = Object.assign({}, { content : p[0].content, image : p[0].image, slug : p[0].slug, title : p[0].title });


       // Update title
        setDocTitle(this.post.title);




        // Display Properties
        $('.mpmodal').addClass('mpmodal--active');
        document.body.classList.add('no-scroll');



        // Back on Escape
        $(document).keyup(function(e) {
          if (e.keyCode == 27) { // escape key maps to keycode `27`
            router.push({path : '/gallery'});
          }
        });



        // Back on exit click
        $('.mpmodal__exit').click(function(){
          self.closeAlbum();
        });

        function initMPAlbum(){

          // Set image height
          var imgHeight = $('.mpalbum__image > img').height() + 15;
          console.log('height', imgHeight);
          $('.mpalbum__progress').height(imgHeight + 'px');
          $('.mpalbum__progress-bar').height(imgHeight + 'px');

          // Set image width
          var imgWidth = $('.mpalbum__image > img').width();
          console.log('width', imgWidth);
          $('.mpalbum__progress').width(imgWidth + 'px');


          // Track Audio Position
          $('.mpalbum__player').bind('play', function(){
            $('.mpalbum__progress-bar').width('0%');
          });

          $('.mpalbum__player').bind('timeupdate', function(){
            console.log (this.currentTime);
            console.log (this.duration);
            console.log ((this.currentTime / this.duration));

            $('.mpalbum__progress-bar').width(((this.currentTime / this.duration) * 100) + '%');
          });

        }

        var checkExist = setInterval(function() {
           if ($('.mpalbum__image > img').width() > 0) {
              initMPAlbum();
              clearInterval(checkExist);
           }
        }, 100); // check every 100ms

      });
    },
    created: function() {

    }
  });



  // Create our Router instance
  var router = new VueRouter({
    mode : 'history',
    routes : [
      {
        path : '/',
        name : 'home',
        component: Home
      },
      {
        path : '/index.html', 
        name : 'home', 
        component: Home
      },
      {
        path : '/music',
        name : 'music', 
        component : Music,
        children : [
          {
            path : ':slug',
            component : Album
          }
        ]
      },
      {
        path : '/gallery',
        name : 'gallery', 
        component: Gallery,
        children : [
          {
            path : ':slug',
            component : Art
          }
        ]
      },
      {
        path : '/laboratory',
        name : 'laboratory', 
        component: Laboratory
      },
      {
        path : '/events',
        name : 'events', 
        component: Events
      },
      {
        path : '/contact',
        name : 'contact', 
        component: Contact
      },
      {
        path : '*',
        redirect : '/'
      }
    ]
  });



  // Mount app and launch
  var app = new Vue({
    router : router
  }).$mount('#app');
  
})( jQuery );