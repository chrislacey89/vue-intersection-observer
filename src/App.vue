<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// See this file to see how the IntersectionObserver is implemented
import { onIntersect } from "./composables/onIntersect";

const onEnter = () => {
  document.documentElement.style.setProperty(
    "--body-background",
    "var(--color-dark)"
  );
  document.documentElement.style.setProperty(
    "--card-background",
    "var(--color-black)"
  );
  document.documentElement.style.setProperty(
    "--color-text",
    "var(--color-white)"
  );
  console.log("entered");
};

// This is the (optional) callback being called when the element no longer intersects
const onExit = () => {
  document.documentElement.style.setProperty(
    "--body-background",
    "var(--color-red)"
  );
  document.documentElement.style.setProperty(
    "--card-background",
    "var(--color-white)"
  );
  document.documentElement.style.setProperty(
    "--color-text",
    "var(--color-dark)"
  );
  console.log("exited");
};

const intersectRef = onIntersect(onEnter, onExit, {
  threshold: 0.8,
});
// This is the callback being called on intersection

// When the component is mounted, start observing



</script>

<template>
  <section class="scrollSection">
    <div class="card">
      <h2>
        If the scrren is red />
        the observer is not triggered
      </h2>
    </div>
  </section>
  <section class="scrollSection" ref="intersectRef">
    <div class="card">
      <h2>
        If the screen is black<br />
        I am being observed
      </h2>
    </div>
  </section>
</template>

<style>
:root {
  --color-dark: #2c3e50;
  --color-red: #f9526a;
  --color-white: #ffffff;
  --color-black: #1b2631;

  --body-background: var(--color-red);
  --color-text: var(--color-dark);
  --card-background: var(--color-white);
}

#app {
  background: var(--body-background);
  font-family: "Poppins", Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: var(--color-text);
  margin: 0;
  padding-top: 60px;
  transition: background 300ms ease-in-out;
  width: 100vw;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
}

h2 {
  letter-spacing: 1px;
  text-transform: uppercase;
}

.scrollSection {
  display: grid;
  min-height: 100vh;
  place-items: center;
  width: 100vw;
}
.card {
  background: var(--card-background);
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  border-radius: 25px;
  display: inline-flex;
  margin: 0 auto 45px;
  padding: 60px 60px;
  height: 300px;
  width: 300px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
