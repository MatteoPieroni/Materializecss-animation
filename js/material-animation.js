$(".round-hook").click(function(){
                
                // DECLARE VARIABLES
                var modalOpening = '#' + $(this).attr('data-modal');

                 // Fix for materialize
                var whichCard = '#' + $(this).parents( ".card" ).attr('id');
                var smallImg = $(whichCard + " .project-img");
                var hook = $(whichCard + " .round-link");
                var imgModal = $(modalOpening + " .project-img-bigger");
                var divModal = $(modalOpening + " .modal-card");
                var closeBtn = $(modalOpening + " .modal-close");
                
                
                // Show hidden modal
                $(modalOpening + " .modal-card").addClass("show-modal");
                
                // Get Position for setting img and circle starting points
                var eLeft = smallImg.offset().left;
                var eTop = smallImg.offset().top;
                var clickPosX = $(this).offset().left;
                var clickPosY = $(this).offset().top - $(window).scrollTop();
                var originalWidth = smallImg.width();
                
                // Show Hidden Modal Img
                imgModal.css("display", "block");
                imgModal.css("top", eTop);
                imgModal.css("width", originalWidth);
                imgModal.css("left", eLeft);
                
                // Show Hidden Modal Div
                divModal.css("display", "block");
                
                // Position for fixing "Fixed" problem
                hook.css("left", clickPosX);
                hook.css("top", clickPosY);
                
                // Change Classes for CSS
                hook.addClass("active");
                imgModal.removeClass("under-everything");
                $("body").addClass("overflow");
                imgModal.addClass("active");
                smallImg.addClass("hidden");
                closeBtn.addClass("show");
                $(".btn").toggleClass("active");
            
                 if(window.innerHeight > window.innerWidth){
                    // Define Dimensions and Positioning for Modal Img
                    var newImgHeight = $(window).height() * 9 / 20;
                    var newParHeight = $(window).height() * 9 / 20;
                    var newImgWidth = newImgHeight * imgModal.width() / imgModal.height();
                    var halfViewportPosX = $(window).width() / 2 - newImgWidth / 2;
                    var halfViewportPosY = $(window).height() / 4 - ( newImgHeight / 2) + $(window).scrollTop();

                    // Define Dimensions and Positioning Modal Div
                    divModal.css("top", halfViewportPosY);
                    divModal.css("left", halfViewportPosX);
                    divModal.css("width", newImgWidth);
                }

                else {
                
                    // Define Dimensions and Positioning for Modal Img
                    var newImgWidth = $(window).width() / 4;
                    var newParWidth = $(window).width() / 2;
                    var newHeight = newImgWidth * imgModal.height() / imgModal.width();
                    var halfViewportPosX = $(window).width() / 3 - newImgWidth;
                    var halfViewportPosY = $(window).height() / 2 - ( newHeight / 2) + $(window).scrollTop();

                    // Define Dimensions and Positioning Modal Div
                    divModal.css("top", halfViewportPosY);
                    divModal.css("left", halfViewportPosX);
                    divModal.css("height", newHeight);
                
                }
            
                // Animate Modal Img
                TweenLite.to(imgModal, 0.3, {left: halfViewportPosX,top: halfViewportPosY, width: newImgWidth, onComplete:scaleBall, ease:Cubic.easeOut});
                function scaleBall() {
                    // Animate Hook
                    TweenLite.to(hook, 0.5, {css:{scale:50}});
                    // Change Classes for CSS
                    hook.removeClass("under-everything absolute");
                }
                
                if(window.innerHeight > window.innerWidth){
                    // Animate Modal Div
                    TweenLite.to(divModal, 0.5, {opacity: "1", top: halfViewportPosY + newImgHeight, height: newParHeight, ease:Cubic.easeOut, delay:0.9});
                }

                else {
                    // Animate Modal Div
                    TweenLite.to(divModal, 0.5, {opacity: "1", left: halfViewportPosX + newImgWidth, width: newParWidth, ease:Cubic.easeOut, delay:0.9});
                }

                // CLOSING

                $(".modal-close").click(function() {
                    
                    if(window.innerHeight > window.innerWidth){
                        // Animate Modal Div
                        TweenLite.to(divModal, 0.4, {left: halfViewportPosX, height: "0", onComplete:secondStep, ease:Cubic.easeOut});
                    }

                    else {
                        // Animate Modal Div
                        TweenLite.to(divModal, 0.4, {left: halfViewportPosX, width: "0", opacity: "0", onComplete:secondStep, ease:Cubic.easeOut});
                    }
                    
                    function secondStep (){
                        //Animate Hook
                        TweenLite.to(hook, 0.2, {css:{scale:1}, onComplete:disappearSlowlyBall});
                            closeBtn.removeClass("show");
                            divModal.css("opacity", "0");
                        // Animate Modal Img
                        TweenLite.to(imgModal, 0.2, {left: eLeft, top: eTop, width: smallImg.width(), onComplete:disappearSlowlyImg, ease:Cubic.easeOut, delay:0.2});
                    }
                    
                        function disappearSlowlyBall (){  
                            // change Classes for CSS
                            hook.addClass("under-everything absolute");
                        }

                        function disappearSlowlyImg (){
                            // Change classes for CSS
                            imgModal.removeClass("active");
                            imgModal.addClass("under-everything");  
                            smallImg.removeClass("hidden");
                            $("body").removeClass("overflow");
                            imgModal.css("display", "none");
                        }
                });
    
            $(window).resize(function() {
                if(window.innerHeight > window.innerWidth){
                        // Animate Modal Div
                        TweenLite.to(divModal, 0.4, {left: halfViewportPosX, height: "0", onComplete:secondStep, ease:Cubic.easeOut});
                    }

                    else {
                        // Animate Modal Div
                        TweenLite.to(divModal, 0.4, {left: halfViewportPosX, width: "0", opacity: "0", onComplete:secondStep, ease:Cubic.easeOut});
                    }
                    
                    function secondStep (){
                        //Animate Hook
                        TweenLite.to(hook, 0.2, {css:{scale:1}, onComplete:disappearSlowlyBall});
                            closeBtn.removeClass("show");
                            divModal.css("opacity", "0");
                        // Animate Modal Img
                        TweenLite.to(imgModal, 0.2, {left: eLeft, top: eTop, width: smallImg.width(), onComplete:disappearSlowlyImg, ease:Cubic.easeOut, delay:0.2});
                    }
                    
                        function disappearSlowlyBall (){  
                            // change Classes for CSS
                            hook.addClass("under-everything absolute");
                        }

                        function disappearSlowlyImg (){
                            // Change classes for CSS
                            imgModal.removeClass("active");
                            imgModal.addClass("under-everything");  
                            smallImg.removeClass("hidden");
                            $("body").removeClass("overflow");
                            imgModal.css("display", "none");
                        }
                });
        });