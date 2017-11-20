---
title: Markdown Basics
subtitle: Syntax for creating content
categories: [general]
tags: [markdown]
lang: en
---

This is the basic syntax to create posts and pages. Most examples are taken from the [kramdown quick reference](https://kramdown.gettalong.org/quickref.html), the Markdown renderer behind Jekyll. For more details see the [complete kramdown syntax](https://kramdown.gettalong.org/syntax.html).


## Headers - Setext style

```md
First level header
==================

Second level header
-------------------
```

***RESULT:***

First level header
==================

Second level header
-------------------

---

## Headers - atx style

```md
# H1 Header

## H2 Header

### H3 Header

#### H4 Header

##### H5 Header

###### H6 Header
```

***RESULT:***

# H1 Header

## H2 Header

### H3 Header

#### H4 Header

##### H5 Header

###### H6 Header

---

## Blockquotes

```md
> A sample blockquote.
>
> >Nested blockquotes are
> >also possible.
>
> ## Headers work too
> This is the outer quote again.

> This is a blockquote
continued on this
and this line.

But this is a separate paragraph.
```

***RESULT:***

> A sample blockquote.
>
> >Nested blockquotes are
> >also possible.
>
> ## Headers work too
> This is the outer quote again.

> This is a blockquote
continued on this
and this line.

But this is a separate paragraph.

---

## Code Blocks - indent style

Four spaces or one tab to start a code block:

```md
    This is a sample code block.

    Continued here.
```

***RESULT:***

    This is a sample code block.

    Continued here.

---

## Code Blocks - fenced style

Three or more tildes or backticks, optional language specification:

``````md
~~~~~~
This is also a code block.
~~~
Ending lines must have at least as
many tildes as the starting line.
~~~~~~~~~~~~

``` ruby
def what?
  42
end
```
``````

***RESULT:***

~~~~~~
This is also a code block.
~~~
Ending lines must have at least as
many tildes as the starting line.
~~~~~~~~~~~~

``` ruby
def what?
  42
end
```

---

## Horizontal Rules

Three or more asterisks, dashes or underscores, optionally separated by spaces or tabs:

```md
* * *

---

  _  _  _  _

---------------
```

***RESULT:***

* * *

---

  _  _  _  _

---------------

***END RESULT*** ;-)

---

## Lists

```md
1. This is a list item
1. And another item
1. And the third one
   with additional text

* A list item
with additional text

1.  This is a list item

    > with a blockquote

    # And a header

2.  Followed by another item

1. Item one
   1. sub item one
   2. sub item two
   3. sub item three
2. Item two

This is a paragraph.
1. This is NOT a list.

1. This is a list!

* Item one
+ Item two
- Item three
