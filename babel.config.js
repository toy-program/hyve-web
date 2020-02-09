const path = require("path");

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver", // 상대경로 설정하는 플러그인
        {
          alias: {
            "@": path.resolve(__dirname, "src"),
            "@assets": path.resolve(__dirname, "assets")
          }
        }
      ]
    ]
  };
};
