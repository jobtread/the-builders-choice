const { EventSource, location } = globalThis;

if (location.hostname === 'localhost') {
  new EventSource('/watch').addEventListener('message', () =>
    location.reload()
  );
}
