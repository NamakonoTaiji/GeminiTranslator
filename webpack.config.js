// webpack.config.js
const path = require("path");

module.exports = {
  mode: "development", // 'development' にするとデバッグしやすくなります
  devtool: "inline-source-map",
  entry: "./background.js", // あなたの元の background.js ファイルのパス
  output: {
    path: path.resolve(__dirname, "dist"), // バンドル後のファイルの出力先ディレクトリ
    filename: "background_bundle.js", // バンドル後のファイル名
  },
  // resolve: { // Node.jsのコアモジュールへの依存がライブラリにある場合、フォールバックが必要なことがあります
  //   fallback: {
  //     "fs": false, // 例: fs モジュールはブラウザ環境にはないので false
  //     "path": require.resolve("path-browserify"),
  //     // 必要に応じて他のモジュールも追加
  //   }
  // },
  // experiments: { // background.js でトップレベル await を使っている場合
  //   topLevelAwait: true,
  // },
};
