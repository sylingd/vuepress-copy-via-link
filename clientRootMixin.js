/* global START_TEXT, SUCCESS_MSG, MANUAL_MSG */
import copy from 'clipboard-copy';

export default {
  data: () => ({}),

  mounted() {
    this.updateCopy()
  },

  updated() {
    this.updateCopy()
  },

  methods: {
    updateCopy() {
      setTimeout(() => {
        Array.prototype.forEach.call(document.querySelectorAll('a'), it => {
          if (it.href.includes(START_TEXT)) {
            it.addEventListener("click", this.onClick);
          }
        });
      }, 1000)
    },
    onClick(event) {
      const target = event.currentTarget;
      const statr_index = target.href.indexOf(START_TEXT);
      if (statr_index >= 0) {
        const text = target.href.substr(statr_index + START_TEXT.length);
        copy(text).then(() => {
            if (SUCCESS_MSG) {
              alert(SUCCESS_MSG);
            }
          })
          .catch(() => {
            if (MANUAL_MSG) {
              window.prompt(MANUAL_MSG, text);
            }
          });
        event.preventDefault();
        return false;
      }
    }
  }
}