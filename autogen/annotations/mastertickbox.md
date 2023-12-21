---
title: The @MasterTickBox Annotation
description: Documentation on the @MasterTickBox annotation.
---

<script setup>
import ViewGithub from '../../components/ViewGithub.vue'
</script>

# The @MasterTickBox Annotation

<ViewGithub url="https://github.com/isXander/YetAnotherConfigLib/blob/1.20.x/dev/common/src/main/java/dev/isxander/yacl3/config/v2/api/autogen/MasterTickBox.java" />

The `@MasterTickBox` annotation is used to create a tickbox that controls the availability of other options.

## Usage

```java
@AutoGen(...)
@MasterTickBox(value = {
    "myOption1",
    "myOption2"
}, invert = true)
public boolean myMasterTickbox = true;

// When myMasterTickbox is set to 'true', myOption1 and myOption2 are disabled.
@AutoGen(...)
@SomeController(...)
public boolean myOption1 = true;

@AutoGen(...)
@SomeController(...)
public boolean myOption2 = true;
```

## `value`

The `value` property is used to set the names of the fields with `@AutoGen` annotation to control the availability of.

## `invert`

The `invert` property is used to set whether having the tickbox disabled should enable the options rather than disable.