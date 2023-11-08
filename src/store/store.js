// @ts-nocheck
import { derived, readable, writable } from "svelte/store";

export const count = writable(0);

export const time = readable(new Date(), set => {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return () => clearInterval(interval);
});

const start = new Date();

export const elapsedTime = derived(time, $time => {
  return Math.round(($time - start) / 1000);
});

const createCount = () => {
  const { subscribe, update, set } = writable(0);

  return {
    subscribe,
    increment: (size = 1) => update(value => value + size),
    decrement: (size = 1) => update(value => value - size),
    reset: () => set(0),
  };

};

export const customCount = createCount()