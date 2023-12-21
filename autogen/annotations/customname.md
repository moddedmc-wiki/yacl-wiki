---
title: The @CustomName Annotation
description: Documentation on the @CustomName annotation.
---

<script setup>
import ViewGithub from '../../components/ViewGithub.vue'
</script>

# The @CustomName Annotation

<ViewGithub url="https://github.com/isXander/YetAnotherConfigLib/blob/1.20.x/dev/common/src/main/java/dev/isxander/yacl3/config/v2/api/autogen/CustomName.java" />

The `@CustomName` annotation is used to override an option's name (the translation key).

## Usage

```java
@AutoGen(...)
@CustomName("custom.translation.key")
@SomeController(...)
public boolean myOption = true;
```

## `value`

The `value` property is used to set the name. It is a translation key.