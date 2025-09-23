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
const TeamProjectSlider = {
    currentProject: 0,
    totalProjects: 3,
    autoInterval: null,
    
    // 프로젝트 데이터
    projects: [
        {
            title: 'Subway',
            desc: '사용자 경험 개선을 목표로, 기존 웹의 복잡한 UI 구조와 비효율적인 플로우를 재설계했습니다. 전체 웹어플리케이션의 인 UI 시안, 브랜드 컬러와 사용성 모두를 고려한 디자인을 구성하였으며, 기획서 작성부터 최종 발표까지 주도적으로 참여하여 팀 내부로 발표를 진행하였습니다.',
            period: '2025. 05. 01 - 2025. 05. 31',
            contribution: '디자인 60%',
            links: [
                { title: 'Figma Design', url: 'https://www.figma.com/design/rvXr2QLvLZU3xKP0zuN55h/T-Project_SUBWAY?node-id=0-1&t=y0rmE3y1HPzz8axh-1', type: '기획서' }
            ],
            image: 'img/visual-T1.png'
        },
        {
            title: 'Tamburins',
            desc: '감각적인 브랜드 이미지에 비해 UI 구성과 사용자 흐름이 제한적이었던 기존 웹사이트를, 감성적 브랜딩은 유지하면서 UX 사용성을 강화하는 방향으로 리디자인하였고, 포토샵과 일러스트레이터 등의 툴을 적극 활용해 일관된 비주얼 아이덴티티와 사용자 친화적인 레이아웃을 구현하였습니다.',
            period: '2025. 06. 01 - 2025. 06. 30',
            contribution: '디자인 80%',
            links: [
                { title: 'Live Website', url: 'https://parkyoonseo117.github.io/Tamburins/', type: '최종 웹사이트' },
                { title: 'Figma Design', url: 'https://www.figma.com/design/1tg6u1so1DCdguzMOsA5kj/T_Tamburins-Web?node-id=0-1&t=BUawB3rzGWc8T0Qe-1', type: '기획서' }
            ],
            image: 'img/visual-T2.png'
        },
        {
            title: 'Fandom',
            desc: '팬덤 커뮤니티의 니즈를 반영한 모바일 플랫폼 기획 및 UI 설계 프로젝트 입니다. 앱 구조 정의와 메인 사용자 흐름 구성, 스타일 가이드와 화면 시안 제작을 중심으로 참여하였고, 브랜드 무드와 사용자 편의성 모두를 고려한 디자인을 구현하며, 디자인 전담 역할을 수행했습니다.',
            period: '2025. 07. 01 - 2025. 07. 31',
            contribution: '디자인 70%',
            links: [
                { title: 'Live App', url: 'https://loopin-six.vercel.app/', type: '최종 앱' },
                { title: 'Figma Design', url: 'https://www.figma.com/design/ErEaU3v9X1szykOHV5lNHe/T_Fandom-App?node-id=0-1&t=JuFkcpYRbiBu68JB-1', type: '기획서' }
            ],
            image: 'img/visual-T3.png'
        }
    ],

    // 초기화
    init() {
        this.bindEvents();
        this.updateProject(0); // 항상 첫 번째 프로젝트부터 시작
        this.setupScrollObserver(); // 스크롤 감지 추가
    },

    // 스크롤 감지해서 섹션 진입시 자동 슬라이드 시작
    setupScrollObserver() {
        const section = document.querySelector('.worklist-team');
        if (!section) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 섹션에 진입하면 첫 번째 프로젝트로 리셋하고 자동 슬라이드 시작
                    console.log('워크리스트 섹션 진입 - 슬라이드 시작');
                    this.stopAuto(); // 기존 인터벌 정리
                    this.updateProject(0);
                    // 약간의 딜레이 후 자동 슬라이드 시작
                    setTimeout(() => {
                        this.startAuto();
                    }, 100);
                } else {
                    // 섹션을 벗어나면 자동 슬라이드 정지
                    console.log('워크리스트 섹션 이탈 - 슬라이드 정지');
                    this.stopAuto();
                }
            });
        }, { threshold: 0.3 }); // 30% 보이면 진입으로 판단

        observer.observe(section);
    },

    // 이벤트 바인딩
    bindEvents() {
        // 프로젝트 클릭
        document.querySelectorAll('.project-item').forEach((item, index) => {
            item.addEventListener('click', () => this.goTo(index));
        });

        // Read More 버튼 클릭 - 모달 열기
        const readMoreBtn = document.querySelector('.read-more');
        if (readMoreBtn) {
            readMoreBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal();
            });
        }

        // 마우스 호버시 자동슬라이드 정지/재개
        const section = document.querySelector('.worklist-team');
        if (section) {
            section.addEventListener('mouseenter', () => this.stopAuto());
            section.addEventListener('mouseleave', () => this.startAuto());
        }
    },

    // 프로젝트 업데이트
    updateProject(index) {
        this.currentProject = index;
        const project = this.projects[index];

        // active 클래스 업데이트
        document.querySelectorAll('.project-item').forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });

        // 프로젝트 정보 업데이트
        const title = document.querySelector('.project-title');
        const desc = document.querySelector('.project-desc');
        const infoParagraphs = document.querySelectorAll('.project-info p');
        const image = document.querySelector('.project-image-container img');

        if (title) title.textContent = project.title;
        if (desc) desc.textContent = project.desc;
        if (infoParagraphs[0]) infoParagraphs[0].textContent = `기간 | ${project.period}`;
        if (infoParagraphs[1]) infoParagraphs[1].textContent = `기여도 | ${project.contribution}`;
        if (image) image.src = project.image;
    },

    // 특정 프로젝트로 이동
    goTo(index) {
        this.stopAuto();
        this.updateProject(index);
        this.startAuto();
    },

    // 자동 슬라이드 시작
    startAuto() {
        this.stopAuto();
        console.log('자동 슬라이드 시작'); // 디버깅용
        this.autoInterval = setInterval(() => {
            const next = (this.currentProject + 1) % this.totalProjects;
            console.log(`${this.currentProject + 1} → ${next + 1}번 프로젝트로 이동`); // 디버깅용 (사용자 친화적으로 1,2,3으로 표시)
            this.updateProject(next);
        }, 5000); // 다시 5초로 변경
    },

    // 자동 슬라이드 정지
    stopAuto() {
        if (this.autoInterval) {
            clearInterval(this.autoInterval);
            this.autoInterval = null;
        }
    },

    // 모달 열기
    openModal() {
        const project = this.projects[this.currentProject];
        this.createModal(project);
    },

    // 모달 생성
    createModal(project) {
        // 기존 모달 제거
        const existingModal = document.querySelector('.project-modal');
        if (existingModal) existingModal.remove();

        // 모달 HTML 생성
        const modalHTML = `
            <div class="project-modal" onclick="this.remove()">
                <div class="modal-content" onclick="event.stopPropagation()">
                    <div class="modal-header">
                        <h3>${project.title}</h3>
                        <button class="modal-close" onclick="document.querySelector('.project-modal').remove()">×</button>
                    </div>
                    <div class="modal-body">
                        <p class="modal-desc">${project.desc}</p>
                        <div class="link-cards">
                            ${project.links.map(link => `
                                <div class="link-card" onclick="window.open('${link.url}', '_blank')">
                                    <div class="card-icon">${this.getLinkIcon(link.type)}</div>
                                    <div class="card-content">
                                        <h4>${link.title}</h4>
                                        <span>${link.type}</span>
                                    </div>
                                    <div class="card-arrow">→</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;

        // 모달 CSS 추가
        if (!document.querySelector('#modal-styles')) {
            const styles = `
                <style id="modal-styles">
                .project-modal {
                    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                    background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center;
                    z-index: 9999; backdrop-filter: blur(5px);
                }
                .modal-content {
                    background: #fff; border-radius: 20px; max-width: 600px; width: 90%;
                    max-height: 80vh; overflow-y: auto; position: relative;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                }
                .modal-header {
                    padding: 30px 30px 20px; border-bottom: 1px solid #eee;
                    display: flex; justify-content: space-between; align-items: center;
                }
                .modal-header h3 {
                    font-family: 'Cormorant Garamond', serif; font-size: 28px; margin: 0;
                    color: #000; font-weight: 500; letter-spacing: -0.5px;
                }
                .modal-close {
                    background: none; border: none; font-size: 30px; color: #999;
                    cursor: pointer; width: 40px; height: 40px; display: flex;
                    align-items: center; justify-content: center; border-radius: 50%;
                    transition: all 0.2s ease;
                }
                .modal-close:hover { background: #f5f5f5; color: #000; }
                .modal-body { padding: 30px; }
                .modal-desc {
                    font-size: 16px; line-height: 1.6; color: #666; margin-bottom: 30px;
                    
                }
                .link-cards { display: flex; flex-direction: column; gap: 15px; }
                .link-card {
                    border: 1px solid #e8e8e8; border-radius: 12px; padding: 20px;
                    display: flex; align-items: center; cursor: pointer;
                    transition: all 0.2s ease; background: #fff;
                }
                .link-card:hover {
                    border-color: #000; transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                }
                .card-icon {
                    font-size: 24px; margin-right: 20px; width: 40px;
                    display: flex; align-items: center; justify-content: center;
                }
                .card-content { flex: 1; }
                .card-content h4 {
                    font-size: 18px;
                    margin: 0 0 5px 0; color: #000;
                }
                .card-content span {
                    font-size: 14px; color: #999; font-weight: 300;
                }
                .card-arrow {
                    font-size: 20px; color: #ccc; transition: all 0.2s ease;
                }
                .link-card:hover .card-arrow { color: #000; transform: translateX(5px); }
                </style>
            `;
            document.head.insertAdjacentHTML('beforeend', styles);
        }

        // 모달 추가
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    },

    // 링크 타입별 아이콘
    getLinkIcon(type) {
        const icons = {
            '최종 웹사이트': '🌐',
            '최종 앱': '📱',
            '기획서': '📋',
        };
        return icons[type] || '🔗';
    }
};

// DOM 로드후 실행
document.addEventListener('DOMContentLoaded', () => {
    // 섹션이 존재하는지 먼저 확인
    const worklistSection = document.querySelector('.worklist-team');
    if (worklistSection) {
        console.log('팀 프로젝트 섹션 찾음, 슬라이더 시작');
        TeamProjectSlider.init();
    } else {
        console.log('팀 프로젝트 섹션을 찾을 수 없음');
        // 약간의 딜레이 후 다시 시도
        setTimeout(() => {
            const worklistSection = document.querySelector('.worklist-team');
            if (worklistSection) {
                console.log('딜레이 후 팀 프로젝트 섹션 찾음, 슬라이더 시작');
                TeamProjectSlider.init();
            }
        }, 1000);
    }
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