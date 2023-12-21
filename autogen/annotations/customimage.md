---
title: The @CustomImage Annotation
description: Documentation on the @CustomImage annotation.
---

<script setup>
import ViewGithub from '../../components/ViewGithub.vue'
</script>

# The @CustomImage Annotation

<ViewGithub url="https://github.com/isXander/YetAnotherConfigLib/blob/1.20.x/dev/common/src/main/java/dev/isxander/yacl3/config/v2/api/autogen/CustomImage.java" />

The `@CustomImage` annotation is used to set a custom image for an option's description panel.

This annotation is <ins>**optional**</ins>, you can just place an image in the resource path `{CONFIG_ID_NAMESPACE}:textures/yacl3/{CONFIG_ID_PATH}/{FIELD_NAME}.webp` and it will be used.

## Usage

```java
@AutoGen(...)
@CustomImage(value = "textures/config/value.webp")
@SomeController(...)
public boolean myOption = true;
```

## `value`

The `value` property is used to set the image. It is a **resource path** to the image.

::: danger
It's highly discouraged to use `.gif` images due to their large file size. We recommend using `.webp` images, which support animations as well.

You can convert your `.gif` images to `.webp` using [this tool by ezgif.com](https://ezgif.com/gif-to-webp).
:::

The following file formats are supported:

- `.png`
- `.webp`
- `.jpg`, `.jpeg`
- `.gif`

## `width`

::: info
This is only required when using a PNG with `CustomImage#value`.
:::

The `width` property is used to set the width of the image, in pixels.

## `height`

::: info
This is only required when using a PNG with `CustomImage#value`.
:::

The `height` property is used to set the height of the image, in pixels.

## `factory`

The `factory` property is used to set a custom factory to create the image with.

This is only useful if you want to load an image that isn't natively supported by YACL3, or if you want to create an image that is more advanced than just a static image.

The factory should contain a public, no-args constructor that will be invoked via reflection.