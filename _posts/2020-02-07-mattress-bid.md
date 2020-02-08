---
layout: post
title:  "rr: Mattress.bid"
date:   2020-02-08 9:00:00 -0500
categories: update
excerpt_separator: <!--more-->
---

Last weekend I created small product/referral website recently called [mattress.bid](https://www.mattress.bid). While I don’t have any immediate expectations of dominating online mattress sales, my goal was to create an *almost* real website that allows me to play around with a few new technologies I have been curious about. On my to do list was CloudFlare Workers, Nunjucks templates, Bulma CSS, and a deeper dive into structured data/JSON-LD. Being only a short, time bound project, I had to balance the time spent on each area above if I was to emerge with something resembling a functional site.

...
<!--more-->

Unlike *this* site, which is statically generated using Jekyll, given the data driven nature of the pages and my desire tinker, I opted to go for more control and build the static site out using Node JS, Gulp, and Mozilla’s Nunjucks JS templating framework. The site data is maintained in a spreadsheet which is then processed to generate all the product pages on the site. The completed product pages include valid JSON-LD data and cross references.

Needing something to help me make things look presentable – I decided to try the Bulma CSS framework and my impression is that it is a modern, CSS-only, framework that someone can quickly wrap their head around. I only made a few tweaks, and still need to pare down its build, but it was great for this project and is something to consider before reflexively reaching for Bootstrap.

While GitHub Pages has been my recent go-to for static hosting, I really wanted to play with Cloudflare Worker Sites, which hosts your content, and allows you to tinker with each request/response at the edge. My goal is to add more products – and move the filtering/search logic from the client to the edge.

* [workers.cloudflare.com](https://workers.cloudflare.com/) 
* [mozilla.github.io/nunjucks/](https://mozilla.github.io/nunjucks/)
* [bulma.io](https://bulma.io/)
