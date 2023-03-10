---
layout: post
title : Contoh Layout
subtitle : tentang layout
date : 2022-12-23 00:00:00 +0700
header-img : 'home-bg.jpg'
tags:
  - contoh
  - jekyll
---

### Heading example
Here is example of hedings. You can use this heading by following markdownify rules. For example: use `#` for heading 1 and use `######` for heading 6.

### Code
`is primary`
`is-success`{:.is-success}
`is-warning`{:.is-warning}
`is-danger`{:.is-danger}
`is-info`{:.is-info}


# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
### heading with custom idaaaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaaaaa {#custom-id}

***

## Emphasis

Emphasis, aka italics, with asterisks or underscores.
Strong emphasis, aka bold, with **asterisks** or __underscores.__
Combined emphasis with **asterisks and *underscores***
Strikethrough uses two tildes. ~~Scratch this~~

***

## Link

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

***

## Paragraph
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus, facilis placeat pariatur! Voluptatem, sed harum pariatur adipisci voluptates voluptatum cumque, porro sint minima similique magni perferendis fuga! Optio vel ipsum excepturi tempore reiciendis id quidem? Vel in, doloribus debitis nesciunt fugit sequi magnam accusantium modi neque quis, vitae velit, pariatur harum autem a! Velit impedit atque maiores animi possimus asperiores natus repellendus excepturi sint architecto eligendi non, omnis nihil. Facilis, doloremque illum. Fugit optio laborum minus debitis natus illo perspiciatis corporis voluptatum rerum laboriosam.


### Ordered List
1. First item
2. Second item
3. Third item

### Unordered List
- First item
- Second item
- Third item

1. First item
  - sub item 1
  - sub item 2
  - sub item 3
2. Second item
  - sub item 1
  - sub item 2
  - sub item 3
3. Third item
  - sub item 1
  - sub item 2
  - sub item 3

***

## Code and Syntax Highlighting
### tabs Code
{% tabs log %}

{% tab log python %}
{% highlight python%}
while True:
  print("hello")
  print("world")
{% endhighlight %}
{% endtab %}

{% tab log php %}
```php
var_dump('hello');
```
{% endtab %}

{% tab log js %}
```javascript
// highlighting lines
console.log('hello');
```
{% endtab %}

{% tab log akukamu %}
<div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quibusdam vel iste at, possimus alias natus corporis inventore, in perferendis molestiae officiis deleniti beatae. Nobis esse quae earum fugit repellendus.</p>
</div>
{% endtab %}

{% endtabs %}

***

{% code_title page rendered at: %}
```php
var_dump('hello');
var_dump('hello');
var_dump('hello');
var_dump('hello');
```
{% code_title Python %}
{% highlight python%}
while True:
  print("hello")
  print("world")
{% endhighlight %}

# Markdown Cheat Sheet

Thanks for visiting [The Markdown Guide](https://www.markdownguide.org)!

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can???t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).
## Basic Syntax

These are the elements outlined in John Gruber???s original design document. All Markdown applications support these elements. *bold text* , *italicized text*

> blockquote

---

### Link

[Markdown Guide](https://www.markdownguide.org)

### Image

![alt text](https://www.markdownguide.org/assets/images/tux.png)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

***

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

***

### Definition List

term
: definition

### Task List
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Emoji

That is so funny! :joy:


## Other 

#### notification
{% capture content %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
{% endcapture %}

{% include message.html content=content title="abc" delete=true %}
{% include message.html content=content type="is-success" title="abc" delete=true %}
{% include message.html content=content type="is-warning" title="abc" delete=true %}
{% include message.html content=content type="is-danger" title="abc" delete=true %}
