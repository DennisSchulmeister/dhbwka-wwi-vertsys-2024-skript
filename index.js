/*
 * Vorlesung "Webprogrammierung"
 * im Studiengang Wirtschaftsinformatik
 * an der DHBW Karlsurhe
 *
 * © 2017 Dennis Schulmeister-Zimolong <dhbw@windows3.de>
 * Lizenz: Creative Commons Namensnennung 4.0 International
 *
 * Sie dürfen:
 *
 *     Teilen — das Material in jedwedem Format oder Medium vervielfältigen
 *     und weiterverbreiten
 *
 *     Bearbeiten — das Material remixen, verändern und darauf aufbauen
 *     und zwar für beliebige Zwecke, sogar kommerziell.
 *
 * Unter folgenden Bedingungen:
 *
 *     Namensnennung — Sie müssen angemessene Urheber- und Rechteangaben
 *     machen, einen Link zur Lizenz beifügen und angeben, ob Änderungen
 *     vorgenommen wurden. Diese Angaben dürfen in jeder angemessenen Art
 *     und Weise gemacht werden, allerdings nicht so, dass der Eindruck
 *     entsteht, der Lizenzgeber unterstütze gerade Sie oder Ihre Nutzung
 *     besonders.
 *
 *     Keine weiteren Einschränkungen — Sie dürfen keine zusätzlichen Klauseln
 *     oder technische Verfahren einsetzen, die anderen rechtlich irgendetwas
 *     untersagen, was die Lizenz erlaubt.
 *
 * Es werden keine Garantien gegeben und auch keine Gewähr geleistet.
 * Die Lizenz verschafft Ihnen möglicherweise nicht alle Erlaubnisse,
 * die Sie für die jeweilige Nutzung brauchen. Es können beispielsweise
 * andere Rechte wie Persönlichkeits- und Datenschutzrechte zu beachten
 * sein, die Ihre Nutzung des Materials entsprechend beschränken.
 */
"use strict";

import emailLinkJs from "email-link.js";

import SlideshowPlayer from "@dschulmeis/lecture-slides.js";
import "./style/style.less";

import LsPluginExtraTags from "@dschulmeis/ls-plugin-extra-tags";
import LS_Plugin_Markdown from "@dschulmeis/ls-plugin-markdown";

import LsPluginHighlightJs from "@dschulmeis/ls-plugin-highlight.js";
import HLJS_Language_XML from 'highlight.js/lib/languages/xml';
import HLJS_Language_CSS from 'highlight.js/lib/languages/css';
import HLJS_Language_JS from "highlight.js/lib/languages/javascript";
import HLJS_Language_JSON from "highlight.js/lib/languages/json";
import HLJS_Language_Docker from "highlight.js/lib/languages/dockerfile";
import HLJS_Language_YAML from "highlight.js/lib/languages/yaml";
import HLJS_Language_HTTP from "highlight.js/lib/languages/http";
import HLJS_Language_SHELL from "highlight.js/lib/languages/shell";
import "highlight.js/styles/atom-one-light.css";

import * as AsciinemaPlayer from "asciinema-player";
import "asciinema-player/dist/bundle/asciinema-player.css";
window.AsciinemaPlayer = AsciinemaPlayer;

window.addEventListener("load", async () => {
    let player = new SlideshowPlayer({
        labelPrev: "Zurück",
        labelNext: "Weiter",
        labelGoTo: "Gehe zu",
        labelViewMenu: "Ansicht",
        labelOverview: "Inhaltsverzeichnis",
        labelSlidesAndText: "Vollständige Inhalte",
        labelSlidesOnly: "Präsentationsmodus",
        //labelTextOnly: "Nur Text",
        labelPrintView: "Drucken",
        labelFadeToWhite: "Alles ausbleden (weiß)",
        labelFadeToBlack: "Alles ausblenden (schwarz)",
        labelFadeBack: "Klicken, um zu den Folien zurückzukehren",
        disabled: ["text-only", "print-view"],
        slideNumber: "0",
        mode: "slideshow",  // "overview",
        linkMode: "slideshow",
        plugins: {
            // TODO: Auslagern in eigene Bibliothek
            TerminalCast: {
                preprocessHtml(html) {
                    html.querySelectorAll("terminal-cast").forEach(element => {
                        let url    = element.getAttribute("url")   || "";
                        let id     = element.getAttribute("id")    || "";
                        let class_ = element.getAttribute("class") || "";
                        let style  = element.getAttribute("style") || "";

                        let options = {
                            fit:     "both",
                            theme:   "asciinema",
                            preload: true, 
                            cols:    parseInt(element.getAttribute("cols")) || 200,
                            rows:    parseInt(element.getAttribute("rows")) || 30,
                            poster:  element.getAttribute("poster")         || "",
                        };

                        let divElement = document.createElement("div");
                        divElement.style.height = "30em";
                        divElement.setAttribute("id", id);
                        divElement.setAttribute("class", class_);
                        divElement.setAttribute("style", style);

                        AsciinemaPlayer.create(url, divElement, options);
                        element.replaceWith(divElement);
                    });
                }
            },
            Markdown: new LS_Plugin_Markdown(),
            ExtraTags: new LsPluginExtraTags({
                labelCarouselNext: "Nächstes Bild",
                labelCarouselPrev: "Vorheriges Bild",
                labelCarouselReset: "Nochmal von vorne",
                labelGithubEditOnline: "Online-IDE starten",
                labelGithubEditDownload: "Quellcode herunterladen",
                labelQuizPoints: "{1} von {2}",
                labelQuizEvaluate: "Bewerten",
                labelQuizNewTry: "Neuer Versuch",
                githubEditUrlPrefix: "https://github.com/DennisSchulmeister/dhbwka-wwi-vertsys-2024-quellcodes/tree/main/",
                githubPagesUrlPrefix: "https://dennisschulmeister.github.io/dhbwka-wwi-vertsys-2024-quellcodes/",
            }),
            HighlightJs: new LsPluginHighlightJs({
                languages: {
                    html: HLJS_Language_XML,
                    css: HLJS_Language_CSS,
                    javascript: HLJS_Language_JS,
                    json: HLJS_Language_JSON,
                    docker: HLJS_Language_Docker,
                    yaml: HLJS_Language_YAML,
                    yml: HLJS_Language_YAML,
                    http: HLJS_Language_HTTP,
                    sh: HLJS_Language_SHELL,
                    shell: HLJS_Language_SHELL,
                }
            }),
        }
    });

    await player.start();
    emailLinkJs.enableEmailLinks();
});