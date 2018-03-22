
/*==============================
        GSAP ANIMATIONS
=============================*/

// .......................Menu Overlay...............//
const btContainer = document.getElementsByClassName("button_container");
const logo = document.getElementById("logo");
const logo2 = document.getElementById("logo-2");
const showOverlay = document.getElementById("toggle");
showOverlay.addEventListener("click", listener, false);

function listener() {
  let overlay = document.getElementById("overlay");
  let options;
  let tl = new TimelineMax();

  let socials = document.getElementById("burger-menu-wrap").getElementsByTagName("li");
  if ( overlay.classList.contains('open') ) {
    options = {opacity:1, height:'100%'};
    let menuItems = document.getElementById("menu").getElementsByTagName("li");

    TweenMax.staggerFromTo(menuItems, 3,{scale:0, opacity:0}, {scale:0.5, opacity:1, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);

    tl.staggerFromTo(socials, 0.5,
      {
        opacity:0,
        textIndent:'-100%',
        rotationX:0
      },
      {
        width:'100%',
        opacity:1,
        textIndent:0,
        whiteSpace:'wrap',
        overflow:'auto',
        rotationX:0,
        ease:Back.easeOut
      }, 0.1);

  } else {
      options = {opacity:0, height:0};
  }

  TweenMax.to(overlay, .35, options);

} //close listener function

// trigger for scroll ANIMATIONS

const $animation_elements = $('.animation-element');
const $animation_element2 = $('.animation-element2 ');
const $window = $(window);

function check_if_in_view() {
let window_height = $window.height();
let window_top_position = $window.scrollTop();
let window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
  let $element = $(this);
  let element_height = $element.outerHeight();
  let element_top_position = $element.offset().top;
  let element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
        } else {
            $element.addClass('in-vieww');
          }

  });

  $.each($animation_element2, function() {
  let $element = $(this);
  let element_height = $element.outerHeight();
  let element_top_position = $element.offset().top;
  let element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view-port');
        } else {
          $element.addClass('in-vieww');
        }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');




// .......................Home Page...............//


if ( document.body.classList.contains('intropage') ) {

  let introName = document.getElementById("Layer_1");
  const introText = document.getElementById("p-intro-txt");
  const introText2 = document.getElementById("intro-txt-last");
  const leftIntroText = document.getElementById("h-intro-left-wrap");
  const banner = document.getElementsByClassName("banner");

  // show page contents
  let showPage = new TimelineMax();
  showPage.fromTo(banner,1,{opacity:0},{ opacity:1, ease:Power0.easeIn, display:'block'}, '0.05')
          .to(btContainer,.3, {  opacity:2, y:10, ease:Power0.easeIn, display:'block'},'0.09')
          .fromTo(logo,.3, {  y:-5 }, { opacity:2, y:5, ease:Power0.easeIn, display:'block'},'0.09')
          .fromTo(introText,.5,{ opacity:0, y:-100}, { opacity:.8, y:0,  ease:Power0.easeOut, display:'block'}, '1')
          .fromTo(introText2,.6,{ opacity:0, y:198}, { opacity:.8, y:6,  ease:Power0.easeOut, display:'block'}, '1.2')
          .fromTo(leftIntroText,.3,{x:-5}, { x:0,ease:Power0.easeIn,display:'block'}, '1.6');

          // .fromTo(leftIntroText,.3,{x:-3}, { x:5,ease:Power0.easeIn,display:'block'})


  // page loader morphSVG
  let masterTimeline = new TimelineMax({delay:0.5}),
    tl1 = new TimelineMax(),
    tl2 = new TimelineMax(),
    tl3 = new TimelineMax(),
    tl4 = new TimelineMax(),
    tl5 = new TimelineMax({onComplete:myFunction});

    //convert SVG polygon to path
    MorphSVGPlugin.convertToPath("polygon");

    const letter1 =document.getElementById("letter1");

    tl1.to(letter1, 0.4, {morphSVG:"#letter4"}, "+=1" )
      .to(letter1, 0.4, {morphSVG:"#letter6"}, "+=1" )
      .to(letter1, 0.4, {morphSVG:"#letter9"}, "+=1" );

    const letter2 =document.getElementById("letter2");
    tl2.to(letter2, 0.4, {morphSVG:"#letter3"}, "+=1" )
       .to(letter2, 0.4, {morphSVG:"#letter8"}, "+=1" )
       .to(letter2, 0.4, {morphSVG:"#letter5"}, "+=1" );


    const UpPercent =document.getElementById("letter01");
    tl3.to(UpPercent, 0.4, {morphSVG:"#letter02"}, "+=1" )
       .to(UpPercent, 0.4, {morphSVG:"#letter03"}, "+=1" )
       .to(UpPercent, 0.4, {morphSVG:"#letter04"}, "+=1" );


    const slash =document.getElementById("letterS1");
    tl4.to(slash, 0.4, {morphSVG:"#letterS2"}, "+=1" )
       .to(slash, 0.4, {morphSVG:"#letterS3"}, "+=1" )
       .to(slash, 0.4, {morphSVG:"#letterS4"}, "+=1" );


    const DownPercent =document.getElementById("letter011");
    tl5.to(DownPercent, 0.4, {morphSVG:"#letter002"}, "+=1" )
       .to(DownPercent, 0.4, {morphSVG:"#letter003"}, "+=1" )
       .to(DownPercent, 0.4, {morphSVG:"#letter004", ease:Power0.easeOut,}, "+=1" );

       function myFunction(){

         const fadeLayer =document.getElementById("letter01");
         let fadePage = new TimelineMax();
         fadePage.fromTo(letter1,1.1, {opacity:0.6}, { opacity:0,  display:'none'}, '0.01')
                 .fromTo(letter2,1.1, {opacity:0.6}, { opacity:0,  display:'none'}, '0.01')
                 .fromTo(UpPercent,1.1, {opacity:0.6}, { opacity:0,  display:'none'}, '0.01')
                 .fromTo(DownPercent,1.1, {opacity:0.6}, { opacity:0,  display:'none'}, '0.01')
                 .fromTo(slash,1.1, {opacity:0.6}, { opacity:0,  display:'none'}, '0.01');

         // document.getElementById("Layer_1").style.opacity = 0;
         // document.getElementById("Layer_1").style.display = "none";

         showPage.play();

       }

    showPage.delay(5.8);
    masterTimeline.add([tl1, tl2, tl3, tl4, tl5]); // add tilmeline into the the mastertimeline
    masterTimeline.play();

    //stop animation on window resize
    enquire.register("screen and (max-width:767px)", {
      match: function() {
        isMobile = true;
        console.log('is mobile');
        fadePage.kill();
        showPage.kill();
        masterTimeline.play();
        fadePage.play();

        let showMobilePage = new TimelineMax({delay:6.2});
        showMobilePage.fromTo(banner,2,{opacity:0},{ opacity:1, ease:Power0.easeIn, display:'block'}, '0.05')
                      .to(btContainer,.3, {  opacity:2, y:10, ease:Power0.easeIn, display:'block'},'0.09')
                      .fromTo(logo,.3, {  y:-5 }, { opacity:2, y:5, ease:Power0.easeIn, display:'block'},'0.09')
                      .fromTo(introText,.5,{ opacity:0, y:-100}, { opacity:.8, y:0,  ease:Power0.easeOut, display:'block'}, '1')
                      .fromTo(introText2,.5,{ opacity:0, y:198}, { opacity:.8, y:150,  ease:Power0.easeOut, display:'block'}, '1.2')
                      .fromTo(leftIntroText,.3,{x:-5}, { x:0,ease:Power0.easeIn,display:'block'}, '1.6');

        },
      unmatch: function() {
        isMobile = false;
      }
    });
} //close if statement



// .......................Works Page...............//

if ( document.body.classList.contains('work_page') ) {

//menu overlay animate
let overlay = document.getElementById("overlay");
if ( overlay.classList.contains('slideLeft') ) {
  let slideToLeft = document.getElementsByClassName("slideLeft")[0];
  TweenMax.fromTo(slideToLeft, 1, {x:'0%', opacity:1},{x:'100%', opacity:0.5});
}

const workCard = document.querySelectorAll(".airbnb-work-card");

  TweenMax.to(btContainer,1, { opacity:2, y:10, ease:Power0.easeIn, display:'block'});
  TweenMax.fromTo(logo2,.3, { y:-5 }, { opacity:2, y:5, ease:Power0.easeIn, display:'block'},'+=0.01');

  const visitReyk = document.getElementById("vr-work-card");

  TweenMax.to(visitReyk, 1,{delay:0.18, opacity:.9,  y:'-40', ease:Power0.easeIn});

  const workingContainer = document.querySelectorAll(".working-card-container");

  const mouseEnterEvent = function(e) {

    if(e.target.querySelector('img').id== 'tilbod_mobile_image'){
      TweenMax.to(document.getElementById('tilbod_mobile_image'), .3,  {
        left:"690px", ease:Power0.easeOut
      })
    }
    else {
      TweenMax.to(e.target.querySelector('img'), .3,  {
        left:"330px", ease:Power0.easeOut
      })
    }

    TweenMax.to(e.target.querySelector('h3'), .3,  {
      top:"200px", ease:Power0.easeOut
    });

  }// close mouseEnterEvent

  const mouseLeaveEvent = function(e) {
    TweenMax.to(e.target.querySelector('img'), .3,  {
      left:"310px", ease:Power0.easeOut
    }),
      TweenMax.to(document.getElementById('tilbod_mobile_image'), .3,  {
      left:"670px", ease:Power0.easeOut
    }),
      TweenMax.to(e.target.querySelector('h3'), .3,  {
        top:"220px", ease:Power0.easeOut
    });

  }//close mouseLeaveEvent


  for (var i = 0; i < workingContainer.length; i++) {
    workingContainer[i].addEventListener("mouseenter", mouseEnterEvent);

    workingContainer[i].addEventListener("mouseleave",mouseLeaveEvent);
  }

  //stop animation on window resize
  enquire.register("screen and (max-width:767px)", {
    match: function() {
      isMobile = true;
      TweenMax.killChildTweensOf(document.getElementsByClassName('working-card-container')[0].querySelector('a'));

      for (var i = 0; i < workingContainer.length; i++) {
        workingContainer[i].removeEventListener('mouseenter',mouseEnterEvent);
        workingContainer[i].removeEventListener('mouseleave', mouseLeaveEvent);
      }

    },
    unmatch: function() {
      isMobile = false;
      for (var i = 0; i < workingContainer.length; i++) {
        workingContainer[i].addEventListener("mouseenter", mouseEnterEvent);
        workingContainer[i].addEventListener("mouseleave",mouseLeaveEvent);
      }
    }
  });
}


// .......................Project Page...............//

if ( document.body.classList.contains('project_page') ) {
  const bannerImage = document.getElementsByClassName("image-banner");
  const bannerOverlay = document.getElementsByClassName("airbnb_project_visual");
  const bannerTitle = document.getElementsByClassName("banner-headline");
  const bannerP1 = document.getElementsByClassName("p_1");
  const bannerP2 = document.getElementsByClassName("p_2");
  const bannerP3 = document.getElementsByClassName("p_3");


  let bannerSection = new TimelineMax();
  bannerSection.fromTo(bannerImage,.5, {x:-305, opacity:0},  {opacity:1, x:0, ease:Power0.easeInOut,display:'block'}, '+=.1')
               .add('intro')
               .to(btContainer,1, { opacity:2, y:10, ease:Power0.easeIn, display:'block'}, '-=.1')
               .fromTo(logo,.3, { y:-5 }, { opacity:2, y:5, ease:Power0.easeIn, display:'block'},'+=0.01')
               .fromTo(bannerOverlay,.8, {opacity:0}, {  opacity:0.8, display:'block'},'intro-=.1')
               .fromTo(bannerTitle,.2, {opacity:0}, { opacity:1, y:10, ease:Power0.easeIn} ,'intro-=.1')
               .fromTo(bannerP1,.1, {opacity:0}, { opacity:1, y:10, ease:Power0.easeIn},'intro+=0.15')
               .fromTo(bannerP2,.1, {opacity:0}, { opacity:1, y:20, ease:Power0.easeIn},'intro+=0.2')
               .fromTo(bannerP3,.1, {opacity:0}, { opacity:1, y:30, ease:Power0.easeIn},'intro+=0.25');

               //stop animation on window resize
               enquire.register("screen and (max-width:767px)", {
                 match: function() {

                   isMobile = true;
                   bannerSection.kill();


                   let BannerSection = new TimelineMax();

                   BannerSection.fromTo(bannerImage,.5, {x:-305, opacity:0},  {opacity:1, x:0, ease:Power0.easeInOut,display:'block'}, '+=.1')
                                .add('intro')
                                .to(btContainer,1, { opacity:2, y:10, ease:Power0.easeIn, display:'block'}, '-=.1')
                                .fromTo(logo,.3, { y:-5 }, { opacity:2, y:5, ease:Power0.easeIn, display:'block'},'+=0.01')
                                .fromTo(bannerOverlay,.8, {opacity:0}, {  opacity:0.8, display:'block'},'intro-=.1')
                                .fromTo(bannerTitle,.2, {opacity:0}, { opacity:1, y:10, ease:Power0.easeIn} ,'intro-=.1')
                                .fromTo(bannerP1,.2, {opacity:0}, { opacity:1, y:10, ease:Power0.easeIn},'intro+=0.15')
                                .fromTo(bannerP2,.2, {y:-70, opacity:0}, { opacity:1, y:-50, ease:Power0.easeIn},'intro+=0.2')
                                .fromTo(bannerP3,.2, {y:-150, opacity:0}, { opacity:1, y:-110, ease:Power0.easeIn},'intro+=0.25');
                   // bannerSection.kill();
                   //
                   // logo.style.opacity=1;
                   // logo.style.display='block';
                   //
                   //
                   // for (var i = 0; i < bannerImage.length; i++) {
                   //   bannerImage[i].style.opacity=1;
                   //   bannerImage[i].style.transform='none';
                   // }
                   //
                   // for (var i = 0; i < btContainer.length; i++) {
                   //   btContainer[i].style.opacity=1;
                   //   btContainer[i].style.display='block';
                   // }
                   //
                   //
                   // for (var i = 0; i < bannerOverlay.length; i++) {
                   //   bannerOverlay[i].style.opacity=1;
                   //   bannerOverlay[i].style.display='block';
                   // }
                   //
                   // for (var i = 0; i < bannerP1.length; i++) {
                   //   bannerP1[i].style.opacity=1;
                   //   bannerP1[i].style.display='block';
                   // }
                   //
                   // for (var i = 0; i < bannerP2.length; i++) {
                   //   bannerP2[i].style.opacity=1;
                   //   bannerP2[i].style.display='block';
                   // }
                   //
                   // for (var i = 0; i < bannerP3.length; i++) {
                   //   bannerP3[i].style.opacity=1;
                   //   bannerP3[i].style.display='block';
                   // }



                 },
                 unmatch: function() {
                   isMobile = false;

                 }
               });

}


// .......................tilbod project Page...............//

if ( document.body.classList.contains('tilbod_project_page') ) {
  const bannerImage = document.getElementsByClassName("image-banner");
  const bannerOverlay = document.getElementsByClassName("tilbod_project_visual");
  const bannerTitle = document.getElementsByClassName("banner-headline");
  const bannerP1 = document.getElementsByClassName("p_1");
  const bannerP2 = document.getElementsByClassName("p_2");
  const bannerP3 = document.getElementsByClassName("p_3");

  let bannerSection = new TimelineMax();
  bannerSection.fromTo(bannerImage,.5, {x:-305, opacity:0},  {opacity:1, x:0, ease:Power0.easeInOut,display:'block'}, '+=.1')
               .add('intro')
               .to(btContainer,1, { opacity:2, y:10, ease:Power0.easeIn, display:'block'}, '-=.1')
               .fromTo(logo,.3, { y:-5 }, { opacity:2, y:5, ease:Power0.easeIn, display:'block'},'+=0.01')
               .fromTo(bannerOverlay,.8, {opacity:0}, {  opacity:1, display:'block'},'intro-=.1')
               .fromTo(bannerTitle,.2, {opacity:0}, { opacity:1, y:10, ease:Power0.easeIn} ,'intro-=.1')
               .fromTo(bannerP1,.1, {opacity:0}, { opacity:1, y:10, ease:Power0.easeIn},'intro+=0.15')
               .fromTo(bannerP2,.1, {opacity:0}, { opacity:1, y:20, ease:Power0.easeIn},'intro+=0.2')
               .fromTo(bannerP3,.1, {opacity:0}, { opacity:1, y:30, ease:Power0.easeIn},'intro+=0.25');
}





// .......................About Page...............//

if ( document.body.classList.contains('about_page') ) {

  let buttonContainer = document.getElementById("toggle");

    const borderLine = document.getElementById('about-border');
    const aboutHeading = document.getElementById('about-header');
    const aboutText1 = document.getElementById('about-para-1');
    const aboutText2 = document.getElementById('about-para-2');
    // const aboutImage = document.getElementById('about-image');
    // const aboutBorder = document.getElementById('about-border');

    let aboutSection = new TimelineMax();
    aboutSection.fromTo(borderLine,.3, {opacity:0, x:'-10',}, {  opacity:0.8, x:'0', ease:Power0.easeIn},'+=.1')
                .add('image')
                .to(btContainer,.3, {  opacity:2, y:10, ease:Power0.easeIn, display:'block'},'+=0.01')
                .fromTo(logo2,.3, { y:-5 }, { opacity:2, y:5, ease:Power0.easeIn, display:'block'},'+=0.01')
                .fromTo(aboutHeading,.5, {opacity:0}, { opacity:1, y:'-10', ease:Power0.easeIn} ,'image-=0.25')
                .fromTo(aboutText1,.5, {opacity:0}, { opacity:1, y:'-10', ease:Power0.easeIn},'image-=0.25')
                .fromTo(aboutText2,.5, {opacity:0}, { opacity:1, y:'-20', ease:Power0.easeIn},'image-=0.25');

    //stop animation on window resize
    enquire.register("screen and (max-width:767px)", {
      match: function() {
        isMobile = true;

        TweenMax.killAll();
        buttonContainer.style.display='block';
        borderLine.style.opacity='1';
        aboutHeading.style.opacity='1';
        aboutText1.style.opacity='1';
        aboutText2.style.opacity='1';

      },
      unmatch: function() {
        isMobile = false;

      }
    })
}



// .......................ContactPage...............//


if ( document.body.classList.contains('contact_page') ) {

//menu overlay animate
let overlay = document.getElementById("overlay");
  if ( overlay.classList.contains('slideRight') ) {
    let slideToRight = document.getElementsByClassName("slideRight")[0];

    TweenMax.fromTo(slideToRight, 1, {x:'0%', opacity:1},{opacity:1 , ease:Power1.easeInOut, x:'-100%' });

  }

  //menu overlay animate
  if ( overlay.classList.contains('slideLeft') ) {
    let slideToLeft = document.getElementsByClassName("slideLeft")[0];
    TweenMax.fromTo(slideToLeft, 1, {x:'0%', opacity:1},{x:'100%', opacity:0.5});
  }

  TweenMax.to(btContainer,.3, {  opacity:2, y:10, ease:Power0.easeIn, display:'block'},'+=0.01');
  TweenMax.fromTo(logo2,.3, { y:-5 }, { opacity:2, y:5, ease:Power0.easeIn, display:'block'},'+=0.01');

}

if ( document.body.classList.contains('vr-page') ) {

  let slickContainer = document.getElementById("center");


  if ( slickContainer.classList.contains('slick-slider') ) {
    console.log('slick works');
    let slick = document.getElementsByClassName('slick-slider');
    slick.classList.add('vr-slick');
  }
}
