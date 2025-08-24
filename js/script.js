//01.a속성제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
})

//02.scrolla.js
$(function(){
    $('.animate').scrolla({
        moblie:true,
        once:false
    })
})

//03.splitting
$(function(){Splitting();})

//04.scrollTrigger
$(function(){
    gsap.registerPlugin(ScrollTrigger);

 // <credit> -------------------
// 1. 처음에는 크레딧 숨김
// gsap.set(".credit", { yPercent: -100 });

// // 2. 비주얼 끝에서 크레딧 내려오고 스크롤 잠금
// ScrollTrigger.create({
//   trigger: ".visual",
//   start: "bottom bottom",
//   end: "bottom bottom",
//   once: true,
//   onEnter: () => {
//     gsap.to(".credit", {
//       yPercent: 0,
//       duration: 1,
//       ease: "power2.out"
//     });

//     // 스크롤 잠금
//     document.body.style.overflow = "hidden";
//     $("header").addClass("dark");
//   }
// });

// // 3. View More 클릭 시 다음 섹션으로 이동
// $(".view-more").on("click", function () {
//   const target = document.querySelector(".intro-main");

//   // 크레딧 올리기
//   gsap.to(".credit", {
//     yPercent: -100,
//     duration: 1,
//     ease: "power2.inOut",
//     onComplete: () => {
//       // 스크롤 잠금 해제
//       document.body.style.overflow = "auto";

//       // 부드럽게 다음 섹션으로 이동
//       gsap.to(window, {
//         scrollTo: { y: target, autoKill: false },
//         duration: 1,
//         ease: "power2.inOut"
//       });
//     }
//   });
// });



    // <intro 가로스크롤> --------------------
    let sections = gsap.utils.toArray(".page");
    {
        let totalWidth = 0;
        sections.forEach(section => {
            totalWidth += section.offsetWidth;
        });

        let scrollTween = gsap.to(sections, {
            x: -totalWidth + window.innerWidth, // 실제 너비로 계산
            ease: "none",
            scrollTrigger: {
                trigger: '.scroll-container',
                pin: true,
                scrub: 1,
                start: 'top top',
                end: () => "+=" + totalWidth + "px", // 실제 너비로 end 계산
            }
        });
    };

    // <worklist-intro> --------------
    gsap.timeline({
        scrollTrigger:{
            trigger:'.worklist-intro',
            start:'0% 100%',
            end:'0% 20%',
            scrub:1,
            // markers:true
        }
    })
    .fromTo('.worklist-intro .title .a', {x:'-100%'},{x:'-0%', ease:'none', duration:5},0)
    .fromTo('.worklist-intro .title .b', {x:'100%'},{x:'0%', ease:'none', duration:5},0)

    // <hobby> -------------------
    gsap.timeline({
        scrollTrigger: {
            trigger: '.hobby',
            start: 'top top',
            end: '+=1000',
            scrub: 2,
            // markers: true,
            pin:true
        }
    })
    .fromTo('.hobby .inner span.a', { y: '400%' }, { y: '0', duration: 3, ease: "power2.out"}, 0)
    .fromTo('.hobby .inner span.b', { y: '400%' }, { y: '0', duration: 3,ease: "power2.out" }, 0.7)
    .fromTo('.hobby .inner span.c', { y: '400%' }, { y: '0', duration: 3,ease: "power2.out" }, 1.3)
    .fromTo('.hobby .inner span.d', { y: '400%' }, { y: '0', duration: 3,ease: "power2.out" }, 1.9)
    .fromTo('.hobby .inner span.e', { y: '400%' }, { y: '0', duration: 3,ease: "power2.out" }, 2.5)
    .fromTo('.hobby .inner span.f', { y: '400%' }, { y: '0', duration: 3,ease: "power2.out" }, 3.1)
    // .fromTo('.hobby .inner span.g', { y: '400%' }, { y: '0', duration: 3,ease: "power2.out" }, 3.7)
    // .fromTo('.hobby .inner span.h', { y: '400%' }, { y: '0', duration: 3,ease: "power2.out" }, 4.3);

    // hobby 텍스트 퍼짐 효과
    gsap.to(".text-wrapper .text-left", {
        xPercent: -60,
        opacity: 0.4, // 텍스트 색
        scrollTrigger: {
        trigger: ".hobby",
        start: "top top",
        end: "center center",
        scrub: true
        }
    });

    gsap.to(".text-wrapper .text-right", {
        xPercent: 55,
        opacity: 0.4, // 텍스트 색
        scrollTrigger: {
        trigger: ".hobby",
        start: "top top",
        end: "center center",
        scrub: true
        }
    });
    
}); // ----------------

    // <worklist-team> ----------------
    class WorklistTeam {
        constructor() {
            this.currentProject = 0;
            this.projectItems = document.querySelectorAll('.project-item');
            this.projectSlides = document.querySelectorAll('.project-slide');
            this.progressBars = document.querySelectorAll('.progress-fill');
            this.readMoreBtn = document.querySelector('.read-more');
            this.imageEl = document.querySelector('.project-image-container img'); // 이미지 요소 캐시
            this.autoSlideInterval = null;
            this.progressInterval = null;
            this.slideInterval = 5000; // 5초
            this.isTransitioning = false; // 전환 중복 방지
            
            this.projects = [
                {
                    title: 'Subway',
                    desc: '사용자 경험 개선을 목표로, 기존 웹의 복잡한 UI 구조와 비효율적인 플로우를 재설계했습니다. 전체 웹어플리케이션의 인 UI 시안, 브랜드 컬러와 사용성 모두를 고려한 디자인을 구성하였으며, 기획서 작성부터 최종 발표까지 주도적으로 참여하여 팀 내부로 발표를 진행하였습니다.',
                    period: '2025. 05. 01 - 2025. 06. 31',
                    contribution: '디자인 60%',
                    link: '#subway-project',
                    image: 'img/visual-T1.png',
                    alignment: 'center'
                },
                {
                    title: 'Tamburins',
                    desc: '감각적인 브랜드 이미지에 비해 UI 구성과 사용자 흐름이 제한적이었던 기존 웹사이트를, 감성적 브랜딩은 유지하면서 UX 사용성을 강화하는 방향으로 리디자인하였고, 포토샵과 일러스트레이터 등의 툴을 적극 활용해 일관된 비주얼 아이덴티티와 사용자 친화적인 레이아웃을 구현하였습니다.',
                    period: '2025. 06. 01 - 2025. 06. 30',
                    contribution: '디자인 80%',
                    link: '#tamburins-project',
                    image: 'img/visual-T2.png',
                    alignment: 'center'
                },
                {
                    title: 'Fandom App',
                    desc: '팬덤 커뮤니티의 니즈를 반영한 모바일 플랫폼 기획 및 UI 설계 프로젝트 입니다. 앱 구조 정의와 메인 사용자 흐름 구성, 스타일 가이드와 화면 시안 제작을 중심으로 참여하였고, 브랜드 무드와 사용자 편의성 모두를 고려한 디자인을 구현하며, 디자인 전담 역할을 수행했습니다.',
                    period: '2025. 07. 01 - 2025. 07. 31',
                    contribution: '디자인 70%',
                    link: '#fandom-project',
                    image: 'img/visual-T3.png',
                    alignment: 'center'
                }
            ];

            this.init();
        }

        init() {
            this.preloadImages(); // 이미지 미리 로딩
            this.bindEvents();
            this.updateContent(0);
            this.startAutoSlide();
        }

        // 이미지 미리 로딩 (렉 방지)
        preloadImages() {
            this.projects.forEach(project => {
                const img = new Image();
                img.src = project.image;
            });
        }

        bindEvents() {
            // 프로젝트 아이템 클릭 이벤트
            this.projectItems.forEach((item, index) => {
                item.addEventListener('click', () => {
                    if (!this.isTransitioning) { // 전환 중복 방지
                        this.changeProject(index);
                    }
                });
            });
        }

        changeProject(index) {
            if (this.currentProject === index) return; // 같은 프로젝트면 무시
            
            this.stopAutoSlide();
            this.currentProject = index;
            this.updateProject();
            this.updateContent(index);
            this.startAutoSlide();
        }

        updateProject() {
            // 활성화된 프로젝트 아이템 업데이트
            this.projectItems.forEach((item, index) => {
                item.classList.toggle('active', index === this.currentProject);
            });

            // 슬라이드 업데이트 (있다면)
            if (this.projectSlides.length > 0) {
                this.projectSlides.forEach((slide, index) => {
                    slide.classList.toggle('active', index === this.currentProject);
                });
            }

            // 프로그레스 바 초기화
            this.progressBars.forEach(bar => {
                bar.style.width = '0%';
            });
        }

        updateContent(index) {
            if (this.isTransitioning) return; // 전환 중이면 무시
            
            this.isTransitioning = true;
            const project = this.projects[index];
            const titleEl = document.querySelector('.project-title');
            const descEl = document.querySelector('.project-desc');
            const periodEl = document.querySelector('.project-info p:first-child');
            const contributionEl = document.querySelector('.project-info p:last-child');
            
            // 빠른 이미지 전환 (opacity 없이 바로 변경)
            if (this.imageEl && project.image) {
                this.imageEl.style.opacity = '0.3'; // 살짝 흐리게
                
                // 이미지 로드 완료 후 부드럽게 전환
                const newImg = new Image();
                newImg.onload = () => {
                    this.imageEl.src = project.image;
                    this.imageEl.alt = `${project.title} 이미지`;
                    this.imageEl.style.opacity = '1'; // 선명하게
                };
                newImg.src = project.image;
            }
            
            // 텍스트 부드러운 전환
            titleEl.style.opacity = '0';
            descEl.style.opacity = '0';
            
            setTimeout(() => {
                titleEl.textContent = project.title;
                descEl.textContent = project.desc;
                periodEl.textContent = `기간 | ${project.period}`;
                contributionEl.textContent = `기여도 | ${project.contribution}`;
                this.readMoreBtn.href = project.link;

                titleEl.style.opacity = '1';
                descEl.style.opacity = '1';
                
                this.isTransitioning = false; // 전환 완료
            }, 150); // 시간 단축 (200ms → 150ms)
        }

        startAutoSlide() {
            this.stopAutoSlide();
            
            const currentProgressBar = this.progressBars[this.currentProject];
            let progress = 0;
            const increment = 100 / (this.slideInterval / 50);
            
            this.progressInterval = setInterval(() => {
                progress += increment;
                if (currentProgressBar) {
                    currentProgressBar.style.width = `${Math.min(progress, 100)}%`;
                }
                
                if (progress >= 100) {
                    clearInterval(this.progressInterval);
                    this.nextProject();
                }
            }, 50);
        }

        stopAutoSlide() {
            if (this.progressInterval) {
                clearInterval(this.progressInterval);
                this.progressInterval = null;
            }
        }

        nextProject() {
            this.currentProject = (this.currentProject + 1) % this.projects.length;
            this.updateProject();
            this.updateContent(this.currentProject);
            this.startAutoSlide();
        }
    }

    // 페이지 로드 후 초기화
    document.addEventListener('DOMContentLoaded', () => {
        new WorklistTeam();
    });

    //<faq> ----------------------
    function toggleFAQ(button) {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // 모든 FAQ 아이템 닫기
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // 클릭한 아이템이 닫혀있었다면 열기
        if (!isActive) {
            faqItem.classList.add('active');
        }
    }
        
    // 키보드 접근성
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFAQ(this);
            }
        });
    });

    //<contact> -----------------
    // Add subtle mouse movement effect
        document.addEventListener('mousemove', (e) => {
            const rotatingText = document.querySelector('.rotating-text');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            const rotateX = (mouseY - 0.5) * 5;
            const rotateY = (mouseX - 0.5) * 5;
            
            if (rotatingText) {
                rotatingText.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });