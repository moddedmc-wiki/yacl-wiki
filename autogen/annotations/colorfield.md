---
title: The @ColorField Annotation
description: Documentation on the @ColorField annotation.
---

<script setup>
import ViewGithub from '../../components/ViewGithub.vue'
</script>

# The @ColorField Annotation

<ViewGithub url="https://github.com/isXander/YetAnotherConfigLib/blob/1.20.x/dev/common/src/main/java/dev/isxander/yacl3/config/v2/api/autogen/ColorField.java" />

![color field preview](./_assets/colorfield.png)

The `@ColorField` annotation is an option factory that creates a regular option with a `ColorControllerBuilder` controller.

## Usage

```java
@ColorField(allowAlpha = true)
public Color myColorOption = Color.RED;
```

## Properties

### `allowAlpha`

The `allowAlpha` property determines whether to show/allow the alpha channel in the color field. By default, this property is set to false.