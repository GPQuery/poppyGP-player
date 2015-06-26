# `src/app/components/iframe`

This directory contains HTML partials for `iframe` elements.

At a later date, this method will be replaced by passing the `src` URL string as a variable through a filter that returns `$sce.trustAsResourceUrl()`.

For now, the partials are omitted, but they all look something like the examples below.

**UStream Video Embed**

```html
<!--  video.html  -->
<iframe class="video-frame"
        src="http://ustream.tv/embed/12345678?wmode=direct&showtitle=false" 
        frameborder="no">  
</iframe>
```

**Kiwi IRC Chat Embed**
```html
<iframe class="chat-frame"
        src="https://kiwiirc.com/client/irc.snoonet.org/?nick=poppygp|?&theme=mini#f1"
        frameborder="no">
</iframe>
```

A dedicated stylesheet `iframe.scss` can be found in this directory.