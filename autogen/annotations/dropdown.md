---
title: The @Dropdown Annotation
description: Documentation on the @Dropdown annotation.
---

<script setup>
import ViewGithub from '../../components/ViewGithub.vue'
</script>

# The @Dropdown Annotation

<ViewGithub url="https://github.com/isXander/YetAnotherConfigLib/blob/1.20.x/dev/common/src/main/java/dev/isxander/yacl3/config/v2/api/autogen/Dropdown.java" />

The `@Dropdown` annotation is an option factory that creates a regular option with a `DropdownStringControllerBuilder` controller.

## Usage

```java
@AutoGen(...)
@Dropdown(values = {
    "option1",
    "option2",
    "option3"
})
public String myOption = "option1";
```

## `values`

The `values` property is used to set the allowed values. It is an array of strings, where each string is a value in the dropdown.

## `allowEmptyValue`

The `allowEmptyValue` property is used to set whether to allow the empty string as a valid value if it does not already appear in `values`. If it already appears there, the value of this does not apply. By default, this property is set to false.

## `allowAnyValue`

The `allowAnyValue` property is used to set whether to allow any string as a valid value. The list of strings supplied in `values` are only used as dropdown suggestions. Empty strings are still prohibited unless the empty string appears in `values` or `allowEmptyValue`. By default, this property is set to false.