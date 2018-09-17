---
layout: post
title:  "JavaScript on the Edge"
date:   2018-03-11 19:28:00 -0500
categories: technology
excerpt_separator: <!--more-->
---

Technology

When it comes to serving content quickly, network "edge" cache servers can be invaluable - at least when a website's visitor are located around the world and the site's servers are in Michigan! Not until recently however was there an option to deploy custom JS code on these servers. 

<!--more-->

Cloudflare's workers and Amazon's Lambda@Edge have great potential to speed performance. Loads can shift from the origin to the edge, and also, from the client to the edge. In the latter case, one goal could be to reduce the number of render blocking activities taking place in the browser. For example - checking to see if alternate content needs to be applied for an A/B test. 

> TL;DR: You'll soon be able to deploy JavaScript to Cloudflare's edge, written against an API similar to Service Workers.

@see
* [Cloudflare's Announcement](https://blog.cloudflare.com/introducing-cloudflare-workers/)
* [Hacker News Discussion](https://news.ycombinator.com/item?id=15364896)
* [AWS Lambda@Edge](https://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html)
* [Akamai Cloudlet Applications](https://www.akamai.com/us/en/products/web-performance/cloudlets/)
