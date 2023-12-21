---
title: The @IntField Annotation
description: Documentation on the @IntField annotation.
---

<script setup>
import ViewGithub from '../../components/ViewGithub.vue'
</script>

# The @IntField Annotation

<ViewGithub url="https://github.com/isXander/YetAnotherConfigLib/blob/1.20.x/dev/common/src/main/java/dev/isxander/yacl3/config/v2/api/autogen/IntField.java" />

The `@IntField` annotation creates an option with a `IntegerFieldControllerBuilder` controller.

## Usage

```java
@AutoGen(...)
@IntField(min = 0, max = 10)
public int myIntOption = 5;
```

## `min`

The `min` property is used to set the minimum value of the field. If a user enters a value less than this, it will be clamped to this value.

If this is set to `Integer.MIN_VALUE`, there will be no minimum.

If the current value is at this minimum, if available, the translation key `yacl3.config.{CONFIG_ID}.{FIELD_NAME}.fmt.min` will be used.

The default value is `Integer.MIN_VALUE`.

## `max`

The `max` property is used to set the maximum value of the field. If a user enters a value more than this, it will be clamped to this value.

If this is set to `Integer.MAX_VALUE`, there will be no maximum.

If the current value is at this maximum, if available, the translation key `yacl3.config.{CONFIG_ID}.{FIELD_NAME}.fmt.max` will be used.

The default value is `Integer.MAX_VALUE`.

## `format`

The `format` property is used to set the format used to display the integer. This is the syntax used in `String#format(String, Object...)`.

The default value is `%.0f`, meaning that the integer will be displayed with no decimal places.