---
layout: post
title : Contoh Layout
subtitle : tentang layout
date : 2022-12-23 00:00:00 +0700
header-img : '/assets/img/home-bg.jpg'
# nav-style : invert
catalog: true
toc:
  - name: Perangkat Lunak Sistem
    subsections:
      - name: A. Sistem operasi / platform perangkat lunak
      - name: B. Driver
      - name: C. Utilitas
  - name: Perangkat Lunak Aplikasi
    subsections:
      - name: A. Application Software
      - name: B. Jenis Perangkat Lunak Aplikasi
  - name: Daftar pustaka
tags:
  - contoh
  - jekyll
---
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida purus et neque accumsan ultrices id a erat. Nunc turpis sem, gravida id nibh quis, sodales efficitur risus. Mauris a suscipit nisi. Aenean sed est sit amet mi sagittis elementum. In aliquam blandit nisl, nec elementum ex semper at. Vivamus dignissim diam sit amet risus volutpat viverra id quis dolor. In nec feugiat magna, a feugiat tortor. Quisque tincidunt odio non velit pellentesque euismod. Etiam consequat erat non felis pellentesque, a molestie lectus mollis. Integer venenatis nulla ut auctor porta. Suspendisse congue imperdiet ante, ac imperdiet ipsum cursus in. Duis blandit cursus purus, vitae consectetur nisl pellentesque ut. Etiam vitae velit mattis dolor consequat posuere id sed lacus. Donec ornare leo est, quis laoreet erat cursus et. Nullam tincidunt finibus nisl, at molestie enim dictum nec. In hac habitasse platea dictumst.

# Markdown Cheat Sheet

Thanks for visiting [The Markdown Guide](https://www.markdownguide.org)!

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).
## Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements. **bold text** , *italicized text*

> blockquote

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


`code`

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

### Fenced Code Block

{% tabs log %}

{% tab log php %}
```php
var_dump('hello');
```
{% endtab %}

{% tab log js %}
```javascript
console.log('hello');
```
{% endtab %}

{% tab log ruby %}
```javascript
pputs 'hello'
```
{% endtab %}

{% endtabs %}

### Second tabs


```yaml
hello:
  - 'whatsup'
  - 'hi'
```

other code

```json
{
    "hello": ["whatsup", "hi"]
}
```

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Emoji

That is so funny! :joy:

(See also [Copying and Pasting Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))

### Highlight

I need to highlight these ==very important words==.

### Subscript

H~2~O

### Superscript

X^2