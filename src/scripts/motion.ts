const root = document.documentElement;
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let teardown = () => {};

const startMotion = () => {
  teardown();

  if (motionPreference.matches) {
    delete root.dataset.motion;
    document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((element) => element.style.removeProperty('--motion-y'));
    return;
  }

  root.dataset.motion = 'ready';
  const revealElements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      (entry.target as HTMLElement).dataset.revealed = 'true';
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -7% 0px' });

  revealElements.forEach((element) => revealObserver.observe(element));

  const parallaxElements = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
  let frame = 0;
  const updateParallax = () => {
    frame = 0;
    const viewportHeight = window.innerHeight;
    parallaxElements.forEach((element) => {
      const bounds = element.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > viewportHeight) return;
      const progress = ((bounds.top + bounds.height / 2) - viewportHeight / 2) / (viewportHeight + bounds.height);
      const distance = window.innerWidth < 768 ? 10 : 20;
      element.style.setProperty('--motion-y', `${Math.max(-1, Math.min(1, progress)) * distance}px`);
    });
  };
  const requestUpdate = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(updateParallax);
  };

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate, { passive: true });
  requestUpdate();

  teardown = () => {
    revealObserver.disconnect();
    window.removeEventListener('scroll', requestUpdate);
    window.removeEventListener('resize', requestUpdate);
    if (frame) window.cancelAnimationFrame(frame);
  };
};

startMotion();
motionPreference.addEventListener('change', startMotion);
