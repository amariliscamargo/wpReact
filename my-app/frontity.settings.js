const settings = {
  "name": "my-app",
  "state": {
    "frontity": {
      "url": "http://localhost:8000",
      "title": "Front da Amarilis",
      "description": "WordPress esta servindo de API para o React"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Quem Somos",
              "/quem-somos/"
            ],
            [
              "Blog",
              "/category/blog/"
            ],
            [
              "Contato",
              "/contato/"
            ],
            [
              "login",
              "/jwt-auth/v1/token"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://localhost:8000/wp-json/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
