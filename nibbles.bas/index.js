import {Terminal}        from "@xterm/xterm";
import {FitAddon}        from "@xterm/addon-fit";
import {WebglAddon}      from "@xterm/addon-webgl";
import {BrowserExecutor} from "qbjc/browser";
import code              from "./compiled-code.js";

import "@xterm/xterm/css/xterm.css";

window.addEventListener("DOMContentLoaded", async () => {
    const fitAddon = new FitAddon();

    const terminal = new Terminal({cursorBlink: true});
    terminal.loadAddon(new WebglAddon());
    terminal.loadAddon(fitAddon);
    terminal.open(document.getElementById("terminal"));

    function resizeTerminal() {
        const wantedCols = 80;
        const wantedRows = 25;

        terminal.options.fontSize = 12;
        fitAddon.fit();

        if (terminal.cols < wantedCols) return;
        if (terminal.rows < wantedRows) return;

        for (i = 0; i < 100; i++) {
            terminal.options.fontSize++;
            fitAddon.fit();

            if ((terminal.cols < wantedCols) || (terminal.rows < wantedRows)) {
                terminal.options.fontSize--;
                fitAddon.fit();
                break;
            }
        }
    }

    resizeTerminal();
    window.addEventListener("resize", () => resizeTerminal());

    const executor = new BrowserExecutor(terminal)
    executor.executeModule(code);

    window.addEventListener("keyup", event => {
        if (event.key == "Escape") {
            executor.executeModule(code);
        }
    });
});