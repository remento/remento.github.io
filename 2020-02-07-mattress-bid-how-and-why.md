---
layout: post
title:  "rr: Mattress.bid - How & Why"
date:   2015-08-27 12:00:00 -0500
categories: update
excerpt_separator: <!--more-->
---

I created small product/referal website recently called mattress.bid. While I don’t have any immediate expectations of dominating online mattress sales, my goal was to create an almost real website that allows me to play around with a few new technologies I have been curious about. On my to do list was CloudFlare Workers, Nunjucks templates, Bulma CSS, and a deeper dive into structured data/JSON-LD. Being only a short, time bound project, I had to balance the time spent on each area above if I was to emerge with something resembling a functional site. 

<!--more-->

Unlike this site, which is statically generated using Jekyll, given the data driven nature of the pages and my desire tinker, I opted to go for more control and build the static site out using Node JS, Gulp, and Mozilla’s Nunjucks JS templating framework. The site data is maintained in an Excel sheet which is then processed to generate all the product pages on the site. The completed product pages include valid JSON-LD data and cross references. 

Needing something to help me make things look presentable – I decided to try the Bulma CSS framework and my impression is that it is a modern, CSS-only, framework that you can quickly wrap your head around. I only made a few tweaks, and still need to pare down its build, but it was great for this project and is something to consider before reflexively reaching for Bootstrap. 

While GitHub Pages is my normal go-to for static hosting, I really wanted to play with Cloudflare Worker Sites, which hosts your content, and allows you to tinker with the responses, all at the edge! My goal is to add more products – and move the filtering/search logic from the client to the edge. 

* [https://www.mattress.bid](https://www.mattress.bid)
* [https://workers.cloudflare.com/](https://workers.cloudflare.com/) 
* [https://mozilla.github.io/nunjucks/](https://mozilla.github.io/nunjucks/)
* [https://bulma.io/](https://bulma.io/)
