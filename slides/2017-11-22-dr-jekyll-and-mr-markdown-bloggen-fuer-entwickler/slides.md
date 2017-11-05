## Dr. Jekyll and Mr. Markdown
### Bloggen für Entwickler

Markus Dötsch, Ottmar Gobrecht

DOAG Konferenz 2017, Nürnberg

-----

## Erster Blickkontakt

-----

## Was ist Jekyll?

-----

## Installation

---

### Installation Betriebssystem

- Git Client
- Ruby
- `gem install bundler`
- `bundle install jekyll`

---

### Installation Blog

- In das Projektverzeichnis wechseln
- git checkout url
- `bundle install`

---

### Konfiguration Blog

- Kopieren `_config.yml.dist` zu  `_config.yml`
- Bearbeiten `_config.yml`
- Bearbeiten Posts in `_posts`

---

### Starten Devserver

- `bundle exec kekyll serve`
- `bundle exec jekyll build`

---

### Spätere Updates
- `bundle install`
- `bundle update github-pages`
- `bundle update html-proofer`
- `bundle exec jekyll serve`
- `bundle exec jekyll build`
- `bundle exec htmlproofer ./_site --assume-extension --file-ignore /\/assets.*/,/\/slides.*/`

-----

## Die Jekyll Blackbox

Convention over configuration

---

### Wenig Konfiguration

---

### Viel Konvention

---

### Verzeichnisstruktur

---

### Implizite Metadaten

---

## Markdown

Das Schreibformat der Wahl

---

### Automatisches Inhaltsverzeichnis
```
# Contents
{:.no_toc}

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}
```

---

## Frontmatter

Die Metadaten

---

## Liquid

Die Templatesprache

- https://shopify.github.io/liquid/
- https://shopify.github.io/liquid/basics/variations/
- http://jekyllrb.com/docs/templates/

---

## Weiter Site Generatoren

- Hexo
- Gatsby
- Hakyll
- ...

---

## Links

- Jekyll Guide: http://jmcglone.com/guides/github-pages/
-

---

## Feeds

https://www.mnot.net/rss/tutorial/
http://www.feedvalidator.org/

---

## The End

### Fragen?

[Madtsch.github.io][98]  
[ogobrecht.github.io][99]

[98]: https://Madtsch.github.io
[99]: https://ogobrecht.github.io
