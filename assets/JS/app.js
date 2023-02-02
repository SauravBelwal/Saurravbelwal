/*================MENU SHOW============ */
//   import Swiper from 'swiper/swiper-bundle.esm.js';
//    import Swiper from 'swiper/swiper-bundle.esm.js';
//     import 'swiper/swiper-bundle.css';

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle');
      navClose = document.getElementById('nav-close')

      /*==============MENU SHOW============== */
      if(navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu')
        })

      }

      if(navToggle){
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })

      }

      /*===========REMOVE MENu MOBILE============== */
      
      const navLink = document.querySelectorAll('.nav_link')

           function linkAction(){
           const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
           navMenu.classList.remove('show-menu')
         }
           navLink.forEach(n => n.addEventListener('click', linkAction))

           /*====================ACCORDION SKILLS =======================*/
        //    const skillsContent = document.getElementsByClassName('skills_content'),
        //          skillsHeader = document.querySelectorAll('.skills_header')

        //    function toggleSkills(){
        //     let itemClass = this.parentNode.className
        //     for(i = 0; i < skillsContent.length; i++){
        //         skillsContent[i].className = 'skills_content skills_close'
        //      }
        //      if(itemClass === 'skills_content skills_close'){
        //         this.parentNode.className = 'skills_Content skills_open'
        //      }
            
        //    }

        //    skillsHeader.forEach((el) => {
        //     el.addEventListener('click', toggleSkills)

        //    })

        const skillsContent = document.getElementsByClassName("skills_content");
        const skillsHeader = document.querySelectorAll(".skills_header");

        skillsHeader.forEach((el) => {
             el.addEventListener("click", (e) => {
                    e.stopPropagation();
        for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].classList.remove("skills_open");
        skillsContent[i].classList.add("skills_close");
        }
        el.parentElement.classList.add("skills_open");
        });
     });

       /*           ============================== QUALIFICATION TABS ================================== */
       const tabs = document.querySelectorAll('[data-target]'),
             tabContents = document.querySelectorAll('[data-content]')

        tabs.forEach(tab => {
            tab.addEventListener('click', ()=>{
                const target = document.querySelector(tab.dataset.target)

                tabContents.forEach(tabContent =>{
                    tabContent.classList.remove('qualification_active')
                })
                target.classList.add('qualification_active')

                tab.forEach(tab =>{
                    tab.classList.remove('qualification_active')
                })

                tab.classList.add('qualification_active')
            })
        })

               /*           ============================== SERVICES MODAL ================================== */

               const modalViews = document.querySelectorAll('.services_modal'),
                     modalBtns = document.querySelectorAll('.services_button'),
                     modalCloses = document.querySelectorAll('.services_modal-close')

                let modal = function(modalClick){
                    modalViews[modalClick].classList.add('active-modal')
                }

        modalBtns.forEach((modalBtn, i) => {
            modalBtn.addEventListener('click', () => {
                modal(i)
            })
        })

        modalCloses.forEach((modalCloses) => {
            modalCloses.addEventListener('click', () =>{
                modalViews.forEach((modalView) =>{
                    modalView.classList.remove('active-modal')
                })
            })
        })


        /*============================ PORTFOLIO SWIPER ============================== */
          let swiper = new Swiper('.portfolio_container', {
              cssMode: true,
              loop: true,
              navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
             },
              pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
        });



