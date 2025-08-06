const { EventSource, location } = globalThis;

if (location.hostname === 'localhost') {
  new EventSource('/watch').onmessage = () => location.reload();
}
