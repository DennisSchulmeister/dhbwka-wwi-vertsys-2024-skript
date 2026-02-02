NIBBLES.BAS für JavaScript
==========================

Dies ist ein kleiner Hack für die Einleitungsfolien. Mit https://qbjc.dev/ wird das
`NIBBLES.BAS`-Beispiel von QBasic für JavaScript kompiliert und hier ein eine kleine
HTML-Seite eingebettet. Der obige Link öffnet eine Online-IDE, in welcher das Beispiel
direkt geladen, ausgeführt und als kompilierte JavaScript-Datei herunter geladen
werden kann.

Der compilierte Quellcode muss hier in die Datei `compiled-code.js` kopiert und auf
ES6-Syntax angepasst werden: `export default` anstatt `module.exports`.

Leider harmoniert die QBJC-Runtime nicht gut mit Esbuild, weil sie auch im Browser-Code
ein paar Node.js APIs referenziert. Esbuild läuft dann auf Compilier-Fehler. Durch
Installation folgender Kompatibilitätspakete konnte das Problem zumindest vorläufig
gelöst werden:

* `buffer`
* `string_decoder`
* `process`

Das Beispiel ist ein wenig Hacky. Mit <kbd>ESC</kbd> kann der Code neugestartet
werden. Die Schriftgröße des virtuellen Terminals passt sich automatisch an die
Größe des Viewports an, so dass ein 80x25-Terminal maximal groß angezeigt wird.

Mit `npm start` kann das Beispiel direkt ausprobiert werden. Mit `npm run build`
kann es gebaut werden. Der Inhalt des `static`-Verzeichnisses muss dann manuell
an die richtige Stelle im Folienskript kopiert werden.