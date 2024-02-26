export enum IconTypes {
  SEARCH = "search",
  MAP = "map",
  MEDAL = "medal",
  ALBUM = "album",
  PROJECTS = "projects",
}

export enum LanguageTitle {
  Javascript = "Javascript",
  Python = "Python",
  Nodejs = "Node.js",
  Django = "Django",
  YAML = "YAML",
}

export enum LanguageCode {
  JavascriptHelloWorld = `const greetWithDelay = ms => 
  new Promise(resolve => setTimeout(
  () => resolve("Hello, World!"), ms));
   
   greetWithDelay(1000).then(msg => console.log(msg));`,
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
}
