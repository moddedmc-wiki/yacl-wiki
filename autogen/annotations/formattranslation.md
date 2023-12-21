---
title: The @FormatTranslation Annotation
description: Documentation on the @FormatTranslation annotation.
---

<script setup>
import ViewGithub from '../../components/ViewGithub.vue'
</script>

# The @FormatTranslation Annotation

<ViewGithub url="https://github.com/isXander/YetAnotherConfigLib/blob/1.20.x/dev/common/src/main/java/dev/isxander/yacl3/config/v2/api/autogen/FormatTranslation.java" />

The `@FormatTranslation` annotation is used to set a custom value formatter for an option.

## Usage

```java
@AutoGen(...)
// %s will be substituted with the field's value.
@FormatTranslation("mymod.config.field.custom.%s")
@SomeController(...)
public T someFieldWithLimitedValues = ...;
```

## `value`

The `value` property is used to set the formatter. It is a translation key, where `%s` will be substituted with the field's value, using `Object#toString()`.

So if the field value is let's say an integer `5`, the translation key `mymod.config.field.custom.%s` will be resolved to `mymod.config.field.custom.5`.