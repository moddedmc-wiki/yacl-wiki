<!-- package dev.isxander.yacl3.config.v2.api.autogen;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * An option factory.
 * <p>
 * This creates a regular option with a
 * {@link dev.isxander.yacl3.api.controller.TickBoxControllerBuilder} controller.
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface TickBox {
} -->

---
title: The @TickBox Annotation
description: Documentation on the @TickBox annotation.
---

<script setup>
import ViewGithub from '../../components/ViewGithub.vue'
</script>

# The @TickBox Annotation

<ViewGithub url="https://github.com/isXander/YetAnotherConfigLib/blob/1.20.x/dev/common/src/main/java/dev/isxander/yacl3/config/v2/api/autogen/TickBox.java" />

![tick box preview](./_assets/tickbox.png)

The `@TickBox` annotation creates an option with a `TickBoxControllerBuilder` controller.

## Usage

```java
@AutoGen(...)
@TickBox
public boolean myBooleanOption = true;
```