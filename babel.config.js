module.exports = {
  presets: [
    [ "@vue/app", { useBuiltIns: "entry" } ] // 这样写是因为core-js到了版本3，不支持polyfill
  ]
}
