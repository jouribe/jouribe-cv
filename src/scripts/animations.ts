import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, CustomEase);

const EASE_NAME = 'smooth';
const EASE_CURVE = 'M0,0 C0.25,0.1 0.25,1 1,1';

export function initSmoothScroll(): void {
  ScrollSmoother.create({
    smooth: 1.5,
    effects: true,
    // normalizeScroll removed: causes CLS (layout recalculations)
    // smoothTouch removed: delays INP on mobile by intercepting touch events
  });
}

export function initHeroAnimations(): void {
  const heroTitle = document.querySelector('.gsap-hero-title');
  if (!heroTitle) return;

  CustomEase.create(EASE_NAME, EASE_CURVE);
  const tl = gsap.timeline({ defaults: { ease: EASE_NAME } });

  // LCP fix: hero title animates only via transform (y), never opacity:0
  // This keeps the H1 visible from first paint so Google can measure LCP immediately
  tl.from('.gsap-hero-title', { y: 30, duration: 0.8, delay: 0.2 })
    .from('.gsap-hero-subtitle', { y: 20, opacity: 0, duration: 0.8 }, '-=0.6')
    .from(
      '.gsap-hero-contact',
      { y: 15, opacity: 0, duration: 0.6, stagger: 0.1 },
      '-=0.6',
    )
    .from('.gsap-hero-summary', { y: 20, opacity: 0, duration: 0.8 }, '-=0.4');
}

export function initScrollAnimations(): void {
  const sections = gsap.utils.toArray<HTMLElement>('.gsap-section');
  sections.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  });

  const items = gsap.utils.toArray<HTMLElement>('.gsap-experience-item');
  if (items.length > 0) {
    ScrollTrigger.batch(items, {
      onEnter: (batch) =>
        gsap.from(batch, {
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power2.out',
        }),
      start: 'top 85%',
    });
  }
}

export function initBadgeAnimations(): void {
  const badges = document.querySelectorAll<HTMLElement>('.gsap-skill-badge');
  badges.forEach((badge) => {
    badge.addEventListener('mouseenter', () =>
      gsap.to(badge, { scale: 1.05, duration: 0.2, ease: 'power1.out' }),
    );
    badge.addEventListener('mouseleave', () =>
      gsap.to(badge, { scale: 1, duration: 0.2, ease: 'power1.out' }),
    );
  });
}

export function initAllAnimations(): void {
  initSmoothScroll();
  initHeroAnimations();
  initScrollAnimations();
  initBadgeAnimations();
}
