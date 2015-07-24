# Materializecss-animation
A responsive animation for displaying portfolio items in a modal window, using materializecss framework.

When I set up my site using *Materializecss* I wanted to have a modal that showed each one of my portofolio items studies.

And what better way than one using a material animation?

So I set it up myself, not having been able to find anything on the web.
It is designed to be used on cards showing a photo.

Please be patient and aware that this is one of my first attempts to write an animation.

When you click on the "Show Project" link, the modal gets triggered.

The javascript uses jQuery (as it is originally needed for materializecss framework and GSAP library for the animation.
I understand this could have been done with css only but the original materializecss card featured a relatively positioned image, therefore making it hard to render a nice transition in css only.

## Usage

To use it you need to:

1. Inside the head of the page link the css

        <link href="css/animation.css" type="text/css" rel="stylesheet" >

2. Give each card corrisponding to the projects you want in the modal its own id:

    ` <div class="card" id="card-1"> `
3. Add the class "project-img" to the img inside the card:

    ` <img class="activator project-img" src="PATH_TO_IMG"> `
4. Instead of "card-content" link add this block of code. 

         <a href="javascript:void(0);" class="round-hook" data-modal="project-1">Click Here</a><div class="round-link under-everything absolute"></div>

    It will look like this:
    
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">Project Title<i class="mdi mdi-dots-vertical right"></i></span>
            <!-- Here Code Need to be added -->
            <p><a href="javascript:void(0);" class="round-hook" data-modal="project-1">Click Here</a><div class="round-link under-everything absolute"></div></p>
            <!-- End -->
        </div>

5. Style the inside of the modal window
  
        <div id="project-1" class="modal-container">
            <!-- The bigger image -->
            <img class="project-img-bigger under-everything" src="img/sito-pieroni.jpg">
            <div class="modal-card">
                <!-- Modal Structure -->
                  <div id="modal1" class="modal-fixed-footer">
                    <div class="modal-content">
                        <p>YOU SHOULD PUT YOUR OWN CONTENT HERE!</p>
                    </div>
                    <!-- These are sharing buttons, feel free to remove them! -->
                    <div class="modal-footer">
                      <a href="#" class="btn-floating btn-medium waves-effect share-fb waves-light right"><i class="mdi mdi-facebook"></i></a>
                      <a href="#" class="btn-floating share-tw btn-medium waves-effect waves-light right"><i class="mdi mdi-twitter"></i></a>
                      <a href="#" class="btn-floating btn-medium waves-effect waves-light right share-gp"><i class="mdi mdi-google-plus"></i></a>
                    </div>
                  </div>
            </div>
            <div class="modal-close">
                <span></span>
                <span></span>
            </div>
        </div>
  
6. Reference GSAP library and own script
  
        <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/plugins/CSSPlugin.min.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/easing/EasePack.min.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenLite.min.js"></script>
        <script src="js/material-animation.js"></script>
        

Thanks for reading and please feel free to contact me for anything at matt@matteopieroni.com
