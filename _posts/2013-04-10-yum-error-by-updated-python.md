---
layout: post
title: "python升级引发yum不可用的问题"
description: ""
tags: []
---
{% include JB/setup %}

今天安装storm的时候踩到一坑：我们打算使用python2.6支持storm，机器里已经安装了python2.4。没有care，源码安完python2.6就执行  
  
    `sudo cp /usr/local/bin/python /usr/bin/python`  
接着发现yum使用不了了。。。  
![error](/img/1.jpg)  
  
    `cat /usr/bin/yum`  
![error](/img/4.jpg)  
原因找到：yum依赖的 /usr/bin/python 因为我的那条命令把之前低版本的python替换成了2.6的了。  
  
    ls -l /usr/bin/python*  
![error](/img/3.jpg)  
这里的/usr/bin/python就是2.6的了，yum需要的是/usr/bin/python/2.4，于是我尝试修改/user/bin/yum和/usr/sbin/yum-updatesd，将其对python的依赖手动修改为2.4版本，再试了下果然就ok了。  
  
![error](/img/2.jpg)  
![error](/img/5.jpg)  
  
    sudo /usr/sbin/yum-updatesd restart  
![error](/img/6.jpg)  




