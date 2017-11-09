## Dr. Jekyll and Mr. Markdown
### Bloggen für Entwickler

Markus Dötsch, Ottmar Gobrecht

DOAG Konferenz 2017, Nürnberg

-----

## Motivation

---

### Teilt Euer Wissen!

-----

## Was ist Jekyll?

---

### Ein Generator für statische Webseiten

---

### Was soll das bringen?

---

- Geschwindigkeit
- Sicherheit

---

...

-----

## Was ist Markdown?

---

### Eine vereinfachte Auszeichnungssprache

(vornehmlich zur HTML Erstellung)

---

...

---

## Online in 3 Minuten

Alles im Browser

---

- Login to GitHub
- Go to https://github.com/ogobrecht/jekyll-sidebar-template
- Fork Repository
- Edit `_config.yml` (url, baseurl)
- Repository Settings
    - Rename to yourUserName.github.io
    - Activate GitHub Pages

---

### Vervollständigung Konfiguration

- `_data/authors`
- `_config.yml`

---

...

-----

## Optionale Installation lokal

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
