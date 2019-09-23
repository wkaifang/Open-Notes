# jQuery入门

## $(document).ready()

```javascript
$(document).ready(function() {
  // body...
});
```

```javascript
$(function() {
  // body...
});
```

## jQuery.noConflict();

```javascript
jQuery.noConflict();

jQuery(document).ready(function($) {
  // body...
});
```

```javascript
jQuery.noConflict();

jQuery(function($) {
  // body...
});
```