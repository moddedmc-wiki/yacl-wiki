---
title: The @CustomDescription Annotation
description: Documentation on the @CustomDescription annotation.
---

<script setup>
import ViewGithub from '../../components/ViewGithub.vue'
</script>

# The @CustomDescription Annotation

<ViewGithub url="https://github.com/isXander/YetAnotherConfigLib/blob/1.20.x/dev/common/src/main/java/dev/isxander/yacl3/config/v2/api/autogen/CustomDescription.java" />

The `@CustomDescription` annotation is used to set a custom description for an option.

## Usage

```java
@AutoGen(...)
@CustomDescription({
    "custom.translation.line1",
    "custom.translation.line2"
})
@SomeController(...)
public boolean myOption = true;
```

## `value`

The `value` property is used to set the description. It is an array of strings, where each string is a line in the description, each string is a translation key.
