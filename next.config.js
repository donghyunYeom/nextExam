module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['duckzill-resource.s3.ap-northeast-2.amazonaws.com'],
  },
  shortUrl:{
    domains: ['https://openapi.naver.com/v1/util/shorturl'],
  },
  env: {
    'MYSQL_HOST': '127.0.0.1',
    'MYSQL_PORT': '3306',
    'MYSQL_DATABASE': 'localPj',
    'MYSQL_USER': 'root',
    'MYSQL_PASSWORD': 'ejrwlf2021',
    'NEXTAUTH_URL': 'http://localhost:3000/',
  },
}