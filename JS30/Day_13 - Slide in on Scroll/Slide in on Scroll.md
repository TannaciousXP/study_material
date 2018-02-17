# Slide in on Scroll

Whenever you are working with scolling, remeber to use a debounce function

```
This will give us the bottom of the scroll height;
const slideInAt = (window.scrollY + window.innerHeight);

This will give us the point where the image at half way will be
const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
```

offsetTop - gives us the pixel count from the top of the page to the top of the element