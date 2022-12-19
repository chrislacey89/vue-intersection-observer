import { ref, onMounted, onUnmounted } from "vue";

export const onIntersect = (
  enterCallback: () => void,
  outCallback: () => void,
  options = { threshold: 1.0, rootMargin: "0px" }
) => {
  const containerRef = ref();
  let observer: IntersectionObserver;
  const isIntersecting = ref(false);

  onMounted(() => {
    observer = new IntersectionObserver(callback, options);
    if (containerRef.value) {
      observer.observe(containerRef.value);
    }
  });
  onUnmounted(() => {
    observer.disconnect();
  });

  function callback(entries: IntersectionObserverEntry[]) {
    const [entry] = entries;
    isIntersecting.value = entry.isIntersecting;
    if (entry.isIntersecting) {
      enterCallback();
    } else {
      outCallback();
    }
  }

  return containerRef;
};
