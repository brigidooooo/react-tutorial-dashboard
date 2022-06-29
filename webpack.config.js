module.exports = {
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      components: path.resolve(__dirname, "src/components"),
      config: path.resolve(__dirname, "src/config"),
      constants: path.resolve(__dirname, "src/constants"),
      hooks: path.resolve(__dirname, "src/hooks"),
      providers: path.resolve(__dirname, "src/providers"),
      store: path.resolve(__dirname, "src/store"),
      style: path.resolve(__dirname, "src/style"),
      theme: path.resolve(__dirname, "src/theme"),
      utils: path.resolve(__dirname, "src/utils"),
    },
    extensions: [".ts", ".js", ".json", "tsx"],
    modules: ["./node_modules"],
  },
};

/** For Fixing */
