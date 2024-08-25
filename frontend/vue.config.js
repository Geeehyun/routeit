const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: "../backend/src/main/resources/static", //빌드 타멧 디렉토리
  devServer: {
    port: 8081,
    proxy: {
      '/example': {
        // '/api' 로 들어오면 port 8080 스프링 서버로 이동
        target: 'http://localhost:8080',
        changeOrigin: true // crossOrigin 허용
      }
    }
  },
  transpileDependencies: true
})
