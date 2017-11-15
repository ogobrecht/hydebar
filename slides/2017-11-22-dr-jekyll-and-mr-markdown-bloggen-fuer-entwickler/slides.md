<!-- {% raw %} -->

## Dr. Jekyll and Mr. Markdown
### Bloggen für Entwickler

Ottmar Gobrecht, Markus Dötsch

DOAG Konferenz 2017, Nürnberg

-----

## Motivation

---

### Wissen teilen!

Oder zumindest bewahren! :)

---

### Schnell und unkompliziert

Hürden minimieren!

---

### Bekannte Tools

Context Switches vermeiden!

---

### Bloggen als Teil der "normalen" Arbeit

Nicht als extra Teil ansehen!

-----

## Was ist Jekyll?

---

### Ein Generator für statische Webseiten

Genauer, ein Ruby Skript

---

### Was soll das bringen?

---

- Geschwindigkeit
- Sicherheit
- Anpassbarkeit (übersichtlich)

---

Geschwindigkeit dynamisch - DSL

![WordPress Beispiel](./assets/ladezeit-dynamisch.png)

87 Requests - 1,3 MB - 2,7 s Ladezeit

---

Geschwindigkeit statisch - DSL

![Jekyll Beispiel](./assets/ladezeit-statisch.png)

2 Requests - 5 KB - 0,1 s Ladezeit

---

Geschwindigkeit dynamisch - mobil 3G

![WordPress Beispiel](./assets/ladezeit-dynamisch-langsam-mobil.png)

86 Requests - 1,3 MB - 36,3 s Ladezeit

---

Geschwindigkeit statisch - mobil 3G

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

### Ist das sicher? FIXME: Screenshot DokuWiki einfügen

![DokuWiki Beispiel](./assets/dokuwiki-updates.png)

---

### Fragen?

-----

## Was ist Markdown?

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

![Ein Bild](./assets/john-gruber.png)
```

---

### Abgrenzung

HTML = Publikations-Format

Markdown = Schreib-Format

---

### Toolunterstützung

![Editor Atom mit Live-Vorschau](./assets/editor-atom.png)

Beispiel: [Editor Atom](https://atom.io/) mit [Plugin Markdown-Writer](https://atom.io/packages/markdown-writer)

---

### Fragen?

-----

## Online in 5 Minuten

---

### Alles im Browser

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
  - Permalink:
    - `/posts/:year-:month-:day-:title`
    - [Jekyll Doku](https://jekyllrb.com/docs/permalinks/)
  - Sidebar
  - ...

---

### Fragen?

-----

## Optionale Installation lokal

Für Neugierige und "Selbermacher"

---

### Installation Git Client

- [Tutorial 1](https://git-scm.com/docs/gittutorial)
- [Tutorial 2](http://rogerdudler.github.io/git-guide/index.de.html)

---

### Installation Ruby

- [Doku Installation](https://www.ruby-lang.org/de/documentation/installation/)
- [Download](https://rubyinstaller.org/)

---

### Installation Jekyll

- [Doku Installation](https://jekyllrb.com/docs/installation/)
- [Doku GitHub Pages & Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)
- Paketmanager und Jekyll
```sh
gem install bundler
bundle install
```

Anmerkung:

- Windows ist von Jekyll nicht offiziell unterstützt
- Dokumentation: <https://jekyllrb.com/docs/windows/>
- Windows 10 - Integrierte Bash verwenden

---

### Installation Blog

Im (übergeordneten) Projektverzeichnis:
```sh
git clone yourForkedRepoURL.git
```

Das lokale Verzeichnis wird automatisch angelegt

```sh
cd yourForkedRepoName
bundle install
```

Notwendige Jekyll files werden installiert

Anmerkung:

GitHub URL = `https://github.com/UserName/RepoName.git`
Beispiel: <https://github.com/Madtsch/madtsch.github.io.git>

---

### Starten Devserver

Automatischer Refresh bei Änderungen
```sh
bundle exec jekyll serve
```

<small markdown="1">Server ist unter <http://127.0.0.1:4000> aufrufbar</small>

Einmaliger Refresh
```sh
bundle exec jekyll build
```

---

### Publizieren der Änderungen auf GitHub

```sh
git push yourForkedRepoURL.git
```

---

### Spätere Updates von Jekyll

```sh
bundle update
```

---

### Fragen?

-----

## Inhalte Erstellen

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
- Editor Visual Studio Code
  - Plugin: Markdown All in One
- Jede gute IDE hat Plugins für Markdown

---

### Demo...

---

### Fragen?

-----

## Die Jekyll Blackbox

---

### Was ist ein Post?

- Liegt irgendwo unterhalb von `_posts`
- Namenskonvention
  - `yyyy-mm-dd-post-titel.md`
- [Jekyll Doku: Writing posts](https://jekyllrb.com/docs/posts/)

---

### Was ist eine Page?

- Alles, was kein Post ist
  - Also, nicht zeitbasiert
  - Statische Seiten eben ;-)
- [Jekyll Doku: Creating pages](https://jekyllrb.com/docs/pages/)
- [Jekyll Doku: Static files](https://jekyllrb.com/docs/static-files/)

---

### Frontmatter?

- Die Metadaten von posts und pages
- [Jekyll Doku: Front Matter](https://jekyllrb.com/docs/frontmatter/)

```yaml
---
title: Dr. Jekyll and Mr. Markdown - Bloggen für Entwickler
subtitle: DOAG Konferenz 2017, Nürnberg
categories: [slides]
tags: [jekyll, markdown]
author: [ogobrecht, madtsch]
lang: de
last_modified_at: 2017-11-12
---
Hier kommt dann der eigentliche Artikel
...
```

---

### Verzeichnisstruktur

```
.
├── _config.yml
├── _data
|   └── members.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.md
|   └── on-simplicity-in-technology.md
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
|   └── 2009-04-26-barcamp-boston-4-roundup.md
├── _sass
|   ├── _base.scss
|   └── _layout.scss
├── _site
├── .jekyll-metadata
└── index.html # can also be an 'index.md' with valid YAML Frontmatter
```
[Jekyll Doku: Directory structure](https://jekyllrb.com/docs/structure/)


---

### Posts & Pages verlinken 1

URLs Mit Liquid Includes (gleich mehr dazu)

```
{{ site.baseurl }}{% link _collection/name-of-document.md %}
{{ site.baseurl }}{% link _posts/2016-07-26-name-of-post.md %}
{{ site.baseurl }}{% link news/index.html %}
{{ site.baseurl }}{% link /assets/files/doc.pdf %}
```
<small markdown="1">`{{ site.baseurl }}` ist je nach Konfiguration optional</small>

[Jekyll Doku: Links](https://jekyllrb.com/docs/templates/#links)

---

### Posts & Pages verlinken 2

Mit Markdown Link Syntax & Include

```md
[Link to a document]({% link _collection/name-of-document.md %})
[Link to a post]({% link _posts/2016-07-26-name-of-post.md %})
[Link to a page]({{ site.baseurl }}{% link news/index.html %})
[Link to a file]({{ site.baseurl }}{% link /assets/doc.pdf %})
```
<small markdown="1">`{{ site.baseurl }}` ist je nach Konfiguration optional</small>

---

### Posts & Pages verlinken 3

Nur mit Markdown...

```md
[Link to a post](/posts/2016-07-26-name-of-post.html)
[Link to a page]({{ site.baseurl }}/news/index.html)
[Link to a file]({{ site.baseurl }}/assets/doc.pdf)
```
<small markdown="1">`{{ site.baseurl }}` ist je nach Konfiguration optional</small>

Wo ist der Unterschied?

Das link Include sorgt für korrekte Permalinks!

---

### Demo...

---

### Fragen?

-----

## Jekyll selbst erweitern

Beispiel: [Reveal.js](http://lab.hakim.se/reveal-js/) Integration

Was uns hilft: Jekylls Übersichtlichkeit und Anpassbarkeit

---

### Die Grundlage Liquid

Jekylls Template Engine

- Layouts
- Includes
- [Jekyll Templates](https://jekyllrb.com/docs/templates/) (Liquid)
- [Liquid Template Language](https://shopify.github.io/liquid/)

---

### Demo...

---

### Warum Reveal.js?

- Slides HTML5 basiert
- Touch Support für mobile Geräte
- Unterstützt Markdown
- [Reveal.js Doku](https://github.com/hakimel/reveal.js)

---

### Was brauchen wir?

- Layout für Reveal.js
- Include zur Einbindung in Posts
- Eine Markdowndatei für Slides
- Die Reveal.js Library Files

---

### Ideen zur Umsetzung

- Ein Ordner pro Präsentation
- `index.md` für Reveal.js
- `slides.md` für Slides (ohne Front Matter)
- Reveal Libs in `/assets`
- Include mit Variable `path`

---

### Demo...

---

### Fragen?

-----

## Links

---

### Weitere Jekyll Themes/Templates

- Mit ["Fork Quick Start"](https://github.com/barryclark/jekyll-now#other-forkable-themes)
- [Step by Step Anleitung](http://jmcglone.com/guides/github-pages/)

---

### Weitere Static Site Generators

- [Hugo](https://gohugo.io/) (Go)
- [Hexo](https://hexo.io/) (Node.js)
- [Gatsby](https://www.gatsbyjs.org/) (Node.js, React)
- [Pelican](https://blog.getpelican.com/) (Python)
- ...
- [Top Ten Liste 2017](https://www.netlify.com/blog/2017/05/25/top-ten-static-site-generators-of-2017/)
- [Übersicht nach Beliebtheit](https://www.staticgen.com/)

---

### PL/SQL Template Engines

- [FTLDB](https://github.com/ftldb/ftldb/blob/master/README.md)
- [tePLSQL](https://github.com/osalvador/tePLSQL/blob/master/README.md)

---

## The End

### Fragen?

[ogobrecht.github.io](https://ogobrecht.github.io)

[madtsch.github.io](https://madtsch.github.io)  

<!-- {% endraw %} -->
