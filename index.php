<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Metacin - Beyond Metacin</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?php wp_head(); ?>
  </head>
  <body>
    <!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <div class="main-entry" id="app">
      <div id="particles"></div>

      <header class="header" v-bind:class="$route.name === 'music' || $route.name === 'gallery' || $route.name === 'laboratory' || $route.name === 'events' ? 'header--active' : ''">
        <div class="header__site-info">
          <router-link to="/" class="header__title">
            METACIN
          </router-link>
          <div class="header__subtitle">
            Beyond Medicine &reg;
          </div>
        </div>
         <a class="header__menu-item header__mobile-link">
           M&#9776;
         </a>
         
         <nav class="header-nav">
           <div class="header-nav__wrapper">
             <router-link class="header-nav__a" active-class="header-nav__a-home-active" to="/"><span>Home</span></router-link>
             <router-link class="header-nav__a" active-class="header-nav__a-active" to="/music"><span>Music Hall</span></router-link>
             <router-link class="header-nav__a" active-class="header-nav__a-active" to="/gallery"><span>Eye Gallery</span></router-link>
             <router-link class="header-nav__a" active-class="header-nav__a-active" to="/laboratory"><span>Laboratory</span></router-link>
             <router-link class="header-nav__a" active-class="header-nav__a-active" to="/events"><span>Events</span></router-link>
             <router-link class="header-nav__a" active-class="header-nav__a-active" to="/contact"><span>Contact</span></router-link>
           </div>
         </nav>
         
         
      </header>
      

    
      
      <div class="mprouter" v-bind:class="$route.name === 'music' || $route.name === 'gallery' || $route.name === 'laboratory' || $route.name === 'events' ? 'mprouter--sub' : 'mprouter--main'">
<!--
        <div class="featured--spacer">
          
        </div>
-->
        <div class="mpscroll">
          <a class="mpscroll__inner">
             &#10151;
          </a>
        </div>  
  
       
        <router-view></router-view>
      </div>
      
      
      <footer>
        
        <p>&copy; 2016 Metacin. Contact. Terms. Etc...</p>
        
      </footer>
    </div>

  
  
  
   
   <template id="featuredTemplate">
     
     <div id="featuredAnchor">
       <div class="mploading" v-show="isLoading">
         <div class="mploading__bouncer">
           <div class="double-bounce1"></div>
           <div class="double-bounce2"></div>
         </div>
       </div>
       <div v-show="!isLoading" class="mpsnapcontainer">    
     
        <!--Floating Box-->
<!--
        <div class="mpsnapbox mpsnapbox--mpreactive">
         <a href="#featuredScrollAnchor" id="mpreactive" class="mpreactive"
            data-invert-x="false"
            data-invert-y="false">
           <div class="layer" data-depth="0.20"><div class="mpreactive__inner"><img src="dist/img/yeaman-headshot-new.jpg" alt="Michael Yeaman"></div></div>
           <div class="layer" data-depth="0.50"><div class="mpreactive__inner"><h2 >METACIN</h2></div></div>
           <div class="layer" data-depth="0.80"><div class="mpreactive__inner"><h3>Beyond Medicine&copy;</h3></div></div>
         </a>
       </div>
-->
        <div class="mpsnapbox mpsnapbox--mpreactive">
         <a href="#featuredScrollAnchor" class="mpreactive">
           <div class="mpreactive__left"><img src="dist/img/yeaman-revised.jpg" alt="Michael Yeaman"></div>
           <div class="mpreactive__right"><h2>METACIN</h2><h3>Beyond Medicine&copy;</h3></div>
         </a>
       </div>




    
          <!--     Featured Tune Box-->
        <div id="featuredScrollAnchor" class="mpsnapbox mpsnapbox--sub mpsnapbox--music body-bg">
         <div class="mpsnapbox__inner mpfront">
          <div class="mpbox">
            <div class="mpbox__inner">
              <div class="mpbox__mpcard mpfadein">
                <div class="mpcard mpcard--music" ontouchstart="this.classList.toggle('hover');">
                  <div class="mpcard__inner">
                    <div class="mpcard__front">

                    </div>
                    <div class="mpcard__back">
                      <div class="mpcard__back__inner">
                        <i class="fa fa-play-circle" aria-hidden="true" @click="playAudio"></i>
                        <audio src="/dist/mp3/odyssey.mp3" controls="controls" class="mpaudio__player">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mpbox__text">
                <h2>Music Hall</h2>
                <p>Explore the music of Michael Yeaman on the <strong>Soundstage</strong> — and go inside the music to learn more <strong>On the Record</strong>. </p>
                <router-link to="/music" >Visit Music Hall</router-link>
              </div>
            </div>
          </div>
          </div>
        </div>

        <!--     Featured Art Box-->
        <div class="mpsnapbox mpsnapbox--sub mpsnapbox--gallery">
          <div class="mpsnapbox__inner  mpfront">
            <div class="mpbox">
              <div class="mpbox__inner">
                <div class="mpbox__mpcard mpfadein">
                  <div class="mpcard mpcard--gallery" ontouchstart="this.classList.toggle('hover');">
                    <div class="mpcard__inner">
                      <div class="mpcard__front">

                      </div>
                      <div class="mpcard__back">
                        <div class="mpcard__back__inner">
                          <router-link to="/gallery/canon-in-d"><i class="fa fa-plus-circle" aria-hidden="true"></i></router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mpbox__text ">
                  <h2>Eye Gallery</h2>
                  <p>Explore the art of Michael Yeaman in the <strong>Eye Gallery</strong> to see music in a beautiful new way that is more than meets the ear.</p>
                  <router-link to="/gallery" >Visit Eye Gallery</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--     Laboratory Box-->
        <div class="mpsnapbox mpsnapbox--sub mpsnapbox--laboratory">
          <div class="mpsnapbox__inner  mpfront">
            <div class="mpbox">
              <div class="mpbox__inner">
                <div class="mpbox__mpcard mpfadein">
                  <div class="mpcard mpcard--laboratory" ontouchstart="this.classList.toggle('hover');">
                    <div class="mpcard__inner">
                      <div class="mpcard__front">

                      </div>
                      <div class="mpcard__back">
                        <div class="mpcard__back__inner">
                          <router-link to="/gallery/canon-in-d"><i class="fa fa-plus-circle" aria-hidden="true"></i></router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mpbox__text">
                  <h2>Laboratory</h2>
                  <p>Explore the science of Michael Yeaman in the <strong>Laboratory</strong> to interact in his sound medicine research.</p>
                  <router-link to="/laboratory" >Visit Laboratory</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        <!--     Events Box-->
        <div class="mpsnapbox mpsnapbox--sub mpsnapbox--events">
          <div class="mpsnapbox__inner  mpfront">
            <div class="mpbox">
              <div class="mpbox__inner">
                <div class="mpbox__mpcard mpfadein">
                  <div class="mpcard mpcard--events" ontouchstart="this.classList.toggle('hover');">
                    <div class="mpcard__inner">
                      <div class="mpcard__front">

                      </div>
                      <div class="mpcard__back">
                        <div class="mpcard__back__inner">
                          <router-link to="/gallery/canon-in-d"><i class="fa fa-plus-circle" aria-hidden="true"></i></router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mpbox__text">
                  <h2>Events</h2>
                  <p>You are invited to join the Metacin contact list to receive the latest updates on new music releases, performances and special events.</p>
                  <router-link to="/events" >See Upcoming Events</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        
      </div>
    </div>
       
   </template>
   
   
   
   
   
    <!--    Music Hall-->
    <template id="musicTemplate">
      <div id="musicAnchor">
        <div class="mploading" v-show="isLoading">
           <div class="mploading__bouncer">
             <div class="double-bounce1"></div>
             <div class="double-bounce2"></div>
           </div>
        </div>
        <div v-show="!isLoading">

        <!--  Scroll Down Indicator       -->




        <!--     Musicology Intro-->
        
        <div class="mpsnapbox mpsnapbox--music">
          <div class="mpsnapbox__inner">
            

        
            <div class="mpintro">
              <div class="mpintro__text">
                <h2 >Musicology</h2>
                <br><br>
                <p>The essential elements of music are pitch, tone, volume and time.  Patterns of these elements govern musical structure — melody and harmony of course — but more:  motif, symmetry, proportion, relativity.  As in any language, arrangement of musical elements provides syntax and conveys meaning. </p>
                <p> Explore the music of Michael Yeaman on the <a href="#mpgal">Soundstage</a> — and go inside the music to learn more <a href="#mprecord">On the Record</a>. </p>
                <br><br>
                <a href="#mpgal" class="mpintro__btn">Explore the Soundstage</a>
              </div>
            </div>

          </div>
        </div>



        <!--      Sound Stage Catalog-->
        <div id="mpgal" class="mpgal">
          <div class="mpgal__header">
            <h2>Soundstage</h2>
          </div>
          <div v-for="post in posts" class="mpgal__item mpfadein">
            <router-link :to="'/music/' + post.slug">
              <img :src="post.image" :alt="post.title">
            </router-link>
          </div>
        </div>


        <!--      Sound Stage Modal Router Frame-->
        <div class="mpmodal">
          <router-view></router-view>
        </div>




        <!--      On the Record Narrative-->
        <div id="mprecord" class="mpintro">
          <div class="mpintro__text">
            <h2>On The Record</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi soluta deserunt eaque, quod quidem totam laudantium, quos repellendus architecto et dolorem eum? Blanditiis sunt officiis vitae, necessitatibus nemo ipsam, amet.</p>
          </div>
        </div>

      </div>
     </div>
    </template>
    
    
    
    <!--  Album Modal  -->
    <template id="albumTemplate">
      <div>
        <div class="mpmodal__overlay">
          <a class="mpmodal__exit"></a>
        </div>
        <div class="mpmodal__box">
          <div class="mpalbum">
            <div class="mpalbum__close">
              <a class="mpmodal__exit">&#x2715;</a>
            </div>
            <div class="mpalbum__body">
              <div class="mpalbum__image">
                <img :src="post.image" :alt="post.title" >
              </div>
              <div class="mpalbum__description">
                <div class="mpalbum__title">
                  <h3>{{post.title}}</h3>
                </div>
                <div class="mpalbum__content">
                  <h4>Teaser</h4>
                  <div v-html="post.content"></div>
                  <small>&copy; 2012 Michael Yeaman / Metacin, Inc. &amp; Chris Rhodes / SSRMW<br>(P) 2017 Michael Yeaman / Metacin, Inc.</small>
                </div>
                <div class="mpalbum__footer">

                  <div class="mpalbum__tracks">
                    <div v-show="post.tracks">
                      <h4>Track Listing</h4>
                      <ul>
                        <li v-for="track in post.tracks">

                          <span>{{track.index}}. {{track.title}}</span>
                          <span>{{track.time}}</span>

                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="mpalbum__downloadheader">
                    <h4>Download Now</h4>
                  </div>
                  <div class="mpalbum__download">
                    <a href="#"><img src="/dist/img/icon-itunes.png" alt="Available on iTunes"></a>
                    <a href="#"><img src="/dist/img/icon-spotify.png" alt="Listen on Spotify"></a>
                    <a href="#"><img src="/dist/img/icon-amazon.png" alt="Available on Amazon Music"></a>
                  </div>
                </div>
              
              </div>
            </div>
            </div>
          </div>

        </div>
    </template>
   
   
   
    <!--    Gallery-->
    <template id="galleryTemplate">
      <div id="galleryAnchor">
        <div class="mploading" v-show="isLoading">
           <div class="mploading__bouncer">
             <div class="double-bounce1"></div>
             <div class="double-bounce2"></div>
           </div></div>
        <div v-show="!isLoading">

        <!--  Scroll Down Indicator       -->




        <!--     Musicology Intro-->
        <div class="mpsnapbox mpsnapbox--gallery">
          <div class="mpsnapbox__inner">
             <div class="mpintro">
              <div class="mpintro__text">
                <h2 >Eye Gallery</h2>
                <br><br>
                <p>Music touches every sense — from rhythm and movement to emotion and memory.  Listening to music is one way to experience its benefits — and visualizing music is another way to appreciate its patterns and meaning. </p>
                <p> Explore the art of Michael Yeaman in the <a href="#mpgal">Eye Gallery</a> to see music in a beautiful new way that is more than meets the ear. </p>
                
                <br><br>
                <a href="#mpgal" class="mpintro__btn">Explore the Sound of Light</a>
              </div>
            </div>           
          </div>
        </div>




<!--
        <div class="mpbox">
          <div class="mpbox__text">
            <h4>Anthem <small>Featured Art</small></h4>
          </div>
          <div class="mpbox__mpcard mpfadein">
            <div class="mpcard mpcard--gallery" ontouchstart="this.classList.toggle('hover');">
              <div class="mpcard__inner">
                <div class="mpcard__front">

                </div>
                <div class="mpcard__back">
                  <div class="mpcard__back__inner">
                    <router-link to="/gallery/canon-in-d"><i class="fa fa-plus-circle" aria-hidden="true"></i></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
-->

        <!--      Sound of Light Catalog-->
        <div id="mpgal" class="mpgal mpgal--gallery">
          <div class="mpgal__header">
            <h2>Sound of Light</h2>
          </div>
          <div v-for="post in posts" class="mpgal__item mpfadein">
            <router-link :to="'/gallery/' + post.slug">
              <img :src="post.image" :alt="post.title">
            </router-link>
          </div>
        </div>


        <!--      Sound Stage Modal Router Frame-->
        <div class="mpmodal">
          <router-view></router-view>
        </div>




        <!--      On the Record Narrative-->
        <div class="mpintro">
          <div class="mpintro__text">
            <h2>Meets the Eye</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi soluta deserunt eaque, quod quidem totam laudantium, quos repellendus architecto et dolorem eum? Blanditiis sunt officiis vitae, necessitatibus nemo ipsam, amet.</p>
          </div>
        </div>

      </div>
     </div>
    </template>
    
    
    
    <!--  Album Modal  -->
    <template id="artTemplate">
      <div>
        <div class="mpmodal__overlay">
          <a class="mpmodal__exit"></a>
        </div>
        <div class="mpmodal__box">
          <div class="mpalbum">
           
            <div class="mpalbum__close">
              <a class="mpmodal__exit">&#x2715;</a>
            </div>
            <div class="mpalbum__body">
            
              <div class="mpalbum__image">
                <img :src="post.image" :alt="post.title" >
                <div class="mpalbum__progress">
                  <div class="mpalbum__progress-bar"></div>
                </div>
              </div>
              <div class="mpalbum__description">
                <div class="mpalbum__title">
                  <h3>{{post.title}}</h3>
                </div>
                <div class="mpalbum__content">
                  <h4>Teaser</h4>
                  <div v-html="post.content"></div>
                  <small>Michael Yeaman &amp; Chris Rhodes<BR>© 2016 Metacin, Inc. / NovaMedia</small>
                </div>
                <div class="mpalbum__songheader">
                  <h4>Preview</h4>
                </div>
                <div class="mpalbum__song">
                  <audio src="/dist/mp3/odyssey.mp3" controls="controls" class="mpalbum__player">

                </div>
              </div>
            </div>
          </div>

        </div>
      </div> 
    </template>
    
    
    
  
   
    <!--  Laboratory -->
    <template id="laboratoryTemplate">
      <div id="laboratoryAnchor">
        <div class="mploading" v-show="isLoading">
           <div class="mploading__bouncer">
             <div class="double-bounce1"></div>
             <div class="double-bounce2"></div>
           </div>
        </div>
        <div v-show="!isLoading">


        <!--   Intro-->
        
        <div class="mpsnapbox mpsnapbox--laboratory">
          <div class="mpsnapbox__inner">
            

        
            <div class="mpintro">
              <div class="mpintro__text">
                <h2 >Laboratory</h2>
                <br><br>
                <p>Music has the ability to improve body and mind — it goes beyond traditional medicine — to strengthen, heal, inspire, teach, create, live.  The mysterious ways music achieves these effects are just beginning to be understood.  </p>
                <p> Explore the science of Michael Yeaman in the <a href="#">Laboratory</a> to interact in his sound medicine research. </p>
                <br><br>
                <a href="#" class="mpintro__btn">Explore the Laboratory</a>
              </div>
            </div>

          </div>
        </div>


      </div>
     </div>
    </template>
    
       
    
  
   
    <!--  Events  -->
    <template id="eventsTemplate">
      <div id="eventsAnchor">
        <div class="mploading" v-show="isLoading">
           <div class="mploading__bouncer">
             <div class="double-bounce1"></div>
             <div class="double-bounce2"></div>
           </div>
        </div>
        <div v-show="!isLoading">


        <!--   Intro-->
        
        <div class="mpsnapbox mpsnapbox--events">
          <div class="mpsnapbox__inner">
            

        
            <div class="mpintro">
              <div class="mpintro__text">
                <h2>Events</h2>
                <br><br>
                <p>You are invited to join the Metacin contact list to receive the latest updates on new music releases, performances and special events. </p>
                <br><br>
<!--                <a href="#" class="mpintro__btn">Explore the Laboratory</a>-->
              </div>
            </div>

          </div>
        </div>


      </div>
     </div>
    </template>
    
     <?php wp_footer(); ?>
    



    
  </body>
</html>