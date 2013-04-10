---
layout: post
title: "python升级引发yum不可用的问题"
description: ""
tags: []
---
{% include JB/setup %}

今天安装storm的时候踩到一坑：我们打算使用python2.6支持storm，机器里已经安装了python2.4。没有care，源码安完python2.6就执行  
    sudo cp /usr/local/bin/python /usr/bin/python  
接着偶然使用yum的时候，发现yum使用不了了。。。
![error](/img/1.jpg)


