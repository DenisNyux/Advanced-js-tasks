const debounce = (callback, delay) => {
    let timeout;
    return function () {
      const fnCall = () => {
        callback.apply(this, arguments);
      };
      clearTimeout(timeout);
      timeout = setTimeout(fnCall, delay);
    };
  };
  