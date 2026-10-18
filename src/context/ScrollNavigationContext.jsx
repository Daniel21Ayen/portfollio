import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const ROUTES = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/contact', label: 'Contact' }
];

const ScrollNavigationContext = createContext({
  direction: 'down',
  currentIndex: 0,
  nextRoute: null,
  prevRoute: null,
  isNavigating: false,
  triggerNavigate: () => {},
  routes: ROUTES
});

export const ScrollNavigationProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [direction, setDirection] = useState('down');
  const [isNavigating, setIsNavigating] = useState(false);
  const isNavigatingRef = useRef(false);
  const targetScrollRef = useRef('top'); // 'top' | 'bottom'
  const prevPathnameRef = useRef(location.pathname);
  const wheelAccumulatorRef = useRef(0);
  const touchStartYRef = useRef(null);
  const touchDeltaYRef = useRef(0);
  const lastNavTimeRef = useRef(0);

  const currentIndex = ROUTES.findIndex((r) => r.path === location.pathname);
  const nextRoute = currentIndex >= 0 && currentIndex < ROUTES.length - 1 ? ROUTES[currentIndex + 1] : null;
  const prevRoute = currentIndex > 0 ? ROUTES[currentIndex - 1] : null;

  // Handle route change scroll positioning and direction detection
  useEffect(() => {
    const prevIndex = ROUTES.findIndex((r) => r.path === prevPathnameRef.current);
    const currIndex = ROUTES.findIndex((r) => r.path === location.pathname);

    if (prevIndex !== -1 && currIndex !== -1 && prevIndex !== currIndex) {
      if (currIndex > prevIndex && direction !== 'down') {
        setDirection('down');
      } else if (currIndex < prevIndex && direction !== 'up') {
        setDirection('up');
      }
    }
    prevPathnameRef.current = location.pathname;

    const applyScrollPosition = () => {
      if (targetScrollRef.current === 'bottom') {
        const doc = document.documentElement;
        const maxScroll = Math.max(doc.scrollHeight, document.body.scrollHeight) - window.innerHeight;
        window.scrollTo({ top: Math.max(0, maxScroll), behavior: 'instant' });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    applyScrollPosition();

    // Additional frames to ensure accurate scroll height after layout settles
    const rafId = requestAnimationFrame(applyScrollPosition);
    const t1 = setTimeout(applyScrollPosition, 60);
    const t2 = setTimeout(applyScrollPosition, 180);

    // Cooldown lock to absorb leftover momentum and prevent skipping
    isNavigatingRef.current = true;
    setIsNavigating(true);

    const unlockTimer = setTimeout(() => {
      isNavigatingRef.current = false;
      setIsNavigating(false);
      targetScrollRef.current = 'top';
      wheelAccumulatorRef.current = 0;
    }, 750);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(unlockTimer);
    };
  }, [location.pathname, direction]);

  const triggerNavigate = useCallback((dir) => {
    const now = Date.now();
    if (isNavigatingRef.current || now - lastNavTimeRef.current < 750) {
      return;
    }

    if (dir === 'down' && nextRoute) {
      isNavigatingRef.current = true;
      setIsNavigating(true);
      lastNavTimeRef.current = now;
      setDirection('down');
      targetScrollRef.current = 'top';
      navigate(nextRoute.path);
    } else if (dir === 'up' && prevRoute) {
      isNavigatingRef.current = true;
      setIsNavigating(true);
      lastNavTimeRef.current = now;
      setDirection('up');
      targetScrollRef.current = 'bottom';
      navigate(prevRoute.path);
    }
  }, [navigate, nextRoute, prevRoute]);

  // Global listeners for wheel, touch gestures, and keyboard
  useEffect(() => {
    if (currentIndex === -1) return;

    let wheelTimeout = null;

    const isModalActive = () => {
      return (
        document.body.classList.contains('modal-open') ||
        Boolean(document.querySelector('[role="dialog"], [class*="modalOverlay"], [class*="activeModal"]'))
      );
    };

    const handleWheel = (e) => {
      if (isNavigatingRef.current || isModalActive()) return;

      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );

      const isAtBottom = windowHeight + currentScrollY >= docHeight - 25;
      const isAtTop = currentScrollY <= 15;

      // Reset accumulator if user reverses scroll direction
      if ((e.deltaY > 0 && wheelAccumulatorRef.current < 0) ||
          (e.deltaY < 0 && wheelAccumulatorRef.current > 0)) {
        wheelAccumulatorRef.current = 0;
      }

      if (isAtBottom && e.deltaY > 0 && nextRoute) {
        wheelAccumulatorRef.current += e.deltaY;
        if (wheelAccumulatorRef.current > 75) {
          wheelAccumulatorRef.current = 0;
          triggerNavigate('down');
        }
      } else if (isAtTop && e.deltaY < 0 && prevRoute) {
        wheelAccumulatorRef.current += e.deltaY;
        if (wheelAccumulatorRef.current < -75) {
          wheelAccumulatorRef.current = 0;
          triggerNavigate('up');
        }
      } else {
        wheelAccumulatorRef.current = 0;
      }

      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        wheelAccumulatorRef.current = 0;
      }, 250);
    };

    const handleTouchStart = (e) => {
      if (e.touches && e.touches.length > 0) {
        touchStartYRef.current = e.touches[0].clientY;
        touchDeltaYRef.current = 0;
      }
    };

    const handleTouchMove = (e) => {
      if (touchStartYRef.current === null || !e.touches || e.touches.length === 0) return;
      touchDeltaYRef.current = touchStartYRef.current - e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (isNavigatingRef.current || touchStartYRef.current === null || isModalActive()) {
        touchStartYRef.current = null;
        touchDeltaYRef.current = 0;
        return;
      }

      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );

      const isAtBottom = windowHeight + currentScrollY >= docHeight - 35;
      const isAtTop = currentScrollY <= 20;
      const delta = touchDeltaYRef.current;

      // Swiped up at bottom (scrolling down to next page)
      if (isAtBottom && delta > 55 && nextRoute) {
        triggerNavigate('down');
      } else if (isAtTop && delta < -55 && prevRoute) {
        // Swiped down at top (scrolling up to prev page)
        triggerNavigate('up');
      }

      touchStartYRef.current = null;
      touchDeltaYRef.current = 0;
    };

    const handleKeyDown = (e) => {
      if (isNavigatingRef.current || isModalActive()) return;
      const tag = document.activeElement?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );

      const isAtBottom = windowHeight + currentScrollY >= docHeight - 20;
      const isAtTop = currentScrollY <= 15;

      if ((e.key === 'ArrowDown' || e.key === 'PageDown') && isAtBottom && nextRoute) {
        triggerNavigate('down');
      } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && isAtTop && prevRoute) {
        triggerNavigate('up');
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(wheelTimeout);
    };
  }, [currentIndex, nextRoute, prevRoute, triggerNavigate]);

  const value = {
    direction,
    currentIndex,
    nextRoute,
    prevRoute,
    isNavigating,
    triggerNavigate,
    routes: ROUTES
  };

  return (
    <ScrollNavigationContext.Provider value={value}>
      {children}
    </ScrollNavigationContext.Provider>
  );
};

export const useScrollNav = () => useContext(ScrollNavigationContext);
