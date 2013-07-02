// TODO: есть проблема с использованием этого до того как получены библиотеки по зависимостям
try {
    require(environ.getLibPath('bem-core', '.bem/nodes/bundle.js'));
} catch(e) {}

