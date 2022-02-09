(($, window, document, undefined)=>{
    
    class Angency {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.section9();
            this.section10();
            this.footer();

        }
        header(){
          // 윈도우 스크롤탑값이 0이면 높이72 기본 
          // -추가된 클래스모두 삭제
          // removeClass('addH60');

          // 윈도우 스크롤탑값이 0이 아니면 높이 60
          // -추가클래스 addH60
          // .addClass('addH60');

          let newTop= $(window).scrollTop
          let  oldTop = newTop;
          let x = '';

          $(window).scroll(function(){
            if($(window).scrollTop() == 0){
              $('#header').removeClass('addH60');
              $('#header').removeClass('addHide');
              $('#header').removeClass('addShow');

            }
            else{

              $('#header').addClass('addH60');
              // 위아래 방향 알아내야 한다
              newTop= $(window).scrollTop();

              x = oldTop - newTop > 0 ?'UP' :'DOWN';

              if(x=='UP'){
                $('#header').addClass('addShow');
                $('#header').removeClass('addHide');

              }
              if(x=='DOWN'){
                $('#header').addClass('addHide');
                $('#header').removeClass('addShow');
                
              }


              oldTop=newTop;





            }
          });



            // 메인버튼 이벤트
            const mainBtn = $('.main-btn');
            const sub = $('.sub');
            const nav = $('#nav');
            const subBtn = $('.sub-btn');
            const subSub = $('.sub-sub');

            //메인메뉴-서브메뉴
            mainBtn.on({
              mouseenter(e){
                const $this = $(this);
                      sub.stop().fadeOut(0);
                      $this.next().stop().fadeIn(300);
              },
              focusin(e){
                const $this = $(this);
                      sub.stop().fadeOut(0);
                      $this.next().stop().fadeIn(300);
              }
            });

            nav.on({
              mouseleave(){
                sub.stop().fadeOut(300);
                subSub.stop().fadeOut(300);
              }
            });


            //서브메뉴-서브서브메뉴
            subBtn.on({
              mouseenter(){
                const $this = $(this);
                      subSub.stop().fadeOut(0);
                      $this.next().stop().fadeIn(300);
              },
              focusin(){
                const $this = $(this);
                      subSub.stop().fadeOut(0);
                      $this.next().stop().fadeIn(300);
              }
            });

        }
        section1(){
            
          const slideWrap = $('.slide-wrap');
            const slideView = $('.slide-view');
            let cnt = 0;

            function mainSlide(){
              slideWrap.stop().animate({left: -1403*cnt }, 600, 'easeInOutExpo', function(){
                if(cnt>2){cnt=0}
                if(cnt<0){cnt=2}
                slideWrap.stop().animate({left: -1403*cnt }, 0);
              });
            }    
            
            function nextCount(){
              cnt++;
              mainSlide();
            }
            function prevCount(){
              cnt--;
              mainSlide();
            }

            //setInterval(prevCount, 3000);

            let s = null;
            let e = null; 
            let dS = null; 
            let dE = null; 
            let mD = null; 
            slideView.on({  
                mousedown(event){
                  s = event.clientX;
                  dS = event.clientX - slideWrap.offset().left-1403;
                  mD = true;
                },
                mouseup(event){
                  e = event.clientX;
                  mD = false;
                  if( (s-e) > 0 ){ 
                    nextCount();
                  }
                  if( (s-e) < 0 ){ 
                    prevCount();
                  }
                },
                mousemove(e){ 
                  if( mD !== true ){return}  //!mD
                  dE = e.clientX;
                  slideWrap.css({left: dE - dS });
                }
            });



        }
        section2(){

        }
            
        section3(){
            
        }
        section4(){
            
        }
        section5(){
            
        }
        section6(){
            
        }
        section7(){
            
        }
        section8(){
            
        }
        section9(){
            
        }
        section10(){
            
        }
        footer(){

        }

    }
    const newAngency = new Angency();
         newAngency.init();
})(jQuery, window, document);