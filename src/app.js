useEffect(() => {
  const handleEsc = (event) => {
    if (event.key === 'Escape') {
      handleOverlayClose();
    }
  };

  window.addEventListener('keydown', handleEsc);
  return () => {
    window.removeEventListener('keydown', handleEsc);
  };
}, []);

