Yes, it is a common practice to use a parent container with `position: relative;` and an inner element with `position: absolute;` to achieve specific positioning effects in CSS.

By setting the parent container to `position: relative;`, you establish it as the positioned ancestor for the child elements within it. This means that any child element with `position: absolute;` will be positioned relative to the boundaries of the parent container.

Using this technique, you can precisely control the position of the absolutely positioned element within the parent container. The child element's positioning is based on the `top`, `right`, `bottom`, and `left` properties, which determine its distance from the edges of the parent container.

Here's an example:

```html
<style>
  .parent {
    position: relative;
    width: 300px;
    height: 200px;
    border: 1px solid black;
  }

  .child {
    position: absolute;
    top: 50px;
    left: 50px;
    width: 100px;
    height: 100px;
    background-color: red;
  }
</style>

<div class="parent">
  <div class="child"></div>
</div>
```

In this example, the parent container has a width of 300 pixels and a height of 200 pixels, represented by the black border. The child element is positioned 50 pixels from the top and 50 pixels from the left of the parent container. It has a width and height of 100 pixels and is represented by the red background color.

By adjusting the `top`, `right`, `bottom`, and `left` values of the absolutely positioned element, you can move it within the boundaries of the parent container as desired.