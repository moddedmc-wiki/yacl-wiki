---
title: The @FloatField Annotation
description: Documentation on the @FloatField annotation.
---

<script setup>
import ViewGithub from '../../components/ViewGithub.vue'
</script>

# The @FloatField Annotation

<ViewGithub url="https://github.com/isXander/YetAnotherConfigLib/blob/1.20.x/dev/common/src/main/java/dev/isxander/yacl3/config/v2/api/autogen/FloatField.java" />

The `@FloatField` annotation is an option factory that creates a regular option with a `FloatFieldControllerBuilder` controller.

## Usage

```java
@AutoGen(...)
@FloatField(min = 0, max = 1, format = "%.2f")
public float myFloatOption = 0.5f;
```

## `min`

The `min` property is used to set the minimum value of the field. If a user enters a value less than this, it will be clamped to this value.

If this is set to `-Float.MAX_VALUE`, there will be no minimum.

If the current value is at this minimum, if available, the translation key `yacl3.config.{CONFIG_ID}.{FIELD_NAME}.fmt.min` will be used.

The default value is `-Float.MAX_VALUE`.

## `max`

The `max` property is used to set the maximum value of the field. If a user enters a value more than this, it will be clamped to this value.

If this is set to `Float.MAX_VALUE`, there will be no maximum.

If the current value is at this maximum, if available, the translation key `yacl3.config.{CONFIG_ID}.{FIELD_NAME}.fmt.max` will be used.

The default value is `Float.MAX_VALUE`.

## `format`

The `format` property is used to set the format used to display the float. This is the syntax used in `String#format(String, Object...)`.

The default value is `%.2f`, meaning that the float will be displayed with 2 decimal places.