---
title: The @StringField Annotation
description: Documentation on the @StringField annotation.
---

<script setup>
import ViewGithub from '../../components/ViewGithub.vue'
</script>

# The @StringField Annotation

<ViewGithub url="https://github.com/isXander/YetAnotherConfigLib/blob/1.20.x/dev/common/src/main/java/dev/isxander/yacl3/config/v2/api/autogen/StringField.java" />

![string field preview](./_assets/stringfield.png)

The `@StringField` annotation creates an option with a `StringControllerBuilder` controller.

## Usage

```java
@AutoGen(...)
@StringField
public String myStringOption = "Hello World!";
```