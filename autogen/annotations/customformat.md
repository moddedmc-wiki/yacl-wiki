---
title: The @CustomFormat Annotation
description: Documentation on the @CustomFormat annotation.
---

<script setup>
import ViewGithub from '../../components/ViewGithub.vue'
</script>

# The @CustomFormat Annotation

<ViewGithub url="https://github.com/isXander/YetAnotherConfigLib/blob/1.20.x/dev/common/src/main/java/dev/isxander/yacl3/config/v2/api/autogen/CustomFormat.java" />

The `@CustomFormat` annotation is used to set a custom formatter for an option.

## Usage

```java
@AutoGen(...)
@CustomFormat((boolean value) -> Text.of(value... /* stuff */))
@SomeController(...)
public boolean myOption = true;
```

## `value`

The `value` property is used to set the formatter. It is a class or lambda function that implements or satisfies the {@link ValueFormatter} interface, where the generic type is the type of the field.