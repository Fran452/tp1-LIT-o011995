const CustomEventMixin = (superClass) => class extends superClass {
  _emitEvent(name, detail = {}, options = {}) {
    this.dispatchEvent(
      new CustomEvent(name, {
        detail,
        bubbles: true,
        composed: true,
        ...options
      })
    );
  }
};

export {CustomEventMixin} 