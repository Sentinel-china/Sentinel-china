/**
 * useInView Hook
 * 用于检测元素是否进入视口，支持入场动画
 */
import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useInView<T extends Element>({
  threshold = 0,
  rootMargin = '0px'
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, [threshold, rootMargin]);

  return { ref, visible };
}
