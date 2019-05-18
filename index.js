const path = require('path')

module.exports = (options = {}) => ({
  define: {
    START_TEXT: options.start || "#copy:",
    SUCCESS_MSG: options.message || "",
    MANUAL_MSG: options.manual_copy || ""
  },

  clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js')
})
