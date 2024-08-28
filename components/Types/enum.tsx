export enum IconTypes {
  SEARCH = "search",
  MAP = "map",
  MEDAL = "medal",
  ALBUM = "album",
  PROJECTS = "projects",
}

export enum LeftPanelOptions {
  ABOUT = "About",
  EXPERIENCE = "Experience",
  ACHIEVEMENTS = "Achievements",
  PROJECTS = "Projects",
  EASTEREGG = "EasterEgg"
}

export enum LanguageTitle {
  Typescript = "Typescript",
  Javascript = "Javascript",
  Python = "Python",
  Nodejs = "Node.js",
  Django = "Django",
  YAML = "YAML",
  JACKIE = "Jackie Chan Movies",
}

export enum LanguageCode {
  JavascriptHelloWorld = `const greetWithDelay = ms:number => 
  new Promise(resolve => setTimeout(
  () => resolve("Hello, World!"), ms));
  ................`,
  PythonHelloWorld = `def hello_world():
    print("Hello, World!")

  hello_world()`,
  NodejsHelloWorld = `(function() {
    console.log("Hello, World!");
  })();`,
  DjangoHelloWorld = `from django.http import HttpResponse

  def hello_world(request):
      return HttpResponse("Hello, World!")`,
  YAMLHelloWorld = `message: "Hello, World!"`,
  JackieHelloWorld = `Born in Hong Kong, Already a Dragon :)
  He is/was/will always the legend... <3`,
}
