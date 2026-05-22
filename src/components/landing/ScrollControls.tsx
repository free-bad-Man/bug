'use client';

export function ScrollControls() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function scrollToBottom() {
    const page = document.documentElement;

    window.scrollTo({
      top: page.scrollHeight,
      behavior: 'smooth',
    });
  }

  return (
    <div className="scroll-controls" aria-label="Быстрая прокрутка страницы">
      <button
        className="scroll-control scroll-control--top"
        type="button"
        aria-label="Прокрутить наверх"
        onClick={scrollToTop}
      >
        <span aria-hidden="true">↑</span>
      </button>
      <button
        className="scroll-control scroll-control--bottom"
        type="button"
        aria-label="Прокрутить вниз"
        onClick={scrollToBottom}
      >
        <span aria-hidden="true">↓</span>
      </button>
    </div>
  );
}