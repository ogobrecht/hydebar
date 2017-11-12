## Dr. Jekyll and Mr. Markdown
### Bloggen für Entwickler

Markus Dötsch, Ottmar Gobrecht

DOAG Konferenz 2017, Nürnberg

-----

## Motivation (md)

---

## Teilt Euer Wissen!

-----

## Was ist Jekyll? (og)

---

### Ein Generator für statische Webseiten

Genauer, ein Ruby Skript

---

### Was soll das bringen?

---

- Geschwindigkeit
- Sicherheit

---

Geschwindigkeit dynamisch - schnell (DSL)

![WordPress Beispiel](./assets/ladezeit-dynamisch.png)

87 Requests - 1,3 MB - 2,7 s Ladezeit

---

Geschwindigkeit statisch - schnell (DSL)

![Jekyll Beispiel](./assets/ladezeit-statisch.png)

2 Requests - 5 KB - 0,1 s Ladezeit

---

Geschwindigkeit dynamisch - langsam (mobil)

![WordPress Beispiel](./assets/ladezeit-dynamisch-langsam-mobil.png)

86 Requests - 1,3 MB - 36,3 s Ladezeit

---

Geschwindigkeit statisch - langsam (mobil)

![Jekyll Beispiel](./assets/ladezeit-statisch-langsam-mobil.png)

2 Requests - 5 KB - 4,2 s Ladezeit

---

[Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=de&url=ogobrecht.github.io&tab=mobile)

![WordPress Beispiel](./assets/page-speed-statisch-mobil.png)

---

[Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=de&url=ogobrecht.github.io&tab=desktop)

![WordPress Beispiel](./assets/page-speed-statisch-desktop.png)

---

[Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=de&url=www.thatjeffsmith.com&tab=mobile)

![WordPress Beispiel](./assets/page-speed-dynamisch-mobil.png)

---

[Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=de&url=www.thatjeffsmith.com&tab=desktop)

![WordPress Beispiel](./assets/page-speed-dynamisch-desktop.png)

---

### FIXME Screenshot DokuWiki einfügen wegen Sicherheit

-----

## Was ist Markdown? (og)

---

### Eine vereinfachte Auszeichnungssprache

Vornehmlich zur HTML Erstellung

---

### Ziel

Ohne Konvertierung leicht les- und schreibbar

```markdown
# Eine Überschrift der ersten Ordnung

## Eine Überschrift zweiter Ordnung

Ein Absatz mit *kursivem Text* , **fettem Text** und
einer ***Kombination aus fett und kursiv***.

- Ein Aufzählungspunkt
- Noch einer
  - Ein Unterpunkt

[Ein Link](https://daringfireball.net/projects/markdown/syntax)

![Ein Bild](/assets/john-gruber.png)
```

---

### Abgrenzung

HTML = Publikations-Format

Markdown = Schreib-Format

---

### Toolunterstützung

![Editor Atom mit Live-Vorschau](./assets/editor-atom.png)

[Editor Atom](https://atom.io/) mit [Plugin Markdown-Writer](https://atom.io/packages/markdown-writer)

---

...

-----

## Online in 3 Minuten (og)

Alles im Browser

---

- Login to [GitHub](https://github.com/)
- Fork repository [HydeBar](https://github.com/ogobrecht/hydebar)
- Edit `_config.yml` (url, baseurl)
- Change repository settings
    - Rename to yourUserName.github.io
    - Activate GitHub Pages

---

### Vervollständigung Konfiguration

- `_data/authors`
- `_config.yml`
  - permalink: /posts/:year-:month-:day-:title (einstellen und nicht mehre ändern)
  - ...

---

...

-----

## Optionale Installation lokal (md)

Für Neugierige und Bastler

---

### Installation Betriebssystem

- Git Client
- Ruby

Paketmanager und Jekyll:
```sh
gem install bundler
bundle install jekyll
```

---

### Installation Blog

Im Projektverzeichnis:
```sh
git checkout yourForkedRepoURL.git
bundle install
```

---

### Starten Devserver

Refresh bei Änderungen
```sh
bundle exec kekyll serve
```
Einmalig
```sh
bundle exec jekyll build
```
Linkprüfung
```sh
bundle exec htmlproofer ./_site \
  --assume-extension \
  --file-ignore /.*\/assets\/reveal\.js\/.*/
```

Anmerkung:

Wenn die site.basurl nicht leer sein sollte, dann wird "htmlproofer" vermutlich sehr viele Fehler werfen, weil keine internen Links auf dem Development Server stimmen. Das kann man umgehen, in dem man die Seite in dem entsprechenden Unterverzeichnis erstellen lässt - hier "jekyll-sidebar-template":

```ruby
bundle exec jekyll build -d _site/jekyll-sidebar-template
bundle exec htmlproofer ./_site \
  --assume-extension \
  --file-ignore /.*\/assets\/reveal\.js\/.*/
```

---

### Spätere Updates

```sh
bundle install
bundle update github-pages
bundle update html-proofer
```

-----

## Inhalte Erstellen (md)

---

### Online

- GitHub
- Trello

---

### Demo...

---

### Offline Toolempfehlungen

- Editor Atom
  - Plugin: Markdown-Writer
- Editor Visual Studi Code
  - Plugin: Markdown All in One
- ...

---

### Demo...

---

### Spezialitäten im Jekyll Umfeld

- Reveal.js
- Bild: `![Python Pandas](./assets/pandas.pydata.org.png) <!-- .element: width="600px" -->`
- Beispiel Bildergalerien (Touch-Ünterstützung)
- TOC: {% raw %}`{% include toc %}`{% endraw %}

---

Demo...

---

...

-----

## Die Jekyll Blackbox (md)

---

### Was ist ein Post?

---

- liegt im Ordner `_posts`
- Namenskonvention (ISO Datum)
-

---

### Was ist eine Page?

---

### Frontmatter

Die Metadaten

---

### Verzeichnisstruktur

---

### Implizite Metadaten

- Verweis Doku
-

-----

## Jekyll selbst erweitern (og)
Beispiel Reveal.js Integration

---

### Liquid

Die Templatesprache

- https://shopify.github.io/liquid/
- https://shopify.github.io/liquid/basics/variations/
- http://jekyllrb.com/docs/templates/

---

...

-----

## Links (og)

---

### Weitere Jekyll Themes/Templates

- Mit ["Fork Quick Start"](https://github.com/barryclark/jekyll-now#other-forkable-themes)
- [Step by Step Anleitung](http://jmcglone.com/guides/github-pages/)

---

## Weitere Static Site Generators

- [Hugo](https://gohugo.io/) (Go)
- [Hexo](https://hexo.io/) (Node.js)
- [Gatsby](https://www.gatsbyjs.org/) (Node.js, React)
- [Pelican](https://blog.getpelican.com/) (Python)
- ...
- [Top Ten Liste 2017](https://www.netlify.com/blog/2017/05/25/top-ten-static-site-generators-of-2017/)
- [Übersicht nach Beliebtheit](https://www.staticgen.com/)

---

## The End

### Fragen?

[madtsch.github.io](https://madtsch.github.io)  
[ogobrecht.github.io](https://ogobrecht.github.io)
