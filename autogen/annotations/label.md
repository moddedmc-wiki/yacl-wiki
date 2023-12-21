---
title: The @Label Annotation
description: Documentation on the @Label annotation.
---

<script setup>
import ViewGithub from '../../components/ViewGithub.vue'
</script>

# The @Label Annotation

<ViewGithub url="https://github.com/isXander/YetAnotherConfigLib/blob/1.20.x/dev/common/src/main/java/dev/isxander/yacl3/config/v2/api/autogen/Label.java" />

The `@Label` annotation creates a LabelOption from a text field.

## Usage

```java
@Label
private final Component/Text label = Text/Component.of("My Label");
```